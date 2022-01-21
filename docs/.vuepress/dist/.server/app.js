"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
var core = require("@vueuse/core");
var shared = require("@vuepress/shared");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-6886cbbd": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return elementui_________html$2;
  })),
  "v-b9c2d34a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$3;
  })),
  "v-66ff7ae2": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return vscode_____html$2;
  })),
  "v-6e6848ee": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text1_html$5;
  })),
  "v-dcf09e5e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text_html$8;
  })),
  "v-3803ce0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text_html$6;
  })),
  "v-9b98914c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text_html$4;
  })),
  "v-796e15ea": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return interview_html$2;
  })),
  "v-89e39176": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text1_html$3;
  })),
  "v-8679e038": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text2_html$5;
  })),
  "v-72bd4e03": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$8;
  })),
  "v-783b80d4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$6;
  })),
  "v-5debe7e1": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _________html$2;
  })),
  "v-24f06668": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _____html$4;
  })),
  "v-e9674cca": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _01_html$2;
  })),
  "v-637b5fd4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _02vue___html$2;
  })),
  "v-59222251": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return text2_html$3;
  })),
  "v-58f4867c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return webpack_html$2;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-6886cbbd": () => Promise.resolve().then(function() {
    return elementui_________html;
  }).then(({ data: data2 }) => data2),
  "v-b9c2d34a": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-66ff7ae2": () => Promise.resolve().then(function() {
    return vscode_____html;
  }).then(({ data: data2 }) => data2),
  "v-6e6848ee": () => Promise.resolve().then(function() {
    return text1_html$1;
  }).then(({ data: data2 }) => data2),
  "v-dcf09e5e": () => Promise.resolve().then(function() {
    return text_html$2;
  }).then(({ data: data2 }) => data2),
  "v-3803ce0e": () => Promise.resolve().then(function() {
    return text_html$1;
  }).then(({ data: data2 }) => data2),
  "v-9b98914c": () => Promise.resolve().then(function() {
    return text_html;
  }).then(({ data: data2 }) => data2),
  "v-796e15ea": () => Promise.resolve().then(function() {
    return interview_html;
  }).then(({ data: data2 }) => data2),
  "v-89e39176": () => Promise.resolve().then(function() {
    return text1_html;
  }).then(({ data: data2 }) => data2),
  "v-8679e038": () => Promise.resolve().then(function() {
    return text2_html$1;
  }).then(({ data: data2 }) => data2),
  "v-72bd4e03": () => Promise.resolve().then(function() {
    return _____html$2;
  }).then(({ data: data2 }) => data2),
  "v-783b80d4": () => Promise.resolve().then(function() {
    return _____html$1;
  }).then(({ data: data2 }) => data2),
  "v-5debe7e1": () => Promise.resolve().then(function() {
    return _________html;
  }).then(({ data: data2 }) => data2),
  "v-24f06668": () => Promise.resolve().then(function() {
    return _____html;
  }).then(({ data: data2 }) => data2),
  "v-e9674cca": () => Promise.resolve().then(function() {
    return _01_html;
  }).then(({ data: data2 }) => data2),
  "v-637b5fd4": () => Promise.resolve().then(function() {
    return _02vue___html;
  }).then(({ data: data2 }) => data2),
  "v-59222251": () => Promise.resolve().then(function() {
    return text2_html;
  }).then(({ data: data2 }) => data2),
  "v-58f4867c": () => Promise.resolve().then(function() {
    return webpack_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = shared.isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...shared.isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return shared.dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales2, routePath) => shared.resolveLocalePath(locales2, routePath);
const siteData$1 = {
  "base": "/",
  "lang": "zh-CN",
  "title": "IUUI",
  "description": "IUUI",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/favicon.ico"
      }
    ]
  ],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (shared.isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (shared.isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${shared.removeLeadingSlash(url)}`;
};
var vars$4 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
var vars$3 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "nextLinks": true,
  "prevLinks": true,
  "search": true,
  "editLink": false,
  "logo": "/images/favicon.ico",
  "navbar": [
    {
      "text": "\u9996\u9875",
      "link": "/"
    },
    {
      "text": "\u524D\u7AEF",
      "children": [
        {
          "text": "\u300Ahtml\u300B",
          "link": "/web/html/text1.md"
        },
        {
          "text": "\u300AJavaScript\u6559\u7A0B\u300B",
          "link": "/web/JavaScript/\u5165\u95E8\u5BFC\u8BBA.md"
        },
        {
          "text": "\u300ACSS\u300B",
          "link": "https://www.baidu.com/"
        }
      ]
    },
    {
      "text": "\u7B14\u8BB0",
      "children": [
        {
          "text": "vue2",
          "link": "/web/vue/01.md"
        },
        {
          "text": "WebPack",
          "link": "/web/webpack/webpack.md"
        }
      ]
    },
    {
      "text": "\u5176\u5B83",
      "children": [
        {
          "text": "\u6559\u7A0B",
          "link": "/course/README.md"
        },
        {
          "text": "\u9762\u8BD5",
          "link": "/guide/\u9762\u8BD5/interview.md"
        },
        {
          "text": "\u968F\u7B14",
          "link": "/guide/\u968F\u7B14/text.md"
        },
        {
          "text": "\u6545\u4E8B",
          "link": "/guide/\u6545\u4E8B/text.md"
        }
      ]
    }
  ],
  "sidebarDepth": 2,
  "sidebar": {
    "/web/vue/": [
      {
        "text": "\u6807\u9898",
        "children": [
          "01.md",
          "02vue\u5B9E\u4F8B.md",
          "text2.md"
        ]
      }
    ],
    "/web/html/": [
      {
        "text": "\u6807\u9898",
        "children": [
          "/web/html/text2.md",
          "/web/html/text1.md"
        ]
      }
    ],
    "/web/JavaScript/": [
      {
        "text": "\u300AJavaScript\u6559\u7A0B\u300B",
        "children": [
          "\u5165\u95E8\u5BFC\u8BBA.md",
          "\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26.md",
          "\u8BED\u6CD5\u57FA\u7840.md",
          "\u5185\u7F6E\u5BF9\u8C61.md"
        ]
      }
    ],
    "/course/": [
      {
        "text": "\u6559\u7A0B",
        "children": [
          "README.md",
          "elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247.md",
          "vscode\u5E38\u7528\u63D2\u4EF6.md"
        ]
      }
    ],
    "/": [
      ""
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$B = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$A = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = shared.isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = shared.isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (shared.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (shared.isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (shared.isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = shared.resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(ExternalLinkIcon), _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$B);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$A);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$z);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var clientAppEnhance4 = ({ app }) => {
  app.component("MyTemplate", vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return MyTemplate$1;
  })));
};
const useHotKeys = ({ input, hotKeys: hotKeys2 }) => {
  const onKeydown = (event) => {
    if (!input.value || hotKeys2.value.length === 0)
      return;
    if (event.target === document.body && hotKeys2.value.includes(event.key)) {
      input.value.focus();
      event.preventDefault();
    }
  };
  vue.onMounted(() => {
    document.addEventListener("keydown", onKeydown);
  });
  vue.onBeforeUnmount(() => {
    document.removeEventListener("keydown", onKeydown);
  });
};
const searchIndex$1 = [
  {
    "title": "",
    "headers": [
      {
        "level": 3,
        "title": "1\u30012\u30013",
        "slug": "_1\u30012\u30013",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247",
    "headers": [
      {
        "level": 2,
        "title": "\u63D2\u5165\u5355\u5F20\uFF0C\u60AC\u6D6E\u9884\u89C8",
        "slug": "\u63D2\u5165\u5355\u5F20-\u60AC\u6D6E\u9884\u89C8",
        "children": []
      },
      {
        "level": 2,
        "title": "\u63D2\u5165\u5355\u5F20\uFF0C\u5168\u5C4F\u9884\u89C8",
        "slug": "\u63D2\u5165\u5355\u5F20-\u5168\u5C4F\u9884\u89C8",
        "children": []
      },
      {
        "level": 2,
        "title": "\u63D2\u5165\u591A\u5F20\u56FE\u7247",
        "slug": "\u63D2\u5165\u591A\u5F20\u56FE\u7247",
        "children": []
      }
    ],
    "path": "/course/elementui%E5%9C%A8%E8%A1%A8%E6%A0%BC%E4%B8%AD%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u65E5\u5E38\u8BB0\u5F55",
    "headers": [
      {
        "level": 2,
        "title": "ClientOnly\u4F7F\u7528\u7EC4\u4EF6",
        "slug": "clientonly\u4F7F\u7528\u7EC4\u4EF6",
        "children": []
      }
    ],
    "path": "/course/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vscode\u5E38\u7528\u63D2\u4EF6",
    "headers": [
      {
        "level": 2,
        "title": "\u51E0\u4E4E\u5FC5\u5907\u7684",
        "slug": "\u51E0\u4E4E\u5FC5\u5907\u7684",
        "children": []
      }
    ],
    "path": "/course/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u9875\u9762\u7684\u6807\u9898",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/web/text1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u65E5\u5E38\u6545\u4E8B",
    "headers": [
      {
        "level": 2,
        "title": "\u5154\u5B50\u4E0E\u661F\u661F",
        "slug": "\u5154\u5B50\u4E0E\u661F\u661F",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5929\u4E0A\u7684\u661F\u661F",
        "slug": "\u5929\u4E0A\u7684\u661F\u661F",
        "children": []
      },
      {
        "level": 2,
        "title": "\u82F9\u679C=\u667A\u6167\u679C",
        "slug": "\u82F9\u679C-\u667A\u6167\u679C",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7B28\u7B28\u718A",
        "slug": "\u7B28\u7B28\u718A",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5C0F\u80A5\u732A",
        "slug": "\u5C0F\u80A5\u732A",
        "children": []
      },
      {
        "level": 2,
        "title": "\u68A6\u91CC\u6709\u4F60\uFF0C\u5341\u5206\u751C",
        "slug": "\u68A6\u91CC\u6709\u4F60-\u5341\u5206\u751C",
        "children": []
      },
      {
        "level": 2,
        "title": "\u665A\u5B89\uFF01",
        "slug": "\u665A\u5B89",
        "children": []
      },
      {
        "level": 2,
        "title": "\u7231\uFF08\u957F\u7BC7\uFF09",
        "slug": "\u7231-\u957F\u7BC7",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5154\u5B50\u548C\u72D0\u72F8",
        "slug": "\u5154\u5B50\u548C\u72D0\u72F8",
        "children": []
      },
      {
        "level": 2,
        "title": "\u62B1\u62B1",
        "slug": "\u62B1\u62B1",
        "children": []
      }
    ],
    "path": "/guide/%E6%95%85%E4%BA%8B/text.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "1a",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/guide/%E6%95%99%E7%A8%8B/text.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "1a",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/guide/%E9%9A%8F%E7%AC%94/text.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u9762\u8BD5\u96C6\u9526",
    "headers": [
      {
        "level": 2,
        "title": "\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD",
        "slug": "\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F",
        "slug": "\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9\uFF1F",
        "slug": "\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5\uFF1F",
        "slug": "\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42\uFF1F",
        "slug": "\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5728\u4E94\u5E74\u5185\uFF0C\u4F60\u7684\u804C\u4E1A\u89C4\u5212\uFF1F",
        "slug": "\u5728\u4E94\u5E74\u5185-\u4F60\u7684\u804C\u4E1A\u89C4\u5212",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417?",
        "slug": "\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417",
        "children": []
      },
      {
        "level": 2,
        "title": "\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5?",
        "slug": "\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11?",
        "slug": "\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11",
        "children": []
      }
    ],
    "path": "/guide/%E9%9D%A2%E8%AF%95/interview.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "html\u6807\u9898",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/web/html/text1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "html2\u6807\u9898",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/web/html/text2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5165\u95E8\u5BFC\u8BBA",
    "headers": [
      {
        "level": 2,
        "title": "JavaScript\u4ECB\u7ECD",
        "slug": "javascript\u4ECB\u7ECD",
        "children": []
      },
      {
        "level": 2,
        "title": "\u4F7F\u7528\u9886\u57DF",
        "slug": "\u4F7F\u7528\u9886\u57DF",
        "children": []
      },
      {
        "level": 2,
        "title": "JavaScript \u4E0E Java \u7684\u5173\u7CFB",
        "slug": "javascript-\u4E0E-java-\u7684\u5173\u7CFB",
        "children": []
      },
      {
        "level": 2,
        "title": "JavaScript \u4E0E ECMAScript \u7684\u5173\u7CFB",
        "slug": "javascript-\u4E0E-ecmascript-\u7684\u5173\u7CFB",
        "children": []
      }
    ],
    "path": "/web/JavaScript/%E5%85%A5%E9%97%A8%E5%AF%BC%E8%AE%BA.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u5185\u7F6E\u5BF9\u8C61",
    "headers": [
      {
        "level": 2,
        "title": "\u4E00\u3001Object \u5BF9\u8C61",
        "slug": "\u4E00\u3001object-\u5BF9\u8C61",
        "children": []
      },
      {
        "level": 2,
        "title": "Object() \u4F5C\u4E3A\u51FD\u6570\uFF08\u65B9\u6CD5\uFF09",
        "slug": "object-\u4F5C\u4E3A\u51FD\u6570-\u65B9\u6CD5",
        "children": []
      },
      {
        "level": 2,
        "title": "Object \u6784\u9020\u51FD\u6570(new\u521B\u5EFA)",
        "slug": "object-\u6784\u9020\u51FD\u6570-new\u521B\u5EFA",
        "children": []
      },
      {
        "level": 2,
        "title": "Object\u7684\u9759\u6001\u65B9\u6CD5",
        "slug": "object\u7684\u9759\u6001\u65B9\u6CD5",
        "children": [
          {
            "level": 3,
            "title": "Object.keys()",
            "slug": "object-keys",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.getOwnPropertyNames()",
            "slug": "object-getownpropertynames",
            "children": []
          },
          {
            "level": 3,
            "title": "Object \u5176\u4ED6\u9759\u6001\u65B9\u6CD5",
            "slug": "object-\u5176\u4ED6\u9759\u6001\u65B9\u6CD5",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "Object \u7684\u5B9E\u4F8B\u65B9\u6CD5",
        "slug": "object-\u7684\u5B9E\u4F8B\u65B9\u6CD5",
        "children": [
          {
            "level": 3,
            "title": "Object.prototype.valueOf()",
            "slug": "object-prototype-valueof",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.prototype.toString()",
            "slug": "object-prototype-tostring",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.prototype.toLocaleString()",
            "slug": "object-prototype-tolocalestring",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.prototype.hasOwnProperty()",
            "slug": "object-prototype-hasownproperty",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61",
        "slug": "\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61",
        "children": [
          {
            "level": 3,
            "title": "Object.getOwnPropertyDescriptor()",
            "slug": "object-getownpropertydescriptor",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.getOwnPropertyNames()",
            "slug": "object-getownpropertynames-1",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.defineProperty()\uFF0CObject.defineProperties()",
            "slug": "object-defineproperty-object-defineproperties",
            "children": []
          },
          {
            "level": 3,
            "title": "Object.prototype.propertyIsEnumerable()",
            "slug": "object-prototype-propertyisenumerable",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5143\u5C5E\u6027",
            "slug": "\u5143\u5C5E\u6027",
            "children": []
          }
        ]
      }
    ],
    "path": "/web/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26",
    "headers": [
      {
        "level": 2,
        "title": "1.\u6570\u636E\u7C7B\u578B",
        "slug": "_1-\u6570\u636E\u7C7B\u578B",
        "children": [
          {
            "level": 3,
            "title": "null\u548Cundefined",
            "slug": "null\u548Cundefined",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5E03\u5C14\u503C\uFF08boolean\uFF09",
            "slug": "\u5E03\u5C14\u503C-boolean",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6570\u503C\uFF08Number\uFF09",
            "slug": "\u6570\u503C-number",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5B57\u7B26\uFF08String\uFF09",
            "slug": "\u5B57\u7B26-string",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5BF9\u8C61",
            "slug": "\u5BF9\u8C61",
            "children": []
          },
          {
            "level": 3,
            "title": "\u51FD\u6570",
            "slug": "\u51FD\u6570",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6570\u7EC4",
            "slug": "\u6570\u7EC4",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "2.\u8FD0\u7B97\u7B26",
        "slug": "_2-\u8FD0\u7B97\u7B26",
        "children": [
          {
            "level": 3,
            "title": "\u7B97\u672F\u8FD0\u7B97\u7B26",
            "slug": "\u7B97\u672F\u8FD0\u7B97\u7B26",
            "children": []
          },
          {
            "level": 3,
            "title": "\u6BD4\u8F83\u8FD0\u7B97\u7B26",
            "slug": "\u6BD4\u8F83\u8FD0\u7B97\u7B26",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5E03\u5C14\u8FD0\u7B97\u7B26",
            "slug": "\u5E03\u5C14\u8FD0\u7B97\u7B26",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
            "slug": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
            "children": []
          },
          {
            "level": 3,
            "title": "\u5176\u4ED6\u8FD0\u7B97\u7B26",
            "slug": "\u5176\u4ED6\u8FD0\u7B97\u7B26",
            "children": []
          }
        ]
      }
    ],
    "path": "/web/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "\u8BED\u6CD5\u57FA\u7840",
    "headers": [
      {
        "level": 2,
        "title": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
        "slug": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
        "children": [
          {
            "level": 3,
            "title": "\u5F3A\u5236\u8F6C\u6362",
            "slug": "\u5F3A\u5236\u8F6C\u6362",
            "children": []
          },
          {
            "level": 3,
            "title": "\u81EA\u52A8\u8F6C\u6362",
            "slug": "\u81EA\u52A8\u8F6C\u6362",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u9519\u8BEF\u5904\u7406\u673A\u5236",
        "slug": "\u9519\u8BEF\u5904\u7406\u673A\u5236",
        "children": [
          {
            "level": 3,
            "title": "Error \u5B9E\u4F8B\u5BF9\u8C61",
            "slug": "error-\u5B9E\u4F8B\u5BF9\u8C61",
            "children": []
          },
          {
            "level": 3,
            "title": "\u539F\u751F\u9519\u8BEF\u7C7B\u578B",
            "slug": "\u539F\u751F\u9519\u8BEF\u7C7B\u578B",
            "children": []
          },
          {
            "level": 3,
            "title": "\u81EA\u5B9A\u4E49\u9519\u8BEF",
            "slug": "\u81EA\u5B9A\u4E49\u9519\u8BEF",
            "children": []
          },
          {
            "level": 3,
            "title": "throw\u8BED\u53E5",
            "slug": "throw\u8BED\u53E5",
            "children": []
          },
          {
            "level": 3,
            "title": "try...catch \u7ED3\u6784",
            "slug": "try-catch-\u7ED3\u6784",
            "children": []
          },
          {
            "level": 3,
            "title": "finally \u4EE3\u7801\u5757",
            "slug": "finally-\u4EE3\u7801\u5757",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "console \u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0",
        "slug": "console-\u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0",
        "children": [
          {
            "level": 3,
            "title": "console \u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5",
            "slug": "console-\u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5",
            "children": []
          },
          {
            "level": 3,
            "title": "\u63A7\u5236\u53F0\u547D\u4EE4\u884C API",
            "slug": "\u63A7\u5236\u53F0\u547D\u4EE4\u884C-api",
            "children": []
          },
          {
            "level": 3,
            "title": "debugger \u8BED\u53E5",
            "slug": "debugger-\u8BED\u53E5",
            "children": []
          }
        ]
      }
    ],
    "path": "/web/JavaScript/%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vue\u524D\u7F6E",
    "headers": [
      {
        "level": 2,
        "title": "\u524D\u7F6E",
        "slug": "\u524D\u7F6E",
        "children": []
      },
      {
        "level": 2,
        "title": "MVVM\uFF1F",
        "slug": "mvvm",
        "children": [
          {
            "level": 3,
            "title": "MVC",
            "slug": "mvc",
            "children": []
          },
          {
            "level": 3,
            "title": "MVP",
            "slug": "mvp",
            "children": []
          },
          {
            "level": 3,
            "title": "MVVM",
            "slug": "mvvm-1",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4F8B\u5B50\u5BF9\u6BD4",
            "slug": "\u4F8B\u5B50\u5BF9\u6BD4",
            "children": []
          },
          {
            "level": 3,
            "title": "vue\u5B9E\u73B0\u4F8B\u5B50",
            "slug": "vue\u5B9E\u73B0\u4F8B\u5B50",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "\u5B89\u88C5vue-devtools",
        "slug": "\u5B89\u88C5vue-devtools",
        "children": []
      },
      {
        "level": 2,
        "title": "\u5F00\u53D1\u5DE5\u5177",
        "slug": "\u5F00\u53D1\u5DE5\u5177",
        "children": []
      }
    ],
    "path": "/web/vue/01.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vue\u5B9E\u4F8B\u8D77\u6B65",
    "headers": [
      {
        "level": 2,
        "title": "\u5F15\u5165vue",
        "slug": "\u5F15\u5165vue",
        "children": []
      },
      {
        "level": 2,
        "title": "vue\u5B9E\u4F8B",
        "slug": "vue\u5B9E\u4F8B",
        "children": []
      },
      {
        "level": 2,
        "title": "\u63D2\u503C\u4E0E\u6307\u4EE4",
        "slug": "\u63D2\u503C\u4E0E\u6307\u4EE4",
        "children": [
          {
            "level": 3,
            "title": "v-if\u3001v-else\u3001v-show",
            "slug": "v-if\u3001v-else\u3001v-show",
            "children": []
          },
          {
            "level": 3,
            "title": "v-for",
            "slug": "v-for",
            "children": []
          },
          {
            "level": 3,
            "title": "v-text \u3001v-html",
            "slug": "v-text-\u3001v-html",
            "children": []
          }
        ]
      }
    ],
    "path": "/web/vue/02vue%E5%AE%9E%E4%BE%8B.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "vue2\u6807\u9898",
    "headers": [
      {
        "level": 2,
        "title": "3",
        "slug": "_3",
        "children": []
      },
      {
        "level": 2,
        "title": "4",
        "slug": "_4",
        "children": []
      }
    ],
    "path": "/web/vue/text2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "webpack\u4ECB\u7ECD",
    "headers": [
      {
        "level": 2,
        "title": "webpack\u5165\u5751",
        "slug": "webpack\u5165\u5751",
        "children": []
      },
      {
        "level": 2,
        "title": "webpack\u57FA\u7840",
        "slug": "webpack\u57FA\u7840",
        "children": [
          {
            "level": 3,
            "title": "\u5FEB\u901F\u4E0A\u624B",
            "slug": "\u5FEB\u901F\u4E0A\u624B",
            "children": []
          },
          {
            "level": 3,
            "title": "\u914D\u7F6E\u6587\u4EF6",
            "slug": "\u914D\u7F6E\u6587\u4EF6",
            "children": []
          },
          {
            "level": 3,
            "title": "Loader",
            "slug": "loader",
            "children": []
          },
          {
            "level": 3,
            "title": "\u63D2\u4EF6\uFF08plugin\uFF09",
            "slug": "\u63D2\u4EF6-plugin",
            "children": []
          },
          {
            "level": 3,
            "title": "\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55",
            "slug": "\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55",
            "children": []
          },
          {
            "level": 3,
            "title": "\u533A\u5206\u73AF\u5883",
            "slug": "\u533A\u5206\u73AF\u5883",
            "children": []
          },
          {
            "level": 3,
            "title": "\u4F7F\u7528devServer",
            "slug": "\u4F7F\u7528devserver",
            "children": []
          }
        ]
      }
    ],
    "path": "/web/webpack/webpack.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
];
const searchIndex = vue.ref(searchIndex$1);
const useSearchIndex = () => searchIndex;
if (false) {
  __VUE_HMR_RUNTIME__.updateSearchIndex = (data2) => {
    searchIndex.value = data2;
  };
}
const nonASCIIRegExp = /[^\x00-\x7F]/;
const splitWords = (str) => str.split(/\s+/g).map((str2) => str2.trim()).filter((str2) => !!str2);
const escapeRegExp = (str) => str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
const isQueryMatched = (query, toMatch) => {
  const toMatchStr = toMatch.join(" ");
  const words = splitWords(query);
  if (nonASCIIRegExp.test(query)) {
    return words.some((word) => toMatchStr.toLowerCase().indexOf(word) > -1);
  }
  const hasTrailingSpace = query.endsWith(" ");
  const searchRegex = new RegExp(words.map((word, index2) => {
    if (words.length === index2 + 1 && !hasTrailingSpace) {
      return `(?=.*\\b${escapeRegExp(word)})`;
    }
    return `(?=.*\\b${escapeRegExp(word)}\\b)`;
  }).join("") + ".+", "gi");
  return searchRegex.test(toMatchStr);
};
const useSearchSuggestions = ({ searchIndex: searchIndex2, routeLocale, query, maxSuggestions: maxSuggestions2 }) => {
  const localeSearchIndex = vue.computed(() => searchIndex2.value.filter((item) => item.pathLocale === routeLocale.value));
  return vue.computed(() => {
    const searchStr = query.value.trim().toLowerCase();
    if (!searchStr)
      return [];
    const suggestions = [];
    const matchPageHeader = (searchIndexItem, header) => {
      if (isQueryMatched(searchStr, [header.title])) {
        suggestions.push({
          link: `${searchIndexItem.path}#${header.slug}`,
          title: searchIndexItem.title,
          header: header.title
        });
      }
      for (const child of header.children) {
        if (suggestions.length >= maxSuggestions2.value) {
          return;
        }
        matchPageHeader(searchIndexItem, child);
      }
    };
    for (const searchIndexItem of localeSearchIndex.value) {
      if (suggestions.length >= maxSuggestions2.value) {
        break;
      }
      if (isQueryMatched(searchStr, [
        searchIndexItem.title,
        ...searchIndexItem.extraFields
      ])) {
        suggestions.push({
          link: searchIndexItem.path,
          title: searchIndexItem.title
        });
        continue;
      }
      for (const header of searchIndexItem.headers) {
        if (suggestions.length >= maxSuggestions2.value) {
          break;
        }
        matchPageHeader(searchIndexItem, header);
      }
    }
    return suggestions;
  });
};
const useSuggestionsFocus = (suggestions) => {
  const focusIndex = vue.ref(0);
  const focusNext = () => {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value += 1;
    } else {
      focusIndex.value = 0;
    }
  };
  const focusPrev = () => {
    if (focusIndex.value > 0) {
      focusIndex.value -= 1;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  };
  return {
    focusIndex,
    focusNext,
    focusPrev
  };
};
const SearchBox = vue.defineComponent({
  name: "SearchBox",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    },
    hotKeys: {
      type: Array,
      required: false,
      default: () => []
    },
    maxSuggestions: {
      type: Number,
      required: false,
      default: 5
    }
  },
  setup(props) {
    const { locales: locales2, hotKeys: hotKeys2, maxSuggestions: maxSuggestions2 } = vue.toRefs(props);
    const router = vueRouter.useRouter();
    const routeLocale = useRouteLocale();
    const searchIndex2 = useSearchIndex();
    const input = vue.ref(null);
    const isActive = vue.ref(false);
    const query = vue.ref("");
    const locale = vue.computed(() => {
      var _a;
      return (_a = locales2.value[routeLocale.value]) !== null && _a !== void 0 ? _a : {};
    });
    const suggestions = useSearchSuggestions({
      searchIndex: searchIndex2,
      routeLocale,
      query,
      maxSuggestions: maxSuggestions2
    });
    const { focusIndex, focusNext, focusPrev } = useSuggestionsFocus(suggestions);
    useHotKeys({ input, hotKeys: hotKeys2 });
    const showSuggestions = vue.computed(() => isActive.value && !!suggestions.value.length);
    const onArrowUp = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusPrev();
    };
    const onArrowDown = () => {
      if (!showSuggestions.value) {
        return;
      }
      focusNext();
    };
    const goTo = (index2) => {
      if (!showSuggestions.value) {
        return;
      }
      const suggestion = suggestions.value[index2];
      if (!suggestion) {
        return;
      }
      router.push(suggestion.link).then(() => {
        query.value = "";
        focusIndex.value = 0;
      });
    };
    return () => vue.h("form", {
      class: "search-box",
      role: "search"
    }, [
      vue.h("input", {
        ref: input,
        type: "search",
        placeholder: locale.value.placeholder,
        autocomplete: "off",
        spellcheck: false,
        value: query.value,
        onFocus: () => isActive.value = true,
        onBlur: () => isActive.value = false,
        onInput: (event) => query.value = event.target.value,
        onKeydown: (event) => {
          switch (event.key) {
            case "ArrowUp": {
              onArrowUp();
              break;
            }
            case "ArrowDown": {
              onArrowDown();
              break;
            }
            case "Enter": {
              event.preventDefault();
              goTo(focusIndex.value);
              break;
            }
          }
        }
      }),
      showSuggestions.value && vue.h("ul", {
        class: "suggestions",
        onMouseleave: () => focusIndex.value = -1
      }, suggestions.value.map(({ link, title, header }, index2) => vue.h("li", {
        class: [
          "suggestion",
          {
            focus: focusIndex.value === index2
          }
        ],
        onMouseenter: () => focusIndex.value = index2,
        onMousedown: () => goTo(index2)
      }, vue.h("a", {
        href: link,
        onClick: (event) => event.preventDefault()
      }, [
        vue.h("span", {
          class: "page-title"
        }, title),
        header && vue.h("span", { class: "page-header" }, `> ${header}`)
      ]))))
    ]);
  }
});
var vars$2 = "";
var search = "";
const locales = { "/": { "placeholder": "\u641C\u7D22" } };
const hotKeys = ["s", "/"];
const maxSuggestions = 5;
var clientAppEnhance5 = defineClientAppEnhance(({ app }) => {
  app.component("SearchBox", (props) => vue.h(SearchBox, __spreadValues({
    locales,
    hotKeys,
    maxSuggestions
  }, props)));
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4,
  clientAppEnhance5
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-6886cbbd", "/course/elementui%E5%9C%A8%E8%A1%A8%E6%A0%BC%E4%B8%AD%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87.html", { "title": "elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247" }, ["/course/elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247.html", "/course/elementui%E5%9C%A8%E8%A1%A8%E6%A0%BC%E4%B8%AD%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87", "/course/elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247.md", "/course/elementui%E5%9C%A8%E8%A1%A8%E6%A0%BC%E4%B8%AD%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87.md"]],
  ["v-b9c2d34a", "/course/", { "title": "\u65E5\u5E38\u8BB0\u5F55" }, ["/course/index.html", "/course/README.md"]],
  ["v-66ff7ae2", "/course/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html", { "title": "vscode\u5E38\u7528\u63D2\u4EF6" }, ["/course/vscode\u5E38\u7528\u63D2\u4EF6.html", "/course/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6", "/course/vscode\u5E38\u7528\u63D2\u4EF6.md", "/course/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.md"]],
  ["v-6e6848ee", "/web/text1.html", { "title": "\u9875\u9762\u7684\u6807\u9898" }, ["/web/text1", "/web/text1.md"]],
  ["v-dcf09e5e", "/guide/%E6%95%85%E4%BA%8B/text.html", { "title": "\u65E5\u5E38\u6545\u4E8B" }, ["/guide/\u6545\u4E8B/text.html", "/guide/%E6%95%85%E4%BA%8B/text", "/guide/\u6545\u4E8B/text.md", "/guide/%E6%95%85%E4%BA%8B/text.md"]],
  ["v-3803ce0e", "/guide/%E6%95%99%E7%A8%8B/text.html", { "title": "1a" }, ["/guide/\u6559\u7A0B/text.html", "/guide/%E6%95%99%E7%A8%8B/text", "/guide/\u6559\u7A0B/text.md", "/guide/%E6%95%99%E7%A8%8B/text.md"]],
  ["v-9b98914c", "/guide/%E9%9A%8F%E7%AC%94/text.html", { "title": "1a" }, ["/guide/\u968F\u7B14/text.html", "/guide/%E9%9A%8F%E7%AC%94/text", "/guide/\u968F\u7B14/text.md", "/guide/%E9%9A%8F%E7%AC%94/text.md"]],
  ["v-796e15ea", "/guide/%E9%9D%A2%E8%AF%95/interview.html", { "title": "\u9762\u8BD5\u96C6\u9526" }, ["/guide/\u9762\u8BD5/interview.html", "/guide/%E9%9D%A2%E8%AF%95/interview", "/guide/\u9762\u8BD5/interview.md", "/guide/%E9%9D%A2%E8%AF%95/interview.md"]],
  ["v-89e39176", "/web/html/text1.html", { "title": "html\u6807\u9898" }, ["/web/html/text1", "/web/html/text1.md"]],
  ["v-8679e038", "/web/html/text2.html", { "title": "html2\u6807\u9898" }, ["/web/html/text2", "/web/html/text2.md"]],
  ["v-72bd4e03", "/web/JavaScript/%E5%85%A5%E9%97%A8%E5%AF%BC%E8%AE%BA.html", { "title": "\u5165\u95E8\u5BFC\u8BBA" }, ["/web/JavaScript/\u5165\u95E8\u5BFC\u8BBA.html", "/web/JavaScript/%E5%85%A5%E9%97%A8%E5%AF%BC%E8%AE%BA", "/web/JavaScript/\u5165\u95E8\u5BFC\u8BBA.md", "/web/JavaScript/%E5%85%A5%E9%97%A8%E5%AF%BC%E8%AE%BA.md"]],
  ["v-783b80d4", "/web/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.html", { "title": "\u5185\u7F6E\u5BF9\u8C61" }, ["/web/JavaScript/\u5185\u7F6E\u5BF9\u8C61.html", "/web/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1", "/web/JavaScript/\u5185\u7F6E\u5BF9\u8C61.md", "/web/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.md"]],
  ["v-5debe7e1", "/web/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6.html", { "title": "\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26" }, ["/web/JavaScript/\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26.html", "/web/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6", "/web/JavaScript/\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26.md", "/web/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],
  ["v-24f06668", "/web/JavaScript/%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80.html", { "title": "\u8BED\u6CD5\u57FA\u7840" }, ["/web/JavaScript/\u8BED\u6CD5\u57FA\u7840.html", "/web/JavaScript/%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80", "/web/JavaScript/\u8BED\u6CD5\u57FA\u7840.md", "/web/JavaScript/%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80.md"]],
  ["v-e9674cca", "/web/vue/01.html", { "title": "vue\u524D\u7F6E" }, ["/web/vue/01", "/web/vue/01.md"]],
  ["v-637b5fd4", "/web/vue/02vue%E5%AE%9E%E4%BE%8B.html", { "title": "vue\u5B9E\u4F8B\u8D77\u6B65" }, ["/web/vue/02vue\u5B9E\u4F8B.html", "/web/vue/02vue%E5%AE%9E%E4%BE%8B", "/web/vue/02vue\u5B9E\u4F8B.md", "/web/vue/02vue%E5%AE%9E%E4%BE%8B.md"]],
  ["v-59222251", "/web/vue/text2.html", { "title": "vue2\u6807\u9898" }, ["/web/vue/text2", "/web/vue/text2.md"]],
  ["v-58f4867c", "/web/webpack/webpack.html", { "title": "webpack\u4ECB\u7ECD" }, ["/web/webpack/webpack", "/web/webpack/webpack.md"]],
  ["v-3706649a", "/404.html", {}, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const provideGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(shared.removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$y = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  _push(`<!--[--><h3 id="_1\u30012\u30013" tabindex="-1"><a class="header-anchor" href="#_1\u30012\u30013" aria-hidden="true">#</a> 1\u30012\u30013</h3>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "JS" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}>console<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>log</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&quot;Hello World&quot;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
















console<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>log</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;Goodbye, world&#39;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createTextVNode("console"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "log"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "log"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, "'Goodbye, world'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "Python" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token function"${_scopeId2}>print</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;Hello World&#39;</span><span class="token punctuation"${_scopeId2}>)</span>
















<span class="token function"${_scopeId2}>print</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&#39;Goodbye, world&#39;</span><span class="token punctuation"${_scopeId2}>)</span>
</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token function" }, "print"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),
                      vue.createVNode("span", { class: "token function" }, "print"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, "'Goodbye, world'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "PHP" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token operator"${_scopeId2}>&lt;</span><span class="token operator"${_scopeId2}>?</span>php
<span class="token comment"${_scopeId2}>// In PHP, we use echo to print text echo &quot;Hello World&quot;; // If you want to print in browser&#39;s console, we use print_r print_r(&quot;Hello World&quot;); // if you want the variable data types as well use var_dump $stringVar = &#39;hello world&#39;; var_dump($stringVar);?&gt;</span>

<span class="token comment"${_scopeId2}>// In PHP, we use echo to print text</span>

echo <span class="token string"${_scopeId2}>&quot;Hello World&quot;</span><span class="token punctuation"${_scopeId2}>;</span>

<span class="token comment"${_scopeId2}>// If you want to print in browser&#39;s console, we use print_r</span>

<span class="token function"${_scopeId2}>print_r</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&quot;Hello World&quot;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>

<span class="token comment"${_scopeId2}>// if you want the variable data types as well use var_dump</span>

$stringVar <span class="token operator"${_scopeId2}>=</span> <span class="token string"${_scopeId2}>&#39;hello world&#39;</span><span class="token punctuation"${_scopeId2}>;</span>

<span class="token function"${_scopeId2}>var_dump</span><span class="token punctuation"${_scopeId2}>(</span>$stringVar<span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>

<span class="token operator"${_scopeId2}>?</span><span class="token operator"${_scopeId2}>&gt;</span>
</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token operator" }, "<"),
                      vue.createVNode("span", { class: "token operator" }, "?"),
                      vue.createTextVNode("php\n"),
                      vue.createVNode("span", { class: "token comment" }, `// In PHP, we use echo to print text echo "Hello World"; // If you want to print in browser's console, we use print_r print_r("Hello World"); // if you want the variable data types as well use var_dump $stringVar = 'hello world'; var_dump($stringVar);?>`),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token comment" }, "// In PHP, we use echo to print text"),
                      vue.createTextVNode("\n\necho "),
                      vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token comment" }, "// If you want to print in browser's console, we use print_r"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token function" }, "print_r"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token comment" }, "// if you want the variable data types as well use var_dump"),
                      vue.createTextVNode("\n\n$stringVar "),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'hello world'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token function" }, "var_dump"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createTextVNode("$stringVar"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n"),
                      vue.createVNode("span", { class: "token operator" }, "?"),
                      vue.createVNode("span", { class: "token operator" }, ">"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "Java" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token keyword"${_scopeId2}>class</span> <span class="token class-name"${_scopeId2}>HelloWorld</span> <span class="token punctuation"${_scopeId2}>{</span> 
  <span class="token keyword"${_scopeId2}>public</span> <span class="token keyword"${_scopeId2}>static</span> <span class="token keyword"${_scopeId2}>void</span> <span class="token function"${_scopeId2}>main</span><span class="token punctuation"${_scopeId2}>(</span><span class="token parameter"${_scopeId2}>String<span class="token punctuation"${_scopeId2}>[</span><span class="token punctuation"${_scopeId2}>]</span> args</span><span class="token punctuation"${_scopeId2}>)</span> <span class="token punctuation"${_scopeId2}>{</span> 
    System<span class="token punctuation"${_scopeId2}>.</span>out<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>println</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&quot;Hello World!!&quot;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span> 
  <span class="token punctuation"${_scopeId2}>}</span>
<span class="token punctuation"${_scopeId2}>}</span>
    












</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token keyword" }, "class"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token class-name" }, "HelloWorld"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode(" \n  "),
                      vue.createVNode("span", { class: "token keyword" }, "public"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "static"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token keyword" }, "void"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token function" }, "main"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token parameter" }, [
                        vue.createTextVNode("String"),
                        vue.createVNode("span", { class: "token punctuation" }, "["),
                        vue.createVNode("span", { class: "token punctuation" }, "]"),
                        vue.createTextVNode(" args")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode(" \n    System"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createTextVNode("out"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "println"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, '"Hello World!!"'),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode(" \n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n    \n\n\n\n\n\n\n\n\n\n\n\n\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "C" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}>#include
int <span class="token function"${_scopeId2}>main</span><span class="token punctuation"${_scopeId2}>(</span><span class="token parameter"${_scopeId2}><span class="token keyword"${_scopeId2}>void</span></span><span class="token punctuation"${_scopeId2}>)</span>
<span class="token punctuation"${_scopeId2}>{</span>
<span class="token function"${_scopeId2}>printf</span><span class="token punctuation"${_scopeId2}>(</span><span class="token string"${_scopeId2}>&quot;Hello, world!&quot;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>;</span>
<span class="token keyword"${_scopeId2}>return</span> <span class="token number"${_scopeId2}>0</span><span class="token punctuation"${_scopeId2}>;</span>
<span class="token punctuation"${_scopeId2}>}</span>












</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createTextVNode("#include\nint "),
                      vue.createVNode("span", { class: "token function" }, "main"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token parameter" }, [
                        vue.createVNode("span", { class: "token keyword" }, "void")
                      ]),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token function" }, "printf"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createVNode("span", { class: "token string" }, '"Hello, world!"'),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "return"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token number" }, "0"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "SQL" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token constant"${_scopeId2}>SELECT</span> <span class="token string"${_scopeId2}>&#39;Hello World&#39;</span><span class="token punctuation"${_scopeId2}>;</span><span class="token constant"${_scopeId2}>PRINT</span> <span class="token string"${_scopeId2}>&#39;Hello World&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
















<span class="token constant"${_scopeId2}>SELECT</span> <span class="token string"${_scopeId2}>&#39;Goodbye world&#39;</span><span class="token punctuation"${_scopeId2}>;</span><span class="token constant"${_scopeId2}>PRINT</span> <span class="token string"${_scopeId2}>&#39;Goodbye world&#39;</span><span class="token punctuation"${_scopeId2}>;</span>
</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}><span class="line-number"${_scopeId2}>13</span><br${_scopeId2}><span class="line-number"${_scopeId2}>14</span><br${_scopeId2}><span class="line-number"${_scopeId2}>15</span><br${_scopeId2}><span class="line-number"${_scopeId2}>16</span><br${_scopeId2}><span class="line-number"${_scopeId2}>17</span><br${_scopeId2}><span class="line-number"${_scopeId2}>18</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token constant" }, "SELECT"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createVNode("span", { class: "token constant" }, "PRINT"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),
                      vue.createVNode("span", { class: "token constant" }, "SELECT"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'Goodbye world'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createVNode("span", { class: "token constant" }, "PRINT"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'Goodbye world'"),
                      vue.createVNode("span", { class: "token punctuation" }, ";"),
                      vue.createTextVNode("\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "13"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "14"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "15"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "16"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "17"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "18"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "JS" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createTextVNode("console"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "log"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "log"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, "'Goodbye, world'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "Python" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token function" }, "print"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),
                    vue.createVNode("span", { class: "token function" }, "print"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, "'Goodbye, world'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "PHP" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token operator" }, "<"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createTextVNode("php\n"),
                    vue.createVNode("span", { class: "token comment" }, `// In PHP, we use echo to print text echo "Hello World"; // If you want to print in browser's console, we use print_r print_r("Hello World"); // if you want the variable data types as well use var_dump $stringVar = 'hello world'; var_dump($stringVar);?>`),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// In PHP, we use echo to print text"),
                    vue.createTextVNode("\n\necho "),
                    vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// If you want to print in browser's console, we use print_r"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token function" }, "print_r"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Hello World"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token comment" }, "// if you want the variable data types as well use var_dump"),
                    vue.createTextVNode("\n\n$stringVar "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'hello world'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token function" }, "var_dump"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("$stringVar"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n"),
                    vue.createVNode("span", { class: "token operator" }, "?"),
                    vue.createVNode("span", { class: "token operator" }, ">"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "Java" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token keyword" }, "class"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token class-name" }, "HelloWorld"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode(" \n  "),
                    vue.createVNode("span", { class: "token keyword" }, "public"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "static"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token keyword" }, "void"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token function" }, "main"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token parameter" }, [
                      vue.createTextVNode("String"),
                      vue.createVNode("span", { class: "token punctuation" }, "["),
                      vue.createVNode("span", { class: "token punctuation" }, "]"),
                      vue.createTextVNode(" args")
                    ]),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode(" \n    System"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createTextVNode("out"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "println"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Hello World!!"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode(" \n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n    \n\n\n\n\n\n\n\n\n\n\n\n\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "C" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createTextVNode("#include\nint "),
                    vue.createVNode("span", { class: "token function" }, "main"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token parameter" }, [
                      vue.createVNode("span", { class: "token keyword" }, "void")
                    ]),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token function" }, "printf"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createVNode("span", { class: "token string" }, '"Hello, world!"'),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "return"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "0"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "SQL" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token constant" }, "SELECT"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createVNode("span", { class: "token constant" }, "PRINT"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'Hello World'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"),
                    vue.createVNode("span", { class: "token constant" }, "SELECT"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'Goodbye world'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createVNode("span", { class: "token constant" }, "PRINT"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'Goodbye world'"),
                    vue.createVNode("span", { class: "token punctuation" }, ";"),
                    vue.createTextVNode("\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "13"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "14"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "15"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "16"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "17"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "18"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$k]]);
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$4
});
const _sfc_main$x = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247" aria-hidden="true">#</a> elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247</h1><h2 id="\u63D2\u5165\u5355\u5F20-\u60AC\u6D6E\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u5355\u5F20-\u60AC\u6D6E\u9884\u89C8" aria-hidden="true">#</a> \u63D2\u5165\u5355\u5F20\uFF0C\u60AC\u6D6E\u9884\u89C8</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4E0B\u9762<code>scope.row</code>\u8868\u793A\u5F53\u524D\u7684\u884C\u5BF9\u8C61</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u56FE\u7247<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-popover</span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top-start<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope.row.imagesUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 150px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reference<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope.row.imagesUrl<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 30px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-popover</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{scope.row.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u63D2\u5165\u5355\u5F20-\u5168\u5C4F\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u5355\u5F20-\u5168\u5C4F\u9884\u89C8" aria-hidden="true">#</a> \u63D2\u5165\u5355\u5F20\uFF0C\u5168\u5C4F\u9884\u89C8</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imagesUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u56FE\u7247<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-image</span>
            <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 30px</span><span class="token punctuation">&quot;</span></span></span>
            <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope.row.imagesUrl<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">:preview-src-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[scope.row.imagesUrl]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image-slot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-picture-outline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-image</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- slot=&quot;error&quot;\u63D2\u69FD\u662F\u4E3A\u4E86\u56FE\u7247\u4E0D\u5B58\u5728\u6216\u51FA\u9519\u65F6\u66FF\u6362\u4E3A\u56FE\u6807 --&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u63D2\u5165\u591A\u5F20\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u591A\u5F20\u56FE\u7247" aria-hidden="true">#</a> \u63D2\u5165\u591A\u5F20\u56FE\u7247</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u56FE\u7247<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-image</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in scope.row.images<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 30px</span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.imagesUrl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:preview-src-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[item.imagesUrl]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-image</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/course/elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var elementui_________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$j]]);
var elementui_________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": elementui_________html$1
});
const _sfc_main$w = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = vue.resolveComponent("ClientOnly");
  const _component_MyTemplate = vue.resolveComponent("MyTemplate");
  _push(`<!--[--><h2 id="clientonly\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#clientonly\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a> ClientOnly\u4F7F\u7528\u7EC4\u4EF6</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_MyTemplate, null, null, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_MyTemplate)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/course/index.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var index_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$i]]);
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$2
});
const _sfc_main$v = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="vscode\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#vscode\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> vscode\u5E38\u7528\u63D2\u4EF6</h1><ol><li><a href="https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode" target="_blank" rel="noopener noreferrer">Tabnine`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>: AI \u4EE3\u7801\u5B8C\u6210\u63D2\u3002</li><li><a href="https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces" target="_blank" rel="noopener noreferrer">Trailing Spaces`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>:\u5C3E\u90E8\u7A7A\u683C\u5220\u9664\u63D2\u4EF6\u3002</li></ol><h2 id="\u51E0\u4E4E\u5FC5\u5907\u7684" tabindex="-1"><a class="header-anchor" href="#\u51E0\u4E4E\u5FC5\u5907\u7684" aria-hidden="true">#</a> \u51E0\u4E4E\u5FC5\u5907\u7684</h2><ol start="3"><li>\u4E24\u6B3E\u90FD\u4E3A\u4EE3\u7801\u6BB5\u63D2\u4EF6\uFF1A<br><a href="https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets" target="_blank" rel="noopener noreferrer">JavaScript (ES6) code snippets`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><br><a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" target="_blank" rel="noopener noreferrer"> ES7 React/Redux/GraphQL/React-Native snippets`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/course/vscode\u5E38\u7528\u63D2\u4EF6.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var vscode_____html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$h]]);
var vscode_____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": vscode_____html$1
});
const _sfc_main$u = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/text1.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var text1_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$g]]);
var text1_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text1_html$4
});
const _sfc_main$t = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="\u5154\u5B50\u4E0E\u661F\u661F" tabindex="-1"><a class="header-anchor" href="#\u5154\u5B50\u4E0E\u661F\u661F" aria-hidden="true">#</a> \u5154\u5B50\u4E0E\u661F\u661F</h2><p>\u5927\u5154\u5B50\u7279\u522B\u559C\u6B22\u591C\u665A\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u4E00\u4E2A\u4EBA\u770B\u661F\u661F\uFF0C\u8FD8\u6CA1\u6709\u4EBA\u6253\u6270\u4ED6\u3002\u4ED6\u6BCF\u5929\u665A\u4E0A\u90FD\u5BF9\u7740\u661F\u661F\u8BF4\u5FC3\u91CC\u8BDD\uFF0C\u5C0F\u661F\u661F\u4E5F\u4F1A\u548C\u4ED6\u8BF4\u6084\u6084\u8BDD\u3002</p><p>\u6709\u4E00\u5929\u5C0F\u661F\u661F\u544A\u8BC9\u5927\u5154\u5B50\uFF1A\u7B49\u4F1A\u4F1A\u6709\u6D41\u661F\u96E8\u54E6\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u7740\u5B83\u4EEC\u8BB8\u4E2A\u613F\uFF0C\u68A6\u60F3\u4E00\u5B9A\u4F1A\u5B9E\u73B0\u7684\uFF01\u5927\u5154\u5B50\u5F00\u5FC3\u7684\u50CF\u4E2A\u5B9D\u5B9D\uFF0C\u4ED6\u6709\u65E0\u6570\u4E2A\u613F\u671B\u60F3\u8981\u5B9E\u73B0\uFF0C\u4E8E\u662F\u5462\uFF0C\u4ED6\u5C31\u5F00\u59CB\u4E00\u6761\u6761\u5217\u51FA\u4ED6\u7684\u613F\u671B\u7B49\u5F85\u6D41\u661F\u96E8\u7684\u5230\u6765.....</p><p>\u5927\u5154\u5B50\u5C31\u5750\u5728\u90A3\u91CC\u7B49\u554A\u7B49\uFF0C\u6708\u4EAE\u90FD\u5FEB\u5230\u5934\u9876\u4E86\uFF0C\u5927\u767D\u5154\u4E5F\u5F00\u59CB\u72AF\u8FF7\u7CCA\u3002\u549A \u5927\u767D\u5154\u56F0\u7684\u4E00\u5934\u624E\u5230\u4E86\u8349\u5730\u91CC\u3002\u661F\u661F\u5728\u4E00\u65C1\u5077\u5077\u7684\u7B11\uFF0C\u5C31\u8FD9\u8FD9\u4E2A\u65F6\u5019\u6D41\u661F\u96E8\u6765\u4E86\uFF0C\u5C0F\u661F\u661F\u8D76\u5FEB\u53EB\u5927\u5154\u5B50\u9192\u6765\uFF0C\u600E\u4E48\u53EB\u5C31\u662F\u53EB\u4E0D\u9192\uFF0C\u8FD9\u6025\u6B7B\u5C0F\u661F\u661F\u4E86\uFF0C\u4F46\u662F\u4E5F\u6CA1\u6709\u529E\u6CD5\uFF0C\u5982\u679C\u5C0F\u661F\u661F\u6254\u4E00\u5C0F\u5757\u77F3\u5934\u7838\u5979\u7684\u8BDD\u4ED6\u5C31\u53D8\u6210\u5154\u5B50\u997C\u4E86.....</p><p>\u5C0F\u661F\u661F\u5C31\u4E00\u76F4\u53EB\u5927\u5154\u5B50\uFF0C\u4E00\u76F4\u53EB\u554A\u53EB\uFF0C\u5927\u5154\u5B50\u54D7\u7684\u4E00\u4E0B\u9192\u6765\u4E86\uFF0C\u4ED6\u4EE5\u4E3A\u81EA\u5DF1\u521A\u7761\u7740\uFF0C\u5176\u5B9E\u6D41\u661F\u96E8\u5DF2\u7ECF\u8FC7\u53BB\u4E00\u5927\u534A\u4E86\uFF01</p><p>\u5927\u767D\u5154\u614C\u91CC\u614C\u5F20\u7684\u95ED\u4E0A\u773C\u775B\u8BF4\u51FA\u4ED6\u7684\u613F\u671B\uFF0C\u6211\u60F3\u5B66\u4F1A\u5F39\u94A2\u7434\uFF0C\u6211\u60F3\u5B66\u4F1A\u505A\u597D\u5403\u7684\uFF0C\u6211\u60F3\u62E5\u6709\u6700\u597D\u5403\u7684\u80E1\u841D\u535C\uFF0C\u6211\u60F3\u53D8\u6210\u5154\u5B50\u754C\u7B2C\u4E00\u9996\u5BCC\uFF0C\u6211\u60F3\u62E5\u6709\u4E00\u4E2A\u5927\u679C\u56ED\u81EA\u5DF1\u53EF\u4EE5\u968F\u65F6\u5403\u5230\u7684\u90A3\u79CD\uFF01\u6211\u60F3.......</p><p>\u5C31\u8FD9\u6837\uFF0C\u5927\u5154\u5B50\u5C31\u50CF\u673A\u5173\u67AA\u4E00\u6837\uFF0C\u6709\u8BF4\u4E0D\u5B8C\u7684\u613F\u671B\u3002\u6709\u4E00\u9897\u5C0F\u6D41\u661F\u98DE\u8FC7\uFF0C\u544A\u8BC9\u5927\u5154\u5B50\uFF0C\u4F60\u8BF4\u7684\u90A3\u4E9B\u592A\u7269\u8D28\u4E86\uFF0C\u90A3\u4E9B\u8981\u9760\u4F60\u81EA\u5DF1\u53BB\u52AA\u529B\u624D\u53EF\u5F97\u5230\uFF0C\u4F60\u8981\u81EA\u5DF1\u5F88\u8BA4\u771F\u7684\u60F3\u4E00\u4E2A\u5FC3\u613F\uFF0C\u6211\u4F1A\u5C3D\u529B\u5E2E\u4F60\u5B9E\u73B0\u7684\uFF01\u5927\u5154\u5B50\u95ED\u4E0A\u773C\u775B\uFF0C\u53CC\u624B\u5408\u5341\u3002\u201C\u90A3\u5C31\u8BF7\u4F60\u544A\u8BC9\u5979\uFF0C\u6211\u60F3\u5979\u4E86\u201D\u5C0F\u6D41\u661F\u7B11\u4E86\u7B11\u4FDD\u8BC1\u5B8C\u6210\u4EFB\u52A1\u54E6\uFF5E</p><p>\u90A3\u5929\u7684\u665A\u4E0A\uFF0C\u8FDC\u5728\u4ED6\u4E61\u7684\u5C0F\u767D\u5154\u5728\u68A6\u4E61\u91CC\u89C1\u5230\u4E86\u5979\u7231\u7684\u5927\u5154\u5B50\uFF5E</p><h2 id="\u5929\u4E0A\u7684\u661F\u661F" tabindex="-1"><a class="header-anchor" href="#\u5929\u4E0A\u7684\u661F\u661F" aria-hidden="true">#</a> \u5929\u4E0A\u7684\u661F\u661F</h2><p>\u5154\u5154\u8981\u51FA\u4E00\u8D9F\u5F88\u4E45\u5F88\u4E45\u7684\u8FDC\u95E8\u4E86\u3002</p><p>\u732A\u732A\u81EA\u4ECE\u542C\u5230\u8FD9\u4E2A\u6D88\u606F\u5C31\u975E\u5E38\u96BE\u8FC7\uFF0C\u4ED6\u820D\u4E0D\u5F97\u5154\u5154\u79BB\u5F00\u3002\u54EA\u6015\u5C31\u4E00\u5929\u4E24\u5929\u90FD\u820D\u4E0D\u5F97\uFF0C\u66F4\u4F55\u51B5\uFF0C\u8FD9\u6B21\u7684\u5206\u5F00\u8FDC\u8FDC\u8D85\u8FC7\u8FD9\u4E2A\u6570\u76EE\u3002</p><p>\u4ED6\u867D\u7136\u8FD8\u662F\u6BCF\u5929\u90FD\u5728\u7ED9\u5154\u5154\u505A\u559C\u6B22\u5403\u7684\u4E1C\u897F\uFF0C\u8FD8\u662F\u5728\u54C4\u5154\u5154\u5F00\u5FC3\u3002\u53EF\u4ED6\u7684\u5FE7\u6101\u5199\u5728\u4E86\u5C0F\u5C0F\u7684\u773C\u775B\u91CC\uFF0C\u4ED6\u820D\u4E0D\u5F97\u5154\u5154\u8D70\u3002</p><p>\u53EF\u662F\u5154\u5154\u5DF2\u7ECF\u51B3\u5B9A\u4E86\u8981\u51FA\u53BB\uFF0C\u5C0F\u732A\u732A\u652F\u6301\u5154\u5154\u7684\u4E00\u5207\u505A\u6CD5\u3002\u732A\u732A\u6BCF\u5929\u90FD\u76D8\u7B97\u7740\u65E5\u5B50\uFF0C\u4ED6\u544A\u8BC9\u81EA\u5DF1\uFF0C\u53EA\u8981\u6709\u7231\u5728\uFF0C\u9694\u5C71\u8DDD\u6D77\uFF0C\u65E5\u5B50\u4E5F\u90FD\u4E0D\u4F1A\u592A\u96BE\u8FC7\u7684\u3002</p><p>\u54EA\u6015\u5C0F\u732A\u732A\u65E0\u6BD4\u73CD\u60DC\u6D41\u901D\u7684\u6BCF\u5206\u949F\uFF0C\u8DDD\u79BB\u5C0F\u5154\u5154\u8D70\u7684\u65F6\u95F4\u4E5F\u8D8A\u6765\u8D8A\u8FD1\u4E86\u3002\u5C0F\u732A\u732A\u5F00\u59CB\u7761\u4E0D\u7740\u89C9\uFF0C\u5403\u4E0D\u4E0B\u996D\u3002\u4ED6\u53EA\u60F3\u65E0\u65F6\u65E0\u523B\u7684\u76EF\u7740\u5154\u5154\u3002\u54EA\u6015\u8EBA\u5728\u5E8A\u4E0A\uFF0C\u4ED6\u4E5F\u4F1A\u6402\u7740\u5154\u5B50\uFF0C\u501F\u7740\u6708\u5149\uFF0C\u770B\u7740\u5154\u5154\u4FA7\u8EBA\u5728\u5E8A\u4E0A\u7684\u5A07\u4FCF\u6A21\u6837\u3002\u732A\u732A\u600E\u4E48\u53EF\u80FD\u820D\u5F97\u5154\u5154\u79BB\u5F00\u5462\u3002</p><p>\u5154\u5154\u4E5F\u53D1\u73B0\u4E86\u732A\u732A\u7684\u4E0D\u5BF9\u52B2\u3002\u4ED6\u867D\u7136\u6BCF\u5929\u90FD\u8FD8\u5728\u5C06\u989C\u6B22\u7B11\uFF0C\u53EF\u662F\u5154\u5154\u5374\u770B\u4E0D\u89C1\u4ED6\u5403\u996D\uFF0C\u53EA\u80FD\u770B\u89C1\u4ED6\u8D8A\u6765\u8D8A\u6DF1\u9083\u7684\u9ED1\u773C\u5708\uFF0C\u5154\u5154\u5F88\u5FC3\u75BC\u3002</p><p>\u201C\u732A\uFF0C\u4F60\u522B\u6015\u554A\uFF0C\u6211\u4F1A\u4E00\u76F4\u559C\u6B22\u4F60\u7684\u3002\u201D\u5C0F\u5154\u5154\u770B\u7740\u7ED9\u81EA\u5DF1\u7AEF\u83DC\u7684\u5C0F\u732A\uFF0C\u8BF4\u3002</p><p>\u201C\u50BB\u74DC\uFF0C\u6211\u4E0D\u662F\u6015\u4F60\u4E0D\u559C\u6B22\u6211\u4E86\u3002\u6211\u5BB3\u6015\u6211\u4E0D\u80FD\u4FDD\u62A4\u4F60\uFF0C\u5BB3\u6015\u4E0D\u80FD\u966A\u7740\u4F60\u3002\u6211\u5BB3\u6015\u6211\u60F3\u62B1\u4F60\u7684\u65F6\u5019\uFF0C\u8EAB\u8FB9\u6CA1\u6709\u4F60\uFF1B\u6211\u66F4\u5BB3\u6015\uFF0C\u4F60\u8EAB\u8FB9\u6709\u5F88\u591A\u4E2A\u6211\u3002\u201D\u732A\u732A\u62B1\u7740\u5C0F\u5154\u5B50\uFF0C\u7528\u529B\u628A\u5979\u6402\u5728\u6000\u91CC\u3002</p><p>\u201C\u522B\u778E\u8BF4\uFF01\u50BB\u732A\uFF0C\u4F60\u62AC\u5934\u770B\u661F\u661F\uFF0C\u5C31\u5934\u4E0A\u7684\u6700\u4EAE\u7684\u90A3\u4E00\u9897\u3002\u65E0\u8BBA\u6211\u4EEC\u76F8\u8DDD\u591A\u8FDC\uFF0C\u53EF\u662F\uFF0C\u5728\u5B83\u7684\u773C\u91CC\uFF0C\u6211\u4EEC\u90FD\u662F\u5728\u4E00\u8D77\u7684\u3002\u201D</p><p>\u201C\u732A\u732A\uFF0C\u6CA1\u6709\u51E0\u5929\u6211\u5C31\u8981\u8D70\u5566\uFF0C\u6211\u4E0D\u5E0C\u671B\u4F60\u6BCF\u5929\u90FD\u96BE\u8FC7\u3002\u65E2\u7136\u90FD\u662F\u65E2\u5B9A\u7684\u4E8B\u5B9E\uFF0C\u90A3\u4E3A\u4EC0\u4E48\uFF0C\u6211\u4EEC\u4E0D\u628A\u73B0\u5728\u4E24\u4E2A\u4EBA\u5F85\u5728\u4E00\u8D77\u7684\u65F6\u95F4\u8FC7\u7684\u66F4\u52A0\u5145\u5B9E\u7F8E\u6EE1\u5462\uFF1F\u201D\u5C0F\u5154\u5154\u5728\u732A\u732A\u7684\u6000\u91CC\uFF0C\u628A\u5934\u9760\u5728\u4E86\u4ED6\u7684\u5DF2\u7ECF\u7565\u5FAE\u6709\u4E9B\u6D88\u7626\u7684\u80A9\u8180\u4E0A\u3002</p><p>\u5C0F\u732A\u732A\u628A\u773C\u6CEA\u64E6\u5E72\uFF1A\u201C\u597D\u3002\u6211\u77E5\u9053\u8BE5\u600E\u4E48\u505A\u5566\u3002\u201D</p><p>\u201C\u65E0\u8BBA\u524D\u8DEF\u591A\u4E48\u6A21\u7CCA\uFF0C\u65E0\u8BBA\u76F8\u805A\u591A\u4E48\u9065\u8FDC\u3002\u6211\u90FD\u4F1A\u4E00\u76F4\u5728\u3002\u201D</p><p>\u201C\u6240\u7231\u9694\u5C71\u6D77\uFF0C\u5C71\u6D77\u7686\u53EF\u5E73\u3002\u201D</p><h2 id="\u82F9\u679C-\u667A\u6167\u679C" tabindex="-1"><a class="header-anchor" href="#\u82F9\u679C-\u667A\u6167\u679C" aria-hidden="true">#</a> \u82F9\u679C=\u667A\u6167\u679C</h2><p>\u5723\u7ECF\u4E0A\u8BF4\uFF0C\u4E0A\u5E1D\u521B\u9020\u4E86\u4E9A\u5F53\u548C\u590F\u5A03\u540E\uFF0C\u5B89\u6392\u4ED6\u4EEC\u5728\u4F0A\u7538\u56ED\u91CC\u751F\u6D3B\u3002\u4F0A\u7538\u56ED\u91CC\u6811\u6728\u5E38\u9752\uFF0C\u82B1\u8349\u5E38\u7EFF\uFF0C\u6709\u5404\u79CD\u5947\u73CD\u5F02\u679C\u548C\u98DE\u79BD\u8D70\u517D\u3002\u8FDB\u5165\u4F0A\u7538\u56ED\u7684\u7B2C\u4E00\u5929\uFF0C\u4E0A\u5E1D\u5C31\u8B66\u544A\u4E9A\u5F53\u548C\u590F\u5A03\u6240\u6709\u7684\u679C\u5B9E\u90FD\u53EF\u4EE5\u5403\uFF0C\u53EA\u6709\u667A\u6167\u6811\u7684\u8FC7\u662F\u4E0D\u53EF\u4EE5\u5403.</p><p>\u4E9A\u5F53\u548C\u590F\u5A03\u5F00\u59CB\u5F88\u542C\u8BDD\uFF0C\u4F46\u662F\u6CA1\u8FC7\u591A\u4E45\uFF0C\u5C31\u6709\u4E00\u6761\u9634\u9669\u7684\u6BD2\u86C7\u82B1\u8A00\u5DE7\u8BED\u5F15\u8BF1\u72EC\u81EA\u73A9\u800D\u7684\u590F\u5A03\u5077\u5403\u4E86\u667A\u6167\u6811\u7684\u679C\u5B50\uFF0C\u5929\u771F\u7684\u590F\u5A03\u53C8\u628A\u5403\u5269\u4E0B\u7684\u679C\u5B50\u7ED9\u4E86\u4E9A\u5F53\u3002\u4E8E\u662F\uFF0C\u4E9A\u5F53\u548C\u590F\u5A03\u5C31\u6709\u4E86\u667A\u6167\uFF0C\u4EBA\u7C7B\u5F00\u59CB\u6709\u4E86\u5584\u4E0E\u6076\u3002</p><p>\u82F9\u679C\u5728\u897F\u65B9\u8C61\u5F81\u7740\u7231\uFF0C\u4E9A\u5F53\u548C\u590F\u5A03\u5403\u7684\u201C\u7981\u679C\u201D\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u9752\u82F9\u679C\uFF0C\u5728\u4E0D\u8BE5\u5403\u7684\u65F6\u5019\u5403\u4E86\u5B83\uFF0C\u53D7\u5230\u4E0A\u5E1D\u7684\u60E9\u7F5A\u3002\u6CA1\u6709\u6210\u719F\u7684\u82F9\u679C\u7684\u5473\u9053\uFF0C\u53C8\u9178\u53C8\u6DA9\uFF0C\u6B63\u5982\u9752\u6DA9\u7684\u9752\u6625\u5982\u540C\u662F\u6CA1\u6709\u6210\u719F\u7684\u65F6\u5019\uFF0C\u4F60\u4E0D\u8981\u53BB\u5543\u5B83\u3002</p><p>\u82F9\u679C\u5C31\u6210\u4E86\u667A\u6167\u679C\u7684\u4EE3\u540D\u8BCD\uFF0C\u82F9\u679C\u4E5F\u6210\u4E86\u667A\u6167\u7684\u8C61\u5F81\u3002</p><h2 id="\u7B28\u7B28\u718A" tabindex="-1"><a class="header-anchor" href="#\u7B28\u7B28\u718A" aria-hidden="true">#</a> \u7B28\u7B28\u718A</h2><p>\u7B28\u7B28\u718A\u6765\u5230\u6CB3\u8FB9\uFF0C\u770B\u7740\u6CB3\u6C34\u91CC\u7684\u9C7C\uFF0C\u7B28\u7B28\u718A\u89C9\u5F97\u9C7C\u513F\u4EEC\u592A\u5E78\u798F\u4E86\uFF0C\u4E0D\u7528\u6355\u98DF\uFF0C\u5728\u6CB3\u6C34\u91CC\u81EA\u7531\u81EA\u5728\uFF0C\u771F\u5E78\u798F\u3002\u7B28\u7B28\u718A\u771F\u60F3\u53D8\u6210\u4E00\u6761\u9C7C\uFF0C\u4E00\u6761\u81EA\u7531\u81EA\u5728\u7684\u9C7C\u3002</p><p>\u7B28\u7B28\u718A\u8D70\u5728\u56DE\u5BB6\u7684\u8DEF\u4E0A\uFF0C\u4E0D\u5C0F\u5FC3\u649E\u5230\u4E86\u683C\u683C\u5DEB\uFF0C\u683C\u683C\u5DEB\u662F\u68EE\u6797\u91CC\u7684\u5DEB\u5A46\uFF0C\u683C\u683C\u5DEB\u65B0\u7814\u5236\u7684\u53D8\u8EAB\u836F\u6C34\u6D12\u5728\u4E86\u7B28\u7B28\u718A\u7684\u8EAB\u4E0A\uFF0C\u7B28\u7B28\u718A\u7ACB\u523B\u53D8\u6210\u4E86\u4E00\u6761\u9C7C\uFF0C\u53D8\u6210\u9C7C\u7684\u7B28\u7B28\u718A\u79BB\u5F00\u4E86\u6C34\u662F\u65E0\u6CD5\u6D3B\u4E0B\u53BB\u7684\uFF0C\u683C\u683C\u5DEB\u53EA\u597D\u628A\u7B28\u7B28\u718A\u653E\u5728\u6C34\u91CC\u3002</p><p>\u683C\u683C\u5DEB\u5BF9\u7B28\u7B28\u718A\u8BF4\uFF1A\u201C\u771F\u662F\u5BF9\u4E0D\u8D77\u7B28\u7B28\u718A\uFF0C\u4F60\u5148\u5728\u6CB3\u6C34\u91CC\u751F\u6D3B\uFF0C\u6211\u9A6C\u4E0A\u5C31\u56DE\u53BB\u7814\u5236\u89E3\u836F\uFF0C\u6211\u4F1A\u628A\u4F60\u53D8\u56DE\u6765\u7684\u3002\u201D</p><p>\u7B28\u7B28\u718A\u8BF4\uFF1A\u201C\u6CA1\u5173\u7CFB\uFF0C\u6211\u6B63\u597D\u53EF\u4EE5\u4EAB\u53D7\u4E00\u4E0B\u53D8\u6210\u9C7C\u7684\u751F\u6D3B\uFF0C\u4F60\u4E0D\u7528\u6025\u7740\u628A\u6211\u53D8\u56DE\u6765\u3002\u201D</p><p>\u683C\u683C\u5DEB\u628A\u53D8\u6210\u9C7C\u7684\u7B28\u7B28\u718A\u653E\u8FDB\u6CB3\u6C34\u91CC\u4E4B\u540E\uFF0C\u9A91\u7740\u626B\u628A\u6025\u5FD9\u56DE\u5BB6\u7814\u5236\u89E3\u836F\u53BB\u4E86\uFF0C\u7B28\u7B28\u718A\u9AD8\u5174\u7684\u5728\u6CB3\u6C34\u91CC\u6E38\u6765\u6E38\u53BB\uFF0C\u5F53\u4E00\u6761\u9C7C\u8FD9\u53EF\u662F\u7B28\u7B28\u718A\u7684\u68A6\u60F3\uFF0C\u73B0\u5728\u7EC8\u4E8E\u5B9E\u73B0\u4E86\u3002</p><p>\u7B28\u7B28\u718A\u6CA1\u6709\u6CE8\u610F\u5230\u5B83\u5DF2\u7ECF\u88AB\u4E00\u6761\u5927\u9C7C\u76EF\u4E0A\u4E86\uFF0C\u7B28\u7B28\u718A\u7A81\u7136\u611F\u5230\u773C\u524D\u4E00\u7247\u6F06\u9ED1\uFF0C\u539F\u6765\u81EA\u5DF1\u5DF2\u7ECF\u5728\u5927\u9C7C\u7684\u53E3\u91CC\u4E86\uFF0C\u7B28\u7B28\u718A\u8D81\u7740\u5927\u9C7C\u8FD8\u6CA1\u6709\u628A\u5634\u5408\u4E0A\u9003\u4E86\u51FA\u53BB\uFF0C\u7B28\u7B28\u718A\u4E0D\u65AD\u7684\u6E38\uFF0C\u51F6\u6076\u7684\u5927\u9C7C\u5728\u540E\u9762\u7D27\u8FFD\u4E0D\u820D\u3002</p><p>\u4E00\u4E2A\u5C0F\u6D77\u9A6C\u628A\u7B28\u7B28\u718A\u62FD\u8FDB\u4E86\u6D77\u85FB\u91CC\uFF0C\u5927\u9C7C\u600E\u4E48\u627E\u90FD\u627E\u4E0D\u5230\uFF0C\u53EA\u597D\u79BB\u5F00\uFF0C\u5C0F\u6D77\u9A6C\u544A\u8BC9\u7B28\u7B28\u718A\u8BF4\uFF1A\u201C\u5927\u9C7C\u5403\u5C0F\u9C7C\u8FD9\u662F\u89C4\u5F8B\uFF0C\u4E00\u5B9A\u8981\u5C0F\u5FC3\u90A3\u4E9B\u5927\u9C7C\uFF0C\u4E0D\u7136\u81EA\u5DF1\u4F1A\u88AB\u5403\u6389\u3002\u201D</p><p>\u7B28\u7B28\u718A\u5230\u5904\u4E1C\u8EB2\u897F\u85CF\uFF0C\u8FD9\u5B8C\u5168\u8DDF\u7B28\u7B28\u718A\u60F3\u8C61\u7684\u751F\u6D3B\u4E0D\u4E00\u6837\uFF0C\u5403\u7684\u98DF\u7269\u4E5F\u53D8\u6210\u4E86\u96BE\u5403\u7684\u6D77\u8349\u3002</p><p>\u8981\u77E5\u9053\u718A\u53EF\u662F\u4E00\u4E2A\u4E0D\u5403\u8349\u7684\u52A8\u7269\uFF0C\u73B0\u5728\u5374\u5929\u5929\u5403\u7740\u6D77\u8349\uFF0C\u7B28\u7B28\u718A\u6000\u5FF5\u8D77\u81EA\u5DF1\u4EE5\u524D\u505A\u5C0F\u718A\u7684\u65E5\u5B50\uFF0C\u53EF\u4EE5\u5403\u5230\u5F88\u591A\u7684\u7F8E\u98DF\uFF0C\u9999\u751C\u7684\u7CD5\u70B9\uFF0C\u60F3\u60F3\u5C31\u8BA9\u4EBA\u76F4\u6D41\u53E3\u6C34\u3002</p><p>\u7B28\u7B28\u718A\u60F3\u53D8\u56DE\u4E00\u53EA\u718A\uFF0C\u53EF\u662F\u683C\u683C\u5DEB\u7684\u89E3\u836F\u8FD8\u6CA1\u6709\u7814\u5236\u51FA\u6765\uFF0C\u7B28\u7B28\u718A\u4E0D\u613F\u610F\u518D\u5403\u90A3\u96BE\u5403\u7684\u6D77\u8349\uFF0C\u53EA\u597D\u997F\u7740\u809A\u5B50\uFF0C\u6B63\u5728\u7B28\u7B28\u718A\u997F\u7740\u809A\u5B50\u7684\u65F6\u5019\uFF0C\u4E00\u5757\u9762\u5305\u51FA\u73B0\u5728\u7B28\u7B28\u718A\u7684\u89C6\u7EBF\u91CC\uFF0C\u9762\u5305\u5728\u4E00\u4E2A\u74F6\u5B50\u91CC\uFF0C\u7B28\u7B28\u718A\u94BB\u8FDB\u74F6\u5B50\u91CC\uFF0C\u5F00\u5FC3\u7684\u5403\u8D77\u4E86\u9762\u5305\u3002</p><p>\u7B28\u7B28\u718A\u79BB\u5F00\u4E86\u6C34\u9762\uFF0C\u539F\u6765\u662F\u683C\u683C\u5DEB\u62FF\u9762\u5305\u8BF1\u60D1\u7B28\u7B28\u718A\u7684\uFF0C\u683C\u683C\u5DEB\u628A\u9B54\u6CD5\u836F\u6C34\u7684\u89E3\u836F\u6EF4\u5728\u4E86\u53D8\u6210\u9C7C\u7684\u7B28\u7B28\u718A\u8EAB\u4E0A\uFF0C\u7B28\u7B28\u718A\u53D8\u56DE\u4E86\u4E00\u53EA\u718A\uFF0C\u53EF\u662F\u7B28\u7B28\u718A\u5374\u5927\u54ED\u8D77\u6765\uFF0C\u683C\u683C\u5DEB\u5230\u73B0\u5728\u4E5F\u6CA1\u5F04\u6E05\u695A\u7B28\u7B28\u718A\u4E3A\u4EC0\u4E48\u4F1A\u54ED\u3002</p><h2 id="\u5C0F\u80A5\u732A" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u80A5\u732A" aria-hidden="true">#</a> \u5C0F\u80A5\u732A</h2><p>\u4E00\u53EA\u9965\u997F\u7684\u72D0\u72F8\u6B63\u51C6\u5907\u51FA\u95E8\u627E\u5348\u9910\uFF0C\u7A81\u7136\uFF0C\u5916\u9762\u4F20\u6765\u4E00\u9635\u6572\u95E8\u58F0\u3002\u72D0\u72F8\u6253\u5F00\u95E8\uFF0C\u95E8\u53E3\u7ADF\u7AD9\u7740\u4E00\u53EA\u5C0F\u80A5\u732A\u3002</p><p>\u201C\u54CE\u5440\uFF0C\u6211\u627E\u9519\u95E8\u4E86\uFF0C\u6211\u4EE5\u4E3A\u662F\u5154\u5B50\u7684\u5BB6\u5462\uFF01\u201D</p><p>\u201C\u6CA1\u9519\uFF0C\u4F60\u6765\u5F97\u6B63\u662F\u65F6\u5019\uFF01\u201D</p><p>\u72D0\u72F8\u628A\u5C0F\u732A\u72E0\u72E0\u5730\u62D6\u8FDB\u5C4B\u91CC\uFF0C\u5927\u58F0\u53EB\u9053\uFF1A\u201C\u8FD9\u771F\u662F\u6211\u5E78\u8FD0\u7684\u4E00\u5929\uFF01\u6211\u8981\u5403\u4E00\u987F\u9999\u55B7\u55B7\u7684\u70E4\u732A\u8089\uFF0C\u73B0\u5728\uFF0C\u4F60\u4E56\u4E56\u5730\u8EBA\u5230\u70E4\u9505\u91CC\u53BB\u5427\uFF01\u201D</p><p>\u6323\u624E\u662F\u6CA1\u6709\u7528\u7684\uFF0C\u4E8E\u662F\uFF0C\u5C0F\u732A\u8BF4\uFF1A\u201C\u542C\u4F60\u7684\u5B89\u6392\u5427\u3002\u4E0D\u8FC7\uFF0C\u6211\u5F88\u810F\u54E6\uFF0C\u5728\u4F60\u5403\u6389\u6211\u4E4B\u524D\uFF0C\u5C31\u4E0D\u60F3\u628A\u6211\u6D17\u5F97\u5E72\u51C0\u4E00\u70B9\u5417\uFF1F\u201D\u4E8E\u662F\uFF0C\u72D0\u72F8\u5FD9\u8D77\u6765\u4E86\u3002\u4ED6\u62FE\u6765\u4E86\u6811\u679D\u3001\u751F\u8D77\u4E86\u706B\uFF0C\u518D\u5230\u6CB3\u8FB9\u53BB\u63D0\u6C34\uFF0C\u7136\u540E\uFF0C\u7ED9\u5C0F\u732A\u6D17\u4E86\u4E00\u4E2A\u75DB\u75DB\u5FEB\u5FEB\u7684\u70ED\u6C34\u6FA1\u3002</p><p>\u72D0\u72F8\u8BF4\uFF1A\u201C\u597D\u5566\uFF0C\u73B0\u5728\u4F60\u662F\u5168\u6751\u6700\u5E72\u51C0\u7684\u5C0F\u732A\u4E86\uFF0C\u5FEB\u7ED9\u6211\u8EBA\u5230\u70E4\u9505\u91CC\u53BB\u5427\uFF01\u201D</p><p>\u6323\u624E\u662F\u6CA1\u6709\u7528\u7684\uFF0C\u4E8E\u662F\uFF0C\u5C0F\u732A\u8BF4\uFF1A\u201C\u542C\u4F60\u7684\u5B89\u6392\u5427\u3002\u4E0D\u8FC7\uFF0C\u6211\u592A\u5C0F\u4E86\uFF0C\u5728\u4F60\u5403\u6389\u6211\u4E4B\u524D\uFF0C\u5C31\u4E0D\u60F3\u5582\u9971\u6211\uFF0C\u8BA9\u6211\u957F\u5F97\u80D6\u4E00\u70B9\u5417\uFF1F\u201D\u4E8E\u662F\uFF0C\u72D0\u72F8\u5FD9\u8D77\u6765\u4E86\u3002\u4ED6\u6458\u6765\u897F\u7EA2\u67FF\uFF0C\u505A\u4E86\u901A\u5FC3\u7C89\uFF0C\u8FD8\u70E4\u4E86\u4E00\u7089\u91D1\u9EC4\u8272\u7684\u5C0F\u751C\u997C\u3002\u5C0F\u732A\u5927\u5927\u54A7\u54A7\u5730\u5403\u4E86\u4E00\u987F\u4E30\u76DB\u7684\u5348\u9910\u3002</p><p>\u72D0\u72F8\u8BF4\uFF1A\u201C\u597D\u5566\uFF0C\u73B0\u5728\u4F60\u662F\u5168\u6751\u6700\u80A5\u7684\u5C0F\u732A\u4E86\uFF0C\u5FEB\u7ED9\u6211\u8EBA\u5230\u70E4\u9505\u91CC\u53BB\u5427\uFF01\u201D</p><p>\u6323\u624E\u662F\u6CA1\u6709\u7528\u7684\uFF0C\u4E8E\u662F\uFF0C\u5C0F\u732A\u8BF4\uFF1A\u201C\u542C\u4F60\u7684\u5B89\u6392\u5427\u3002\u4E0D\u8FC7\uFF0C\u6211\u662F\u4E00\u53EA\u52E4\u52B3\u7684\u5C0F\u732A\uFF0C\u6211\u7684\u8089\u4E00\u5B9A\u7279\u522B\u786C\u3002\u5728\u4F60\u5403\u6389\u6211\u4E4B\u524D\uFF0C\u5C31\u4E0D\u60F3\u5148\u7ED9\u6211\u6309\u6469\u4E00\u4E0B\uFF0C\u8BA9\u81EA\u5DF1\u5403\u4E0A\u66F4\u5AE9\u4E00\u70B9\u7684\u70E4\u8089\u5417\uFF1F\u201D</p><p>\u4E8E\u662F\uFF0C\u72D0\u72F8\u5FD9\u8D77\u6765\u4E86\u3002\u4ED6\u8BA9\u5C0F\u732A\u5750\u5728\u6728\u6905\u5B50\u4E0A\uFF0C\u4E3A\u5C0F\u732A\u634F\u634F\u5934\u3001\u677E\u677E\u80A9\u3001\u62C9\u62C9\u817F\uFF0C\u5C0F\u732A\u8212\u670D\u5F97\u76F4\u54FC\u54FC\u3002\u72D0\u72F8\u8BF4\uFF1A\u201C\u597D\u5566\uFF0C\u73B0\u5728\u4F60\u662F\u5168\u6751\u6700\u80A5\u7684\u5C0F\u732A\u4E86\uFF0C\u5FEB\u7ED9\u6211\u8EBA\u5230\u70E4\u9505\u91CC\u53BB\u5427\uFF01\u201D</p><p>\u201C\u90A3\u597D\u5427\uFF0C\u4E0D\u8FC7\uFF0C\u8FD9\u4E9B\u65E5\u5B50\u6211\u7684\u786E\u592A\u7D2F\u4E86\u3002\u4F60\u770B\uFF0C\u6211\u7684\u80CC\u8FD8\u6709\u70B9\u50F5\u786C\uFF0C\u4F60\u80FD\u518D\u7528\u529B\u66FF\u6211\u6309\u6469\u4E00\u4E0B\u5417\uFF1F\u5BF9\uFF0C\u5C31\u8FD9\u6837\uFF0C\u518D\u7528\u70B9\u529B\u6C14\uFF01\u201D\u8FC7\u4E86\u4E00\u4F1A\uFF0C\u8EAB\u540E\u4F20\u6765\u72D0\u72F8\u7684\u547C\u565C\u58F0\uFF0C\u5C0F\u732A\u8F7B\u58F0\u95EE\uFF1A\u201C\u72D0\u72F8\u5148\u751F\uFF0C\u4F60\u5728\u54EA\u513F\u554A\uFF1F\u201D</p><p>\u72D0\u72F8\u6CA1\u6709\u542C\u89C1\u5C0F\u732A\u7684\u558A\u58F0\uFF0C\u4ED6\u7D2F\u6781\u4E86\uFF0C\u6C89\u6C89\u5730\u7761\u53BB\u4E86\u3002</p><p>\u6751\u5B50\u91CC\u6700\u5E72\u51C0\u3001\u6700\u80A5\u3001\u6700\u67D4\u8F6F\u7684\u5C0F\u732A\uFF0C\u62FF\u7740\u5269\u4E0B\u7684\u751C\u997C\uFF0C\u98DE\u5FEB\u5730\u8DD1\u56DE\u5BB6\u53BB\u4E86\u3002</p><h2 id="\u68A6\u91CC\u6709\u4F60-\u5341\u5206\u751C" tabindex="-1"><a class="header-anchor" href="#\u68A6\u91CC\u6709\u4F60-\u5341\u5206\u751C" aria-hidden="true">#</a> \u68A6\u91CC\u6709\u4F60\uFF0C\u5341\u5206\u751C</h2><p>\u4F4F\u5728\u5C71\u5934\u7684\u5C0F\u5154\u5B50\uFF0C\u6700\u8FD1\u5FC3\u91CC\u85CF\u4E86-\u4E2A\u5C0F\u79D8\u5BC6\u3002\u90A3\u4E2A\u5C0F\u79D8\u5BC6\uFF0C\u662F\u6709\u5173\u5BF9\u9762\u5C71\u4E0A\u7684\u7EA2\u5C3E\u5DF4\u5C0F\u72D0\u72F8\u7684\u3002</p><p>\u8FD9\u5929\uFF0C\u5C0F\u5154\u5B50\u7167\u5E38\u53BB\u627E\u5C0F\u72D0\u72F8\u73A9\uFF0C\u534A\u8DEF\u9047\u5230\u4E86\u5C0F\u7CBE\u7075,\u542C\u8BF4\u8FD9\u4E2A\u5C0F\u7CBE\u7075\u7CBE\u901A\u4E07\u4E8B\uFF0C\u5C0F\u5154\u5B50\u541E\u541E\u5410\u5410\u5730\u95EE:\u201C\u5C0F\u7CBE\u7075\uFF0C. \u6211\u4E3A\u4EC0\u4E48\u89C1\u5230\u90A3\u4E2A\u4EBA\uFF0C\u5C31.. \u5C31\u4F1A\u5FC3\u8DF3\u52A0\u901F\uFF0C\u5C31.. \u50CF\u6211\u6BCF\u5929\u5728\u8349\u4E1B\u4E0A\u6253\u5B8C\u6EDA\u4E00\u6837?\u5C0F\u7CBE \u7075\u717D\u52A8\u7740\u5C0F\u7FC5\u8180\uFF0C\u7B11\u563B\u563B\u5730\u5BF9\u5C0F\u5154\u5B50\u8BF4:\u201C\u4F60\u8FD9\u662F\u559C\u6B22\u4E0A\u4EBA\u5BB6\u5566\u3002\u201D\u5C0F\u5154\u5B50\u53C8\u95EE:\u201C\u90A3\u4EC0\u4E48\u662F\u559C\u6B22\u5440?</p><p>\u5C0F\u7CBE\u7075\u60F3\u4E86\u60F3\u8BF4: &quot;\u559C\u6B22\u5C31\u662F\uFF0C\u4F60\u5728\u89C1\u4ED6\u4E4B\u524D\uFF0C\u5E0C\u671B\u65F6\u95F4\u8FC7\u5F97\u5FEB\u4E00-\u70B9, \u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u5FEB\u70B9\u89C1\u5230\u4ED6\u3002\u89C1\u5230\u4ED6\u4E4B\u540E\uFF0C\u4F60\u4F1A\u5F88\u5F00\u5FC3\uFF0C\u4F1A\u5E0C\u671B\u65F6\u95F4\u8FC7\u5F97\u6162\u4E00-\u70B9,\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u6709\u66F4\u591A\u7684\u65F6\u95F4\u548C\u4ED6\u5728\u4E00\u8D77\u3002</p><p>\u201C\u53EF\u662F\uFF0C\u6211\u4E0D\u77E5\u9053\u4ED6\u559C\u4E0D\u559C\u6B22\u6211\uFF0C\u600E\u4E48\u529E?\u201D \u5C0F\u5154\u5B50\u5931\u843D\u5730\u8BF4\u3002</p><p>&quot;\u4F20\u8BF4\u5728\u7761\u524D\u53EA\u8981\u60F3\u7740\u4F60\u559C\u6B22\u7684\u90A3\u4E2A\u4EBA\uFF0C\u5982\u679C\u4ED6\u68A6\u5230\u4E86\u4F60\uFF0C\u4F60\u5C31\u53EF\u4EE5\u8FDB\u5165\u4ED6\u7684\u68A6\u91CC\uFF0C\u8FD9\u6837\uFF0C\u4F60\u4FBF\u53EF\u4EE5\u77E5\u9053\u4ED6\u5BF9\u4F60\u7684\u5FC3\u610F\u5566!\u201D\u5C0F\u7CBE\u7075\u8BF4\u5B8C\u5C31\u6D88\u5931\u4E86\u3002</p><p>\u5C0F\u5154\u5B50\u9ED8\u9ED8\u8BB0\u4F4F\u4E86\u5C0F\u7CBE\u7075\u7684\u8BDD\uFF0C\u7EC8\u4E8E\uFF0C\u661F\u661F\u51FA\u6765\u4E86\uFF0C\u5C0F\u5154\u5B50\u8EBA\u5728\u67D4\u8F6F\u7684\u5C0F\u5E8A.\u4E0A,\u60F3\u7740\u548C\u5C0F\u72D0\u72F8\u7684\u6B22\u4E50\u65F6\u5149\uFF0C\u4E0D\u77E5\u4E0D\u89C9,\u7761\u7740\u4E86..</p><p>\u679C\u7136\uFF0C\u5C0F\u5154\u5B50\u6765\u5230\u4E86\u4E00\u4E2A\u53EB\u68A6\u4E4B\u56FD\u7684\u5730\u65B9\uFF0C\u5728\u8FD9\u4E2A\u5730\u65B9\uFF0C\u5979\u770B\u5230\u4E86\u4E00\u95F4\u5C0F\u6728\u5C4B,\u6302\u7740\u7EA2\u5C3E\u5DF4\u5C0F\u72D0\u72F8\u7684\u724C\u5B50\uFF0C\u5C0F\u5154\u5B50\u6DF1\u5438\u4E00\u53E3\u6C14,\u63A8\u5F00\u4E86\u5C0F\u6728\u95E8\uFF0C\u901A\u5F80\u5C0F\u72D0\u72F8\u68A6\u91CC\u7684\u8DEF\u5F00\u6EE1\u4E86\u82B1\u82B1\u8349\u8349\uFF0C\u8774\u8776\u5728\u7A7A\u4E2D\u98DE\u821E,\u5C0F\u5154\u5B50\u8D70\u4E86\u597D\u4E45\uFF0C\u5728\u4E00\u7247\u8349\u5730\u4E0A\u770B\u5230\u4E86\u5C0F\u72D0\u72F8\uFF0C\u5C0F\u72D0\u72F8\u7B11\u563B\u563B\u5730\u5BF9\u5C0F\u5154\u5B50\u8BF4:\u201C\u4F60\u7EC8\u4E8E\u6765\u4E86\uFF0C \u6211\u4E00\u76F4\u5728\u7B49\u4F60\uFF0C\u6211\u5FC3\u7231\u7684\u5C0F\u5154\u5B50\u3002</p><p>\u68A6\u91CC\uFF0C\u5C0F\u72D0\u72F8\u5E26\u7740\u5C0F\u5154\u5B50\u5728\u8349\u4E1B\u4E0A\u6253\u6EDA\u513F\uFF0C\u5C0F\u72D0\u72F8\u8FD8\u4E3A\u5C0F\u5154\u5B50\u7F16\u7EC7\u4E86\u4E00\u4E2A\u5C0F\u82B1\u73AF\uFF0C\u4EB2\u624B\u7ED9\u5C0F\u5154\u5B50\u6234\u5728\u5934\u4E0A\uFF0C\u5750\u5728\u6E56\u8FB9\uFF0C\u770B\u7740\u5728\u6E56\u4E0A\u98D8\u7740\u7684\u5C0F\u8239\uFF0C\u5403\u7740\u751C\u751C\u7684\u7CD6\u679C\uFF0C \u73A9\u7D2F\u4E86\u5C0F\u72D0\u72F8\u5C31\u8BA9\u5C0F\u5154\u5B50\u8EBA\u5728\u4ED6\u67D4\u8F6F\u7684\u7EA2\u5C3E\u5DF4\u4E0A\uFF0C\u5BA0\u6EBA\u5730\u629A\u6478\u7740\u5C0F\u5154\u5B50\u5934\uFF0C\u8033\u8FB9\u62C2\u8FC7\u7684\u53EA\u6709\u6E29\u548C\u7684\u98CE\u548C\u5F7C\u6B64\u7684\u547C\u5438\u3002</p><p>\u4E0D\u77E5\u8FC7\u4E86\u591A\u4E45,\u5C0F\u5154\u5B50\u773C\u524D\u95EA\u8FC7\u4E00\u9053\u767D\u5149\uFF0C\u68A6\u7ED3\u675F\u4E86...</p><p>\u5C0F\u5154\u5B50\u7EC6\u7EC6\u56DE\u60F3\u7740\u521A\u624D\u7684\u68A6\uFF0C\u6025\u5FD9\u671D\u5C0F\u72D0\u72F8\u5BB6\u8DD1\u53BB\uFF0C\u72B9\u8C6B\u4E86\u4E00\u4E0B\uFF0C\u7EC8\u4E8E\u6572\u54CD\u4E86\u5C0F\u72D0\u72F8\u5BB6\u7684\u95E8,\u4E0D\u4E00\u4F1A\u513F\uFF0C\u95E8\u5F00\u4E86\uFF0C\u9732\u51FA\u4E86\u5C0F\u72D0\u72F8\u542B\u7740\u7B11\u610F\u7684\u5927\u773C\u775B\u3002\u5C0F\u5154\u5B50\u8BF4:\u201D\u4F60\u597D\u5440\uFF0C\u5C0F\u72D0\u72F8\uFF0C\u4ECA\u5929\u6211\u4EEC\u53BB\u6458\u8611\u83C7\u5427!&quot;\u5C0F\u72D0\u72F8\u70B9\u4E86\u70B9\u5934:\u201C\u597D\u554A\u597D\u554A\uFF0C\u5FEB\u8FDB\u6765\u5427\uFF0C\u7B49\u6211\u6536\u62FE\u4E00\u4E0B\u6211\u4EEC\u5C31\u51FA\u53D1\u3002</p><p>\u8DEF\u4E0A\uFF0C\u5C0F\u5154\u5B50\u652F\u652F\u543E\u543E\u5730\u95EE: &quot;\u5C0F\u72D0\u72F8\uFF0C..\u4F60\u6628\u5929\u505A\u4E86\u4EC0\u4E48\u68A6\u5440?\u201D</p><p>\u5C0F\u72D0\u72F8\u5237\u5730\u4E00\u4E0B\u8138\u7EA2\u4E86\uFF0C\u6320\u4E86\u6320\u5934\uFF0C\u4E0D\u597D\u610F\u601D\u8BF4:\u201C\u4E3A..\u4E3A\u4EC0\u4E48\u8981\u95EE\u8FD9\u4E2A?\u201D</p><p>\u201C\u56E0\u4E3A\u6211\u68A6\u5230\u4E86 ..\u5C0F\u5154\u5B50\u4E0D\u5C0F\u5FC3\u8BF4\u6F0F\u4E86\u5634\uFF0C\u8D76\u5FD9\u8BF4&quot;\u54CE\u5440\uFF0C\u4F60\u5FEB\u70B9\u8BF4\u8BF4\u561B!&quot;</p><p>&quot;\u55EF..\u6211\u68A6\u5230\u4E86.\u5176\u5B9E\u662F\u4E00\u4E2A\u5341\u4E8C\u5206\u751C\u7684\u68A6\u3002\u201D</p><p>\u201D\u4E3A\u4EC0\u4E48\u662F\u5341\u4E8C\u5206\u751C?\u201D\u5C0F\u5154\u5B50\u4E0D\u89E3\u7684\u95EE\u3002</p><p>\u201C\u4E00\u5206\u662F\u5B81\u9759\uFF0C\u4E00\u5206\u662F\u60EC\u610F\u3002\u201D</p><p>\u5C0F\u72D0\u72F8\u62C9\u8D77\u5C0F\u5154\u5B50\u7684\u624B\u7EE7\u7EED\u8BF4\u201C\u7136\u540E\u68A6\u91CC\u6709\u4F60\uFF0C\u4F60\u5341\u5206\u751C\u3002</p><h2 id="\u665A\u5B89" tabindex="-1"><a class="header-anchor" href="#\u665A\u5B89" aria-hidden="true">#</a> \u665A\u5B89\uFF01</h2><p>\u65F6\u95F4\u5728\u68EE\u6797\u91CC\uFF0C\u6162\u6162\u7684\u6D41\u901D\u7740\uFF0C\u4E0D\u4E45\u79CB\u5929\u4FBF\u6765\u4E86\uFF0C\u4E5F\u5230\u4E86\u52A8\u7269\u4EEC\u6700\u5FD9\u788C\u7684\u5B63\u8282\uFF0C\u56E0\u4E3A\u79CB\u5929\u7684\u91D1\u9EC4\uFF0C\u50CF\u6781\u4E86\u5927\u81EA\u7136\u7ED9\u4E88\u52A8\u7269\u4EEC\u6700\u73CD\u8D35\u7684\u5B9D\u85CF\uFF0C\u4E5F\u6807\u5FD7\u7740\u5C0F\u52A8\u7269\u4EEC\u8981\u5F00\u59CB\u50A8\u5B58\u51AC\u5929\u7684\u7CAE\u98DF\u4E86\u3002</p><p>\u9AD8\u8038\u5165\u4E91\u7684\u677E\u6811\u4E0A\uFF0C\u5C0F\u677E\u9F20\u4E0A\u7A9C\u4E0B\u8DF3\u7684\u8EAB\u5F71\u7740\u5B9E\u8BA9\u4EBA\u4E0D\u5F97\u4E0D\u6CE8\u610F\u3002\u90A3\u5C0F\u677E\u9F20\u5728\u5FD9\u4EC0\u4E48\u5462\uFF1F\u548B\u4E00\u770B\uFF0C\u539F\u6765\u5C0F\u677E\u9F20\u5728\u5FD9\u7740\u6361\u5730\u4E0A\u7684\u677E\u679C\uFF0C\u4E0D\u505C\u7684\u5F80\u81EA\u5DF1\u7684\u5C0F\u7A9D\u91CC\u9001\u5462\uFF01\u5728\u5C0F\u677E\u9F20\u5FD9\u788C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5544\u6728\u9E1F\u533B\u751F\uFF0C\u4E5F\u5728\u65C1\u8FB9\u7684\u6811\u4E0A\u4E0D\u505C\u7684\u7ED9\u5927\u53D4\u4F2F\u4F2F\u9A71\u866B\u2026\u2026</p><p>\u6240\u4EE5\u53EA\u8981\u4F60\u4ED4\u7EC6\u4E00\u770B\uFF0C\u6574\u4E2A\u68EE\u6797\u90FD\u5728\u79CB\u5929\u7684\u6C14\u6C1B\u4E2D\u5FD9\u788C\u7740\u3002\u5728\u68EE\u6797\u7684\u53E6\u4E00\u8FB9\uFF0C\u5C0F\u732A\u5728\u5C4B\u5916\u4E0D\u505C\u7684\u5228\u5751\uFF0C\u8DEF\u8FC7\u7684\u5C0F\u767D\u5154\u770B\u89C1\u4E86\uFF0C\u95EE\u5C0F\u732A\uFF1A\u201C\u5C0F\u732A\uFF0C\u5C0F\u732A\u4F60\u5728\u5E72\u561B\u5462\uFF1F\u201D</p><p>\u201C\u6211\u5728\u5228\u4E2A\u5927\u70B9\u7684\u5751\uFF0C\u7136\u540E\u628A\u51AC\u5929\u8981\u5403\u7684\u7CAE\u98DF\u57CB\u91CC\u9762\u201D\u3002\u5C0F\u732A\u8FB9\u5E72\u6D3B\u8FB9\u56DE\u7B54\u8BF4\u3002</p><p>\u201C\u5E72\u561B\u8981\u57CB\u5728\u5751\u91CC\u554A\uFF01\u201D</p><p>\u201C\u56E0\u4E3A\u57CB\u5728\u5751\u91CC\uFF0C\u6E29\u5EA6\u4F4E\u53EF\u4EE5\u4FDD\u6301\u98DF\u7269\u4E0D\u574F\u554A\uFF01\u201D</p><p>\u5C0F\u767D\u5154\u542C\u4E86\uFF0C\u597D\u50CF\u5F88\u6709\u9053\u7406\uFF0C\u4FBF\u544A\u522B\u5C0F\u732A\uFF0C\u5F80\u5BB6\u91CC\u8D76\u53BB\u3002</p><p>\u56DE\u5230\u5BB6\u91CC\uFF0C\u5C0F\u767D\u5154\u8BA9\u5C0F\u72D0\u72F8\u628A\u81EA\u5DF1\u6700\u559C\u6B22\u5403\u7684\u841D\u535C\u57CB\u5728\u5730\u91CC\uFF0C\u5C0F\u72D0\u72F8\u542C\u4E86\u4E00\u9635\u60CA\u8BB6\uFF0C\u95EE\u5C0F\u767D\u5154\u4E3A\u4EC0\u4E48\u8981\u57CB\u5728\u5730\u91CC\uFF0C\u5C0F\u767D\u5154\u628A\u548C\u5C0F\u732A\u7684\u8C08\u8BDD\u544A\u8BC9\u4E86\u5C0F\u72D0\u72F8\u3002</p><p>\u5C0F\u72D0\u72F8\u542C\u540E\uFF0C\u5FCD\u4E0D\u4F4F\u5927\u7B11\u8D77\u6765\uFF0C\u8FD9\u53EF\u628A\u5C0F\u767D\u5154\u6C14\u7740\u4E86\uFF0C\u8FDE\u5FD9\u95EE\u539F\u56E0\uFF0C\u4F11\u606F\u4E86\u597D\u4E00\u4F1A\uFF0C\u5C0F\u72D0\u72F8\u8BF4\uFF1A\u201C\u5C0F\u732A\u50A8\u5B58\u7684\u662F\u90A3\u79CD\u57CB\u5728\u5730\u91CC\u4E0D\u4F1A\u574F\u7684\u98DF\u7269\uFF0C\u800C\u4E14\u4E5F\u4F1A\u628A\u98DF\u7269\u5305\u88C5\u4FDD\u62A4\u4E00\u4E0B\u554A\uFF0C\u4F46\u662F\u4F60\u559C\u6B22\u5403\u7684\u80E1\u841D\u535C\uFF0C\u4E00\u65E6\u57CB\u5728\u5730\u4E0B\uFF0C\u4F1A\u8150\u70C2\uFF0C\u5C31\u7B97\u4E0D\u8150\u70C2\u4E5F\u4F1A\u53D8\u6210\u80E1\u841D\u535C\u5E72\u201D\u3002\u5C0F\u767D\u5154\u542C\u540E\uFF0C\u4E5F\u89C9\u5F97\u597D\u50CF\u6709\u4E9B\u9053\u7406\uFF0C\u4E8E\u662F\u53C8\u95EE\uFF1A\u201C\u90A3\u4F60\u4E3A\u4EC0\u4E48\u7B11\u6211\uFF1F\u201D\uFF0C\u5C0F\u72D0\u72F8\u770B\u7740\u561F\u7740\u5634\u7684\u5C0F\u767D\u5154\uFF0C\u53C8\u597D\u7B11\u53C8\u53EF\u7231\u3002</p><p>\u201C\u56E0\u4E3A\u4F60\u8FD9\u4E48\u4E45\uFF0C\u8FD8\u662F\u6211\u7684\u50BB\u5B9D\u8D1D\uFF0C\u4E00\u70B9\u90FD\u6CA1\u53D8\u5462\uFF01\u201D\u5C0F\u767D\u5154\u542C\u540E\uFF0C\u611F\u89C9\u597D\u50CF\u88AB\u8868\u626C\u4E86\uFF0C\u4E0D\u89C9\u5F97\u5634\u89D2\u4E0A\u626C\u3002\u4F46\u4ED4\u7EC6\u4E00\u60F3\uFF0C\u597D\u50CF\u53C8\u4E0D\u662F\uFF0C\u4E8E\u662F\u8FDE\u5FD9\u8981\u627E\u5C0F\u72D0\u72F8\u7B97\u8D26\uFF0C\u8F6C\u5934\u4E00\u770B\u5C0F\u72D0\u72F8\u65E9\u5C31\u8DD1\u51FA\u95E8\uFF0C\u5BF9\u7740\u5C0F\u767D\u5154\u505A\u9B3C\u8138\u3002</p><p>\u201C\u4F60\u7B49\u7740\uFF0C\u4F60\u4E2A\u81ED\u5B9D\u8D1D\uFF01\u201D\u5C0F\u767D\u5154\u8FDE\u5FD9\u8FFD\u51FA\u53BB\u3002</p><p>\u5C31\u8FD9\u6837\uFF0C\u5728\u5FD9\u788C\u7684\u79CB\u5929\uFF0C\u4E5F\u4F1A\u6709\u521D\u6625\u7231\u60C5\u7684\u751C\u871C\uFF0C\u50CF\u5C0F\u767D\u5154\u548C\u5C0F\u72D0\u72F8\uFF0C\u5728\u5FD9\u788C\u5F53\u4E2D\u5B09\u620F\u6253\u95F9\uFF0C\u8BA9\u4E00\u4E9B\u8FD8\u5355\u8EAB\u7684\u5C0F\u52A8\u7269\uFF0C\u597D\u751F\u7FA1\u6155\u2026\u2026</p><p>\u5F53\u7136\uFF0C\u68EE\u6797\u91CC\u7684\u52A8\u7269\u4EEC\u90FD\u975E\u5E38\u7684\u5584\u826F\uFF0C\u6240\u4EE5\u554A\u6708\u8001\u4E5F\u4E00\u5B9A\u4E0D\u4F1A\u541D\u556C\u59FB\u7F18\u7684\u7EA2\u7EBF\uFF0C\u76F8\u4FE1\u4E0D\u4E45\u53C8\u4F1A\u6709\u65B0\u7684\u751C\u871C\u98D8\u6563\u5728\u8FD9\u68EE\u6797\u7684\u5927\u5BB6\u5EAD\u4E2D\u3002</p><p>\u6BCF\u4E00\u4E2A\u591C\u5E55\u964D\u4E34\uFF0C\u6211\u4EEC\u4E5F\u4F1A\u5BF9\u5F7C\u6B64\u8BF4\u4E0A\u4E00\u53E5\uFF1A\u665A\u5B89\uFF01\u597D\u68A6\uFF01</p><h2 id="\u7231-\u957F\u7BC7" tabindex="-1"><a class="header-anchor" href="#\u7231-\u957F\u7BC7" aria-hidden="true">#</a> \u7231\uFF08\u957F\u7BC7\uFF09</h2><p>\u6E05\u6668\uFF0C\u6DF1\u5C71\u4E4B\u5904\u7684\u5BFA\u5E99\u5BE5\u5BE5\u708A\u70DF\uFF0C\u53A8\u623F\u91CC\uFF0C\u725B\u6653\u70E7\u7740\u706B\uFF0C\u5C0F\u548C\u5C1A\u6405\u52A8\u7740\u9505\u91CC\u7684\u658B\u996D\uFF0C\u4E00\u4E2A\u6708\u7684\u76F8\u5904\u4E0B\u6765\uFF0C\u8BA9\u4E24\u4EBA\u914D\u5408\u76F8\u5F53\u9ED8\u5951\uFF0C\u8FD9\u4E5F\u8BA9\u5C0F\u548C\u5C1A\u7684\u5DE5\u4F5C\u8F7B\u677E\u4E86\u8BB8\u591A\u3002</p><p>\u201C\u4F60\u559C\u6B22\u8FC7\u522B\u4EBA\u5417\uFF1F\u201D\u725B\u6653\u7A81\u7136\u95EE</p><p>\u201C\u5565\uFF1F\u201D\u5C0F\u548C\u5C1A\u88AB\u8FD9\u7A81\u5982\u5176\u6765\u95EE\u9898\u60CA\u4E86\u4E00\u4E0B\uFF0C\u7136\u540E\u53C8\u8BF4\uFF1A\u201C\u6211\u559C\u6B22\u5E08\u5085\uFF0C\u5E08\u5085\u662F\u6211\u7684\u5BB6\u4EBA\uFF0C\u5982\u679C\u4F60\u5F85\u4E45\u4E86\u6211\u4E5F\u4F1A\u559C\u6B22\u4F60\u7684\u3002\u201D\u725B\u6653\u770B\u7740\u5C0F\u548C\u5C1A\u8BA4\u8BA4\u771F\u771F\u7684\u56DE\u7B54\u7740\u3002\u7A81\u7136\u5657\u55E4\u4E00\u58F0\u7B11\u4E86\u8D77\u6765\u3002</p><p>\u201C\u4F60\u662F\u4E0D\u662F\u50BB\uFF1F\u6211\u8BF4\u7684\u662F\u7537\u5973\u4E4B\u95F4\u7684\u559C\u6B22\uFF1F\u201D\u725B\u6653\u8BF4\u3002</p><p>\u201C\u90A3\u662F\u4EC0\u4E48\u559C\u6B22\uFF1F\u4E0D\u61C2\u4E0D\u61C2\uFF01\u201D\u5C0F\u548C\u5C1A\u8FB9\u76DB\u7740\u7CA5\uFF0C\u8FB9\u6447\u7740\u5934\u3002</p><p>\u996D\u684C\u4E0A\uFF0C\u5E08\u5F92\u4E09\u4EBA\u5403\u7740\u658B\u996D\uFF0C\u5C0F\u548C\u5C1A\u7A81\u7136\u95EE\u5E08\u5085\uFF1A\u201C\u5E08\u5085\uFF0C\u4F60\u559C\u6B22\u8FC7\u5973\u4EBA\u5417\uFF1F\u201D\u3002\u8FD9\u4E00\u95EE\u5B8C\uFF0C\u5E08\u5085\u5DEE\u70B9\u545B\u4E86\u4E00\u53E3\u996D\uFF0C\u8F6C\u5934\u770B\u7740\u725B\u6653\uFF0C\u725B\u6653\u4E00\u8138\u65E0\u8F9C\u7684\u8BF4\u5230\uFF1A\u201C\u5E08\u5085\uFF0C\u8DDF\u6211\u65E0\u5173\uFF0C\u6211\u53EF\u5565\u90FD\u6CA1\u8BF4\u201D\u3002\u8BF4\u5B8C\uFF0C\u4FBF\u57CB\u5934\u5403\u996D\u3002</p><p>\u201C\u4F60\u4EEC\u4FE9\uFF0C\u4E00\u5929\u4E0D\u8BA4\u771F\u5FF5\u4F5B\u5B88\u5FC3\uFF0C\u8BA8\u8BBA\u90A3\u4E9B\u65E0\u5173\u7D27\u8981\u7684\u5E72\u561B\uFF1F\u201D\u5E08\u5085\u767D\u4E86\u4E00\u773C\u725B\u6653\uFF0C\u7EE7\u7EED\u8BF4\u5230\uFF1A\u201C\u7537\u6B22\u5973\u7231\uFF0C\u7686\u4E3A\u4E16\u4FD7\u60C5\u4E8B\uFF0C\u4E16\u4EBA\u628A\u8FD9\u79CD\u611F\u60C5\u6BD4\u4E3A\u7231\u60C5\uFF0C\u53C8\u4EE5\u73AB\u7470\u4E3A\u8C61\u5F81\uFF0C\u65E0\u8BBA\u5403\u658B\u5FF5\u4F5B\u4E5F\u597D\uFF0C\u7537\u6B22\u5973\u7231\u4E5F\u7F62\uFF0C\u90FD\u662F\u4EBA\u751F\u5F53\u4E2D\u7684\u4FEE\u884C\uFF0C\u4EBA\u4EBA\u90FD\u60F3\u4FEE\u5F97\u6B63\u679C\uFF0C\u5176\u4E2D\u56F0\u96BE\u574E\u5777\uFF0C\u5927\u540C\u5C0F\u5F02\u2026\u2026\u201D\u5E08\u5085\u8BF4\u7740\uFF0C\u4EFF\u4F5B\u9677\u5165\u4E86\u56DE\u5FC6\uFF0C\u800C\u540E\u7B11\u7740\u5BF9\u9762\u524D\uFF0C\u8FD9\u4E24\u4E2A\u7741\u7740\u773C\u775B\u542C\u7740\u7684\u5F92\u5F1F\u7EE7\u7EED\u8BF4\uFF1A\u201C\u8BB0\u5F97\u5E08\u508517\u5C81\u90A3\u5E74\uFF0C\u5E76\u672A\u50CF\u73B0\u5728\u5982\u6B64\u5F00\u59CB\u5403\u658B\u5FF5\u4F5B\uFF0C\u8FD8\u5728\u4E61\u91CC\u63D2\u79E7\u79CD\u7530\uFF0C\u4E00\u5BB6\u4E09\u53E3\u6625\u8015\u79CB\u6536\uFF0C\u5176\u4E50\u878D\u878D\uFF0C\u751F\u6D3B\u4E5F\u522B\u6709\u4E00\u756A\u7CBE\u5F69\u3002\u8BB0\u5F97\u90A3\u662F\u4E00\u4E2A\u9EC4\u660F\u508D\u665A\uFF0C\u6211\u548C\u6BCD\u4EB2\u5728\u5BB6\u4E2D\u70E7\u706B\u505A\u996D\uFF0C\u7236\u4EB2\u5E26\u56DE\u4E00\u9A91\u9A6C\u7537\u5B50\u3002\u7537\u5B50\u6EE1\u8EAB\u5C18\u571F\uFF0C\u4E00\u8138\u75B2\u60EB\uFF0C\u4E0D\u8FC7\u8BF4\u4E5F\u5947\u602A\uFF0C\u8FD9\u7537\u5B50\u957F\u7684\u597D\u751F\u79C0\u6C14\u3002\u7ECF\u7236\u4EB2\u4E00\u756A\u89E3\u91CA\uFF0C\u539F\u6765\u662F\u4E00\u4E2A\u8DEF\u8FC7\uFF0C\u51C6\u5907\u53BB\u53C2\u519B\u7684\u9752\u5E74\uFF0C\u8DEF\u4E0A\u56E0\u4E3A\u9A91\u9A6C\u98A0\u7C38\uFF0C\u6454\u4F24\u4E86\u5DE6\u817F\uFF0C\u7236\u4EB2\u89C1\u5176\u5728\u6751\u53E3\u5750\u7740\uFF0C\u4E0A\u524D\u8BE2\u95EE\u540E\uFF0C\u9080\u5176\u5728\u5BB6\u4F11\u517B\u4E24\u65E5\uFF0C\u5948\u4F55\u7537\u5B50\u6709\u4F24\u5728\u8EAB\uFF0C\u76DB\u60C5\u96BE\u5374\uFF0C\u4FBF\u548C\u7236\u4EB2\u6765\u5230\u5BB6\u4E2D\u505A\u5BA2\u4F11\u517B\u201D\u3002</p><p>\u8BF4\u5230\u7740\uFF0C\u5E08\u5085\u4E00\u8138\u56DE\u5FC6\u4E4B\u8272\uFF0C\u5C0F\u548C\u5C1A\u9ED8\u9ED8\u4E3A\u5E08\u5085\u7AEF\u6765\u4E00\u676F\u8336\u6C34\uFF0C\u548C\u725B\u6653\u5E76\u6392\u5750\u5728\u5E08\u5085\u5BF9\u9762\uFF0C\u6EE1\u773C\u671F\u5F85\u5E08\u5085\u7EE7\u7EED\u8BB2\u6545\u4E8B\u3002</p><p>\u5E08\u5085\u770B\u4E86\u8FD9\u4E24\u597D\u5947\u5F92\u5F1F\u4E00\u773C\uFF0C\u7EE7\u7EED\u8BF4\uFF1A\u201C\u7537\u5B50\u6765\u5230\u5BB6\u4E2D\u4F4F\u5728\u504F\u623F\uFF0C\u524D\u4E24\u5929\u56E0\u4E3A\u817F\u811A\u4E0D\u4FBF\uFF0C\u9664\u4E86\u5403\u996D\u4FBF\u4E00\u76F4\u5F85\u5728\u623F\u95F4\u4E0D\u51FA\u95E8\u3002\u7B2C\u4E09\u5929\u508D\u665A\u548C\u7236\u4EB2\u52A1\u519C\u7ED3\u675F\uFF0C\u56DE\u5230\u5BB6\u4E2D\uFF0C\u53D1\u73B0\u90A3\u7537\u5B50\u5DF2\u7ECF\u4E0D\u89C1\uFF0C\u53CD\u800C\u6709\u4E00\u540D\u7A7F\u7740\u7D20\u8863\uFF0C\u957F\u76F8\u6E05\u79C0\u7684\u59D1\u5A18\u5728\u548C\u6BCD\u4EB2\u6709\u8BF4\u6709\u7B11\u3002\u7ECF\u8FC7\u4E00\u756A\u8BE2\u95EE\uFF0C\u90A3\u7537\u5B50\u5C45\u7136\u662F\u5973\u513F\u8EAB\uFF0C\u8FD9\u53EF\u628A\u6211\u548C\u7236\u4EB2\u60CA\u4E86\u4E00\u4E0B\u3002\u90A3\u65F6\u7236\u4EB2\u867D\u6CA1\u8BFB\u8FC7\u4E66\uFF0C\u4F46\u4E5F\u4E0D\u662F\u591A\u5634\u4E4B\u4EBA\uFF0C\u6240\u4EE5\u5F53\u65F6\u5728\u8868\u73B0\u51FA\u4E00\u5239\u60CA\u8BB6\u4E4B\u540E\uFF0C\u4FBF\u6062\u590D\u5982\u521D\uFF0C\u6CA1\u6709\u591A\u95EE\u4EC0\u4E48\uFF0C\u4F46\u6211\u60F3\u540E\u9762\u6BCD\u4EB2\u5E94\u8BE5\u7ED9\u7236\u4EB2\u89E3\u91CA\u4E86\u7F18\u7531\u3002\u5F80\u540E\u51E0\u5929\uFF0C\u8FD9\u5973\u5B50\u5F00\u59CB\u5E2E\u5BB6\u91CC\u5206\u62C5\u8D77\u4E86\u519C\u6D3B\uFF0C\u6D17\u8863\u505A\u996D\uFF0C\u987A\u4FBF\u4E5F\u5F00\u59CB\u7ED9\u6211\u8F85\u5BFC\u529F\u8BFE\uFF0C\u6559\u6211\u8BC6\u5B57\u3002</p><p>\u8FD9\u6837\u7684\u65E5\u5B50\u6301\u7EED\u4E86\u5927\u6982\u5927\u534A\u4E2A\u6708\uFF0C\u8FD9\u671F\u95F4\u6BCD\u4EB2\u548C\u7236\u4EB2\u8FD8\u62C5\u5F53\u8D77\u4E86\u5A92\u4EBA\u4F3C\u7684\uFF0C\u5C3D\u529B\u5728\u64AE\u5408\u6211\u548C\u8FD9\u59D1\u5A18\uFF0C\u7279\u522B\u662F\u6BCD\u4EB2\uFF0C\u8868\u73B0\u7684\u5341\u5206\u559C\u6B22\u3002\u90A3\u65F6\u7684\u6211\uFF0C\u56E0\u4E3A\u60C5\u7AA6\u521D\u5F00\uFF0C\u5916\u52A0\u671D\u5915\u76F8\u5904\uFF0C\u771F\u7684\u5BF9\u5979\u4EA7\u751F\u4E86\u4E00\u79CD\u83AB\u540D\u7684\u60C5\u612B\u201D\u3002\u5E08\u5085\u8BF4\u5230\u8FD9\uFF0C\u505C\u4E86\u4E0B\u6765\uFF0C\u7AEF\u8D77\u8336\u6C34\u559D\u4E86\u4E00\u53E3\u3002</p><p>\u725B\u6653\u548C\u5C0F\u548C\u5C1A\u53EF\u6025\u574F\u4E86\uFF0C\u8FDE\u5FD9\u95EE\u9053\uFF1A\u201C\u5E08\u5085\uFF0C\u90A3\u662F\u4EC0\u4E48\u611F\u89C9\u554A\uFF1F\u201D</p><p>\u5E08\u5085\u653E\u4E0B\u8336\u676F\uFF0C\u62AC\u5934\u671B\u7740\u623F\u6881\uFF0C\u6C89\u601D\u4E86\u4E00\u4F1A\u8BF4\uFF1A\u201C\u671D\u5915\u6240\u60F3\uFF0C\u591C\u4E0D\u80FD\u5BD0\uFF0C\u4E00\u65E5\u4E0D\u89C1\uFF0C\u5982\u9694\u4E09\u79CB\u3002\u73B0\u5728\u60F3\u60F3\uFF0C\u53EF\u80FD\u90A3\u5C31\u662F\u5C18\u4E16\u5411\u5F80\u7684\u559C\u6B22\u548C\u7231\u60C5\u3002\u4F46\u597D\u666F\u4E0D\u957F\uFF0C\u67D0\u5929\u6E05\u6668\u4E00\u65E9\uFF0C\u5979\u4FBF\u6084\u6084\u9A91\u9A6C\u79BB\u5F00\uFF0C\u79BB\u5F00\u65F6\u7559\u4E0B\u4E00\u5C01\u4E66\u4FE1\uFF0C\u548C\u4E00\u5757\u7389\u624B\u956F\u201D\u3002\u5E08\u5085\u8BF4\u7740\uFF0C\u4ECE\u6000\u91CC\u62FF\u51FA\u4E00\u5757\u7EA2\u5E03\uFF0C\u6253\u5F00\u4EE5\u540E\u91CC\u9762\u662F\u4E00\u5757\u54C1\u76F8\u4E0D\u9519\u7684\u7389\u624B\u956F\uFF0C\u770B\u7740\u8FD9\u5757\u624B\u956F\uFF0C\u5E08\u5085\u5F00\u59CB\u6C89\u9ED8\u4E0D\u8BED\u3002</p><p>\u5F92\u5F1F\u4EEC\u53EF\u4E0D\u7136\uFF0C\u5341\u5206\u7740\u6025\uFF0C\u8BE2\u95EE\u5E08\u5085\uFF1A\u201C\u5E08\u5085\u5E08\u5085\uFF0C\u4FE1\u4E0A\u5199\u7684\u5565\uFF1F\u540E\u9762\u53C8\u600E\u4E48\u4E86\uFF1F\u201D</p><p>\u5E08\u5085\u53F9\u606F\u4E86\u4E00\u58F0\uFF0C\u8BF4\uFF1A\u201C\u90A3\u65F6\u5B57\u8FD8\u8BA4\u4E0D\u4E86\u51E0\u4E2A\uFF0C\u53EA\u8BB0\u5F97\u6700\u540E\u51E0\u884C\uFF0C\u548C\u5979\u7684\u540D\u5B57\u201D\u3002</p><p>\u201C\u662F\u4EC0\u4E48\uFF1F\u201D\u725B\u6653\u95EE</p><p>\u201C\u66FF\u7236\u4ECE\u519B\uFF0C\u6709\u7F18\u518D\u4F1A\uFF01\u6728\u5170\u7559\u2026\u2026\u201D</p><h2 id="\u5154\u5B50\u548C\u72D0\u72F8" tabindex="-1"><a class="header-anchor" href="#\u5154\u5B50\u548C\u72D0\u72F8" aria-hidden="true">#</a> \u5154\u5B50\u548C\u72D0\u72F8</h2><p>\u4ECA\u5929\u7684\u5C0F\u5154\u5B50\u5FC3\u60C5\u5341\u5206\u7684\u5F00\u5FC3\uFF0C\u56E0\u4E3A\u5979\u83B7\u5F97\u4E86\u68EE\u6797\u91CC\u7814\u7A76\u6BD4\u8D5B\u7B2C\u4E00\u540D\u5728\u56DE\u5BB6\u7684\u8DEF\u4E0A\uFF0C\u4E5F\u628A\u60C5\u7EEA\u8868\u73B0\u5728\u81EA\u5DF1\u7684\u52A8\u4F5C\u5F53\u4E2D\uFF0C\u8E66\u8E66\u8DF3\u8DF3\uFF0C\u5341\u5206\u597D\u770B\u3002</p><p>\u56DE\u5BB6\u7684\u8DEF\u4E0A\uFF0C\u8DEF\u8FC7\u5C0F\u72D0\u72F8\u5BB6\uFF0C\u5C0F\u767D\u5154\u7279\u5730\u8DD1\u53BB\u60F3\u628A\u8FD9\u4E2A\u597D\u6D88\u606F\u5206\u4EAB\u7ED9\u5C0F\u72D0\u72F8\u3002</p><p>\u6572\u4E86\u534A\u5929\u7684\u95E8\uFF0C\u5C0F\u767D\u5154\u53D1\u73B0\u5C0F\u72D0\u72F8\u4E0D\u5728\u5BB6\uFF0C\u8DEF\u8FC7\u7684\u5927\u8C61\u4F2F\u4F2F\u770B\u89C1\u5C0F\u767D\u5154\u5728\u6572\u95E8\uFF0C\u544A\u8BC9\u5C0F\u767D\u5154\u8BF4\uFF0C\u5C0F\u72D0\u72F8\u53BB\u68EE\u6797\u91CC\u6458\u6843\u5B50\u53BB\u4E86\uFF0C\u665A\u4E0A\u624D\u4F1A\u56DE\u6765\uFF0C\u5C0F\u767D\u5154\u6709\u4E9B\u5931\u671B\uFF0C\u8C22\u8FC7\u5927\u8C61\u4F2F\u4F2F\u540E\u4FBF\u56DE\u5BB6\u4E86\u3002</p><p>\u5C0F\u767D\u5154\u53EF\u559C\u6B22\u5C0F\u72D0\u72F8\u4E86\uFF0C\u800C\u4E14\u559C\u6B22\u4E86\u597D\u4E45\uFF0C\u53EF\u662F\u5C0F\u767D\u5154\u662F\u4E00\u53EA\u5BB3\u7F9E\u7684\u5154\u5B50\uFF0C\u6240\u4EE5\u4E00\u76F4\u4E0D\u6562\u8868\u8FBE\u81EA\u5DF1\u7684\u5FC3\u58F0\u3002\u53EF\u4ECA\u5929\uFF0C\u662F\u81EA\u5DF1\u5F97\u5956\u7684\u597D\u65E5\u5B50\uFF0C\u5C0F\u767D\u5154\u89C9\u5F97\u5E94\u8BE5\u544A\u8BC9\u5C0F\u72D0\u72F8\uFF0C\u4E5F\u8BA9\u81EA\u5DF1\u559C\u6B22\u7684\u4EBA\u9AD8\u5174\u9AD8\u5174\u3002</p><p>\u65F6\u95F4\u6765\u5230\u4E86\u665A\u996D\u540E\uFF0C\u7830\u7830\u7830\uFF01\u4E00\u9635\u6572\u95E8\u58F0\u4F20\u6765\uFF0C\u5C0F\u767D\u5154\u8D76\u7D27\u53BB\u5F00\u95E8\uFF0C\u4E00\u5F00\u95E8\u53D1\u73B0\u5C45\u7136\u662F\u5C0F\u72D0\u72F8\uFF0C\u53EF\u628A\u5C0F\u767D\u5154\u60CA\u559C\u574F\u4E86\uFF0C\u4EE5\u81F3\u4E8E\u4E00\u65F6\u95F4\u8BF4\u4E0D\u51FA\u8BDD\u6765\u3002</p><p>\u201C\u542C\u5927\u8C61\u4F2F\u4F2F\u8BF4\uFF0C\u4F60\u4E0B\u5348\u627E\u6211\u4E86\uFF1F\u68EE\u6797\u91CC\u7684\u6843\u5B50\u719F\u4E86\uFF0C\u6211\u548C\u5C0F\u4F19\u4F34\u4EEC\u53BB\u68EE\u6797\u91CC\u6458\u6843\u5B50\u53BB\u4E86\uFF0C\u6211\u5C1D\u4E86\u4E0B\uFF0C\u53EF\u597D\u5403\u4E86\uFF0C\u7ED9\u4F60\u4E5F\u62FF\u4E86\u4E00\u70B9\u3002\u201D\u5C0F\u72D0\u72F8\u770B\u7740\u5C0F\u767D\u5154\u4E0D\u8BF4\u8BDD\uFF0C\u4E8E\u662F\u63D0\u524D\u5F00\u53E3\u8BF4\uFF0C\u5C0F\u767D\u5154\u4ED4\u7EC6\u4E00\u770B\uFF0C\u624D\u53D1\u89C9\u5C0F\u72D0\u72F8\u62B1\u4E86\u4E00\u5806\u6843\u5B50\u5462\uFF0C\u4E8E\u662F\u8FDE\u5FD9\u62DB\u547C\u5C0F\u72D0\u72F8\u8FDB\u5C4B\u91CC\u3002</p><p>\u5C0F\u72D0\u72F8\u6765\u5230\u5C4B\u91CC\u505A\u597D\u540E\uFF0C\u5C0F\u767D\u5154\u7ED9\u5C0F\u72D0\u72F8\u8BF4\u4E86\u597D\u591A\u597D\u591A\u8BDD\uFF0C\u6709\u81EA\u5DF1\u6BD4\u8D5B\u7684\u7CBE\u5F69\u7247\u6BB5\uFF0C\u4E5F\u6709\u81EA\u5DF1\u5F97\u5956\u7684\u60CA\u559C\u5FC3\u60C5\u2026\u2026</p><p>\u5C31\u8FD9\u6837\u4E0D\u77E5\u4E0D\u89C9\uFF0C\u5DF2\u7ECF\u5230\u4E86\u6DF1\u591C\uFF0C\u86D0\u86D0\u7684\u58F0\u97F3\u6C89\u6D78\u4E86\u6574\u4E2A\u68EE\u6797\uFF0C\u4E5F\u5305\u62EC\u5C0F\u5154\u5B50\u7684\u5BB6\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u5C0F\u767D\u5154\u624D\u53D1\u73B0\u81EA\u5DF1\u7ED9\u5C0F\u72D0\u72F8\u5C45\u7136\u8BB2\u4E86\u8FD9\u4E48\u4E45\uFF0C\u7ADF\u6CA1\u6709\u53D1\u73B0\u65F6\u95F4\u8FC7\u5F97\u8FD9\u4E48\u5FEB\uFF0C\u800C\u4E14\u5C0F\u72D0\u72F8\u4E5F\u8BA4\u8BA4\u771F\u771F\u7684\u5145\u5F53\u7740\u4E00\u4E2A\u8046\u542C\u8005\u3002</p><p>\u5C0F\u767D\u5154\u7A81\u7136\u89C9\u5F97\u4E0D\u597D\u610F\u601D\u4E86\uFF0C\u56E0\u4E3A\u4E00\u76F4\u662F\u81EA\u5DF1\u5728\u8BB2\uFF0C\u4E8E\u662F\u8138\u77AC\u95F4\u5C31\u7EA2\u4E86\u8D77\u6765\u3002</p><p>\u5C0F\u72D0\u72F8\u770B\u5230\u597D\u5947\u7684\u95EE\uFF1A\u201C\u600E\u4E48\u4E86\u5C0F\u767D\u5154\uFF1F\u600E\u4E48\u8138\u7EA2\u4E86\uFF1F\u201D</p><p>\u201C\u6211\u90FD\u4E0D\u77E5\u9053\u8BB2\u4E86\u8FD9\u4E48\u4E45\u4E86\uFF0C\u5BF9\u4E0D\u8D77\u5C0F\u72D0\u72F8\uFF0C\u90FD\u6CA1\u6709\u5728\u610F\u4F60\u7684\u611F\u53D7\u3002\u201D\u5C0F\u767D\u5154\u7F9E\u7EA2\u7740\u8138\u8BF4\u7740\u3002</p><p>\u5C0F\u72D0\u72F8\u8FDE\u5FD9\u9053\uFF1A\u201C\u600E\u4E48\u4F1A\u5462\uFF01\u4F60\u8BB2\u7684\u592A\u6709\u610F\u601D\u4E86\uFF0C\u771F\u53EF\u60DC\u6CA1\u53BB\u73B0\u573A\u770B\uFF0C\u4E0D\u7136\u66F4\u7CBE\u5F69\uFF01\u800C\u4E14\u2026\u2026\u800C\u4E14\u2026\u2026\u201D\u5C0F\u72D0\u72F8\u7A81\u7136\u8BF4\u8BDD\u72B9\u8C6B\u4E86\u8D77\u6765\u3002</p><p>\u201C\u800C\u4E14\u4EC0\u4E48\uFF1F\u201D\u5C0F\u767D\u5154\u76EF\u7740\u5C0F\u72D0\u72F8\u597D\u5947\u7684\u95EE\u3002</p><p>\u201C\u800C\u4E14\u542C\u81EA\u5DF1\u559C\u6B22\u7684\u4EBA\u8BB2\uFF0C\u4F1A\u66F4\u52A0\u6709\u610F\u601D\uFF01\u201D\u5C0F\u72D0\u72F8\u6EE1\u773C\u6DF1\u60C5\u7684\u76EF\u7740\u5C0F\u767D\u5154\u56DE\u7B54\u8BF4\u3002</p><p>\u201C\u554A\uFF01\u201D\u5C0F\u767D\u5154\u60CA\u8BB6\u7684\u8BF4\u4E86\u4E00\u53E5\uFF0C\u201C\u4F60\u8BF4\u4EC0\u4E48\uFF1F\u201D</p><p>\u201C\u6211\u559C\u6B22\u4F60\u5440\uFF0C\u5C0F\u767D\u5154\uFF0C\u800C\u4E14\u559C\u6B22\u597D\u4E45\u4E86\uFF01\u563B\u563B\uFF01\u201D\u5C0F\u72D0\u72F8\u4E0D\u597D\u610F\u601D\u7684\u770B\u7740\u5C0F\u767D\u5154\u2026\u2026</p><h2 id="\u62B1\u62B1" tabindex="-1"><a class="header-anchor" href="#\u62B1\u62B1" aria-hidden="true">#</a> \u62B1\u62B1</h2><p>\u5C0F\u72D0\u72F8\u4ECA\u5929\u548C\u5C0F\u5154\u5B50\u5435\u67B6\u4E86\uFF0C\u539F\u56E0\u662F\u56E0\u4E3A\uFF0C\u660E\u660E\u4ECA\u5929\u5C31\u662F\u4E00\u5E74\u4E00\u6B21\u7684\u60C5\u4EBA\u8282\uFF0C\u53EF\u662F\u5C0F\u72D0\u72F8\u53EA\u7ED9\u5C0F\u767D\u5154\u53D1\u4E86\u4E2A\u7EA2\u5305\uFF0C\u8FD9\u8BA9\u5C0F\u5154\u5B50\u89C9\u5F97\u5C0F\u72D0\u72F8\u4E00\u70B9\u90FD\u4E0D\u4E0A\u5FC3\u3002</p><p>\u521A\u5F00\u59CB\uFF0C\u5176\u5B9E\u90FD\u6CA1\u6709\u5435\u67B6\uFF0C\u53EA\u662F\u5C0F\u5154\u5B50\u7ED9\u5C0F\u72D0\u72F8\u62B1\u6028\u4E86\u4E00\u4E0B\u3002\u4F46\u5C0F\u72D0\u72F8\u4E5F\u89C9\u5F97\u59D4\u5C48\u554A\uFF0C\u56E0\u4E3A\u81EA\u5DF1\u6709\u8BB0\u5F97\u8FD9\u662F\u4E2A\u7279\u522B\u7684\u65E5\u5B50\uFF0C\u4E5F\u53D1\u4E86\u60C5\u4EBA\u8282\u7EA2\u5305\u554A\u3002</p><p>\u4E8E\u662F\uFF0C\u5C31\u548C\u5C0F\u5154\u5B50\u8BB2\u8D77\u4E86\u9053\u7406\u3002\u8C08\u604B\u7231\u7684\u5C0F\u52A8\u7269\u4EEC\u90FD\u77E5\u9053\uFF0C\u5973\u751F\u662F\u7528\u6765\u54C4\u5F97\uFF0C\u600E\u4E48\u53EF\u4EE5\u7528\u6765\u8BB2\u9053\u7406\u5462?</p><p>\u4E8E\u662F\u8BF4\u7740\u8BF4\u7740\uFF0C\u5C0F\u72D0\u72F8\u5C31\u548C\u5C0F\u5154\u5B50\u5435\u4E86\u8D77\u6765\uFF0C\u5435\u4E86\u4E00\u4F1A\uFF0C\u5C0F\u72D0\u72F8\u5C31\u51FA\u4E86\u5BB6\u95E8\uFF0C\u72EC\u81EA\u51B7\u9759\u53BB\u4E86\u3002</p><p>\u5C31\u8FD9\u6837\uFF0C\u8FC7\u4E86\u4E00\u4E2A\u5C0F\u65F6\uFF0C\u5C0F\u72D0\u72F8\u7684\u6C14\u4E5F\u6D88\u4E86\uFF0C\u4E5F\u60F3\u4E86\u60F3\u81EA\u5DF1\u4E0D\u5E94\u8BE5\u548C\u5C0F\u5154\u5B50\u5435\u67B6\uFF0C\u5C31\u60F3\u7740\u8981\u53BB\u627E\u5C0F\u5154\u5B50\u9053\u6B49\u3002</p><p>\u4F46\u5C0F\u72D0\u72F8\u4E00\u60F3\uFF0C\u8FD9\u6837\u597D\u50CF\u5F88\u6CA1\u7528\u9762\u5B50\uFF0C\u4E8E\u662F\u53C8\u5FCD\u4F4F\u4E86\u3002</p><p>\u53C8\u8FC7\u4E86\u4E00\u4E2A\u5C0F\u65F6\uFF0C\u5C0F\u72D0\u72F8\u5B9E\u5728\u5FCD\u4E0D\u4F4F\u4E86\uFF0C\u4E8E\u662F\u6765\u5230\u5BB6\u95E8\u53E3\uFF0C\u558A\u7740\u5C0F\u5154\u5B50\uFF1A\u201C\u5C0F\u5154\u5B50\uFF0C\u4F60\u51FA\u6765\uFF0C\u6211\u6709\u8BDD\u7ED9\u4F60\u8BF4\u3002\u201D</p><p>\u4E0D\u4E00\u4F1A\uFF0C\u5C0F\u5154\u5B50\u6253\u5F00\u623F\u95E8\uFF0C\u770B\u5230\u662F\u5C0F\u72D0\u72F8\uFF0C\u4FBF\u95EE\uFF1A\u201C\u51FA\u6765\u5E72\u4EC0\u4E48\uFF1F\u5BB6\u91CC\u8BF4\u3002\u201D</p><p>\u201D\u4E0D\u884C\uFF0C\u8981\u51FA\u6765\u8BF4\uFF01\u201C\u5C0F\u72D0\u72F8\u6267\u62D7\u7684\u8BF4\u3002</p><p>\u770B\u7740\u6267\u7740\u7684\u5C0F\u72D0\u72F8\uFF0C\u5C0F\u767D\u5154\u8FD8\u662F\u5FCD\u4E0D\u4F4F\u51FA\u4E86\u95E8\uFF0C\u6765\u5230\u5C0F\u72D0\u72F8\u9762\u524D\u3002</p><p>\u5C0F\u72D0\u72F8\u770B\u7740\u5C0F\u5154\u5B50\u8BF4\uFF1A\u201D\u56E0\u4E3A\uFF0C\u6211\u4EEC\u5728\u5BB6\u91CC\u95F9\u63B0\u4E86\uFF0C\u6240\u6709\u4E0D\u80FD\u5728\u5BB6\u91CC\u8BF4\uFF0C\u8981\u51FA\u6765\u8BF4\u3002\u201C</p><p>\u4E8E\u662F\u5C0F\u72D0\u72F8\u8BA4\u8BA4\u771F\u771F\u7684\u7ED9\u5C0F\u5154\u5B50\u9053\u4E86\u6B49\uFF0C\u5C0F\u5154\u5B50\u770B\u7740\u81EA\u8D23\u7684\u5C0F\u72D0\u72F8\uFF0C\u4E5F\u8BF4\u4E86\u81EA\u5DF1\u4E0D\u8BE5\u4EFB\u6027\u3002</p><p>\u901A\u8FC7\u4ECA\u5929\u7684\u4E89\u5435\uFF0C\u5C0F\u72D0\u72F8\u548C\u5C0F\u5154\u5B50\u660E\u767D\u4E86\uFF0C\u5BB6\u4E0D\u662F\u7528\u6765\u5435\u67B6\u7684\u5730\u65B9\uFF0C\u800C\u662F\u5206\u4EAB\u548C\u751F\u6D3B\u7684\u5C0F\u7A9D\u3002</p><p>\u4ED6\u4EEC\u7EA6\u5B9A\uFF0C\u4EE5\u540E\u9047\u5230\u95EE\u9898\u8981\u5C3D\u91CF\u597D\u597D\u5546\u91CF\uFF0C\u51CF\u5C11\u4E89\u5435\u3002</p><p>\u5C0F\u72D0\u72F8\u548C\u5C0F\u5154\u5B50\u4E92\u76F8\u9053\u5B8C\u6B49\u540E\uFF0C\u5C0F\u72D0\u72F8\u7ED9\u4E86\u5C0F\u5154\u5B50\u4E00\u4E2A\u5927\u5927\u7684\u5145\u6EE1\u7231\u7684\u62B1\u62B1\u3002</p><p>\u56E0\u4E3A\u5C0F\u72D0\u72F8\u77E5\u9053\uFF0C\u7231\u4EBA\u4E4B\u95F4\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\u662F\u4E0D\u80FD\u7528\u4E00\u4E2A\u62B1\u62B1\u89E3\u51B3\u7684\u3002</p><p>\u5982\u679C\u6709\uFF0C\u90A3\u5C31\u4E24\u4E2A......</p><!--]-->`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/\u6545\u4E8B/text.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var text_html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$f]]);
var text_html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text_html$7
});
const _sfc_main$s = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/\u6559\u7A0B/text.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var text_html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$e]]);
var text_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text_html$5
});
const _sfc_main$r = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/\u968F\u7B14/text.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var text_html$3 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$d]]);
var text_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text_html$3
});
const _sfc_main$q = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u9762\u8BD5\u96C6\u9526" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u96C6\u9526" aria-hidden="true">#</a> \u9762\u8BD5\u96C6\u9526</h1><div class="custom-container tip"><p class="custom-container-title">\u9762\u8BD5</p><p>\u5E38\u89C1\u9762\u8BD5\u96C6\u9526</p></div><h2 id="\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD" aria-hidden="true">#</a> \u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD</h2><p><strong>\u63D0\u793A</strong>\uFF1A\u4E00\u822C\u4EBA\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u8FC7\u4E8E\u5E73\u5E38\uFF0C\u59D3\u540D\u3001\u5E74\u9F84\u3001\u7231\u597D\u3001\u5DE5\u4F5C\u7ECF\u9A8C\uFF0C\u8FD9\u4E9B\u7B80\u5386\u4E0A\u90FD\u6709\u3002\u4F01\u4E1A\uFF08\u9762\u8BD5\u5B98\uFF09\u6700\u5E0C\u671B\u77E5\u9053\u7684\u662F\u6C42\u804C\u8005\u80FD\u5426\u80DC\u4EFB\u5DE5\u4F5C\uFF0C\u5305\u62EC\uFF1A\u6700\u5F3A\u7684\u6280\u80FD\u3001\u6700\u6DF1\u5165\u7814\u7A76\u7684\u9886\u57DF\u3001\u4E2A\u6027\u4E2D\u6700\u79EF\u6781\u7684\u90E8\u5206\u3001\u505A\u8FC7\u6700\u6210\u529F\u7684\u4E8B\uFF0C\u4E3B\u8981\u6210\u5C31\u7B49\uFF0C\u8981\u7A81\u51FA\u79EF\u6781\u7684\u4E2A\u6027\u548C\u505A\u4E8B\u7684\u80FD\u529B\uFF0C\u8BF4\u7684\u5408\u60C5\u5408\u7406\u4F01\u4E1A\uFF08\u9762\u8BD5\u5B98\uFF09\u624D\u4F1A\u76F8\u4FE1\u3002</p><h2 id="\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F</h2><p><strong>\u56DE\u7B54\u63D0\u793A</strong>\uFF1A \u6C89\u7740\u51B7\u9759\u3001\u6761\u7406\u6E05\u695A\u3001\u7ACB\u573A\u575A\u5B9A\u3001\u4E50\u4E8E\u52A9\u4EBA\u7B49\uFF0C\u52A0\u4E0A\u4F8B\u5B50\u5982\uFF1A\u6211\u5728XX\u7ECF\u8FC7\u4E00\u5230\u4E24\u5E74\u7684\u57F9\u8BAD\u53CA\u9879\u76EE\u5B9E\u6218\uFF0C\u52A0\u4E0A\u5B9E\u4E60\u5DE5\u4F5C\uFF0C\u6211\u60F3\u6211\u9002\u5408\u8FD9\u4EFD\u5DE5\u4F5C\u3002</p><h2 id="\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9" aria-hidden="true">#</a> \u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9\uFF1F</h2><p><strong>\u63D0\u793A</strong>\uFF1A \u8FD9\u4E2A\u95EE\u9898\u4F01\u4E1A\u95EE\u7684\u6982\u7387\u5F88\u5927\uFF0C\u901A\u5E38\u4E0D\u5E0C\u671B\u542C\u5230\u76F4\u63A5\u56DE\u7B54\u7684\u7F3A\u70B9\u662F\u4EC0\u4E48\u7B49\uFF0C\u5982\u679C\u6C42\u804C\u8005\u8BF4\u81EA\u5DF1\u5C0F\u5FC3\u773C\u3001\u975E\u5E38\u61D2\u3001\u5DE5\u4F5C\u6548\u7387\u4F4E\uFF0C\u4F01\u4E1A\u80AF\u5B9A\u4E0D\u4F1A\u5F55\u7528\u4F60\u3002\u8981\u4ECE\u81EA\u5DF1\u7684\u4F18\u70B9\u8BF4\u8D77\uFF0C\u4E2D\u95F4\u52A0\u4E00\u4E9B\u5C0F\u7F3A\u70B9\uFF0C\u6700\u540E\u518D\u628A\u95EE\u7B54\u8F6C\u56DE\u5230\u4F18\u70B9\u4E0A\uFF0C\u7A81\u51FA\u4F18\u70B9\u7684\u90E8\u5206\u3002</p><h2 id="\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5" aria-hidden="true">#</a> \u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5\uFF1F</h2><p><strong>\u63D0\u793A</strong>\uFF1A\u5B9E\u9645\u4E0A\u597D\u591A\u516C\u53F8\u95EE\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5E76\u4E0D\u8BC1\u660E\u4E00\u5B9A\u8981\u52A0\u73ED\uFF0C\u53EA\u662F\u60F3\u6D4B\u8BD5\u4F60\u662F\u5426\u613F\u610F\u4E3A\u516C\u53F8\u5949\u732E\u3002</p><p><strong>\u6837\u672C</strong>\uFF1A\u5982\u679C\u662F\u5DE5\u4F5C\u9700\u8981\u6211\u4F1A\u4E49\u4E0D\u5BB9\u8F9E\u52A0\u73ED\uFF0C\u4F46\u540C\u65F6\uFF0C\u6211\u4E5F\u4F1A\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u52A0\u73ED\u3002</p><h2 id="\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42" aria-hidden="true">#</a> \u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42\uFF1F</h2><p><strong>\u63D0\u793A</strong>\uFF1A \u5982\u679C\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42\u592A\u4F4E\uFF0C\u90A3\u663E\u7136\u8D2C\u4F4E\u81EA\u5DF1\u7684\u80FD\u529B\uFF1B\u5982\u679C\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42\u592A\u9AD8\uFF0C\u90A3\u53C8\u4F1A\u663E\u5F97\u4F60\u5206\u91CF\u8FC7\u91CD\uFF0C\u516C\u53F8\u53D7\u7528\u4E0D\u8D77\u3002\u4E00\u4E9B\u96C7\u4E3B\u901A\u5E38\u90FD\u4E8B\u5148\u5BF9\u6C42\u8058\u7684\u804C\u4F4D\u5B9A\u4E0B\u5F00\u652F\u9884\u7B97\uFF0C\u56E0\u800C\u4ED6\u4EEC\u7B2C\u4E00\u6B21\u63D0\u51FA\u7684\u4EF7\u94B1\u5F80\u5F80\u662F\u4ED6\u4EEC\u6240\u80FD\u7ED9\u4E88\u7684\u6700\u9AD8\u4EF7\u94B1\uFF0C\u4ED6\u4EEC\u95EE\u4F60\u53EA\u4E0D\u8FC7\u60F3\u8BC1\u5B9E\u4E00\u4E0B\u8FD9\u7B14\u94B1\u662F\u5426\u8DB3\u4EE5\u5F15\u8D77\u4F60\u5BF9\u8BE5\u5DE5\u4F5C\u7684\u5174\u8DA3\u3002</p><p><strong>\u56DE\u7B54</strong>\uFF1A</p><ol><li><p>\u6211\u5BF9\u5DE5\u8D44\u6CA1\u6709\u786C\u6027\u8981\u6C42\uFF0C\u6211\u76F8\u4FE1\u8D35\u516C\u53F8\u4F1A\u53CB\u5584\u5408\u7406\u3002\u6211\u6CE8\u91CD\u7684\u662F\u627E\u5230\u5DE5\u4F5C\u673A\u4F1A\uFF0C\u6240\u4EE5\u53EA\u8981\u6761\u4EF6\u516C\u5E73\uFF0C\u6211\u5219\u4E0D\u4F1A\u8BA1\u8F83\u592A\u591A\u3002</p></li><li><p>\u6211\u53D7\u8FC7\u7CFB\u7EDF\u7684\u8F6F\u4EF6\u7F16\u7A0B\u7684\u8BAD\u7EC3\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u5927\u91CF\u7684\u57F9\u8BAD\uFF0C\u800C\u4E14\u6211\u672C\u4EBA\u4E5F\u5BF9\u7F16\u7A0B\u7279\u522B\u611F\u5174\u8DA3\u3002\u56E0\u6B64\uFF0C\u6211\u5E0C\u671B\u516C\u53F8\u80FD\u6839\u636E\u6211\u7684\u60C5\u51B5\u548C\u5E02\u573A\u6807\u51C6\u7684\u6C34\u5E73\uFF0C\u7ED9\u6211\u5408\u7406\u7684\u85AA\u6C34\u3002</p></li><li><p>\u5982\u679C\u4F60\u5FC5\u987B\u81EA\u5DF1\u8BF4\u51FA\u5177\u4F53\u6570\u76EE\uFF0C\u8BF7\u4E0D\u8981\u8BF4\u4E00\u4E2A\u5BBD\u6CDB\u7684\u8303\u56F4\uFF0C\u90A3\u6837\u4F60\u5C06\u53EA\u80FD\u5F97\u5230\u6700\u4F4E\u9650\u5EA6\u7684\u6570\u5B57\u3002\u6700\u597D\u7ED9\u51FA\u4E00\u4E2A\u5177\u4F53\u7684\u6570\u5B57\uFF0C\u8FD9\u6837\u8868\u660E\u4F60\u5DF2\u7ECF\u5BF9\u5F53\u4ECA\u7684\u4EBA\u624D\u5E02\u573A\u505A\u4E86\u8C03\u67E5\uFF0C\u77E5\u9053\u50CF\u81EA\u5DF1\u8FD9\u6837\u5B66\u5386\u7684\u96C7\u5458\u6709\u4EC0\u4E48\u6837\u7684\u4EF7\u503C\u3002</p></li></ol><h2 id="\u5728\u4E94\u5E74\u5185-\u4F60\u7684\u804C\u4E1A\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u5728\u4E94\u5E74\u5185-\u4F60\u7684\u804C\u4E1A\u89C4\u5212" aria-hidden="true">#</a> \u5728\u4E94\u5E74\u5185\uFF0C\u4F60\u7684\u804C\u4E1A\u89C4\u5212\uFF1F</h2><p><strong>\u63D0\u793A</strong>\uFF1A \u8FD9\u662F\u6BCF\u4E00\u4E2A\u5E94\u8058\u8005\u90FD\u4E0D\u5E0C\u671B\u88AB\u95EE\u5230\u7684\u95EE\u9898\uFF0C\u4F46\u662F\uFF08\u5927\u516C\u53F8\uFF09\u51E0\u4E4E\u6BCF\u4E2A\u4EBA\u90FD\u4F1A\u88AB\u95EE\u5230\uFF0C\u6BD4\u8F83\u591A\u7684\u7B54\u6848\u662F\u201C\u7BA1\u7406\u8005\u201D\u3002\u5F53\u7136\uFF0C\u8BF4\u51FA\u5176\u4ED6\u4E00\u4E9B\u4F60\u611F\u5174\u8DA3\u7684\u804C\u4F4D\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u8981\u77E5\u9053\uFF0C\u8003\u5B98\u603B\u662F\u559C\u6B22\u6709\u8FDB\u53D6\u5FC3\u7684\u5E94\u8058\u8005\uFF0C\u6B64\u65F6\u5982\u679C\u8BF4\u201C\u4E0D\u77E5\u9053\u201D\uFF0C\u6216\u8BB8\u5C31\u4F1A\u4F7F\u4F60\u4E27\u5931\u4E00\u4E2A\u597D\u673A\u4F1A\u3002\u6700\u666E\u901A\u7684\u56DE\u7B54\u5E94\u8BE5\u662F\u201C\u6211\u51C6\u5907\u5728\u6280\u672F\u9886\u57DF\u6709\u6240\u4F5C\u4E3A\u201D\u6216\u201C\u6211\u5E0C\u671B\u80FD\u6309\u7167\u516C\u53F8\u7684\u7BA1\u7406\u601D\u8DEF\u53D1\u5C55\u201D\u3002</p><h2 id="\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417" tabindex="-1"><a class="header-anchor" href="#\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417" aria-hidden="true">#</a> \u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417?</h2><p><strong>\u63D0\u793A</strong>\uFF1A \u4F01\u4E1A\u7684\u8FD9\u4E2A\u95EE\u9898\u770B\u4E0A\u53BB\u53EF\u6709\u53EF\u65E0\uFF0C\u5176\u5B9E\u5F88\u5173\u952E\uFF0C\u4F01\u4E1A\u4E0D\u559C\u6B22\u8BF4\u201C\u6CA1\u95EE\u9898\u201D\u7684\u4EBA\uFF0C\u56E0\u4E3A\u5176\u5F88\u6CE8\u91CD\u5458\u5DE5\u7684\u4E2A\u6027\u548C\u521B\u65B0\u80FD\u529B\u3002\u4F01\u4E1A\u4E0D\u559C\u6B22\u6C42\u804C\u8005\u95EE\u4E2A\u4EBA\u798F\u5229\u4E4B\u7C7B\u7684\u95EE\u9898\uFF0C\u5982\u679C\u6709\u4EBA\u8FD9\u6837\u95EE\uFF1A\u8D35\u516C\u53F8\u5BF9\u65B0\u5165\u516C\u53F8\u7684\u5458\u5DE5\u6709\u6CA1\u6709\u4EC0\u4E48\u57F9\u8BAD\u9879\u76EE\uFF0C\u6211\u53EF\u4EE5\u53C2\u52A0\u5417\uFF1F\u6216\u8005\u8BF4\u8D35\u516C\u53F8\u7684\u664B\u5347\u673A\u5236\u662F\u4EC0\u4E48\u6837\u7684\uFF1F\u4F01\u4E1A\u5C06\u5F88\u6B22\u8FCE\uFF0C\u56E0\u4E3A\u4F53\u73B0\u51FA\u4F60\u5BF9\u5B66\u4E60\u7684\u70ED\u60C5\u548C\u5BF9\u516C\u53F8\u7684\u5FE0\u8BDA\u5EA6\u4EE5\u53CA\u4F60\u7684\u4E0A\u8FDB\u5FC3\u3002</p><h2 id="\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5" aria-hidden="true">#</a> \u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5?</h2><p><strong>\u56DE\u7B54</strong>\uFF1A \u2460\u6B63\u5E38\u7684\u201C\u8DF3\u69FD\u201D\u80FD\u591F\u4FC3\u8FDB\u4EBA\u624D\u5408\u7406\u6D41\u52A8\uFF0C\u5E94\u8BE5\u652F\u6301\u3002\u2461\u9891\u7E41\u7684\u8DF3\u69FD\u5BF9\u5355\u4F4D\u548C\u4E2A\u4EBA\u53CC\u65B9\u90FD\u4E0D\u5229\uFF0C\u5E94\u8BE5\u53CD\u5BF9\u3002</p><h2 id="\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11" tabindex="-1"><a class="header-anchor" href="#\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11" aria-hidden="true">#</a> \u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11?</h2><p><strong>\u56DE\u7B54</strong>\uFF1A\u5728\u53BB\u516C\u53F8\u9762\u8BD5\u524D\u4E0A\u7F51\u67E5\u4E00\u4E0B\u8BE5\u516C\u53F8\u4E3B\u8425\u4E1A\u52A1\u3002\u53EF\u7C7B\u4F3C\u56DE\u7B54\uFF1A\u8D35\u516C\u53F8\u6709\u610F\u6539\u53D8\u7B56\u7565\uFF0C\u52A0\u5F3A\u4E0E\u56FD\u5916\u5927\u5382\u7684OEM\u5408\u4F5C\uFF0C\u81EA\u6709\u54C1\u724C\u7684\u90E8\u5206\u5219\u900F\u8FC7\u6D77\u5916\u7ECF\u9500\u5546\u3002</p><!--]-->`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/\u9762\u8BD5/interview.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var interview_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$c]]);
var interview_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": interview_html$1
});
const _sfc_main$p = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/html/text1.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var text1_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$b]]);
var text1_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text1_html$2
});
const _sfc_main$o = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/html/text2.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var text2_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$a]]);
var text2_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text2_html$4
});
const _sfc_main$n = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="\u5165\u95E8\u5BFC\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u5165\u95E8\u5BFC\u8BBA" aria-hidden="true">#</a> \u5165\u95E8\u5BFC\u8BBA</h1><blockquote><p>\u672C\u7B14\u8BB0\u5185\u5BB9\u6574\u5408\u81EA<a href="https://wangdoc.com/javascript/index.html" target="_blank" rel="noopener noreferrer">https://wangdoc.com/javascript/index.html`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>,\u6559\u7A0B\u7248\u6743\u5F52\u539F\u4F5C\u8005\u6240\u6709\u3002</p></blockquote><h2 id="javascript\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#javascript\u4ECB\u7ECD" aria-hidden="true">#</a> JavaScript\u4ECB\u7ECD</h2><p>JavaScript\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u811A\u672C\u8BED\u8A00\u3002\u6240\u8C13\u201C\u811A\u672C\u8BED\u8A00\u201D\uFF08script language\uFF09\uFF0C\u6307\u7684\u662F\u5B83\u4E0D\u5177\u5907\u5F00\u53D1\u64CD\u4F5C\u7CFB\u7EDF\u7684\u80FD\u529B\uFF0C\u800C\u662F\u53EA\u7528\u6765\u7F16\u5199\u63A7\u5236\u5176\u4ED6\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\uFF08\u6BD4\u5982\u6D4F\u89C8\u5668\uFF09\u7684\u201C\u811A\u672C\u201D\u3002 </p><p>JavaScript \u4E5F\u662F\u4E00\u79CD\u5D4C\u5165\u5F0F\uFF08embedded\uFF09\u8BED\u8A00\u3002\u5B83\u672C\u8EAB\u63D0\u4F9B\u7684\u6838\u5FC3\u8BED\u6CD5\u4E0D\u7B97\u5F88\u591A\uFF0C\u53EA\u80FD\u7528\u6765\u505A\u4E00\u4E9B\u6570\u5B66\u548C\u903B\u8F91\u8FD0\u7B97\u3002JavaScript \u672C\u8EAB\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u4E0E I/O\uFF08\u8F93\u5165/\u8F93\u51FA\uFF09\u76F8\u5173\u7684 API\uFF0C\u90FD\u8981\u9760\u5BBF\u4E3B\u73AF\u5883\uFF08host\uFF09\u63D0\u4F9B\uFF0C\u6240\u4EE5 JavaScript \u53EA\u5408\u9002\u5D4C\u5165\u66F4\u5927\u578B\u7684\u5E94\u7528\u7A0B\u5E8F\u73AF\u5883\uFF0C\u53BB\u8C03\u7528\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u7684\u5E95\u5C42 API\u3002 </p><p>\u76EE\u524D\uFF0C\u5DF2\u7ECF\u5D4C\u5165 JavaScript \u7684\u5BBF\u4E3B\u73AF\u5883\u6709\u591A\u79CD\uFF0C\u6700\u5E38\u89C1\u7684\u73AF\u5883\u5C31\u662F\u6D4F\u89C8\u5668\uFF0C\u53E6\u5916\u8FD8\u6709\u670D\u52A1\u5668\u73AF\u5883\uFF0C\u4E5F\u5C31\u662F Node \u9879\u76EE\u3002 </p><p> JavaScript \u7684\u6838\u5FC3\u8BED\u6CD5\u90E8\u5206\u76F8\u5F53\u7CBE\u7B80\uFF0C\u53EA\u5305\u62EC\u4E24\u4E2A\u90E8\u5206\uFF1A\u57FA\u672C\u7684\u8BED\u6CD5\u6784\u9020\uFF08\u6BD4\u5982\u64CD\u4F5C\u7B26\u3001\u63A7\u5236\u7ED3\u6784\u3001\u8BED\u53E5\uFF09\u548C\u6807\u51C6\u5E93\uFF08\u5C31\u662F\u4E00\u7CFB\u5217\u5177\u6709\u5404\u79CD\u529F\u80FD\u7684\u5BF9\u8C61\u6BD4\u5982Array\u3001Date\u3001Math\u7B49\uFF09\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5404\u79CD\u5BBF\u4E3B\u73AF\u5883\u63D0\u4F9B\u989D\u5916\u7684 API\uFF08\u5373\u53EA\u80FD\u5728\u8BE5\u73AF\u5883\u4F7F\u7528\u7684\u63A5\u53E3\uFF09\uFF0C\u4EE5\u4FBF JavaScript \u8C03\u7528\u3002\u4EE5\u6D4F\u89C8\u5668\u4E3A\u4F8B\uFF0C\u5B83\u63D0\u4F9B\u7684\u989D\u5916 API \u53EF\u4EE5\u5206\u6210\u4E09\u5927\u7C7B\u3002 </p><ul><li>\u6D4F\u89C8\u5668\u63A7\u5236\u7C7B\uFF1A\u64CD\u4F5C\u6D4F\u89C8\u5668</li><li>DOM \u7C7B\uFF1A\u64CD\u4F5C\u7F51\u9875\u7684\u5404\u79CD\u5143\u7D20</li><li>Web \u7C7B\uFF1A\u5B9E\u73B0\u4E92\u8054\u7F51\u7684\u5404\u79CD\u529F\u80FD</li></ul><p>\u6B64\u7B14\u8BB0\u51E0\u4E4E\u4E0D\u6D89\u53CANode\uFF0C\u4E3B\u8981\u53EF\u4EE5\u603B\u7ED3\u4E3A\u4EE5\u4E0B\u56DB\u90E8\u5206\uFF1A</p><ul><li>\u57FA\u672C\u8BED\u6CD5</li><li>\u6807\u51C6\u5E93</li><li>\u6D4F\u89C8\u5668 API</li><li>DOM</li></ul><h2 id="\u4F7F\u7528\u9886\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9886\u57DF" aria-hidden="true">#</a> \u4F7F\u7528\u9886\u57DF</h2><table><thead><tr><th>\u5E73\u53F0</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6280\u80FD</th></tr></thead><tbody><tr><td>\u6D4F\u89C8\u5668\u7684\u5E73\u53F0\u5316</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u6BD4\u5982\u64CD\u4F5C\u672C\u5730\u6587\u4EF6\u3001\u56FE\u7247\u3001\u8C03\u7528\u6444\u50CF\u5934\u548C\u9EA6\u514B\u98CE\u7B49\u7B49</td></tr><tr><td>Node</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Node \u9879\u76EE\u4F7F\u5F97 JavaScript \u53EF\u4EE5\u7528\u4E8E\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u7684\u5927\u578B\u9879\u76EE</td></tr><tr><td>\u6570\u636E\u5E93\u64CD\u4F5C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">NoSQL \u6570\u636E\u5E93\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u672C\u8EAB\u5C31\u662F\u5728 JSON\uFF08JavaScript Object Notation\uFF09\u683C\u5F0F\u7684\u57FA\u7840\u4E0A\u8BDE\u751F\u7684\uFF0C\u5927\u90E8\u5206 NoSQL \u6570\u636E\u5E93\u5141\u8BB8 JavaScript \u76F4\u63A5\u64CD\u4F5C</td></tr><tr><td>\u79FB\u52A8\u5E73\u53F0\u5F00\u53D1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">JavaScript \u4E5F\u6B63\u5728\u6210\u4E3A\u624B\u673A\u5E94\u7528\u7684\u5F00\u53D1\u8BED\u8A00\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u5B89\u5353\u5E73\u53F0\u4F7F\u7528 Java \u8BED\u8A00\u5F00\u53D1\uFF0CiOS \u5E73\u53F0\u4F7F\u7528 Objective-C \u6216 Swift \u8BED\u8A00\u5F00\u53D1\u3002</td></tr><tr><td>\u5185\u5D4C\u811A\u672C\u8BED\u8A00</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5C06 JavaScript \u4F5C\u4E3A\u5185\u5D4C\u7684\u811A\u672C\u8BED\u8A00\uFF0C\u6BD4\u5982 Adobe \u516C\u53F8\u7684\u8457\u540D PDF \u9605\u8BFB\u5668 Acrobat\u3001Linux \u684C\u9762\u73AF\u5883 GNOME 3\u3002</td></tr><tr><td>\u8DE8\u5E73\u53F0\u7684\u684C\u9762\u5E94\u7528\u7A0B\u5E8F</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">Chromium OS\u3001Windows 8 \u7B49\u64CD\u4F5C\u7CFB\u7EDF\u76F4\u63A5\u652F\u6301 JavaScript \u7F16\u5199\u5E94\u7528\u7A0B\u5E8F\u3002</td></tr></tbody></table><h2 id="javascript-\u4E0E-java-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#javascript-\u4E0E-java-\u7684\u5173\u7CFB" aria-hidden="true">#</a> JavaScript \u4E0E Java \u7684\u5173\u7CFB</h2><p>JavaScript \u7684\u57FA\u672C\u8BED\u6CD5\u548C\u5BF9\u8C61\u4F53\u7CFB\uFF0C\u662F\u6A21\u4EFF Java \u800C\u8BBE\u8BA1\u7684\u3002\u4F46\u662F\uFF0CJavaScript \u6CA1\u6709\u91C7\u7528 Java \u7684\u9759\u6001\u7C7B\u578B\u3002\u6B63\u662F\u56E0\u4E3A JavaScript \u4E0E Java \u6709\u5F88\u5927\u7684\u76F8\u4F3C\u6027\uFF0C\u6240\u4EE5\u8FD9\u95E8\u8BED\u8A00\u624D\u4ECE\u4E00\u5F00\u59CB\u7684 LiveScript \u6539\u540D\u4E3A JavaScript\u3002\u57FA\u672C\u4E0A\uFF0CJavaScript \u8FD9\u4E2A\u540D\u5B57\u7684\u539F\u610F\u662F\u201C\u5F88\u50CFJava\u7684\u811A\u672C\u8BED\u8A00\u201D\u3002 </p><h2 id="javascript-\u4E0E-ecmascript-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#javascript-\u4E0E-ecmascript-\u7684\u5173\u7CFB" aria-hidden="true">#</a> JavaScript \u4E0E ECMAScript \u7684\u5173\u7CFB</h2><p> ECMAScript \u548C JavaScript \u7684\u5173\u7CFB\u662F\uFF0C\u524D\u8005\u662F\u540E\u8005\u7684\u89C4\u683C\uFF0C\u540E\u8005\u662F\u524D\u8005\u7684\u4E00\u79CD\u5B9E\u73B0\u3002\u5728\u65E5\u5E38\u573A\u5408\uFF0C\u8FD9\u4E24\u4E2A\u8BCD\u662F\u53EF\u4EE5\u4E92\u6362\u7684\u3002 </p><p> ECMAScript \u53EA\u7528\u6765\u6807\u51C6\u5316 JavaScript \u8FD9\u79CD\u8BED\u8A00\u7684\u57FA\u672C\u8BED\u6CD5\u7ED3\u6784\uFF0C\u4E0E\u90E8\u7F72\u73AF\u5883\u76F8\u5173\u7684\u6807\u51C6\u90FD\u7531\u5176\u4ED6\u6807\u51C6\u89C4\u5B9A\uFF0C\u6BD4\u5982 DOM \u7684\u6807\u51C6\u5C31\u662F\u7531 W3C\u7EC4\u7EC7\uFF08World Wide Web Consortium\uFF09\u5236\u5B9A\u7684\u3002 <p></p> ECMA-262 \u6807\u51C6\u540E\u6765\u4E5F\u88AB\u53E6\u4E00\u4E2A\u56FD\u9645\u6807\u51C6\u5316\u7EC4\u7EC7 ISO\uFF08International Organization for Standardization\uFF09\u6279\u51C6\uFF0C\u6807\u51C6\u53F7\u662F ISO-16262\u3002 </p><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/JavaScript/\u5165\u95E8\u5BFC\u8BBA.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var _____html$7 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$9]]);
var _____html$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$7
});
const _sfc_main$m = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="\u5185\u7F6E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6E\u5BF9\u8C61" aria-hidden="true">#</a> \u5185\u7F6E\u5BF9\u8C61</h1><h2 id="\u4E00\u3001object-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001object-\u5BF9\u8C61" aria-hidden="true">#</a> \u4E00\u3001Object \u5BF9\u8C61</h2><p>JavaScript \u539F\u751F\u63D0\u4F9B<code>Object</code>\u5BF9\u8C61\uFF08\u6CE8\u610F\u8D77\u9996\u7684<code>O</code>\u662F\u5927\u5199\uFF09,JavaScript \u7684\u6240\u6709\u5176\u4ED6\u5BF9\u8C61\u90FD\u7EE7\u627F\u81EA<code>Object</code>\u5BF9\u8C61\uFF0C\u5373\u90A3\u4E9B\u5BF9\u8C61\u90FD\u662F<code>Object</code>\u7684\u5B9E\u4F8B\u3002</p><p><code>Object</code>\u5BF9\u8C61\u7684\u539F\u751F\u65B9\u6CD5\u5206\u6210\u4E24\u7C7B\uFF1A<code>Object</code>\u672C\u8EAB\u7684\u65B9\u6CD5\u4E0E<code>Object</code>\u7684\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><ol><li><code>Object</code>\u5BF9\u8C61\u672C\u8EAB\u7684\u65B9\u6CD5</li></ol><p>\u6240\u8C13\u201C\u672C\u8EAB\u7684\u65B9\u6CD5\u201D\u5C31\u662F\u76F4\u63A5\u5B9A\u4E49\u5728<code>Object</code>\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>Object</code>\u7684\u5B9E\u4F8B\u65B9\u6CD5</li></ol><p>\u6240\u8C13\u5B9E\u4F8B\u65B9\u6CD5\u5C31\u662F\u5B9A\u4E49\u5728<code>Object</code>\u539F\u578B\u5BF9\u8C61<code>Object.prototype</code>\u4E0A\u7684\u65B9\u6CD5\u3002\u5B83\u53EF\u4EE5\u88AB<code>Object</code>\u5B9E\u4F8B\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Object</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5173\u4E8E\u539F\u578B\u5BF9\u8C61<code>object.prototype</code>\u7684\u8BE6\u7EC6\u89E3\u91CA:\u8FD9\u91CC\u53EA\u8981\u77E5\u9053\uFF0C\u51E1\u662F\u5B9A\u4E49\u5728<code>Object.prototype</code>\u5BF9\u8C61\u4E0A\u9762\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5C06\u88AB\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u5171\u4EAB\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u4EE5\u4E0B\u5148\u4ECB\u7ECD<code>Object</code>\u4F5C\u4E3A\u51FD\u6570\u7684\u7528\u6CD5\uFF0C\u7136\u540E\u518D\u4ECB\u7ECD<code>Object</code>\u5BF9\u8C61\u7684\u539F\u751F\u65B9\u6CD5\uFF0C\u5206\u6210\u5BF9\u8C61\u81EA\u8EAB\u7684\u65B9\u6CD5\uFF08\u53C8\u79F0\u4E3A\u201C\u9759\u6001\u65B9\u6CD5\u201D\uFF09\u548C\u5B9E\u4F8B\u65B9\u6CD5\u4E24\u90E8\u5206\u3002</p><h2 id="object-\u4F5C\u4E3A\u51FD\u6570-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object-\u4F5C\u4E3A\u51FD\u6570-\u65B9\u6CD5" aria-hidden="true">#</a> Object() \u4F5C\u4E3A\u51FD\u6570\uFF08\u65B9\u6CD5\uFF09</h2><p><code>Object</code>\u672C\u8EAB\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u5F53\u4F5C\u5DE5\u5177\u65B9\u6CD5\u4F7F\u7528\uFF0C\u5C06\u4EFB\u610F\u503C\u8F6C\u4E3A\u5BF9\u8C61\u3002\u8FD9\u4E2A\u65B9\u6CD5\u5E38\u7528\u4E8E\u4FDD\u8BC1\u67D0\u4E2A\u503C\u4E00\u5B9A\u662F\u5BF9\u8C61\u3002</p><p>\u5982\u679C\u53C2\u6570\u4E3A\u7A7A\uFF08\u6216\u8005\u4E3A<code>undefined</code>\u548C<code>null</code>\uFF09\uFF0C<code>Object()</code>\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u7B49\u540C\u4E8E</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684\u542B\u4E49\uFF0C\u662F\u5C06<code>undefined</code>\u548C<code>null</code>\u8F6C\u4E3A\u5BF9\u8C61\uFF0C\u7ED3\u679C\u5F97\u5230\u4E86\u4E00\u4E2A\u7A7A\u5BF9\u8C61obj\u3002</p><p><code>instanceof</code>\u8FD0\u7B97\u7B26\u7528\u6765\u9A8C\u8BC1\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u4E3A\u6307\u5B9A\u7684\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u3002<code>obj instanceof Object</code>\u8FD4\u56DE<code>true</code>\uFF0C\u5C31\u8868\u793A<code>obj</code>\u5BF9\u8C61\u662F<code>Object</code>\u7684\u5B9E\u4F8B\u3002</p><p>\u5982\u679C\u53C2\u6570\u662F\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C<code>Object</code>\u65B9\u6CD5\u5C06\u5176\u8F6C\u4E3A\u5BF9\u5E94\u7684\u5305\u88C5\u5BF9\u8C61\u7684\u5B9E\u4F8B(\u53C2\u8003\uFF1A\u300A\u5305\u88C5\u5BF9\u8C61\u300B)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Number</span> <span class="token comment">// true</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Boolean</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Object</code>\u51FD\u6570\u7684\u53C2\u6570\u662F\u5404\u79CD\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u8F6C\u6362\u6210\u5BF9\u8C61\u5C31\u662F\u539F\u59CB\u7C7B\u578B\u503C\u5BF9\u5E94\u7684\u5305\u88C5\u5BF9\u8C61\u3002</p><p>\u5982\u679C<code>Object</code>\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u603B\u662F\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF0C\u5373\u4E0D\u7528\u8F6C\u6362\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u539F\u6570\u7EC4</span>
obj <span class="token operator">===</span> arr <span class="token comment">// true</span>

<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// \u8FD4\u56DE\u539F\u5BF9\u8C61</span>
obj <span class="token operator">===</span> value <span class="token comment">// true</span>

<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u539F\u51FD\u6570</span>
obj <span class="token operator">===</span> fn <span class="token comment">// true</span>


<span class="token comment">//\u5229\u7528\u8FD9\u4E00\u70B9\uFF0C\u53EF\u4EE5\u5199\u4E00\u4E2A\u5224\u65AD\u53D8\u91CF\u662F\u5426\u4E3A\u5BF9\u8C61\u7684\u51FD\u6570\u3002</span>
<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">===</span> <span class="token function">Object</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">isObject</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="object-\u6784\u9020\u51FD\u6570-new\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#object-\u6784\u9020\u51FD\u6570-new\u521B\u5EFA" aria-hidden="true">#</a> Object \u6784\u9020\u51FD\u6570(new\u521B\u5EFA)</h2><p><code>Object</code>\u6784\u9020\u51FD\u6570\u7684\u9996\u8981\u7528\u9014\uFF0C\u662F\u76F4\u63A5\u901A\u8FC7\u5B83\u6765\u751F\u6210\u65B0\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u901A\u8FC7<code>var obj = new Object()</code>\u7684\u5199\u6CD5\u751F\u6210\u65B0\u5BF9\u8C61\uFF0C\u4E0E\u5B57\u9762\u91CF\u7684\u5199\u6CD5<code>var obj = {}</code>\u662F\u7B49\u4EF7\u7684\u3002\u6216\u8005\u8BF4\uFF0C\u540E\u8005\u53EA\u662F\u524D\u8005\u7684\u4E00\u79CD\u7B80\u4FBF\u5199\u6CD5\u3002</p></div><p><code>Object</code>\u6784\u9020\u51FD\u6570\u7684\u7528\u6CD5\u4E0E\u5DE5\u5177\u65B9\u6CD5\u5F88\u76F8\u4F3C\uFF0C\u51E0\u4E4E\u4E00\u6A21\u4E00\u6837\u3002\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u5982\u679C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF1B\u5982\u679C\u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u5219\u8FD4\u56DE\u8BE5\u503C\u5BF9\u5E94\u7684\u5305\u88C5\u5BF9\u8C61\uFF08\u8BE6\u89C1\u300A\u5305\u88C5\u5BF9\u8C61\u300B\u4E00\u7AE0\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
o1 <span class="token operator">===</span> o2 <span class="token comment">// true</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj <span class="token keyword">instanceof</span> <span class="token class-name">Number</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u867D\u7136\u7528\u6CD5\u76F8\u4F3C\uFF0C\u4F46\u662F<code>Object(value)</code>\u4E0E<code>new Object(value)</code>\u4E24\u8005\u7684\u8BED\u4E49\u662F\u4E0D\u540C\u7684\uFF0C<code>Object(value)</code>\u8868\u793A\u5C06<code>value</code>\u8F6C\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C<code>new Object(value)</code>\u5219\u8868\u793A\u65B0\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u7684\u503C\u662F<code>value</code>\u3002</p><h2 id="object\u7684\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object\u7684\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> Object\u7684\u9759\u6001\u65B9\u6CD5</h2><p>\u6240\u8C13\u201C\u9759\u6001\u65B9\u6CD5\u201D\uFF0C\u662F\u6307\u90E8\u7F72\u5728<code>Object</code>\u5BF9\u8C61\u81EA\u8EAB\u7684\u65B9\u6CD5(\u6BD4\u5982\uFF1A<code>Object.</code>)\u3002,\u53EF\u4EE5\u53C2\u8003<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank" rel="noopener noreferrer">MDN`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h3 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys" aria-hidden="true">#</a> Object.keys()</h3><p><code>Object.keys</code>\u65B9\u6CD5\u548C<code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u90FD\u7528\u6765\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><p><code>Object.keys</code>\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\u3002\u8BE5\u6570\u7EC4\u7684\u6210\u5458\u90FD\u662F\u8BE5\u5BF9\u8C61\u81EA\u8EAB\u7684\uFF08\u800C\u4E0D\u662F\u7EE7\u627F\u7684\uFF09\u6240\u6709\u5C5E\u6027\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// [&quot;p1&quot;, &quot;p2&quot;]</span>
<span class="token comment">//\u83B7\u53D6\u5230\u5C5E\u6027\u540D\u79F0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="object-getownpropertynames" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames" aria-hidden="true">#</a> Object.getOwnPropertyNames()</h3><p><code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u548C<code>Object.keys</code>\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u4E86\u8BE5\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// getOwnPropertyNames \u4E2D\u6587\u542B\u4E49\uFF1A\u83B7\u53D6\u81EA\u5DF1\u7684\u5C5E\u6027\u540D</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// [&quot;p1&quot;, &quot;p2&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5BF9\u4E8E\u4E00\u822C\u7684\u5BF9\u8C61\u6765\u8BF4\uFF0C<code>Object.keys()</code>\u548C<code>Object.getOwnPropertyNames()</code>\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4E00\u6837\u7684\u3002\u53EA\u6709\u6D89\u53CA\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u65F6\uFF0C\u624D\u4F1A\u6709\u4E0D\u4E00\u6837\u7684\u7ED3\u679C\u3002<code>Object.keys</code>\u65B9\u6CD5\u53EA\u8FD4\u56DE\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF08\u8BE6\u89C1\u300A\u5BF9\u8C61\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\u300B\u4E00\u7AE0\uFF09\uFF0C<code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u8FD8\u8FD4\u56DE\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [&#39;0&#39;,\u20181\u2019]  \u5982\u679C\u5BF9\u8C61\u662F\u6570\u7EC4\u65F6\u8FD4\u56DE\u7D22\u5F15\u5B57\u7B26\u4E32</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// [\u20180\u2019,\u20181\u2019,&#39;length&#39;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6570\u7EC4\u7684<code>length</code>\u5C5E\u6027\u662F\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF0C\u6240\u4EE5\u53EA\u51FA\u73B0\u5728<code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u679C\u4E2D\u3002</p><p>\u7531\u4E8E JavaScript \u6CA1\u6709\u63D0\u4F9B\u8BA1\u7B97\u5BF9\u8C61\u5C5E\u6027\u4E2A\u6570\u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4EE3\u66FF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token number">456</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2</span>
<span class="token comment">//\u83B7\u53D6\u5BF9\u8C61\u5C5E\u6027\u4E2A\u6570\u957F\u5EA6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u51E0\u4E4E\u603B\u662F\u4F7F\u7528<code>Object.keys</code>\u65B9\u6CD5\uFF0C\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</p><h3 id="object-\u5176\u4ED6\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object-\u5176\u4ED6\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> Object \u5176\u4ED6\u9759\u6001\u65B9\u6CD5</h3><p><code>Object</code>\u8FD8\u6709\u4E0D\u5C11\u5176\u4ED6\u9759\u6001\u65B9\u6CD5\uFF0C\u5C06\u5728\u540E\u6587\u9010\u4E00\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><p>\uFF081\uFF09\u5BF9\u8C61\u5C5E\u6027\u6A21\u578B\u7684\u76F8\u5173\u65B9\u6CD5</p><ul><li><code>Object.getOwnPropertyDescriptor()</code>\uFF1A\u83B7\u53D6\u67D0\u4E2A\u5C5E\u6027\u7684\u63CF\u8FF0\u5BF9\u8C61\u3002</li><li><code>Object.defineProperty()</code>\uFF1A\u901A\u8FC7\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u67D0\u4E2A\u5C5E\u6027\u3002</li><li><code>Object.defineProperties()</code>\uFF1A\u901A\u8FC7\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u591A\u4E2A\u5C5E\u6027\u3002</li></ul><p>\uFF082\uFF09\u63A7\u5236\u5BF9\u8C61\u72B6\u6001\u7684\u65B9\u6CD5</p><ul><li><code>Object.preventExtensions()</code>\uFF1A\u9632\u6B62\u5BF9\u8C61\u6269\u5C55\u3002</li><li><code>Object.isExtensible()</code>\uFF1A\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u53EF\u6269\u5C55\u3002</li><li><code>Object.seal()</code>\uFF1A\u7981\u6B62\u5BF9\u8C61\u914D\u7F6E\u3002</li><li><code>Object.isSealed()</code>\uFF1A\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u53EF\u914D\u7F6E\u3002</li><li><code>Object.freeze()</code>\uFF1A\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61\u3002</li><li><code>Object.isFrozen()</code>\uFF1A\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u88AB\u51BB\u7ED3\u3002</li></ul><p>\uFF083\uFF09\u539F\u578B\u94FE\u76F8\u5173\u65B9\u6CD5</p><ul><li><code>Object.create()</code>\uFF1A\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u6307\u5B9A\u539F\u578B\u5BF9\u8C61\u548C\u5C5E\u6027\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002</li><li><code>Object.getPrototypeOf()</code>\uFF1A\u83B7\u53D6\u5BF9\u8C61\u7684Prototype\u5BF9\u8C61\u3002</li></ul><h2 id="object-\u7684\u5B9E\u4F8B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#object-\u7684\u5B9E\u4F8B\u65B9\u6CD5" aria-hidden="true">#</a> Object \u7684\u5B9E\u4F8B\u65B9\u6CD5</h2><p>\u9664\u4E86\u9759\u6001\u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E0D\u5C11\u65B9\u6CD5\u5B9A\u4E49\u5728<code>Object.prototype</code>\u5BF9\u8C61\u3002\u5B83\u4EEC\u79F0\u4E3A\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u6240\u6709<code>Object</code>\u7684\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u7EE7\u627F\u4E86\u8FD9\u4E9B\u65B9\u6CD5\u3002</p><p><code>Object</code>\u5B9E\u4F8B\u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u516D\u4E2A\u3002</p><ul><li>Object.prototype.valueOf()\uFF1A\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u5BF9\u5E94\u7684\u503C\u3002</li><li>Object.prototype.toString()\uFF1A\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</li><li>Object.prototype.toLocaleString()\uFF1A\u8FD4\u56DE\u5F53\u524D\u5BF9\u8C61\u5BF9\u5E94\u7684\u672C\u5730\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</li><li>Object.prototype.hasOwnProperty()\uFF1A\u5224\u65AD\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u4E3A\u5F53\u524D\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u8FD8\u662F\u7EE7\u627F\u81EA\u539F\u578B\u5BF9\u8C61\u7684\u5C5E\u6027\u3002</li><li>Object.prototype.isPrototypeOf()\uFF1A\u5224\u65AD\u5F53\u524D\u5BF9\u8C61\u662F\u5426\u4E3A\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u3002</li><li>Object.prototype.propertyIsEnumerable()\uFF1A\u5224\u65AD\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u53EF\u679A\u4E3E\u3002</li></ul><p>\u672C\u8282\u4ECB\u7ECD\u524D\u56DB\u4E2A\u65B9\u6CD5\uFF0C\u53E6\u5916\u4E24\u4E2A\u65B9\u6CD5\u5C06\u5728\u540E\u6587\u76F8\u5173\u7AE0\u8282\u4ECB\u7ECD\u3002</p><h3 id="object-prototype-valueof" tabindex="-1"><a class="header-anchor" href="#object-prototype-valueof" aria-hidden="true">#</a> Object.prototype.valueOf()</h3><p><code>valueOf</code>\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u201C\u503C\u201D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> obj <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u6BD4\u8F83<code>obj.valueOf()</code>\u4E0E<code>obj</code>\u672C\u8EAB\uFF0C\u4E24\u8005\u662F\u4E00\u6837\u7684\u3002</p><p><code>valueOf</code>\u65B9\u6CD5\u7684\u4E3B\u8981\u7528\u9014\u662F\uFF0C<code>JavaScript</code> \u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u65F6\u4F1A\u9ED8\u8BA4\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF08\u8BE6\u89C1\u300A\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26\u300B\u4E00\u7AE0\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">1</span> <span class="token operator">+</span> obj <span class="token comment">// &quot;1[object Object]&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u5C06\u5BF9\u8C61obj\u4E0E\u6570\u5B571\u76F8\u52A0\uFF0C\u8FD9\u65F6 JavaScript \u5C31\u4F1A\u9ED8\u8BA4\u8C03\u7528valueOf()\u65B9\u6CD5\uFF0C\u6C42\u51FAobj\u7684\u503C\u518D\u4E0E1\u76F8\u52A0\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u81EA\u5B9A\u4E49valueOf\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u60F3\u8981\u7684\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token number">1</span> <span class="token operator">+</span> obj <span class="token comment">// 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u81EA\u5B9A\u4E49\u4E86<code>obj</code>\u5BF9\u8C61\u7684<code>valueOf</code>\u65B9\u6CD5\uFF0C\u4E8E\u662F<code>1 + obj</code>\u5C31\u5F97\u5230\u4E86<code>3</code>\u3002\u8FD9\u79CD\u65B9\u6CD5\u5C31\u76F8\u5F53\u4E8E\u7528\u81EA\u5B9A\u4E49\u7684<code>obj.valueOf</code>\uFF0C\u8986\u76D6<code>Object.prototype.valueOf</code>\u3002</p><h3 id="object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tostring" aria-hidden="true">#</a> Object.prototype.toString()</h3><p><code>toString</code>\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD4\u56DE\u7C7B\u578B\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
o1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>

<span class="token keyword">var</span> o2 <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
o2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5BF9\u8C61\u8C03\u7528<code>toString</code>\u65B9\u6CD5\uFF0C\u4F1A\u8FD4\u56DE\u5B57\u7B26\u4E32<code>[object Object]</code>\uFF0C\u8BE5\u5B57\u7B26\u4E32\u8BF4\u660E\u5BF9\u8C61\u7684\u7C7B\u578B\u3002</p><p>\u5B57\u7B26\u4E32<code>[object Object]</code>\u672C\u8EAB\u6CA1\u6709\u592A\u5927\u7684\u7528\u5904\uFF0C\u4F46\u662F\u901A\u8FC7\u81EA\u5B9A\u4E49<code>toString</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u5BF9\u8C61\u5728\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362\u65F6\uFF0C\u5F97\u5230\u60F3\u8981\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> <span class="token string">&#39;world&#39;</span> <span class="token comment">// &quot;hello world&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\uFF0C\u5F53\u5BF9\u8C61\u7528\u4E8E\u5B57\u7B26\u4E32\u52A0\u6CD5\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528<code>toString</code>\u65B9\u6CD5\u3002\u7531\u4E8E\u81EA\u5B9A\u4E49\u4E86<code>toString</code>\u65B9\u6CD5\uFF0C\u6240\u4EE5\u8FD4\u56DE\u5B57\u7B26\u4E32<code>hello world</code>\u3002</p><p>\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u51FD\u6570\u3001Date \u5BF9\u8C61\u90FD\u5206\u522B\u90E8\u7F72\u4E86\u81EA\u5B9A\u4E49\u7684toString\u65B9\u6CD5\uFF0C\u8986\u76D6\u4E86<code>Object.prototype.toString</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;1,2,3&quot;</span>

<span class="token string">&#39;123&#39;</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;123&quot;</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;function () {</span>
<span class="token comment">//   return 123;</span>
<span class="token comment">// }&quot;</span>

<span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Tue May 10 2016 09:11:31 GMT+0800 (CST)&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u51FD\u6570\u3001Date \u5BF9\u8C61\u8C03\u7528<code>toString</code>\u65B9\u6CD5\uFF0C\u5E76\u4E0D\u4F1A\u8FD4\u56DE<code>[object Object]</code>\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u81EA\u5B9A\u4E49\u4E86<code>toString</code>\u65B9\u6CD5\uFF0C\u8986\u76D6\u539F\u59CB\u65B9\u6CD5\u3002</p><h4 id="tostring-\u7684\u5E94\u7528-\u5224\u65AD\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#tostring-\u7684\u5E94\u7528-\u5224\u65AD\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> toString() \u7684\u5E94\u7528: \u5224\u65AD\u6570\u636E\u7C7B\u578B</h4><p><code>Object.prototype.toString</code>\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\u7684\u7C7B\u578B\u5B57\u7B26\u4E32\uFF0C\u56E0\u6B64\u53EF\u4EE5\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8C03\u7528\u7A7A\u5BF9\u8C61\u7684<code>toString</code>\u65B9\u6CD5\uFF0C\u7ED3\u679C\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32<code>object Object</code>\uFF0C\u5176\u4E2D\u7B2C\u4E8C\u4E2A<code>Object</code>\u8868\u793A\u8BE5\u503C\u7684\u6784\u9020\u51FD\u6570\u3002\u8FD9\u662F\u4E00\u4E2A\u5341\u5206\u6709\u7528\u7684\u5224\u65AD\u6570\u636E\u7C7B\u578B\u7684\u65B9\u6CD5\u3002</p><p>\u7531\u4E8E\u5B9E\u4F8B\u5BF9\u8C61\u53EF\u80FD\u4F1A\u81EA\u5B9A\u4E49<code>toString</code>\u65B9\u6CD5\uFF0C\u8986\u76D6\u6389<code>Object.prototype.toString</code>\u65B9\u6CD5\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5F97\u5230\u7C7B\u578B\u5B57\u7B26\u4E32\uFF0C\u6700\u597D\u76F4\u63A5\u4F7F\u7528<code>Object.prototype.toString</code>\u65B9\u6CD5\u3002\u901A\u8FC7\u51FD\u6570\u7684<code>call</code>\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u4EFB\u610F\u503C\u4E0A\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5224\u65AD\u8FD9\u4E2A\u503C\u7684\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u8868\u793A\u5BF9<code>value</code>\u8FD9\u4E2A\u503C\u8C03\u7528<code>Object.prototype.toString</code>\u65B9\u6CD5\u3002</p><p>\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684<code>Object.prototype.toString</code>\u65B9\u6CD5\u8FD4\u56DE\u503C\u5982\u4E0B\u3002</p><ul><li>\u6570\u503C\uFF1A\u8FD4\u56DE<code>[object Number]</code>\u3002</li><li>\u5B57\u7B26\u4E32\uFF1A\u8FD4\u56DE<code>[object String]</code>\u3002</li><li>\u5E03\u5C14\u503C\uFF1A\u8FD4\u56DE<code>[object Boolean]</code>\u3002</li><li>undefined\uFF1A\u8FD4\u56DE<code>[object Undefined]</code>\u3002</li><li>null\uFF1A\u8FD4\u56DE<code>[object Null]</code>\u3002</li><li>\u6570\u7EC4\uFF1A\u8FD4\u56DE<code>[object Array]</code>\u3002</li><li>arguments \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Arguments]</code>\u3002</li><li>\u51FD\u6570\uFF1A\u8FD4\u56DE<code>[object Function]</code>\u3002</li><li>Error \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Error]</code>\u3002</li><li>Date \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Date]</code>\u3002</li><li>RegExp \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object RegExp]</code>\u3002</li><li>\u5176\u4ED6\u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Object]</code>\u3002</li></ul><p>\u8FD9\u5C31\u662F\u8BF4\uFF0C<code>Object.prototype.toString</code>\u53EF\u4EE5\u770B\u51FA\u4E00\u4E2A\u503C\u5230\u5E95\u662F\u4EC0\u4E48\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Math]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Array]&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u53EF\u4EE5\u5199\u51FA\u4E00\u4E2A\u6BD4<code>typeof</code>\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;array&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;null&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abcd</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;regex&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;date&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u4E0A\u9762\u8FD9\u4E2A<code>type</code>\u51FD\u6570\u7684\u57FA\u7840\u4E0A\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A\u4E13\u95E8\u5224\u65AD\u67D0\u79CD\u7C7B\u578B\u6570\u636E\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token string">&#39;Null&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Undefined&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Object&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Array&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Function&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;RegExp&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">[</span><span class="token string">&#39;is&#39;</span> <span class="token operator">+</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">type</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> t<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="object-prototype-tolocalestring" tabindex="-1"><a class="header-anchor" href="#object-prototype-tolocalestring" aria-hidden="true">#</a> Object.prototype.toLocaleString()</h3><p><code>Object.prototype.toLocaleString</code>\u65B9\u6CD5\u4E0E<code>toString</code>\u7684\u8FD4\u56DE\u7ED3\u679C\u76F8\u540C\uFF0C\u4E5F\u662F\u8FD4\u56DE\u4E00\u4E2A\u503C\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
obj<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u7559\u51FA\u4E00\u4E2A\u63A5\u53E3\uFF0C\u8BA9\u5404\u79CD\u4E0D\u540C\u7684\u5BF9\u8C61\u5B9E\u73B0\u81EA\u5DF1\u7248\u672C\u7684<code>toLocaleString</code>\uFF0C\u7528\u6765\u8FD4\u56DE\u9488\u5BF9\u67D0\u4E9B\u5730\u57DF\u7684\u7279\u5B9A\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Henry Norman Bethune&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">toLocaleString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;\u767D\u6C42\u6069&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Henry Norman Bethune</span>
person<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u767D\u6C42\u6069</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>toString()</code>\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\u7684\u4E00\u822C\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C<code>toLocaleString()</code>\u65B9\u6CD5\u8FD4\u56DE\u672C\u5730\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\u3002</p><p>\u76EE\u524D\uFF0C\u4E3B\u8981\u6709\u4E09\u4E2A\u5BF9\u8C61\u81EA\u5B9A\u4E49\u4E86<code>toLocaleString</code>\u65B9\u6CD5\u3002</p><ul><li>Array.prototype.toLocaleString()</li><li>Number.prototype.toLocaleString()</li><li>Date.prototype.toLocaleString()</li></ul><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u65E5\u671F\u7684\u5B9E\u4F8B\u5BF9\u8C61\u7684<code>toString</code>\u548C<code>toLocaleString</code>\u8FD4\u56DE\u503C\u5C31\u4E0D\u4E00\u6837\uFF0C\u800C\u4E14<code>toLocaleString</code>\u7684\u8FD4\u56DE\u503C\u8DDF\u7528\u6237\u8BBE\u5B9A\u7684\u6240\u5728\u5730\u57DF\u76F8\u5173\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
date<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Tue Jan 01 2018 12:01:33 GMT+0800 (CST)&quot;</span>
date<span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;1/01/2018, 12:01:33 PM&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="object-prototype-hasownproperty" tabindex="-1"><a class="header-anchor" href="#object-prototype-hasownproperty" aria-hidden="true">#</a> Object.prototype.hasOwnProperty()</h3><p><code>Object.prototype.hasOwnProperty</code>\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BE5\u5B9E\u4F8B\u5BF9\u8C61\u81EA\u8EAB\u662F\u5426\u5177\u6709\u8BE5\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p<span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61" aria-hidden="true">#</a> \u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61</h2><p>JavaScript \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5185\u90E8\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u63A7\u5236\u5B83\u7684\u884C\u4E3A\uFF0C\u6BD4\u5982\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u5199\u3001\u53EF\u904D\u5386\u7B49\u7B49\u3002\u8FD9\u4E2A\u5185\u90E8\u6570\u636E\u7ED3\u6784\u79F0\u4E3A\u201C\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u201D\uFF08<code>attributes object</code>\uFF09\u3002\u6BCF\u4E2A\u5C5E\u6027\u90FD\u6709\u81EA\u5DF1\u5BF9\u5E94\u7684\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u4FDD\u5B58\u8BE5\u5C5E\u6027\u7684\u4E00\u4E9B\u5143\u4FE1\u606F\u3002</p><p>\u4E0B\u9762\u662F\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684\u4E00\u4E2A\u4F8B\u5B50\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  get<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  set<span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>\uFF081\uFF09</strong><code>value</code></p><p><code>value</code>\u662F\u8BE5\u5C5E\u6027\u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u4E3A<code>undefined</code>\u3002</p><p><strong>\uFF082\uFF09</strong><code>writable</code></p><p><code>writable</code>\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5C5E\u6027\u503C<code>\uFF08value\uFF09</code>\u662F\u5426\u53EF\u6539\u53D8\uFF08\u5373\u662F\u5426\u53EF\u5199\uFF09\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code>\u3002</p><p><strong>\uFF083\uFF09</strong><code>enumerable</code></p><p><code>enumerable</code>\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u904D\u5386\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code>\u3002\u5982\u679C\u8BBE\u4E3A<code>false</code>\uFF0C\u4F1A\u4F7F\u5F97\u67D0\u4E9B\u64CD\u4F5C\uFF08\u6BD4\u5982<code>for...in\u5FAA\u73AF</code>\u3001<code>Object.keys()</code>\uFF09\u8DF3\u8FC7\u8BE5\u5C5E\u6027\u3002</p><p><strong>\uFF084\uFF09</strong><code>configurable</code></p><p><code>configurable</code>\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u5C5E\u6027\u7684\u53EF\u914D\u7F6E\u6027\uFF0C\u9ED8\u8BA4\u4E3A<code>true</code>\u3002\u5982\u679C\u8BBE\u4E3A<code>false</code>\uFF0C\u5C06\u963B\u6B62\u67D0\u4E9B\u64CD\u4F5C\u6539\u5199\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u6BD4\u5982\u65E0\u6CD5\u5220\u9664\u8BE5\u5C5E\u6027\uFF0C\u4E5F\u4E0D\u5F97\u6539\u53D8\u5404\u79CD\u5143\u5C5E\u6027\uFF08<code>value</code>\u5C5E\u6027\u9664\u5916\uFF09\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>configurable</code>\u5C5E\u6027\u63A7\u5236\u4E86\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684\u53EF\u5199\u6027\u3002</p><p><strong>\uFF085\uFF09</strong><code>get</code></p><p><code>get</code>\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8868\u793A\u8BE5\u5C5E\u6027\u7684\u53D6\u503C\u51FD\u6570\uFF08<code>getter</code>\uFF09\uFF0C\u9ED8\u8BA4\u4E3A<code>undefined</code>\u3002</p><p><strong>\uFF086\uFF09</strong><code>set</code></p><p><code>set</code>\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8868\u793A\u8BE5\u5C5E\u6027\u7684\u5B58\u503C\u51FD\u6570\uFF08<code>setter</code>\uFF09\uFF0C\u9ED8\u8BA4\u4E3A<code>undefined</code>\u3002</p><h3 id="object-getownpropertydescriptor" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptor" aria-hidden="true">#</a> Object.getOwnPropertyDescriptor()</h3><p><code>Object.getOwnPropertyDescriptor()</code>\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u3002\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u76EE\u6807\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5BF9\u5E94\u76EE\u6807\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> p<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// Object { value: &quot;a&quot;,//\u5C5E\u6027\u503C&#39;a&#39;</span>
<span class="token comment">//   writable: true,// \u5C5E\u6027\u503C&#39;a&#39; \u53EF\u6539\u5199</span>
<span class="token comment">//   enumerable: true, // &#39;p&#39;\u5C5E\u6027\u53EF\u88AB\u904D\u5386</span>
<span class="token comment">//   configurable: true// \u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684\u53EF\u914D\u7F6E\u6027</span>
<span class="token comment">// }</span>

<span class="token comment">// getOwnPropertyDescriptor \u4E2D\u6587\u542B\u4E49\uFF1A\u83B7\u53D6\u81EA\u5DF1\u7684\u5C5E\u6027\u63CF\u8FF0\u7B26</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Object.getOwnPropertyDescriptor()</code>\u65B9\u6CD5\u83B7\u53D6<code>obj.p</code>\u7684\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u3002</p><blockquote><p>\u6CE8\u610F\uFF0C<code>Object.getOwnPropertyDescriptor()</code>\u65B9\u6CD5\u53EA\u80FD\u7528\u4E8E\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u4E0D\u80FD\u7528\u4E8E\u7EE7\u627F\u7684\u5C5E\u6027\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> p<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>toString</code>\u662F<code>obj</code>\u5BF9\u8C61\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C<code>Object.getOwnPropertyDescriptor()</code>\u65E0\u6CD5\u83B7\u53D6\u3002</p><h3 id="object-getownpropertynames-1" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames-1" aria-hidden="true">#</a> Object.getOwnPropertyNames()</h3><p><code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6210\u5458\u662F\u53C2\u6570\u5BF9\u8C61\u81EA\u8EAB\u7684\u5168\u90E8\u5C5E\u6027\u7684\u5C5E\u6027\u540D\uFF0C\u4E0D\u7BA1\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u904D\u5386\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> enumerable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> enumerable<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [&quot;p1&quot;, &quot;p2&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.p1</code>\u662F\u53EF\u904D\u5386\u7684\uFF0C<code>obj.p2</code>\u662F\u4E0D\u53EF\u904D\u5386\u7684\u3002<code>Object.getOwnPropertyNames</code>\u4F1A\u5C06\u5B83\u4EEC\u90FD\u8FD4\u56DE\u3002</p><p>\u8FD9\u8DDF<code>Object.keys</code>\u7684\u884C\u4E3A\u4E0D\u540C\uFF0C<code>Object.keys</code>\u53EA\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u7684\u53EF\u904D\u5386\u5C5E\u6027\u7684\u5168\u90E8\u5C5E\u6027\u540D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [ &#39;length&#39; ]</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// []</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token comment">// [&#39;hasOwnProperty&#39;,</span>
<span class="token comment">//  &#39;valueOf&#39;,</span>
<span class="token comment">//  &#39;constructor&#39;,</span>
<span class="token comment">//  &#39;toLocaleString&#39;,</span>
<span class="token comment">//  &#39;isPrototypeOf&#39;,</span>
<span class="token comment">//  &#39;propertyIsEnumerable&#39;,</span>
<span class="token comment">//  &#39;toString&#39;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6570\u7EC4\u81EA\u8EAB\u7684<code>length</code>\u5C5E\u6027\u662F\u4E0D\u53EF\u904D\u5386\u7684\uFF0C<code>Object.keys</code>\u4E0D\u4F1A\u8FD4\u56DE\u8BE5\u5C5E\u6027\u3002\u7B2C\u4E8C\u4E2A\u4F8B\u5B50\u7684<code>Object.prototype</code>\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6240\u6709\u5B9E\u4F8B\u5BF9\u8C61\u90FD\u4F1A\u7EE7\u627F\u5B83\uFF0C\u5B83\u81EA\u8EAB\u7684\u5C5E\u6027\u90FD\u662F\u4E0D\u53EF\u904D\u5386\u7684\u3002</p><h3 id="object-defineproperty-object-defineproperties" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-object-defineproperties" aria-hidden="true">#</a> Object.defineProperty()\uFF0CObject.defineProperties()</h3><p><code>Object.defineProperty()</code>\u65B9\u6CD5\u5141\u8BB8\u901A\u8FC7\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u5B9A\u4E49\u6216\u4FEE\u6539\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7136\u540E\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u5BF9\u8C61\uFF0C\u5B83\u7684\u7528\u6CD5\u5982\u4E0B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> propertyName<span class="token punctuation">,</span> attributesObject<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>Object.defineProperty</code>\u65B9\u6CD5\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B21\u5982\u4E0B\u3002</p><ul><li><code>object</code>\uFF1A\u5C5E\u6027\u6240\u5728\u7684\u5BF9\u8C61</li><li><code>propertyName</code>\uFF1A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u5C5E\u6027\u540D</li><li><code>attributesObject</code>\uFF1A\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61</li></ul><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5B9A\u4E49<code>obj.p</code>\u53EF\u4EE5\u5199\u6210\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p <span class="token comment">// 123</span>

obj<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">246</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p <span class="token comment">// 123</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Object.defineProperty()</code>\u65B9\u6CD5\u5B9A\u4E49\u4E86<code>obj.p</code>\u5C5E\u6027\u3002\u7531\u4E8E\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684<code>writable</code>\u5C5E\u6027\u4E3A<code>false</code>\uFF0C\u6240\u4EE5<code>obj.p</code>\u5C5E\u6027\u4E0D\u53EF\u5199\u3002\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684<code>Object.defineProperty</code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F{}\uFF08\u4E00\u4E2A\u65B0\u5EFA\u7684\u7A7A\u5BF9\u8C61\uFF09\uFF0C<code>p</code>\u5C5E\u6027\u76F4\u63A5\u5B9A\u4E49\u5728\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u4E0A\u9762\uFF0C\u7136\u540E\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u662F<code>Object.defineProperty()</code>\u7684\u5E38\u89C1\u7528\u6CD5\u3002</p><p>\u5982\u679C\u5C5E\u6027\u5DF2\u7ECF\u5B58\u5728\uFF0C<code>Object.defineProperty()</code>\u65B9\u6CD5\u76F8\u5F53\u4E8E\u66F4\u65B0\u8BE5\u5C5E\u6027\u7684\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u3002</p><p>\u5982\u679C\u4E00\u6B21\u6027\u5B9A\u4E49\u6216\u4FEE\u6539\u591A\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>Object.defineProperties()</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> enumerable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> enumerable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  p3<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>p1 <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>p2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    enumerable<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span><span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p1 <span class="token comment">// 123</span>
obj<span class="token punctuation">.</span>p2 <span class="token comment">// &quot;abc&quot;</span>
obj<span class="token punctuation">.</span>p3 <span class="token comment">// &quot;123abc&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Object.defineProperties()</code>\u540C\u65F6\u5B9A\u4E49\u4E86<code>obj</code>\u5BF9\u8C61\u7684\u4E09\u4E2A\u5C5E\u6027\u3002\u5176\u4E2D\uFF0C<code>p3</code>\u5C5E\u6027\u5B9A\u4E49\u4E86\u53D6\u503C\u51FD\u6570<code>get</code>\uFF0C\u5373\u6BCF\u6B21\u8BFB\u53D6\u8BE5\u5C5E\u6027\uFF0C\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u53D6\u503C\u51FD\u6570\u3002</p><p>\u6CE8\u610F\uFF0C\u4E00\u65E6\u5B9A\u4E49\u4E86\u53D6\u503C\u51FD\u6570<code>get</code>\uFF08\u6216\u5B58\u503C\u51FD\u6570<code>set</code>\uFF09\uFF0C\u5C31\u4E0D\u80FD\u5C06<code>writable</code>\u5C5E\u6027\u8BBE\u4E3A<code>true</code>\uFF0C\u6216\u8005\u540C\u65F6\u5B9A\u4E49<code>value</code>\u5C5E\u6027\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Invalid property.</span>
<span class="token comment">// A property cannot both have accessors and be writable or have a value</span>
<span class="token comment">//\u4F46\u662F\uFF1A\u73B0\u5728\u8C37\u6B4C\u6D4F\u89C8\u5668\u8F93\u51FA\u4E3A\uFF1A</span>
<span class="token comment">//TypeError: Invalid property descriptor.</span>
<span class="token comment">//Cannot both specify accessors and a value or writable attribute, #&lt;Object&gt;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Invalid property descriptor.</span>
<span class="token comment">// Cannot both specify accessors and a value or writable attribute</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u540C\u65F6\u5B9A\u4E49\u4E86<code>get</code>\u5C5E\u6027\u548C<code>value</code>\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5C06<code>writable</code>\u5C5E\u6027\u8BBE\u4E3A<code>true</code>\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p><p><code>Object.defineProperty()</code>\u548C<code>Object.defineProperties()</code>\u53C2\u6570\u91CC\u9762\u7684\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\uFF0C<code>writable</code>\u3001<code>configurable</code>\u3001<code>enumerable</code>\u8FD9\u4E09\u4E2A\u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u90FD\u4E3A<code>false</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   value: undefined,</span>
<span class="token comment">//   writable: false,</span>
<span class="token comment">//   enumerable: false,</span>
<span class="token comment">//   configurable: false</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="object-prototype-propertyisenumerable" tabindex="-1"><a class="header-anchor" href="#object-prototype-propertyisenumerable" aria-hidden="true">#</a> Object.prototype.propertyIsEnumerable()</h3><p>\u5B9E\u4F8B\u5BF9\u8C61\u7684<code>propertyIsEnumerable()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u7528\u6765\u5224\u65AD\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u53EF\u904D\u5386\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u80FD\u7528\u4E8E\u5224\u65AD\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u5BF9\u4E8E\u7EE7\u627F\u7684\u5C5E\u6027\u4E00\u5F8B\u8FD4\u56DE<code>false</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.p</code>\u662F\u53EF\u904D\u5386\u7684\uFF0C\u800C<code>obj.toString</code>\u662F\u7EE7\u627F\u7684\u5C5E\u6027\u3002</p><h3 id="\u5143\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5143\u5C5E\u6027" aria-hidden="true">#</a> \u5143\u5C5E\u6027</h3><p>\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u7684\u5404\u4E2A\u5C5E\u6027\u79F0\u4E3A\u201C<code>\u5143\u5C5E\u6027</code>\u201D\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u53EF\u4EE5\u770B\u4F5C\u662F\u63A7\u5236\u5C5E\u6027\u7684\u5C5E\u6027\u3002</p><h4 id="_1-value" tabindex="-1"><a class="header-anchor" href="#_1-value" aria-hidden="true">#</a> 1.value</h4><p><code>value</code>\u5C5E\u6027\u662F\u76EE\u6807\u5C5E\u6027\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
<span class="token comment">// 123</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">246</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p <span class="token comment">// 246</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_2-writable" tabindex="-1"><a class="header-anchor" href="#_2-writable" aria-hidden="true">#</a> 2.writable</h4><p><code>writable</code>\u5C5E\u6027\u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u51B3\u5B9A\u4E86\u76EE\u6807\u5C5E\u6027\u7684\u503C\uFF08value\uFF09\u662F\u5426\u53EF\u4EE5\u88AB\u6539\u53D8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>a <span class="token comment">// 37</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a <span class="token comment">// 37</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.a</code>\u7684<code>writable</code>\u5C5E\u6027\u662F<code>false</code>\u3002\u7136\u540E\uFF0C\u6539\u53D8<code>obj.a</code>\u7684\u503C\uFF0C\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6548\u679C\u3002</p><p>\u6CE8\u610F\uFF0C\u6B63\u5E38\u6A21\u5F0F\u4E0B\uFF0C\u5BF9<code>writable</code>\u4E3A<code>false</code>\u7684\u5C5E\u6027\u8D4B\u503C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u53EA\u4F1A\u9ED8\u9ED8\u5931\u8D25\u3002\u4F46\u662F\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\u4F1A\u62A5\u9519\uFF0C\u5373\u4F7F\u5BF9<code>a</code>\u5C5E\u6027\u91CD\u65B0\u8D4B\u4E88\u4E00\u4E2A\u540C\u6837\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">37</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: Cannot assign to read only property &#39;a&#39; of object</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u5BF9<code>obj.a</code>\u4EFB\u4F55\u8D4B\u503C\u884C\u4E3A\u90FD\u4F1A\u62A5\u9519\u3002</p><p>\u5982\u679C\u539F\u578B\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u7684<code>writable</code>\u4E3A<code>false</code>\uFF0C\u90A3\u4E48\u5B50\u5BF9\u8C61\u5C06\u65E0\u6CD5\u81EA\u5B9A\u4E49\u8FD9\u4E2A\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>foo <span class="token comment">// &#39;a&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>proto</code>\u662F\u539F\u578B\u5BF9\u8C61\uFF0C\u5B83\u7684foo\u5C5E\u6027\u4E0D\u53EF\u5199\u3002<code>obj</code>\u5BF9\u8C61\u7EE7\u627F<code>proto</code>\uFF0C\u4E5F\u4E0D\u53EF\u4EE5\u518D\u81EA\u5B9A\u4E49\u8FD9\u4E2A\u5C5E\u6027\u4E86\u3002\u5982\u679C\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u8FD9\u6837\u505A\u8FD8\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p><p>\u4F46\u662F\uFF0C\u6709\u4E00\u4E2A\u89C4\u907F\u65B9\u6CD5\uFF0C\u5C31\u662F\u901A\u8FC7\u8986\u76D6\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\uFF0C\u7ED5\u8FC7\u8FD9\u4E2A\u9650\u5236\u3002\u539F\u56E0\u662F\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u539F\u578B\u94FE\u4F1A\u88AB\u5B8C\u5168\u5FFD\u89C6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo <span class="token comment">// &quot;b&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_3-enumerable" tabindex="-1"><a class="header-anchor" href="#_3-enumerable" aria-hidden="true">#</a> 3.enumerable</h4><p><code>enumerable</code>\uFF08\u53EF\u904D\u5386\u6027\uFF09\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u76EE\u6807\u5C5E\u6027\u662F\u5426\u53EF\u904D\u5386\u3002</p><p>JavaScript \u7684\u65E9\u671F\u7248\u672C\uFF0C<code>for...in</code>\u5FAA\u73AF\u662F\u57FA\u4E8Ein\u8FD0\u7B97\u7B26\u7684\u3002\u6211\u4EEC\u77E5\u9053\uFF0C<code>in</code>\u8FD0\u7B97\u7B26\u4E0D\u7BA1\u67D0\u4E2A\u5C5E\u6027\u662F\u5BF9\u8C61\u81EA\u8EAB\u7684\u8FD8\u662F\u7EE7\u627F\u7684\uFF0C\u90FD\u4F1A\u8FD4\u56DEtrue\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token string">&#39;toString&#39;</span> <span class="token keyword">in</span> obj <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>toString</code>\u4E0D\u662F<code>obj</code>\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u4F46\u662Fin\u8FD0\u7B97\u7B26\u4E5F\u8FD4\u56DE<code>true</code>\uFF0C\u8FD9\u5BFC\u81F4\u4E86<code>toString</code>\u5C5E\u6027\u4E5F\u4F1A\u88AB<code>for...in</code>\u5FAA\u73AF\u904D\u5386\u3002</p><p>\u8FD9\u663E\u7136\u4E0D\u592A\u5408\u7406\uFF0C\u540E\u6765\u5C31\u5F15\u5165\u4E86\u201C\u53EF\u904D\u5386\u6027\u201D\u8FD9\u4E2A\u6982\u5FF5\u3002\u53EA\u6709\u53EF\u904D\u5386\u7684\u5C5E\u6027\uFF0C\u624D\u4F1A\u88AB<code>for...in</code>\u5FAA\u73AF\u904D\u5386\uFF0C\u540C\u65F6\u8FD8\u89C4\u5B9A<code>toString</code>\u8FD9\u4E00\u7C7B\u5B9E\u4F8B\u5BF9\u8C61\u7EE7\u627F\u7684\u539F\u751F\u5C5E\u6027\uFF0C\u90FD\u662F\u4E0D\u53EF\u904D\u5386\u7684\uFF0C\u8FD9\u6837\u5C31\u4FDD\u8BC1\u4E86<code>for...in</code>\u5FAA\u73AF\u7684\u53EF\u7528\u6027\u3002</p><p>\u5177\u4F53\u6765\u8BF4\uFF0C\u5982\u679C\u4E00\u4E2A\u5C5E\u6027\u7684<code>enumerable</code>\u4E3A<code>false</code>\uFF0C\u4E0B\u9762\u4E09\u4E2A\u64CD\u4F5C\u4E0D\u4F1A\u53D6\u5230\u8BE5\u5C5E\u6027\u3002</p><ul><li><code>for..in</code>\u5FAA\u73AF</li><li><code>Object.keys</code>\u65B9\u6CD5</li><li><code>JSON.stringify</code>\u65B9\u6CD5</li></ul><p>\u6240\u4EE5\uFF0C<code>enumerable</code>\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\u201C\u79D8\u5BC6\u201D\u5C5E\u6027\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>x <span class="token comment">// 123</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// undefined</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>  <span class="token comment">// []</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// &quot;{}&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.x</code>\u5C5E\u6027\u7684<code>enumerable</code>\u4E3A<code>false</code>\uFF0C\u6240\u4EE5\u4E00\u822C\u7684\u904D\u5386\u64CD\u4F5C\u90FD\u65E0\u6CD5\u83B7\u53D6\u8BE5\u5C5E\u6027\uFF0C\u4F7F\u5F97\u5B83\u6709\u70B9\u50CF\u201C\u79D8\u5BC6\u201D\u5C5E\u6027\uFF0C\u4F46\u4E0D\u662F\u771F\u6B63\u7684\u79C1\u6709\u5C5E\u6027\uFF0C\u8FD8\u662F\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u5B83\u7684\u503C\u3002</p><p>\u6CE8\u610F\uFF0C<code>for...in</code>\u5FAA\u73AF\u5305\u62EC\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C<code>Object.keys</code>\u65B9\u6CD5\u4E0D\u5305\u62EC\u7EE7\u627F\u7684\u5C5E\u6027\u3002\u5982\u679C\u9700\u8981\u83B7\u53D6\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u4E0D\u7BA1\u662F\u5426\u53EF\u904D\u5386\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>Object.getOwnPropertyNames</code>\u65B9\u6CD5\u3002</p><p>\u53E6\u5916\uFF0C<code>JSON.stringify</code>\u65B9\u6CD5\u4F1A\u6392\u9664<code>enumerable</code>\u4E3A<code>false</code>\u7684\u5C5E\u6027\uFF0C\u6709\u65F6\u53EF\u4EE5\u5229\u7528\u8FD9\u4E00\u70B9\u3002\u5982\u679C\u5BF9\u8C61\u7684 <code>JSON</code> \u683C\u5F0F\u8F93\u51FA\u8981\u6392\u9664\u67D0\u4E9B\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E9B\u5C5E\u6027\u7684<code>enumerable</code>\u8BBE\u4E3A<code>false</code>\u3002</p><h4 id="_4-configurable" tabindex="-1"><a class="header-anchor" href="#_4-configurable" aria-hidden="true">#</a> 4.configurable</h4><p><code>configurable</code>(\u53EF\u914D\u7F6E\u6027\uFF09\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u51B3\u5B9A\u4E86\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<code>configurable</code>\u4E3A<code>false</code>\u65F6\uFF0C<code>writable</code>\u3001<code>enumerable</code>\u548C<code>configurable</code>\u90FD\u4E0D\u80FD\u88AB\u4FEE\u6539\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot redefine property: p</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot redefine property: p</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot redefine property: p</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot redefine property: p</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.p</code>\u7684<code>configurable</code>\u5C5E\u6027\u4E3A<code>false</code>\u3002\u7136\u540E\uFF0C\u6539\u52A8<code>writable</code>\u3001<code>enumerable</code>\u3001<code>configurable</code>\uFF0C\u7ED3\u679C\u90FD\u62A5\u9519\u3002</p><p>\u6CE8\u610F\uFF0C<code>writable</code>\u5C5E\u6027\u53EA\u6709\u5728<code>false</code>\u6539\u4E3A<code>true</code>\u65F6\u4F1A\u62A5\u9519\uFF0C<code>true</code>\u6539\u4E3A<code>false</code>\u662F\u5141\u8BB8\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u6210\u529F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>value</code>\u5C5E\u6027\u7684\u60C5\u51B5\u6BD4\u8F83\u7279\u6B8A\u3002\u53EA\u8981<code>writable</code>\u548C<code>configurable</code>\u6709\u4E00\u4E2A\u4E3A<code>true</code>\uFF0C\u5C31\u5141\u8BB8\u6539\u52A8<code>value</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> o1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u6210\u529F</span>

<span class="token keyword">var</span> o2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539\u6210\u529F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u53E6\u5916\uFF0C<code>writable</code>\u4E3A<code>false</code>\u65F6\uFF0C\u76F4\u63A5\u5BF9\u76EE\u6807\u5C5E\u6027\u8D4B\u503C\uFF0C\u4E0D\u62A5\u9519\uFF0C\u4F46\u4E0D\u4F1A\u6210\u529F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  writable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p <span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.p</code>\u7684<code>writable</code>\u4E3A<code>false</code>\uFF0C\u5BF9<code>obj.p</code>\u76F4\u63A5\u8D4B\u503C\u4E0D\u4F1A\u751F\u6548\u3002\u5982\u679C\u662F\u4E25\u683C\u6A21\u5F0F\uFF0C\u8FD8\u4F1A\u62A5\u9519\u3002</p><p>\u53EF\u914D\u7F6E\u6027\u51B3\u5B9A\u4E86\u76EE\u6807\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u5220\u9664\uFF08delete\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> configurable<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> configurable<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p1 <span class="token comment">// true</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p2 <span class="token comment">// false</span>

obj<span class="token punctuation">.</span>p1 <span class="token comment">// undefined</span>
obj<span class="token punctuation">.</span>p2 <span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>obj.p1</code>\u7684<code>configurable</code>\u662F<code>true</code>\uFF0C\u6240\u4EE5\u53EF\u4EE5\u88AB\u5220\u9664\uFF0C<code>obj.p2</code>\u5C31\u65E0\u6CD5\u5220\u9664\u3002</p><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/JavaScript/\u5185\u7F6E\u5BF9\u8C61.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var _____html$5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$8]]);
var _____html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$5
});
const _sfc_main$l = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26</h1><h2 id="_1-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 1.\u6570\u636E\u7C7B\u578B</h2><p>JavaScript\u516D\u79CD\u6570\u636E\u7C7B\u578B\uFF08\u6B64\u6587\u6863\u4E0D\u6D89\u53CAES6\uFF09</p><ul><li>\u6570\u503C\uFF08Number\uFF09\uFF1A \u6574\u6570\u548C\u5C0F\u6570\uFF08\u6BD4\u59821\u548C3.14\uFF09\u3002</li><li>\u5B57\u7B26\u4E32\uFF08String\uFF09\uFF1A \u6587\u672C\uFF08\u5982<code>&#39;Hello World&#39;</code>\uFF09\u3002</li><li>\u5E03\u5C14\u503C\uFF08boolean\uFF09\uFF1A \u8868\u793A\u771F\u5047\u7684\u7279\u6B8A\u503C\uFF0C\u5373\u771F\uFF08<code>true</code>\uFF09\u548C\u5047(<code>false</code>)</li><li><code>undefined</code> \uFF1A \u8868\u793A\u672A\u5B9A\u4E49\u6216\u4E0D\u5B58\u5728\uFF0C\u53EF\u7406\u89E3\u4E3A\u76EE\u524D\u6CA1\u6709\u5B9A\u4E49\uFF0C\u6240\u4EE5\u6B64\u5904\u6682\u65F6\u6CA1\u6709\u4EFB\u4F55\u503C\u3002</li><li><code>null</code> \uFF1A \u8868\u793A\u7A7A\u503C\uFF0C\u5373\u6B64\u5904\u7684\u503C\u4E3A\u7A7A\u3002</li><li>\u5BF9\u8C61\uFF08object\uFF09\uFF1A \u5404\u79CD\u503C\u7EC4\u6210\u7684\u96C6\u5408\u3002</li></ul><p>\u5BF9\u8C61\u662F\u6700\u590D\u6742\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u53C8\u53EF\u4EE5\u5206\u6210\u4E09\u4E2A\u5B50\u7C7B\u578B\u3002</p><ul><li>\u72ED\u4E49\u7684\u5BF9\u8C61\uFF08object\uFF09</li><li>\u6570\u7EC4\uFF08array\uFF09</li><li>\u51FD\u6570\uFF08function\uFF09</li></ul><h3 id="null\u548Cundefined" tabindex="-1"><a class="header-anchor" href="#null\u548Cundefined" aria-hidden="true">#</a> null\u548Cundefined</h3><p>\u4E24\u8005\u90FD\u53EF\u4EE5\u8868\u793A\u201C\u6CA1\u6709\u201D\uFF0C\u542B\u4E49\u975E\u5E38\u76F8\u4F3C\uFF0C\u8BED\u6CD5\u4E0A\u51E0\u4E4E\u6CA1\u6709\u533A\u522B\u3002</p><table><thead><tr><th>\u533A\u522B</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">null</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">undefined</th></tr></thead><tbody><tr><td>\u6570\u636E\u7C7B\u578B\u4E0D\u4E00\u6837</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(typeof null)<br>//object</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(typeof undefined)<br>//undefined</td></tr><tr><td>null\u548Cundefined\u4E24\u8005\u76F8\u7B49\uFF0C\u4F46\u662F\u5F53\u4E24\u8005\u505A\u5168\u7B49\u6BD4\u8F83\u65F6\u4E24\u8005\u53C8\u4E0D\u7B49\u3002\uFF08\u56E0\u4E3A\u4ED6\u4EEC\u7684\u6570\u636E\u7C7B\u578B\u4E0D\u4E00\u6837\uFF09</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(null==undefined)<br>//ture</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(null===undefined)<br>//false</td></tr><tr><td>\u8F6C\u5316\u6210\u6570\u5B57\u4E0D\u540C</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(Number(null))<br>//0</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(Number(undefined))<br>//NaN</td></tr><tr><td>null\u4EE3\u8868\u201C\u7A7A\u201D\uFF0C\u4EE3\u8868\u7A7A\u6307\u9488\uFF1Bundefined\u662F\u5B9A\u4E49\u4E86\u6CA1\u6709\u8D4B\u503C<br>var a;</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">console.log(a);<br>//undefined</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "left" })}">var b=null;console.log(b);<br>//null</td></tr></tbody></table><p>\u6CE8\uFF1Aconsole.log()\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Ctypeof\u83B7\u53D6\u6570\u636E\u7C7B\u578B\uFF0C\u5728\u8FD9\u91CC\u4E0D\u6DF1\u7A76\uFF0C\u4E3A\u540E\u7EED\u5185\u5BB9</p><h3 id="\u5E03\u5C14\u503C-boolean" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u503C-boolean" aria-hidden="true">#</a> \u5E03\u5C14\u503C\uFF08boolean\uFF09</h3><p>\u4E00\u822C\u4E0B\u5217\u8FD0\u7B97\u7B26\u4F1A\u8FD4\u56DE\u5E03\u5C14\u503C(\u5E03\u5C14\u503C\u5F80\u5F80\u7528\u4E8E\u7A0B\u5E8F\u6D41\u7A0B\u7684\u63A7\u5236)\uFF1A</p><ul><li>\u524D\u7F6E\u903B\u8F91\u8FD0\u7B97\u7B26\uFF1A<code>!</code>(Not)</li><li>\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF1A<code>===</code>\uFF0C<code>!==</code>\uFF0C<code>==</code>\uFF0C<code>!=</code></li><li>\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF1A<code>&gt;</code>\uFF0C<code>&gt;=</code>\uFF0C<code>&lt;</code>\uFF0C<code>&lt;=</code></li></ul><p>\u5982\u679C\u67D0\u4E2A\u4F4D\u7F6E\u5E94\u8BE5\u662F\u5E03\u5C14\u503C\uFF0CJavaScript\u4F1A\u5C06\u8BE5\u4F4D\u7F6E\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF0C\u89C4\u5219\u9664\u4E86\u4E0B\u9762\u516D\u4E2A\u503C\u88AB\u8F6C\u4E3Afalse\uFF0C\u5176\u4ED6\u503C\u90FD\u89C6\u4E3Atrue</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>Nan</code></li><li><code>&quot;&quot;</code>\u6216<code>&#39;&#39;</code>(\u7A7A\u5B57\u7B26\u4E32)</li></ul><h3 id="\u6570\u503C-number" tabindex="-1"><a class="header-anchor" href="#\u6570\u503C-number" aria-hidden="true">#</a> \u6570\u503C\uFF08Number\uFF09</h3><p>JavaScript \u5185\u90E8\uFF0C\u6240\u6709\u6570\u5B57\u90FD\u662F\u4EE564\u4F4D\u6D6E\u70B9\u6570\u5F62\u5F0F\u50A8\u5B58\uFF0C\u7531\u4E8E\u6D6E\u70B9\u6570\u4E0D\u662F\u7CBE\u786E\u7684\u503C\uFF0C\u6240\u4EE5\u6D89\u53CA\u5C0F\u6570\u7684\u6BD4\u8F83\u548C\u8FD0\u7B97\u8981\u7279\u522B\u5C0F\u5FC3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span>
<span class="token comment">// false</span>

<span class="token number">0.3</span> <span class="token operator">/</span> <span class="token number">0.1</span>
<span class="token comment">// 2.9999999999999996</span>

<span class="token punctuation">(</span><span class="token number">0.3</span> <span class="token operator">-</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token punctuation">(</span><span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.1</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr><ol><li>\u5982\u679C\u4E00\u4E2A\u6570\u5927\u4E8E\u7B49\u4E8E2\u76841024\u6B21\u65B9\uFF0C\u90A3\u4E48\u5C31\u4F1A\u53D1\u751F\u201C\u6B63\u5411\u6EA2\u51FA\u201D</li><li>\u5982\u679C\u4E00\u4E2A\u6570\u5C0F\u4E8E\u7B49\u4E8E2\u7684-1075\u6B21\u65B9\uFF08\u6307\u6570\u90E8\u5206\u6700\u5C0F\u503C-1023\uFF0C\u518D\u52A0\u4E0A\u5C0F\u6570\u90E8\u5206\u768452\u4F4D\uFF09\uFF0C\u90A3\u4E48\u5C31\u4F1A\u53D1\u751F\u4E3A\u201C\u8D1F\u5411\u6EA2\u51FA\u201D</li><li>JavaScript \u63D0\u4F9BNumber\u5BF9\u8C61\u7684MAX_VALUE\u548CMIN_VALUE\u5C5E\u6027\uFF0C\u8FD4\u56DE\u53EF\u4EE5\u8868\u793A\u7684\u5177\u4F53\u7684\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span> <span class="token comment">// Infinity</span>
Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1075</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token comment">// 1.7976931348623157e+308</span>
Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token comment">// 5e-324</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><h4>JavaScript \u8FD8\u63D0\u4F9B\u4E86\u51E0\u4E2A\u7279\u6B8A\u7684\u6570\u503C\u3002</h4><ul><li>\u6B63\u96F6\u548C\u8D1F\u96F6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//JavaScript \u5185\u90E8\u5B58\u57282\u4E2A0\uFF1A\u4E00\u4E2A\u662F+0\uFF0C\u4E00\u4E2A\u662F-0\uFF0C\u533A\u522B\u662F64\u4F4D\u6D6E\u70B9\u6570\u8868\u793A\u6CD5\u7684\u7B26\u53F7\u4F4D\u4E0D\u540C\u3002</span>
<span class="token comment">//64\u4F4D\u6D6E\u70B9\u6570\u8868\u793A\u6CD5\uFF08\u57FA\u7840\u5B66\u4E60\u4E0D\u7528\u6DF1\u7A76\uFF09</span>
<span class="token operator">-</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">+</span><span class="token number">0</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">+</span><span class="token number">0</span> <span class="token comment">// true</span>
<span class="token comment">//\u5B83\u4EEC\u662F\u7B49\u4EF7\u7684</span>
<span class="token operator">+</span><span class="token number">0</span> <span class="token comment">// 0</span>
<span class="token operator">-</span><span class="token number">0</span> <span class="token comment">// 0</span>
<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;0&#39;</span>
<span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;0&#39;</span>
<span class="token comment">//\u51E0\u4E4E\u6240\u6709\u573A\u5408\uFF0C\u6B63\u96F6\u548C\u8D1F\u96F6\u90FD\u4F1A\u88AB\u5F53\u4F5C\u6B63\u5E38\u76840\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>NaN</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">5</span> <span class="token operator">-</span> <span class="token string">&#39;x&#39;</span> <span class="token comment">// NaN</span>
<span class="token comment">//\u8868\u793A\u201C\u975E\u6570\u5B57\u201D\uFF08Not a Number\uFF09\uFF0C\u4E3B\u8981\u51FA\u73B0\u5728\u5C06\u5B57\u7B26\u4E32\u89E3\u6790\u6210\u6570\u5B57\u51FA\u9519\u7684\u573A\u5408\u3002</span>
<span class="token comment">// \u8FD8\u6709\u4E00\u4E9B\u6570\u5B66\u51FD\u6570\u7684\u8FD0\u7B97\u7ED3\u679C\u4F1A\u51FA\u73B0NaN</span>
Math<span class="token punctuation">.</span><span class="token function">acos</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
<span class="token number">0</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// NaN</span>

<span class="token comment">// \u6CE8\u610F\u4E0B\u9762 </span>
<span class="token keyword">typeof</span> <span class="token number">NaN</span> <span class="token comment">// &#39;number&#39;</span>
<span class="token comment">//\u5B83\u7684\u6570\u636E\u7C7B\u578B\u4F9D\u7136\u5C5E\u4E8ENumber</span>

<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token comment">// NaN\u4E0D\u7B49\u4E8E\u4EFB\u4F55\u503C\uFF0C\u5305\u62EC\u5B83\u672C\u8EAB\u3002</span>

<span class="token comment">//\u4E00\u4E9B\u6570\u7EC4\u65B9\u6CD5\u7684\u4E25\u683C\u76F8\u7B49\u548C\u8FD0\u7B97\u7B49\u60C5\u51B5\u4E0D\u9002\u7528</span>
<span class="token comment">//NaN\u548C\u4EFB\u4F55\u6570\u8FD0\u7B97\u90FD\u662FNaN</span>
<span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>Infinity</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Infinity\u8868\u793A\u201C\u65E0\u7A77\u201D,\u4E00\u822C\u4E24\u79CD\u573A\u666F</span>
<span class="token comment">// \u573A\u666F\u4E00\uFF1A\u6570\u503C\u592A\u5927\u6216\u6570\u503C\u592A\u5C0F\uFF0C\u6CE8\u610F\uFF0C\u592A\u5927\u548C\u592A\u5C0F\u6709\u6B63\u8D1F\u4E4B\u5206</span>
Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
<span class="token comment">// Infinity</span>

<span class="token comment">// \u573A\u666F\u4E8C\uFF1A\u975E0\u6570\u503C\u9664\u4EE50</span>
<span class="token number">0</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// NaN</span>
<span class="token number">1</span> <span class="token operator">/</span> <span class="token number">0</span> <span class="token comment">// Infinity</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>parseInt</code>\u65B9\u6CD5\u7528\u4E8E\u5C06\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6574\u6570\u3002</li><li><code>parseFloat</code>\u65B9\u6CD5\u7528\u4E8E\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6D6E\u70B9\u6570\u3002</li><li><code>isNaN</code>\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u4E3A<code>NaN</code>\u3002</li><li><code>isFinite</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u67D0\u4E2A\u503C\u662F\u5426\u4E3A\u6B63\u5E38\u7684\u6570\u503C\u3002</li></ul><h3 id="\u5B57\u7B26-string" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26-string" aria-hidden="true">#</a> \u5B57\u7B26\uFF08String\uFF09</h3><p>\u5B57\u7B26\u4E32\u5C31\u662F\u96F6\u4E2A\u6216\u591A\u4E2A\u6392\u5728\u4E00\u8D77\u7684\u5B57\u7B26\uFF0C\u653E\u5728\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u4E4B\u4E2D\u3002</p><p>\u4E0B\u9762\u4E3A\u4E00\u4E9B\u7279\u6B8A\u7528\u6CD5\uFF1A</p><ol><li>\u8F6C\u4E49\uFF1A\u53CD\u659C\u6760\uFF08\\\uFF09\u5728\u5B57\u7B26\u4E32\u5185\u6709\u7279\u6B8A\u542B\u4E49</li></ol><ul><li><code>\\0</code> \uFF1Anull\uFF08<code>\\u0000</code>\uFF09</li><li><code>\\b</code> \uFF1A\u540E\u9000\u952E\uFF08<code>\\u0008</code>\uFF09</li><li><code>\\f</code> \uFF1A\u6362\u9875\u7B26\uFF08<code>\\u000C</code>\uFF09</li><li><code>\\n</code> \uFF1A\u6362\u884C\u7B26\uFF08<code>\\u000A</code>\uFF09</li><li><code>\\r</code> \uFF1A\u56DE\u8F66\u952E\uFF08<code>\\u000D</code>\uFF09</li><li><code>\\t</code> \uFF1A\u5236\u8868\u7B26\uFF08<code>\\u0009</code>\uFF09</li><li><code>\\v</code> \uFF1A\u5782\u76F4\u5236\u8868\u7B26\uFF08<code>\\u000B</code>\uFF09</li><li><code>\\&#39;</code> \uFF1A\u5355\u5F15\u53F7\uFF08<code>\\u0027</code>\uFF09</li><li><code>\\&quot;</code> \uFF1A\u53CC\u5F15\u53F7\uFF08<code>\\u0022</code>\uFF09</li><li><code>\\\\</code> \uFF1A\u53CD\u659C\u6760\uFF08<code>\\u005C</code>\uFF09</li></ul><ol start="2"><li>\u5B57\u7B26\u4E32\u53EF\u4EE5\u88AB\u89C6\u4E3A\u5B57\u7B26\u6570\u7EC4</li></ol><p>\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u7684\u65B9\u62EC\u53F7\u8FD0\u7B97\u7B26\uFF0C\u7528\u6765\u8FD4\u56DE\u67D0\u4E2A\u4F4D\u7F6E\u7684\u5B57\u7B26\uFF08\u4F4D\u7F6E\u7F16\u53F7\u4ECE0\u5F00\u59CB\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// &quot;h&quot;</span>
s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// &quot;e&quot;</span>
s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment">// &quot;o&quot;</span>

<span class="token comment">// \u76F4\u63A5\u5BF9\u5B57\u7B26\u4E32\u4F7F\u7528\u65B9\u62EC\u53F7\u8FD0\u7B97\u7B26</span>
<span class="token string">&#39;hello&#39;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// &quot;e&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>length \u5C5E\u6027</li></ol><p>length\u5C5E\u6027\u8FD4\u56DE\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u8BE5\u5C5E\u6027\u4E5F\u662F\u65E0\u6CD5\u6539\u53D8\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;abc&#39;</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>Base64 \u8F6C\u7801</li></ol><p>JavaScript \u539F\u751F\u63D0\u4F9B\u4E24\u4E2A Base64 \u76F8\u5173\u7684\u65B9\u6CD5\u3002</p><ul><li>btoa()\uFF1A\u4EFB\u610F\u503C\u8F6C\u4E3A Base64 \u7F16\u7801</li><li>atob()\uFF1ABase64 \u7F16\u7801\u8F6C\u4E3A\u539F\u6765\u7684\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">;</span>
<span class="token function">btoa</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token comment">// &quot;SGVsbG8gV29ybGQh&quot;</span>
<span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">&#39;SGVsbG8gV29ybGQh&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Hello World!&quot;</span>
<span class="token comment">//\u6CE8\u610F\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E0D\u9002\u5408\u975E ASCII \u7801\u7684\u5B57\u7B26\uFF0C\u4F1A\u62A5\u9519\u3002</span>
<span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u5BF9\u8C61\uFF08object\uFF09\u662F JavaScript \u8BED\u8A00\u7684\u6838\u5FC3\u6982\u5FF5\uFF0C\u4E5F\u662F\u6700\u91CD\u8981\u7684\u6570\u636E\u7C7B\u578B\u3002\u4EC0\u4E48\u662F\u5BF9\u8C61\uFF1F\u7B80\u5355\u8BF4\uFF0C\u5BF9\u8C61\u5C31\u662F\u4E00\u7EC4\u201C\u952E\u503C\u5BF9\u201D\uFF08key-value\uFF09\u7684\u96C6\u5408\uFF0C\u662F\u4E00\u79CD\u65E0\u5E8F\u7684\u590D\u5408\u6570\u636E\u96C6\u5408\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
  bar<span class="token operator">:</span> <span class="token string">&#39;World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//\u5176\u4E2Dfoo\u662F\u201C\u952E\u540D\u201D\uFF08\u6210\u5458\u7684\u540D\u79F0\uFF09\uFF0C\u5B57\u7B26\u4E32Hello\u662F\u201C\u952E\u503C\u201D\uFF08\u6210\u5458\u7684\u503C\uFF09\u3002</span>
<span class="token comment">//\u6CE8\u610F\uFF1A\u5982\u679C\u952E\u540D\u662F\u6570\u503C\uFF0C\u4F1A\u88AB\u81EA\u52A8\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002</span>
<span class="token comment">//\u4F46\u5982\u679C\u952E\u540D\u4E0D\u7B26\u5408\u6807\u8BC6\u540D\u7684\u6761\u4EF6\u6E7F\u4F1A\u62A5\u9519\u3002</span>
<span class="token comment">//\u6240\u4EE5\u4E00\u822C\u53EF\u4EE5\u5199\u6210\u8FD9\u6837\uFF1A</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;foo&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol><li>\u5BF9\u8C61\u7684\u5F15\u7528</li></ol><p>\u5982\u679C\u4E0D\u540C\u7684\u53D8\u91CF\u540D\u6307\u5411\u540C\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5B83\u4EEC\u90FD\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u3002\u4FEE\u6539\u5176\u4E2D\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u6240\u6709\u53D8\u91CF\u3002(\u6DF1\u6D45\u62F7\u8D1D)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> o1<span class="token punctuation">;</span>

o1<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
o2<span class="token punctuation">.</span>a <span class="token comment">// 1</span>

o2<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
o1<span class="token punctuation">.</span>b <span class="token comment">// 2</span>
<span class="token comment">//\u6B64\u65F6\uFF0C\u5982\u679C\u53D6\u6D88\u67D0\u4E00\u4E2A\u53D8\u91CF\u5BF9\u4E8E\u539F\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u53E6\u4E00\u4E2A\u53D8\u91CF\u3002</span>
<span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> o1<span class="token punctuation">;</span>

o1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
o2 <span class="token comment">// {}</span>
<span class="token comment">//\u4F46\u662F\u8FD9\u79CD\u5F15\u7528\u53EA\u5C40\u9650\u4E8E\u5BF9\u8C61</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> x<span class="token punctuation">;</span>

x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
y <span class="token comment">// 1</span>
<span class="token comment">//\u4E0A\u9762\u8868\u793Ay\u548Cx\u5E76\u4E0D\u662F\u6307\u5411\u540C\u4E00\u4E2A\u5185\u5B58\u5730\u5740\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2"><li>\u8868\u8FBE\u5F0F\u8FD8\u662F\u8BED\u53E5\uFF1F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8BF7\u95EE\uFF1A\u4E0B\u9762\u662F\u8BED\u53E5\u8FD8\u662F\u8868\u8FBE\u5F0F\uFF1A</span>
<span class="token comment">//A.\u8BED\u53E5\uFF08\u4EE3\u7801\u533A\u5757\uFF0C\u91CC\u9762\u6709\u4E00\u4E2A\u6807\u7B7Efoo\uFF09</span>
<span class="token comment">//B.\u8868\u8FBE\u5F0F\uFF08\u8868\u793A\u4E00\u4E2A\u5305\u542Bfoo\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u6307\u5411\u8868\u8FBE\u5F0F123\u3002\uFF09\uFF1F</span>
<span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span>

<span class="token comment">//JavaScript \u5F15\u64CE\u7684\u505A\u6CD5\u662F\uFF1A\u4E00\u5F8B\u89E3\u91CA\u4E3A\u4EE3\u7801\u5757\u3002</span>
<span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token comment">// 123</span>

<span class="token comment">//\u5982\u679C\u8981\u89E3\u91CA\u4E3A\u5BF9\u8C61\uFF0C\u6700\u597D\u5728\u5927\u62EC\u53F7\u524D\u52A0\u4E0A\u5706\u62EC\u53F7</span>
<span class="token comment">//\u4F46\u8FD9\u6837\u505A\u540E\u8981\u786E\u4FDD\uFF08\uFF09\u91CC\u53EA\u80FD\u662F\u8868\u8FBE\u5F0F\uFF0C\u4E0D\u7136\u62A5\u9519</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u6B63\u786E</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// \u62A5\u9519</span>

<span class="token comment">//\u8FD9\u79CD\u5DEE\u5F02\u5728eval\u8BED\u53E5\uFF08\u4F5C\u7528\u662F\u5BF9\u5B57\u7B26\u4E32\u6C42\u503C\uFF09\u4E2D\u53CD\u6620\u5F97\u6700\u660E\u663E\u3002</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;{foo: 123}&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;({foo: 123})&#39;</span><span class="token punctuation">)</span> <span class="token comment">// {foo: 123}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3"><li>\u5C5E\u6027\u7684\u8BFB\u53D6</li></ol><p>\u8BFB\u53D6\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528\u70B9\u8FD0\u7B97\u7B26\uFF0C\u8FD8\u6709\u4E00\u79CD\u662F\u4F7F\u7528\u65B9\u62EC\u53F7\u8FD0\u7B97\u7B26\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p <span class="token comment">// &quot;Hello World&quot;</span>
obj<span class="token punctuation">[</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &quot;Hello World&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>\u5C5E\u6027\u7684\u8D4B\u503C</li></ol><p>\u70B9\u8FD0\u7B97\u7B26\u548C\u65B9\u62EC\u53F7\u8FD0\u7B97\u7B26\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u503C\uFF0C\u8FD8\u53EF\u4EE5\u7528\u6765\u8D4B\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5"><li>\u5C5E\u6027\u7684\u67E5\u770B</li></ol><p>\u67E5\u770B\u4E00\u4E2A\u5BF9\u8C61\u672C\u8EAB\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>Object.keys</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  key1<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  key2<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;key1&#39;, &#39;key2&#39;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="6"><li>\u5C5E\u6027\u7684\u5220\u9664\uFF1Adelete \u547D\u4EE4</li></ol><p><code>delete</code>\u547D\u4EE4\u7528\u4E8E\u5220\u9664\u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u5220\u9664\u6210\u529F\u540E\u8FD4\u56DE<code>true</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> p<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// [&quot;p&quot;]</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p <span class="token comment">// true</span>
obj<span class="token punctuation">.</span>p <span class="token comment">// undefined</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// []</span>
<span class="token comment">//\u6CE8\u610F\uFF0C\u5220\u9664\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\uFF0Cdelete\u4E0D\u62A5\u9519\uFF0C\u800C\u4E14\u8FD4\u56DEtrue\u3002</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p <span class="token comment">// true</span>
<span class="token comment">//\u53EA\u6709\u4E00\u79CD\u60C5\u51B5\uFF0Cdelete\u547D\u4EE4\u4F1A\u8FD4\u56DEfalse\uFF0C\u90A3\u5C31\u662F\u8BE5\u5C5E\u6027\u5B58\u5728\uFF0C\u4E14\u4E0D\u5F97\u5220\u9664\u3002</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>p <span class="token comment">// 123</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>p <span class="token comment">// false</span>
<span class="token comment">//\u5173\u4E8EObject.defineProperty\u65B9\u6CD5\u522B\u6DF1\u7A76\uFF0C\u540E\u7EED\u6709</span>

<span class="token comment">//\u540C\u65F6delete\u65E0\u6CD5\u5220\u9664\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C\u4F46\u6267\u884C\u5220\u9664\u540E\u4F9D\u7136\u8FD4\u56DEtrue</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol start="7"><li>\u5C5E\u6027\u662F\u5426\u5B58\u5728\uFF1A<code>in </code>\u8FD0\u7B97\u7B26</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> p<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token string">&#39;p&#39;</span> <span class="token keyword">in</span> obj <span class="token comment">// true</span>
<span class="token string">&#39;toString&#39;</span> <span class="token keyword">in</span> obj <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="8"><li>\u5C5E\u6027\u7684\u904D\u5386\uFF1Afor...in \u5FAA\u73AF</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u952E\u540D\uFF1A&#39;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u952E\u503C\uFF1A&#39;</span><span class="token punctuation">,</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u952E\u540D\uFF1A a</span>
<span class="token comment">// \u952E\u503C\uFF1A 1</span>
<span class="token comment">// \u952E\u540D\uFF1A b</span>
<span class="token comment">// \u952E\u503C\uFF1A 2</span>
<span class="token comment">// \u952E\u540D\uFF1A c</span>
<span class="token comment">// \u952E\u503C\uFF1A 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>for...in</code>\u5FAA\u73AF\u6709\u4E24\u4E2A\u4F7F\u7528\u6CE8\u610F\u70B9\u3002</p><ul><li>\u5B83\u904D\u5386\u7684\u662F\u5BF9\u8C61\u6240\u6709\u53EF\u904D\u5386\uFF08enumerable\uFF09\u7684\u5C5E\u6027\uFF0C\u4F1A\u8DF3\u8FC7\u4E0D\u53EF\u904D\u5386\u7684\u5C5E\u6027\u3002</li><li>\u5B83\u4E0D\u4EC5\u904D\u5386\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u8FD8\u904D\u5386\u7EE7\u627F\u7684\u5C5E\u6027\u3002</li></ul><ol start="9"><li>with \u8BED\u53E5</li></ol><p>\u5B83\u7684\u4F5C\u7528\u662F\u64CD\u4F5C\u540C\u4E00\u4E2A\u5BF9\u8C61\u7684\u591A\u4E2A\u5C5E\u6027\u65F6\uFF0C\u63D0\u4F9B\u4E00\u4E9B\u4E66\u5199\u7684\u65B9\u4FBF\u3002</p><p><code>with</code>\u8BED\u53E5\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>\u5BF9\u8C61<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  \u8BED\u53E5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u4F8B\u5B50</span>
<span class="token comment">// \u4F8B\u4E00</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  p1<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  p2<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  p2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
obj<span class="token punctuation">.</span>p1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>p2 <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F8B\u4E8C</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>links<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u6CE8\u610F\uFF0C\u5982\u679C<code>with</code>\u533A\u5757\u5185\u90E8\u6709\u53D8\u91CF\u7684\u8D4B\u503C\u64CD\u4F5C\uFF0C\u5FC5\u987B\u662F\u5F53\u524D\u5BF9\u8C61\u5DF2\u7ECF\u5B58\u5728\u7684\u5C5E\u6027\uFF0C<code>\u5426\u5219\u4F1A\u521B\u9020\u4E00\u4E2A\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u5168\u5C40\u53D8\u91CF</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F3A\u70C8\u5EFA\u8BAE\u4E0D\u8981\u4F7F\u7528\`with\`\u8BED\u53E5\uFF0C\u53EF\u4EE5\u8003\u8651\u7528\u4E00\u4E2A\u4E34\u65F6\u53D8\u91CF\u4EE3\u66FF\`with\`\u3002</span>

<span class="token keyword">with</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>obj2<span class="token punctuation">.</span>obj3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">+</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u5199\u6210</span>
<span class="token keyword">var</span> temp <span class="token operator">=</span> obj1<span class="token punctuation">.</span>obj2<span class="token punctuation">.</span>obj3<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>temp<span class="token punctuation">.</span>p1 <span class="token operator">+</span> temp<span class="token punctuation">.</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><ol><li>JavaScript \u6709\u4E09\u79CD\u58F0\u660E\u51FD\u6570\u7684\u65B9\u6CD5\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \uFF081\uFF09function \u547D\u4EE4</span>
<span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \uFF082\uFF09\u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">var</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\uFF083\uFF09Function \u6784\u9020\u51FD\u6570\u2014\u2014\u8FD9\u79CD\u65B9\u5F0F\u4F7F\u7528\u6BD4\u8F83\u5C11</span>
<span class="token keyword">var</span> <span class="token function-variable function">print</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

x
<span class="token comment">// ReferenceError: x is not defined</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// function</span>

<span class="token comment">// \u51FD\u6570\u7684\u91CD\u590D\u58F0\u660E</span>
<span class="token comment">// \u5982\u679C\u540C\u4E00\u4E2A\u51FD\u6570\u88AB\u591A\u6B21\u58F0\u660E\uFF0C\u540E\u9762\u7684\u58F0\u660E\u5C31\u4F1A\u8986\u76D6\u524D\u9762\u7684\u58F0\u660E\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ol start="2"><li>\u7B2C\u4E00\u7B49\u516C\u6C11</li></ol><p>\u7531\u4E8E\u51FD\u6570\u4E0E\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u5730\u4F4D\u5E73\u7B49\uFF0C\u6240\u4EE5\u5728 JavaScript \u8BED\u8A00\u4E2D\u53C8\u79F0\u51FD\u6570\u4E3A\u7B2C\u4E00\u7B49\u516C\u6C11\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u53EF\u4EE5\u628A\u51FD\u6570\u8D4B\u503C\u7ED9\u53D8\u91CF\u548C\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1B</span>
<span class="token comment">//\u4E5F\u53EF\u4EE5\u5F53\u4F5C\u53C2\u6570\u4F20\u5165\u5176\u4ED6\u51FD\u6570\uFF0C\u6216\u8005\u4F5C\u4E3A\u51FD\u6570\u7684\u7ED3\u679C\u8FD4\u56DE\u3002</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C06\u51FD\u6570\u8D4B\u503C\u7ED9\u4E00\u4E2A\u53D8\u91CF</span>
<span class="token keyword">var</span> operator <span class="token operator">=</span> add<span class="token punctuation">;</span>

<span class="token comment">// \u5C06\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u548C\u8FD4\u56DE\u503C</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter">op</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> op<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">a</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ol start="3"><li>\u51FD\u6570\u540D\u7684\u63D0\u5347</li></ol><p>\u7531\u4E8E\u201C\u53D8\u91CF\u63D0\u5347\u201D\uFF0C\u51FD\u6570f\u88AB\u63D0\u5347\u5230\u4E86\u4EE3\u7801\u5934\u90E8\uFF0C\u4E5F\u5C31\u662F\u5728\u8C03\u7528\u4E4B\u524D\u5DF2\u7ECF\u58F0\u660E\u4E86\u3002\u4F46\u662F\uFF0C\u5982\u679C\u91C7\u7528\u8D4B\u503C\u8BED\u53E5\u5B9A\u4E49\u51FD\u6570\uFF0CJavaScript \u5C31\u4F1A\u62A5\u9519\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: undefined is not a function</span>
<span class="token comment">//\u4E0A\u9762\u7684\u4EE3\u7801\u7B49\u540C\u4E8E\u4E0B\u9762\u7684\u5F62\u5F0F\u3002</span>
<span class="token keyword">var</span> f<span class="token punctuation">;</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4"><li>\u51FD\u6570\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</li></ol><table><thead><tr><th>\u5C5E\u6027</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>name</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u51FD\u6570\u7684<code>name</code>\u5C5E\u6027\u8FD4\u56DE\u51FD\u6570\u7684\u540D\u5B57\u3002</td></tr><tr><td><code>length</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u51FD\u6570\u7684<code>length</code>\u5C5E\u6027\u8FD4\u56DE\u51FD\u6570\u9884\u671F\u4F20\u5165\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u5373\u51FD\u6570\u5B9A\u4E49\u4E4B\u4E2D\u7684\u53C2\u6570\u4E2A\u6570\u3002</td></tr><tr><td><code>toString()</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u51FD\u6570\u7684<code>toString()</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5185\u5BB9\u662F\u51FD\u6570\u7684\u6E90\u7801\u3002</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">myName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
f3<span class="token punctuation">.</span>name <span class="token comment">// &#39;myName&#39;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
f<span class="token punctuation">.</span>length <span class="token comment">// 2</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

f<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// function f() {</span>
<span class="token comment">//  a();</span>
<span class="token comment">//  b();</span>
<span class="token comment">//  c();</span>
<span class="token comment">// }</span>
<span class="token comment">//\u5BF9\u4E8E\u90A3\u4E9B\u539F\u751F\u7684\u51FD\u6570\uFF0CtoString()\u65B9\u6CD5\u8FD4\u56DEfunction (){[native code]}\u3002</span>
Math<span class="token punctuation">.</span>sqrt<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;function sqrt() { [native code] }&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="5"><li>\u51FD\u6570\u4F5C\u7528\u57DF</li></ol><p>\u4F5C\u7528\u57DF\uFF08scope\uFF09\u6307\u7684\u662F\u53D8\u91CF\u5B58\u5728\u7684\u8303\u56F4\u3002\u5728 ES5 \u7684\u89C4\u8303\u4E2D\uFF0CJavaScript \u53EA\u6709\u4E24\u79CD\u4F5C\u7528\u57DF\uFF1A\u4E00\u79CD\u662F\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CF\u5728\u6574\u4E2A\u7A0B\u5E8F\u4E2D\u4E00\u76F4\u5B58\u5728\uFF0C\u6240\u6709\u5730\u65B9\u90FD\u53EF\u4EE5\u8BFB\u53D6\uFF1B\u53E6\u4E00\u79CD\u662F\u51FD\u6570\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CF\u53EA\u5728\u51FD\u6570\u5185\u90E8\u5B58\u5728\u3002(\u6CE8\u610F\uFF1AES6 \u53C8\u65B0\u589E\u4E86\u5757\u7EA7\u4F5C\u7528\u57DF)</p><ol start="6"><li>arguments \u5BF9\u8C61</li></ol><p><code>arguments</code>\u5BF9\u8C61\u5305\u542B\u4E86\u51FD\u6570\u8FD0\u884C\u65F6\u7684\u6240\u6709\u53C2\u6570\uFF0C<code>arguments[0]</code>\u5C31\u662F\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C<code>arguments[1]</code>\u5C31\u662F\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002\u8FD9\u4E2A\u5BF9\u8C61\u53EA\u6709\u5728\u51FD\u6570\u4F53\u5185\u90E8\uFF0C\u624D\u53EF\u4EE5\u4F7F\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">one</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="7"><li>\u95ED\u5305</li></ol><p>\u7406\u89E3\u95ED\u5305\uFF0C\u9996\u5148\u5FC5\u987B\u7406\u89E3\u53D8\u91CF\u4F5C\u7528\u57DF\u3002\u524D\u9762\u63D0\u5230\uFF0CJavaScript \u6709\u4E24\u79CD\u4F5C\u7528\u57DF\uFF1A\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u51FD\u6570\u4F5C\u7528\u57DF\u3002\u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u76F4\u63A5\u8BFB\u53D6\u5168\u5C40\u53D8\u91CF\u3002</p> \u5728\u672C\u8D28\u4E0A\uFF0C\u95ED\u5305\u5C31\u662F\u5C06\u51FD\u6570\u5185\u90E8\u548C\u51FD\u6570\u5916\u90E8\u8FDE\u63A5\u8D77\u6765\u7684\u4E00\u5EA7\u6865\u6881\u3002 <div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
\u3000\u3000console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570f2\u5C31\u5728\u51FD\u6570<code>f1</code>\u5185\u90E8\uFF0C\u8FD9\u65F6<code>f1</code>\u5185\u90E8\u7684\u6240\u6709\u5C40\u90E8\u53D8\u91CF\uFF0C\u5BF9<code>f2</code>\u90FD\u662F\u53EF\u89C1\u7684\u3002\u4F46\u662F\u53CD\u8FC7\u6765\u5C31\u4E0D\u884C\uFF0C<code>f2</code>\u5185\u90E8\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u5BF9<code>f1</code>\u5C31\u662F\u4E0D\u53EF\u89C1\u7684\u3002\u8FD9\u5C31\u662F JavaScript \u8BED\u8A00\u7279\u6709\u7684&quot;\u94FE\u5F0F\u4F5C\u7528\u57DF&quot;\u7ED3\u6784\uFF08chain scope\uFF09\uFF0C\u5B50\u5BF9\u8C61\u4F1A\u4E00\u7EA7\u4E00\u7EA7\u5730\u5411\u4E0A\u5BFB\u627E\u6240\u6709\u7236\u5BF9\u8C61\u7684\u53D8\u91CF\u3002\u6240\u4EE5\uFF0C\u7236\u5BF9\u8C61\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u5BF9\u5B50\u5BF9\u8C61\u90FD\u662F\u53EF\u89C1\u7684\uFF0C\u53CD\u4E4B\u5219\u4E0D\u6210\u7ACB\u3002</p><p>\u65E2\u7136<code>f2</code>\u53EF\u4EE5\u8BFB\u53D6<code>f1</code>\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u90A3\u4E48\u53EA\u8981\u628A<code>f2</code>\u4F5C\u4E3A\u8FD4\u56DE\u503C\uFF0C\u6211\u4EEC\u4E0D\u5C31\u53EF\u4EE5\u5728<code>f1</code>\u5916\u90E8\u8BFB\u53D6\u5B83\u7684\u5185\u90E8\u53D8\u91CF\u4E86\u5417\uFF01</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> f2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 999</span>

<span class="token comment">//\u95ED\u5305\u5C31\u662F\u51FD\u6570f2\uFF0C\u5373\u80FD\u591F\u8BFB\u53D6\u5176\u4ED6\u51FD\u6570\u5185\u90E8\u53D8\u91CF\u7684\u51FD\u6570\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u95ED\u5305\u7684\u6700\u5927\u7528\u5904\u6709\u4E24\u4E2A:</p><ul><li>\u8BFB\u53D6\u5916\u5C42\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF</li><li>\u8BA9\u8FD9\u4E9B\u53D8\u91CF\u59CB\u7EC8\u4FDD\u6301\u5728\u5185\u5B58\u4E2D</li></ul><p>\u95ED\u5305\u7684\u53E6\u4E00\u4E2A\u7528\u5904\uFF0C\u662F\u5C01\u88C5\u5BF9\u8C61\u7684\u79C1\u6709\u5C5E\u6027\u548C\u79C1\u6709\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _age<span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _age <span class="token operator">=</span> n<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> name<span class="token punctuation">,</span>
    getAge<span class="token operator">:</span> getAge<span class="token punctuation">,</span>
    setAge<span class="token operator">:</span> setAge
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 25</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570<code>Person</code>\u7684\u5185\u90E8\u53D8\u91CF<code>_age</code>\uFF0C\u901A\u8FC7\u95ED\u5305<code>getAge</code>\u548C<code>setAge</code>\uFF0C\u53D8\u6210\u4E86\u8FD4\u56DE\u5BF9\u8C61<code>p1</code>\u7684\u79C1\u6709\u53D8\u91CF\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5916\u5C42\u51FD\u6570\u6BCF\u6B21\u8FD0\u884C\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u95ED\u5305\uFF0C\u800C\u8FD9\u4E2A\u95ED\u5305\u53C8\u4F1A\u4FDD\u7559\u5916\u5C42\u51FD\u6570\u7684\u5185\u90E8\u53D8\u91CF\uFF0C\u6240\u4EE5\u5185\u5B58\u6D88\u8017\u5F88\u5927\u3002\u56E0\u6B64\u4E0D\u80FD\u6EE5\u7528\u95ED\u5305\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u7F51\u9875\u7684\u6027\u80FD\u95EE\u9898\u3002</p></div><ol start="8"><li>\u7ACB\u5373\u8C03\u7528\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08IIFE\uFF09 \u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u53EA\u5BF9\u533F\u540D\u51FD\u6570\u4F7F\u7528\u8FD9\u79CD\u201C\u7ACB\u5373\u6267\u884C\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u3002\u5B83\u7684\u76EE\u7684\u6709\u4E24\u4E2A\uFF1A\u4E00\u662F\u4E0D\u5FC5\u4E3A\u51FD\u6570\u547D\u540D\uFF0C\u907F\u514D\u4E86\u6C61\u67D3\u5168\u5C40\u53D8\u91CF\uFF1B\u4E8C\u662F IIFE \u5185\u90E8\u5F62\u6210\u4E86\u4E00\u4E2A\u5355\u72EC\u7684\u4F5C\u7528\u57DF\uFF0C\u53EF\u4EE5\u5C01\u88C5\u4E00\u4E9B\u5916\u90E8\u65E0\u6CD5\u8BFB\u53D6\u7684\u79C1\u6709\u53D8\u91CF\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5199\u6CD5\u4E00</span>
<span class="token keyword">var</span> tmp <span class="token operator">=</span> newData<span class="token punctuation">;</span>
<span class="token function">processData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">storeData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5199\u6CD5\u4E8C</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp <span class="token operator">=</span> newData<span class="token punctuation">;</span>
  <span class="token function">processData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">storeData</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="9"><li>eval \u547D\u4EE4</li></ol><p><code>eval</code>\u547D\u4EE4\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u5C06\u8FD9\u4E2A\u5B57\u7B26\u4E32\u5F53\u4F5C\u8BED\u53E5\u6267\u884C\u3002<br><code>eval</code>\u6CA1\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\uFF0C\u90FD\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u5185\u6267\u884C\uFF0C\u56E0\u6B64\u53EF\u80FD\u4F1A\u4FEE\u6539\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u7684\u503C\uFF0C\u9020\u6210\u5B89\u5168\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;var a = 1;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a <span class="token comment">// 1</span>
<span class="token comment">//\u4E00\u822C\u4E0D\u63A8\u8350\u4F7F\u7528,\u4E0D\u5229\u4E8E\u5F15\u64CE\u4F18\u5316\u6267\u884C\u901F\u5EA6</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><ol><li>\u6570\u7EC4\uFF08array\uFF09\u662F\u6309\u6B21\u5E8F\u6392\u5217\u7684\u4E00\u7EC4\u503C\u3002\u6BCF\u4E2A\u503C\u7684\u4F4D\u7F6E\u90FD\u6709\u7F16\u53F7\uFF08\u4ECE0\u5F00\u59CB\uFF09\uFF0C\u6574\u4E2A\u6570\u7EC4\u7528\u65B9\u62EC\u53F7\u8868\u793A\u3002\u4EFB\u4F55\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u90FD\u53EF\u4EE5\u653E\u5165\u6570\u7EC4\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u672C\u8D28\u4E0A\uFF0C\u6570\u7EC4\u5C5E\u4E8E\u4E00\u79CD\u7279\u6B8A\u7684\u5BF9\u8C61\u3002<code>typeof</code>\u8FD0\u7B97\u7B26\u4F1A\u8FD4\u56DE\u6570\u7EC4\u7684\u7C7B\u578B\u662F<code>object</code>\u3002 <code>\u91CA\u4E49\uFF1Atypeof\u53EF\u83B7\u53D6\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B</code></p><p>\u6570\u7EC4\u7684\u7279\u6B8A\u6027\u4F53\u73B0\u5728\uFF0C\u5B83\u7684\u952E\u540D\u662F\u6309\u6B21\u5E8F\u6392\u5217\u7684\u4E00\u7EC4\u6574\u6570\uFF080\uFF0C1\uFF0C2...\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u4E00\u7AE0\u8BF4\u8FC7\uFF0C\u5BF9\u8C61\u6709\u4E24\u79CD\u8BFB\u53D6\u6210\u5458\u7684\u65B9\u6CD5\uFF1A\u70B9\u7ED3\u6784<code>\uFF08object.key\uFF09</code>\u548C\u65B9\u62EC\u53F7\u7ED3\u6784<code>\uFF08object[key]</code>\uFF09\u3002\u4F46\u662F\uFF0C\u5BF9\u4E8E\u6570\u503C\u7684\u952E\u540D\uFF0C\u4E0D\u80FD\u4F7F\u7528\u70B9\u7ED3\u6784\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token number">0</span> <span class="token comment">// SyntaxError</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u56E0\u4E3A\u5355\u72EC\u7684\u6570\u503C\u4E0D\u80FD\u4F5C\u4E3A\u6807\u8BC6\u7B26<code>\uFF08identifier\uFF09</code>\u3002\u6240\u4EE5\uFF0C\u6570\u7EC4\u6210\u5458\u53EA\u80FD\u7528\u65B9\u62EC\u53F7<code>arr[0]</code>\u8868\u793A\uFF08\u65B9\u62EC\u53F7\u662F\u8FD0\u7B97\u7B26\uFF0C\u53EF\u4EE5\u63A5\u53D7\u6570\u503C\uFF09\u3002</p><ol start="2"><li>\u6570\u7EC4\u7684<code>length</code>\u5C5E\u6027\uFF0C\u8FD4\u56DE\u6570\u7EC4\u7684\u6210\u5458\u6570\u91CF\u3002</li></ol><p><code>length</code>\u5C5E\u6027\u662F\u53EF\u5199\u7684\u3002\u5982\u679C\u4EBA\u4E3A\u8BBE\u7F6E\u4E00\u4E2A\u5C0F\u4E8E\u5F53\u524D\u6210\u5458\u4E2A\u6570\u7684\u503C\uFF0C\u8BE5\u6570\u7EC4\u7684\u6210\u5458\u6570\u91CF\u4F1A\u81EA\u52A8\u51CF\u5C11\u5230<code>length</code>\u8BBE\u7F6E\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span>length <span class="token comment">// 3</span>

arr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
arr <span class="token comment">// [&quot;a&quot;, &quot;b&quot;]</span>
<span class="token comment">//\u5982\u679C\u4EBA\u4E3A\u8BBE\u7F6Elength\u4E3A\u4E0D\u5408\u6CD5\u7684\u503C\uFF0CJavaScript \u4F1A\u62A5\u9519\u3002</span>
<span class="token comment">// \u8BBE\u7F6E\u8D1F\u503C</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token comment">// RangeError: Invalid array length</span>

<span class="token comment">// \u6570\u7EC4\u5143\u7D20\u4E2A\u6570\u5927\u4E8E\u7B49\u4E8E2\u768432\u6B21\u65B9</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span>
<span class="token comment">// RangeError: Invalid array length</span>

<span class="token comment">// \u8BBE\u7F6E\u5B57\u7B26\u4E32</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
<span class="token comment">// RangeError: Invalid array length</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="3"><li><code>in</code> \u8FD0\u7B97\u7B26</li></ol><p>\u68C0\u67E5\u67D0\u4E2A\u952E\u540D\u662F\u5426\u5B58\u5728\u7684\u8FD0\u7B97\u7B26in\uFF0C\u9002\u7528\u4E8E\u5BF9\u8C61\uFF0C\u4E5F\u9002\u7528\u4E8E\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token number">2</span> <span class="token keyword">in</span> arr  <span class="token comment">// true</span>
<span class="token string">&#39;2&#39;</span> <span class="token keyword">in</span> arr <span class="token comment">// true</span>
<span class="token number">4</span> <span class="token keyword">in</span> arr <span class="token comment">// false</span>
<span class="token comment">//\u6CE8\u610F\uFF0C\u5982\u679C\u6570\u7EC4\u7684\u67D0\u4E2A\u4F4D\u7F6E\u662F\u7A7A\u4F4D\uFF0Cin\u8FD0\u7B97\u7B26\u8FD4\u56DEfalse\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li><code>for...in</code> \u5FAA\u73AF\u548C\u6570\u7EC4\u7684\u904D\u5386</li></ol><p><code>for...in</code>\u5FAA\u73AF\u4E0D\u4EC5\u53EF\u4EE5\u904D\u5386\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u904D\u5386\u6570\u7EC4\uFF0C\u6BD5\u7ADF\u6570\u7EC4\u53EA\u662F\u4E00\u79CD\u7279\u6B8A\u5BF9\u8C61\u3002 \u4F46\u662F\uFF0C<code>for...in</code>\u4E0D\u4EC5\u4F1A\u904D\u5386\u6570\u7EC4\u6240\u6709\u7684\u6570\u5B57\u952E\uFF0C\u8FD8\u4F1A\u904D\u5386\u975E\u6570\u5B57\u952E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// foo</span>
<span class="token comment">//\u6240\u4EE5\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528for...in\u904D\u5386\u6570\u7EC4\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6570\u7EC4\u7684<code>forEach</code>\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u7528\u6765\u904D\u5386\u6570\u7EC4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
colors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// red</span>
<span class="token comment">// green</span>
<span class="token comment">// blue</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5F53\u6570\u7EC4\u7684\u67D0\u4E2A\u4F4D\u7F6E\u662F\u7A7A\u5143\u7D20\uFF0C\u5373\u4E24\u4E2A\u9017\u53F7\u4E4B\u95F4\u6CA1\u6709\u4EFB\u4F55\u503C\uFF0C\u6211\u4EEC\u79F0\u8BE5\u6570\u7EC4\u5B58\u5728\u7A7A\u4F4D\uFF08hole\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6570\u7EC4\u7684\u67D0\u4E2A\u4F4D\u7F6E\u662F\u7A7A\u4F4D\uFF0C\u4E0E\u67D0\u4E2A\u4F4D\u7F6E\u662F<code>undefined</code>\uFF0C\u662F\u4E0D\u4E00\u6837\u7684\u3002\u5982\u679C\u662F\u7A7A\u4F4D\uFF0C\u4F7F\u7528\u6570\u7EC4\u7684<code>forEach</code>\u65B9\u6CD5\u3001<code>for...in</code>\u7ED3\u6784\u3001\u4EE5\u53CA<code>Object.keys</code>\u65B9\u6CD5\u8FDB\u884C\u904D\u5386\uFF0C\u7A7A\u4F4D\u90FD\u4F1A\u88AB\u8DF3\u8FC7\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;. &#39;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E0D\u4EA7\u751F\u4EFB\u4F55\u8F93\u51FA</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0D\u4EA7\u751F\u4EFB\u4F55\u8F93\u51FA</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment">// []</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="5"><li>\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61</li></ol><p>\u201C\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u201D\u7684\u6839\u672C\u7279\u5F81\uFF0C\u5C31\u662F\u5177\u6709<code>length</code>\u5C5E\u6027\u3002\u53EA\u8981\u6709<code>length</code>\u5C5E\u6027\uFF0C\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u7C7B\u4F3C\u4E8E\u6570\u7EC4\u3002\u4F46\u662F\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u8FD9\u79CD<code>length</code>\u5C5E\u6027\u4E0D\u662F\u52A8\u6001\u503C\uFF0C\u4E0D\u4F1A\u968F\u7740\u6210\u5458\u7684\u53D8\u5316\u800C\u53D8\u5316\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
  length<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// &#39;a&#39;</span>
obj<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// &#39;b&#39;</span>
obj<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: obj.push is not a function</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5178\u578B\u7684\u201C\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u201D\u662F\u51FD\u6570\u7684<code>arguments</code>\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u5927\u591A\u6570<code>DOM</code>\u5143\u7D20\u96C6\uFF0C\u8FD8\u6709\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// arguments\u5BF9\u8C61</span>
<span class="token keyword">function</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> arguments <span class="token punctuation">}</span>
<span class="token keyword">var</span> arrayLike <span class="token operator">=</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

arrayLike<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// &#39;a&#39;</span>
arrayLike<span class="token punctuation">.</span>length <span class="token comment">// 2</span>
arrayLike <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// false</span>

<span class="token comment">// DOM\u5143\u7D20\u96C6</span>
<span class="token keyword">var</span> elts <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;h3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
elts<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
elts <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// false</span>

<span class="token comment">// \u5B57\u7B26\u4E32</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// &#39;b&#39;</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span>length <span class="token comment">// 3</span>
<span class="token string">&#39;abc&#39;</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// false</span>

<span class="token comment">// \u4E0A\u9762\u4EE3\u7801\u5305\u542B\u4E09\u4E2A\u4F8B\u5B50\uFF0C\u5B83\u4EEC\u90FD\u4E0D\u662F\u6570\u7EC4\uFF08instanceof\u8FD0\u7B97\u7B26\u8FD4\u56DEfalse\uFF09\uFF0C\u4F46\u662F\u770B\u4E0A\u53BB\u90FD\u975E\u5E38\u50CF\u6570\u7EC4\u3002</span>

<span class="token comment">// \u6570\u7EC4\u7684slice\u65B9\u6CD5\u53EF\u4EE5\u5C06\u201C\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61\u201D\u53D8\u6210\u771F\u6B63\u7684\u6570\u7EC4\u3002</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2-\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 2.\u8FD0\u7B97\u7B26</h2><h3 id="\u7B97\u672F\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u7B97\u672F\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u7B97\u672F\u8FD0\u7B97\u7B26</h3><p>JavaScript \u5171\u63D0\u4F9B10\u4E2A\u7B97\u672F\u8FD0\u7B97\u7B26\uFF0C\u7528\u6765\u5B8C\u6210\u57FA\u672C\u7684\u7B97\u672F\u8FD0\u7B97\u3002</p><ul><li>\u52A0\u6CD5\u8FD0\u7B97\u7B26\uFF1A<code>x + y</code></li><li>\u51CF\u6CD5\u8FD0\u7B97\u7B26\uFF1A <code>x - y</code></li><li>\u4E58\u6CD5\u8FD0\u7B97\u7B26\uFF1A <code>x * y</code></li><li>\u9664\u6CD5\u8FD0\u7B97\u7B26\uFF1A<code>x / y</code></li><li>\u6307\u6570\u8FD0\u7B97\u7B26\uFF1A<code>x ** y</code></li><li>\u4F59\u6570\u8FD0\u7B97\u7B26\uFF1A<code>x % y</code></li><li>\u81EA\u589E\u8FD0\u7B97\u7B26\uFF1A<code>++x</code> \u6216\u8005 <code>x++</code></li><li>\u81EA\u51CF\u8FD0\u7B97\u7B26\uFF1A<code>--x</code> \u6216\u8005<code>x--</code></li><li>\u6570\u503C\u8FD0\u7B97\u7B26\uFF1A<code> +x</code></li><li>\u8D1F\u6570\u503C\u8FD0\u7B97\u7B26\uFF1A<code>-x</code></li></ul><p>\u51CF\u6CD5\u3001\u4E58\u6CD5\u3001\u9664\u6CD5\u8FD0\u7B97\u6CD5\u6BD4\u8F83\u5355\u7EAF\uFF0C\u5C31\u662F\u6267\u884C\u76F8\u5E94\u7684\u6570\u5B66\u8FD0\u7B97\u3002\u91CD\u70B9\u662F\u52A0\u6CD5\u8FD0\u7B97\u7B26\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// 2</span>
<span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// 2</span>


<span class="token comment">// \u52A0\u6CD5\u8FD0\u7B97\u7B26\u662F\u5728\u8FD0\u884C\u65F6\u51B3\u5B9A\uFF0C\u5230\u5E95\u662F\u6267\u884C\u76F8\u52A0\uFF0C\u8FD8\u662F\u6267\u884C\u8FDE\u63A5\u3002</span>
<span class="token comment">//\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD0\u7B97\u5B50\u7684\u4E0D\u540C\uFF0C\u5BFC\u81F4\u4E86\u4E0D\u540C\u7684\u8BED\u6CD5\u884C\u4E3A\uFF0C\u8FD9\u79CD\u73B0\u8C61\u79F0\u4E3A\u201C\u91CD\u8F7D\u201D</span>
<span class="token string">&#39;3&#39;</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">5</span> <span class="token comment">// &quot;345&quot;</span>
<span class="token number">3</span> <span class="token operator">+</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token string">&#39;5&#39;</span> <span class="token comment">// &quot;75&quot;</span>

<span class="token comment">//\u5BF9\u8C61\u7684\u76F8\u52A0</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> p<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
obj <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// &quot;[object Object]2&quot;</span>
<span class="token comment">//\u5BF9\u8C61\u7684toString\u65B9\u6CD5\u9ED8\u8BA4\u8FD4\u56DE[object Object]</span>
<span class="token comment">//\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49valueOf\u65B9\u6CD5\u6216toString\u65B9\u6CD5</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj <span class="token operator">+</span> <span class="token number">2</span> <span class="token comment">// 3</span>
<span class="token comment">// \u7531\u4E8EvalueOf\u65B9\u6CD5\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u6240\u4EE5\u4E0D\u518D\u8C03\u7528toString\u65B9\u6CD5\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="\u6BD4\u8F83\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6BD4\u8F83\u8FD0\u7B97\u7B26</h3><p>JavaScript \u4E00\u5171\u63D0\u4F9B\u4E868\u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u3002</p><ul><li><code>&gt;</code> \u5927\u4E8E\u8FD0\u7B97\u7B26</li><li><code>&lt;</code> \u5C0F\u4E8E\u8FD0\u7B97\u7B26</li><li><code>&lt;=</code> \u5C0F\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26</li><li><code>&gt;=</code> \u5927\u4E8E\u6216\u7B49\u4E8E\u8FD0\u7B97\u7B26</li><li><code>==</code> \u76F8\u7B49\u8FD0\u7B97\u7B26</li><li><code>===</code> \u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26</li><li><code>!=</code> \u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26</li><li><code>!==</code> \u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26</li></ul><p>\u8FD9\u516B\u4E2A\u6BD4\u8F83\u8FD0\u7B97\u7B26\u5206\u6210\u4E24\u7C7B\uFF1A\u76F8\u7B49\u6BD4\u8F83\u548C\u975E\u76F8\u7B49\u6BD4\u8F83\u3002\u5BF9\u4E8E\u975E\u76F8\u7B49\u7684\u6BD4\u8F83\uFF0C\u7B97\u6CD5\u662F\u5148\u770B\u4E24\u4E2A\u8FD0\u7B97\u5B50\u662F\u5426\u90FD\u662F\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u662F\u7684\uFF0C\u5C31\u6309\u7167\u5B57\u5178\u987A\u5E8F\u6BD4\u8F83\uFF08\u5B9E\u9645\u4E0A\u662F\u6BD4\u8F83 Unicode \u7801\u70B9\uFF09\uFF1B\u5426\u5219\uFF0C\u5C06\u4E24\u4E2A\u8FD0\u7B97\u5B50\u90FD\u8F6C\u6210\u6570\u503C\uFF0C\u518D\u6BD4\u8F83\u6570\u503C\u7684\u5927\u5C0F\u3002</p><ol><li>\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF1A\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83</li></ol><p>JavaScript \u5F15\u64CE\u5185\u90E8\u9996\u5148\u6BD4\u8F83\u9996\u5B57\u7B26\u7684 <code>Unicode</code> \u7801\u70B9\u3002\u5982\u679C\u76F8\u7B49\uFF0C\u518D\u6BD4\u8F83\u7B2C\u4E8C\u4E2A\u5B57\u7B26\u7684 <code>Unicode</code> \u7801\u70B9\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">//\u521D\u5B66\u53EF\u4E0D\u60F3\u6DF1\u7A76</span>
<span class="token string">&#39;cat&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;dog&#39;</span> <span class="token comment">// false</span>
<span class="token string">&#39;cat&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;catalog&#39;</span> <span class="token comment">// false</span>

<span class="token string">&#39;cat&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;Cat&#39;</span> <span class="token comment">// true&#39;</span>
<span class="token comment">//\u5C0F\u5199\u7684c\u7684 Unicode \u7801\u70B9\uFF0899\uFF09\u5927\u4E8E\u5927\u5199\u7684C\u7684 Unicode \u7801\u70B9\uFF0867\uFF09\uFF0C\u6240\u4EE5\u8FD4\u56DEtrue\u3002</span>

<span class="token string">&#39;\u5927&#39;</span> <span class="token operator">&gt;</span> <span class="token string">&#39;\u5C0F&#39;</span> <span class="token comment">// false</span>
<span class="token comment">//\u201C\u5927\u201D\u7684 Unicode \u7801\u70B9\u662F22823\uFF0C\u201C\u5C0F\u201D\u662F23567\uFF0C\u56E0\u6B64\u8FD4\u56DEfalse\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2"><li>\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF1A\u975E\u5B57\u7B26\u4E32\u7684\u6BD4\u8F83</li></ol><ul><li>\u539F\u59CB\u7C7B\u578B:\u8981\u6CE8\u610F\u7684\u662F<code>NaN</code>\u7684\u6BD4\u8F83,\u4EFB\u4F55\u503C\uFF08\u5305\u62EC<code>NaN</code>\u672C\u8EAB\uFF09\u4E0E<code>NaN</code>\u4F7F\u7528\u975E\u76F8\u7B49\u8FD0\u7B97\u7B26\u8FDB\u884C\u6BD4\u8F83\uFF0C\u8FD4\u56DE\u7684\u90FD\u662F<code>false</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token number">1</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token string">&#39;1&#39;</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token string">&#39;1&#39;</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token number">NaN</span> <span class="token operator">&gt;</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
<span class="token number">NaN</span> <span class="token operator">&lt;=</span> <span class="token number">NaN</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u5BF9\u8C61\u7C7B\u578B</li></ul><p>\u5BF9\u8C61\u8F6C\u6362\u6210\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u7B97\u6CD5\u662F\u5148\u8C03\u7528<code>valueOf</code>\u65B9\u6CD5\uFF1B\u5982\u679C\u8FD4\u56DE\u7684\u8FD8\u662F\u5BF9\u8C61\uFF0C\u518D\u63A5\u7740\u8C03\u7528<code>toString</code>\u65B9\u6CD5(\u6570\u636E\u7C7B\u578B\u8F6C\u6362)\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token operator">&gt;</span> <span class="token string">&#39;11&#39;</span> <span class="token comment">// true</span>
<span class="token comment">// \u7B49\u540C\u4E8E [2].valueOf().toString() &gt; &#39;11&#39;</span>
<span class="token comment">// \u5373 &#39;2&#39; &gt; &#39;11&#39;</span>

x<span class="token punctuation">.</span><span class="token function-variable function">valueOf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&#39;1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token operator">&gt;</span> <span class="token string">&#39;11&#39;</span> <span class="token comment">// false</span>
<span class="token comment">// \u7B49\u540C\u4E8E [2].valueOf() &gt; &#39;11&#39;</span>
<span class="token comment">// \u5373 &#39;1&#39; &gt; &#39;11&#39;</span>

<span class="token comment">//\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u7684\u6BD4\u8F83\u4E5F\u662F\u5982\u6B64\u3002</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// true</span>
<span class="token comment">// \u7B49\u540C\u4E8E [2].valueOf().toString() &gt; [1].valueOf().toString()</span>
<span class="token comment">// \u5373 &#39;2&#39; &gt; &#39;1&#39;</span>

<span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token operator">&gt;=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">// true</span>
<span class="token comment">// \u7B49\u540C\u4E8E { x: 2 }.valueOf().toString() &gt;= { x: 1 }.valueOf().toString()</span>
<span class="token comment">// \u5373 &#39;[object Object]&#39; &gt;= &#39;[object Object]&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="3"><li>\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26</li></ol><p>\u7B80\u5355\u8BF4\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u662F\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>==</code>\uFF09\u6BD4\u8F83\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09\u6BD4\u8F83\u5B83\u4EEC\u662F\u5426\u4E3A\u201C\u540C\u4E00\u4E2A\u503C\u201D\u3002\u5982\u679C\u4E24\u4E2A\u503C\u4E0D\u662F\u540C\u4E00\u7C7B\u578B\uFF0C\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>===</code>\uFF09\u76F4\u63A5\u8FD4\u56DE<code>false</code>\uFF0C\u800C\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF08<code>==</code>\uFF09\u4F1A\u5C06\u5B83\u4EEC\u8F6C\u6362\u6210\u540C\u4E00\u4E2A\u7C7B\u578B\uFF0C\u518D\u7528\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\u8FDB\u884C\u6BD4\u8F83\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&quot;1&quot;</span> <span class="token comment">// false</span>
<span class="token boolean">true</span> <span class="token operator">===</span> <span class="token string">&quot;true&quot;</span> <span class="token comment">// false</span>


<span class="token number">1</span> <span class="token operator">===</span> <span class="token number">0x1</span> <span class="token comment">// true</span>
<span class="token comment">//\u4E0A\u9762\u4EE3\u7801\u6BD4\u8F83\u5341\u8FDB\u5236\u76841\u4E0E\u5341\u516D\u8FDB\u5236\u76841</span>

<span class="token comment">//\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CNaN\u4E0E\u4EFB\u4F55\u503C\u90FD\u4E0D\u76F8\u7B49\uFF08\u5305\u62EC\u81EA\u8EAB\uFF09\u3002\u53E6\u5916\uFF0C\u6B630\u7B49\u4E8E\u8D1F0\u3002</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span>  <span class="token comment">// false</span>
<span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E24\u4E2A\u590D\u5408\u7C7B\u578B\uFF08\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u51FD\u6570\uFF09\u7684\u6570\u636E\u6BD4\u8F83\u65F6\uFF0C\u4E0D\u662F\u6BD4\u8F83\u5B83\u4EEC\u7684\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u800C\u662F\u6BD4\u8F83\u5B83\u4EEC\u662F\u5426\u6307\u5411\u540C\u4E00\u4E2A\u5730\u5740\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// false</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token keyword">var</span> v1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> v2 <span class="token operator">=</span> v1<span class="token punctuation">;</span>
v1 <span class="token operator">===</span> v2 <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5BF9\u4E8E\u4E24\u4E2A\u5BF9\u8C61\u7684\u6BD4\u8F83\uFF0C\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\u6BD4\u8F83\u7684\u662F\u5730\u5740\uFF0C\u800C\u5927\u4E8E\u6216\u5C0F\u4E8E\u8FD0\u7B97\u7B26\u6BD4\u8F83\u7684\u662F\u503C\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

obj1 <span class="token operator">&gt;</span> obj2 <span class="token comment">// false</span>
obj1 <span class="token operator">&lt;</span> obj2 <span class="token comment">// false</span>
obj1 <span class="token operator">===</span> obj2 <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>undefined</code> \u548C <code>null</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token comment">// true</span>
<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>\u76F8\u7B49\u8FD0\u7B97\u7B26</li></ol><p>\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u201C\u4E25\u683C\u4E0D\u76F8\u7B49\u8FD0\u7B97\u7B26\u201D\uFF08<code>!==</code>\uFF09\uFF0C\u5B83\u7684\u7B97\u6CD5\u5C31\u662F\u5148\u6C42\u4E25\u683C\u76F8\u7B49\u8FD0\u7B97\u7B26\u7684\u7ED3\u679C\uFF0C\u7136\u540E\u8FD4\u56DE\u76F8\u53CD\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">!==</span> <span class="token string">&#39;1&#39;</span> <span class="token comment">// true</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5E03\u5C14\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5E03\u5C14\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5E03\u5C14\u8FD0\u7B97\u7B26</h3><p>\u5E03\u5C14\u8FD0\u7B97\u7B26\u7528\u4E8E\u5C06\u8868\u8FBE\u5F0F\u8F6C\u4E3A\u5E03\u5C14\u503C\uFF0C\u4E00\u5171\u5305\u542B\u56DB\u4E2A\u8FD0\u7B97\u7B26\u3002</p><ul><li>\u53D6\u53CD\u8FD0\u7B97\u7B26\uFF1A<code>!</code></li><li>\u4E14\u8FD0\u7B97\u7B26\uFF1A<code>&amp;&amp;</code></li><li>\u6216\u8FD0\u7B97\u7B26\uFF1A<code>||</code></li><li>\u4E09\u5143\u8FD0\u7B97\u7B26\uFF1A<code>?:</code></li></ul><p>\u7B80\u5355\u8BF4\u4E00\u4E0B\u4E09\u5143\u6761\u4EF6\u8FD0\u7B97\u7B26\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5982\u679C\u7B2C\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u5E03\u5C14\u503C\u4E3Atrue\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u5426\u5219\u8FD4\u56DE\u7B2C\u4E09\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</span>
<span class="token string">&#39;true&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token comment">// &quot;hello&quot;</span>
<span class="token string">&#39;false&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;hello&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;world&#39;</span> <span class="token comment">// &quot;world&quot;</span>
<span class="token comment">//\u4E0A\u9762true\u548Cfalse\u53EF\u66FF\u6362\u4E3A\u8868\u8FBE\u5F0F\u7B49\uFF0C\u5982\uFF1At\u30010\u7B49</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E09\u5143\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E0E<code>if...else</code>\u8BED\u53E5\u5177\u6709\u540C\u6837\u8868\u8FBE\u6548\u679C\uFF0C\u524D\u8005\u53EF\u4EE5\u8868\u8FBE\u7684\uFF0C\u540E\u8005\u4E5F\u80FD\u8868\u8FBE\u3002\u4F46\u662F\u4E24\u8005\u5177\u6709\u4E00\u4E2A\u91CD\u5927\u5DEE\u522B\uFF0C<code>if...else</code>\u662F\u8BED\u53E5\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\uFF1B\u4E09\u5143\u6761\u4EF6\u8868\u8FBE\u5F0F\u662F\u8868\u8FBE\u5F0F\uFF0C\u5177\u6709\u8FD4\u56DE\u503C\u3002\u6240\u4EE5\uFF0C\u5728\u9700\u8981\u8FD4\u56DE\u503C\u7684\u573A\u5408\uFF0C\u53EA\u80FD\u4F7F\u7528\u4E09\u5143\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u800C\u4E0D\u80FD\u4F7F\u7528<code>if..else</code>\u3002</p><h3 id="\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26</h3><p>\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26\u7528\u4E8E\u76F4\u63A5\u5BF9\u4E8C\u8FDB\u5236\u4F4D\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4E00\u5171\u67097\u4E2A\u3002</p><ul><li>\u4E8C\u8FDB\u5236\u6216\u8FD0\u7B97\u7B26\uFF08or\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>|</code>\uFF0C\u8868\u793A\u82E5\u4E24\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u90FD\u4E3A<code>0</code>\uFF0C\u5219\u7ED3\u679C\u4E3A<code>0</code>\uFF0C\u5426\u5219\u4E3A<code>1</code>\u3002</li><li>\u4E8C\u8FDB\u5236\u4E0E\u8FD0\u7B97\u7B26\uFF08and\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>&amp;</code>\uFF0C\u8868\u793A\u82E5\u4E24\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u90FD\u4E3A<code>1</code>\uFF0C\u5219\u7ED3\u679C\u4E3A<code>1</code>\uFF0C\u5426\u5219\u4E3A<code>0</code>\u3002</li><li>\u4E8C\u8FDB\u5236\u5426\u8FD0\u7B97\u7B26\uFF08not\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>~</code>\uFF0C\u8868\u793A\u5BF9\u4E00\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u53D6\u53CD\u3002</li><li>\u5F02\u6216\u8FD0\u7B97\u7B26\uFF08xor\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>^</code>\uFF0C\u8868\u793A\u82E5\u4E24\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u4E0D\u76F8\u540C\uFF0C\u5219\u7ED3\u679C\u4E3A<code>1</code>\uFF0C\u5426\u5219\u4E3A<code>0</code>\u3002</li><li>\u5DE6\u79FB\u8FD0\u7B97\u7B26\uFF08left shift\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>&lt;&lt;</code>\u3002</li><li>\u53F3\u79FB\u8FD0\u7B97\u7B26\uFF08right shift\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>&gt;&gt;</code>\u3002</li><li>\u5934\u90E8\u8865\u96F6\u7684\u53F3\u79FB\u8FD0\u7B97\u7B26\uFF08zero filled right shift\uFF09\uFF1A\u7B26\u53F7\u4E3A<code>&gt;&gt;&gt;</code>\u3002</li></ul><p>\u8FD9\u4E9B\u4F4D\u8FD0\u7B97\u7B26\u76F4\u63A5\u5904\u7406\u6BCF\u4E00\u4E2A\u6BD4\u7279\u4F4D\uFF08bit\uFF09\uFF0C\u6240\u4EE5\u901F\u5EA6\u6781\u5FEB\uFF0C\u7F3A\u70B9\u662F\u5F88\u4E0D\u76F4\u89C2\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u5B83\u4EEC\u56E0\u4E3A\u4F1A\u4F7F\u4EE3\u7801\u96BE\u4EE5\u7406\u89E3\u548C\u67E5\u9519\u3002</p><p>\u4E0B\u9762\u53EA\u7B80\u5355\u4ECB\u7ECD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//----------------\u4E8C\u8FDB\u5236\u6216\u8FD0\u7B97\u7B26----------------</span>
<span class="token comment">//\u4E0B\u9762\u9762\u8FD9\u4E2A\u51FD\u6570\u5C06\u4EFB\u610F\u503C\u4E0E0\u8FDB\u884C\u4E00\u6B21\u6216\u8FD0\u7B97\uFF0C\u8FD9\u4E2A\u4F4D\u8FD0\u7B97\u4F1A\u81EA\u52A8\u5C06\u4E00\u4E2A\u503C\u8F6C\u4E3A32\u4F4D\u6574\u6570\u3002</span>
<span class="token comment">//\u4E0B\u9762\u662F\u8FD9\u4E2A\u51FD\u6570\u7684\u7528\u6CD5\u3002</span>
<span class="token keyword">function</span> <span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> x <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1.001</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1.999</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">toInt32</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
<span class="token comment">//\u6CE8\u610F\uFF1A\u5927\u4E8E32\u4F4D\u7684\u6570\u4F4D\u90FD\u4F1A\u88AB\u820D\u53BB</span>

<span class="token comment">//----------------\u4E8C\u8FDB\u5236\u4E0E\u8FD0\u7B97\u7B26----------------</span>
<span class="token comment">//\uFF08&amp;\uFF09:\u9010\u4F4D\u6BD4\u8F83\u4E24\u4E2A\u8FD0\u7B97\u5B50\uFF0C\u4E24\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u4E4B\u4E2D\u53EA\u8981\u6709\u4E00\u4E2A\u4F4D\u4E3A0\uFF0C\u5C31\u8FD4\u56DE0\uFF0C\u5426\u5219\u8FD4\u56DE1\u3002</span>
<span class="token number">0</span> <span class="token operator">&amp;</span> <span class="token number">3</span> <span class="token comment">// 0</span>
<span class="token comment">//0\uFF08\u4E8C\u8FDB\u523600\uFF09\u548C3\uFF08\u4E8C\u8FDB\u523611\uFF09</span>

<span class="token comment">//----------------\u4E8C\u8FDB\u5236\u5426\u8FD0\u7B97\u7B26----------------</span>

<span class="token comment">//----------------\u5F02\u6216\u8FD0\u7B97\u7B26----------------</span>
<span class="token comment">//\u5F02\u6216\u8FD0\u7B97\uFF08^\uFF09\u5728\u4E24\u4E2A\u4E8C\u8FDB\u5236\u4F4D\u4E0D\u540C\u65F6\u8FD4\u56DE1\uFF0C\u76F8\u540C\u65F6\u8FD4\u56DE0\u3002</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

a <span class="token operator">^=</span> b<span class="token punctuation">,</span> b <span class="token operator">^=</span> a<span class="token punctuation">,</span> a <span class="token operator">^=</span> b<span class="token punctuation">;</span>

a <span class="token comment">// 99</span>
b <span class="token comment">// 10</span>
<span class="token comment">//\u201C\u5F02\u6216\u8FD0\u7B97\u201D\u5BF9\u4E24\u4E2A\u6570a\u548Cb\u8FDB\u884C\u4E09\u6B21\u5F02\u6216\u8FD0\u7B97\uFF0Ca^=b; b^=a; a^=b;\uFF0C\u53EF\u4EE5\u4E92\u6362\u5B83\u4EEC\u7684\u503C\u3002</span>
<span class="token comment">//(\u6280\u5DE7)\u8FD9\u662F\u4E92\u6362\u4E24\u4E2A\u53D8\u91CF\u7684\u503C\u7684\u6700\u5FEB\u65B9\u6CD5\uFF0C\u4E14\u4E0D\u5F15\u5165\u4E34\u65F6\u53D8\u91CF\u3002</span>

<span class="token comment">//----------------\u5DE6\u79FB\u8FD0\u7B97\u7B26 \u2014\u2014 \u53F3\u79FB\u8FD0\u7B97\u7B26----------------</span>

<span class="token comment">//----------------\u5934\u90E8\u8865\u96F6\u7684\u53F3\u79FB\u8FD0\u7B97\u7B26 ----------------</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u4F4D\u8FD0\u7B97\u7B26\u53EF\u4EE5\u7528\u4F5C\u8BBE\u7F6E\u5BF9\u8C61\u5C5E\u6027\u7684\u5F00\u5173\u3002(\u5F00\u5173\u4F5C\u7528)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token constant">FLAG_A</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 0001</span>
<span class="token keyword">var</span> <span class="token constant">FLAG_B</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 0010</span>
<span class="token keyword">var</span> <span class="token constant">FLAG_C</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 0100</span>
<span class="token keyword">var</span> <span class="token constant">FLAG_D</span> <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// 1000</span>
<span class="token comment">//\u7136\u540E\uFF0C\u5C31\u53EF\u4EE5\u7528\u4E8C\u8FDB\u5236\u4E0E\u8FD0\u7B97\uFF0C\u68C0\u67E5\u5F53\u524D\u8BBE\u7F6E\u662F\u5426\u6253\u5F00\u4E86\u6307\u5B9A\u5F00\u5173\u3002</span>
<span class="token keyword">var</span> flags <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// \u4E8C\u8FDB\u5236\u76840101</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> <span class="token constant">FLAG_C</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0101 &amp; 0100 =&gt; 0100 =&gt; true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u5176\u4ED6\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u5176\u4ED6\u8FD0\u7B97\u7B26</h3><ol><li><code>void</code>\u8FD0\u7B97\u7B26</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5EFA\u8BAE\u4F7F\u7528\u65F6\u52A0\uFF08\uFF09\uFF0C\u5373\uFF1Avoid()\u5F62\u5F0F\uFF1B</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">//undefined</span>
x <span class="token comment">// 5</span>

<span class="token comment">//\u4E0B\u9762\u662F\u9632\u6B62\u9875\u9762\u8DF3\u8F6C\u7684\u7528\u6CD5</span>
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;javascript: void(document.form.submit())&quot;</span><span class="token operator">&gt;</span>
  \u63D0\u4EA4
<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2"><li>\u9017\u53F7\u8FD0\u7B97\u7B26</li></ol><p>\u9017\u53F7\u8FD0\u7B97\u7B26\u7528\u4E8E\u5BF9\u4E24\u4E2A\u8868\u8FBE\u5F0F\u6C42\u503C\uFF0C\u5E76\u8FD4\u56DE\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002</p><ol start="3"><li>\u8FD0\u7B97\u987A\u5E8F</li></ol><p>\u4F60\u8981\u5148\u8BB0\u4F4F\uFF1A\u6CA1\u5FC5\u8981\u8BB0\u4F4F\u6240\u6709\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u3002</p><p>\u4E94\u4E2A\u8FD0\u7B97\u7B26\u7684\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4F9D\u6B21\u4E3A\uFF1A\u5C0F\u4E8E\u7B49\u4E8E\uFF08<code>&lt;=</code>\uFF09\u3001\u4E25\u683C\u76F8\u7B49\uFF08<code>===</code>\uFF09\u3001\u6216\uFF08<code>||</code>\uFF09\u3001\u4E09\u5143\uFF08<code>?:</code>\uFF09\u3001\u7B49\u53F7\uFF08<code>=</code>\uFF09\u3002</p><p>\u5706\u62EC\u53F7\uFF08<code>()</code>\uFF09\u53EF\u4EE5\u7528\u6765\u63D0\u9AD8\u8FD0\u7B97\u7684\u4F18\u5148\u7EA7\uFF0C\u56E0\u4E3A\u5B83\u7684\u4F18\u5148\u7EA7\u662F\u6700\u9AD8\u7684</p><!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/JavaScript/\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _________html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$7]]);
var _________html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _________html$1
});
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="\u8BED\u6CD5\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u57FA\u7840" aria-hidden="true">#</a> \u8BED\u6CD5\u57FA\u7840</h1><h2 id="\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><h3 id="\u5F3A\u5236\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u8F6C\u6362" aria-hidden="true">#</a> \u5F3A\u5236\u8F6C\u6362</h3><ol><li><code>Number()</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u503C\uFF1A\u8F6C\u6362\u540E\u8FD8\u662F\u539F\u6765\u7684\u503C</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token number">324</span><span class="token punctuation">)</span> <span class="token comment">// 324</span>

<span class="token comment">// \u5B57\u7B26\u4E32\uFF1A\u5982\u679C\u53EF\u4EE5\u88AB\u89E3\u6790\u4E3A\u6570\u503C\uFF0C\u5219\u8F6C\u6362\u4E3A\u76F8\u5E94\u7684\u6570\u503C</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;324&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 324</span>

<span class="token comment">// \u5B57\u7B26\u4E32\uFF1A\u5982\u679C\u4E0D\u53EF\u4EE5\u88AB\u89E3\u6790\u4E3A\u6570\u503C\uFF0C\u8FD4\u56DE NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;324abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>

<span class="token comment">// \u7A7A\u5B57\u7B26\u4E32\u8F6C\u4E3A0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// \u5E03\u5C14\u503C\uFF1Atrue \u8F6C\u6210 1\uFF0Cfalse \u8F6C\u6210 0</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">// undefined\uFF1A\u8F6C\u6210 NaN</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>

<span class="token comment">// null\uFF1A\u8F6C\u62100</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

<span class="token comment">//Number\u51FD\u6570\u5C06\u5B57\u7B26\u4E32\u8F6C\u4E3A\u6570\u503C\uFF0C\u8981\u6BD4parseInt\u51FD\u6570\u4E25\u683C\u5F88\u591A\u3002</span>
<span class="token comment">//\u53EA\u8981\u6709\u4E00\u4E2A\u5B57\u7B26\u65E0\u6CD5\u8F6C\u6210\u6570\u503C\uFF0C\u6574\u4E2A\u5B57\u7B26\u4E32\u5C31\u4F1A\u88AB\u8F6C\u4E3ANaN\u3002</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;42 cats&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 42</span>
<span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;42 cats&#39;</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2"><li><code>String()</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u539F\u59CB\u7C7B\u578B\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// &quot;123&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;true&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;null&quot;</span>

<span class="token comment">//\u5BF9\u8C61\u7C7B\u578B\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;1,2,3&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li><code>Boolean()</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token comment">// true // \u6CE8\u610F\u5B57\u7B26\u4E32\u5185\u6709\u4E2A\u7A7A\u683C</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u81EA\u52A8\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u8F6C\u6362" aria-hidden="true">#</a> \u81EA\u52A8\u8F6C\u6362</h3><p>\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5\u65F6\uFF0CJavaScript \u4F1A\u81EA\u52A8\u8F6C\u6362\u6570\u636E\u7C7B\u578B:</p><ol><li>\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u4E92\u76F8\u8FD0\u7B97\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">123</span> <span class="token operator">+</span> <span class="token string">&#39;abc&#39;</span> <span class="token comment">// &quot;123abc&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF0C\u5BF9\u975E\u5E03\u5C14\u503C\u7C7B\u578B\u7684\u6570\u636E\u6C42\u5E03\u5C14\u503C\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u7B2C\u4E09\u79CD\u60C5\u51B5\uFF0C\u5BF9\u975E\u6570\u503C\u7C7B\u578B\u7684\u503C\u4F7F\u7528\u4E00\u5143\u8FD0\u7B97\u7B26\uFF08\u5373<code>+</code>\u548C<code>-</code>\uFF09\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">+</span> <span class="token punctuation">{</span>foo<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span> <span class="token comment">// NaN</span>
<span class="token operator">-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u81EA\u52A8\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C</p><p><code>JavaScript </code>\u9047\u5230\u9884\u671F\u4E3A\u5E03\u5C14\u503C\u7684\u5730\u65B9\uFF08\u6BD4\u5982<code>if</code>\u8BED\u53E5\u7684\u6761\u4EF6\u90E8\u5206\uFF09\uFF0C\u7CFB\u7EDF\u5185\u90E8\u4F1A\u81EA\u52A8\u8C03\u7528Boolean()\u51FD\u6570\u3002</p><p>\u9664\u4E86\u4EE5\u4E0B\u4E94\u4E2A\u503C\uFF0C\u5176\u4ED6\u90FD\u662F\u81EA\u52A8\u8F6C\u4E3Atrue\u3002</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>+0</code>\u6216<code>-0</code></li><li><code>NaN</code></li><li><code>&#39;&#39;</code>\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token operator">!</span><span class="token keyword">undefined</span>
  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token keyword">null</span>
  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token number">0</span>
  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token number">NaN</span>
  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token string">&#39;&#39;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</p><p>JavaScript \u9047\u5230\u9884\u671F\u4E3A\u5B57\u7B26\u4E32\u7684\u5730\u65B9,\u5177\u4F53\u89C4\u5219\u662F\uFF0C\u5148\u5C06\u590D\u5408\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u518D\u5C06\u539F\u59CB\u7C7B\u578B\u7684\u503C\u8F6C\u4E3A\u5B57\u7B26\u4E32\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// &#39;51&#39;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token boolean">true</span> <span class="token comment">// &quot;5true&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token boolean">false</span> <span class="token comment">// &quot;5false&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;5[object Object]&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// &quot;5&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// &quot;5function (){}&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">undefined</span> <span class="token comment">// &quot;5undefined&quot;</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">+</span> <span class="token keyword">null</span> <span class="token comment">// &quot;5null&quot;</span>

<span class="token comment">//\u8FD9\u79CD\u81EA\u52A8\u8F6C\u6362\u5F88\u5BB9\u6613\u51FA\u9519\u3002</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token string">&#39;100&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token number">20</span> <span class="token comment">// &quot;10020&quot;</span>
<span class="token comment">//\u53EF\u80FD\u671F\u671B\u8FD4\u56DE120\uFF0C\u4F46\u662F\u7531\u4E8E\u81EA\u52A8\u8F6C\u6362\uFF0C\u5B9E\u9645\u4E0A\u8FD4\u56DE\u4E86\u4E00\u4E2A\u5B57\u7B2610020\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u81EA\u52A8\u8F6C\u6362\u4E3A\u6570\u503C</p><p><code>JavaScript</code> \u9047\u5230\u9884\u671F\u4E3A\u6570\u503C\u7684\u5730\u65B9,\u7CFB\u7EDF\u5185\u90E8\u4F1A\u81EA\u52A8\u8C03\u7528<code>Number()</code>\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&#39;5&#39;</span> <span class="token operator">-</span> <span class="token string">&#39;2&#39;</span> <span class="token comment">// 3</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">*</span> <span class="token string">&#39;2&#39;</span> <span class="token comment">// 10</span>
<span class="token boolean">true</span> <span class="token operator">-</span> <span class="token number">1</span>  <span class="token comment">// 0</span>
<span class="token boolean">false</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// -1</span>
<span class="token string">&#39;1&#39;</span> <span class="token operator">-</span> <span class="token number">1</span>   <span class="token comment">// 0</span>
<span class="token string">&#39;5&#39;</span> <span class="token operator">*</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>    <span class="token comment">// 0</span>
<span class="token boolean">false</span> <span class="token operator">/</span> <span class="token string">&#39;5&#39;</span> <span class="token comment">// 0</span>
<span class="token string">&#39;abc&#39;</span> <span class="token operator">-</span> <span class="token number">1</span>   <span class="token comment">// NaN</span>
<span class="token keyword">null</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 1</span>
<span class="token keyword">undefined</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// NaN</span>

<span class="token comment">//\u4E00\u5143\u8FD0\u7B97\u7B26\u4E5F\u4F1A\u628A\u8FD0\u7B97\u5B50\u8F6C\u6210\u6570\u503C\u3002</span>
<span class="token operator">+</span><span class="token string">&#39;abc&#39;</span> <span class="token comment">// NaN</span>
<span class="token operator">-</span><span class="token string">&#39;abc&#39;</span> <span class="token comment">// NaN</span>
<span class="token operator">+</span><span class="token boolean">true</span> <span class="token comment">// 1</span>
<span class="token operator">-</span><span class="token boolean">false</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><code>null</code>\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3A<code>0</code>\uFF0C\u800C<code>undefined</code>\u8F6C\u4E3A\u6570\u503C\u65F6\u4E3A<code>NaN</code>\u3002</p></div><h2 id="\u9519\u8BEF\u5904\u7406\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406\u673A\u5236" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406\u673A\u5236</h2><h3 id="error-\u5B9E\u4F8B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#error-\u5B9E\u4F8B\u5BF9\u8C61" aria-hidden="true">#</a> Error \u5B9E\u4F8B\u5BF9\u8C61</h3><p><code>JavaScript</code> \u539F\u751F\u63D0\u4F9B<code>Error</code>\u6784\u9020\u51FD\u6570\uFF0C\u6240\u6709\u629B\u51FA\u7684\u9519\u8BEF\u90FD\u662F\u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u7684\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
err<span class="token punctuation">.</span>message <span class="token comment">// &quot;\u51FA\u9519\u4E86&quot;</span>
<span class="token comment">//\u629B\u51FAError\u5B9E\u4F8B\u5BF9\u8C61\u4EE5\u540E\uFF0C\u6574\u4E2A\u7A0B\u5E8F\u5C31\u4E2D\u65AD\u5728\u53D1\u751F\u9519\u8BEF\u7684\u5730\u65B9\uFF0C\u4E0D\u518D\u5F80\u4E0B\u6267\u884C\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5927\u591A\u6570 <code>JavaScript</code> \u5F15\u64CE\uFF0C\u5BF9<code>Error</code>\u5B9E\u4F8B\u8FD8\u63D0\u4F9B<code>name</code>\u548C<code>stack</code>\u5C5E\u6027\uFF0C\u5206\u522B\u8868\u793A\u9519\u8BEF\u7684\u540D\u79F0\u548C\u9519\u8BEF\u7684\u5806\u6808\uFF0C\u4F46\u5B83\u4EEC\u662F\u975E\u6807\u51C6\u7684\uFF0C\u4E0D\u662F\u6BCF\u79CD\u5B9E\u73B0\u90FD\u6709\u3002</p><ul><li><code>message</code>\uFF1A\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</li><li><code>name</code>\uFF1A\u9519\u8BEF\u540D\u79F0\uFF08\u975E\u6807\u51C6\u5C5E\u6027\uFF09</li><li><code>stack</code>\uFF1A\u9519\u8BEF\u7684\u5806\u6808\uFF08\u975E\u6807\u51C6\u5C5E\u6027\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u4F7F\u7528name\u548Cmessage\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF0C\u53EF\u4EE5\u5BF9\u53D1\u751F\u4EC0\u4E48\u9519\u8BEF\u6709\u4E00\u4E2A\u5927\u6982\u7684\u4E86\u89E3\u3002</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39;: &#39;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*------------------------------------------------------------*/</span>

<span class="token comment">//stack\u5C5E\u6027\u7528\u6765\u67E5\u770B\u9519\u8BEF\u53D1\u751F\u65F6\u7684\u5806\u6808\u3002</span>
<span class="token keyword">function</span> <span class="token function">throwit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">catchit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">throwit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print stack trace</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">catchit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Error</span>
<span class="token comment">//    at throwit (~/examples/throwcatch.js:9:11)</span>
<span class="token comment">//    at catchit (~/examples/throwcatch.js:3:9)</span>
<span class="token comment">//    at repl:1:5</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u539F\u751F\u9519\u8BEF\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u751F\u9519\u8BEF\u7C7B\u578B" aria-hidden="true">#</a> \u539F\u751F\u9519\u8BEF\u7C7B\u578B</h3><p><code>JavaScript</code> \u8FD8\u5B9A\u4E49\u4E86\u5176\u4ED66\u79CD\u9519\u8BEF\u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B58\u5728<code>Error</code>\u76846\u4E2A\u6D3E\u751F\u5BF9\u8C61\u3002</p><ol><li><code>SyntaxError</code>\u5BF9\u8C61\u662F\u89E3\u6790\u4EE3\u7801\u65F6\u53D1\u751F\u7684\u8BED\u6CD5\u9519\u8BEF\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53D8\u91CF\u540D\u9519\u8BEF</span>
<span class="token keyword">var</span> <span class="token number">1</span>a<span class="token punctuation">;</span>
<span class="token comment">// Uncaught SyntaxError: Invalid or unexpected token</span>

<span class="token comment">// \u7F3A\u5C11\u62EC\u53F7</span>
console<span class="token punctuation">.</span>log <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught SyntaxError: Unexpected string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li><code>ReferenceError</code>\u5BF9\u8C61\u662F\u5F15\u7528\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\u65F6\u53D1\u751F\u7684\u9519\u8BEF\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u53D8\u91CF</span>
unknownVariable
<span class="token comment">// Uncaught ReferenceError: unknownVariable is not defined</span>

<span class="token comment">//\u53E6\u4E00\u79CD\u89E6\u53D1\u573A\u666F\u662F\uFF0C\u5C06\u4E00\u4E2A\u503C\u5206\u914D\u7ED9\u65E0\u6CD5\u5206\u914D\u7684\u5BF9\u8C61\uFF0C\u6BD4\u5982\u5BF9\u51FD\u6570\u7684\u8FD0\u884C\u7ED3\u679C\u8D4B\u503C\u3002</span>
<span class="token comment">// \u7B49\u53F7\u5DE6\u4FA7\u4E0D\u662F\u53D8\u91CF</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// Uncaught ReferenceError: Invalid left-hand side in assignment</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li><code>RangeError</code>\u5BF9\u8C61\u662F\u4E00\u4E2A\u503C\u8D85\u51FA\u6709\u6548\u8303\u56F4\u65F6\u53D1\u751F\u7684\u9519\u8BEF\u3002\u4E3B\u8981\u6709\u51E0\u79CD\u60C5\u51B5\uFF0C\u4E00\u662F\u6570\u7EC4\u957F\u5EA6\u4E3A\u8D1F\u6570\uFF0C\u4E8C\u662FNumber\u5BF9\u8C61\u7684\u65B9\u6CD5\u53C2\u6570\u8D85\u51FA\u8303\u56F4\uFF0C\u4EE5\u53CA\u51FD\u6570\u5806\u6808\u8D85\u8FC7\u6700\u5927\u503C\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6570\u7EC4\u957F\u5EA6\u4E0D\u5F97\u4E3A\u8D1F\u6570</span>
<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught RangeError: Invalid array length</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li><code>TypeError</code>\u5BF9\u8C61</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">123</span>
<span class="token comment">// Uncaught TypeError: 123 is not a constructor</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">unknownMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Uncaught TypeError: obj.unknownMethod is not a function</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="5"><li><code>URIError</code>\u5BF9\u8C61\u662F <code>URI</code> \u76F8\u5173\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u6B63\u786E\u65F6\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u4E3B\u8981\u6D89\u53CA<code>encodeURI()</code>\u3001<code>decodeURI()</code>\u3001<code>encodeURIComponent()</code>\u3001<code>decodeURIComponent()</code>\u3001<code>escape()</code>\u548C<code>unescape()</code>\u8FD9\u516D\u4E2A\u51FD\u6570\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;%2&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// URIError: URI malformed</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="6"><li><p><code>eval</code>\u51FD\u6570\u6CA1\u6709\u88AB\u6B63\u786E\u6267\u884C\u65F6\uFF0C\u4F1A\u629B\u51FA<code>EvalError</code>\u9519\u8BEF\u3002\u8BE5\u9519\u8BEF\u7C7B\u578B\u5DF2\u7ECF\u4E0D\u518D\u4F7F\u7528\u4E86\uFF0C\u53EA\u662F\u4E3A\u4E86\u4FDD\u8BC1\u4E0E\u4EE5\u524D\u4EE3\u7801\u517C\u5BB9\uFF0C\u624D\u7EE7\u7EED\u4FDD\u7559\u3002</p></li><li><p>\u4EE5\u4E0A\u8FD96\u79CD\u6D3E\u751F\u9519\u8BEF\uFF0C\u8FDE\u540C\u539F\u59CB\u7684<code>Error</code>\u5BF9\u8C61\uFF0C\u90FD\u662F\u6784\u9020\u51FD\u6570\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528\u5B83\u4EEC\uFF0C\u624B\u52A8\u751F\u6210\u9519\u8BEF\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002\u8FD9\u4E9B\u6784\u9020\u51FD\u6570\u90FD\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u4EE3\u8868\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF08<code>message</code>\uFF09\u3002</p></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> err1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> err2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RangeError</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86\uFF0C\u53D8\u91CF\u8D85\u51FA\u6709\u6548\u8303\u56F4\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> err3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86\uFF0C\u53D8\u91CF\u7C7B\u578B\u65E0\u6548\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

err1<span class="token punctuation">.</span>message <span class="token comment">// &quot;\u51FA\u9519\u4E86\uFF01&quot;</span>
err2<span class="token punctuation">.</span>message <span class="token comment">// &quot;\u51FA\u9519\u4E86\uFF0C\u53D8\u91CF\u8D85\u51FA\u6709\u6548\u8303\u56F4\uFF01&quot;</span>
err3<span class="token punctuation">.</span>message <span class="token comment">// &quot;\u51FA\u9519\u4E86\uFF0C\u53D8\u91CF\u7C7B\u578B\u65E0\u6548\uFF01&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9519\u8BEF" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9519\u8BEF</h3><p>\u4E0B\u9762\u4EE3\u7801\u81EA\u5B9A\u4E49\u4E00\u4E2A\u9519\u8BEF\u5BF9\u8C61<code>UserError</code>\uFF0C\u8BA9\u5B83\u7EE7\u627F<code>Error</code>\u5BF9\u8C61\u3002\u7136\u540E\uFF0C\u5C31\u53EF\u4EE5\u751F\u6210\u8FD9\u79CD\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684\u9519\u8BEF\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">&#39;\u9ED8\u8BA4\u4FE1\u606F&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;UserError&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">UserError</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">UserError</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> UserError<span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">UserError</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u9519\u8BEF\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="throw\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#throw\u8BED\u53E5" aria-hidden="true">#</a> throw\u8BED\u53E5</h3><p><code>throw</code>\u8BED\u53E5\u7684\u4F5C\u7528\u662F\u624B\u52A8\u4E2D\u65AD\u7A0B\u5E8F\u6267\u884C\uFF0C\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;x \u5FC5\u987B\u4E3A\u6B63\u6570&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Uncaught Error: x \u5FC5\u987B\u4E3A\u6B63\u6570</span>
<span class="token comment">// \u53EF\u4EE5\u770B\u5230\uFF0Cthrow\u629B\u51FA\u7684\u9519\u8BEF\u5C31\u662F\u5B83\u7684\u53C2\u6570\uFF0C\u8FD9\u91CC\u662F\u4E00\u4E2AError\u5BF9\u8C61\u7684\u5B9E\u4F8B\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>throw</code>\u4E5F\u53EF\u4EE5\u629B\u51FA\u81EA\u5B9A\u4E49\u9519\u8BEF\u3002\u800C\u4E14<code>throw</code>\u53EF\u4EE5\u629B\u51FA\u4EFB\u4F55\u7C7B\u578B\u7684\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserError</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message <span class="token operator">||</span> <span class="token string">&#39;\u9ED8\u8BA4\u4FE1\u606F&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;UserError&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UserError</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught UserError {message: &quot;\u51FA\u9519\u4E86\uFF01&quot;, name: &quot;UserError&quot;}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>throw</code>\u629B\u51FA\u7684\u662F\u4E00\u4E2AUserError\u5B9E\u4F8B\u3002</p><h3 id="try-catch-\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#try-catch-\u7ED3\u6784" aria-hidden="true">#</a> try...catch \u7ED3\u6784</h3><p><code>JavaScript</code> \u63D0\u4F9B\u4E86<code>try...catch</code>\u7ED3\u6784\uFF0C\u5141\u8BB8\u5BF9\u9519\u8BEF\u8FDB\u884C\u5904\u7406\uFF0C\u9009\u62E9\u662F\u5426\u5F80\u4E0B\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Error: \u51FA\u9519\u4E86!</span>
<span class="token comment">//   at &lt;anonymous&gt;:3:9</span>
<span class="token comment">//   ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>catch</code>\u4EE3\u7801\u5757\u6355\u83B7\u9519\u8BEF\u4E4B\u540E\uFF0C\u7A0B\u5E8F\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u4F1A\u6309\u7167\u6B63\u5E38\u6D41\u7A0B\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\u3002<code>try...catch</code>\u53EF\u4EE5\u4E92\u76F8\u5D4C\u5957\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token string">&quot;\u51FA\u9519\u4E86&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 111</span>
<span class="token comment">// 222</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="finally-\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#finally-\u4EE3\u7801\u5757" aria-hidden="true">#</a> finally \u4EE3\u7801\u5757</h3><p><code>try...catch</code>\u7ED3\u6784\u5141\u8BB8\u5728\u6700\u540E\u6DFB\u52A0\u4E00\u4E2A<code>finally</code>\u4EE3\u7801\u5757\uFF0C\u8868\u793A\u4E0D\u7BA1\u662F\u5426\u51FA\u73B0\u9519\u8BEF\uFF0C\u90FD\u5FC5\u9700\u5728\u6700\u540E\u8FD0\u884C\u7684\u8BED\u53E5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cleansUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86\u2026\u2026&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6B64\u884C\u4E0D\u4F1A\u6267\u884C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B8C\u6210\u6E05\u7406\u5DE5\u4F5C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">cleansUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B8C\u6210\u6E05\u7406\u5DE5\u4F5C</span>
<span class="token comment">// Uncaught Error: \u51FA\u9519\u4E86\u2026\u2026</span>
<span class="token comment">//    at cleansUp (&lt;anonymous&gt;:3:11)</span>
<span class="token comment">//    at &lt;anonymous&gt;:10:1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u7531\u4E8E\u6CA1\u6709<code>catch</code>\u8BED\u53E5\u5757\uFF0C\u4E00\u65E6\u53D1\u751F\u9519\u8BEF\uFF0C\u4EE3\u7801\u5C31\u4F1A\u4E2D\u65AD\u6267\u884C\u3002\u4E2D\u65AD\u6267\u884C\u4E4B\u524D\uFF0C\u4F1A\u5148\u6267\u884C<code>finally</code>\u4EE3\u7801\u5757\uFF0C\u7136\u540E\u518D\u5411\u7528\u6237\u63D0\u793A\u62A5\u9519\u4FE1\u606F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">idle</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&#39;result&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;FINALLY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">idle</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// hello</span>
<span class="token comment">// FINALLY</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>try</code>\u4EE3\u7801\u5757\u6CA1\u6709\u53D1\u751F\u9519\u8BEF\uFF0C\u800C\u4E14\u91CC\u9762\u8FD8\u5305\u62EC<code>return</code>\u8BED\u53E5\uFF0C\u4F46\u662F<code>finally</code>\u4EE3\u7801\u5757\u4F9D\u7136\u4F1A\u6267\u884C\u3002\u800C\u4E14\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8FD8\u662F<code>result</code>\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u8BF4\u660E\uFF0C<code>return</code>\u8BED\u53E5\u7684\u6267\u884C\u662F\u6392\u5728<code>finally</code>\u4EE3\u7801\u4E4B\u524D\uFF0C\u53EA\u662F\u7B49<code>finally</code>\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u540E\u624D\u8FD4\u56DE\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">countUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">countUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 0</span>
count
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u5145\u5206\u53CD\u6620\u4E86<code>try...catch...finally</code>\u8FD9\u4E09\u8005\u4E4B\u95F4\u7684\u6267\u884C\u987A\u5E8F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token string">&#39;bug&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u53E5\u539F\u672C\u4F1A\u5EF6\u8FDF\u5230 finally \u4EE3\u7801\u5757\u7ED3\u675F\u518D\u6267\u884C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u4F1A\u8FD0\u884C</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u53E5\u4F1A\u8986\u76D6\u6389\u524D\u9762\u90A3\u53E5 return</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u4F1A\u8FD0\u884C</span>
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u4F1A\u8FD0\u884C</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// 3</span>

result
<span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>catch</code>\u4EE3\u7801\u5757\u7ED3\u675F\u6267\u884C\u4E4B\u524D\uFF0C\u4F1A\u5148\u6267\u884C<code>finally</code>\u4EE3\u7801\u5757\u3002</p><p><code>catch</code>\u4EE3\u7801\u5757\u4E4B\u4E2D\uFF0C\u89E6\u53D1\u8F6C\u5165<code>finally</code>\u4EE3\u7801\u5757\u7684\u6807\u5FD7\uFF0C\u4E0D\u4EC5\u6709<code>return</code>\u8BED\u53E5\uFF0C\u8FD8\u6709<code>throw</code>\u8BED\u53E5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&#39;\u51FA\u9519\u4E86\uFF01&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6355\u6349\u5230\u5185\u90E8\u9519\u8BEF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> e<span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u53E5\u539F\u672C\u4F1A\u7B49\u5230finally\u7ED3\u675F\u518D\u6267\u884C</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u76F4\u63A5\u8FD4\u56DE</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B64\u5904\u4E0D\u4F1A\u6267\u884C</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;caught outer &quot;bogus&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//  \u6355\u6349\u5230\u5185\u90E8\u9519\u8BEF</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u8FDB\u5165<code>catch</code>\u4EE3\u7801\u5757\u4E4B\u540E\uFF0C\u4E00\u9047\u5230<code>throw</code>\u8BED\u53E5\uFF0C\u5C31\u4F1A\u53BB\u6267\u884C<code>finally</code>\u4EE3\u7801\u5757\uFF0C\u5176\u4E2D\u6709<code>return false</code>\u8BED\u53E5\uFF0C\u56E0\u6B64\u5C31\u76F4\u63A5\u8FD4\u56DE\u4E86\uFF0C\u4E0D\u518D\u4F1A\u56DE\u53BB\u6267\u884C<code>catch</code>\u4EE3\u7801\u5757\u5269\u4E0B\u7684\u90E8\u5206\u4E86\u3002</p><h2 id="console-\u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0" tabindex="-1"><a class="header-anchor" href="#console-\u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0" aria-hidden="true">#</a> console \u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0</h2><p><code>console</code>\u7684\u5E38\u89C1\u7528\u9014\u6709\u4E24\u4E2A\u3002</p><ul><li>\u8C03\u8BD5\u7A0B\u5E8F\uFF0C\u663E\u793A\u7F51\u9875\u4EE3\u7801\u8FD0\u884C\u65F6\u7684\u9519\u8BEF\u4FE1\u606F\u3002</li><li>\u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4\u884C\u63A5\u53E3\uFF0C\u7528\u6765\u4E0E\u7F51\u9875\u4EE3\u7801\u4E92\u52A8\u3002</li></ul><h3 id="console-\u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#console-\u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> console \u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5</h3><p><code>console</code>\u5BF9\u8C61\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u90FD\u53EF\u4EE5\u88AB\u8986\u76D6\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u9700\u8981\uFF0C\u5B9A\u4E49<code>console.log</code>\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;log&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> console<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>
    console<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u9519\u4E86\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2014-05-18T09:00.000Z \u51FA\u9519\u4E86\uFF01</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol><li><code>console.log()</code>:\u65B9\u6CD5\u7528\u4E8E\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u4FE1\u606F\u3002</li><li><code>console.info()</code>:\u662F<code>console.log</code>\u65B9\u6CD5\u7684\u522B\u540D\uFF0C\u7528\u6CD5\u5B8C\u5168\u4E00\u6837\u3002\u53EA\u4E0D\u8FC7<code>console.info</code>\u65B9\u6CD5\u4F1A\u5728\u8F93\u51FA\u4FE1\u606F\u7684\u524D\u9762\uFF0C\u52A0\u4E0A\u4E00\u4E2A\u84DD\u8272\u56FE\u6807\u3002</li><li><code>console.debug()</code>:\u8F93\u51FA\u7684\u4FE1\u606F\u4E0D\u4F1A\u663E\u793A,\u4E0E<code>console.log</code>\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53EA\u6709\u5728\u6253\u5F00\u663E\u793A\u7EA7\u522B\u5728<code>verbose</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u624D\u4F1A\u663E\u793A\u3002</li><li><code>console.warn()</code>\uFF0C<code>console.error()</code></li></ol><p>\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF0C<code>log</code>\u65B9\u6CD5\u662F\u5199\u5165\u6807\u51C6\u8F93\u51FA\uFF08<code>stdout</code>\uFF09\uFF0C<code>warn</code>\u65B9\u6CD5\u548C<code>error</code>\u65B9\u6CD5\u662F\u5199\u5165\u6807\u51C6\u9519\u8BEF\uFF08stderr\uFF09\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error: %s (%i)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Server is not responding&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token comment">// Error: Server is not responding (500)</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Warning! Too few nodes (%d)&#39;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// Warning! Too few nodes (1)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="5"><li><code>console.table()</code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> languages <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> fileExtension<span class="token operator">:</span> <span class="token string">&quot;.js&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;TypeScript&quot;</span><span class="token punctuation">,</span> fileExtension<span class="token operator">:</span> <span class="token string">&quot;.ts&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;CoffeeScript&quot;</span><span class="token punctuation">,</span> fileExtension<span class="token operator">:</span> <span class="token string">&quot;.coffee&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>languages<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7684<code>language</code>\u53D8\u91CF\uFF0C\u8F6C\u4E3A\u8868\u683C\u663E\u793A\u5982\u4E0B\u3002</p><table><thead><tr><th>(index)</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">name</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">fileExtension</th></tr></thead><tbody><tr><td>0</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">&quot;JavaScript&quot;</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">&quot;.js&quot;</td></tr><tr><td>1</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">&quot;TypeScript&quot;</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">&quot;.ts&quot;</td></tr><tr><td>2</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">&quot;CoffeeScript&quot;</td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}">&quot;.coffee&quot;</td></tr></tbody></table><ol start="6"><li><code>console.count() </code></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//count\u65B9\u6CD5\u7528\u4E8E\u8BA1\u6570\uFF0C\u8F93\u51FA\u5B83\u88AB\u8C03\u7528\u4E86\u591A\u5C11\u6B21\u3002</span>
<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 1</span>
<span class="token comment">// &quot;hi bob&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;alice&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 2</span>
<span class="token comment">// &quot;hi alice&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 3</span>
<span class="token comment">// &quot;hi bob&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="7"><li><code>console.dir()</code>\uFF0C<code>console.dirxml()</code></li></ol><p><code>dir</code>\u65B9\u6CD5\u7528\u6765\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u8FDB\u884C\u68C0\u67E5\uFF08<code>inspect</code>\uFF09\uFF0C\u5E76\u4EE5\u6613\u4E8E\u9605\u8BFB\u548C\u6253\u5370\u7684\u683C\u5F0F\u663E\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>f1<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> f2<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Object {f1: &quot;foo&quot;, f2: &quot;bar&quot;}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">{</span>f1<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> f2<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Object</span>
<span class="token comment">//   f1: &quot;foo&quot;</span>
<span class="token comment">//   f2: &quot;bar&quot;</span>
<span class="token comment">//   __proto__: Object</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>dirxml</code>\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u4EE5\u76EE\u5F55\u6811\u7684\u5F62\u5F0F\uFF0C\u663E\u793A<code>DOM</code>\u8282\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">dirxml</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u53C2\u6570\u4E0D\u662F <code>DOM</code> \u8282\u70B9\uFF0C\u800C\u662F\u666E\u901A\u7684 <code>JavaScript</code> \u5BF9\u8C61\uFF0C<code>console.dirxml</code>\u7B49\u540C\u4E8E<code>console.dir</code>\u3002</p><ol start="8"><li><code>onsole.assert()</code></li></ol><p><code>console.assert</code>\u65B9\u6CD5\u4E3B\u8981\u7528\u4E8E\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8FDB\u884C\u6761\u4EF6\u5224\u65AD\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u5C31\u663E\u793A\u4E00\u4E2A\u9519\u8BEF\uFF0C\u4F46\u4E0D\u4F1A\u4E2D\u65AD\u7A0B\u5E8F\u6267\u884C\u3002\u8FD9\u6837\u5C31\u76F8\u5F53\u4E8E\u63D0\u793A\u7528\u6237\uFF0C\u5185\u90E8\u72B6\u6001\u4E0D\u6B63\u786E\u3002</p><p>\u5B83\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8868\u8FBE\u5F0F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5B57\u7B26\u4E32\u3002\u53EA\u6709\u5F53\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A<code>false</code>\uFF0C\u624D\u4F1A\u63D0\u793A\u6709\u9519\u8BEF\uFF0C\u5728\u63A7\u5236\u53F0\u8F93\u51FA\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5426\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u7ED3\u679C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5224\u65AD\u6761\u4EF6\u4E0D\u6210\u7ACB&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// Assertion failed: \u5224\u65AD\u6761\u4EF6\u4E0D\u6210\u7ACB</span>

<span class="token comment">// \u76F8\u5F53\u4E8E</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5224\u65AD\u6761\u4EF6\u4E0D\u6210\u7ACB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="9"><li><code>console.time()</code>\uFF0C<code>console.timeEnd()</code></li></ol><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7528\u4E8E\u8BA1\u65F6\uFF0C\u53EF\u4EE5\u7B97\u51FA\u4E00\u4E2A\u64CD\u4F5C\u6240\u82B1\u8D39\u7684\u51C6\u786E\u65F6\u95F4\u3002\u6BD4\u8F83\u5E38\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;Array initialize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> array<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;Array initialize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Array initialize: 1914.481ms</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="10"><li><code>console.group()</code>\uFF0C<code>console.groupEnd()</code>\uFF0C<code>console.groupCollapsed()</code></li></ol><p><code>console.group</code>\u548C<code>console.groupEnd</code>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u7528\u4E8E\u5C06\u663E\u793A\u7684\u4FE1\u606F\u5206\u7EC4\u3002\u5B83\u53EA\u5728\u8F93\u51FA\u5927\u91CF\u4FE1\u606F\u65F6\u6709\u7528\uFF0C\u5206\u5728\u4E00\u7EC4\u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u7528\u9F20\u6807\u6298\u53E0/\u5C55\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E00\u7EA7\u5206\u7EC4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E00\u7EA7\u5206\u7EC4\u7684\u5185\u5BB9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E8C\u7EA7\u5206\u7EC4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E8C\u7EA7\u5206\u7EC4\u7684\u5185\u5BB9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E8C\u7EA7\u5206\u7EC4\u7ED3\u675F</span>
console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4E00\u7EA7\u5206\u7EC4\u7ED3\u675F</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>console.groupCollapsed</code>\u65B9\u6CD5\u4E0E<code>console.group</code>\u65B9\u6CD5\u5F88\u7C7B\u4F3C</p><ol start="11"><li><code>console.trace()</code>\uFF0C<code>console.clear() </code></li></ol><p><code>console.trace</code>\u65B9\u6CD5\u663E\u793A\u5F53\u524D\u6267\u884C\u7684\u4EE3\u7801\u5728\u5806\u6808\u4E2D\u7684\u8C03\u7528\u8DEF\u5F84\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// console.trace()</span>
<span class="token comment">//   (anonymous function)</span>
<span class="token comment">//   InjectedScript._evaluateOn</span>
<span class="token comment">//   InjectedScript._evaluateAndWrap</span>
<span class="token comment">//   InjectedScript.evaluate</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>console.clear</code>\u65B9\u6CD5\u7528\u4E8E\u6E05\u9664\u5F53\u524D\u63A7\u5236\u53F0\u7684\u6240\u6709\u8F93\u51FA\uFF0C\u5C06\u5149\u6807\u56DE\u7F6E\u5230\u7B2C\u4E00\u884C\u3002\u5982\u679C\u7528\u6237\u9009\u4E2D\u4E86\u63A7\u5236\u53F0\u7684<code>\u201CPreserve log\u201D</code>\u9009\u9879\uFF0C<code>console.clear</code>\u65B9\u6CD5\u5C06\u4E0D\u8D77\u4F5C\u7528\u3002</p><h3 id="\u63A7\u5236\u53F0\u547D\u4EE4\u884C-api" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u547D\u4EE4\u884C-api" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u547D\u4EE4\u884C API</h3><p>\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u4E2D\uFF0C\u9664\u4E86\u4F7F\u7528<code>console</code>\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u63A7\u5236\u53F0\u81EA\u5E26\u7684\u547D\u4EE4\u884C\u65B9\u6CD5\u3002</p><h3 id="debugger-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#debugger-\u8BED\u53E5" aria-hidden="true">#</a> debugger \u8BED\u53E5</h3><p><code>debugger</code>\u8BED\u53E5\u4E3B\u8981\u7528\u4E8E\u9664\u9519\uFF0C\u4F5C\u7528\u662F\u8BBE\u7F6E\u65AD\u70B9\u3002\u5982\u679C\u6709\u6B63\u5728\u8FD0\u884C\u7684\u9664\u9519\u5DE5\u5177\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u5230<code>debugger</code>\u8BED\u53E5\u65F6\u4F1A\u81EA\u52A8\u505C\u4E0B\u3002\u5982\u679C\u6CA1\u6709\u9664\u9519\u5DE5\u5177\uFF0C<code>debugger</code>\u8BED\u53E5\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u7ED3\u679C\uFF0C<code>JavaScript</code>\u5F15\u64CE\u81EA\u52A8\u8DF3\u8FC7\u8FD9\u4E00\u53E5\u3002</p><!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/JavaScript/\u8BED\u6CD5\u57FA\u7840.html.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _____html$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
var _____html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _____html$3
});
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h2 id="\u524D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E" aria-hidden="true">#</a> \u524D\u7F6E</h2><p>\u6700\u597D\u6709\u4E00\u5B9A\u7684HTML\u3001JavaScript\u3001CSS\u57FA\u7840\u3002</p><h2 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM\uFF1F</h2><p><code>MVVM</code>\u662F<code>Model-View-ViewModel</code>\u7684\u7F29\u5199\u3002<br><code>MVVM</code> \u7684\u6838\u5FC3\u662F <code>ViewModel</code> \u5C42\uFF0C\u5B83\u5C31\u50CF\u662F\u4E00\u4E2A\u4E2D\u8F6C\u7AD9<code>\uFF08value converter\uFF09</code>\uFF0C\u8D1F\u8D23\u8F6C\u6362 <code>Model</code> \u4E2D\u7684\u6570\u636E\u5BF9\u8C61\u6765\u8BA9\u6570\u636E\u53D8\u5F97\u66F4\u5BB9\u6613\u7BA1\u7406\u548C\u4F7F\u7528\uFF0C\u8BE5\u5C42\u5411\u4E0A\u4E0E\u89C6\u56FE\u5C42\u8FDB\u884C\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u5411\u4E0B\u4E0E <code>Model</code> \u5C42\u901A\u8FC7\u63A5\u53E3\u8BF7\u6C42\u8FDB\u884C\u6570\u636E\u4EA4\u4E92\uFF0C\u8D77\u5448\u4E0A\u542F\u4E0B\u4F5C\u7528\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u53C2\u8003</p><p><a href="http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html" target="_blank" rel="noopener noreferrer">http://www.ruanyifeng.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><br><a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1108898947791072" target="_blank" rel="noopener noreferrer">https://www.liaoxuefeng.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><br><a href="https://www.cnblogs.com/iovec/p/7840228.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><br></p></div><h3 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h3><p>\uFF08\u6709\u5370\u8C61\u5373\u53EF\uFF09</p><p><img src="https://s6.jpg.cm/2022/01/04/LN4yR5.png" alt="LN4yR5.png"></p><p>\u6240\u6709\u901A\u4FE1\u90FD\u662F\u5355\u5411\u7684\u3002\uFF08\u6709\u65F6MVC\u4F1A\u5BFC\u81F4\u4E1A\u52A1\u903B\u8F91\u90FD\u90E8\u7F72\u5728 View\uFF0C\u4F7FView \u975E\u5E38\u539A\uFF0C\u800C Controller \u76F8\u5BF9\u8584\u3002\uFF09</p><h3 id="mvp" tabindex="-1"><a class="header-anchor" href="#mvp" aria-hidden="true">#</a> MVP</h3><p>\uFF08\u6709\u5370\u8C61\u5373\u53EF\uFF09</p><p><img src="https://s6.jpg.cm/2022/01/04/LN4MTG.png" alt="LN4MTG.png"></p><p>MVP \u6A21\u5F0F\u5C06 Controller \u6539\u540D\u4E3A Presenter\uFF0C\u540C\u65F6\u6539\u53D8\u4E86\u901A\u4FE1\u65B9\u5411\u3002</p><ol><li><p>\u5404\u90E8\u5206\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u90FD\u662F\u53CC\u5411\u7684\u3002</p></li><li><p>View \u4E0E Model \u4E0D\u53D1\u751F\u8054\u7CFB\uFF0C\u90FD\u901A\u8FC7 Presenter \u4F20\u9012\u3002</p></li><li><p>View \u975E\u5E38\u8584\uFF0C\u4E0D\u90E8\u7F72\u4EFB\u4F55\u4E1A\u52A1\u903B\u8F91\uFF0C\u79F0\u4E3A&quot;\u88AB\u52A8\u89C6\u56FE&quot;\uFF08Passive View\uFF09\uFF0C\u5373\u6CA1\u6709\u4EFB\u4F55\u4E3B\u52A8\u6027\uFF0C\u800C Presenter\u975E\u5E38\u539A\uFF0C\u6240\u6709\u903B\u8F91\u90FD\u90E8\u7F72\u5728\u90A3\u91CC\u3002</p></li><li><p>\u4E4B\u6240\u4EE5\u5217\u51FAMVP\uFF0C\u662F\u56E0\u4E3AMVVM \u6A21\u5F0F\u5C06 Presenter \u6539\u540D\u4E3A ViewModel\uFF0C\u57FA\u672C\u4E0A\u4E0E MVP \u6A21\u5F0F\u5B8C\u5168\u4E00\u81F4\uFF08\u6CE8\u610F\u5BF9\u6BD4\u7BAD\u5934\u2014\u2014\u901A\u8BAF\u65B9\u5F0F\u7684\u533A\u522B\uFF09\u3002</p></li></ol><h3 id="mvvm-1" tabindex="-1"><a class="header-anchor" href="#mvvm-1" aria-hidden="true">#</a> MVVM</h3><p><img src="https://s6.jpg.cm/2022/01/04/LN4Dmu.png" alt="LN4Dmu.png"></p><p>\u552F\u4E00\u7684\u533A\u522B\u662F\uFF0C\u5B83\u91C7\u7528\u53CC\u5411\u7ED1\u5B9A\uFF08data-binding\uFF09\uFF1AView\u7684\u53D8\u52A8\uFF0C\u81EA\u52A8\u53CD\u6620\u5728 ViewModel\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002Angular \u548C Ember \u90FD\u91C7\u7528\u8FD9\u79CD\u6A21\u5F0F\u3002</p><h3 id="\u4F8B\u5B50\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50\u5BF9\u6BD4" aria-hidden="true">#</a> \u4F8B\u5B50\u5BF9\u6BD4</h3><ol><li><code>MVC</code>\u6A21\u5F0F\uFF08<code>jQuery</code>\u5B9E\u73B0\u7684\u4FEE\u6539\u4E24\u4E2ADOM\u8282\u70B9\u7684\u4F8B\u5B50\uFF09</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hello, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>You are <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;Homer&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">51</span><span class="token punctuation">;</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u64CD\u4F5CDOM</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>\u5982\u679C\u6211\u4EEC\u4F7F\u7528<code>MVVM</code>\u6846\u67B6\u6765\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u9996\u5148\u5E76\u4E0D\u5173\u5FC3<code>DOM</code>\u7684\u7ED3\u6784\uFF0C\u800C\u662F\u5173\u5FC3\u6570\u636E\u5982\u4F55\u5B58\u50A8\u3002\u6700\u7B80\u5355\u7684\u6570\u636E\u5B58\u50A8\u65B9\u5F0F\u662F\u4F7F\u7528<code>JavaScript</code>\u5BF9\u8C61\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;Bart&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span> <span class="token number">12</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Homer&#39;</span><span class="token punctuation">;</span>
person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">51</span><span class="token punctuation">;</span>
<span class="token comment">//\u6539\u53D8JavaScript\u5BF9\u8C61\u7684\u72B6\u6001\uFF0C\u4F1A\u5BFC\u81F4DOM\u7ED3\u6784\u4F5C\u51FA\u5BF9\u5E94\u7684\u53D8\u5316</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="vue\u5B9E\u73B0\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#vue\u5B9E\u73B0\u4F8B\u5B50" aria-hidden="true">#</a> vue\u5B9E\u73B0\u4F8B\u5B50</h3><p>\u770B\u5B8C\u4E0A\u9762\u61F5\u61F5\u61C2\u61C2\uFF1F\u4E0B\u9762\u770B\u4E00\u4E9B\u5728<code>vue</code>\u4E2D\u7684\u4F53\u73B0\uFF0C\u4E0D\u6DF1\u7A76\uFF0C\u6BD5\u7ADF\u8FD9\u91CC\u8FD8\u6CA1\u5F00\u59CB\u8FDB\u5165\u5B66\u4E60\uFF0C\u5728\u540E\u7EED\u4F7F\u7528\u4E2D\u5C31\u4F1A\u660E\u767D\uFF1A</p><p>Vue \u7684 View \u6A21\u677F\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">v-on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMessage()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Vue \u7684 ViewModel \u5C42\uFF08\u4F2A\u4EE3\u7801\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">// \u7528\u4E8E\u63CF\u8FF0\u89C6\u56FE\u72B6\u6001\uFF08\u6709\u57FA\u4E8E Model \u5C42\u6570\u636E\u5B9A\u4E49\u7684\uFF0C\u4E5F\u6709\u7EAF\u524D\u7AEF\u5B9A\u4E49\uFF09</span>
        message<span class="token operator">:</span> <span class="token string">&#39;Hello Vue!&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u7EAF\u524D\u7AEF\u5B9A\u4E49</span>
        server<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5B58\u653E\u57FA\u4E8E Model \u5C42\u6570\u636E\u7684\u4E8C\u6B21\u5C01\u88C5\u6570\u636E</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// \u7528\u4E8E\u63CF\u8FF0\u89C6\u56FE\u884C\u4E3A\uFF08\u5B8C\u5168\u524D\u7AEF\u5B9A\u4E49\uFF09</span>
        <span class="token function">showMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
            <span class="token function">alert</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

        <span class="token comment">// Ajax \u83B7\u53D6 Model \u5C42\u7684\u6570\u636E</span>
        <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            url<span class="token operator">:</span> <span class="token string">&#39;/your/server/data/api&#39;</span><span class="token punctuation">,</span>
            <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// TODO \u5BF9\u83B7\u53D6\u5230\u7684 Model \u6570\u636E\u8FDB\u884C\u8F6C\u6362\u5904\u7406\uFF0C\u505A\u4E8C\u6B21\u5C01\u88C5</span>
                vm<span class="token punctuation">.</span>server <span class="token operator">=</span> res<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u670D\u52A1\u7AEF\u7684 Model \u5C42\uFF08\u7701\u7565\u4E1A\u52A1\u903B\u8F91\u5904\u7406\uFF0C\u53EA\u63CF\u8FF0\u5BF9\u5916\u63A5\u53E3\uFF09\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/your/server/data/api&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;res&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;success&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;IoveC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;www.cnblogs.com&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u518D\u7ED9\u4E00\u5F20\u56FE\uFF1A</p><p><img src="https://s6.jpg.cm/2022/01/04/LNBNCy.png" alt="LNBNCy.png"></p><p>\u8FD9\u5C31\u5B9E\u73B0\u4E86\u524D\u540E\u7AEF\u5206\u79BB\u4E86\u3002</p><p>\u6846\u67B6\u5E2E\u6211\u4EEC\u5B9E\u73B0\u4E86MVVM\u6A21\u5F0F\uFF0C\u6211\u4EEC\u4EE5\u8FD9\u6837\u7684\u6A21\u5F0F\u8FDB\u884C\u5F00\u53D1\u3002OK\uFF1F</p><h2 id="\u5B89\u88C5vue-devtools" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5vue-devtools" aria-hidden="true">#</a> \u5B89\u88C5vue-devtools</h2><p>\u963F\u91CC\u4E91\u76D8\u5206\u4EAB\uFF1A<a href="https://www.aliyundrive.com/s/xcqqvUnWqeV" target="_blank" rel="noopener noreferrer">vue-devtools5.3.4.crx`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u6D4F\u89C8\u5668\u63D2\u4EF6\u6587\u4EF6</p><p><strong>\u63D2\u4EF6\u65B9\u5F0F\u5B89\u88C5</strong>\uFF1A</p><ol><li>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF08.crx\u6587\u4EF6\uFF09</li><li>\u6253\u5F00\u6269\u5C55\u7A0B\u5E8F\u5B89\u88C5\u9875\u9762\uFF0Cchrome\u6D4F\u89C8\u5668\u53EF\u8F93\u5165\uFF1A<code>chrome://extensions</code>\uFF0C\u6253\u5F00\u53F3\u4E0A\u89D2\u7684\u3010\u5F00\u53D1\u8005\u6A21\u5F0F\u3011\u3002</li><li>\u5C06\u4E0B\u8F7D\u597D\u7684.crx\u6587\u4EF6\u62D6\u62FD\u5230\u5230\u6269\u5C55\u5B89\u88C5\u9875\u9762\u5185\uFF0C\u7B49\u5F85\u6570\u79D2\uFF0C\u5728\u5B89\u88C5\u5F39\u7A97\u5185\u70B9\u51FB\u6DFB\u52A0\u5373\u53EF\u3002</li></ol><p><strong>\u624B\u52A8\u5B89\u88C5</strong>\uFF1A</p><ol><li>\u5230guthub\u4E0A\u53BB\u4E0B\u8F7D\u5B89\u88C5\u5305\uFF0C<a href="https://github.com/vuejs/vue-devtools/tree/master" target="_blank" rel="noopener noreferrer">vue-devtools`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>,\u4E0B\u8F7D\u6210\u529F\u540E\u91CC\u9762\u4F1A\u6709\u4E00\u4E2A<code>shells</code>\u6587\u4EF6\u5939\uFF0C\u8BF4\u660E\u662F\u53EF\u7528\u7248\u672C\uFF0C\u4E0D\u662F<code>master</code>\u5206\u652F\u7684\u4E0D\u4F1A\u4E0D\u4F1A\u6709\u6B64\u6587\u4EF6\u5939</li><li>\u8FDB\u5165<code>vue-devtools-master</code>\u6587\u4EF6\u5939\u4E0B\uFF0C\u5728\u8DEF\u5F84\u680F\u8F93\u5165cmd\uFF0C\u7136\u540E\u56DE\u8F66\u3002</li><li>\u7136\u540E\u8F93\u5165<code>npm install</code>\u547D\u4EE4\u5B89\u88C5\u4F9D\u8D56\u3002\uFF08\u5982\u679C\u9519\u8BEF\u5927\u4E0D\u4E86\u63A8\u5012\u91CD\u6765\uFF0C\u68C0\u67E5\u662F\u5426\u4E3A<code>master</code>\u5206\u652F\uFF0C\u6216\u4F7F\u7528<code>cnpm</code>\u7B49\u65B9\u6CD5\u4E0B\u8F7D\u3002\uFF09</li><li>\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u6267\u884C\u547D\u4EE4<code>npm run build</code>\u3002</li><li>\u6253\u5F00\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF0C\u8FDB\u5165\u66F4\u591A\u5DE5\u5177 &gt; \u6269\u5C55\u7A0B\u5E8F &gt; \u70B9\u51FB\u52A0\u8F7D\u5DF2\u89E3\u538B\u7684\u62D3\u5C55\u7A0B\u5E8F &gt; \u9009\u62E9<code>vue-devtools-matser</code>\u6587\u4EF6\u4E2D<code>shells</code>\u6587\u4EF6\u4E2D\u7684<code>chrome</code>\u6587\u4EF6\u3002</li></ol><p>\u5B89\u88C5\u6210\u529F\u4F60\u4F1A\u770B\u5230\u4E0B\u9762\u5185\u5BB9\uFF1A <img src="https://s2.loli.net/2022/01/07/iAPnmWhQY7aOBVE.png" alt=""></p><p>\u8C03\u8BD5\u9700\u8981\u4F60\u8FD0\u884C\u4E00\u4E2Avue\u5B9E\u4F8B\u3002</p><h2 id="\u5F00\u53D1\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u5DE5\u5177" aria-hidden="true">#</a> \u5F00\u53D1\u5DE5\u5177</h2><p>\u5BF9\u5F00\u53D1\u5DE5\u5177\u6CA1\u592A\u5927\u8981\u6C42\uFF0C\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u5DE5\u5177\uFF1A</p><ol><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://www.dcloud.io/hbuilderx.html" target="_blank" rel="noopener noreferrer">HBuilder X`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">WebStorm`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/vue/01.html.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var _01_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5]]);
var _01_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _01_html$1
});
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<!--[--><h1 id="vue2-x" tabindex="-1"><a class="header-anchor" href="#vue2-x" aria-hidden="true">#</a> vue2.x</h1><h2 id="\u5F15\u5165vue" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165vue" aria-hidden="true">#</a> \u5F15\u5165vue</h2><p><a href="https://cn.vuejs.org/v2/guide/installation.html" target="_blank" rel="noopener noreferrer">\u5B98\u7F51\u4E0B\u8F7D`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>:</p><ul><li>\u5F00\u53D1\u7248\u672C\uFF1A\u5305\u542B\u5B8C\u6574\u7684\u8B66\u544A\u548C\u8C03\u8BD5\u6A21\u5F0F</li><li>\u751F\u4EA7\u7248\u672C\uFF1A\u5220\u9664\u4E86\u8B66\u544A\uFF0C\u8FDB\u884C\u4E86\u538B\u7F29</li></ul><h2 id="vue\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#vue\u5B9E\u4F8B" aria-hidden="true">#</a> vue\u5B9E\u4F8B</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ message }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
            message<span class="token operator">:</span> <span class="token string">&#39;Hello World&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684vue\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A <code>Vue</code> \u5E94\u7528\u90FD\u662F\u901A\u8FC7\u7528 <code>Vue</code> \u51FD\u6570\u521B\u5EFA\u7684\u3002<br> \u5373<code>new Vue</code>\u3002</p><p><strong>\u4F60\u53EF\u80FD\u4F1A\u95EE(\u4F46\u662F\u8FD8\u4E0D\u9700\u8981\u61C2)</strong>\uFF1A</p><ol><li><code>el</code>:\u63D0\u4F9B\u4E00\u4E2A\u5728\u9875\u9762\u4E0A\u5DF2\u5B58\u5728\u7684 <code>DOM</code> \u5143\u7D20\u4F5C\u4E3A <code>Vue</code> \u5B9E\u4F8B\u7684\u6302\u8F7D\u76EE\u6807\u3002\u53EF\u4EE5\u662F <code>CSS</code> \u9009\u62E9\u5668\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A <code>HTMLElement</code> \u5B9E\u4F8B\u3002</li><li><code>data</code>:<code>Vue </code>\u5B9E\u4F8B\u7684\u6570\u636E\u5BF9\u8C61\u3002<code>Vue</code> \u4F1A\u9012\u5F52\u5730\u628A <code>data</code> \u7684 <code>property</code> \u8F6C\u6362\u4E3A <code>getter/setter</code>\uFF0C\u4ECE\u800C\u8BA9 <code>data</code> \u7684 <code>property</code> \u80FD\u591F\u54CD\u5E94\u6570\u636E\u53D8\u5316\u3002(\u6709\u5370\u8C61\uFF0C\u522B\u6DF1\u7A76\u3002)</li></ol><h2 id="\u63D2\u503C\u4E0E\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u63D2\u503C\u4E0E\u6307\u4EE4" aria-hidden="true">#</a> \u63D2\u503C\u4E0E\u6307\u4EE4</h2><h3 id="v-if\u3001v-else\u3001v-show" tabindex="-1"><a class="header-anchor" href="#v-if\u3001v-else\u3001v-show" aria-hidden="true">#</a> v-if\u3001v-else\u3001v-show</h3><p><strong>1. <code>v-if</code>\u7528\u6765\u5224\u65AD\u662F\u5426\u52A0\u8F7D<code>html</code>\u7684<code>DOM</code>\u3002</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- \u4E3B\u8981\u4EE3\u7801 --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>v-if<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u8BF7\u770B\u4E0B\u9762\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>seeing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>YES<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>NO<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
            seeing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u8868\u793A\u4E86<code>v-if</code>\u901A\u8FC7\u5224\u65AD<code>seeing</code>\u7684<code>boolean</code>\u503C\u51B3\u5B9A\u4E86\u521B\u5EFA<code>\u2018YES\u2019</code>\u6216<code>\u2018NO\u2019</code>\u7684<code>h2</code>\u5143\u7D20\uFF1A</p><p><img src="https://s2.loli.net/2022/01/07/7JZNMSI3aP4lFnb.png" alt=""></p><ul><li><code>v-if</code>\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u540C\u65F6\u4E5F\u56E0\u4E3A\u5B83\u662F\u64CD\u4F5C<code>DOM</code>\u5143\u7D20\uFF0C\u6240\u4EE5\u5B98\u65B9\u4E0D\u5EFA\u8BAE\u9891\u7E41\u5207\u6362\u65F6\u4F7F\u7528<code>v-if</code>\uFF1B</li><li><code>v-else</code>\u4E00\u822C\u642D\u914D\u5728<code>v-if</code>\u4E00\u8D77\u4F7F\u7528\uFF0C\u5F53<code>v-if</code>\u5224\u65AD<code>boolean</code>\u503C\u4E3A<code>false</code>\u65F6\u624D\u4F1A\u521B\u5EFA<code>v-else</code>\uFF0C\u8FD8\u53EF\u4EE5\u5D4C\u5957\u4F7F\u7528\uFF0C\u7C7B\u4F3C<code>if-else-if</code>;</li></ul><p><strong>2. <code>v-show</code>\u662F\u8C03\u6574<code>css</code>\u4E2D<code>display</code>\u5C5E\u6027\uFF0C<code>DOM</code>\u5DF2\u7ECF\u52A0\u8F7D\uFF0C\u53EA\u662F<code>CSS</code>\u63A7\u5236\u6CA1\u6709\u663E\u793A\u51FA\u6765\u3002</strong> \u6838\u5FC3\u4EE3\u7801\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>seeing<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>YES<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  seeing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://s2.loli.net/2022/01/07/bsaDd2G4N5ljXpT.png" alt=""></p><p>\u901A\u8FC7\u67E5\u770B<code>DOM</code>\u5143\u7D20\u53EF\u4EE5\u53D1\u73B0<code>DOM</code>\u5DF2\u7ECF\u52A0\u8F7D\uFF0C\u4F46\u662F\u901A\u8FC7<code>v-show</code>\u5224\u65AD<code>seeing</code>\u4E3A<code>false</code>\u65F6\u6DFB\u52A0\u4E86<code>display: none;</code>\u5C5E\u6027\uFF0C\u867D\u7136\u4E0D\u53EF\u89C1\uFF0C\u4F46\u4F9D\u7136\u5B58\u5728\u3002</p><div class="custom-container tip"><p class="custom-container-title">v-if\u548Cv-show\u7684\u533A\u522B</p><ul><li>v-if\uFF1A \u5224\u65AD\u662F\u5426\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B\uFF0C\u5728\u9700\u8981\u65F6\u52A0\u8F7D\u3002</li><li>v-show\uFF1A\u8C03\u6574css dispaly\u5C5E\u6027\uFF0C\u53EF\u4EE5\u4F7F\u5BA2\u6237\u7AEF\u64CD\u4F5C\u66F4\u52A0\u6D41\u7545\u3002</li></ul></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for" aria-hidden="true">#</a> v-for</h3><p>\u53EF\u4EE5\u89E3\u51B3\u6A21\u677F\u5FAA\u73AF\u95EE\u9898\uFF0C\u5373\u5FAA\u73AF\u6E32\u67D3\u4E00\u7EC4data\u4E2D\u7684\u6570\u7EC4\u3002\u5E38\u7528\u4E0E\u4E00\u7CFB\u5217\u7684\u7C7B\u4F3C\u6570\u636E\u5C55\u793A\uFF08\u5217\u8868\u7B49\uFF09\u3002</p><p><code>v-for</code> \u6307\u4EE4\u9700\u8981\u4F7F\u7528 <code>item in items</code> \u5F62\u5F0F\u7684\u7279\u6B8A\u8BED\u6CD5\uFF0C\u5176\u4E2D <code>items</code> \u662F\u6E90\u6570\u636E\u6570\u7EC4\uFF0C\u800C <code>item</code> \u5219\u662F\u88AB\u8FED\u4EE3\u7684\u6570\u7EC4\u5143\u7D20\u7684\u522B\u540D\u3002</p><p>\u5BF9\u7167\u4E0B\u9762\u6A21\u677F\u6838\u5FC3\u5199\u6CD5\u7B80\u5355\u7406\u89E3\u5C31\u662F\uFF1A</p><ul><li><code>items</code>:\u6E90\u6570\u636E\u6570\u7EC4\u540D\u79F0\u3002</li><li><code>item</code>:\u88AB\u8FED\u4EE3\u7684\u6570\u7EC4\u91CC\u7684\u5143\u7D20\u540D\u79F0\u3002</li></ul><p>\u6A21\u677F\u6838\u5FC3\u5199\u6CD5\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ item }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> app<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     el<span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
     data<span class="token operator">:</span><span class="token punctuation">{</span>
         items<span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">65</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">54</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">41</span><span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5B8C\u6574\u4F8B\u5B50\uFF08\u5FAA\u73AF\u666E\u901A\u6570\u7EC4\uFF09</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u6B64\u4E3Avue.js\u5916\u94FE\uFF0C\u53EF\u66F4\u6362 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>v-for\u6307\u4EE4\u7528\u6CD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    \u6570\u7EC4\uFF1Aitems:[20,23,18,65,32,19,54,56,41]
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,i) in items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        items \u7B2C {{i}} \u9879 \u2014\u2014 {{item}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span>
        items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u4F7F\u7528<code>v-for</code>\u8FD8\u53EF\u4EE5\u5FAA\u73AF\u8F93\u51FA\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002</p><p><code>\u6CE8\u610F\u5230\u4E0A\u9762\u4F8B\u5B50\u7684i\u5B57\u6BB5\u4E86\u5417\uFF1F</code>\u3002\u518D\u8FDB\u4E00\u6B65\uFF0C\u770B\u4E0B\u9762\u4F8B\u5B50\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>v-for\u6307\u4EE4\u7528\u6CD5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(val,key,i) in user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        \u503C\u662F{{val}}\u2014\u2014\u2014\u2014\u2014\u2014\u952E\u662F{{key}}\u2014\u2014\u2014\u2014\u7D22\u5F15\u662F{{i}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      el<span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span>
        user<span class="token operator">:</span><span class="token punctuation">{</span>
          id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span><span class="token string">&#39;\u5927\u54E5&#39;</span><span class="token punctuation">,</span>
          gender<span class="token operator">:</span><span class="token string">&#39;\u7537&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u4E0A\u9762\u5728\u904D\u5386<code>\u5BF9\u8C61</code>\u8EAB\u4E0A\u7684\u952E\u503C\u7684\u65F6\u5019\uFF0C\u9664\u4E86\u6709\uFF08val,key\uFF09,\u5728\u7B2C\u4E09\u4E2A\u4F4D\u7F6E\u8FD8\u6709\u4E00\u4E2A\u7D22\u5F15\u503C\uFF0C\u7C7B\u4F3C\uFF1A(val,key,i)\u3002</p><p>\u6CE8\u610F\uFF1A</p><ul><li>v-for\u5FAA\u73AF\u7684\u65F6\u5019\uFF0Ckey\u5C5E\u6027\u53EA\u80FD\u4F7F\u7528number\u6216String\u3002</li><li>key\u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u4F7F\u7528v-bind\u5C5E\u6027\u7ED1\u5B9A\u7684\u5F62\u5F0F\uFF0C\u6307\u5B9Akey\u7684\u503C\u3002</li><li>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528v-for\u5FAA\u73AF\u7684\u65F6\u5019\uFF0C\u6216\u8005\u5728\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\u4E2D\uFF0C\u5982\u679Cv-for\u6709\u95EE\u9898\uFF0C\u5FC5\u987B\u5728\u4F7F\u7528v-for\u7684\u540C\u65F6\uFF0C\u6307\u5B9A\u552F\u4E00\u7684 \u5B57\u7B26\u4E32/\u6570\u5B57 \u7C7B\u578B :key\u503C\u3002</li></ul><h3 id="v-text-\u3001v-html" tabindex="-1"><a class="header-anchor" href="#v-text-\u3001v-html" aria-hidden="true">#</a> v-text \u3001v-html</h3><p>\u4F7F\u7528<code>${serverRenderer.ssrInterpolate(_ctx.xxx)}</code>\u5C55\u793A\u6570\u636E\u8FD9\u79CD\u60C5\u51B5\u662F\u6709\u5F0A\u7AEF\u7684\uFF0C\u5C31\u662F\u5F53\u6211\u4EEC\u7F51\u901F\u5F88\u6162\u6216\u8005<code>javascript</code>\u51FA\u9519\u65F6\uFF0C\u4F1A\u66B4\u9732\u6211\u4EEC\u7684<code>${serverRenderer.ssrInterpolate(_ctx.xxx)}</code>\u3002<code>Vue</code>\u7ED9\u6211\u4EEC\u63D0\u4F9B\u7684<code>v-text</code>,\u5C31\u662F\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\u3002\u5982\u679C\u5728<code>javascript</code>\u4E2D\u5199\u6709<code>html</code>\u6807\u7B7E\uFF0C\u7528<code>v-text</code>\u662F\u8F93\u51FA\u4E0D\u51FA\u6765\u7684\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u7528<code>v-html</code>\u6807\u7B7E\u4E86\u3002</p><p>\u4E0B\u9762\u662F</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue/dist/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vueapp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mes1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mes2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//\u4F20\u7EDFjs\u7684innerText\u548CinnerHTML</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//\u52A0\u8F7D\u65F6\u5019\u51FA\u53D1\u7684\u51FD\u6570</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;div1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;</span><span class="token comment">//\u4E0D\u4F1A\u89E3\u6790</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;div2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;</span><span class="token comment">//\u4F1A\u88AB\u89E3\u6790</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/*vue\u65B0\u5F0FinnerText\u548CinnerHTML*/</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span> <span class="token string">&quot;#vueapp&quot;</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      mes1<span class="token operator">:</span> <span class="token string">&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;</span><span class="token punctuation">,</span>
      mes2<span class="token operator">:</span> <span class="token string">&quot;&lt;h1&gt;hello&lt;/h1&gt;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/vue/02vue\u5B9E\u4F8B.html.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var _02vue___html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4]]);
var _02vue___html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _02vue___html$1
});
const _sfc_main$h = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h2 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h2><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/vue/text2.html.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var text2_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3]]);
var text2_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": text2_html$2
});
const _sfc_main$g = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_CodeGroup = vue.resolveComponent("CodeGroup");
  const _component_CodeGroupItem = vue.resolveComponent("CodeGroupItem");
  _push(`<!--[--><h2 id="webpack\u5165\u5751" tabindex="-1"><a class="header-anchor" href="#webpack\u5165\u5751" aria-hidden="true">#</a> webpack\u5165\u5751</h2><p>Webpack\u5728\u5B9E\u9645\u4E2D\u771F\u7684\u63A5\u89E6\u5C11\u4E4B\u53C8\u5C11\uFF0C\u672C\u4EBA\u7B2C\u4E00\u6B21\u63A5\u89E6\u662F\u5728\u9762\u8BD5\u4E2D\u4F60\u6562\u4FE1\uFF1F</p><p><strong>em...\u{1F3B5} \u6700\u6015\u7A7A\u6C14\u7A81\u7136\u5B89\u9759</strong></p><p>\u53EF\u4EE5\u4ECE\u9762\u8BD5\u9898\u4E0B\u624B\u3002</p><blockquote><p>\u95EE\uFF1AWebpack \u914D\u7F6E\u4E2D\u7528\u8FC7\u54EA\u4E9B Loader \uFF1F\u90FD\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</p></blockquote><blockquote><p>\u95EE\uFF1ALoader \u548C Plugin \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p></blockquote><blockquote><p>\u95EE\uFF1AWebpack \u6253\u5305\u6D41\u7A0B\u662F\u600E\u6837\u7684\uFF1F</p></blockquote><blockquote><p>\u95EE\uFF1AWebpack \u6253\u5305\u4E2D Babel \u63D2\u4EF6\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF1F</p></blockquote><p>\u5BF9\u4E8E\u534A\u8DEF\u51FA\u5BB6\uFF0C\u53C2\u8003\u7F51\u7EDC\u7684\u6559\u5B66\u540E\u5F97\u51FA\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ol><li>\u57FA\u7840 -- \u4F1A\u914D\u7F6E</li><li>\u8FDB\u9636 -- \u80FD\u4F18\u5316</li><li>\u6DF1\u5165 -- \u61C2\u539F\u7406\uFF08\u6682\u65F6\u5F00\u73A9\u7B11\uFF09</li></ol><details class="custom-container details"><summary>\u53EF\u4EE5\u8DF3\u8FC7\u7684\u62D3\u5C55\uFF08\u6CA1\u5FC5\u8981\u70B9\u5F00\uFF09</summary><p>\u{1F648} \u4E00\u4E9Bwebpack\u7684\u6838\u5FC3\u914D\u7F6E\u6982\u5FF5\uFF1A</p><table><thead><tr><th>\u6982\u5FF5</th><th style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u8BF4\u660E</th></tr></thead><tbody><tr><td><strong>\u5165\u53E3(<code>entry</code>)</strong></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u5165\u53E3\u8D77\u70B9(<code>entry point</code>) \u6307\u793A <code>webpack</code> \u5E94\u8BE5\u4F7F\u7528\u54EA\u4E2A\u6A21\u5757\uFF0C\u6765\u4F5C\u4E3A\u6784\u5EFA\u5176\u5185\u90E8 \u4F9D\u8D56\u56FE(dependency graph) \u7684\u5F00\u59CB\u3002\u9ED8\u8BA4\u503C\u662F <code>./src/index.js</code>\u3002</td></tr><tr><td><strong>\u8F93\u51FA(<code>output</code>)</strong></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>output</code> \u5C5E\u6027\u544A\u8BC9 <code>webpack</code> \u5728\u54EA\u91CC\u8F93\u51FA\u5B83\u6240\u521B\u5EFA\u7684 bundle,\u9ED8\u8BA4\u653E\u7F6E\u5728 <code>./dist</code> \u6587\u4EF6\u5939\u4E2D\u3002</td></tr><tr><td><code>loader</code></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><code>loader</code> \u8BA9 <code>webpack</code> \u80FD\u591F\u53BB\u5904\u7406\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5E76\u5C06\u5B83\u4EEC\u8F6C\u6362\u4E3A\u6709\u6548 \u6A21\u5757\uFF0C\u4EE5\u4F9B\u5E94\u7528\u7A0B\u5E8F\u4F7F\u7528</td></tr><tr><td><strong>\u63D2\u4EF6(<code>plugin</code>)</strong></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u63D2\u4EF6\u53EF\u4EE5\u7528\u4E8E\u6267\u884C\u8303\u56F4\u66F4\u5E7F\u7684\u4EFB\u52A1\u3002\u5305\u62EC\uFF1A\u6253\u5305\u4F18\u5316\uFF0C\u8D44\u6E90\u7BA1\u7406\uFF0C\u6CE8\u5165\u73AF\u5883\u53D8\u91CF\u3002</td></tr><tr><td><strong>\u6A21\u5F0F(<code>mode</code>)</strong></td><td style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}">\u901A\u8FC7\u9009\u62E9 <code>development</code>, <code>production</code> \u6216 <code>none</code> \u4E4B\u4E2D\u7684\u4E00\u4E2A\uFF0C\u6765\u8BBE\u7F6E <code>mode</code> \u53C2\u6570\uFF0C\u4F60\u53EF\u4EE5\u542F\u7528 <code>webpack</code> \u5185\u7F6E\u5728\u76F8\u5E94\u73AF\u5883\u4E0B\u7684\u4F18\u5316\u3002\u5176\u9ED8\u8BA4\u503C\u4E3A <code>production</code>\u3002</td></tr></tbody></table></details><h2 id="webpack\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#webpack\u57FA\u7840" aria-hidden="true">#</a> webpack\u57FA\u7840</h2><h3 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h3><p>\u4ECE\u96F6\u5F00\u59CB\uFF0C\u5148\u5148\u672C\u5730\u5B89\u88C5\u4E00\u4E0B webpack \u4EE5\u53CA webpack-cli</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli -D <span class="token comment"># \u5B89\u88C5\u5230\u672C\u5730\u4F9D\u8D56(\u4E0D\u63A8\u8350\uFF1A-G\u662F\u5168\u5C40\u4F9D\u8D56)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u5B89\u88C5\u5B8C\u6210\u4F1A\u5728<code>package.json</code>\u770B\u5230\u5982\u4E0B\uFF1A \u2705</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token string">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.65.0&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.9.1&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>webpack </code>\u5728 4 \u4EE5\u540E\u5C31\u8BF4\u652F\u6301 0 \u914D\u7F6E\u6253\u5305\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p><ol><li>\u65B0\u5EFA ./src/index.js \u6587\u4EF6\uFF0C\u5199\u4E00\u6BB5\u7B80\u5355\u7684<code>js</code>\u4EE3\u7801\uFF08\u968F\u4FBF\u5199\uFF09</li></ol><p>\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;Hello ITEM&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> a<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\u76EE\u5F55\u7ED3\u6784\uFF1A</p><p><img src="https://s2.loli.net/2022/01/09/jdNbqRSmMQpGge8.png" alt=""></p><ol start="2"><li>\u76F4\u63A5\u8FD0\u884C <code>npx webpack</code>\uFF0C\u542F\u52A8\u6253\u5305\uFF1A <img src="https://s2.loli.net/2022/01/09/YxpAlO2DWXt9cPd.png" alt=""></li></ol><p>\u6253\u5305\u5B8C\u6210\uFF0C\u6211\u4EEC\u770B\u5230\u65E5\u5FD7\u4E0A\u9762\u6709\u4E00\u6BB5\u63D0\u793A\uFF1A<code>The &#39;mode&#39; option has not been set,...</code></p><p>\u610F\u601D\u5C31\u662F\uFF0C\u6211\u4EEC\u6CA1\u6709\u914D\u7F6E <code>mode</code>\uFF08\u6A21\u5F0F\uFF09\u3002</p><blockquote><p><code>\u6A21\u5F0F</code>\uFF1A \u4F9B mode \u914D\u7F6E\u9009\u9879\uFF0C\u544A\u77E5 webpack \u4F7F\u7528\u76F8\u5E94\u6A21\u5F0F\u7684\u5185\u7F6E\u4F18\u5316\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code>production</code>\uFF0C\u53E6\u5916\u8FD8\u6709 <code>development</code>\u3001<code>none</code>\uFF0C\u4ED6\u4EEC\u7684\u533A\u522B\u5982\u4E0B</p></blockquote><p>\u600E\u4E48\u914D\u7F6E\uFF1F\u770B\u4E0B\u9762\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//1.\u53EA\u9700\u5728\u914D\u7F6E\u5BF9\u8C61\u4E2D\u63D0\u4F9B mode \u9009\u9879\uFF1A</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//2.\u4ECE CLI \u53C2\u6570\u4E2D\u4F20\u9012\uFF1A</span>
$ webpack <span class="token operator">--</span>mode<span class="token operator">=</span>development
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E00\u822C\u7528\u4E0B\u9762\u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F\u914D\u7F6E\uFF1A</p><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>\u5728\u5B9E\u9645\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u90FD\u8981\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u6EE1\u8DB3\u9879\u76EE\u9700\u6C42\uFF1A</p><ol><li>\u6839\u8DEF\u5F84\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6 <code>webpack.config.js</code></li><li>\u65B0\u589E\u57FA\u672C\u914D\u7F6E\u4FE1\u606F</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5F0F</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u5165\u53E3\u5730\u5740</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u9762\u662F\u57FA\u672C\u7684\u914D\u7F6E\uFF0C\u9700\u8981\u6211\u8BB0\u4F4F\u3002\u8BB8\u591A\u4FEE\u6539\u90FD\u662F\u57FA\u4E8E\u4E0A\u9762\u8FDB\u884C\u3002</p><h3 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h3><p>\u5F53\u6211\u4EEC\u628A\u5165\u53E3\u6539\u6210 CSS \u6587\u4EF6\uFF0C\u53EF\u80FD\u6253\u5305\u7ED3\u679C\u4F1A\u5982\u4F55\uFF1A</p><ol><li>\u65B0\u589E ./src/main.css</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f4f8fb<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>\u4FEE\u6539 entry \u914D\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5F0F</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/main.css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u5165\u53E3\u5730\u5740</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li>\u8FD0\u884C\u6253\u5305\u547D\u4EE4\uFF1Anpx webpack</li></ol><p><img src="https://s2.loli.net/2022/01/09/3qpNyQVMrt9TLiJ.png" alt=""></p><p>\u62A5\u9519\uFF01 \u56E0\u4E3Awebpack \u9ED8\u8BA4\u652F\u6301\u5904\u7406 JS \u4E0E JSON \u6587\u4EF6\uFF0C\u5176\u4ED6\u7C7B\u578B\u90FD\u5904\u7406\u4E0D\u4E86\uFF0C\u8FD9\u91CC\u5FC5\u987B\u501F\u52A9 Loader \u6765\u5BF9\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\u7684\u8FDB\u884C\u5904\u7406\u3002</p><ol start="4"><li>\u5B89\u88C5 <code>css-loader</code> \u6765\u5904\u7406 CSS</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> css-loader -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u914D\u7F6E\u8D44\u6E90\u52A0\u8F7D\u6A21\u5757</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5F0F</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/main.css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u5165\u53E3\u5730\u5740</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.css&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span> 
    rules<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// \u8F6C\u6362\u89C4\u5219</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//\u5339\u914D\u6240\u6709\u7684 css \u6587\u4EF6</span>
        use<span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token comment">// use: \u5BF9\u5E94\u7684 Loader \u540D\u79F0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="6"><li>\u91CD\u65B0\u8FD0\u884C\u6253\u5305\u547D\u4EE4 npx webpack <img src="https://s2.loli.net/2022/01/09/xHuTnfdtWLPIYo2.png" alt=""></li></ol><p>\u6253\u5305\u6210\u529F\uFF0C\u67E5\u770Bdist\u7684\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dist           
\u2514\u2500 bundle.css  <span class="token comment"># \u6253\u5305\u5F97\u5230\u7684\u7ED3\u679C</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u67E5\u770B\u5230bundle.css\u4F1A\u6709\u9519\u8BEF\uFF0C\u8FD9\u91CC\u8FD9\u662F\u5C1D\u8BD5\uFF0C\u5165\u53E3\u6587\u4EF6\u8FD8\u662F\u9700\u8981\u6539\u56DE ./src/index.js\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u603B\u7ED3</p><p>Loader \u5C31\u662F\u5C06 Webpack \u4E0D\u8BA4\u8BC6\u7684\u5185\u5BB9\u8F6C\u5316\u4E3A\u8BA4\u8BC6\u7684\u5185\u5BB9</p></div><h3 id="\u63D2\u4EF6-plugin" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6-plugin" aria-hidden="true">#</a> \u63D2\u4EF6\uFF08plugin\uFF09</h3><p>\u4E0E Loader \u7528\u4E8E\u8F6C\u6362\u7279\u5B9A\u7C7B\u578B\u7684\u6587\u4EF6\uFF08\u5355\u4E00\u539F\u5219\uFF09\u4E0D\u540C\uFF0C<strong>\u63D2\u4EF6\uFF08Plugin\uFF09\u53EF\u4EE5\u8D2F\u7A7F Webpack \u6253\u5305\u7684\u751F\u547D\u5468\u671F\uFF0C\u6267\u884C\u4E0D\u540C\u7684\u4EFB\u52A1\u5F71\u54CD\u8F93\u51FA\u7ED3\u679C\uFF08\u9488\u5BF9\u6574\u4E2A\u6D41\u7A0B\u6267\u884C\u5E7F\u6CDB\u7684\u4EFB\u52A1\uFF09</strong></p><p>\u4F8B\u5B50\u4E0A\u624B\uFF1A</p><ol><li>\u65B0\u5EFA <code>./src/index.html</code> \u6587\u4EF6</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u6211\u60F3\u6253\u5305\u540E\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1Ajs \u6216\u8005 css \u6587\u4EF6\u53EF\u4EE5\u81EA\u52A8\u5F15\u5165\u5230 Html \u4E2D\uFF0C\u5C31\u9700\u8981\u4F7F\u7528\u63D2\u4EF6 <a href="https://www.npmjs.com/package/html-webpack-plugin" target="_blank" rel="noopener noreferrer">html-webpack-plugin`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>\u6765\u5E2E\u52A9\u4F60\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C</p><ol start="2"><li>\u672C\u5730\u5B89\u88C5 <code>html-webpack-plugin</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> html-webpack-plugin -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u914D\u7F6E\u63D2\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6A21\u5F0F</span>
  entry<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6253\u5305\u5165\u53E3\u5730\u5740</span>
  output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span> 
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//\u5339\u914D\u6240\u6709\u7684 css \u6587\u4EF6</span>
        use<span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span> <span class="token comment">// use: \u5BF9\u5E94\u7684 Loader \u540D\u79F0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// \u914D\u7F6E\u63D2\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ol start="4"><li>\u8FD0\u884C\u4E00\u4E0B\u6253\u5305<code>npx webpack</code>\uFF0C\u6253\u5F00 dist \u76EE\u5F55\u4E0B\u751F\u6210\u7684 index.html \u6587\u4EF6</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bundle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u5B83\u81EA\u52A8\u7684\u5F15\u5165\u4E86\u6253\u5305\u597D\u7684 <code>bundle.js</code> \uFF0C\u975E\u5E38\u65B9\u4FBF\u5B9E\u7528</p><h3 id="\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55" aria-hidden="true">#</a> \u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55</h3><p>\u8FD9\u4E2A\u5185\u5BB9\u672C\u6765\u5C5E\u4E8E\u63D2\u4EF6\uFF08plugin\uFF09\u7684\u8303\u7574\uFF0C\u4F46\u4E00\u822C\u6BD4\u8F83\u5E38\u7528\uFF1B</p><p>\u6BCF\u6B21\u6253\u5305\u7684\u65F6\u5019\uFF0C\u6253\u5305\u76EE\u5F55\u90FD\u4F1A\u9057\u7559\u4E0A\u6B21\u6253\u5305\u7684\u6587\u4EF6\uFF0C\u4E3A\u4E86\u4FDD\u6301\u6253\u5305\u76EE\u5F55\u7684\u7EAF\u51C0\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u6253\u5305\u524D\u5C06\u6253\u5305\u76EE\u5F55\u6E05\u7A7A</p><p>\u6709\u4E24\u4E2A\u65B9\u6CD5\uFF1A</p><p><strong>\u7B2C\u4E00\u3001webpack5\u65B0\u7279\u6027\uFF08clean:true\uFF09</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u540D</span>
        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55</span>
        clean<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528\u65F6\u9700\u8981\u6CE8\u610F\u7248\u672C\u53F7\uFF1B</p><p><strong>\u7B2C\u4E8C\u3001\u63D2\u4EF6</strong></p><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6 <a href="https://www.npmjs.com/package/clean-webpack-plugin" target="_blank" rel="noopener noreferrer">clean-webpack-plugin`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \u6765\u5B9E\u73B0</p><ol><li>\u5B89\u88C5</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> clean-webpack-plugin -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u914D\u7F6E</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5F15\u5165\u63D2\u4EF6</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">// \u914D\u7F6E\u63D2\u4EF6</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      template<span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5F15\u5165\u63D2\u4EF6</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u533A\u5206\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u533A\u5206\u73AF\u5883" aria-hidden="true">#</a> \u533A\u5206\u73AF\u5883</h3><p>\u672C\u5730\u5F00\u53D1\u548C\u90E8\u7F72\u7EBF\u4E0A\uFF0C\u80AF\u5B9A\u662F\u6709\u4E0D\u540C\u7684\u9700\u6C42</p><p>\u672C\u5730\u73AF\u5883\uFF1A</p><ul><li>\u9700\u8981\u66F4\u5FEB\u7684\u6784\u5EFA\u901F\u5EA6</li><li>\u9700\u8981\u6253\u5370 debug \u4FE1\u606F</li><li>\u9700\u8981 live reload \u6216 hot reload \u529F\u80FD</li><li>\u9700\u8981 sourcemap \u65B9\u4FBF\u5B9A\u4F4D\u95EE\u9898</li><li>...</li></ul><p>\u751F\u4EA7\u73AF\u5883\uFF1A</p><ul><li>\u9700\u8981\u66F4\u5C0F\u7684\u5305\u4F53\u79EF\uFF0C\u4EE3\u7801\u538B\u7F29+tree-shaking</li><li>\u9700\u8981\u8FDB\u884C\u4EE3\u7801\u5206\u5272</li><li>\u9700\u8981\u538B\u7F29\u56FE\u7247\u4F53\u79EF</li><li>...</li></ul><p>\u540C\u6837\u4E5F\u6709\u4E0D\u540C\u65B9\u6CD5\uFF1A</p><p><strong>\u7B2C\u4E00\u79CD\uFF1A</strong></p><ol><li>\u521B\u5EFA<code>webpack.dev.js</code> \u5F00\u53D1\u73AF\u5883\u914D\u7F6E\u6587\u4EF6</li><li>\u521B\u5EFA<code>webpack.prod.js</code> \u751F\u4EA7\u73AF\u5883\u914D\u7F6E\u6587\u4EF6</li><li>\u5728<code>webpack.config.js</code>\u533A\u5206\u6253\u5305</li></ol><p><strong>\u7B2C\u4E8C\u79CD\uFF1A</strong></p><ol><li>\u672C\u5730\u5B89\u88C5 <a href="https://www.npmjs.com/package/cross-env" target="_blank" rel="noopener noreferrer">cross-env`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> cross-env -D
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u914D\u7F6E\u542F\u52A8\u547D\u4EE4</li></ol><p>\u6253\u5F00 ./package.json</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=dev webpack serve --mode development&quot;</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=test webpack --mode production&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=prod webpack --mode production&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li><p>\u5728 Webpack \u914D\u7F6E\u6587\u4EF6\u4E2D\u83B7\u53D6\u73AF\u5883\u53D8\u91CF \u6838\u5FC3\u4EE3\u7801\uFF1A <img src="https://s2.loli.net/2022/01/09/9hGRxgpONyz2VjY.png" alt=""></p></li><li><p>\u6D4B\u8BD5</p></li></ol><ul><li>\u6267\u884C <code>npm run build</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8F93\u51FA</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token operator">=</span> prod
argv<span class="token punctuation">.</span>mode<span class="token operator">=</span> production
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6267\u884C <code>npm run test</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8F93\u51FA</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token operator">=</span> prod
argv<span class="token punctuation">.</span>mode<span class="token operator">=</span> production
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6267\u884C <code>npm run dev</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u8F93\u51FA</span>
process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token operator">=</span> prod
argv<span class="token punctuation">.</span>mode<span class="token operator">=</span> production
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u4E0D\u540C\u7684\u73AF\u5883\u6765\u52A8\u6001\u4FEE\u6539 Webpack \u7684\u914D\u7F6E</p><h3 id="\u4F7F\u7528devserver" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528devserver" aria-hidden="true">#</a> \u4F7F\u7528devServer</h3><p>1.\u5B89\u88C5 webpack-dev-server</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> intall webpack-dev-server@3.11.2 -D <span class="token operator">||</span> <span class="token function">npm</span> intall webpack-dev-server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u26A0\uFE0F\u6CE8\u610F\uFF1A\u82E5\u4F7F\u7528\u7684 webpack-dev-server \u7248\u672C\u662F 3.11.2\uFF0C\u5F53\u7248\u672C version &gt;= 4.0.0 \u65F6\uFF0C\u9700\u8981\u4F7F\u7528 devServer.static \u8FDB\u884C\u914D\u7F6E\uFF0C\u4E0D\u518D\u6709 devServer.contentBase \u914D\u7F6E\u9879\u3002</p></div>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeGroup, null, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "version = @3.11.2" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token comment"${_scopeId2}>// webpack.config.js</span>
<span class="token keyword"${_scopeId2}>const</span> config <span class="token operator"${_scopeId2}>=</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token comment"${_scopeId2}>// ...</span>
  devServer<span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    contentBase<span class="token operator"${_scopeId2}>:</span> path<span class="token punctuation"${_scopeId2}>.</span><span class="token function"${_scopeId2}>resolve</span><span class="token punctuation"${_scopeId2}>(</span>__dirname<span class="token punctuation"${_scopeId2}>,</span> <span class="token string"${_scopeId2}>&#39;public&#39;</span><span class="token punctuation"${_scopeId2}>)</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token comment"${_scopeId2}>// \u6587\u4EF6\u76EE\u5F55</span>
    compress<span class="token operator"${_scopeId2}>:</span> <span class="token boolean"${_scopeId2}>true</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token comment"${_scopeId2}>//\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip</span>
    port<span class="token operator"${_scopeId2}>:</span> <span class="token number"${_scopeId2}>8080</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token comment"${_scopeId2}>// \u7AEF\u53E3\u53F7</span>
    <span class="token comment"${_scopeId2}>// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
 <span class="token comment"${_scopeId2}>// ...</span>
<span class="token punctuation"${_scopeId2}>}</span>

</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token comment" }, "// webpack.config.js"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "const"),
                      vue.createTextVNode(" config "),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token comment" }, "// ..."),
                      vue.createTextVNode("\n  devServer"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    contentBase"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(" path"),
                      vue.createVNode("span", { class: "token punctuation" }, "."),
                      vue.createVNode("span", { class: "token function" }, "resolve"),
                      vue.createVNode("span", { class: "token punctuation" }, "("),
                      vue.createTextVNode("__dirname"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'public'"),
                      vue.createVNode("span", { class: "token punctuation" }, ")"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token comment" }, "// \u6587\u4EF6\u76EE\u5F55"),
                      vue.createTextVNode("\n    compress"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token boolean" }, "true"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token comment" }, "//\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip"),
                      vue.createTextVNode("\n    port"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token number" }, "8080"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token comment" }, "// \u7AEF\u53E3\u53F7"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token comment" }, "// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n "),
                      vue.createVNode("span", { class: "token comment" }, "// ..."),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(serverRenderer.ssrRenderComponent(_component_CodeGroupItem, { title: "version > @4.x.x" }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId2}><pre class="language-javascript"${_scopeId2}><code${_scopeId2}><span class="token comment"${_scopeId2}>// webpack.config.js</span>
<span class="token keyword"${_scopeId2}>const</span> config <span class="token operator"${_scopeId2}>=</span> <span class="token punctuation"${_scopeId2}>{</span>
  <span class="token comment"${_scopeId2}>// ...</span>
  devServer<span class="token operator"${_scopeId2}>:</span> <span class="token punctuation"${_scopeId2}>{</span>
    <span class="token keyword"${_scopeId2}>static</span><span class="token operator"${_scopeId2}>:</span> <span class="token string"${_scopeId2}>&#39;./index.html&#39;</span><span class="token punctuation"${_scopeId2}>,</span> <span class="token comment"${_scopeId2}>// \u9759\u6001\u6587\u4EF6\u76EE\u5F55</span>
    <span class="token comment"${_scopeId2}>//compress: true, //\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip</span>
    <span class="token comment"${_scopeId2}>//port: 8080, // \u9ED8\u8BA4\u7AEF\u53E3\u53F7</span>
    <span class="token comment"${_scopeId2}>// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span>
  <span class="token punctuation"${_scopeId2}>}</span><span class="token punctuation"${_scopeId2}>,</span>
 <span class="token comment"${_scopeId2}>// ...</span>
<span class="token punctuation"${_scopeId2}>}</span>

</code></pre><div class="line-numbers"${_scopeId2}><span class="line-number"${_scopeId2}>1</span><br${_scopeId2}><span class="line-number"${_scopeId2}>2</span><br${_scopeId2}><span class="line-number"${_scopeId2}>3</span><br${_scopeId2}><span class="line-number"${_scopeId2}>4</span><br${_scopeId2}><span class="line-number"${_scopeId2}>5</span><br${_scopeId2}><span class="line-number"${_scopeId2}>6</span><br${_scopeId2}><span class="line-number"${_scopeId2}>7</span><br${_scopeId2}><span class="line-number"${_scopeId2}>8</span><br${_scopeId2}><span class="line-number"${_scopeId2}>9</span><br${_scopeId2}><span class="line-number"${_scopeId2}>10</span><br${_scopeId2}><span class="line-number"${_scopeId2}>11</span><br${_scopeId2}><span class="line-number"${_scopeId2}>12</span><br${_scopeId2}></div></div>`);
            } else {
              return [
                vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  vue.createVNode("pre", { class: "language-javascript" }, [
                    vue.createVNode("code", null, [
                      vue.createVNode("span", { class: "token comment" }, "// webpack.config.js"),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token keyword" }, "const"),
                      vue.createTextVNode(" config "),
                      vue.createVNode("span", { class: "token operator" }, "="),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token comment" }, "// ..."),
                      vue.createTextVNode("\n  devServer"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token punctuation" }, "{"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token keyword" }, "static"),
                      vue.createVNode("span", { class: "token operator" }, ":"),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token string" }, "'./index.html'"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode(),
                      vue.createVNode("span", { class: "token comment" }, "// \u9759\u6001\u6587\u4EF6\u76EE\u5F55"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token comment" }, "//compress: true, //\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token comment" }, "//port: 8080, // \u9ED8\u8BA4\u7AEF\u53E3\u53F7"),
                      vue.createTextVNode("\n    "),
                      vue.createVNode("span", { class: "token comment" }, "// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668"),
                      vue.createTextVNode("\n  "),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createVNode("span", { class: "token punctuation" }, ","),
                      vue.createTextVNode("\n "),
                      vue.createVNode("span", { class: "token comment" }, "// ..."),
                      vue.createTextVNode("\n"),
                      vue.createVNode("span", { class: "token punctuation" }, "}"),
                      vue.createTextVNode("\n\n")
                    ])
                  ]),
                  vue.createVNode("div", { class: "line-numbers" }, [
                    vue.createVNode("span", { class: "line-number" }, "1"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "2"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "3"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "4"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "5"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "6"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "7"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "8"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "9"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "10"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "11"),
                    vue.createVNode("br"),
                    vue.createVNode("span", { class: "line-number" }, "12"),
                    vue.createVNode("br")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_CodeGroupItem, { title: "version = @3.11.2" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token comment" }, "// webpack.config.js"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "const"),
                    vue.createTextVNode(" config "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token comment" }, "// ..."),
                    vue.createTextVNode("\n  devServer"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    contentBase"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(" path"),
                    vue.createVNode("span", { class: "token punctuation" }, "."),
                    vue.createVNode("span", { class: "token function" }, "resolve"),
                    vue.createVNode("span", { class: "token punctuation" }, "("),
                    vue.createTextVNode("__dirname"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'public'"),
                    vue.createVNode("span", { class: "token punctuation" }, ")"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token comment" }, "// \u6587\u4EF6\u76EE\u5F55"),
                    vue.createTextVNode("\n    compress"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token boolean" }, "true"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token comment" }, "//\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip"),
                    vue.createTextVNode("\n    port"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token number" }, "8080"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token comment" }, "// \u7AEF\u53E3\u53F7"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n "),
                    vue.createVNode("span", { class: "token comment" }, "// ..."),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          }),
          vue.createVNode(_component_CodeGroupItem, { title: "version > @4.x.x" }, {
            default: vue.withCtx(() => [
              vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                vue.createVNode("pre", { class: "language-javascript" }, [
                  vue.createVNode("code", null, [
                    vue.createVNode("span", { class: "token comment" }, "// webpack.config.js"),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token keyword" }, "const"),
                    vue.createTextVNode(" config "),
                    vue.createVNode("span", { class: "token operator" }, "="),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token comment" }, "// ..."),
                    vue.createTextVNode("\n  devServer"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token punctuation" }, "{"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token keyword" }, "static"),
                    vue.createVNode("span", { class: "token operator" }, ":"),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token string" }, "'./index.html'"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode(),
                    vue.createVNode("span", { class: "token comment" }, "// \u9759\u6001\u6587\u4EF6\u76EE\u5F55"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "//compress: true, //\u662F\u5426\u542F\u52A8\u538B\u7F29 gzip"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "//port: 8080, // \u9ED8\u8BA4\u7AEF\u53E3\u53F7"),
                    vue.createTextVNode("\n    "),
                    vue.createVNode("span", { class: "token comment" }, "// open:true  // \u662F\u5426\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668"),
                    vue.createTextVNode("\n  "),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createVNode("span", { class: "token punctuation" }, ","),
                    vue.createTextVNode("\n "),
                    vue.createVNode("span", { class: "token comment" }, "// ..."),
                    vue.createTextVNode("\n"),
                    vue.createVNode("span", { class: "token punctuation" }, "}"),
                    vue.createTextVNode("\n\n")
                  ])
                ]),
                vue.createVNode("div", { class: "line-numbers" }, [
                  vue.createVNode("span", { class: "line-number" }, "1"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "2"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "3"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "4"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "5"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "6"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "7"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "8"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "9"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "10"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "11"),
                  vue.createVNode("br"),
                  vue.createVNode("span", { class: "line-number" }, "12"),
                  vue.createVNode("br")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>\u4E3A\u4EC0\u4E48\u8981\u914D\u7F6E contentBase \u6216 static \uFF1F</p><p>\u56E0\u4E3A <code>webpack</code> \u5728\u8FDB\u884C\u6253\u5305\u7684\u65F6\u5019\uFF0C\u5BF9\u9759\u6001\u6587\u4EF6\u7684\u5904\u7406\uFF0C\u4F8B\u5982\u56FE\u7247\uFF0C\u90FD\u662F\u76F4\u63A5 copy \u5230 dist \u76EE\u5F55\u4E0B\u9762\u3002\u4F46\u662F\u5BF9\u4E8E\u672C\u5730\u5F00\u53D1\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u592A\u8D39\u65F6\uFF0C\u4E5F\u6CA1\u6709\u5FC5\u8981\uFF0C\u6240\u4EE5\u5728\u8BBE\u7F6E <code>contentBase</code> \u4E4B\u540E\uFF0C\u5C31\u76F4\u63A5\u5230\u5BF9\u5E94\u7684\u9759\u6001\u76EE\u5F55\u4E0B\u9762\u53BB\u8BFB\u53D6\u6587\u4EF6\uFF0C\u800C\u4E0D\u9700\u5BF9\u6587\u4EF6\u505A\u4EFB\u4F55\u79FB\u52A8\uFF0C\u8282\u7701\u4E86\u65F6\u95F4\u548C\u6027\u80FD\u5F00\u9500\u3002</p><!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/web/webpack/webpack.html.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var webpack_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$2]]);
var webpack_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": webpack_html$1
});
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$j = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": "true\uFF0C",
    "heroImage": "/images/logo.png",
    "heroText": null,
    "tagline": "2019 ~ ----",
    "features": [
      {
        "title": "Markdown",
        "details": "\u5C11\u7684\u914D\u7F6E\u591A\u5199\u4F5C"
      },
      {
        "title": "vuepress2.x",
        "details": "\u9AD8\u6548\u548C\u7075\u6D3B\u7684\u63D2\u4EF6"
      },
      {
        "title": "vite",
        "details": "\u8F7B\u3001\u5FEB\u4E14\u529F\u80FD\u4E30\u5BCC"
      }
    ],
    "footer": "MIT Licensed | Copyright \xA9 2020-\u67D2-IU"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "1\u30012\u30013",
      "slug": "_1\u30012\u30013",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641109712e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 5
      }
    ]
  },
  "filePathRelative": "README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$j
});
const data$i = {
  "key": "v-6886cbbd",
  "path": "/course/elementui%E5%9C%A8%E8%A1%A8%E6%A0%BC%E4%B8%AD%E6%8F%92%E5%85%A5%E5%9B%BE%E7%89%87.html",
  "title": "elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247",
    "description": "12a"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u63D2\u5165\u5355\u5F20\uFF0C\u60AC\u6D6E\u9884\u89C8",
      "slug": "\u63D2\u5165\u5355\u5F20-\u60AC\u6D6E\u9884\u89C8",
      "children": []
    },
    {
      "level": 2,
      "title": "\u63D2\u5165\u5355\u5F20\uFF0C\u5168\u5C4F\u9884\u89C8",
      "slug": "\u63D2\u5165\u5355\u5F20-\u5168\u5C4F\u9884\u89C8",
      "children": []
    },
    {
      "level": 2,
      "title": "\u63D2\u5165\u591A\u5F20\u56FE\u7247",
      "slug": "\u63D2\u5165\u591A\u5F20\u56FE\u7247",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641363782e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "course/elementui\u5728\u8868\u683C\u4E2D\u63D2\u5165\u56FE\u7247.md"
};
var elementui_________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$i
});
const data$h = {
  "key": "v-b9c2d34a",
  "path": "/course/",
  "title": "\u65E5\u5E38\u8BB0\u5F55",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u65E5\u5E38\u8BB0\u5F55",
    "description": "12a"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "ClientOnly\u4F7F\u7528\u7EC4\u4EF6",
      "slug": "clientonly\u4F7F\u7528\u7EC4\u4EF6",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641363782e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "course/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$h
});
const data$g = {
  "key": "v-66ff7ae2",
  "path": "/course/vscode%E5%B8%B8%E7%94%A8%E6%8F%92%E4%BB%B6.html",
  "title": "vscode\u5E38\u7528\u63D2\u4EF6",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vscode\u5E38\u7528\u63D2\u4EF6",
    "description": "12a"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u51E0\u4E4E\u5FC5\u5907\u7684",
      "slug": "\u51E0\u4E4E\u5FC5\u5907\u7684",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641363782e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "course/vscode\u5E38\u7528\u63D2\u4EF6.md"
};
var vscode_____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-6e6848ee",
  "path": "/web/text1.html",
  "title": "\u9875\u9762\u7684\u6807\u9898",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u9875\u9762\u7684\u6807\u9898",
    "description": "\u9875\u9762\u7684\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/text1.md"
};
var text1_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-dcf09e5e",
  "path": "/guide/%E6%95%85%E4%BA%8B/text.html",
  "title": "\u65E5\u5E38\u6545\u4E8B",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u65E5\u5E38\u6545\u4E8B",
    "description": "\u65E5\u5E38\u6545\u4E8B"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5154\u5B50\u4E0E\u661F\u661F",
      "slug": "\u5154\u5B50\u4E0E\u661F\u661F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5929\u4E0A\u7684\u661F\u661F",
      "slug": "\u5929\u4E0A\u7684\u661F\u661F",
      "children": []
    },
    {
      "level": 2,
      "title": "\u82F9\u679C=\u667A\u6167\u679C",
      "slug": "\u82F9\u679C-\u667A\u6167\u679C",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7B28\u7B28\u718A",
      "slug": "\u7B28\u7B28\u718A",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5C0F\u80A5\u732A",
      "slug": "\u5C0F\u80A5\u732A",
      "children": []
    },
    {
      "level": 2,
      "title": "\u68A6\u91CC\u6709\u4F60\uFF0C\u5341\u5206\u751C",
      "slug": "\u68A6\u91CC\u6709\u4F60-\u5341\u5206\u751C",
      "children": []
    },
    {
      "level": 2,
      "title": "\u665A\u5B89\uFF01",
      "slug": "\u665A\u5B89",
      "children": []
    },
    {
      "level": 2,
      "title": "\u7231\uFF08\u957F\u7BC7\uFF09",
      "slug": "\u7231-\u957F\u7BC7",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5154\u5B50\u548C\u72D0\u72F8",
      "slug": "\u5154\u5B50\u548C\u72D0\u72F8",
      "children": []
    },
    {
      "level": 2,
      "title": "\u62B1\u62B1",
      "slug": "\u62B1\u62B1",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "guide/\u6545\u4E8B/text.md"
};
var text_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-3803ce0e",
  "path": "/guide/%E6%95%99%E7%A8%8B/text.html",
  "title": "1a",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "1a",
    "description": "12a"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/\u6559\u7A0B/text.md"
};
var text_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-9b98914c",
  "path": "/guide/%E9%9A%8F%E7%AC%94/text.html",
  "title": "1a",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "1a",
    "description": "12a"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/\u968F\u7B14/text.md"
};
var text_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-796e15ea",
  "path": "/guide/%E9%9D%A2%E8%AF%95/interview.html",
  "title": "\u9762\u8BD5\u96C6\u9526",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "\u9762\u8BD5\u96C6\u9526",
    "lastUpdated": true,
    "prev": true,
    "next": true,
    "date": "2022-01-02T00:00:00.000Z",
    "tags": [
      "\u9762\u8BD5",
      "\u5176\u4ED6"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD",
      "slug": "\u8BF7\u505A\u4E00\u4E0B\u81EA\u6211\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48\uFF1F",
      "slug": "\u4F60\u6700\u5927\u7684\u4F18\u70B9\u662F\u4EC0\u4E48",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9\uFF1F",
      "slug": "\u8BF4\u8BF4\u4F60\u6700\u5927\u7684\u7F3A\u70B9",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5\uFF1F",
      "slug": "\u4F60\u5BF9\u52A0\u73ED\u6709\u4EC0\u4E48\u770B\u6CD5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42\uFF1F",
      "slug": "\u8BF4\u8BF4\u4F60\u5BF9\u85AA\u8D44\u7684\u8981\u6C42",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5728\u4E94\u5E74\u5185\uFF0C\u4F60\u7684\u804C\u4E1A\u89C4\u5212\uFF1F",
      "slug": "\u5728\u4E94\u5E74\u5185-\u4F60\u7684\u804C\u4E1A\u89C4\u5212",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417?",
      "slug": "\u4F60\u8FD8\u6709\u4EC0\u4E48\u95EE\u9898\u8981\u95EE\u5417",
      "children": []
    },
    {
      "level": 2,
      "title": "\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5?",
      "slug": "\u8C08\u8C08\u4F60\u5BF9\u8DF3\u69FD\u7684\u770B\u6CD5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11?",
      "slug": "\u4F60\u5BF9\u4E8E\u6211\u4EEC\u516C\u53F8\u4E86\u89E3\u591A\u5C11",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641109712e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/\u9762\u8BD5/interview.md"
};
var interview_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-89e39176",
  "path": "/web/html/text1.html",
  "title": "html\u6807\u9898",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "html\u6807\u9898",
    "description": "html\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/html/text1.md"
};
var text1_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-8679e038",
  "path": "/web/html/text2.html",
  "title": "html2\u6807\u9898",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "html2\u6807\u9898",
    "description": "html2\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/html/text2.md"
};
var text2_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-72bd4e03",
  "path": "/web/JavaScript/%E5%85%A5%E9%97%A8%E5%AF%BC%E8%AE%BA.html",
  "title": "\u5165\u95E8\u5BFC\u8BBA",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u5165\u95E8\u5BFC\u8BBA",
    "description": "\u9875\u9762\u7684\u63CF\u8FF0",
    "contributors": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "JavaScript\u4ECB\u7ECD",
      "slug": "javascript\u4ECB\u7ECD",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528\u9886\u57DF",
      "slug": "\u4F7F\u7528\u9886\u57DF",
      "children": []
    },
    {
      "level": 2,
      "title": "JavaScript \u4E0E Java \u7684\u5173\u7CFB",
      "slug": "javascript-\u4E0E-java-\u7684\u5173\u7CFB",
      "children": []
    },
    {
      "level": 2,
      "title": "JavaScript \u4E0E ECMAScript \u7684\u5173\u7CFB",
      "slug": "javascript-\u4E0E-ecmascript-\u7684\u5173\u7CFB",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641109712e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "web/JavaScript/\u5165\u95E8\u5BFC\u8BBA.md"
};
var _____html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-783b80d4",
  "path": "/web/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.html",
  "title": "\u5185\u7F6E\u5BF9\u8C61",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u5185\u7F6E\u5BF9\u8C61",
    "description": "\u9875\u9762\u7684\u63CF\u8FF0",
    "contributors": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u4E00\u3001Object \u5BF9\u8C61",
      "slug": "\u4E00\u3001object-\u5BF9\u8C61",
      "children": []
    },
    {
      "level": 2,
      "title": "Object() \u4F5C\u4E3A\u51FD\u6570\uFF08\u65B9\u6CD5\uFF09",
      "slug": "object-\u4F5C\u4E3A\u51FD\u6570-\u65B9\u6CD5",
      "children": []
    },
    {
      "level": 2,
      "title": "Object \u6784\u9020\u51FD\u6570(new\u521B\u5EFA)",
      "slug": "object-\u6784\u9020\u51FD\u6570-new\u521B\u5EFA",
      "children": []
    },
    {
      "level": 2,
      "title": "Object\u7684\u9759\u6001\u65B9\u6CD5",
      "slug": "object\u7684\u9759\u6001\u65B9\u6CD5",
      "children": [
        {
          "level": 3,
          "title": "Object.keys()",
          "slug": "object-keys",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.getOwnPropertyNames()",
          "slug": "object-getownpropertynames",
          "children": []
        },
        {
          "level": 3,
          "title": "Object \u5176\u4ED6\u9759\u6001\u65B9\u6CD5",
          "slug": "object-\u5176\u4ED6\u9759\u6001\u65B9\u6CD5",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Object \u7684\u5B9E\u4F8B\u65B9\u6CD5",
      "slug": "object-\u7684\u5B9E\u4F8B\u65B9\u6CD5",
      "children": [
        {
          "level": 3,
          "title": "Object.prototype.valueOf()",
          "slug": "object-prototype-valueof",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.prototype.toString()",
          "slug": "object-prototype-tostring",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.prototype.toLocaleString()",
          "slug": "object-prototype-tolocalestring",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.prototype.hasOwnProperty()",
          "slug": "object-prototype-hasownproperty",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61",
      "slug": "\u4E8C\u3001\u5C5E\u6027\u63CF\u8FF0\u5BF9\u8C61",
      "children": [
        {
          "level": 3,
          "title": "Object.getOwnPropertyDescriptor()",
          "slug": "object-getownpropertydescriptor",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.getOwnPropertyNames()",
          "slug": "object-getownpropertynames-1",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.defineProperty()\uFF0CObject.defineProperties()",
          "slug": "object-defineproperty-object-defineproperties",
          "children": []
        },
        {
          "level": 3,
          "title": "Object.prototype.propertyIsEnumerable()",
          "slug": "object-prototype-propertyisenumerable",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5143\u5C5E\u6027",
          "slug": "\u5143\u5C5E\u6027",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1642686185e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 3
      },
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "web/JavaScript/\u5185\u7F6E\u5BF9\u8C61.md"
};
var _____html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-5debe7e1",
  "path": "/web/JavaScript/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E8%BF%90%E7%AE%97%E7%AC%A6.html",
  "title": "\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26",
    "description": "\u9875\u9762\u7684\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1.\u6570\u636E\u7C7B\u578B",
      "slug": "_1-\u6570\u636E\u7C7B\u578B",
      "children": [
        {
          "level": 3,
          "title": "null\u548Cundefined",
          "slug": "null\u548Cundefined",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5E03\u5C14\u503C\uFF08boolean\uFF09",
          "slug": "\u5E03\u5C14\u503C-boolean",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6570\u503C\uFF08Number\uFF09",
          "slug": "\u6570\u503C-number",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5B57\u7B26\uFF08String\uFF09",
          "slug": "\u5B57\u7B26-string",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5BF9\u8C61",
          "slug": "\u5BF9\u8C61",
          "children": []
        },
        {
          "level": 3,
          "title": "\u51FD\u6570",
          "slug": "\u51FD\u6570",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6570\u7EC4",
          "slug": "\u6570\u7EC4",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2.\u8FD0\u7B97\u7B26",
      "slug": "_2-\u8FD0\u7B97\u7B26",
      "children": [
        {
          "level": 3,
          "title": "\u7B97\u672F\u8FD0\u7B97\u7B26",
          "slug": "\u7B97\u672F\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u6BD4\u8F83\u8FD0\u7B97\u7B26",
          "slug": "\u6BD4\u8F83\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5E03\u5C14\u8FD0\u7B97\u7B26",
          "slug": "\u5E03\u5C14\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
          "slug": "\u4E8C\u8FDB\u5236\u4F4D\u8FD0\u7B97\u7B26",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5176\u4ED6\u8FD0\u7B97\u7B26",
          "slug": "\u5176\u4ED6\u8FD0\u7B97\u7B26",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1641109712e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "web/JavaScript/\u6570\u636E\u7C7B\u578B\u4E0E\u8FD0\u7B97\u7B26.md"
};
var _________html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-24f06668",
  "path": "/web/JavaScript/%E8%AF%AD%E6%B3%95%E5%9F%BA%E7%A1%80.html",
  "title": "\u8BED\u6CD5\u57FA\u7840",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "\u8BED\u6CD5\u57FA\u7840",
    "description": "\u9875\u9762\u7684\u63CF\u8FF0",
    "contributors": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
      "slug": "\u6570\u636E\u7C7B\u578B\u8F6C\u6362",
      "children": [
        {
          "level": 3,
          "title": "\u5F3A\u5236\u8F6C\u6362",
          "slug": "\u5F3A\u5236\u8F6C\u6362",
          "children": []
        },
        {
          "level": 3,
          "title": "\u81EA\u52A8\u8F6C\u6362",
          "slug": "\u81EA\u52A8\u8F6C\u6362",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u9519\u8BEF\u5904\u7406\u673A\u5236",
      "slug": "\u9519\u8BEF\u5904\u7406\u673A\u5236",
      "children": [
        {
          "level": 3,
          "title": "Error \u5B9E\u4F8B\u5BF9\u8C61",
          "slug": "error-\u5B9E\u4F8B\u5BF9\u8C61",
          "children": []
        },
        {
          "level": 3,
          "title": "\u539F\u751F\u9519\u8BEF\u7C7B\u578B",
          "slug": "\u539F\u751F\u9519\u8BEF\u7C7B\u578B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u81EA\u5B9A\u4E49\u9519\u8BEF",
          "slug": "\u81EA\u5B9A\u4E49\u9519\u8BEF",
          "children": []
        },
        {
          "level": 3,
          "title": "throw\u8BED\u53E5",
          "slug": "throw\u8BED\u53E5",
          "children": []
        },
        {
          "level": 3,
          "title": "try...catch \u7ED3\u6784",
          "slug": "try-catch-\u7ED3\u6784",
          "children": []
        },
        {
          "level": 3,
          "title": "finally \u4EE3\u7801\u5757",
          "slug": "finally-\u4EE3\u7801\u5757",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "console \u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0",
      "slug": "console-\u5BF9\u8C61\u4E0E\u63A7\u5236\u53F0",
      "children": [
        {
          "level": 3,
          "title": "console \u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5",
          "slug": "console-\u5BF9\u8C61\u7684\u9759\u6001\u65B9\u6CD5",
          "children": []
        },
        {
          "level": 3,
          "title": "\u63A7\u5236\u53F0\u547D\u4EE4\u884C API",
          "slug": "\u63A7\u5236\u53F0\u547D\u4EE4\u884C-api",
          "children": []
        },
        {
          "level": 3,
          "title": "debugger \u8BED\u53E5",
          "slug": "debugger-\u8BED\u53E5",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1641109712e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "web/JavaScript/\u8BED\u6CD5\u57FA\u7840.md"
};
var _____html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-e9674cca",
  "path": "/web/vue/01.html",
  "title": "vue\u524D\u7F6E",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vue\u524D\u7F6E",
    "description": "vue\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u524D\u7F6E",
      "slug": "\u524D\u7F6E",
      "children": []
    },
    {
      "level": 2,
      "title": "MVVM\uFF1F",
      "slug": "mvvm",
      "children": [
        {
          "level": 3,
          "title": "MVC",
          "slug": "mvc",
          "children": []
        },
        {
          "level": 3,
          "title": "MVP",
          "slug": "mvp",
          "children": []
        },
        {
          "level": 3,
          "title": "MVVM",
          "slug": "mvvm-1",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4F8B\u5B50\u5BF9\u6BD4",
          "slug": "\u4F8B\u5B50\u5BF9\u6BD4",
          "children": []
        },
        {
          "level": 3,
          "title": "vue\u5B9E\u73B0\u4F8B\u5B50",
          "slug": "vue\u5B9E\u73B0\u4F8B\u5B50",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "\u5B89\u88C5vue-devtools",
      "slug": "\u5B89\u88C5vue-devtools",
      "children": []
    },
    {
      "level": 2,
      "title": "\u5F00\u53D1\u5DE5\u5177",
      "slug": "\u5F00\u53D1\u5DE5\u5177",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1641553252e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 2
      },
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/vue/01.md"
};
var _01_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-637b5fd4",
  "path": "/web/vue/02vue%E5%AE%9E%E4%BE%8B.html",
  "title": "vue\u5B9E\u4F8B\u8D77\u6B65",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vue\u5B9E\u4F8B\u8D77\u6B65",
    "description": "vue\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5F15\u5165vue",
      "slug": "\u5F15\u5165vue",
      "children": []
    },
    {
      "level": 2,
      "title": "vue\u5B9E\u4F8B",
      "slug": "vue\u5B9E\u4F8B",
      "children": []
    },
    {
      "level": 2,
      "title": "\u63D2\u503C\u4E0E\u6307\u4EE4",
      "slug": "\u63D2\u503C\u4E0E\u6307\u4EE4",
      "children": [
        {
          "level": 3,
          "title": "v-if\u3001v-else\u3001v-show",
          "slug": "v-if\u3001v-else\u3001v-show",
          "children": []
        },
        {
          "level": 3,
          "title": "v-for",
          "slug": "v-for",
          "children": []
        },
        {
          "level": 3,
          "title": "v-text \u3001v-html",
          "slug": "v-text-\u3001v-html",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1641553252e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "web/vue/02vue\u5B9E\u4F8B.md"
};
var _02vue___html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-59222251",
  "path": "/web/vue/text2.html",
  "title": "vue2\u6807\u9898",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "vue2\u6807\u9898",
    "description": "vue2\u63CF\u8FF0"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "3",
      "slug": "_3",
      "children": []
    },
    {
      "level": 2,
      "title": "4",
      "slug": "_4",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1640251957e3,
    "contributors": [
      {
        "name": "\u9648\u67D2",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/vue/text2.md"
};
var text2_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-58f4867c",
  "path": "/web/webpack/webpack.html",
  "title": "webpack\u4ECB\u7ECD",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "webpack\u4ECB\u7ECD",
    "description": "webpack\u4ECB\u7ECD"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "webpack\u5165\u5751",
      "slug": "webpack\u5165\u5751",
      "children": []
    },
    {
      "level": 2,
      "title": "webpack\u57FA\u7840",
      "slug": "webpack\u57FA\u7840",
      "children": [
        {
          "level": 3,
          "title": "\u5FEB\u901F\u4E0A\u624B",
          "slug": "\u5FEB\u901F\u4E0A\u624B",
          "children": []
        },
        {
          "level": 3,
          "title": "\u914D\u7F6E\u6587\u4EF6",
          "slug": "\u914D\u7F6E\u6587\u4EF6",
          "children": []
        },
        {
          "level": 3,
          "title": "Loader",
          "slug": "loader",
          "children": []
        },
        {
          "level": 3,
          "title": "\u63D2\u4EF6\uFF08plugin\uFF09",
          "slug": "\u63D2\u4EF6-plugin",
          "children": []
        },
        {
          "level": 3,
          "title": "\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55",
          "slug": "\u81EA\u52A8\u6E05\u7A7A\u6253\u5305\u76EE\u5F55",
          "children": []
        },
        {
          "level": 3,
          "title": "\u533A\u5206\u73AF\u5883",
          "slug": "\u533A\u5206\u73AF\u5883",
          "children": []
        },
        {
          "level": 3,
          "title": "\u4F7F\u7528devServer",
          "slug": "\u4F7F\u7528devserver",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1641725962e3,
    "contributors": [
      {
        "name": "540765",
        "email": "3062995371@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "web/webpack/webpack.md"
};
var webpack_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": []
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$e
});
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => shared.isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => shared.isLinkMailto(item.value.link) || shared.isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: ["nav-link", { "router-link-active": vue.unref(isActive) }],
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "nav-link external",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavLink.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!shared.isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const features = vue.computed(() => {
      if (shared.isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "home",
        "aria-labelledby": vue.unref(heroText) ? "main-title" : void 0
      }, _attrs))}><header class="hero">`);
      _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vue.unref(heroImage)) {
              _push2(`<img${serverRenderer.ssrRenderAttr("src", vue.unref(withBase)(vue.unref(heroImage)))}${serverRenderer.ssrRenderAttr("alt", vue.unref(heroAlt))}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.unref(heroImage) ? (vue.openBlock(), vue.createBlock("img", {
                key: 0,
                src: vue.unref(withBase)(vue.unref(heroImage)),
                alt: vue.unref(heroAlt)
              }, null, 8, ["src", "alt"])) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$d, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (vue.unref(features).length) {
        _push(`<div class="features"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="theme-default-content custom">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const resolveRepoType = (repo) => {
  if (!shared.isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, shared.isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, shared.removeLeadingSlash(`${shared.removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="mobile-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$b, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="nav-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child, index2) => {
              _push2(`<li class="dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$d, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$d, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$d, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "nav-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child, index2) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.link || index2,
                    class: "dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$d, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$d, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$d, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownLink.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unkown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !shared.isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (shared.isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-links" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-links-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$d, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarLinks.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbar = vue.ref(null);
    const siteBrand = vue.ref(null);
    const siteBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const siteBrandTitle = vue.computed(() => siteLocale.value.title);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = siteBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(siteBrandLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (vue.unref(siteBrandLogo)) {
                    _push3(`<img class="logo"${serverRenderer.ssrRenderAttr("src", vue.unref(withBase)(vue.unref(siteBrandLogo)))}${serverRenderer.ssrRenderAttr("alt", vue.unref(siteBrandTitle))}${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    vue.unref(siteBrandLogo) ? (vue.openBlock(), vue.createBlock("img", {
                      key: 0,
                      class: "logo",
                      src: vue.unref(withBase)(vue.unref(siteBrandLogo)),
                      alt: vue.unref(siteBrandTitle)
                    }, null, 8, ["src", "alt"])) : vue.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (vue.unref(siteBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(siteBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(siteBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(_component_ClientOnly, null, {
                default: vue.withCtx(() => [
                  vue.unref(siteBrandLogo) ? (vue.openBlock(), vue.createBlock("img", {
                    key: 0,
                    class: "logo",
                    src: vue.unref(withBase)(vue.unref(siteBrandLogo)),
                    alt: vue.unref(siteBrandTitle)
                  }, null, 8, ["src", "alt"])) : vue.createCommentVNode("", true)
                ]),
                _: 1
              }),
              vue.unref(siteBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(siteBrandLogo) }]
              }, vue.toDisplayString(vue.unref(siteBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><div class="navbar-links-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      useSiteLocaleData();
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$d, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (shared.isString(conf)) {
        return useNavLink(conf);
      }
      if (shared.isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$d, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$d, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (route, link) => {
  if (link === void 0) {
    return false;
  }
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.link)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child));
  }
  return false;
};
const renderItem = (item, props) => {
  if (item.link) {
    return vue.h(_sfc_main$d, __spreadProps(__spreadValues({}, props), {
      item
    }));
  }
  return vue.h("p", props, item.text);
};
const renderChildren = (item, depth) => {
  var _a;
  if (!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
    return null;
  }
  return vue.h("ul", {
    class: {
      "sidebar-sub-items": depth > 0
    }
  }, item.children.map((child) => vue.h("li", vue.h(SidebarChild, {
    item: child,
    depth: depth + 1
  }))));
};
const SidebarChild = ({ item, depth = 0 }) => {
  const route = vueRouter.useRoute();
  const active = isActiveItem(route, item);
  return [
    renderItem(item, {
      class: {
        "sidebar-heading": depth === 0,
        "sidebar-item": true,
        active
      }
    }),
    renderChildren(item, depth)
  ];
};
SidebarChild.displayName = "SidebarChild";
SidebarChild.props = {
  item: {
    type: Object,
    required: true
  },
  depth: {
    type: Number,
    required: false
  }
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<ul class="sidebar-links"><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
        _push(serverRenderer.ssrRenderComponent(vue.unref(SidebarChild), {
          key: item.link || item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "mytemplate" }, _attrs))}><text>\u7EC4\u4EF6\u5360\u4F4D\u7B26</text></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../components/MyTemplate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var MyTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var MyTemplate$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": MyTemplate
});
exports.createVueApp = createVueApp;
