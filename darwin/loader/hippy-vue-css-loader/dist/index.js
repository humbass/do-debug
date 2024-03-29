/*!
 * @hippy/vue-css-loader v2.12.0
 * (Using Vue v2.6.11 and Hippy-Vue v2.12.0)
 * Build at: Thu Jan 20 2022 21:23:53 GMT+0800 (China Standard Time)
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2022 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var crypto = _interopDefault(require('crypto'));
require('path');

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var unicode = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:true});var Space_Separator=exports.Space_Separator=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/;var ID_Start=exports.ID_Start=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/;var ID_Continue=exports.ID_Continue=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
});

unwrapExports(unicode);
var unicode_1 = unicode.Space_Separator;
var unicode_2 = unicode.ID_Start;
var unicode_3 = unicode.ID_Continue;

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,'__esModule',{value:true});exports.isSpaceSeparator=isSpaceSeparator;exports.isIdStartChar=isIdStartChar;exports.isIdContinueChar=isIdContinueChar;exports.isDigit=isDigit;exports.isHexDigit=isHexDigit;var unicode$1=_interopRequireWildcard(unicode);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){ newObj[key]=obj[key]; }}}newObj.default=obj;return newObj}}function isSpaceSeparator(c){return unicode$1.Space_Separator.test(c)}function isIdStartChar(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c==='$'||c==='_'||unicode$1.ID_Start.test(c)}function isIdContinueChar(c){return c>='a'&&c<='z'||c>='A'&&c<='Z'||c>='0'&&c<='9'||c==='$'||c==='_'||c==='\u200C'||c==='\u200D'||unicode$1.ID_Continue.test(c)}function isDigit(c){return /[0-9]/.test(c)}function isHexDigit(c){return /[0-9A-Fa-f]/.test(c)}
});

unwrapExports(util);
var util_1 = util.isSpaceSeparator;
var util_2 = util.isIdStartChar;
var util_3 = util.isIdContinueChar;
var util_4 = util.isDigit;
var util_5 = util.isHexDigit;

var parse_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};exports.default=parse;var util$1=_interopRequireWildcard(util);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){ newObj[key]=obj[key]; }}}newObj.default=obj;return newObj}}var source=void 0;var parseState=void 0;var stack=void 0;var pos=void 0;var line=void 0;var column=void 0;var token=void 0;var key=void 0;var root=void 0;function parse(text,reviver){source=String(text);parseState='start';stack=[];pos=0;line=1;column=0;token=undefined;key=undefined;root=undefined;do{token=lex();parseStates[parseState]();}while(token.type!=='eof');if(typeof reviver==='function'){return internalize({'':root},'',reviver)}return root}function internalize(holder,name,reviver){var value=holder[name];if(value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'){for(var _key in value){var replacement=internalize(value,_key,reviver);if(replacement===undefined){delete value[_key];}else {value[_key]=replacement;}}}return reviver.call(holder,name,value)}var lexState=void 0;var buffer=void 0;var doubleQuote=void 0;var _sign=void 0;var c=void 0;function lex(){lexState='default';buffer='';doubleQuote=false;_sign=1;for(;;){c=peek();var _token=lexStates[lexState]();if(_token){return _token}}}function peek(){if(source[pos]){return String.fromCodePoint(source.codePointAt(pos))}}function read(){var c=peek();if(c==='\n'){line++;column=0;}else if(c){column+=c.length;}else {column++;}if(c){pos+=c.length;}return c}var lexStates={default:function _default(){switch(c){case'\t':case'\x0B':case'\f':case' ':case'\xA0':case'\uFEFF':case'\n':case'\r':case'\u2028':case'\u2029':read();return;case'/':read();lexState='comment';return;case undefined:read();return newToken('eof');}if(util$1.isSpaceSeparator(c)){read();return}return lexStates[parseState]()},comment:function comment(){switch(c){case'*':read();lexState='multiLineComment';return;case'/':read();lexState='singleLineComment';return;}throw invalidChar(read())},multiLineComment:function multiLineComment(){switch(c){case'*':read();lexState='multiLineCommentAsterisk';return;case undefined:throw invalidChar(read());}read();},multiLineCommentAsterisk:function multiLineCommentAsterisk(){switch(c){case'*':read();return;case'/':read();lexState='default';return;case undefined:throw invalidChar(read());}read();lexState='multiLineComment';},singleLineComment:function singleLineComment(){switch(c){case'\n':case'\r':case'\u2028':case'\u2029':read();lexState='default';return;case undefined:read();return newToken('eof');}read();},value:function value(){switch(c){case'{':case'[':return newToken('punctuator',read());case'n':read();literal('ull');return newToken('null',null);case't':read();literal('rue');return newToken('boolean',true);case'f':read();literal('alse');return newToken('boolean',false);case'-':case'+':if(read()==='-'){_sign=-1;}lexState='sign';return;case'.':buffer=read();lexState='decimalPointLeading';return;case'0':buffer=read();lexState='zero';return;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':buffer=read();lexState='decimalInteger';return;case'I':read();literal('nfinity');return newToken('numeric',Infinity);case'N':read();literal('aN');return newToken('numeric',NaN);case'"':case'\'':doubleQuote=read()==='"';buffer='';lexState='string';return;}throw invalidChar(read())},identifierNameStartEscape:function identifierNameStartEscape(){if(c!=='u'){throw invalidChar(read())}read();var u=unicodeEscape();switch(u){case'$':case'_':break;default:if(!util$1.isIdStartChar(u)){throw invalidIdentifier()}break;}buffer+=u;lexState='identifierName';},identifierName:function identifierName(){switch(c){case'$':case'_':case'\u200C':case'\u200D':buffer+=read();return;case'\\':read();lexState='identifierNameEscape';return;}if(util$1.isIdContinueChar(c)){buffer+=read();return}return newToken('identifier',buffer)},identifierNameEscape:function identifierNameEscape(){if(c!=='u'){throw invalidChar(read())}read();var u=unicodeEscape();switch(u){case'$':case'_':case'\u200C':case'\u200D':break;default:if(!util$1.isIdContinueChar(u)){throw invalidIdentifier()}break;}buffer+=u;lexState='identifierName';},sign:function sign(){switch(c){case'.':buffer=read();lexState='decimalPointLeading';return;case'0':buffer=read();lexState='zero';return;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':buffer=read();lexState='decimalInteger';return;case'I':read();literal('nfinity');return newToken('numeric',_sign*Infinity);case'N':read();literal('aN');return newToken('numeric',NaN);}throw invalidChar(read())},zero:function zero(){switch(c){case'.':buffer+=read();lexState='decimalPoint';return;case'e':case'E':buffer+=read();lexState='decimalExponent';return;case'x':case'X':buffer+=read();lexState='hexadecimal';return;}return newToken('numeric',_sign*0)},decimalInteger:function decimalInteger(){switch(c){case'.':buffer+=read();lexState='decimalPoint';return;case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util$1.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},decimalPointLeading:function decimalPointLeading(){if(util$1.isDigit(c)){buffer+=read();lexState='decimalFraction';return}throw invalidChar(read())},decimalPoint:function decimalPoint(){switch(c){case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util$1.isDigit(c)){buffer+=read();lexState='decimalFraction';return}return newToken('numeric',_sign*Number(buffer))},decimalFraction:function decimalFraction(){switch(c){case'e':case'E':buffer+=read();lexState='decimalExponent';return;}if(util$1.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},decimalExponent:function decimalExponent(){switch(c){case'+':case'-':buffer+=read();lexState='decimalExponentSign';return;}if(util$1.isDigit(c)){buffer+=read();lexState='decimalExponentInteger';return}throw invalidChar(read())},decimalExponentSign:function decimalExponentSign(){if(util$1.isDigit(c)){buffer+=read();lexState='decimalExponentInteger';return}throw invalidChar(read())},decimalExponentInteger:function decimalExponentInteger(){if(util$1.isDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},hexadecimal:function hexadecimal(){if(util$1.isHexDigit(c)){buffer+=read();lexState='hexadecimalInteger';return}throw invalidChar(read())},hexadecimalInteger:function hexadecimalInteger(){if(util$1.isHexDigit(c)){buffer+=read();return}return newToken('numeric',_sign*Number(buffer))},string:function string(){switch(c){case'\\':read();buffer+=escape();return;case'"':if(doubleQuote){read();return newToken('string',buffer)}buffer+=read();return;case'\'':if(!doubleQuote){read();return newToken('string',buffer)}buffer+=read();return;case'\n':case'\r':throw invalidChar(read());case'\u2028':case'\u2029':separatorChar(c);break;case undefined:throw invalidChar(read());}buffer+=read();},start:function start(){switch(c){case'{':case'[':return newToken('punctuator',read());}lexState='value';},beforePropertyName:function beforePropertyName(){switch(c){case'$':case'_':buffer=read();lexState='identifierName';return;case'\\':read();lexState='identifierNameStartEscape';return;case'}':return newToken('punctuator',read());case'"':case'\'':doubleQuote=read()==='"';lexState='string';return;}if(util$1.isIdStartChar(c)){buffer+=read();lexState='identifierName';return}throw invalidChar(read())},afterPropertyName:function afterPropertyName(){if(c===':'){return newToken('punctuator',read())}throw invalidChar(read())},beforePropertyValue:function beforePropertyValue(){lexState='value';},afterPropertyValue:function afterPropertyValue(){switch(c){case',':case'}':return newToken('punctuator',read());}throw invalidChar(read())},beforeArrayValue:function beforeArrayValue(){if(c===']'){return newToken('punctuator',read())}lexState='value';},afterArrayValue:function afterArrayValue(){switch(c){case',':case']':return newToken('punctuator',read());}throw invalidChar(read())},end:function end(){throw invalidChar(read())}};function newToken(type,value){return {type:type,value:value,line:line,column:column}}function literal(s){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=s[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _c=_step.value;var p=peek();if(p!==_c){throw invalidChar(read())}read();}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError}}}}function escape(){var c=peek();switch(c){case'b':read();return '\b';case'f':read();return '\f';case'n':read();return '\n';case'r':read();return '\r';case't':read();return '\t';case'v':read();return '\x0B';case'0':read();if(util$1.isDigit(peek())){throw invalidChar(read())}return '\0';case'x':read();return hexEscape();case'u':read();return unicodeEscape();case'\n':case'\u2028':case'\u2029':read();return '';case'\r':read();if(peek()==='\n'){read();}return '';case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':throw invalidChar(read());case undefined:throw invalidChar(read());}return read()}function hexEscape(){var buffer='';var c=peek();if(!util$1.isHexDigit(c)){throw invalidChar(read())}buffer+=read();c=peek();if(!util$1.isHexDigit(c)){throw invalidChar(read())}buffer+=read();return String.fromCodePoint(parseInt(buffer,16))}function unicodeEscape(){var buffer='';var count=4;while(count-->0){var _c2=peek();if(!util$1.isHexDigit(_c2)){throw invalidChar(read())}buffer+=read();}return String.fromCodePoint(parseInt(buffer,16))}var parseStates={start:function start(){if(token.type==='eof'){throw invalidEOF()}push();},beforePropertyName:function beforePropertyName(){switch(token.type){case'identifier':case'string':key=token.value;parseState='afterPropertyName';return;case'punctuator':pop();return;case'eof':throw invalidEOF();}},afterPropertyName:function afterPropertyName(){if(token.type==='eof'){throw invalidEOF()}parseState='beforePropertyValue';},beforePropertyValue:function beforePropertyValue(){if(token.type==='eof'){throw invalidEOF()}push();},beforeArrayValue:function beforeArrayValue(){if(token.type==='eof'){throw invalidEOF()}if(token.type==='punctuator'&&token.value===']'){pop();return}push();},afterPropertyValue:function afterPropertyValue(){if(token.type==='eof'){throw invalidEOF()}switch(token.value){case',':parseState='beforePropertyName';return;case'}':pop();}},afterArrayValue:function afterArrayValue(){if(token.type==='eof'){throw invalidEOF()}switch(token.value){case',':parseState='beforeArrayValue';return;case']':pop();}},end:function end(){}};function push(){var value=void 0;switch(token.type){case'punctuator':switch(token.value){case'{':value={};break;case'[':value=[];break;}break;case'null':case'boolean':case'numeric':case'string':value=token.value;break;}if(root===undefined){root=value;}else {var parent=stack[stack.length-1];if(Array.isArray(parent)){parent.push(value);}else {parent[key]=value;}}if(value!==null&&(typeof value==='undefined'?'undefined':_typeof(value))==='object'){stack.push(value);if(Array.isArray(value)){parseState='beforeArrayValue';}else {parseState='beforePropertyName';}}else {var current=stack[stack.length-1];if(current==null){parseState='end';}else if(Array.isArray(current)){parseState='afterArrayValue';}else {parseState='afterPropertyValue';}}}function pop(){stack.pop();var current=stack[stack.length-1];if(current==null){parseState='end';}else if(Array.isArray(current)){parseState='afterArrayValue';}else {parseState='afterPropertyValue';}}function invalidChar(c){if(c===undefined){return syntaxError('JSON5: invalid end of input at '+line+':'+column)}return syntaxError('JSON5: invalid character \''+formatChar(c)+'\' at '+line+':'+column)}function invalidEOF(){return syntaxError('JSON5: invalid end of input at '+line+':'+column)}function invalidIdentifier(){column-=5;return syntaxError('JSON5: invalid identifier character at '+line+':'+column)}function separatorChar(c){console.warn('JSON5: \''+c+'\' is not valid ECMAScript; consider escaping');}function formatChar(c){var replacements={'\'':'\\\'','"':'\\"','\\':'\\\\','\b':'\\b','\f':'\\f','\n':'\\n','\r':'\\r','\t':'\\t','\x0B':'\\v','\0':'\\0','\u2028':'\\u2028','\u2029':'\\u2029'};if(replacements[c]){return replacements[c]}if(c<' '){var hexString=c.charCodeAt(0).toString(16);return '\\x'+('00'+hexString).substring(hexString.length)}return c}function syntaxError(message){var err=new SyntaxError(message);err.lineNumber=line;err.columnNumber=column;return err}module.exports=exports['default'];
});

unwrapExports(parse_1);

var stringify_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,'__esModule',{value:true});var _typeof=typeof Symbol==='function'&&typeof Symbol.iterator==='symbol'?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==='function'&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};exports.default=stringify;var util$1=_interopRequireWildcard(util);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){ newObj[key]=obj[key]; }}}newObj.default=obj;return newObj}}function stringify(value,replacer,space){var stack=[];var indent='';var propertyList=void 0;var replacerFunc=void 0;var gap='';var quote=void 0;if(replacer!=null&&(typeof replacer==='undefined'?'undefined':_typeof(replacer))==='object'&&!Array.isArray(replacer)){space=replacer.space;quote=replacer.quote;replacer=replacer.replacer;}if(typeof replacer==='function'){replacerFunc=replacer;}else if(Array.isArray(replacer)){propertyList=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=replacer[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var v=_step.value;var item=void 0;if(typeof v==='string'){item=v;}else if(typeof v==='number'||v instanceof String||v instanceof Number){item=String(v);}if(item!==undefined&&propertyList.indexOf(item)<0){propertyList.push(item);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError}}}}if(space instanceof Number){space=Number(space);}else if(space instanceof String){space=String(space);}if(typeof space==='number'){if(space>0){space=Math.min(10,Math.floor(space));gap='          '.substr(0,space);}}else if(typeof space==='string'){gap=space.substr(0,10);}return serializeProperty('',{'':value});function serializeProperty(key,holder){var value=holder[key];if(value!=null){if(typeof value.toJSON5==='function'){value=value.toJSON5(key);}else if(typeof value.toJSON==='function'){value=value.toJSON(key);}}if(replacerFunc){value=replacerFunc.call(holder,key,value);}if(value instanceof Number){value=Number(value);}else if(value instanceof String){value=String(value);}else if(value instanceof Boolean){value=value.valueOf();}switch(value){case null:return 'null';case true:return 'true';case false:return 'false';}if(typeof value==='string'){return quoteString(value)}if(typeof value==='number'){return String(value)}if((typeof value==='undefined'?'undefined':_typeof(value))==='object'){return Array.isArray(value)?serializeArray(value):serializeObject(value)}return undefined}function quoteString(value){var quotes={'\'':0.1,'"':0.2};var replacements={'\'':'\\\'','"':'\\"','\\':'\\\\','\b':'\\b','\f':'\\f','\n':'\\n','\r':'\\r','\t':'\\t','\x0B':'\\v','\0':'\\0','\u2028':'\\u2028','\u2029':'\\u2029'};var product='';var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=value[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var c=_step2.value;switch(c){case'\'':case'"':quotes[c]++;product+=c;continue;}if(replacements[c]){product+=replacements[c];continue}if(c<' '){var hexString=c.charCodeAt(0).toString(16);product+='\\x'+('00'+hexString).substring(hexString.length);continue}product+=c;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2}}}var quoteChar=quote||Object.keys(quotes).reduce(function(a,b){return quotes[a]<quotes[b]?a:b});product=product.replace(new RegExp(quoteChar,'g'),replacements[quoteChar]);return quoteChar+product+quoteChar}function serializeObject(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var keys=propertyList||Object.keys(value);var partial=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=keys[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var key=_step3.value;var propertyString=serializeProperty(key,value);if(propertyString!==undefined){var member=serializeKey(key)+':';if(gap!==''){member+=' ';}member+=propertyString;partial.push(member);}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3}}}var final=void 0;if(partial.length===0){final='{}';}else {var properties=void 0;if(gap===''){properties=partial.join(',');final='{'+properties+'}';}else {var separator=',\n'+indent;properties=partial.join(separator);final='{\n'+indent+properties+',\n'+stepback+'}';}}stack.pop();indent=stepback;return final}function serializeKey(key){if(key.length===0){return quoteString(key)}var firstChar=String.fromCodePoint(key.codePointAt(0));if(!util$1.isIdStartChar(firstChar)){return quoteString(key)}for(var i=firstChar.length;i<key.length;i++){if(!util$1.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))){return quoteString(key)}}return key}function serializeArray(value){if(stack.indexOf(value)>=0){throw TypeError('Converting circular structure to JSON5')}stack.push(value);var stepback=indent;indent=indent+gap;var partial=[];for(var i=0;i<value.length;i++){var propertyString=serializeProperty(String(i),value);partial.push(propertyString!==undefined?propertyString:'null');}var final=void 0;if(partial.length===0){final='[]';}else {if(gap===''){var properties=partial.join(',');final='['+properties+']';}else {var separator=',\n'+indent;var _properties=partial.join(separator);final='[\n'+indent+_properties+',\n'+stepback+']';}}stack.pop();indent=stepback;return final}}module.exports=exports['default'];
});

unwrapExports(stringify_1);

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,'__esModule',{value:true});var _parse2=_interopRequireDefault(parse_1);var _stringify2=_interopRequireDefault(stringify_1);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={parse:_parse2.default,stringify:_stringify2.default};module.exports=exports['default'];
});

unwrapExports(lib);

var specialValues = {
  null: null,
  true: true,
  false: false,
};

function parseQuery(query) {
  if (query.substr(0, 1) !== '?') {
    throw new Error(
      "A valid query string passed to parseQuery should begin with '?'"
    );
  }

  query = query.substr(1);

  if (!query) {
    return {};
  }

  if (query.substr(0, 1) === '{' && query.substr(-1) === '}') {
    return lib.parse(query);
  }

  var queryArgs = query.split(/[,&]/g);
  var result = {};

  queryArgs.forEach(function (arg) {
    var idx = arg.indexOf('=');

    if (idx >= 0) {
      var name = arg.substr(0, idx);
      var value = decodeURIComponent(arg.substr(idx + 1));

      if (specialValues.hasOwnProperty(value)) {
        value = specialValues[value];
      }

      if (name.substr(-2) === '[]') {
        name = decodeURIComponent(name.substr(0, name.length - 2));

        if (!Array.isArray(result[name])) {
          result[name] = [];
        }

        result[name].push(value);
      } else {
        name = decodeURIComponent(name);
        result[name] = value;
      }
    } else {
      if (arg.substr(0, 1) === '-') {
        result[decodeURIComponent(arg.substr(1))] = false;
      } else if (arg.substr(0, 1) === '+') {
        result[decodeURIComponent(arg.substr(1))] = true;
      } else {
        result[decodeURIComponent(arg)] = true;
      }
    }
  });

  return result;
}

var parseQuery_1 = parseQuery;

function getOptions(loaderContext) {
  var query = loaderContext.query;

  if (typeof query === 'string' && query !== '') {
    return parseQuery_1(loaderContext.query);
  }

  if (!query || typeof query !== 'object') {
    // Not object-like queries are not supported.
    return null;
  }

  return query;
}

var getOptions_1 = getOptions;

/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */


/************************************** EDITABLE DEFAULTS *****************************************/


  // The default values below must be integers within the stated ranges.

  /*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */
var DP = 20,          // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,             // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,       // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,    // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,            // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big.
   * (This limit is not enforced or checked.)
   */
  PE = 21,            // 0 to 1000000


/**************************************************************************************************/


  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',

  // The shared prototype object.
  P = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


/*
 * Create and return a Big constructor.
 *
 */
function _Big_() {

  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) { return n === UNDEFINED ? _Big_() : new Big(n); }

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      parse(x, n);
    }

    /*
     * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
     * points to Object.
     */
    x.constructor = Big;
  }

  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.version = '5.2.2';

  return Big;
}


/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;

  // Minus zero?
  if (n === 0 && 1 / n < 0) { n = '-0'; }
  else if (!NUMERIC.test(n += '')) { throw Error(INVALID + 'number'); }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) { n = n.replace('.', ''); }

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {

    // Determine exponent.
    if (e < 0) { e = i; }
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {

    // Integer.
    e = n.length;
  }

  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) { ++i; }

  if (i == nl) {

    // Zero.
    x.c = [x.e = 0];
  } else {

    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';){ }
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) { x.c[e++] = +n.charAt(i++); }
  }

  return x;
}


/*
 * Round Big x to a maximum of dp decimal places using rounding mode rm.
 * Called by stringify, P.div, P.round and P.sqrt.
 *
 * x {Big} The Big to round.
 * dp {number} Integer, 0 to MAX_DP inclusive.
 * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, dp, rm, more) {
  var xc = x.c,
    i = x.e + dp + 1;

  if (i < xc.length) {
    if (rm === 1) {

      // xc[i] is the digit after the digit that may be rounded up.
      more = xc[i] >= 5;
    } else if (rm === 2) {
      more = xc[i] > 5 || xc[i] == 5 &&
        (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
    } else if (rm === 3) {
      more = more || !!xc[0];
    } else {
      more = false;
      if (rm !== 0) { throw Error(INVALID_RM); }
    }

    if (i < 1) {
      xc.length = 1;

      if (more) {

        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        x.e = -dp;
        xc[0] = 1;
      } else {

        // Zero.
        xc[0] = x.e = 0;
      }
    } else {

      // Remove any digits after the required decimal places.
      xc.length = i--;

      // Round up?
      if (more) {

        // Rounding up may mean the previous digit has to be rounded up.
        for (; ++xc[i] > 9;) {
          xc[i] = 0;
          if (!i--) {
            ++x.e;
            xc.unshift(1);
          }
        }
      }

      // Remove trailing zeros.
      for (i = xc.length; !xc[--i];) { xc.pop(); }
    }
  } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
    throw Error(INVALID_RM);
  }

  return x;
}


/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 *
 * x {Big}
 * id? {number} Caller id.
 *         1 toExponential
 *         2 toFixed
 *         3 toPrecision
 *         4 valueOf
 * n? {number|undefined} Caller's argument.
 * k? {number|undefined}
 */
function stringify(x, id, n, k) {
  var e, s,
    Big = x.constructor,
    z = !x.c[0];

  if (n !== UNDEFINED) {
    if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
      throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
    }

    x = new Big(x);

    // The index of the digit that may be rounded up.
    n = k - x.e;

    // Round?
    if (x.c.length > ++k) { round(x, n, Big.RM); }

    // toFixed: recalculate k as x.e may have changed if value rounded up.
    if (id == 2) { k = x.e + n + 1; }

    // Append zeros?
    for (; x.c.length < k;) { x.c.push(0); }
  }

  e = x.e;
  s = x.c.join('');
  n = s.length;

  // Exponential notation?
  if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

  // Normal notation.
  } else if (e < 0) {
    for (; ++e;) { s = '0' + s; }
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) { for (e -= n; e--;) { s += '0'; } }
    else if (e < n) { s = s.slice(0, e) + '.' + s.slice(e); }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }

  return x.s < 0 && (!z || id == 4) ? '-' + s : s;
}


// Prototype/instance methods


/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};


/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
*/
P.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) { return !xc[0] ? !yc[0] ? 0 : -j : i; }

  // Signs differ?
  if (i != j) { return i; }

  isneg = i < 0;

  // Compare exponents.
  if (k != l) { return k > l ^ isneg ? 1 : -1; }

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) { return xc[i] > yc[i] ^ isneg ? 1 : -1; }
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};


/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,                  // dividend
    b = (y = new Big(y)).c,   // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;

  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) { throw Error(INVALID_DP); }

  // Divisor is zero?
  if (!b[0]) { throw Error(DIV_BY_ZERO); }

  // Dividend is 0? Return +-0.
  if (!a[0]) { return new Big(k * 0); }

  var bl, bt, n, cmp, ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),   // remainder
    rl = r.length,
    q = y,                // quotient
    qc = q.c = [],
    qi = 0,
    d = dp + (q.e = x.e - y.e) + 1;    // number of digits of the result

  q.s = k;
  k = d < 0 ? 0 : d;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) { r.push(0); }

  do {

    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {

      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {

        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) { r[ri] = 9; }
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }

        for (; !r[0];) { r.shift(); }
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) { r[rl] = a[ai] || 0; }
    else { r = [a[ai]]; }

  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {

    // There can't be more than one zero.
    qc.shift();
    q.e--;
  }

  // Round?
  if (qi > d) { round(q, dp, Big.RM, r[0] !== UNDEFINED); }

  return q;
};


/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
  return !this.cmp(y);
};


/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
  return this.cmp(y) > 0;
};


/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
  return this.cmp(y) > -1;
};


/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
  return this.cmp(y) < 0;
};


/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
  return this.cmp(y) < 1;
};


/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
  var i, j, t, xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }

  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {

    // y is non-zero? x is non-zero? Or both are zero.
    return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {

    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }

    t.reverse();
    for (b = a; b--;) { t.push(0); }
    t.reverse();
  } else {

    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;

    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) { for (; b--;) { xc[i++] = 0; } }

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) { xc[i] = 9; }
      --xc[i];
      xc[j] += 10;
    }

    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) { xc.pop(); }

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }

  if (!xc[0]) {

    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  if (!y.c[0]) { throw Error(DIV_BY_ZERO); }

  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;

  if (ygtx) { return new Big(x); }

  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;

  return this.minus(x.times(y));
};


/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
  var t,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.minus(y);
  }

  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero? y is non-zero? x is non-zero? Or both are zero.
  if (!xc[0] || !yc[0]) { return yc[0] ? y : new Big(xc[0] ? x : a * 0); }

  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (a = xe - ye) {
    if (a > 0) {
      ye = xe;
      t = yc;
    } else {
      a = -a;
      t = xc;
    }

    t.reverse();
    for (; a--;) { t.push(0); }
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }

  a = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (b = 0; a; xc[a] %= 10) { b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0; }

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (b) {
    xc.unshift(b);
    ++ye;
  }

  // Remove trailing zeros.
  for (a = xc.length; xc[--a] === 0;) { xc.pop(); }

  y.c = xc;
  y.e = ye;

  return y;
};


/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
  var x = this,
    one = new x.constructor(1),
    y = one,
    isneg = n < 0;

  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) { throw Error(INVALID + 'exponent'); }
  if (isneg) { n = -n; }

  for (;;) {
    if (n & 1) { y = y.times(x); }
    n >>= 1;
    if (!n) { break; }
    x = x.times(x);
  }

  return isneg ? one.div(y) : y;
};


/*
 * Return a new Big whose value is the value of this Big rounded using rounding mode rm
 * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
 * multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 * If rm is not specified, use Big.RM.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
 */
P.round = function (dp, rm) {
  var Big = this.constructor;
  if (dp === UNDEFINED) { dp = 0; }
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) { throw Error(INVALID_DP); }
  return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
};


/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
  var r, c, t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big(0.5);

  // Zero?
  if (!x.c[0]) { return new Big(x); }

  // Negative?
  if (s < 0) { throw Error(NAME + 'No square root'); }

  // Estimate.
  s = Math.sqrt(x + '');

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) { c += '0'; }
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s);
  }

  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

  return round(r, Big.DP -= 4, Big.RM);
};


/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) { return new Big(y.s * 0); }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) { c[j] = 0; }

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {

      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }

    c[j] = (c[j] + b) % 10;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) { ++y.e; }
  else { c.shift(); }

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) { c.pop(); }
  y.c = c;

  return y;
};


/*
 * Return a string representing the value of this Big in exponential notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 */
P.toExponential = function (dp) {
  return stringify(this, 1, dp, dp);
};


/*
 * Return a string representing the value of this Big in normal notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp) {
  return stringify(this, 2, dp, this.e + dp);
};


/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Integer, 1 to MAX_DP inclusive.
 */
P.toPrecision = function (sd) {
  return stringify(this, 3, sd, sd - 1);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toString = function () {
  return stringify(this);
};


/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = P.toJSON = function () {
  return stringify(this, 4);
};


// Export


var Big = _Big_();

var big = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Big: Big,
	'default': Big
});

getCjsExportFromNamespace(big);

var emojisList = [
  "🀄️",
  "🃏",
  "🅰️",
  "🅱️",
  "🅾️",
  "🅿️",
  "🆎",
  "🆑",
  "🆒",
  "🆓",
  "🆔",
  "🆕",
  "🆖",
  "🆗",
  "🆘",
  "🆙",
  "🆚",
  "🇦🇨",
  "🇦🇩",
  "🇦🇪",
  "🇦🇫",
  "🇦🇬",
  "🇦🇮",
  "🇦🇱",
  "🇦🇲",
  "🇦🇴",
  "🇦🇶",
  "🇦🇷",
  "🇦🇸",
  "🇦🇹",
  "🇦🇺",
  "🇦🇼",
  "🇦🇽",
  "🇦🇿",
  "🇦",
  "🇧🇦",
  "🇧🇧",
  "🇧🇩",
  "🇧🇪",
  "🇧🇫",
  "🇧🇬",
  "🇧🇭",
  "🇧🇮",
  "🇧🇯",
  "🇧🇱",
  "🇧🇲",
  "🇧🇳",
  "🇧🇴",
  "🇧🇶",
  "🇧🇷",
  "🇧🇸",
  "🇧🇹",
  "🇧🇻",
  "🇧🇼",
  "🇧🇾",
  "🇧🇿",
  "🇧",
  "🇨🇦",
  "🇨🇨",
  "🇨🇩",
  "🇨🇫",
  "🇨🇬",
  "🇨🇭",
  "🇨🇮",
  "🇨🇰",
  "🇨🇱",
  "🇨🇲",
  "🇨🇳",
  "🇨🇴",
  "🇨🇵",
  "🇨🇷",
  "🇨🇺",
  "🇨🇻",
  "🇨🇼",
  "🇨🇽",
  "🇨🇾",
  "🇨🇿",
  "🇨",
  "🇩🇪",
  "🇩🇬",
  "🇩🇯",
  "🇩🇰",
  "🇩🇲",
  "🇩🇴",
  "🇩🇿",
  "🇩",
  "🇪🇦",
  "🇪🇨",
  "🇪🇪",
  "🇪🇬",
  "🇪🇭",
  "🇪🇷",
  "🇪🇸",
  "🇪🇹",
  "🇪🇺",
  "🇪",
  "🇫🇮",
  "🇫🇯",
  "🇫🇰",
  "🇫🇲",
  "🇫🇴",
  "🇫🇷",
  "🇫",
  "🇬🇦",
  "🇬🇧",
  "🇬🇩",
  "🇬🇪",
  "🇬🇫",
  "🇬🇬",
  "🇬🇭",
  "🇬🇮",
  "🇬🇱",
  "🇬🇲",
  "🇬🇳",
  "🇬🇵",
  "🇬🇶",
  "🇬🇷",
  "🇬🇸",
  "🇬🇹",
  "🇬🇺",
  "🇬🇼",
  "🇬🇾",
  "🇬",
  "🇭🇰",
  "🇭🇲",
  "🇭🇳",
  "🇭🇷",
  "🇭🇹",
  "🇭🇺",
  "🇭",
  "🇮🇨",
  "🇮🇩",
  "🇮🇪",
  "🇮🇱",
  "🇮🇲",
  "🇮🇳",
  "🇮🇴",
  "🇮🇶",
  "🇮🇷",
  "🇮🇸",
  "🇮🇹",
  "🇮",
  "🇯🇪",
  "🇯🇲",
  "🇯🇴",
  "🇯🇵",
  "🇯",
  "🇰🇪",
  "🇰🇬",
  "🇰🇭",
  "🇰🇮",
  "🇰🇲",
  "🇰🇳",
  "🇰🇵",
  "🇰🇷",
  "🇰🇼",
  "🇰🇾",
  "🇰🇿",
  "🇰",
  "🇱🇦",
  "🇱🇧",
  "🇱🇨",
  "🇱🇮",
  "🇱🇰",
  "🇱🇷",
  "🇱🇸",
  "🇱🇹",
  "🇱🇺",
  "🇱🇻",
  "🇱🇾",
  "🇱",
  "🇲🇦",
  "🇲🇨",
  "🇲🇩",
  "🇲🇪",
  "🇲🇫",
  "🇲🇬",
  "🇲🇭",
  "🇲🇰",
  "🇲🇱",
  "🇲🇲",
  "🇲🇳",
  "🇲🇴",
  "🇲🇵",
  "🇲🇶",
  "🇲🇷",
  "🇲🇸",
  "🇲🇹",
  "🇲🇺",
  "🇲🇻",
  "🇲🇼",
  "🇲🇽",
  "🇲🇾",
  "🇲🇿",
  "🇲",
  "🇳🇦",
  "🇳🇨",
  "🇳🇪",
  "🇳🇫",
  "🇳🇬",
  "🇳🇮",
  "🇳🇱",
  "🇳🇴",
  "🇳🇵",
  "🇳🇷",
  "🇳🇺",
  "🇳🇿",
  "🇳",
  "🇴🇲",
  "🇴",
  "🇵🇦",
  "🇵🇪",
  "🇵🇫",
  "🇵🇬",
  "🇵🇭",
  "🇵🇰",
  "🇵🇱",
  "🇵🇲",
  "🇵🇳",
  "🇵🇷",
  "🇵🇸",
  "🇵🇹",
  "🇵🇼",
  "🇵🇾",
  "🇵",
  "🇶🇦",
  "🇶",
  "🇷🇪",
  "🇷🇴",
  "🇷🇸",
  "🇷🇺",
  "🇷🇼",
  "🇷",
  "🇸🇦",
  "🇸🇧",
  "🇸🇨",
  "🇸🇩",
  "🇸🇪",
  "🇸🇬",
  "🇸🇭",
  "🇸🇮",
  "🇸🇯",
  "🇸🇰",
  "🇸🇱",
  "🇸🇲",
  "🇸🇳",
  "🇸🇴",
  "🇸🇷",
  "🇸🇸",
  "🇸🇹",
  "🇸🇻",
  "🇸🇽",
  "🇸🇾",
  "🇸🇿",
  "🇸",
  "🇹🇦",
  "🇹🇨",
  "🇹🇩",
  "🇹🇫",
  "🇹🇬",
  "🇹🇭",
  "🇹🇯",
  "🇹🇰",
  "🇹🇱",
  "🇹🇲",
  "🇹🇳",
  "🇹🇴",
  "🇹🇷",
  "🇹🇹",
  "🇹🇻",
  "🇹🇼",
  "🇹🇿",
  "🇹",
  "🇺🇦",
  "🇺🇬",
  "🇺🇲",
  "🇺🇳",
  "🇺🇸",
  "🇺🇾",
  "🇺🇿",
  "🇺",
  "🇻🇦",
  "🇻🇨",
  "🇻🇪",
  "🇻🇬",
  "🇻🇮",
  "🇻🇳",
  "🇻🇺",
  "🇻",
  "🇼🇫",
  "🇼🇸",
  "🇼",
  "🇽🇰",
  "🇽",
  "🇾🇪",
  "🇾🇹",
  "🇾",
  "🇿🇦",
  "🇿🇲",
  "🇿🇼",
  "🇿",
  "🈁",
  "🈂️",
  "🈚️",
  "🈯️",
  "🈲",
  "🈳",
  "🈴",
  "🈵",
  "🈶",
  "🈷️",
  "🈸",
  "🈹",
  "🈺",
  "🉐",
  "🉑",
  "🌀",
  "🌁",
  "🌂",
  "🌃",
  "🌄",
  "🌅",
  "🌆",
  "🌇",
  "🌈",
  "🌉",
  "🌊",
  "🌋",
  "🌌",
  "🌍",
  "🌎",
  "🌏",
  "🌐",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌙",
  "🌚",
  "🌛",
  "🌜",
  "🌝",
  "🌞",
  "🌟",
  "🌠",
  "🌡️",
  "🌤️",
  "🌥️",
  "🌦️",
  "🌧️",
  "🌨️",
  "🌩️",
  "🌪️",
  "🌫️",
  "🌬️",
  "🌭",
  "🌮",
  "🌯",
  "🌰",
  "🌱",
  "🌲",
  "🌳",
  "🌴",
  "🌵",
  "🌶️",
  "🌷",
  "🌸",
  "🌹",
  "🌺",
  "🌻",
  "🌼",
  "🌽",
  "🌾",
  "🌿",
  "🍀",
  "🍁",
  "🍂",
  "🍃",
  "🍄",
  "🍅",
  "🍆",
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🍔",
  "🍕",
  "🍖",
  "🍗",
  "🍘",
  "🍙",
  "🍚",
  "🍛",
  "🍜",
  "🍝",
  "🍞",
  "🍟",
  "🍠",
  "🍡",
  "🍢",
  "🍣",
  "🍤",
  "🍥",
  "🍦",
  "🍧",
  "🍨",
  "🍩",
  "🍪",
  "🍫",
  "🍬",
  "🍭",
  "🍮",
  "🍯",
  "🍰",
  "🍱",
  "🍲",
  "🍳",
  "🍴",
  "🍵",
  "🍶",
  "🍷",
  "🍸",
  "🍹",
  "🍺",
  "🍻",
  "🍼",
  "🍽️",
  "🍾",
  "🍿",
  "🎀",
  "🎁",
  "🎂",
  "🎃",
  "🎄",
  "🎅🏻",
  "🎅🏼",
  "🎅🏽",
  "🎅🏾",
  "🎅🏿",
  "🎅",
  "🎆",
  "🎇",
  "🎈",
  "🎉",
  "🎊",
  "🎋",
  "🎌",
  "🎍",
  "🎎",
  "🎏",
  "🎐",
  "🎑",
  "🎒",
  "🎓",
  "🎖️",
  "🎗️",
  "🎙️",
  "🎚️",
  "🎛️",
  "🎞️",
  "🎟️",
  "🎠",
  "🎡",
  "🎢",
  "🎣",
  "🎤",
  "🎥",
  "🎦",
  "🎧",
  "🎨",
  "🎩",
  "🎪",
  "🎫",
  "🎬",
  "🎭",
  "🎮",
  "🎯",
  "🎰",
  "🎱",
  "🎲",
  "🎳",
  "🎴",
  "🎵",
  "🎶",
  "🎷",
  "🎸",
  "🎹",
  "🎺",
  "🎻",
  "🎼",
  "🎽",
  "🎾",
  "🎿",
  "🏀",
  "🏁",
  "🏂🏻",
  "🏂🏼",
  "🏂🏽",
  "🏂🏾",
  "🏂🏿",
  "🏂",
  "🏃🏻‍♀️",
  "🏃🏻‍♂️",
  "🏃🏻",
  "🏃🏼‍♀️",
  "🏃🏼‍♂️",
  "🏃🏼",
  "🏃🏽‍♀️",
  "🏃🏽‍♂️",
  "🏃🏽",
  "🏃🏾‍♀️",
  "🏃🏾‍♂️",
  "🏃🏾",
  "🏃🏿‍♀️",
  "🏃🏿‍♂️",
  "🏃🏿",
  "🏃‍♀️",
  "🏃‍♂️",
  "🏃",
  "🏄🏻‍♀️",
  "🏄🏻‍♂️",
  "🏄🏻",
  "🏄🏼‍♀️",
  "🏄🏼‍♂️",
  "🏄🏼",
  "🏄🏽‍♀️",
  "🏄🏽‍♂️",
  "🏄🏽",
  "🏄🏾‍♀️",
  "🏄🏾‍♂️",
  "🏄🏾",
  "🏄🏿‍♀️",
  "🏄🏿‍♂️",
  "🏄🏿",
  "🏄‍♀️",
  "🏄‍♂️",
  "🏄",
  "🏅",
  "🏆",
  "🏇🏻",
  "🏇🏼",
  "🏇🏽",
  "🏇🏾",
  "🏇🏿",
  "🏇",
  "🏈",
  "🏉",
  "🏊🏻‍♀️",
  "🏊🏻‍♂️",
  "🏊🏻",
  "🏊🏼‍♀️",
  "🏊🏼‍♂️",
  "🏊🏼",
  "🏊🏽‍♀️",
  "🏊🏽‍♂️",
  "🏊🏽",
  "🏊🏾‍♀️",
  "🏊🏾‍♂️",
  "🏊🏾",
  "🏊🏿‍♀️",
  "🏊🏿‍♂️",
  "🏊🏿",
  "🏊‍♀️",
  "🏊‍♂️",
  "🏊",
  "🏋🏻‍♀️",
  "🏋🏻‍♂️",
  "🏋🏻",
  "🏋🏼‍♀️",
  "🏋🏼‍♂️",
  "🏋🏼",
  "🏋🏽‍♀️",
  "🏋🏽‍♂️",
  "🏋🏽",
  "🏋🏾‍♀️",
  "🏋🏾‍♂️",
  "🏋🏾",
  "🏋🏿‍♀️",
  "🏋🏿‍♂️",
  "🏋🏿",
  "🏋️‍♀️",
  "🏋️‍♂️",
  "🏋️",
  "🏌🏻‍♀️",
  "🏌🏻‍♂️",
  "🏌🏻",
  "🏌🏼‍♀️",
  "🏌🏼‍♂️",
  "🏌🏼",
  "🏌🏽‍♀️",
  "🏌🏽‍♂️",
  "🏌🏽",
  "🏌🏾‍♀️",
  "🏌🏾‍♂️",
  "🏌🏾",
  "🏌🏿‍♀️",
  "🏌🏿‍♂️",
  "🏌🏿",
  "🏌️‍♀️",
  "🏌️‍♂️",
  "🏌️",
  "🏍️",
  "🏎️",
  "🏏",
  "🏐",
  "🏑",
  "🏒",
  "🏓",
  "🏔️",
  "🏕️",
  "🏖️",
  "🏗️",
  "🏘️",
  "🏙️",
  "🏚️",
  "🏛️",
  "🏜️",
  "🏝️",
  "🏞️",
  "🏟️",
  "🏠",
  "🏡",
  "🏢",
  "🏣",
  "🏤",
  "🏥",
  "🏦",
  "🏧",
  "🏨",
  "🏩",
  "🏪",
  "🏫",
  "🏬",
  "🏭",
  "🏮",
  "🏯",
  "🏰",
  "🏳️‍🌈",
  "🏳️",
  "🏴‍☠️",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  "🏴",
  "🏵️",
  "🏷️",
  "🏸",
  "🏹",
  "🏺",
  "🏻",
  "🏼",
  "🏽",
  "🏾",
  "🏿",
  "🐀",
  "🐁",
  "🐂",
  "🐃",
  "🐄",
  "🐅",
  "🐆",
  "🐇",
  "🐈",
  "🐉",
  "🐊",
  "🐋",
  "🐌",
  "🐍",
  "🐎",
  "🐏",
  "🐐",
  "🐑",
  "🐒",
  "🐓",
  "🐔",
  "🐕‍🦺",
  "🐕",
  "🐖",
  "🐗",
  "🐘",
  "🐙",
  "🐚",
  "🐛",
  "🐜",
  "🐝",
  "🐞",
  "🐟",
  "🐠",
  "🐡",
  "🐢",
  "🐣",
  "🐤",
  "🐥",
  "🐦",
  "🐧",
  "🐨",
  "🐩",
  "🐪",
  "🐫",
  "🐬",
  "🐭",
  "🐮",
  "🐯",
  "🐰",
  "🐱",
  "🐲",
  "🐳",
  "🐴",
  "🐵",
  "🐶",
  "🐷",
  "🐸",
  "🐹",
  "🐺",
  "🐻",
  "🐼",
  "🐽",
  "🐾",
  "🐿️",
  "👀",
  "👁‍🗨",
  "👁️",
  "👂🏻",
  "👂🏼",
  "👂🏽",
  "👂🏾",
  "👂🏿",
  "👂",
  "👃🏻",
  "👃🏼",
  "👃🏽",
  "👃🏾",
  "👃🏿",
  "👃",
  "👄",
  "👅",
  "👆🏻",
  "👆🏼",
  "👆🏽",
  "👆🏾",
  "👆🏿",
  "👆",
  "👇🏻",
  "👇🏼",
  "👇🏽",
  "👇🏾",
  "👇🏿",
  "👇",
  "👈🏻",
  "👈🏼",
  "👈🏽",
  "👈🏾",
  "👈🏿",
  "👈",
  "👉🏻",
  "👉🏼",
  "👉🏽",
  "👉🏾",
  "👉🏿",
  "👉",
  "👊🏻",
  "👊🏼",
  "👊🏽",
  "👊🏾",
  "👊🏿",
  "👊",
  "👋🏻",
  "👋🏼",
  "👋🏽",
  "👋🏾",
  "👋🏿",
  "👋",
  "👌🏻",
  "👌🏼",
  "👌🏽",
  "👌🏾",
  "👌🏿",
  "👌",
  "👍🏻",
  "👍🏼",
  "👍🏽",
  "👍🏾",
  "👍🏿",
  "👍",
  "👎🏻",
  "👎🏼",
  "👎🏽",
  "👎🏾",
  "👎🏿",
  "👎",
  "👏🏻",
  "👏🏼",
  "👏🏽",
  "👏🏾",
  "👏🏿",
  "👏",
  "👐🏻",
  "👐🏼",
  "👐🏽",
  "👐🏾",
  "👐🏿",
  "👐",
  "👑",
  "👒",
  "👓",
  "👔",
  "👕",
  "👖",
  "👗",
  "👘",
  "👙",
  "👚",
  "👛",
  "👜",
  "👝",
  "👞",
  "👟",
  "👠",
  "👡",
  "👢",
  "👣",
  "👤",
  "👥",
  "👦🏻",
  "👦🏼",
  "👦🏽",
  "👦🏾",
  "👦🏿",
  "👦",
  "👧🏻",
  "👧🏼",
  "👧🏽",
  "👧🏾",
  "👧🏿",
  "👧",
  "👨🏻‍🌾",
  "👨🏻‍🍳",
  "👨🏻‍🎓",
  "👨🏻‍🎤",
  "👨🏻‍🎨",
  "👨🏻‍🏫",
  "👨🏻‍🏭",
  "👨🏻‍💻",
  "👨🏻‍💼",
  "👨🏻‍🔧",
  "👨🏻‍🔬",
  "👨🏻‍🚀",
  "👨🏻‍🚒",
  "👨🏻‍🦯",
  "👨🏻‍🦰",
  "👨🏻‍🦱",
  "👨🏻‍🦲",
  "👨🏻‍🦳",
  "👨🏻‍🦼",
  "👨🏻‍🦽",
  "👨🏻‍⚕️",
  "👨🏻‍⚖️",
  "👨🏻‍✈️",
  "👨🏻",
  "👨🏼‍🌾",
  "👨🏼‍🍳",
  "👨🏼‍🎓",
  "👨🏼‍🎤",
  "👨🏼‍🎨",
  "👨🏼‍🏫",
  "👨🏼‍🏭",
  "👨🏼‍💻",
  "👨🏼‍💼",
  "👨🏼‍🔧",
  "👨🏼‍🔬",
  "👨🏼‍🚀",
  "👨🏼‍🚒",
  "👨🏼‍🤝‍👨🏻",
  "👨🏼‍🦯",
  "👨🏼‍🦰",
  "👨🏼‍🦱",
  "👨🏼‍🦲",
  "👨🏼‍🦳",
  "👨🏼‍🦼",
  "👨🏼‍🦽",
  "👨🏼‍⚕️",
  "👨🏼‍⚖️",
  "👨🏼‍✈️",
  "👨🏼",
  "👨🏽‍🌾",
  "👨🏽‍🍳",
  "👨🏽‍🎓",
  "👨🏽‍🎤",
  "👨🏽‍🎨",
  "👨🏽‍🏫",
  "👨🏽‍🏭",
  "👨🏽‍💻",
  "👨🏽‍💼",
  "👨🏽‍🔧",
  "👨🏽‍🔬",
  "👨🏽‍🚀",
  "👨🏽‍🚒",
  "👨🏽‍🤝‍👨🏻",
  "👨🏽‍🤝‍👨🏼",
  "👨🏽‍🦯",
  "👨🏽‍🦰",
  "👨🏽‍🦱",
  "👨🏽‍🦲",
  "👨🏽‍🦳",
  "👨🏽‍🦼",
  "👨🏽‍🦽",
  "👨🏽‍⚕️",
  "👨🏽‍⚖️",
  "👨🏽‍✈️",
  "👨🏽",
  "👨🏾‍🌾",
  "👨🏾‍🍳",
  "👨🏾‍🎓",
  "👨🏾‍🎤",
  "👨🏾‍🎨",
  "👨🏾‍🏫",
  "👨🏾‍🏭",
  "👨🏾‍💻",
  "👨🏾‍💼",
  "👨🏾‍🔧",
  "👨🏾‍🔬",
  "👨🏾‍🚀",
  "👨🏾‍🚒",
  "👨🏾‍🤝‍👨🏻",
  "👨🏾‍🤝‍👨🏼",
  "👨🏾‍🤝‍👨🏽",
  "👨🏾‍🦯",
  "👨🏾‍🦰",
  "👨🏾‍🦱",
  "👨🏾‍🦲",
  "👨🏾‍🦳",
  "👨🏾‍🦼",
  "👨🏾‍🦽",
  "👨🏾‍⚕️",
  "👨🏾‍⚖️",
  "👨🏾‍✈️",
  "👨🏾",
  "👨🏿‍🌾",
  "👨🏿‍🍳",
  "👨🏿‍🎓",
  "👨🏿‍🎤",
  "👨🏿‍🎨",
  "👨🏿‍🏫",
  "👨🏿‍🏭",
  "👨🏿‍💻",
  "👨🏿‍💼",
  "👨🏿‍🔧",
  "👨🏿‍🔬",
  "👨🏿‍🚀",
  "👨🏿‍🚒",
  "👨🏿‍🤝‍👨🏻",
  "👨🏿‍🤝‍👨🏼",
  "👨🏿‍🤝‍👨🏽",
  "👨🏿‍🤝‍👨🏾",
  "👨🏿‍🦯",
  "👨🏿‍🦰",
  "👨🏿‍🦱",
  "👨🏿‍🦲",
  "👨🏿‍🦳",
  "👨🏿‍🦼",
  "👨🏿‍🦽",
  "👨🏿‍⚕️",
  "👨🏿‍⚖️",
  "👨🏿‍✈️",
  "👨🏿",
  "👨‍🌾",
  "👨‍🍳",
  "👨‍🎓",
  "👨‍🎤",
  "👨‍🎨",
  "👨‍🏫",
  "👨‍🏭",
  "👨‍👦‍👦",
  "👨‍👦",
  "👨‍👧‍👦",
  "👨‍👧‍👧",
  "👨‍👧",
  "👨‍👨‍👦‍👦",
  "👨‍👨‍👦",
  "👨‍👨‍👧‍👦",
  "👨‍👨‍👧‍👧",
  "👨‍👨‍👧",
  "👨‍👩‍👦‍👦",
  "👨‍👩‍👦",
  "👨‍👩‍👧‍👦",
  "👨‍👩‍👧‍👧",
  "👨‍👩‍👧",
  "👨‍💻",
  "👨‍💼",
  "👨‍🔧",
  "👨‍🔬",
  "👨‍🚀",
  "👨‍🚒",
  "👨‍🦯",
  "👨‍🦰",
  "👨‍🦱",
  "👨‍🦲",
  "👨‍🦳",
  "👨‍🦼",
  "👨‍🦽",
  "👨‍⚕️",
  "👨‍⚖️",
  "👨‍✈️",
  "👨‍❤️‍👨",
  "👨‍❤️‍💋‍👨",
  "👨",
  "👩🏻‍🌾",
  "👩🏻‍🍳",
  "👩🏻‍🎓",
  "👩🏻‍🎤",
  "👩🏻‍🎨",
  "👩🏻‍🏫",
  "👩🏻‍🏭",
  "👩🏻‍💻",
  "👩🏻‍💼",
  "👩🏻‍🔧",
  "👩🏻‍🔬",
  "👩🏻‍🚀",
  "👩🏻‍🚒",
  "👩🏻‍🤝‍👨🏼",
  "👩🏻‍🤝‍👨🏽",
  "👩🏻‍🤝‍👨🏾",
  "👩🏻‍🤝‍👨🏿",
  "👩🏻‍🦯",
  "👩🏻‍🦰",
  "👩🏻‍🦱",
  "👩🏻‍🦲",
  "👩🏻‍🦳",
  "👩🏻‍🦼",
  "👩🏻‍🦽",
  "👩🏻‍⚕️",
  "👩🏻‍⚖️",
  "👩🏻‍✈️",
  "👩🏻",
  "👩🏼‍🌾",
  "👩🏼‍🍳",
  "👩🏼‍🎓",
  "👩🏼‍🎤",
  "👩🏼‍🎨",
  "👩🏼‍🏫",
  "👩🏼‍🏭",
  "👩🏼‍💻",
  "👩🏼‍💼",
  "👩🏼‍🔧",
  "👩🏼‍🔬",
  "👩🏼‍🚀",
  "👩🏼‍🚒",
  "👩🏼‍🤝‍👨🏻",
  "👩🏼‍🤝‍👨🏽",
  "👩🏼‍🤝‍👨🏾",
  "👩🏼‍🤝‍👨🏿",
  "👩🏼‍🤝‍👩🏻",
  "👩🏼‍🦯",
  "👩🏼‍🦰",
  "👩🏼‍🦱",
  "👩🏼‍🦲",
  "👩🏼‍🦳",
  "👩🏼‍🦼",
  "👩🏼‍🦽",
  "👩🏼‍⚕️",
  "👩🏼‍⚖️",
  "👩🏼‍✈️",
  "👩🏼",
  "👩🏽‍🌾",
  "👩🏽‍🍳",
  "👩🏽‍🎓",
  "👩🏽‍🎤",
  "👩🏽‍🎨",
  "👩🏽‍🏫",
  "👩🏽‍🏭",
  "👩🏽‍💻",
  "👩🏽‍💼",
  "👩🏽‍🔧",
  "👩🏽‍🔬",
  "👩🏽‍🚀",
  "👩🏽‍🚒",
  "👩🏽‍🤝‍👨🏻",
  "👩🏽‍🤝‍👨🏼",
  "👩🏽‍🤝‍👨🏾",
  "👩🏽‍🤝‍👨🏿",
  "👩🏽‍🤝‍👩🏻",
  "👩🏽‍🤝‍👩🏼",
  "👩🏽‍🦯",
  "👩🏽‍🦰",
  "👩🏽‍🦱",
  "👩🏽‍🦲",
  "👩🏽‍🦳",
  "👩🏽‍🦼",
  "👩🏽‍🦽",
  "👩🏽‍⚕️",
  "👩🏽‍⚖️",
  "👩🏽‍✈️",
  "👩🏽",
  "👩🏾‍🌾",
  "👩🏾‍🍳",
  "👩🏾‍🎓",
  "👩🏾‍🎤",
  "👩🏾‍🎨",
  "👩🏾‍🏫",
  "👩🏾‍🏭",
  "👩🏾‍💻",
  "👩🏾‍💼",
  "👩🏾‍🔧",
  "👩🏾‍🔬",
  "👩🏾‍🚀",
  "👩🏾‍🚒",
  "👩🏾‍🤝‍👨🏻",
  "👩🏾‍🤝‍👨🏼",
  "👩🏾‍🤝‍👨🏽",
  "👩🏾‍🤝‍👨🏿",
  "👩🏾‍🤝‍👩🏻",
  "👩🏾‍🤝‍👩🏼",
  "👩🏾‍🤝‍👩🏽",
  "👩🏾‍🦯",
  "👩🏾‍🦰",
  "👩🏾‍🦱",
  "👩🏾‍🦲",
  "👩🏾‍🦳",
  "👩🏾‍🦼",
  "👩🏾‍🦽",
  "👩🏾‍⚕️",
  "👩🏾‍⚖️",
  "👩🏾‍✈️",
  "👩🏾",
  "👩🏿‍🌾",
  "👩🏿‍🍳",
  "👩🏿‍🎓",
  "👩🏿‍🎤",
  "👩🏿‍🎨",
  "👩🏿‍🏫",
  "👩🏿‍🏭",
  "👩🏿‍💻",
  "👩🏿‍💼",
  "👩🏿‍🔧",
  "👩🏿‍🔬",
  "👩🏿‍🚀",
  "👩🏿‍🚒",
  "👩🏿‍🤝‍👨🏻",
  "👩🏿‍🤝‍👨🏼",
  "👩🏿‍🤝‍👨🏽",
  "👩🏿‍🤝‍👨🏾",
  "👩🏿‍🤝‍👩🏻",
  "👩🏿‍🤝‍👩🏼",
  "👩🏿‍🤝‍👩🏽",
  "👩🏿‍🤝‍👩🏾",
  "👩🏿‍🦯",
  "👩🏿‍🦰",
  "👩🏿‍🦱",
  "👩🏿‍🦲",
  "👩🏿‍🦳",
  "👩🏿‍🦼",
  "👩🏿‍🦽",
  "👩🏿‍⚕️",
  "👩🏿‍⚖️",
  "👩🏿‍✈️",
  "👩🏿",
  "👩‍🌾",
  "👩‍🍳",
  "👩‍🎓",
  "👩‍🎤",
  "👩‍🎨",
  "👩‍🏫",
  "👩‍🏭",
  "👩‍👦‍👦",
  "👩‍👦",
  "👩‍👧‍👦",
  "👩‍👧‍👧",
  "👩‍👧",
  "👩‍👩‍👦‍👦",
  "👩‍👩‍👦",
  "👩‍👩‍👧‍👦",
  "👩‍👩‍👧‍👧",
  "👩‍👩‍👧",
  "👩‍💻",
  "👩‍💼",
  "👩‍🔧",
  "👩‍🔬",
  "👩‍🚀",
  "👩‍🚒",
  "👩‍🦯",
  "👩‍🦰",
  "👩‍🦱",
  "👩‍🦲",
  "👩‍🦳",
  "👩‍🦼",
  "👩‍🦽",
  "👩‍⚕️",
  "👩‍⚖️",
  "👩‍✈️",
  "👩‍❤️‍👨",
  "👩‍❤️‍👩",
  "👩‍❤️‍💋‍👨",
  "👩‍❤️‍💋‍👩",
  "👩",
  "👪",
  "👫🏻",
  "👫🏼",
  "👫🏽",
  "👫🏾",
  "👫🏿",
  "👫",
  "👬🏻",
  "👬🏼",
  "👬🏽",
  "👬🏾",
  "👬🏿",
  "👬",
  "👭🏻",
  "👭🏼",
  "👭🏽",
  "👭🏾",
  "👭🏿",
  "👭",
  "👮🏻‍♀️",
  "👮🏻‍♂️",
  "👮🏻",
  "👮🏼‍♀️",
  "👮🏼‍♂️",
  "👮🏼",
  "👮🏽‍♀️",
  "👮🏽‍♂️",
  "👮🏽",
  "👮🏾‍♀️",
  "👮🏾‍♂️",
  "👮🏾",
  "👮🏿‍♀️",
  "👮🏿‍♂️",
  "👮🏿",
  "👮‍♀️",
  "👮‍♂️",
  "👮",
  "👯‍♀️",
  "👯‍♂️",
  "👯",
  "👰🏻",
  "👰🏼",
  "👰🏽",
  "👰🏾",
  "👰🏿",
  "👰",
  "👱🏻‍♀️",
  "👱🏻‍♂️",
  "👱🏻",
  "👱🏼‍♀️",
  "👱🏼‍♂️",
  "👱🏼",
  "👱🏽‍♀️",
  "👱🏽‍♂️",
  "👱🏽",
  "👱🏾‍♀️",
  "👱🏾‍♂️",
  "👱🏾",
  "👱🏿‍♀️",
  "👱🏿‍♂️",
  "👱🏿",
  "👱‍♀️",
  "👱‍♂️",
  "👱",
  "👲🏻",
  "👲🏼",
  "👲🏽",
  "👲🏾",
  "👲🏿",
  "👲",
  "👳🏻‍♀️",
  "👳🏻‍♂️",
  "👳🏻",
  "👳🏼‍♀️",
  "👳🏼‍♂️",
  "👳🏼",
  "👳🏽‍♀️",
  "👳🏽‍♂️",
  "👳🏽",
  "👳🏾‍♀️",
  "👳🏾‍♂️",
  "👳🏾",
  "👳🏿‍♀️",
  "👳🏿‍♂️",
  "👳🏿",
  "👳‍♀️",
  "👳‍♂️",
  "👳",
  "👴🏻",
  "👴🏼",
  "👴🏽",
  "👴🏾",
  "👴🏿",
  "👴",
  "👵🏻",
  "👵🏼",
  "👵🏽",
  "👵🏾",
  "👵🏿",
  "👵",
  "👶🏻",
  "👶🏼",
  "👶🏽",
  "👶🏾",
  "👶🏿",
  "👶",
  "👷🏻‍♀️",
  "👷🏻‍♂️",
  "👷🏻",
  "👷🏼‍♀️",
  "👷🏼‍♂️",
  "👷🏼",
  "👷🏽‍♀️",
  "👷🏽‍♂️",
  "👷🏽",
  "👷🏾‍♀️",
  "👷🏾‍♂️",
  "👷🏾",
  "👷🏿‍♀️",
  "👷🏿‍♂️",
  "👷🏿",
  "👷‍♀️",
  "👷‍♂️",
  "👷",
  "👸🏻",
  "👸🏼",
  "👸🏽",
  "👸🏾",
  "👸🏿",
  "👸",
  "👹",
  "👺",
  "👻",
  "👼🏻",
  "👼🏼",
  "👼🏽",
  "👼🏾",
  "👼🏿",
  "👼",
  "👽",
  "👾",
  "👿",
  "💀",
  "💁🏻‍♀️",
  "💁🏻‍♂️",
  "💁🏻",
  "💁🏼‍♀️",
  "💁🏼‍♂️",
  "💁🏼",
  "💁🏽‍♀️",
  "💁🏽‍♂️",
  "💁🏽",
  "💁🏾‍♀️",
  "💁🏾‍♂️",
  "💁🏾",
  "💁🏿‍♀️",
  "💁🏿‍♂️",
  "💁🏿",
  "💁‍♀️",
  "💁‍♂️",
  "💁",
  "💂🏻‍♀️",
  "💂🏻‍♂️",
  "💂🏻",
  "💂🏼‍♀️",
  "💂🏼‍♂️",
  "💂🏼",
  "💂🏽‍♀️",
  "💂🏽‍♂️",
  "💂🏽",
  "💂🏾‍♀️",
  "💂🏾‍♂️",
  "💂🏾",
  "💂🏿‍♀️",
  "💂🏿‍♂️",
  "💂🏿",
  "💂‍♀️",
  "💂‍♂️",
  "💂",
  "💃🏻",
  "💃🏼",
  "💃🏽",
  "💃🏾",
  "💃🏿",
  "💃",
  "💄",
  "💅🏻",
  "💅🏼",
  "💅🏽",
  "💅🏾",
  "💅🏿",
  "💅",
  "💆🏻‍♀️",
  "💆🏻‍♂️",
  "💆🏻",
  "💆🏼‍♀️",
  "💆🏼‍♂️",
  "💆🏼",
  "💆🏽‍♀️",
  "💆🏽‍♂️",
  "💆🏽",
  "💆🏾‍♀️",
  "💆🏾‍♂️",
  "💆🏾",
  "💆🏿‍♀️",
  "💆🏿‍♂️",
  "💆🏿",
  "💆‍♀️",
  "💆‍♂️",
  "💆",
  "💇🏻‍♀️",
  "💇🏻‍♂️",
  "💇🏻",
  "💇🏼‍♀️",
  "💇🏼‍♂️",
  "💇🏼",
  "💇🏽‍♀️",
  "💇🏽‍♂️",
  "💇🏽",
  "💇🏾‍♀️",
  "💇🏾‍♂️",
  "💇🏾",
  "💇🏿‍♀️",
  "💇🏿‍♂️",
  "💇🏿",
  "💇‍♀️",
  "💇‍♂️",
  "💇",
  "💈",
  "💉",
  "💊",
  "💋",
  "💌",
  "💍",
  "💎",
  "💏",
  "💐",
  "💑",
  "💒",
  "💓",
  "💔",
  "💕",
  "💖",
  "💗",
  "💘",
  "💙",
  "💚",
  "💛",
  "💜",
  "💝",
  "💞",
  "💟",
  "💠",
  "💡",
  "💢",
  "💣",
  "💤",
  "💥",
  "💦",
  "💧",
  "💨",
  "💩",
  "💪🏻",
  "💪🏼",
  "💪🏽",
  "💪🏾",
  "💪🏿",
  "💪",
  "💫",
  "💬",
  "💭",
  "💮",
  "💯",
  "💰",
  "💱",
  "💲",
  "💳",
  "💴",
  "💵",
  "💶",
  "💷",
  "💸",
  "💹",
  "💺",
  "💻",
  "💼",
  "💽",
  "💾",
  "💿",
  "📀",
  "📁",
  "📂",
  "📃",
  "📄",
  "📅",
  "📆",
  "📇",
  "📈",
  "📉",
  "📊",
  "📋",
  "📌",
  "📍",
  "📎",
  "📏",
  "📐",
  "📑",
  "📒",
  "📓",
  "📔",
  "📕",
  "📖",
  "📗",
  "📘",
  "📙",
  "📚",
  "📛",
  "📜",
  "📝",
  "📞",
  "📟",
  "📠",
  "📡",
  "📢",
  "📣",
  "📤",
  "📥",
  "📦",
  "📧",
  "📨",
  "📩",
  "📪",
  "📫",
  "📬",
  "📭",
  "📮",
  "📯",
  "📰",
  "📱",
  "📲",
  "📳",
  "📴",
  "📵",
  "📶",
  "📷",
  "📸",
  "📹",
  "📺",
  "📻",
  "📼",
  "📽️",
  "📿",
  "🔀",
  "🔁",
  "🔂",
  "🔃",
  "🔄",
  "🔅",
  "🔆",
  "🔇",
  "🔈",
  "🔉",
  "🔊",
  "🔋",
  "🔌",
  "🔍",
  "🔎",
  "🔏",
  "🔐",
  "🔑",
  "🔒",
  "🔓",
  "🔔",
  "🔕",
  "🔖",
  "🔗",
  "🔘",
  "🔙",
  "🔚",
  "🔛",
  "🔜",
  "🔝",
  "🔞",
  "🔟",
  "🔠",
  "🔡",
  "🔢",
  "🔣",
  "🔤",
  "🔥",
  "🔦",
  "🔧",
  "🔨",
  "🔩",
  "🔪",
  "🔫",
  "🔬",
  "🔭",
  "🔮",
  "🔯",
  "🔰",
  "🔱",
  "🔲",
  "🔳",
  "🔴",
  "🔵",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
  "🔺",
  "🔻",
  "🔼",
  "🔽",
  "🕉️",
  "🕊️",
  "🕋",
  "🕌",
  "🕍",
  "🕎",
  "🕐",
  "🕑",
  "🕒",
  "🕓",
  "🕔",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕛",
  "🕜",
  "🕝",
  "🕞",
  "🕟",
  "🕠",
  "🕡",
  "🕢",
  "🕣",
  "🕤",
  "🕥",
  "🕦",
  "🕧",
  "🕯️",
  "🕰️",
  "🕳️",
  "🕴🏻‍♀️",
  "🕴🏻‍♂️",
  "🕴🏻",
  "🕴🏼‍♀️",
  "🕴🏼‍♂️",
  "🕴🏼",
  "🕴🏽‍♀️",
  "🕴🏽‍♂️",
  "🕴🏽",
  "🕴🏾‍♀️",
  "🕴🏾‍♂️",
  "🕴🏾",
  "🕴🏿‍♀️",
  "🕴🏿‍♂️",
  "🕴🏿",
  "🕴️‍♀️",
  "🕴️‍♂️",
  "🕴️",
  "🕵🏻‍♀️",
  "🕵🏻‍♂️",
  "🕵🏻",
  "🕵🏼‍♀️",
  "🕵🏼‍♂️",
  "🕵🏼",
  "🕵🏽‍♀️",
  "🕵🏽‍♂️",
  "🕵🏽",
  "🕵🏾‍♀️",
  "🕵🏾‍♂️",
  "🕵🏾",
  "🕵🏿‍♀️",
  "🕵🏿‍♂️",
  "🕵🏿",
  "🕵️‍♀️",
  "🕵️‍♂️",
  "🕵️",
  "🕶️",
  "🕷️",
  "🕸️",
  "🕹️",
  "🕺🏻",
  "🕺🏼",
  "🕺🏽",
  "🕺🏾",
  "🕺🏿",
  "🕺",
  "🖇️",
  "🖊️",
  "🖋️",
  "🖌️",
  "🖍️",
  "🖐🏻",
  "🖐🏼",
  "🖐🏽",
  "🖐🏾",
  "🖐🏿",
  "🖐️",
  "🖕🏻",
  "🖕🏼",
  "🖕🏽",
  "🖕🏾",
  "🖕🏿",
  "🖕",
  "🖖🏻",
  "🖖🏼",
  "🖖🏽",
  "🖖🏾",
  "🖖🏿",
  "🖖",
  "🖤",
  "🖥️",
  "🖨️",
  "🖱️",
  "🖲️",
  "🖼️",
  "🗂️",
  "🗃️",
  "🗄️",
  "🗑️",
  "🗒️",
  "🗓️",
  "🗜️",
  "🗝️",
  "🗞️",
  "🗡️",
  "🗣️",
  "🗨️",
  "🗯️",
  "🗳️",
  "🗺️",
  "🗻",
  "🗼",
  "🗽",
  "🗾",
  "🗿",
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "😉",
  "😊",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
  "🙁",
  "🙂",
  "🙃",
  "🙄",
  "🙅🏻‍♀️",
  "🙅🏻‍♂️",
  "🙅🏻",
  "🙅🏼‍♀️",
  "🙅🏼‍♂️",
  "🙅🏼",
  "🙅🏽‍♀️",
  "🙅🏽‍♂️",
  "🙅🏽",
  "🙅🏾‍♀️",
  "🙅🏾‍♂️",
  "🙅🏾",
  "🙅🏿‍♀️",
  "🙅🏿‍♂️",
  "🙅🏿",
  "🙅‍♀️",
  "🙅‍♂️",
  "🙅",
  "🙆🏻‍♀️",
  "🙆🏻‍♂️",
  "🙆🏻",
  "🙆🏼‍♀️",
  "🙆🏼‍♂️",
  "🙆🏼",
  "🙆🏽‍♀️",
  "🙆🏽‍♂️",
  "🙆🏽",
  "🙆🏾‍♀️",
  "🙆🏾‍♂️",
  "🙆🏾",
  "🙆🏿‍♀️",
  "🙆🏿‍♂️",
  "🙆🏿",
  "🙆‍♀️",
  "🙆‍♂️",
  "🙆",
  "🙇🏻‍♀️",
  "🙇🏻‍♂️",
  "🙇🏻",
  "🙇🏼‍♀️",
  "🙇🏼‍♂️",
  "🙇🏼",
  "🙇🏽‍♀️",
  "🙇🏽‍♂️",
  "🙇🏽",
  "🙇🏾‍♀️",
  "🙇🏾‍♂️",
  "🙇🏾",
  "🙇🏿‍♀️",
  "🙇🏿‍♂️",
  "🙇🏿",
  "🙇‍♀️",
  "🙇‍♂️",
  "🙇",
  "🙈",
  "🙉",
  "🙊",
  "🙋🏻‍♀️",
  "🙋🏻‍♂️",
  "🙋🏻",
  "🙋🏼‍♀️",
  "🙋🏼‍♂️",
  "🙋🏼",
  "🙋🏽‍♀️",
  "🙋🏽‍♂️",
  "🙋🏽",
  "🙋🏾‍♀️",
  "🙋🏾‍♂️",
  "🙋🏾",
  "🙋🏿‍♀️",
  "🙋🏿‍♂️",
  "🙋🏿",
  "🙋‍♀️",
  "🙋‍♂️",
  "🙋",
  "🙌🏻",
  "🙌🏼",
  "🙌🏽",
  "🙌🏾",
  "🙌🏿",
  "🙌",
  "🙍🏻‍♀️",
  "🙍🏻‍♂️",
  "🙍🏻",
  "🙍🏼‍♀️",
  "🙍🏼‍♂️",
  "🙍🏼",
  "🙍🏽‍♀️",
  "🙍🏽‍♂️",
  "🙍🏽",
  "🙍🏾‍♀️",
  "🙍🏾‍♂️",
  "🙍🏾",
  "🙍🏿‍♀️",
  "🙍🏿‍♂️",
  "🙍🏿",
  "🙍‍♀️",
  "🙍‍♂️",
  "🙍",
  "🙎🏻‍♀️",
  "🙎🏻‍♂️",
  "🙎🏻",
  "🙎🏼‍♀️",
  "🙎🏼‍♂️",
  "🙎🏼",
  "🙎🏽‍♀️",
  "🙎🏽‍♂️",
  "🙎🏽",
  "🙎🏾‍♀️",
  "🙎🏾‍♂️",
  "🙎🏾",
  "🙎🏿‍♀️",
  "🙎🏿‍♂️",
  "🙎🏿",
  "🙎‍♀️",
  "🙎‍♂️",
  "🙎",
  "🙏🏻",
  "🙏🏼",
  "🙏🏽",
  "🙏🏾",
  "🙏🏿",
  "🙏",
  "🚀",
  "🚁",
  "🚂",
  "🚃",
  "🚄",
  "🚅",
  "🚆",
  "🚇",
  "🚈",
  "🚉",
  "🚊",
  "🚋",
  "🚌",
  "🚍",
  "🚎",
  "🚏",
  "🚐",
  "🚑",
  "🚒",
  "🚓",
  "🚔",
  "🚕",
  "🚖",
  "🚗",
  "🚘",
  "🚙",
  "🚚",
  "🚛",
  "🚜",
  "🚝",
  "🚞",
  "🚟",
  "🚠",
  "🚡",
  "🚢",
  "🚣🏻‍♀️",
  "🚣🏻‍♂️",
  "🚣🏻",
  "🚣🏼‍♀️",
  "🚣🏼‍♂️",
  "🚣🏼",
  "🚣🏽‍♀️",
  "🚣🏽‍♂️",
  "🚣🏽",
  "🚣🏾‍♀️",
  "🚣🏾‍♂️",
  "🚣🏾",
  "🚣🏿‍♀️",
  "🚣🏿‍♂️",
  "🚣🏿",
  "🚣‍♀️",
  "🚣‍♂️",
  "🚣",
  "🚤",
  "🚥",
  "🚦",
  "🚧",
  "🚨",
  "🚩",
  "🚪",
  "🚫",
  "🚬",
  "🚭",
  "🚮",
  "🚯",
  "🚰",
  "🚱",
  "🚲",
  "🚳",
  "🚴🏻‍♀️",
  "🚴🏻‍♂️",
  "🚴🏻",
  "🚴🏼‍♀️",
  "🚴🏼‍♂️",
  "🚴🏼",
  "🚴🏽‍♀️",
  "🚴🏽‍♂️",
  "🚴🏽",
  "🚴🏾‍♀️",
  "🚴🏾‍♂️",
  "🚴🏾",
  "🚴🏿‍♀️",
  "🚴🏿‍♂️",
  "🚴🏿",
  "🚴‍♀️",
  "🚴‍♂️",
  "🚴",
  "🚵🏻‍♀️",
  "🚵🏻‍♂️",
  "🚵🏻",
  "🚵🏼‍♀️",
  "🚵🏼‍♂️",
  "🚵🏼",
  "🚵🏽‍♀️",
  "🚵🏽‍♂️",
  "🚵🏽",
  "🚵🏾‍♀️",
  "🚵🏾‍♂️",
  "🚵🏾",
  "🚵🏿‍♀️",
  "🚵🏿‍♂️",
  "🚵🏿",
  "🚵‍♀️",
  "🚵‍♂️",
  "🚵",
  "🚶🏻‍♀️",
  "🚶🏻‍♂️",
  "🚶🏻",
  "🚶🏼‍♀️",
  "🚶🏼‍♂️",
  "🚶🏼",
  "🚶🏽‍♀️",
  "🚶🏽‍♂️",
  "🚶🏽",
  "🚶🏾‍♀️",
  "🚶🏾‍♂️",
  "🚶🏾",
  "🚶🏿‍♀️",
  "🚶🏿‍♂️",
  "🚶🏿",
  "🚶‍♀️",
  "🚶‍♂️",
  "🚶",
  "🚷",
  "🚸",
  "🚹",
  "🚺",
  "🚻",
  "🚼",
  "🚽",
  "🚾",
  "🚿",
  "🛀🏻",
  "🛀🏼",
  "🛀🏽",
  "🛀🏾",
  "🛀🏿",
  "🛀",
  "🛁",
  "🛂",
  "🛃",
  "🛄",
  "🛅",
  "🛋️",
  "🛌🏻",
  "🛌🏼",
  "🛌🏽",
  "🛌🏾",
  "🛌🏿",
  "🛌",
  "🛍️",
  "🛎️",
  "🛏️",
  "🛐",
  "🛑",
  "🛒",
  "🛕",
  "🛠️",
  "🛡️",
  "🛢️",
  "🛣️",
  "🛤️",
  "🛥️",
  "🛩️",
  "🛫",
  "🛬",
  "🛰️",
  "🛳️",
  "🛴",
  "🛵",
  "🛶",
  "🛷",
  "🛸",
  "🛹",
  "🛺",
  "🟠",
  "🟡",
  "🟢",
  "🟣",
  "🟤",
  "🟥",
  "🟦",
  "🟧",
  "🟨",
  "🟩",
  "🟪",
  "🟫",
  "🤍",
  "🤎",
  "🤏🏻",
  "🤏🏼",
  "🤏🏽",
  "🤏🏾",
  "🤏🏿",
  "🤏",
  "🤐",
  "🤑",
  "🤒",
  "🤓",
  "🤔",
  "🤕",
  "🤖",
  "🤗",
  "🤘🏻",
  "🤘🏼",
  "🤘🏽",
  "🤘🏾",
  "🤘🏿",
  "🤘",
  "🤙🏻",
  "🤙🏼",
  "🤙🏽",
  "🤙🏾",
  "🤙🏿",
  "🤙",
  "🤚🏻",
  "🤚🏼",
  "🤚🏽",
  "🤚🏾",
  "🤚🏿",
  "🤚",
  "🤛🏻",
  "🤛🏼",
  "🤛🏽",
  "🤛🏾",
  "🤛🏿",
  "🤛",
  "🤜🏻",
  "🤜🏼",
  "🤜🏽",
  "🤜🏾",
  "🤜🏿",
  "🤜",
  "🤝",
  "🤞🏻",
  "🤞🏼",
  "🤞🏽",
  "🤞🏾",
  "🤞🏿",
  "🤞",
  "🤟🏻",
  "🤟🏼",
  "🤟🏽",
  "🤟🏾",
  "🤟🏿",
  "🤟",
  "🤠",
  "🤡",
  "🤢",
  "🤣",
  "🤤",
  "🤥",
  "🤦🏻‍♀️",
  "🤦🏻‍♂️",
  "🤦🏻",
  "🤦🏼‍♀️",
  "🤦🏼‍♂️",
  "🤦🏼",
  "🤦🏽‍♀️",
  "🤦🏽‍♂️",
  "🤦🏽",
  "🤦🏾‍♀️",
  "🤦🏾‍♂️",
  "🤦🏾",
  "🤦🏿‍♀️",
  "🤦🏿‍♂️",
  "🤦🏿",
  "🤦‍♀️",
  "🤦‍♂️",
  "🤦",
  "🤧",
  "🤨",
  "🤩",
  "🤪",
  "🤫",
  "🤬",
  "🤭",
  "🤮",
  "🤯",
  "🤰🏻",
  "🤰🏼",
  "🤰🏽",
  "🤰🏾",
  "🤰🏿",
  "🤰",
  "🤱🏻",
  "🤱🏼",
  "🤱🏽",
  "🤱🏾",
  "🤱🏿",
  "🤱",
  "🤲🏻",
  "🤲🏼",
  "🤲🏽",
  "🤲🏾",
  "🤲🏿",
  "🤲",
  "🤳🏻",
  "🤳🏼",
  "🤳🏽",
  "🤳🏾",
  "🤳🏿",
  "🤳",
  "🤴🏻",
  "🤴🏼",
  "🤴🏽",
  "🤴🏾",
  "🤴🏿",
  "🤴",
  "🤵🏻‍♀️",
  "🤵🏻‍♂️",
  "🤵🏻",
  "🤵🏼‍♀️",
  "🤵🏼‍♂️",
  "🤵🏼",
  "🤵🏽‍♀️",
  "🤵🏽‍♂️",
  "🤵🏽",
  "🤵🏾‍♀️",
  "🤵🏾‍♂️",
  "🤵🏾",
  "🤵🏿‍♀️",
  "🤵🏿‍♂️",
  "🤵🏿",
  "🤵‍♀️",
  "🤵‍♂️",
  "🤵",
  "🤶🏻",
  "🤶🏼",
  "🤶🏽",
  "🤶🏾",
  "🤶🏿",
  "🤶",
  "🤷🏻‍♀️",
  "🤷🏻‍♂️",
  "🤷🏻",
  "🤷🏼‍♀️",
  "🤷🏼‍♂️",
  "🤷🏼",
  "🤷🏽‍♀️",
  "🤷🏽‍♂️",
  "🤷🏽",
  "🤷🏾‍♀️",
  "🤷🏾‍♂️",
  "🤷🏾",
  "🤷🏿‍♀️",
  "🤷🏿‍♂️",
  "🤷🏿",
  "🤷‍♀️",
  "🤷‍♂️",
  "🤷",
  "🤸🏻‍♀️",
  "🤸🏻‍♂️",
  "🤸🏻",
  "🤸🏼‍♀️",
  "🤸🏼‍♂️",
  "🤸🏼",
  "🤸🏽‍♀️",
  "🤸🏽‍♂️",
  "🤸🏽",
  "🤸🏾‍♀️",
  "🤸🏾‍♂️",
  "🤸🏾",
  "🤸🏿‍♀️",
  "🤸🏿‍♂️",
  "🤸🏿",
  "🤸‍♀️",
  "🤸‍♂️",
  "🤸",
  "🤹🏻‍♀️",
  "🤹🏻‍♂️",
  "🤹🏻",
  "🤹🏼‍♀️",
  "🤹🏼‍♂️",
  "🤹🏼",
  "🤹🏽‍♀️",
  "🤹🏽‍♂️",
  "🤹🏽",
  "🤹🏾‍♀️",
  "🤹🏾‍♂️",
  "🤹🏾",
  "🤹🏿‍♀️",
  "🤹🏿‍♂️",
  "🤹🏿",
  "🤹‍♀️",
  "🤹‍♂️",
  "🤹",
  "🤺",
  "🤼‍♀️",
  "🤼‍♂️",
  "🤼",
  "🤽🏻‍♀️",
  "🤽🏻‍♂️",
  "🤽🏻",
  "🤽🏼‍♀️",
  "🤽🏼‍♂️",
  "🤽🏼",
  "🤽🏽‍♀️",
  "🤽🏽‍♂️",
  "🤽🏽",
  "🤽🏾‍♀️",
  "🤽🏾‍♂️",
  "🤽🏾",
  "🤽🏿‍♀️",
  "🤽🏿‍♂️",
  "🤽🏿",
  "🤽‍♀️",
  "🤽‍♂️",
  "🤽",
  "🤾🏻‍♀️",
  "🤾🏻‍♂️",
  "🤾🏻",
  "🤾🏼‍♀️",
  "🤾🏼‍♂️",
  "🤾🏼",
  "🤾🏽‍♀️",
  "🤾🏽‍♂️",
  "🤾🏽",
  "🤾🏾‍♀️",
  "🤾🏾‍♂️",
  "🤾🏾",
  "🤾🏿‍♀️",
  "🤾🏿‍♂️",
  "🤾🏿",
  "🤾‍♀️",
  "🤾‍♂️",
  "🤾",
  "🤿",
  "🥀",
  "🥁",
  "🥂",
  "🥃",
  "🥄",
  "🥅",
  "🥇",
  "🥈",
  "🥉",
  "🥊",
  "🥋",
  "🥌",
  "🥍",
  "🥎",
  "🥏",
  "🥐",
  "🥑",
  "🥒",
  "🥓",
  "🥔",
  "🥕",
  "🥖",
  "🥗",
  "🥘",
  "🥙",
  "🥚",
  "🥛",
  "🥜",
  "🥝",
  "🥞",
  "🥟",
  "🥠",
  "🥡",
  "🥢",
  "🥣",
  "🥤",
  "🥥",
  "🥦",
  "🥧",
  "🥨",
  "🥩",
  "🥪",
  "🥫",
  "🥬",
  "🥭",
  "🥮",
  "🥯",
  "🥰",
  "🥱",
  "🥳",
  "🥴",
  "🥵",
  "🥶",
  "🥺",
  "🥻",
  "🥼",
  "🥽",
  "🥾",
  "🥿",
  "🦀",
  "🦁",
  "🦂",
  "🦃",
  "🦄",
  "🦅",
  "🦆",
  "🦇",
  "🦈",
  "🦉",
  "🦊",
  "🦋",
  "🦌",
  "🦍",
  "🦎",
  "🦏",
  "🦐",
  "🦑",
  "🦒",
  "🦓",
  "🦔",
  "🦕",
  "🦖",
  "🦗",
  "🦘",
  "🦙",
  "🦚",
  "🦛",
  "🦜",
  "🦝",
  "🦞",
  "🦟",
  "🦠",
  "🦡",
  "🦢",
  "🦥",
  "🦦",
  "🦧",
  "🦨",
  "🦩",
  "🦪",
  "🦮",
  "🦯",
  "🦰",
  "🦱",
  "🦲",
  "🦳",
  "🦴",
  "🦵🏻",
  "🦵🏼",
  "🦵🏽",
  "🦵🏾",
  "🦵🏿",
  "🦵",
  "🦶🏻",
  "🦶🏼",
  "🦶🏽",
  "🦶🏾",
  "🦶🏿",
  "🦶",
  "🦷",
  "🦸🏻‍♀️",
  "🦸🏻‍♂️",
  "🦸🏻",
  "🦸🏼‍♀️",
  "🦸🏼‍♂️",
  "🦸🏼",
  "🦸🏽‍♀️",
  "🦸🏽‍♂️",
  "🦸🏽",
  "🦸🏾‍♀️",
  "🦸🏾‍♂️",
  "🦸🏾",
  "🦸🏿‍♀️",
  "🦸🏿‍♂️",
  "🦸🏿",
  "🦸‍♀️",
  "🦸‍♂️",
  "🦸",
  "🦹🏻‍♀️",
  "🦹🏻‍♂️",
  "🦹🏻",
  "🦹🏼‍♀️",
  "🦹🏼‍♂️",
  "🦹🏼",
  "🦹🏽‍♀️",
  "🦹🏽‍♂️",
  "🦹🏽",
  "🦹🏾‍♀️",
  "🦹🏾‍♂️",
  "🦹🏾",
  "🦹🏿‍♀️",
  "🦹🏿‍♂️",
  "🦹🏿",
  "🦹‍♀️",
  "🦹‍♂️",
  "🦹",
  "🦺",
  "🦻🏻",
  "🦻🏼",
  "🦻🏽",
  "🦻🏾",
  "🦻🏿",
  "🦻",
  "🦼",
  "🦽",
  "🦾",
  "🦿",
  "🧀",
  "🧁",
  "🧂",
  "🧃",
  "🧄",
  "🧅",
  "🧆",
  "🧇",
  "🧈",
  "🧉",
  "🧊",
  "🧍🏻‍♀️",
  "🧍🏻‍♂️",
  "🧍🏻",
  "🧍🏼‍♀️",
  "🧍🏼‍♂️",
  "🧍🏼",
  "🧍🏽‍♀️",
  "🧍🏽‍♂️",
  "🧍🏽",
  "🧍🏾‍♀️",
  "🧍🏾‍♂️",
  "🧍🏾",
  "🧍🏿‍♀️",
  "🧍🏿‍♂️",
  "🧍🏿",
  "🧍‍♀️",
  "🧍‍♂️",
  "🧍",
  "🧎🏻‍♀️",
  "🧎🏻‍♂️",
  "🧎🏻",
  "🧎🏼‍♀️",
  "🧎🏼‍♂️",
  "🧎🏼",
  "🧎🏽‍♀️",
  "🧎🏽‍♂️",
  "🧎🏽",
  "🧎🏾‍♀️",
  "🧎🏾‍♂️",
  "🧎🏾",
  "🧎🏿‍♀️",
  "🧎🏿‍♂️",
  "🧎🏿",
  "🧎‍♀️",
  "🧎‍♂️",
  "🧎",
  "🧏🏻‍♀️",
  "🧏🏻‍♂️",
  "🧏🏻",
  "🧏🏼‍♀️",
  "🧏🏼‍♂️",
  "🧏🏼",
  "🧏🏽‍♀️",
  "🧏🏽‍♂️",
  "🧏🏽",
  "🧏🏾‍♀️",
  "🧏🏾‍♂️",
  "🧏🏾",
  "🧏🏿‍♀️",
  "🧏🏿‍♂️",
  "🧏🏿",
  "🧏‍♀️",
  "🧏‍♂️",
  "🧏",
  "🧐",
  "🧑🏻‍🤝‍🧑🏻",
  "🧑🏻",
  "🧑🏼‍🤝‍🧑🏻",
  "🧑🏼‍🤝‍🧑🏼",
  "🧑🏼",
  "🧑🏽‍🤝‍🧑🏻",
  "🧑🏽‍🤝‍🧑🏼",
  "🧑🏽‍🤝‍🧑🏽",
  "🧑🏽",
  "🧑🏾‍🤝‍🧑🏻",
  "🧑🏾‍🤝‍🧑🏼",
  "🧑🏾‍🤝‍🧑🏽",
  "🧑🏾‍🤝‍🧑🏾",
  "🧑🏾",
  "🧑🏿‍🤝‍🧑🏻",
  "🧑🏿‍🤝‍🧑🏼",
  "🧑🏿‍🤝‍🧑🏽",
  "🧑🏿‍🤝‍🧑🏾",
  "🧑🏿‍🤝‍🧑🏿",
  "🧑🏿",
  "🧑‍🤝‍🧑",
  "🧑",
  "🧒🏻",
  "🧒🏼",
  "🧒🏽",
  "🧒🏾",
  "🧒🏿",
  "🧒",
  "🧓🏻",
  "🧓🏼",
  "🧓🏽",
  "🧓🏾",
  "🧓🏿",
  "🧓",
  "🧔🏻",
  "🧔🏼",
  "🧔🏽",
  "🧔🏾",
  "🧔🏿",
  "🧔",
  "🧕🏻",
  "🧕🏼",
  "🧕🏽",
  "🧕🏾",
  "🧕🏿",
  "🧕",
  "🧖🏻‍♀️",
  "🧖🏻‍♂️",
  "🧖🏻",
  "🧖🏼‍♀️",
  "🧖🏼‍♂️",
  "🧖🏼",
  "🧖🏽‍♀️",
  "🧖🏽‍♂️",
  "🧖🏽",
  "🧖🏾‍♀️",
  "🧖🏾‍♂️",
  "🧖🏾",
  "🧖🏿‍♀️",
  "🧖🏿‍♂️",
  "🧖🏿",
  "🧖‍♀️",
  "🧖‍♂️",
  "🧖",
  "🧗🏻‍♀️",
  "🧗🏻‍♂️",
  "🧗🏻",
  "🧗🏼‍♀️",
  "🧗🏼‍♂️",
  "🧗🏼",
  "🧗🏽‍♀️",
  "🧗🏽‍♂️",
  "🧗🏽",
  "🧗🏾‍♀️",
  "🧗🏾‍♂️",
  "🧗🏾",
  "🧗🏿‍♀️",
  "🧗🏿‍♂️",
  "🧗🏿",
  "🧗‍♀️",
  "🧗‍♂️",
  "🧗",
  "🧘🏻‍♀️",
  "🧘🏻‍♂️",
  "🧘🏻",
  "🧘🏼‍♀️",
  "🧘🏼‍♂️",
  "🧘🏼",
  "🧘🏽‍♀️",
  "🧘🏽‍♂️",
  "🧘🏽",
  "🧘🏾‍♀️",
  "🧘🏾‍♂️",
  "🧘🏾",
  "🧘🏿‍♀️",
  "🧘🏿‍♂️",
  "🧘🏿",
  "🧘‍♀️",
  "🧘‍♂️",
  "🧘",
  "🧙🏻‍♀️",
  "🧙🏻‍♂️",
  "🧙🏻",
  "🧙🏼‍♀️",
  "🧙🏼‍♂️",
  "🧙🏼",
  "🧙🏽‍♀️",
  "🧙🏽‍♂️",
  "🧙🏽",
  "🧙🏾‍♀️",
  "🧙🏾‍♂️",
  "🧙🏾",
  "🧙🏿‍♀️",
  "🧙🏿‍♂️",
  "🧙🏿",
  "🧙‍♀️",
  "🧙‍♂️",
  "🧙",
  "🧚🏻‍♀️",
  "🧚🏻‍♂️",
  "🧚🏻",
  "🧚🏼‍♀️",
  "🧚🏼‍♂️",
  "🧚🏼",
  "🧚🏽‍♀️",
  "🧚🏽‍♂️",
  "🧚🏽",
  "🧚🏾‍♀️",
  "🧚🏾‍♂️",
  "🧚🏾",
  "🧚🏿‍♀️",
  "🧚🏿‍♂️",
  "🧚🏿",
  "🧚‍♀️",
  "🧚‍♂️",
  "🧚",
  "🧛🏻‍♀️",
  "🧛🏻‍♂️",
  "🧛🏻",
  "🧛🏼‍♀️",
  "🧛🏼‍♂️",
  "🧛🏼",
  "🧛🏽‍♀️",
  "🧛🏽‍♂️",
  "🧛🏽",
  "🧛🏾‍♀️",
  "🧛🏾‍♂️",
  "🧛🏾",
  "🧛🏿‍♀️",
  "🧛🏿‍♂️",
  "🧛🏿",
  "🧛‍♀️",
  "🧛‍♂️",
  "🧛",
  "🧜🏻‍♀️",
  "🧜🏻‍♂️",
  "🧜🏻",
  "🧜🏼‍♀️",
  "🧜🏼‍♂️",
  "🧜🏼",
  "🧜🏽‍♀️",
  "🧜🏽‍♂️",
  "🧜🏽",
  "🧜🏾‍♀️",
  "🧜🏾‍♂️",
  "🧜🏾",
  "🧜🏿‍♀️",
  "🧜🏿‍♂️",
  "🧜🏿",
  "🧜‍♀️",
  "🧜‍♂️",
  "🧜",
  "🧝🏻‍♀️",
  "🧝🏻‍♂️",
  "🧝🏻",
  "🧝🏼‍♀️",
  "🧝🏼‍♂️",
  "🧝🏼",
  "🧝🏽‍♀️",
  "🧝🏽‍♂️",
  "🧝🏽",
  "🧝🏾‍♀️",
  "🧝🏾‍♂️",
  "🧝🏾",
  "🧝🏿‍♀️",
  "🧝🏿‍♂️",
  "🧝🏿",
  "🧝‍♀️",
  "🧝‍♂️",
  "🧝",
  "🧞‍♀️",
  "🧞‍♂️",
  "🧞",
  "🧟‍♀️",
  "🧟‍♂️",
  "🧟",
  "🧠",
  "🧡",
  "🧢",
  "🧣",
  "🧤",
  "🧥",
  "🧦",
  "🧧",
  "🧨",
  "🧩",
  "🧪",
  "🧫",
  "🧬",
  "🧭",
  "🧮",
  "🧯",
  "🧰",
  "🧱",
  "🧲",
  "🧳",
  "🧴",
  "🧵",
  "🧶",
  "🧷",
  "🧸",
  "🧹",
  "🧺",
  "🧻",
  "🧼",
  "🧽",
  "🧾",
  "🧿",
  "🩰",
  "🩱",
  "🩲",
  "🩳",
  "🩸",
  "🩹",
  "🩺",
  "🪀",
  "🪁",
  "🪂",
  "🪐",
  "🪑",
  "🪒",
  "🪓",
  "🪔",
  "🪕",
  "‼️",
  "⁉️",
  "™️",
  "ℹ️",
  "↔️",
  "↕️",
  "↖️",
  "↗️",
  "↘️",
  "↙️",
  "↩️",
  "↪️",
  "#⃣",
  "⌚️",
  "⌛️",
  "⌨️",
  "⏏️",
  "⏩",
  "⏪",
  "⏫",
  "⏬",
  "⏭️",
  "⏮️",
  "⏯️",
  "⏰",
  "⏱️",
  "⏲️",
  "⏳",
  "⏸️",
  "⏹️",
  "⏺️",
  "Ⓜ️",
  "▪️",
  "▫️",
  "▶️",
  "◀️",
  "◻️",
  "◼️",
  "◽️",
  "◾️",
  "☀️",
  "☁️",
  "☂️",
  "☃️",
  "☄️",
  "☎️",
  "☑️",
  "☔️",
  "☕️",
  "☘️",
  "☝🏻",
  "☝🏼",
  "☝🏽",
  "☝🏾",
  "☝🏿",
  "☝️",
  "☠️",
  "☢️",
  "☣️",
  "☦️",
  "☪️",
  "☮️",
  "☯️",
  "☸️",
  "☹️",
  "☺️",
  "♀️",
  "♂️",
  "♈️",
  "♉️",
  "♊️",
  "♋️",
  "♌️",
  "♍️",
  "♎️",
  "♏️",
  "♐️",
  "♑️",
  "♒️",
  "♓️",
  "♟️",
  "♠️",
  "♣️",
  "♥️",
  "♦️",
  "♨️",
  "♻️",
  "♾",
  "♿️",
  "⚒️",
  "⚓️",
  "⚔️",
  "⚕️",
  "⚖️",
  "⚗️",
  "⚙️",
  "⚛️",
  "⚜️",
  "⚠️",
  "⚡️",
  "⚪️",
  "⚫️",
  "⚰️",
  "⚱️",
  "⚽️",
  "⚾️",
  "⛄️",
  "⛅️",
  "⛈️",
  "⛎",
  "⛏️",
  "⛑️",
  "⛓️",
  "⛔️",
  "⛩️",
  "⛪️",
  "⛰️",
  "⛱️",
  "⛲️",
  "⛳️",
  "⛴️",
  "⛵️",
  "⛷🏻",
  "⛷🏼",
  "⛷🏽",
  "⛷🏾",
  "⛷🏿",
  "⛷️",
  "⛸️",
  "⛹🏻‍♀️",
  "⛹🏻‍♂️",
  "⛹🏻",
  "⛹🏼‍♀️",
  "⛹🏼‍♂️",
  "⛹🏼",
  "⛹🏽‍♀️",
  "⛹🏽‍♂️",
  "⛹🏽",
  "⛹🏾‍♀️",
  "⛹🏾‍♂️",
  "⛹🏾",
  "⛹🏿‍♀️",
  "⛹🏿‍♂️",
  "⛹🏿",
  "⛹️‍♀️",
  "⛹️‍♂️",
  "⛹️",
  "⛺️",
  "⛽️",
  "✂️",
  "✅",
  "✈️",
  "✉️",
  "✊🏻",
  "✊🏼",
  "✊🏽",
  "✊🏾",
  "✊🏿",
  "✊",
  "✋🏻",
  "✋🏼",
  "✋🏽",
  "✋🏾",
  "✋🏿",
  "✋",
  "✌🏻",
  "✌🏼",
  "✌🏽",
  "✌🏾",
  "✌🏿",
  "✌️",
  "✍🏻",
  "✍🏼",
  "✍🏽",
  "✍🏾",
  "✍🏿",
  "✍️",
  "✏️",
  "✒️",
  "✔️",
  "✖️",
  "✝️",
  "✡️",
  "✨",
  "✳️",
  "✴️",
  "❄️",
  "❇️",
  "❌",
  "❎",
  "❓",
  "❔",
  "❕",
  "❗️",
  "❣️",
  "❤️",
  "➕",
  "➖",
  "➗",
  "➡️",
  "➰",
  "➿",
  "⤴️",
  "⤵️",
  "*⃣",
  "⬅️",
  "⬆️",
  "⬇️",
  "⬛️",
  "⬜️",
  "⭐️",
  "⭕️",
  "0⃣",
  "〰️",
  "〽️",
  "1⃣",
  "2⃣",
  "㊗️",
  "㊙️",
  "3⃣",
  "4⃣",
  "5⃣",
  "6⃣",
  "7⃣",
  "8⃣",
  "9⃣",
  "©️",
  "®️",
  ""
];

var emojiRegex = /[\uD800-\uDFFF]./;
var emojiList = emojisList.filter(function (emoji) { return emojiRegex.test(emoji); });

var getOptions_1$1 = getOptions_1;

/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * hippy-vue-css-loader will translate the CSS texts to be AST
 * and attached at global[GLOBAL_STYLE_NAME].
 * when use HMR, the outdated chunk style will be attached at
 * global[GLOBAL_DISPOSE_STYLE_NAME].
 */
var GLOBAL_STYLE_NAME = '__HIPPY_VUE_STYLES__';
var GLOBAL_DISPOSE_STYLE_NAME = '__HIPPY_VUE_DISPOSE_STYLES__';

/**
 * Hippy debug address
 */
var HIPPY_DEBUG_ADDRESS = "http://127.0.0.1:" + (process.env.PORT) + "/";

/*  */

var emptyObject = Object.freeze({});

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function warn() {
  var context = [], len = arguments.length;
  while ( len-- ) context[ len ] = arguments[ len ];

  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return console.warn.apply(console, context);
}

/**
 * Convert string to number as possible
 */
var numberRegEx = new RegExp('^(?=.+)[+-]?\\d*\\.?\\d*([Ee][+-]?\\d+)?$');
function tryConvertNumber(str) {
  if (typeof str === 'number') {
    return str;
  }
  if (typeof str === 'string' && numberRegEx.test(str)) {
    try {
      return parseFloat(str);
    } catch (err) {
      // pass
    }
  }
  return str;
}

/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-mixed-operators */

var names = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

var call = function () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return ("\\(\\s*(" + (args.join(')\\s*,\\s*(')) + ")\\s*\\)");
};

var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + "%";

var matchers = {
  rgb: new RegExp(("rgb" + (call(NUMBER, NUMBER, NUMBER)))),
  rgba: new RegExp(("rgba" + (call(NUMBER, NUMBER, NUMBER, NUMBER)))),
  hsl: new RegExp(("hsl" + (call(NUMBER, PERCENTAGE, PERCENTAGE)))),
  hsla: new RegExp(("hsla" + (call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)))),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

var parse255 = function (str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
};

var parse1 = function (str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
};

var hue2rgb = function (p, q, tx) {
  var t = tx;
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};

var hslToRgb = function (h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return (
    (Math.round(r * 255) << 24)
    | (Math.round(g * 255) << 16)
    | (Math.round(b * 255) << 8)
  );
};

var parse360 = function (str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
};

var parsePercentage = function (str) {
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
};

function baseColor(color) {
  var match;
  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }
  match = matchers.hex6.exec(color);
  if (Array.isArray(match)) {
    return parseInt(((match[1]) + "ff"), 16) >>> 0;
  }
  if (Object.hasOwnProperty.call(names, color)) {
    return names[color];
  }
  match = matchers.rgb.exec(color);
  if (Array.isArray(match)) {
    return (
      (parse255(match[1]) << 24) // r
      | (parse255(match[2]) << 16) // g
      | (parse255(match[3]) << 8) // b
      | 0x000000ff // a
    ) >>> 0;
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return (
      (parse255(match[1]) << 24) // r
      | (parse255(match[2]) << 16) // g
      | (parse255(match[3]) << 8) // b
      | parse1(match[4]) // a
    ) >>> 0;
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return parseInt(
      ((match[1] + match[1] // r
      + match[2] + match[2] // g
      + match[3] + match[3]) + "ff"), // a
      16
    ) >>> 0;
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return parseInt(match[1], 16) >>> 0;
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return parseInt(
      match[1] + match[1] // r
      + match[2] + match[2] // g
      + match[3] + match[3] // b
      + match[4] + match[4], // a
      16
    ) >>> 0;
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return (
      hslToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
      )
      | 0x000000ff // a
    ) >>> 0;
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return (
      hslToRgb(
        parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
      )
      | parse1(match[4]) // a
    ) >>> 0;
  }
  return null;
}

/**
 * Translate the color to make sure native understood.
 */
function translateColor(color, options) {
  if ( options === void 0 ) options = {};

  var int32Color = baseColor(color);
  if (int32Color === null) {
    throw new Error(("Bad color value: " + color));
  }
  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  if (options && options.platform === 'android') {
    int32Color |= 0;
  }
  return int32Color;
}

/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PROPERTIES_MAP = {
  textDecoration: 'textDecorationLine',
  boxShadowOffset: 'shadowOffset',
  boxShadowOffsetX: 'shadowOffsetX',
  boxShadowOffsetY: 'shadowOffsetY',
  boxShadowOpacity: 'shadowOpacity',
  boxShadowRadius: 'shadowRadius',
  boxShadowSpread: 'shadowSpread',
  boxShadowColor: 'shadowColor',
  caretColor: 'caret-color',
};

// linear-gradient direction description map
var LINEAR_GRADIENT_DIRECTION_MAP = {
  totop: '0',
  totopright: 'totopright',
  toright: '90',
  tobottomright: 'tobottomright',
  tobottom: '180', // default value
  tobottomleft: 'tobottomleft',
  toleft: '270',
  totopleft: 'totopleft',
};

var DEGREE_UNIT = {
  TURN: 'turn',
  RAD: 'rad',
  DEG: 'deg',
};

var commentRegexp = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

/**
 * Trim `str`.
 */
function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}


/**
 * Adds non-enumerable parent node reference to each node.
 */
function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;
  Object.keys(obj).forEach(function (k) {
    var value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function (v) {
        addParent(v, childParent);
      });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  });
  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null,
    });
  }
  return obj;
}

/**
 * Convert the px unit to pt directly.
 * We found to the behavior of convert the unit directly is correct.
 */
function convertPxUnitToPt(value) {
  // If value is number just ignore
  if (Number.isInteger(value)) {
    return value;
  }
  // If value unit is px, change to use pt as 1:1.
  if (value.endsWith('px')) {
    var num = parseFloat(value.slice(0, value.indexOf('px')), 10);
    if (!Number.isNaN(num)) {
      value = num;
    }
  }
  return value;
}

/**
 * Parse the CSS to be AST tree.
 */
function parseCSS(css, options) {
  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   */
  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) { lineno += lines.length; }
    var i = str.lastIndexOf('\n');
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   */
  function position() {
    var start = { line: lineno, column: column };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node
   */
  var Position = function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
    this.content = css;
  };

  /**
   * Error `msg`.
   */
  var errorsList = [];
  function error(msg) {
    var err = new Error(((options.source) + ":" + lineno + ":" + column + ": " + msg));
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;
    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Parse stylesheet.
   */
  function stylesheet() {
    var rulesList = rules();

    return {
      type: 'stylesheet',
      stylesheet: {
        source: options.source,
        rules: rulesList,
        parsingErrors: errorsList,
      },
    };
  }

  /**
   * Opening brace.
   */
  function open() {
    return match(/^{\s*/);
  }

  /**
   * Closing brace.
   */
  function close() {
    return match(/^}/);
  }

  /**
   * Parse ruleset.
   */
  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);
    // eslint-disable-next-line no-cond-assign
    while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }
    return rules;
  }

  /**
   * Match `re` and return captures.
   */
  function match(re) {
    var m = re.exec(css);
    if (!m) {
      return null;
    }
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(/^\s*/);
  }

  /**
   * Parse comments;
   */
  function comments(rules) {
    if ( rules === void 0 ) rules = [];

    var c;
    rules = rules || [];
    while ((c = comment()) !== null) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   */
  function comment() {
    var pos = position();
    if (css.charAt(0) !== '/' || css.charAt(1) !== '*') {
      return null;
    }
    var i = 2;
    while (css.charAt(i) !== '' && (css.charAt(i) !== '*' || css.charAt(i + 1) !== '/')) {
      i += 1;
    }
    i += 2;
    if (css.charAt(i - 1) === '') {
      return error('End of comment missing');
    }
    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;
    return pos({
      type: 'comment',
      comment: str,
    });
  }

  /**
   * Parse selector.
   */

  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) {
      return null;
    }
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */
    return trim(m[0])
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
      .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) { return m.replace(/,/g, '\u200C'); })
      .split(/\s*(?![^(]*\)),\s*/)
      .map(function (s) { return s.replace(/\u200C/g, ','); });
  }

  /**
   * convert string value to string degree
   * @param {string} value
   * @param {string} unit
   */
  function convertToDegree(value, unit) {
    if ( unit === void 0 ) unit = DEGREE_UNIT.DEG;

    var convertedNumValue = parseFloat(value);
    var result = value || '';
    var ref = value.split('.');
    var decimals = ref[1];
    if (decimals && decimals.length > 2) {
      result = convertedNumValue.toFixed(2);
    }
    switch (unit) {
      // turn unit
      case DEGREE_UNIT.TURN:
        result = "" + ((convertedNumValue * 360).toFixed(2));
        break;
      // radius unit
      case DEGREE_UNIT.RAD:
        result = "" + ((180 / Math.PI * convertedNumValue).toFixed(2));
        break;
    }
    return result;
  }

  /**
   * parse gradient angle or direction
   * @param {string} value
   */
  function getLinearGradientAngle(value) {
    var processedValue = (value || '').replace(/\s*/g, '').toLowerCase();
    var reg = /^([+-]?\d+\.?\d*)+(deg|turn|rad)|(to\w+)$/g;
    var valueList = reg.exec(processedValue);
    if (!Array.isArray(valueList)) { return; }
    // default direction is to bottom, i.e. 180degree
    var angle = '180';
    var direction = valueList[0];
    var angleValue = valueList[1];
    var angleUnit = valueList[2];
    if (angleValue && angleUnit) { // angle value
      angle = convertToDegree(angleValue, angleUnit);
    } else if (direction && typeof LINEAR_GRADIENT_DIRECTION_MAP[direction] !== 'undefined') { // direction description
      angle = LINEAR_GRADIENT_DIRECTION_MAP[direction];
    } else {
      warn('linear-gradient direction or angle is invalid, default value [to bottom] would be used');
    }
    return angle;
  }

  /**
   * parse gradient color stop
   * @param {string} value
   */
  function getLinearGradientColorStop(value) {
    var processedValue = (value || '').replace(/\s+/g, ' ').trim();
    var ref = processedValue.split(/\s+(?![^(]*?\))/);
    var color = ref[0];
    var percentage = ref[1];
    var percentageCheckReg = /^([+-]?\d+\.?\d*)%$/g;
    if (color && !percentageCheckReg.exec(color) && !percentage) {
      return {
        color: translateColor(color),
      };
    }
    if (color && percentageCheckReg.exec(percentage)) {
      return {
        // color stop ratio
        ratio: parseFloat(percentage.split('%')[0]) / 100,
        color: translateColor(color),
      };
    }
    warn('linear-gradient color stop is invalid');
  }

  /**
   * parse backgroundImage
   * @param {string} property
   * @param {string|Object|number|boolean} value
   * @returns {(string|{})[]}
   */
  function parseBackgroundImage(property, value) {
    var assign;

    var processedValue = value;
    var processedProperty = property;
    if (value.indexOf('linear-gradient') === 0) {
      processedProperty = 'linearGradient';
      var valueString = value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
      var tokens = valueString.split(/,(?![^(]*?\))/);
      var colorStopList = [];
      processedValue = {};
      tokens.forEach(function (value, index) {
        if (index === 0) {
          // the angle of linear-gradient parameter can be optional
          var angle = getLinearGradientAngle(value);
          if (angle) {
            processedValue.angle = angle;
          } else {
            // if angle ignored, default direction is to bottom, i.e. 180degree
            processedValue.angle = '180';
            var colorObject = getLinearGradientColorStop(value);
            if (colorObject) { colorStopList.push(colorObject); }
          }
        } else {
          var colorObject$1 = getLinearGradientColorStop(value);
          if (colorObject$1) { colorStopList.push(colorObject$1); }
        }
      });
      processedValue.colorStopList = colorStopList;
    } else {
      var regexp = /(?:\(['"]?)(.*?)(?:['"]?\))/;
      var executed = regexp.exec(value);
      if (executed && executed.length > 1) {
        (assign = executed, processedValue = assign[1]);
      }
    }
    return [processedProperty, processedValue];
  }

  /**
   * Parse declaration.
   */
  function declaration() {
    var assign;

    var pos = position();
    // prop
    var prop = match(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) {
      return null;
    }
    prop = trim(prop[0]);
    // :
    if (!match(/^:\s*/)) {
      return error('property missing \':\'');
    }
    // val
    var propertyName = prop.replace(commentRegexp, '');
    var camelizedProperty = camelize(propertyName);
    var property = (function () {
      var property = PROPERTIES_MAP[camelizedProperty];
      if (property) {
        return property;
      }
      return camelizedProperty;
    })();
    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/);
    var value = val ? trim(val[0]).replace(commentRegexp, '') : '';
    switch (property) {
      case 'backgroundImage': {
        (assign = parseBackgroundImage(property, value), property = assign[0], value = assign[1]);
        break;
      }
      case 'transform': {
        var keyReg = /((\w+)\s*\()/;
        var valueReg = /(?:\(['"]?)(.*?)(?:['"]?\))/;
        var oldValue = value;
        value = [];
        oldValue.split(' ').forEach(function (transformKeyValue) {
          if (keyReg.test(transformKeyValue)) {
            var key = keyReg.exec(transformKeyValue)[2];
            var v = valueReg.exec(transformKeyValue)[1];
            if (v.indexOf('.') === 0) {
              v = "0" + v;
            }
            if (parseFloat(v).toString() === v) {
              v = parseFloat(v);
            }
            var transform = {};
            transform[key] = v;
            value.push(transform);
          } else {
            error('missing \'(\'');
          }
        });
        break;
      }
      case 'fontWeight':
        // Keep string and going on.
        break;
      case 'textShadowOffset': {
        var pos$1 = value.split(' ')
          .filter(function (v) { return v; })
          .map(function (v) { return convertPxUnitToPt(v); });
        var ref = pos$1;
        var width = ref[0];
        var ref$1 = pos$1;
        var height = ref$1[1];
        if (!height) {
          height = width;
        }
        value = {
          width: width,
          height: height,
        };
        break;
      }
      case 'shadowOffset': {
        var pos$2 = value.split(' ')
          .filter(function (v) { return v; })
          .map(function (v) { return convertPxUnitToPt(v); });
        var ref$2 = pos$2;
        var x = ref$2[0];
        var ref$3 = pos$2;
        var y = ref$3[1];
        if (!y) {
          y = x;
        }
        // FIXME: should not be width and height, should be x and y.
        value = {
          x: x,
          y: y,
        };
        break;
      }
      case 'collapsable':
        value = Boolean(value);
        break;
      default: {
        value = tryConvertNumber(value);
        // Convert the px to pt for specific properties
        var sizeProperties = ['top', 'left', 'right', 'bottom', 'height', 'width', 'size', 'padding', 'margin', 'ratio', 'radius', 'offset', 'spread'];
        if (sizeProperties.find(function (size) { return property.toLowerCase().indexOf(size) > -1; })) {
          value = convertPxUnitToPt(value);
        }
      }
    }

    var ret = pos({
      type: 'declaration',
      value: value,
      property: property,
    });
    // ;
    match(/^[;\s]*/);
    return ret;
  }

  /**
   * Parse declarations.
   */
  function declarations() {
    var decls = [];
    if (!open()) { return error('missing \'{\''); }
    comments(decls);
    // declarations
    var decl;
    while ((decl = declaration()) !== null) {
      if (decl !== false) {
        if (Array.isArray(decl)) {
          decls = decls.concat(decl);
        } else {
          decls.push(decl);
        }
        comments(decls);
      }
    }
    if (!close()) { return error('missing \'}\''); }
    return decls;
  }

  /**
   * Parse keyframe.
   */
  function keyframe() {
    var m;
    var vals = [];
    var pos = position();
    while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) !== null) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (!vals.length) {
      return null;
    }
    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations(),
    });
  }

  /**
   * Parse keyframes.
   */
  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);
    if (!m) {
      return null;
    }
    var vendor = m[1];
    // identifier
    m = match(/^([-\w]+)\s*/);
    if (!m) {
      return error('@keyframes missing name');
    }
    var name = m[1];
    if (!open()) { return error('@keyframes missing \'{\''); }
    var frame;
    var frames = comments();
    while ((frame = keyframe()) !== null) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) { return error('@keyframes missing \'}\''); }
    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames,
    });
  }

  /**
   * Parse supports.
   */
  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);
    if (!m) {
      return null;
    }
    var supports = trim(m[1]);
    if (!open()) { return error('@supports missing \'{\''); }
    var style = comments().concat(rules());
    if (!close()) { return error('@supports missing \'}\''); }
    return pos({
      type: 'supports',
      supports: supports,
      rules: style,
    });
  }

  /**
   * Parse host.
   */
  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);
    if (!m) {
      return null;
    }
    if (!open()) {
      return error('@host missing \'{\'');
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error('@host missing \'}\'');
    }
    return pos({
      type: 'host',
      rules: style,
    });
  }

  /**
   * Parse media.
   */
  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);
    if (!m) {
      return null;
    }
    var media = trim(m[1]);
    if (!open()) {
      return error('@media missing \'{\'');
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error('@media missing \'}\'');
    }
    return pos({
      type: 'media',
      media: media,
      rules: style,
    });
  }


  /**
   * Parse custom-media.
   */
  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) {
      return null;
    }

    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2]),
    });
  }

  /**
   * Parse paged media.
   */
  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) {
      return null;
    }
    var sel = selector() || [];
    if (!open()) {
      return error('@page missing \'{\'');
    }
    var decls = comments();
    // declarations
    var decl;
    while ((decl = declaration()) !== null) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error('@page missing \'}\'');
    }
    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls,
    });
  }

  /**
   * Parse document.
   */
  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) {
      return null;
    }
    var vendor = trim(m[1]);
    var doc = trim(m[2]);
    if (!open()) {
      return error('@document missing \'{\'');
    }
    var style = comments().concat(rules());
    if (!close()) {
      return error('@document missing \'}\'');
    }
    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style,
    });
  }

  /**
   * Parse font-face.
   */
  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) {
      return null;
    }
    if (!open()) {
      return error('@font-face missing \'{\'');
    }
    var decls = comments();
    // declarations
    var decl;
    while ((decl = declaration()) !== null) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) {
      return error('@font-face missing \'}\'');
    }
    return pos({
      type: 'font-face',
      declarations: decls,
    });
  }

  /**
   * Parse import
   */
  var atimport = compileAtRule('import');

  /**
   * Parse charset
   */
  var atcharset = compileAtRule('charset');

  /**
   * Parse namespace
   */
  var atnamespace = compileAtRule('namespace');

  /**
   * Parse non-block at-rules
   */
  function compileAtRule(name) {
    var re = new RegExp(("^@" + name + "\\s*([^;]+);"));
    return function () {
      var pos = position();
      var m = match(re);
      if (!m) {
        return null;
      }
      var ret = { type: name };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }

  /**
   * Parse at rule.
   */
  function atrule() {
    if (css[0] !== '@') {
      return null;
    }
    return atkeyframes()
      || atmedia()
      || atcustommedia()
      || atsupports()
      || atimport()
      || atcharset()
      || atnamespace()
      || atdocument()
      || atpage()
      || athost()
      || atfontface();
  }

  /**
   * Parse rule.
   */
  function rule() {
    var pos = position();
    var sel = selector();
    if (!sel) { return error('selector missing'); }
    comments();
    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations(),
    });
  }
  return addParent(stylesheet());
}

/*
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var sourceId = 0;

/**
 * Convert the CSS text to AST that able to parse by selector parser.
 */
function hippyVueCSSLoader(source) {
  var options = getOptions_1$1(this);
  var parsed = parseCSS(source, { source: sourceId });

  var majorNodeVersion = parseInt(process.versions.node.split('.')[0], 10);
  var hashType = majorNodeVersion >= 17 ? 'md5' : 'md4';
  var hash = crypto.createHash(hashType);
  var contentHash = hash.update(source).digest('hex');
  sourceId += 1;
  var rulesAst = parsed.stylesheet.rules.filter(function (n) { return n.type === 'rule'; }).map(function (n) { return ({
    hash: contentHash,
    selectors: n.selectors,
    declarations: n.declarations.map(function (dec) {
      var value = dec.value;
      // FIXME: Should have a strict property with colors map.
      if (dec.property && dec.property.toLowerCase().indexOf('color') > -1) {
        value = translateColor(value, options);
      }
      return {
        type: dec.type,
        property: dec.property,
        value: value,
      };
    }),
  }); });
  var code = "(function() {\n    if (!global['" + GLOBAL_STYLE_NAME + "']) {\n      global['" + GLOBAL_STYLE_NAME + "'] = [];\n    }\n    global['" + GLOBAL_STYLE_NAME + "'] = global['" + GLOBAL_STYLE_NAME + "'].concat(" + (JSON.stringify(rulesAst)) + ");\n\n    if(module.hot) {\n      module.hot.dispose(() => {\n        console.log('disposeHandlers');\n        if(!global['" + GLOBAL_DISPOSE_STYLE_NAME + "']) {\n          global['" + GLOBAL_DISPOSE_STYLE_NAME + "'] = [];\n        }\n        global['" + GLOBAL_DISPOSE_STYLE_NAME + "'] = global['" + GLOBAL_DISPOSE_STYLE_NAME + "'].concat('" + contentHash + "');\n      })\n    }\n  })()";
  return ("module.exports=" + code);
}

module.exports = hippyVueCSSLoader;
