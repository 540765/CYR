import { c as createStaticVNode } from "./app.10c0cb97.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5916\u9375" tabindex="-1"><a class="header-anchor" href="#\u5916\u9375" aria-hidden="true">#</a> \u5916\u9375</h2><p>\u4E0B\u9762\u662F\u7269\u7406\u5916\u9375\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u5B9A\u7FA9\u5916\u9375 key</span>\n<span class="token comment">-- \u5916\u9375\u985E\u4F3C\u65BC\u7D04\u675F\uFF0C\u57F7\u884C\u5F15\u7528\u5176\u5B83\u8868\u7684\u6578\u64DA\uFF0Creferences \u5F15\u7528</span>\n<span class="token keyword">key</span> <span class="token punctuation">`</span>FK_gradeid<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token keyword">constraint</span> <span class="token punctuation">`</span>FK_gradeid<span class="token punctuation">`</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span><span class="token punctuation">)</span>\n<span class="token comment">-- 1.\u5916\u9375\u4E0D\u80FD\u662F\u4E3B\u9375</span>\n<span class="token comment">-- 2.\u5169\u500B\u5B57\u6BB5\u6578\u64DA\u985E\u578B\u548C\u7D04\u675F\u5FC5\u9808\u76F8\u540C</span>\n\n<span class="token comment">-- \u6216\u8005</span>\n\n<span class="token keyword">alter</span> <span class="token keyword">table</span> <span class="token punctuation">`</span>\u8868\u540D<span class="token punctuation">`</span>\n<span class="token keyword">add</span> <span class="token keyword">constraint</span> <span class="token punctuation">`</span>FK_gradeid<span class="token punctuation">`</span> <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">references</span> <span class="token punctuation">`</span>grade<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>gradeid<span class="token punctuation">`</span><span class="token punctuation">)</span>\n\n<span class="token comment">-- alter table \u8868 add constraint [\u7D04\u675F\u540D] foreign key (\u4F5C\u70BA\u5916\u9375\u7684\u5217) references \u90A3\u500B\u8868\uFF08\u90A3\u500B\u5B57\u6BB5\uFF09</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u522A\u9664\u5916\u9375\u7684\u6642\u5019\uFF0C\u5FC5\u9808\u5148\u522A\u9664\u5B57\u8868\uFF0C\u518D\u522A\u9664\u7236\u8868</p><h4 id="\u4E0D\u5F97\u4F7F\u7528\u5916\u9375\u65BC\u7D1A\u806F" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u5F97\u4F7F\u7528\u5916\u9375\u65BC\u7D1A\u806F" aria-hidden="true">#</a> \u4E0D\u5F97\u4F7F\u7528\u5916\u9375\u65BC\u7D1A\u806F</h4><h2 id="dml-\u8A9E\u8A00" tabindex="-1"><a class="header-anchor" href="#dml-\u8A9E\u8A00" aria-hidden="true">#</a> DML \u8A9E\u8A00</h2><h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><blockquote><p>insert</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- insert into \u8868\u540D (`\u5B57\u6BB5\u540D`,`\u5B57\u6BB5\u540D2`) values \uFF08`\u503C1`,`\u503C2`\uFF09</span>\n<span class="token comment">-- insert into \u8868\u540D (`\u5B57\u6BB5\u540D`) values \uFF08`\u503C1`),(`\u503C2`\uFF09; \u4E00\u500B\u5B57\u6BB5\u591A\u500B\u503C</span>\n<span class="token keyword">insert</span> <span class="token keyword">into</span> <span class="token punctuation">`</span>student<span class="token punctuation">`</span> <span class="token punctuation">(</span><span class="token punctuation">`</span>name<span class="token punctuation">`</span><span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token string">&#39;\u9673\u67D2&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF1A\u5B57\u6BB5\u548C\u503C\u5F97\u4F4D\u7F6E\u662F\u4E00\u4E00\u5C0D\u61C9\u7684</p><h3 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><blockquote><p>update</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u8A9E\u6CD5\uFF1Aupdate \u8868\u540D set column_name = value where [\u689D\u4EF6]</span>\n<span class="token keyword">update</span> <span class="token punctuation">`</span>student<span class="token punctuation">`</span> <span class="token keyword">set</span> <span class="token punctuation">`</span>name<span class="token punctuation">`</span><span class="token operator">=</span><span class="token string">&#39;\u9673\u67D2&#39;</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n<span class="token comment">-- \u4FEE\u6539\u591A\u500B\u5C6C\u6027</span>\n<span class="token keyword">update</span> <span class="token punctuation">`</span>student<span class="token punctuation">`</span> <span class="token keyword">set</span> <span class="token punctuation">`</span>name<span class="token punctuation">`</span><span class="token operator">=</span><span class="token string">&#39;\u9673\u67D2&#39;</span><span class="token punctuation">,</span><span class="token punctuation">`</span>age<span class="token punctuation">`</span><span class="token operator">=</span><span class="token string">&#39;22&#39;</span><span class="token punctuation">,</span><span class="token punctuation">`</span>email<span class="token punctuation">`</span><span class="token operator">=</span><span class="token string">&#39;3062995371@qq.com&#39;</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8A9E\u6CD5\uFF1A<code>update \u8868\u540D set column_name = value,[column_name = value,......] where [\u689D\u4EF6]</code></p><p>\u6CE8\u610F\uFF1A</p><ol><li>\u4E0D\u5BEB\u689D\u4EF6\u6703\u5F71\u97FF\u6574\u5F35\u8868</li><li><code>column_name</code>\u662F\u6578\u64DA\u5EAB\u7684\u5217\uFF0C\u76E1\u91CF\u5E36\u4E0A\u82F1\u6587\u5192\u865F``</li><li><code>value</code>\u662F\u4E00\u500B\u5177\u9AD4\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u500B\u8B8A\u91CF</li></ol><p>\u91CD\u9EDE\u5728\u4E8E<code>where</code>\u689D\u4EF6\uFF0C\u5176\u4F5C\u7528\u4E8E\u6BCF\u689D\u6578\u64DA\uFF0C\u8A08\u7B97\u7D50\u679C\u5FC5\u9808\u662F<code>Boolean</code>\u503C\uFF1A</p><table><thead><tr><th style="text-align:center;">\u64CD\u4F5C\u7B26</th><th style="text-align:center;">\u542B\u7FA9</th><th style="text-align:center;">\u4F8B\u5B50</th></tr></thead><tbody><tr><td style="text-align:center;"><code>=</code></td><td style="text-align:center;">\u7B49\u65BC</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>&lt;&gt;</code>\u6216<code>!=</code></td><td style="text-align:center;">\u4E0D\u7B49\u65BC</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>&gt;</code></td><td style="text-align:center;">\u5927\u65BC</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>&lt;</code></td><td style="text-align:center;">\u5C0F\u65BC</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>between...and...</code></td><td style="text-align:center;">\u6307\u5B9A\u7BC4\u570D\u4E4B\u5167\uFF0C\u5982:<code>[2,5]</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>and</code></td><td style="text-align:center;">\u548C\uFF0C\u985E\u4F3C\u65BC&amp;&amp;\uFF0C\u5DE6\u53F3\u5FC5\u9808\u540C\u6642\u6EFF\u8DB3</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>or</code></td><td style="text-align:center;">\u6216\uFF0C\u5DE6\u53F3\u6EFF\u8DB3\u4E00\u9805\u5373\u53EF</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="\u522A\u9664" tabindex="-1"><a class="header-anchor" href="#\u522A\u9664" aria-hidden="true">#</a> \u522A\u9664</h3><blockquote><p>delete</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u522A\u9664\u6307\u5B9A\u6578\u64DA</span>\n<span class="token keyword">delete</span> <span class="token keyword">from</span> <span class="token punctuation">`</span>student<span class="token punctuation">`</span> <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\n\n<span class="token comment">-- \u6E05\u7A7A\u8868</span>\n<span class="token keyword">truncate</span> <span class="token punctuation">`</span>student<span class="token punctuation">`</span><span class="token punctuation">;</span>\n<span class="token keyword">delete</span> <span class="token keyword">from</span> <span class="token punctuation">`</span>studeng<span class="token punctuation">`</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6E05\u7A7A\u8868\u7684\u5340\u5225\uFF1A</p><ol><li><p><code>delete</code>:</p><ul><li>\u4E0D\u6703\u5F71\u97FF\u81EA\u589E</li></ul></li><li><p><code>truncate</code>:</p><ul><li>\u81EA\u589E\u6703\u6B78\u96F6</li></ul></li></ol><h2 id="dql-\u67E5\u8A62\u6578\u64DA" tabindex="-1"><a class="header-anchor" href="#dql-\u67E5\u8A62\u6578\u64DA" aria-hidden="true">#</a> DQL \u67E5\u8A62\u6578\u64DA</h2><h3 id="\u67E5\u8A62" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8A62" aria-hidden="true">#</a> \u67E5\u8A62</h3><blockquote><p>\u6307\u5B9A\u5B57\u6BB5\u67E5\u8A62</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u8A62\u6240\u6709\u5B78\u751F</span>\n<span class="token keyword">select</span> <span class="token operator">*</span> form student\n\n<span class="token comment">--\u67E5\u8A62\u6307\u5B9A\u5B57\u6BB5</span>\n<span class="token keyword">select</span> <span class="token punctuation">`</span>student_no<span class="token punctuation">`</span><span class="token punctuation">,</span><span class="token punctuation">`</span>studeng_name<span class="token punctuation">`</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>\n\n<span class="token comment">--\u67E5\u8A62\u6307\u5B9A\u5B57\u6BB5\u6DFB\u52A0\u5225\u540D\uFF08\u7D66\u5B57\u6BB5\u8D77\u5225\u540D\uFF0C\u8868\u4E5F\u53EF\u4EE5\uFF09</span>\n<span class="token keyword">select</span> <span class="token punctuation">`</span>student_no<span class="token punctuation">`</span> <span class="token keyword">as</span> \u5B78\u865F<span class="token punctuation">,</span><span class="token punctuation">`</span>studeng_name<span class="token punctuation">`</span> <span class="token keyword">as</span> \u59D3\u540D <span class="token keyword">from</span> student<span class="token punctuation">;</span>\n\n<span class="token comment">-- \u51FD\u6578:Concat(a,b)\uFF0C\u62FC\u63A5\u5B57\u7B26\u4E32</span>\n<span class="token keyword">select</span> concat<span class="token punctuation">(</span><span class="token string">&#39;\u59D3\u540D\uFF1A&#39;</span><span class="token punctuation">,</span>student_name<span class="token punctuation">)</span> <span class="token keyword">as</span> \u540D\u5B57 <span class="token keyword">from</span> studeng<span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u53BB\u91CD" aria-hidden="true">#</a> \u53BB\u91CD</h3><blockquote><p>distinct</p></blockquote><div class="language-SQL ext-SQL line-numbers-mode"><pre class="language-SQL"><code>-- \u5254\u9664\u91CD\u8907\u6578\u64DA\uFF0C\u91CD\u8907\u53EA\u986F\u793A\u4E00\u689D\uFF0C\u67E5\u8A62result\u4E2Dstudent_no\uFF0C\u4E26\u53BB\u91CD\nselect distinct `student_no` from result;\n\nselect 100*3-1; --\u904B\u7B97\u8868\u9054\u5F0F\nselect version(); --\u67E5\u770Bmysql\u7248\u672C\nselect @@auto_increment_increment;--\u67E5\u770B\u81EA\u589E\u6B65\u9577\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6578\u64DA\u5EAB\u4E2D\u7684<code>select</code>\u8868\u9054\u5F0F\uFF1A\u6587\u672C\u503C\uFF0C\u5217\uFF0Cnull\uFF0C\u51FD\u6578\uFF0C\u8A08\u7B97\u8868\u9054\u5F0F\uFF0C\u7CFB\u7D71\u8B8A\u91CF</p><h3 id="where-\u689D\u4EF6\u5B57\u53E5" tabindex="-1"><a class="header-anchor" href="#where-\u689D\u4EF6\u5B57\u53E5" aria-hidden="true">#</a> where \u689D\u4EF6\u5B57\u53E5</h3><p>\u4F5C\u7528\uFF1A\u5C31\u662F\u6AA2\u7D22\u6578\u64DA\u4E2D<code>\u7B26\u5408\u689D\u4EF6</code>\u7684\u503C</p><blockquote><p>\u908F\u8F2F\u904B\u7B97\u7B26</p></blockquote><table><thead><tr><th style="text-align:center;">\u904B\u7B97\u7B26</th><th style="text-align:center;">\u8A9E\u6CD5</th><th style="text-align:center;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;"><code>and</code>,<code>&amp;&amp;</code></td><td style="text-align:center;">a and b \u6216\u8005 a &amp;&amp; b</td><td style="text-align:center;">\u908F\u8F2F\u8207\uFF0C\u5169\u500B\u70BA\u771F\u624D\u70BA\u771F</td></tr><tr><td style="text-align:center;"><code>or</code>, ||</td><td style="text-align:center;">a or b \u6216\u8005 a || b</td><td style="text-align:center;">\u908F\u8F2F\u6216\uFF0C\u4E00\u500B\u70BA\u771F\u624D\u70BA\u771F</td></tr><tr><td style="text-align:center;"><code>not</code>,<code>!</code></td><td style="text-align:center;"><code>not</code> a \u6216\u8005 !a</td><td style="text-align:center;">\u908F\u8F2F\u975E\uFF0C\u771F\u70BA\u5047\uFF0C\u5047\u70BA\u771F</td></tr></tbody></table><p>\u6CE8\u610F\uFF1A\u76E1\u91CF\u4F7F\u7528\u82F1\u6587\u8868\u9054\u5F0F</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- \u689D\u4EF6\u67E5\u8A62,\u67E5\u8A62\u6210\u7E3E95\u2014\u2014100\u7684\u5B78\u751F</span>\n<span class="token keyword">select</span> student_no <span class="token keyword">from</span> student <span class="token keyword">where</span> student_result<span class="token operator">&gt;=</span><span class="token number">95</span> <span class="token operator">and</span> student_result<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token comment">-- \u5340\u9593\u67E5\u8A62(\u67E5\u8A6295\u2014\u2014100\u5206\u7684\u540C\u5B78)</span>\n<span class="token keyword">select</span> student_no <span class="token keyword">from</span> student <span class="token keyword">where</span> student_result <span class="token operator">between</span> <span class="token number">95</span> <span class="token operator">and</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token comment">--\u67E5\u8A62\u5B78\u865F\u4E0D\u70BA1000\u7684\u540C\u5B78\u7684\u6210\u7E3E</span>\n<span class="token keyword">select</span> student_no <span class="token keyword">from</span> result <span class="token keyword">where</span> <span class="token operator">not</span> student_no<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u6A21\u7CCA\u67E5\u8A62" tabindex="-1"><a class="header-anchor" href="#\u6A21\u7CCA\u67E5\u8A62" aria-hidden="true">#</a> \u6A21\u7CCA\u67E5\u8A62</h3>', 38);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var _02_mysql_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _02_mysql_____html as default };
