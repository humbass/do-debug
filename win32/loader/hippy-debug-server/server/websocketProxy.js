const { Server: WebSocketServer } = require('ws')
const { timerLogger, verboseInfo } = require('../utils')

let serverSocket

let androidClientSocket = {}
let chromeSocket

// eslint-disable-next-line no-underscore-dangle
global.__DEBUGGER_CONNECTED__ = false

function sendMsgTo(dest, message) {
  if (!dest) {
    return
  }
  try {
    dest.send(message)
  } catch (err) {
    timerLogger.warn(`sendMsgTo ${dest} error:`, err)
  }
}

function startWebsocketProxyServer(server, path) {
  if (serverSocket) {
    timerLogger.warn('server socket is already exist')
    return
  }

  serverSocket = new WebSocketServer({
    server,
    path,
  })

  serverSocket.on('connection', (ws, req) => {
    try {

      if (!ws.upgradeReq) {
        ws.upgradeReq = req
      }

      const url = ws.upgradeReq.url

      timerLogger.info('websocket connected, url = ', url)

      if (url.indexOf('role=chrome') > -1) {
        // url = /debugger-proxy?role=chrome，这里是来自Chrome的debug的链接
        chromeSocket = ws

        chromeSocket.onerror = (err) =>
          timerLogger.error('Error: chrome websocket error : ', err)

        chromeSocket.onclose = () => {
          timerLogger.info('chromeSocket closed')

          const keys = Object.keys(androidClientSocket)
          if (keys.length) {
            keys.forEach((ip) => {
              sendMsgTo(androidClientSocket[ip], 'chromeSocket closed')
            })
          }

          global.__DEBUGGER_CONNECTED__ = false
          chromeSocket = null
          // eslint-disable-next-line no-underscore-dangle
        }

        // eslint-disable-next-line no-underscore-dangle
        global.__DEBUGGER_CONNECTED__ = true

        // 收到chrome的msg就转发给终端
        chromeSocket.onmessage = ({ data }) => {
          const obj = JSON.parse(data)
          if (obj.method) {
            verboseInfo('get chrome msg, method = ', obj.method, data)
          } else {
            verboseInfo('get chrome msg : ', data)
          }

          const keys = Object.keys(androidClientSocket)
          if (keys.length) {
            keys.forEach((ip) => {
              sendMsgTo(androidClientSocket[ip], data)
            })
          } else {
            timerLogger.error(
              'Error: chrome msg received, but androidClient not attached'
            )
          }
        }
      } else if (url.indexOf('role=android_client') > -1) {
        // url = /debugger-proxy?role=android_client，这里是来自于终端的socket链接

        ws.onerror = (err) =>
          timerLogger.error('Error: androidClient websocket error : ', err)

        ws.onclose = () => {
          timerLogger.info('androidClientSocket closed')
          // sendMsgTo(chromeSocket, JSON.stringify({
          //   method: 'client-disconnected',
          // }));
        }

        // 收到终端的msg就转发给chrome
        ws.onmessage = ({ data }) => {
          const obj = JSON.parse(data)
          if (obj.method) {
            verboseInfo('get android msg, method = ', obj.method)
          } else {
            verboseInfo('get android msg : ', data.slice(0, 200))
          }

          if (chromeSocket) {
            sendMsgTo(chromeSocket, data)
          } else {
            timerLogger.error(
              'Error: androidClient msg received, but chrome not attached'
            )
          }
        }

        androidClientSocket[ws._socket.remoteAddress] = ws
      } else {
        timerLogger.error('Error: websocket error, no such server path')
        ws.close(1011, 'Missing role param')
      }
    } catch (e) {
      console.log('e', e)
    }
  })
}

module.exports = {
  startWebsocketProxyServer,
}
