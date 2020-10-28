/*!
 * @hippy/vue-native-components v2.0.3
 * (Using Vue v2.6.11 and Hippy-Vue v2.0.3)
 * Build at: Wed Oct 28 2020 16:09:46 GMT+0800 (China Standard Time)
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2020 THL A29 Limited, a Tencent company.
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
   * Create the standalone animation
   */
  function createAnimation(option) {
    var mode = option.mode; if ( mode === void 0 ) mode = 'timing';
    var valueType = option.valueType;
    var rest = objectWithoutProperties( option, ["mode", "valueType"] );
    var others = rest;
    var fullOption = Object.assign({}, DEFAULT_OPTION,
      others);
    if (valueType !== undefined) {
      fullOption.valueType = option.valueType;
    }
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
  function getStyle(actions) {
    var style = {};
    Object.keys(actions).forEach(function (key) {
      if (Array.isArray(actions[key])) {
        // Process AnimationSet from Array.
        var actionSet = actions[key];
        var animationSetActions = actionSet.map(function (a) {
          var action = createAnimation(a);
          action.follow = true;
          return action;
        });
        var ref = actionSet[actionSet.length - 1];
        var repeatCount = ref.repeatCount;
        var animationSetId = createAnimationSet(animationSetActions, repeatCount);
        style[key] = {
          animationId: animationSetId,
        };
      } else {
        // Process standalone Animation.
        var action = actions[key];
        var animation = createAnimation(action);
        style[key] = {
          animationId: animation.animationId,
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
      var transformIds = Object.keys(transform[0]).map(function (key) { return transform[0][key].animationId; });
      animationIds = animationIds.concat( transformIds);
    }
    return animationIds;
  }

  /**
   * Register the animation component.
   */
  Vue.component('animation', {
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
    data: function data() {
      return {
        style: {},
      };
    },
    methods: {
      create: function create() {
        var ref = this.$props;
        var ref_actions = ref.actions;
        var transform = ref_actions.transform;
        var rest = objectWithoutProperties( ref_actions, ["transform"] );
        var actions = rest;
        var style = getStyle(actions);
        if (transform) {
          var transformAnimations = getStyle(transform);
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
      start: function start() {
        var animationIds = getAnimationIds(this.style);
        if (!this.$alreadyStarted) {
          this.$alreadyStarted = true;
          animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'startAnimation', animationId); });
        } else {
          animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'resumeAnimation', animationId); });
        }
      },
      pause: function pause() {
        if (!this.$alreadyStarted) {
          return;
        }
        var animationIds = getAnimationIds(this.style);
        animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'pauseAnimation', animationId); });
      },
      destroy: function destroy() {
        this.$alreadyStarted = false;
        var animationIds = getAnimationIds(this.style);
        animationIds.forEach(function (animationId) { return Vue.Native.callNative(MODULE_NAME, 'destroyAnimation', animationId); });
      },
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
        var this$1 = this;

        // FIXME: Should diff the props and use updateAnimation method to update the animation.
        //        Hard restart the animation is no correct.
        var ref = this.$props;
        var playing = ref.playing;
        this.destroy();
        this.create();
        if (playing) {
          this.$nextTick(function () { return this$1.start(); });
        }
      },
    },
    template: "\n      <component :is=\"tag\" :useAnimation=\"true\" :style=\"style\" v-bind=\"props\">\n        <slot />\n      </component>\n    ",
  });
}

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

/**
 * Capitalize a word
 *
 * @param {string} s The word input
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
 * The function should be calld with `getEventRedirector.call(this, [])`
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
      var exposedEventName = event[0];
      var nativeEventName = event[1];
      if (Object.prototype.hasOwnProperty.call(this$1.$listeners, exposedEventName)) {
        on[event] = this$1[("on" + (capitalize(nativeEventName)))];
      }
    } else if (Object.prototype.hasOwnProperty.call(this$1.$listeners, event)) {
      on[event] = this$1[("on" + (capitalize(event)))];
    }
  });
  return on;
}

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

  Vue.component('ul-refresh-wrapper', {
    inheritAttrs: false,
    props: {
      bounceTime: {
        type: Number,
        defaultValue: 100,
      },
    },
    methods: {
      onRefresh: function onRefresh(evt) {
        this.$emit('refresh', evt);
      },
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

  Vue.component('ul-refresh', {
    inheritAttrs: false,
    template: "\n      <hi-refresh-wrapper-item :style=\"{position: 'absolute', left: 0, right: 0}\">\n        <div>\n          <slot />\n        </div>\n      </hi-refresh-wrapper-item>\n    ",
  });
}

/* eslint-disable no-param-reassign */

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

  Vue.component('swiper', {
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
      // On dragging
      onPageScroll: function onPageScroll(evt) {
        this.$emit('dragging', evt);
      },
      // On dropped finished dragging.
      onPageSelected: function onPageSelected(evt) {
        this.$emit('dropped', evt);
      },
      // On page scroll state changed.
      onPageScrollStateChanged: function onPageScrollStateChanged(evt) {
        this.$emit('stateChanged', evt);
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
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        ['dropped', 'pageSelected'],
        ['dragging', 'pageScroll'],
        ['stateChanged', 'pageScrollStateChanged'] ]);
      return h('hi-swiper', {
        on: on,
        ref: 'swiper',
        props: {
          initialPage: this.$initialSlide,
        },
      }, this.$slots.default);
    },
  });
}

/**
 * Register the Animation component only
 */
var AnimationComponent = {
  install: function install(Vue) {
    registerAnimation(Vue);
  },
};

/**
 * Register the modal component only.
 */
var DialogComponent = {
  install: function install(Vue) {
    registerDialog(Vue);
  },
};

/**
 * Register the ul refresh wrapper and refresh component.
 */
var ListRefreshComponent = {
  install: function install(Vue) {
    registerUlRefresh(Vue);
  },
};

/**
 * Register the swiper component.
 */
var SwiperComponent = {
  install: function install(Vue) {
    registerSwiper(Vue);
  },
};

/**
 * Register all of native components
 */
var HippyVueNativeComponents = {
  install: function install(Vue) {
    registerAnimation(Vue);
    registerDialog(Vue);
    registerUlRefresh(Vue);
    registerSwiper(Vue);
  },
};

export default HippyVueNativeComponents;
export { AnimationComponent, DialogComponent, ListRefreshComponent, SwiperComponent };
