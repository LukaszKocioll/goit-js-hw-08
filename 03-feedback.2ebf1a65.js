!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,r,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),d?y(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=p();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&o?y(e):(o=r=void 0,u)}function T(){var e=p(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var j="feedback-form-state",w=document.querySelector(".feedback-form").elements,O=w.email,h=w.message,T=JSON.parse(localStorage.getItem(j))||{},x=e(t)((function(){var e;e={email:O.value,message:h.value},localStorage.setItem(j,JSON.stringify(e))}),500);document.querySelector('input[name="email"]').addEventListener("input",x),document.querySelector('textarea[name="message"]').addEventListener("input",x),document.querySelector(".feedback-form").addEventListener("submit",(function(e){var t;e.preventDefault(),t={email:O.value,message:h.value},localStorage.removeItem(j),O.value="",h.value="",T.email="",T.message="",console.log("Form data cleared."),console.log("Cleared data:",t)})),window.addEventListener("load",(function(){O.value=T.email||"",h.value=T.message||""}))}();
//# sourceMappingURL=03-feedback.2ebf1a65.js.map
