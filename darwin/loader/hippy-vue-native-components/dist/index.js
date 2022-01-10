/*!
 * @hippy/vue-native-components v2.12.0
 * (Using Vue v2.6.11 and Hippy-Vue v2.12.0)
 * Build at: Mon Jan 10 2022 23:14:53 GMT+0800 (China Standard Time)
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

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
function registerAnimation(Vue) {
  // Constants for animations
  var MODULE_NAME = 'AnimationModule';
  var DEFAULT_OPTION = {
    valueType: undefined,
    delay: 0,
    startValue: 0,
    toValue: 0,
    duration: 0,
    direction: 'center',
    timingFunction: 'linear',
    repeatCount: 0,
    inputRange: [],
    outputRange: [],
  };

  /**
   * parse value of special value type
   * @param {string} valueType
   * @param {*} originalValue
   */
  function parseValue(valueType, originalValue) {
    if (valueType === 'color' && ['number', 'string'].indexOf(typeof originalValue) >= 0) {
      return Vue.Native.parseColor(originalValue);
    }
    return originalValue;
  }

  /**
   * Create the standalone animation
   */
  function createAnimation(option) {
    var mode = option.mode; if ( mode === void 0 ) mode = 'timing';
    var valueType = option.valueType;
    var startValue = option.startValue;
    var toValue = option.toValue;
    var rest = objectWithoutProperties( option, ["mode", "valueType", "startValue", "toValue"] );
    var others = rest;
    var fullOption = Object.assign({}, DEFAULT_OPTION,
      others);
    if (valueType !== undefined) {
      fullOption.valueType = option.valueType;
    }
    fullOption.startValue = parseValue(fullOption.valueType, startValue);
    fullOption.toValue = parseValue(fullOption.valueType, toValue);
    var animationId = Vue.Native.callNativeWithCallbackId(MODULE_NAME, 'createAnimation', true, mode, fullOption);
    return {
      animationId: animationId,
    };
  }

  /**
   * Create the animationSet
   */
  function createAnimationSet(children, repeatCount) {
    if ( repeatCount === void 0 ) repeatCount = 0;

    return Vue.Native.callNativeWithCallbackId(MODULE_NAME, 'createAnimationSet', true, {
      children: children,
      repeatCount: repeatCount,
    });
  }

  /**
   * Generate the styles from animation and animationSet Ids.
   */
  function getStyle(actions, childAnimationIdList) {
    if ( childAnimationIdList === void 0 ) childAnimationIdList = [];

    var style = {};
    Object.keys(actions).forEach(function (key) {
      if (Array.isArray(actions[key])) {
        // Process AnimationSet from Array.
        var actionSet = actions[key];
        var ref = actionSet[actionSet.length - 1];
        var repeatCount = ref.repeatCount;
        var animationSetActions = actionSet.map(function (a) {
          var action = createAnimation(Object.assign({}, a, { repeatCount: 0 }));
          childAnimationIdList.push(action.animationId);
          action.follow = true;
          return action;
        });
        var animationSetId = createAnimationSet(animationSetActions, repeatCount);
        style[key] = {
          animationId: animationSetId,
        };
      } else {
        // Process standalone Animation.
        var action = actions[key];
        var animation = createAnimation(action);
        var animationId = animation.animationId;
        style[key] = {
          animationId: animationId,
        };
      }
    });
    return style;
  }

  /**
   * Get animationIds from style for start/pause/destroy actions.
   */
  function getAnimationIds(style) {
    var transform = style.transform;
    var rest = objectWithoutProperties( style, ["transform"] );
    var otherStyles = rest;
    var animationIds = Object.keys(otherStyles).map(function (key) { return style[key].animationId; });
    if (Array.isArray(transform) && transform.length > 0) {
      var transformIds = [];
      transform.forEach(function (entity) { return Object.keys(entity)
        .forEach(function (key) {
          if (entity[key]) {
            var ref = entity[key];
            var animationId = ref.animationId;
            if (typeof animationId === 'number' && animationId % 1 === 0) {
              transformIds.push(animationId);
            }
          }
        }); });
      animationIds = animationIds.concat( transformIds);
    }
    return animationIds;
  }

  /**
   * Register the animation component.
   */
  Vue.component('Animation', {
    inheritAttrs: false,
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      playing: {
        type: Boolean,
        default: false,
      },
      actions: {
        type: Object,
        required: true,
      },
      props: Object,
    },
    data: function data() {
      return {
        style: {},
        animationIds: [],
        animationEventMap: {},
        childAnimationIdList: [],
      };
    },
    watch: {
      playing: function playing(to, from) {
        if (!from && to) {
          this.start();
        } else if (from && !to) {
          this.pause();
        }
      },
      actions: function actions() {
        // FIXME: Should diff the props and use updateAnimation method to update the animation.
        //        Hard restart the animation is no correct.
        this.destroy();
        this.create();
      },
    },
    created: function created() {
      var animationEventName = 'onAnimation';
      // If running in Android, change it.
      if (Vue.Native.Platform === 'android') {
        animationEventName = 'onHippyAnimation';
      }
      this.childAnimationIdList = [];
      this.animationEventMap = {
        start: (animationEventName + "Start"),
        end: (animationEventName + "End"),
        repeat: (animationEventName + "Repeat"),
        cancel: (animationEventName + "Cancel"),
      };
      if (Vue.getApp) {
        this.app = Vue.getApp();
      }
    },
    beforeMount: function beforeMount() {
      this.create();
    },
    mounted: function mounted() {
      var ref = this.$props;
      var playing = ref.playing;
      if (playing) {
        this.start();
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.destroy();
    },
    methods: {
      create: function create() {
        var ref = this.$props;
        var ref_actions = ref.actions;
        var transform = ref_actions.transform;
        var rest = objectWithoutProperties( ref_actions, ["transform"] );
        var actions = rest;
        var style = getStyle(actions, this.childAnimationIdList);
        if (transform) {
          var transformAnimations = getStyle(transform, this.childAnimationIdList);
          style.transform = Object.keys(transformAnimations).map(function (key) {
            var obj;

            return (( obj = {}, obj[key] = transformAnimations[key], obj ));
          });
        }
        // Turn to be true at first startAnimation, and be false again when destroy.
        this.$alreadyStarted = false;
        // Generated style
        this.style = style;
      },
      removeAnimationEvent: function removeAnimationEvent() {
        var this$1 = this;

        Object.keys(this.animationEventMap).forEach(function (key) {
          var eventName = this$1.animationEventMap[key];
          if (eventName && this$1.app && this$1[("" + eventName)]) {
            this$1.app.$off(eventName, this$1[("" + eventName)]);
          }
        });
      },
      addAnimationEvent: function addAnimationEvent() {
        var this$1 = this;

        Object.keys(this.animationEventMap).forEach(function (key) {
          var eventName = this$1.animationEventMap[key];
          if (eventName && this$1.app) {
            this$1[("" + eventName)] = function eventHandler(animationId) {
              if (this.animationIds.indexOf(animationId) >= 0) {
                if (key !== 'repeat') {
                  this.app.$off(eventName, this[("" + eventName)]);
                }
                this.$emit(key);
              }
            }.bind(this$1);
            this$1.app.$on(eventName, this$1[("" + eventName)]);
          }
        });
      },
      reset: function reset() {
        this.$alreadyStarted = false;
      },
      start: function start() {
        if (!this.$alreadyStarted) {
          var animationIds = getAnimationIds(this.style);
          this.animationIds = animationIds;
          this.$alreadyStarted = true;
          this.removeAnimationEvent();
          this.addAnimationEvent();
          animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'startAnimation', animationId); });
        } else {
          this.resume();
        }
      },
      resume: function resume() {
        var animationIds = getAnimationIds(this.style);
        animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'resumeAnimation', animationId); });
      },
      pause: function pause() {
        if (!this.$alreadyStarted) {
          return;
        }
        var animationIds = getAnimationIds(this.style);
        animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'pauseAnimation', animationId); });
      },
      destroy: function destroy() {
        this.removeAnimationEvent();
        this.$alreadyStarted = false;
        var animationIds = getAnimationIds(this.style);
        this.childAnimationIdList.forEach(function (animationId) { return Number.isInteger(animationId)
            && Vue.Native.callNative(MODULE_NAME, 'destroyAnimation', animationId); });
        animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'destroyAnimation', animationId); });
        this.childAnimationIdList = [];
      },
    },
    template: "\n      <component :is=\"tag\" :useAnimation=\"true\" :style=\"style\" v-bind=\"props\">\n        <slot />\n      </component>\n    ",
  });
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

function registerDialog(Vue) {
  Vue.registerElement('dialog', {
    component: {
      name: 'Modal',
      defaultNativeProps: {
        transparent: true,
        immersionStatusBar: true,
      },
    },
  });
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

/**
 * Capitalize a word
 *
 * @param {string} str The word input
 * @returns string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return ("" + (str.charAt(0).toUpperCase()) + (str.slice(1)));
}

/**
 * Get binding events redirector
 *
 * The function should be called with `getEventRedirector.call(this, [])`
 * for binding this.
 *
 * @param {string[] | string[][]} events events will be redirect
 * @returns Object
 */
function getEventRedirector(events) {
  var this$1 = this;

  var on = {};
  events.forEach(function (event) {
    if (Array.isArray(event)) {
      // exposedEventName is used in vue declared, nativeEventName is used in native
      var exposedEventName = event[0];
      var nativeEventName = event[1];
      if (Object.prototype.hasOwnProperty.call(this$1.$listeners, exposedEventName)) {
        // Use event handler first if declared
        if (this$1[("on" + (capitalize(nativeEventName)))]) {
          // event will be converted like "dropped,pageSelected" which assigned to "on" object
          on[event] = this$1[("on" + (capitalize(nativeEventName)))];
        } else {
          // if no event handler found, emit default exposedEventName.
          on[event] = function (evt) { return this$1.$emit(exposedEventName, evt); };
        }
      }
    } else if (Object.prototype.hasOwnProperty.call(this$1.$listeners, event)) {
      if (this$1[("on" + (capitalize(event)))]) {
        on[event] = this$1[("on" + (capitalize(event)))];
      } else {
        on[event] = function (evt) { return this$1.$emit(event, evt); };
      }
    }
  });
  return on;
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

function registerUlRefresh(Vue) {
  Vue.registerElement('hi-ul-refresh-wrapper', {
    component: {
      name: 'RefreshWrapper',
    },
  });

  Vue.registerElement('hi-refresh-wrapper-item', {
    component: {
      name: 'RefreshWrapperItemView',
    },
  });

  Vue.component('UlRefreshWrapper', {
    inheritAttrs: false,
    props: {
      bounceTime: {
        type: Number,
        defaultValue: 100,
      },
    },
    methods: {
      startRefresh: function startRefresh() {
        Vue.Native.callUIFunction(this.$refs.refreshWrapper, 'startRefresh', null);
      },
      refreshCompleted: function refreshCompleted() {
        // FIXME: Here's a typo mistake `refreshComplected` in native sdk.
        Vue.Native.callUIFunction(this.$refs.refreshWrapper, 'refreshComplected', null);
      },
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        'refresh' ]);
      return h('hi-ul-refresh-wrapper', {
        on: on,
        ref: 'refreshWrapper',
      }, this.$slots.default);
    },
  });

  Vue.component('UlRefresh', {
    inheritAttrs: false,
    template: "\n      <hi-refresh-wrapper-item :style=\"{position: 'absolute', left: 0, right: 0}\">\n        <div>\n          <slot />\n        </div>\n      </hi-refresh-wrapper-item>\n    ",
  });
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

function registerSwiper(Vue) {
  Vue.registerElement('hi-swiper', {
    component: {
      name: 'ViewPager',
      processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onPageSelected':
            event.currentSlide = nativeEventParams.position;
            break;
          case 'onPageScroll':
            event.nextSlide = nativeEventParams.position;
            event.offset = nativeEventParams.offset;
            break;
          case 'onPageScrollStateChanged':
            event.state = nativeEventParams.pageScrollState;
            break;
        }
        return event;
      },
    },
  });

  Vue.registerElement('swiper-slide', {
    component: {
      name: 'ViewPagerItem',
      defaultNativeStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  });

  Vue.component('Swiper', {
    inheritAttrs: false,
    props: {
      current: {
        type: Number,
        defaultValue: 0,
      },
      needAnimation: {
        type: Boolean,
        defaultValue: true,
      },
    },
    watch: {
      current: function current(to) {
        if (this.$props.needAnimation) {
          this.setSlide(to);
        } else {
          this.setSlideWithoutAnimation(to);
        }
      },
    },
    beforeMount: function beforeMount() {
      this.$initialSlide = this.$props.current;
    },
    methods: {
      setSlide: function setSlide(slideIndex) {
        Vue.Native.callUIFunction(this.$refs.swiper, 'setPage', [slideIndex]);
      },
      setSlideWithoutAnimation: function setSlideWithoutAnimation(slideIndex) {
        Vue.Native.callUIFunction(this.$refs.swiper, 'setPageWithoutAnimation', [slideIndex]);
      },
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        ['dropped', 'pageSelected'],
        ['dragging', 'pageScroll'],
        ['stateChanged', 'pageScrollStateChanged'] ]);
      return h('hi-swiper', {
        on: on,
        ref: 'swiper',
        attrs: {
          initialPage: this.$initialSlide,
        },
      }, this.$slots.default);
    },
  });
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

var PULLING_EVENT = 'pulling';
var IDLE_EVENT = 'idle';

function registerPull(Vue) {
  var ref = Vue.Native;
  var callUIFunction = ref.callUIFunction;
  [
    ['Header', 'header'],
    ['Footer', 'footer'] ].forEach(function (ref) {
    var obj;

    var capitalCase = ref[0];
    var lowerCase = ref[1];
    /**
     * PullView native component
     *
     * Methods：
     * expandPull() - Expand the PullView and display the content
     * collapsePull() - collapse the PullView and hide the content
     *
     * Events：
     * onReleased - Trigger when release the finger after pulling gap larger than the content height
     * onPulling - Trigger when pulling, will use it to trigger idle and pulling method
     */
    Vue.registerElement(("hi-pull-" + lowerCase), {
      component: {
        name: ("Pull" + capitalCase + "View"),
        processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
          switch (nativeEventName) {
            case ("on" + capitalCase + "Released"):
            case ("on" + capitalCase + "Pulling"):
              Object.assign(event, nativeEventParams);
              break;
          }
          return event;
        },
      },
    });

    Vue.component(("pull-" + lowerCase), {
      methods: ( obj = {}, obj[("expandPull" + capitalCase)] = function () {
          callUIFunction(this.$refs.instance, ("expandPull" + capitalCase));
        }, obj[("collapsePull" + capitalCase)] = function (options) {
          if (capitalCase === 'Header') {
            // options: { time }
            if (Vue.Native.Platform === 'android') {
              callUIFunction(this.$refs.instance, ("collapsePull" + capitalCase), [options]);
            } else {
              if (typeof options !== 'undefined') {
                callUIFunction(this.$refs.instance, ("collapsePull" + capitalCase + "WithOptions"), [options]);
              } else {
                callUIFunction(this.$refs.instance, ("collapsePull" + capitalCase));
              }
            }
          } else {
            callUIFunction(this.$refs.instance, ("collapsePull" + capitalCase));
          }
        }, obj.onLayout = function onLayout(evt) {
          this.$contentHeight = evt.height;
        }, obj[("on" + capitalCase + "Released")] = function (evt) {
          this.$emit('released', evt);
        }, obj[("on" + capitalCase + "Pulling")] = function (evt) {
          if (evt.contentOffset > this.$contentHeight) {
            if (this.$lastEvent !== PULLING_EVENT) {
              this.$lastEvent = PULLING_EVENT;
              this.$emit(PULLING_EVENT, evt);
            }
          } else if (this.$lastEvent !== IDLE_EVENT) {
            this.$lastEvent = IDLE_EVENT;
            this.$emit(IDLE_EVENT, evt);
          }
        }, obj ),
      render: function render(h) {
        var ref = this.$listeners;
        var released = ref.released;
        var pulling = ref.pulling;
        var idle = ref.idle;
        var on = {
          layout: this.onLayout,
        };
        if (typeof released === 'function') {
          on[(lowerCase + "Released")] = this[("on" + capitalCase + "Released")];
        }
        if (typeof pulling === 'function' || typeof idle === 'function') {
          on[(lowerCase + "Pulling")] = this[("on" + capitalCase + "Pulling")];
        }
        return h(("hi-pull-" + lowerCase), {
          on: on,
          ref: 'instance',
        }, this.$slots.default);
      },
    });
  });
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

function registerWaterfall(Vue) {
  Vue.registerElement('hi-waterfall', {
    component: {
      name: 'WaterfallView',
      processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
        switch (nativeEventName) {
          case 'onExposureReport':
            event.exposureInfo = nativeEventParams.exposureInfo;
            break;
          case 'onScroll': {
            /**
             * scroll event parameters
             *
             * @param {number} startEdgePos - Scrolled offset of List top edge
             * @param {number} endEdgePos - Scrolled offset of List end edge
             * @param {number} firstVisibleRowIndex - Index of the first list item at current visible screen
             * @param {number} lastVisibleRowIndex - Index of the last list item at current visible screen
             * @param {Object[]} visibleRowFrames - Frame info of current screen visible items
             * @param {number} visibleRowFrames[].x - Current item's horizontal offset relative to ListView
             * @param {number} visibleRowFrames[].y - Current item's vertical offset relative to ListView
             * @param {number} visibleRowFrames[].width - Current item's width
             * @param {number} visibleRowFrames[].height - Current item's height
             */
            var startEdgePos = nativeEventParams.startEdgePos;
            var endEdgePos = nativeEventParams.endEdgePos;
            var firstVisibleRowIndex = nativeEventParams.firstVisibleRowIndex;
            var lastVisibleRowIndex = nativeEventParams.lastVisibleRowIndex;
            var visibleRowFrames = nativeEventParams.visibleRowFrames;
            Object.assign(event, {
              startEdgePos: startEdgePos,
              endEdgePos: endEdgePos,
              firstVisibleRowIndex: firstVisibleRowIndex,
              lastVisibleRowIndex: lastVisibleRowIndex,
              visibleRowFrames: visibleRowFrames,
            });
            break;
          }
        }
        return event;
      },
    },
  });
  Vue.registerElement('hi-waterfall-item', {
    component: {
      name: 'WaterfallItem',
    },
  });
  Vue.component('Waterfall', {
    inheritAttrs: false,
    props: {
      // specific number of waterfall column
      numberOfColumns: {
        type: Number,
        default: 2,
      },
      // inner content padding
      contentInset: {
        type: Object,
        default: function () { return ({ top: 0, left: 0, bottom: 0, right: 0 }); },
      },
      // horizontal space between columns
      columnSpacing: {
        type: Number,
        default: 0,
      },
      interItemSpacing: {
        type: Number,
        default: 0,
      },
      preloadItemNumber: {
        type: Number,
        default: 0,
      },
      containBannerView: {
        type: Boolean,
        default: false,
      },
      containPullHeader: {
        type: Boolean,
        default: false,
      },
      containPullFooter: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      // call native methods
      call: function call(action, params) {
        Vue.Native.callUIFunction(this.$refs.waterfall, action, params);
      },
      startRefresh: function startRefresh() {
        this.call('startRefresh');
      },
      /** @param {number} type 1.same as startRefresh */
      startRefreshWithType: function startRefreshWithType(type) {
        this.call('startRefreshWithType', [type]);
      },
      callExposureReport: function callExposureReport() {
        this.call('callExposureReport', []);
      },
      /**
       * Scrolls to a given index of item, either immediately, with a smooth animation.
       *
       * @param {Object} scrollToIndex params
       * @param {number} scrollToIndex.index - Scroll to specific index.
       * @param {boolean} scrollToIndex.animated - With smooth animation. By default is true.
       */
      scrollToIndex: function scrollToIndex(ref) {
        var index = ref.index; if ( index === void 0 ) index = 0;
        var animated = ref.animated; if ( animated === void 0 ) animated = true;

        if (typeof index !== 'number' || typeof animated !== 'boolean') {
          return;
        }
        this.call('scrollToIndex', [index, index, animated]);
      },
      /**
       * Scrolls to a given x, y offset, either immediately, with a smooth animation.
       *
       * @param {Object} scrollToContentOffset params
       * @param {number} scrollToContentOffset.xOffset - Scroll to horizon offset X.
       * @param {number} scrollToContentOffset.yOffset - Scroll To vertical offset Y.
       * @param {boolean} scrollToContentOffset.animated - With smooth animation. By default is true.
       */
      scrollToContentOffset: function scrollToContentOffset(ref) {
        var xOffset = ref.xOffset; if ( xOffset === void 0 ) xOffset = 0;
        var yOffset = ref.yOffset; if ( yOffset === void 0 ) yOffset = 0;
        var animated = ref.animated; if ( animated === void 0 ) animated = true;

        if (typeof xOffset !== 'number' || typeof yOffset !== 'number' || typeof animated !== 'boolean') {
          return;
        }
        this.call('scrollToContentOffset', [xOffset, yOffset, animated]);
      },
      /**
       * start to load more waterfall items
       */
      startLoadMore: function startLoadMore() {
        this.call('startLoadMore');
      },
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        'headerReleased',
        'headerPulling',
        'endReached',
        'exposureReport',
        'initialListReady',
        'scroll' ]);
      return h(
        'hi-waterfall',
        {
          on: on,
          ref: 'waterfall',
          attrs: {
            numberOfColumns: this.numberOfColumns,
            contentInset: this.contentInset,
            columnSpacing: this.columnSpacing,
            interItemSpacing: this.interItemSpacing,
            preloadItemNumber: this.preloadItemNumber,
            containBannerView: this.containBannerView,
            containPullHeader: this.containPullHeader,
            containPullFooter: this.containPullFooter,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component('WaterfallItem', {
    inheritAttrs: false,
    props: {
      type: {
        type: [String, Number],
        default: '',
      },
    },
    render: function render(h) {
      return h(
        'hi-waterfall-item',
        {
          on: Object.assign({}, this.$listeners),
          attrs: {
            type: this.type,
          },
        },
        this.$slots.default
      );
    },
  });
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

/**
 * Register all of native components
 */
var HippyVueNativeComponents = {
  install: function install(Vue) {
    registerAnimation(Vue);
    registerDialog(Vue);
    registerUlRefresh(Vue);
    registerSwiper(Vue);
    registerPull(Vue);
    registerWaterfall(Vue);
  },
};

export default HippyVueNativeComponents;
export { registerAnimation as AnimationComponent, registerDialog as DialogComponent, registerUlRefresh as ListRefreshComponent, registerPull as PullsComponents, registerSwiper as SwiperComponent, registerWaterfall as WaterfallComponent };
