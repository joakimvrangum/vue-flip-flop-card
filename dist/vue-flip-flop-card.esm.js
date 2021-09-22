//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    styleObj: {
      type: Object,
      required: true
    },
    front: {
      type: Boolean,
      default: false
    },
    back: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bgColor() {
      return `background: linear-gradient(${this.styleObj.themeColor || 'transparent'}, ${this.styleObj.themeColor2 || 'transparent'});`;
    },

    styledImage() {
      return `background-image: linear-gradient(to right, ${this.styleObj.themeColor || 'transparent'}, ${this.styleObj.themeColor2 || 'transparent'}), url(${this.styleObj.coverImg});` + `height: ${400 * 0.35}px;`;
    },

    styledTitle() {
      return `background-image: linear-gradient(to right bottom, ${this.convertHexToRGB(this.styleObj.themeColor)}, ${this.convertHexToRGB(this.styleObj.themeColor2)});`;
    }

  },
  methods: {
    convertHexToRGB: function (hex, alpha = 0.87) {
      let r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "styled",
    style: _vm.styleObj.bgColorFill ? _vm.bgColor : null
  }, [_c('div', {
    staticClass: "styled__image",
    style: _vm.styledImage
  }), _vm._v(" "), _vm.styleObj.coverTitle ? _c('h4', {
    staticClass: "styled__title"
  }, [_c('span', {
    staticClass: "styled__title-span",
    style: _vm.styledTitle
  }, [_vm._v(_vm._s(_vm.styleObj.coverTitle))])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "styled__content"
  }, [_vm.front ? _vm._t("front") : _vm._e(), _vm._v(" "), _vm.back ? _vm._t("back") : _vm._e()], 2)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-c5ab763c_0", {
    source: ".styled[data-v-c5ab763c]{height:100%}.styled__image[data-v-c5ab763c]{background-size:cover;background-blend-mode:screen;clip-path:polygon(0 0,100% 0,100% 85%,0 100%)}.styled__title[data-v-c5ab763c]{font-size:1.5rem;font-weight:600;text-transform:uppercase;text-align:right;position:absolute;top:30%;right:0}.styled__title-span[data-v-c5ab763c]{padding:.7rem 1rem;box-decoration-break:clone;-webkit-box-decoration-break:clone;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 12px 0 rgba(0,0,0,.19)}.styled__content[data-v-c5ab763c]{position:absolute;top:44%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-c5ab763c";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
/**
 * A card.. for vue.. that flips!
 * @displayName Vue Flip Flop Card
 * @author Joakim Vrangum
 * @see {@link https://www.npmjs.com/package/vue-flip-flop-card)|NPM}
 * @see {@link https://github.com/joakimvrangum/vue-flip-flop-card)|GitHub}
 */

var script = {
  name: 'FlipFlopCard',
  components: {
    StyledCard: __vue_component__$1
  },
  props: {
    /**
     * Height of the card in pixels
     * Type: Number | Default: 450
     */
    height: {
      type: Number,
      default: 450
    },

    /**
     * Width of the card in pixels
     * Type: Number | Default 350
     */
    width: {
      type: Number,
      default: 350
    },

    /**
     * Direction of the flip
     * @values horizontal, vertical
     */
    direction: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['horizontal', 'vertical'].indexOf(value.toLowerCase()) !== -1;
      }
    },

    /**
     * Disable the flip effect of the card
     * @values true, false
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * A calculated speed on the transition flip-effect
     * @values Number between 1-10 | 1 being fastest and 10 being slowest
     */
    speed: {
      type: Number,
      default: 5
    },

    /**
     * The border box-shadow effect
     * @values Number between 1-10 | Default 0 (no effect)
     */
    elevation: {
      type: Number,
      default: 0
    },

    /**
     * Object for passing options to the styled front of the card
     * @see {@link https://github.com/joakimvrangum/vue-flip-flop-card#styled-card-)|Docs}
     */
    styledFront: {
      type: Object
    },

    /**
     * Object for passing options to the styled back of the card
     * @see {@link https://github.com/joakimvrangum/vue-flip-flop-card#styled-card-)|Docs}
     */
    styledBack: {
      type: Object
    }
  },
  computed: {
    transformSpeed() {
      return `transform ${this.speed / 6.5}s ease`;
    },

    elevationEffect() {
      return `0 0 12px rgba(173, 173, 173, ${this.elevation / 10})`;
    }

  }
};

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "flip-flop-card",
    style: {
      'height': _vm.height + 'px',
      'width': _vm.width + 'px'
    }
  }, [_c('div', {
    staticClass: "flip-flop-card__front",
    class: [!_vm.disabled && _vm.direction, _vm.disabled && 'disabled'],
    style: {
      'transition': _vm.transformSpeed,
      'box-shadow': _vm.elevationEffect
    }
  }, [!_vm.styledFront ? _vm._t("front") : _c('styled-card', {
    attrs: {
      "styleObj": _vm.styledFront,
      "front": ""
    }
  }, [_vm._l(_vm.$slots, function (_, name) {
    return _vm._t(name, null, {
      "slot": name
    });
  })], 2)], 2), _vm._v(" "), _c('div', {
    staticClass: "flip-flop-card__back",
    class: [!_vm.disabled && _vm.direction, _vm.disabled && 'disabled'],
    style: {
      'transition': _vm.transformSpeed,
      'box-shadow': _vm.elevationEffect
    }
  }, [!_vm.styledBack ? _vm._t("back") : _c('styled-card', {
    attrs: {
      "styleObj": _vm.styledBack,
      "back": ""
    }
  }, [_vm._l(_vm.$slots, function (_, name) {
    return _vm._t(name, null, {
      "slot": name
    });
  })], 2)], 2)]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-6b39a591_0", {
    source: ".flip-flop-card[data-v-6b39a591]{background-color:transparent;position:relative;perspective:1000px;-moz-perspective:1000px;-webkit-perspective:1000px}.flip-flop-card h1[data-v-6b39a591],.flip-flop-card h2[data-v-6b39a591],.flip-flop-card h3[data-v-6b39a591],.flip-flop-card h4[data-v-6b39a591],.flip-flop-card h5[data-v-6b39a591],.flip-flop-card h6[data-v-6b39a591],.flip-flop-card ol[data-v-6b39a591],.flip-flop-card p[data-v-6b39a591],.flip-flop-card ul[data-v-6b39a591]{margin:0 0 1rem 0}.flip-flop-card__back[data-v-6b39a591],.flip-flop-card__front[data-v-6b39a591]{position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;backface-visibility:hidden;-moz-backface-visibility:hidden;-webkit-backface-visibility:hidden;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.flip-flop-card__back[data-v-6b39a591]  .container,.flip-flop-card__front[data-v-6b39a591]  .container{height:100%}.flip-flop-card__back.horizontal[data-v-6b39a591]{transform:rotateY(180deg);-moz-transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}.flip-flop-card__back.vertical[data-v-6b39a591]{-webkit-transform:rotateX(-180deg);-moz-transform:rotateX(-180deg);transform:rotateX(-180deg)}.flip-flop-card:hover .flip-flop-card__front.horizontal[data-v-6b39a591]{transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-webkit-transform:rotateY(-180deg)}.flip-flop-card:hover .flip-flop-card__front.vertical[data-v-6b39a591]{-webkit-transform:rotateX(180deg);-moz-transform:rotateX(180deg);transform:rotateX(180deg)}.flip-flop-card:hover .flip-flop-card__back.horizontal[data-v-6b39a591]{transform:rotateY(0);-moz-transform:rotateY(0);-webkit-transform:rotateY(0)}.flip-flop-card:hover .flip-flop-card__back.vertical[data-v-6b39a591]{transform:rotateX(0);-moz-transform:rotateX(0);-webkit-transform:rotateX(0)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-6b39a591";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVueFlipFlopCard(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('FlipFlopCard', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export { __vue_component__ as default };
