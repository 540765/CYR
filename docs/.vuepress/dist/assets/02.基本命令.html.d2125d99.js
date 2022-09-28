import { r as resolveComponent, o as openBlock, b as createElementBlock, e as createBaseVNode, d as createVNode, F as Fragment, a as createStaticVNode, f as createTextVNode } from "./app.2eeef89e.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5E6B\u52A9\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E6B\u52A9\u547D\u4EE4" aria-hidden="true">#</a> \u5E6B\u52A9\u547D\u4EE4</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>docker version      <span class="token comment"># \u986F\u793Adocker\u7248\u672C</span>\ndocker info         <span class="token comment"># \u986F\u793A\u8A73\u7D30\u4FE1\u606F\uFF0C\u5305\u62EC\u93E1\u50CF\u548C\u5BB9\u5668\u7684\u6578\u91CF</span>\ndocker \u547D\u4EE4 <span class="token punctuation">-</span><span class="token punctuation">-</span>help  <span class="token comment"># \u5E6B\u52A9\u547D\u4EE4</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u93E1\u50CF\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u93E1\u50CF\u547D\u4EE4" aria-hidden="true">#</a> \u93E1\u50CF\u547D\u4EE4</h2>', 3);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u4E0B\u9762\u57FA\u4E8E");
const _hoisted_5 = {
  href: "https://docs.docker.com/engine/reference/commandline/images/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("https://docs.docker.com/engine/reference/commandline/images/");
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>\u67E5\u770B\u6240\u6709\u672C\u5730\u7684\u4E3B\u6A5F\u4E0A\u7684\u93E1\u50CF</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># docker images</span>\nC<span class="token punctuation">:</span>\\Users\\Yiren<span class="token punctuation">&gt;</span>docker images\nREPOSITORY           TAG       IMAGE ID       CREATED         SIZE\niris<span class="token punctuation">-</span>tranbiot<span class="token punctuation">-</span>core   latest    00961a41950d   22 hours ago    696MB\niris<span class="token punctuation">-</span>gateway         latest    489c0ff5d4bd   22 hours ago    595MB\niris<span class="token punctuation">-</span>iris<span class="token punctuation">-</span>func       latest    bd45e8f24364   22 hours ago    632MB\niris<span class="token punctuation">-</span>iris<span class="token punctuation">-</span>base       latest    2cacca852d6a   22 hours ago    635MB\n&lt;none<span class="token punctuation">&gt;</span>               &lt;none<span class="token punctuation">&gt;</span>    eeb382c9c2ec   6 days ago      696MB\n&lt;none<span class="token punctuation">&gt;</span>               &lt;none<span class="token punctuation">&gt;</span>    9e71cfab0545   6 days ago      632MB\n&lt;none<span class="token punctuation">&gt;</span>               &lt;none<span class="token punctuation">&gt;</span>    a3b38da4cce8   6 days ago      635MB\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol><li><code>REPOSITORY</code>\uFF1A\u93E1\u50CF\u7684\u5009\u5EAB\u6E90</li><li><code>TAG</code>\uFF1A\u93E1\u50CF\u7684\u6A19\u7C64</li><li><code>IMAGE ID</code>\uFF1A\u93E1\u50CF\u7684ID</li><li><code>CREATED</code>\uFF1A\u93E1\u50CF\u5275\u5EFA\u6642\u9593</li><li><code>SIZE</code>\uFF1A\u93E1\u50CF\u5927\u5C0F</li></ol><blockquote><p>\u9078\u9805</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>docker images <span class="token punctuation">-</span><span class="token punctuation">-</span>help\n\n<span class="token key atrule">Usage</span><span class="token punctuation">:</span>  docker images <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span><span class="token punctuation">:</span>TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>\n\nList images\n\n<span class="token key atrule">Options</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span>a<span class="token punctuation">,</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>all             Show all images (default hides intermediate images)\n      <span class="token punctuation">-</span><span class="token punctuation">-</span>digests         Show digests \n  <span class="token punctuation">-</span>f<span class="token punctuation">,</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>filter filter   Filter output based on conditions provided\n      <span class="token punctuation">-</span><span class="token punctuation">-</span>format string   Pretty<span class="token punctuation">-</span>print images using a Go template\n      <span class="token punctuation">-</span><span class="token punctuation">-</span>no<span class="token punctuation">-</span>trunc        Don&#39;t truncate output\n  <span class="token punctuation">-</span>q<span class="token punctuation">,</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>quiet           Only show image IDs\n\n\n<span class="token comment">#1. -a\uFF1A\u5217\u51FA\u6240\u6709\u93E1\u50CF</span>\n<span class="token comment">#2. -f\uFF1A</span>\n<span class="token comment">#3. -q\uFF1A\u53EA\u986F\u793A\u93E1\u50CFid</span>\n\n\n<span class="token comment">#\u641C\u7D22\u93E1\u50CF</span>\n\n<span class="token comment"># \u641C\u7D22MySQL</span>\ndocker search mysql\n<span class="token comment"># \u8FC7\u6EE4\u641C\u7D22</span>\ndocker search <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>filter=STARS=3000\n\n<span class="token comment">#\u62C9\u53D6\u955C\u50CF\uFF0C\u9ED8\u8BA4\u662Flatest\uFF08\u5373\u6700\u65B0\u955C\u50CF\uFF09</span>\n\n\n<span class="token comment"># \u4E0B\u8F7D\u6307\u5B9A\u7248\u672C</span>\ndocker pull mysql<span class="token punctuation">:</span><span class="token number">5.7</span>\n\n<span class="token comment"># \u5220\u9664\u67D0\u4E2A\u955C\u50CF</span>\ndocker rmi <span class="token punctuation">-</span>f <span class="token punctuation">[</span>\u955C\u50CFID<span class="token punctuation">]</span>\n\n<span class="token comment"># \u5220\u9664\u6240\u6709\u955C\u50CF</span>\ndocker rmi <span class="token punctuation">-</span>f $(docker images <span class="token punctuation">-</span>aq)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u5BB9\u5668\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u5BB9\u5668\u57FA\u672C\u547D\u4EE4</h2><p>\u6CE8\u610F\uFF1A\u6709\u4E86\u955C\u50CF\u624D\u53EF\u4EE5\u521B\u5EFA\u5BB9\u5668\uFF0Clinux\u3002\u53EF\u4EE5\u4E0B\u8F7Dcentos\u955C\u50CF\u6765\u6D4B\u8BD5\u5B66\u4E60</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7Dcentos</span>\ndocker pull centos\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>\u65B0\u5EFA\u5BB9\u5668\u5E76\u4E14\u542F\u52A8</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker run <span class="token punctuation">[</span>\u53EF\u9009\u53C2\u6570<span class="token punctuation">]</span> image\n\n<span class="token comment"># \u53C2\u6570\u8BF4\u660E</span>\n<span class="token comment">#--name=&quot;name&quot;    #\u5BB9\u5668\u540D\u5B57</span>\n<span class="token comment">#-d               #\u540E\u53F0\u65B9\u5F0F\u8FD0\u884C</span>\n<span class="token comment">#-it              #\u4F7F\u7528\u4EA4\u4E92\u65B9\u5F0F\u8FD0\u884C\uFF0C\u8FDB\u5165\u5BB9\u5668\u67E5\u770B\u5185\u5BB9</span>\n<span class="token comment">#-p               #\u6307\u5B9A\u5BB9\u5668\u7AEF\u53E3 -p 8080:8080</span>\n                 <span class="token comment"># -p \u4E3B\u673A\u7AEF\u53E3\uFF1A\u5BB9\u5668\u7AEF\u53E3</span>\n<span class="token comment">#-P               #\u968F\u673A\u7AEF\u53E3\u8FD0\u884C</span>\n\n<span class="token comment"># \u6D4B\u8BD5\uFF0C\u542F\u52A8\u5E76\u4E14\u8FDB\u5165\u5BB9\u5668</span>\ndocker run -it centos /bin/bash\n\n<span class="token function">ls</span> -a <span class="token comment"># \u67E5\u770B\u5BB9\u5668\u4FE1\u606F</span>\n\n<span class="token comment"># \u5217\u51FA\u6240\u67091\u5BB9\u5668</span>\ndocker <span class="token function">ps</span> <span class="token punctuation">[</span>\u547D\u4EE4<span class="token punctuation">]</span>\n\n<span class="token comment"># -a \u5217\u51FA\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668+\u5386\u53F2\u8FD0\u884C\u8FC7\u7684\u5BB9\u5668</span>\n<span class="token comment"># -n=? #\u663E\u793A\u6700\u8FD1\u521B\u5EFA\u7684\u5BB9\u5668</span>\n<span class="token comment"># -q #\u53EA\u663E\u793A\u5BB9\u5668\u7F16\u53F7</span>\n\n\n<span class="token comment"># \u9000\u51FA\u5BB9\u5668</span>\n<span class="token builtin class-name">exit</span> <span class="token comment">#\u9000\u51FA\u5E76\u4E14\u505C\u6B62\u5BB9\u5668</span>\nCtrl+P+Q <span class="token comment">#\u9000\u51FA\u955C\u50CF\u4F46\u4E0D\u505C\u6B62</span>\n\n<span class="token comment"># \u5220\u9664\u5BB9\u5668</span>\ndocker <span class="token function">rm</span> <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token comment"># \u5220\u9664\u6307\u5B9A\u5BB9\u5668\uFF0C\u6CE8\u610F\u4E0D\u80FD\u5220\u9664\u6B63\u5728\u8FD0\u884C\u7684</span>\ndocker <span class="token function">rm</span> -f <span class="token variable"><span class="token variable">$(</span>docker <span class="token function">ps</span> -aq<span class="token variable">)</span></span> <span class="token comment">#\u5220\u9664\u6240\u6709\u5BB9\u5668</span>\ndocker <span class="token function">rm</span> -a -q<span class="token operator">|</span><span class="token function">xargs</span> docker <span class="token function">rm</span> <span class="token comment">#\u5220\u9664\u6240\u6709\u5BB9\u5668\uFF0C\u5305\u62EC\u8FD0\u884C\u4E2D\u7684</span>\n\n<span class="token comment"># \u542F\u52A8\u548C\u505C\u6B62\uFF0C\u91CD\u542F\u5BB9\u5668</span>\ndocker satrt <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token comment">#\u542F\u52A8\u5BB9\u5668</span>\ndocker restart <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token comment">#\u91CD\u542F\u5BB9\u5668</span>\ndocker stop <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token comment">#\u505C\u6B62\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>\ndocker <span class="token function">kill</span> <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token comment">#\u5F3A\u5236\u505C\u6B62\u5BB9\u5668</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="\u5176\u4ED6\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u547D\u4EE4" aria-hidden="true">#</a> \u5176\u4ED6\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u540E\u53F0\u542F\u52A8\u5BB9\u5668</span>\ndocker run -d centos\n<span class="token comment"># \u5982\u679C\u6CA1\u6709\u524D\u53F0\u670D\u52A1\uFF0C\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u505C\u6B62</span>\n\n<span class="token comment"># \u67E5\u770B\u65E5\u5FD7</span>\ndocker logs --help\n\n<span class="token comment"># -tf #\u663E\u793A\u65E5\u5FD7</span>\n<span class="token comment"># --tail number # \u663E\u793A\u7B2C\u51E0\u6761</span>\n\n\n<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u4E2D\u8FDB\u7A0B\u4FE1\u606F</span>\ndocker <span class="token function">top</span> <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span>\n\n<span class="token comment"># \u67E5\u770B\u955C\u50CF\u5143\u6570\u636E</span>\ndocker inspect --help\n\n\ndocker inspect <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span>\n<span class="token comment"># \u6253\u5370\u5BB9\u5668\u4FE1\u606F</span>\n\n<span class="token comment"># \u8FDB\u5165\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u2014\u2014\u540E\u53F0\u670D\u52A1\u5BB9\u5668</span>\ndocker <span class="token builtin class-name">exec</span> -it <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> <span class="token punctuation">[</span>shell\u547D\u4EE4<span class="token punctuation">]</span>\n\n\n<span class="token comment"># \u8FDB\u5165\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u2014\u2014\u975E\u540E\u53F0\u670D\u52A1\u5BB9\u5668</span>\ndocker <span class="token builtin class-name">exec</span>  <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> \n\n<span class="token comment"># \u8FDB\u5165\u6B63\u5728\u6267\u884C\u7684\u7EC8\u7AEF\uFF0C\u4E0D\u4F1A\u542F\u52A8\u65B0\u8FDB\u7A0B</span>\ndocker attach <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span> \n\n\n<span class="token comment"># \u62F7\u8D1D\u6587\u4EF6\u5230\u672C\u5730</span>\ndocker <span class="token function">cp</span> <span class="token punctuation">[</span>\u5BB9\u5668id<span class="token punctuation">]</span>:/home/text.java /home\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>', 12);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_4,
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_7
  ], 64);
}
var _02______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _02______html as default };
