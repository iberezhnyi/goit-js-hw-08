function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var r,o,i,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,a=setTimeout(S,e),l?b(t):u}function x(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function S(){var t=p();if(x(t))return T(t);a=setTimeout(S,function(t){var n=e-(t-f);return s?m(n,i-(t-c)):n}(t))}function T(t){return a=void 0,v&&r?b(t):(r=o=void 0,u)}function h(){var t=p(),n=x(t);if(r=arguments,o=this,f=t,n){if(void 0===a)return j(f);if(s)return a=setTimeout(S,e),b(f)}return void 0===a&&(a=setTimeout(S,e)),u}return e=y(e)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=f=o=a=void 0},h.flush=function(){return void 0===a?u:T(p())},h}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const b={form:document.querySelector("form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};x();const j={};function x(){const t=localStorage.getItem("feedback-form-state");if(t){const e=JSON.parse(t);return b.input.value=e.email,b.textarea.value=e.message,e}}b.form.addEventListener("input",t(e)((t=>{!function(t){const e=t.target.name,n=t.target.value;j[e]=n,localStorage.setItem("feedback-form-state",JSON.stringify(j))}(t)}),500)),b.form.addEventListener("submit",(t=>{t.preventDefault(),console.log(x()),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.0863454c.js.map
