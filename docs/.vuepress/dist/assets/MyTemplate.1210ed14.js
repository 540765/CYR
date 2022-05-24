import { o as openBlock, c as createElementBlock, F as Fragment, g as renderList, b as createBaseVNode, t as toDisplayString } from "./app.279a70ca.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
var MyTemplate_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "MyTemplate",
  data() {
    return {
      child: [
        { name: "1", about: "", link: "" },
        { name: "2", about: "", link: "" },
        { name: "3", about: "", link: "" }
      ]
    };
  },
  methods: {
    test(e) {
      console.log(e);
    }
  }
};
const _hoisted_1 = { class: "test" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "name" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "about" }, "\u4ECB\u7ECD", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.child, (items, name) => {
      return openBlock(), createElementBlock("div", {
        key: name,
        onClick: ($event) => $options.test(name),
        class: "childs"
      }, [
        createBaseVNode("div", _hoisted_3, " \u300A" + toDisplayString(items.name) + "\u300B ", 1),
        _hoisted_4
      ], 8, _hoisted_2);
    }), 128))
  ]);
}
var MyTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { MyTemplate as default };