(()=>{var e={805:e=>{"use strict";e.exports=o,e.exports.isMobile=o,e.exports.default=o;const t=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,n=/CrOS/,i=/android|ipad|playbook|silk/i;function o(e){e||(e={});let o=e.ua;if(o||"undefined"==typeof navigator||(o=navigator.userAgent),o&&o.headers&&"string"==typeof o.headers["user-agent"]&&(o=o.headers["user-agent"]),"string"!=typeof o)return!1;let s=t.test(o)&&!n.test(o)||!!e.tablet&&i.test(o);return!s&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&-1!==o.indexOf("Macintosh")&&-1!==o.indexOf("Safari")&&(s=!0),s}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}!function(e){if(void 0===e.ltg){var t=function(e,t){Array.prototype.forEach.call(document.querySelectorAll(e),t)};e.ltg={},e.ltg.action=t,e.ltg.removeClass=function(e,n){t(e,(function(e){return e.classList.remove(n)}))},e.ltg.addClass=function(e,n){t(e,(function(e){return e.classList.add(n)}))},e.ltg.swap=function(e,n,i){t(e,(function(e){e.classList.remove(n),e.classList.add(i)}))}}}(window),function(e,t){var n=function(){e.scrollY>0?t.body.classList.add("scrolled"):t.body.classList.remove("scrolled")};e.addEventListener("scroll",n,!1),"loading"!==t.readyState?n():e.addEventListener("DOMContentLoaded",n,!1);var i=t.getElementById("site-header");if(lightningOpt.header_scrool&&i){var o=t.getElementById("site-header").offsetHeight,s=!1,a=!1,l=function(){var n=t.getElementById("site-header").nextElementSibling;!a&&e.scrollY>o?(t.body.classList.add("header_scrolled"),lightningOpt.add_header_offset_margin&&(n.style.marginTop=o+"px")):(t.body.classList.remove("header_scrolled"),lightningOpt.add_header_offset_margin&&(n.style.marginTop=null))},c=function(n){t.body.classList.remove("header_scrolled"),e.removeEventListener("scroll",l),!1!==s&&clearTimeout(s),a=!0,s=setTimeout((function(){e.addEventListener("scroll",l,!0),a=!1}),2e3)};t.addEventListener("readystatechange",(function(){"complete"===t.readyState&&Array.prototype.forEach.call(t.getElementsByTagName("a"),(function(e){var t=e.getAttribute("href");t&&0==t.indexOf("#")&&(["tab"].indexOf(e.getAttribute("role"))>0||e.getAttribute("data-toggle")||e.getAttribute("carousel-control")||e.addEventListener("click",c))}))})),e.addEventListener("scroll",l,!0),e.addEventListener("document.readyState",l,!1)}function r(){Array.prototype.forEach.call(t.getElementsByTagName("iframe"),(function(e){var t=e.getAttribute("src");if(t&&(t.indexOf("youtube")>=0||t.indexOf("vimeo")>=0||t.indexOf("maps")>=0))if("complete"===e.contentWindow.document.readyState){var n=e.getAttribute("width"),i=e.getAttribute("height")/n,o=e.offsetWidth*i;e.style.maxWidth="100%",e.style.height=o+"px"}else e.contentWindow.document.addEventListener("DOMContentLoaded",(function(){var t=e.getAttribute("width"),n=e.getAttribute("height")/t,i=e.offsetWidth*n;e.style.maxWidth="100%",e.style.height=i+"px"}))}))}e.addEventListener("DOMContentLoaded",r);var d=!1;e.addEventListener("resize",(function(){d&&clearTimeout(d),d=setTimeout(r,200)}))}(window,document),function(e,t){function n(){var e=t.getElementsByClassName("sub-section")[0];e.style.position=null,e.style.top=null,e.style.bottom=null,e.style.left=null,e.style.right=null}function i(){var e=t.getElementById("global-nav"),n=e?e.getBoundingClientRect().bottom:0;return n<0&&(n=0),n+40}function o(){var o="top";1==t.body.classList.contains("sidebar-fix-priority-top")?o="top":1==t.body.classList.contains("sidebar-fix-priority-bottom")&&(o="bottom");var s=t.body.offsetWidth,a=t.documentElement.clientHeight;if(s<992)n();else{var l=t.getElementsByClassName("main-section")[0],c=t.getElementsByClassName("sub-section")[0],r=c.parentNode,d=l.getBoundingClientRect().top+e.pageYOffset,u=l.offsetHeight,f=c.offsetHeight,m=d+f;c.style.position=null,c.style.left=null;var v=c.getBoundingClientRect().left+e.pageXOffset,p=a-i();"bottom"===o&&p>f&&(o="top");var g=d+u-a,b=u-f,y=m-a,h=d-i();if(f>u)return;var L=!1;h<e.pageYOffset&&(L=!0);var E=!1;i()+f>l.getBoundingClientRect().bottom&&(E=!0);var x=!1;y<e.pageYOffset&&(x=!0);var k=!1;g<e.pageYOffset&&(k=!0),"top"===o?L?(c.style.position="fixed",c.style.top=i()+"px",c.style.left=v+"px",E&&(c.style.position=null,c.style.left=null,c.style.top=b+"px")):n():x?(c.style.position="fixed",c.style.bottom="5px",c.style.left=v+"px",k?(c.style.left=null,r.style.position="relative",c.style.position="absolute",c.style.top=null,c.style.bottom=0,1!=c.classList.contains("sub-section--pos--left")&&(c.style.right="15px")):1!=c.classList.contains("sub-section--pos--left")&&(c.style.right=null)):n()}}e.addEventListener("scroll",(function(){t.body.classList.contains("sidebar-fix")&&(t.getElementsByClassName("sub-section").length<1||o())})),e.addEventListener("resize",(function(){t.body.classList.contains("sidebar-fix")&&(t.getElementsByClassName("sub-section").length<1||o())}))}(window,document),(()=>{!function(e,t){function n(e,n){Array.prototype.forEach.call(t.querySelectorAll(e),n)}function i(e,t){n(e,(function(e){return e.classList.remove(t)}))}function o(e,t){n(e,(function(e){return e.classList.add(t)}))}!function(e,t,i){function s(e){t.getElementById("vk-mobile-nav-menu-btn").classList.remove("menu-open"),t.getElementById("vk-mobile-nav").classList.remove("vk-mobile-nav-open")}function a(e){var i=t.getElementById("vk-mobile-nav-menu-btn");i.addEventListener("click",(function(){i.classList.contains("menu-open")?s():(o(e,"menu-open"),t.getElementById("vk-mobile-nav").classList.add("vk-mobile-nav-open"))})),n(".vk-mobile-nav li > a",(function(e){e.addEventListener("click",(function(e){e.target.getAttribute("href").indexOf(!1)&&s()}))}))}"loading"===t.readyState?t.addEventListener("DOMContentLoaded",(function(){a(i)})):a(i)}(0,t,".vk-mobile-nav-menu-btn"),function(s){function a(){e.innerWidth<=5e3?(l(),o("ul.vk-menu-acc","vk-menu-acc-active"),n("ul.vk-menu-acc ul.sub-menu",(function(e){var n=t.createElement("span");n.classList.add("acc-btn","acc-btn-open"),n.addEventListener("click",c),e.parentNode.insertBefore(n,e),e.classList.add("acc-child-close")}))):l()}function l(){i("ul.vk-menu-acc","vk-menu-acc-active"),i("ul.vk-menu-acc li","acc-parent-open"),n("ul.vk-menu-acc li .acc-btn",(function(e){return e.remove()})),i("ul.vk-menu-acc li .acc-child-close","acc-child-close"),i("ul.vk-menu-acc li .acc-child-open","acc-child-open")}function c(e){var t=e.target,n=t.parentNode,i=t.nextSibling;t.classList.contains("acc-btn-open")?(n.classList.add("acc-parent-open"),t.classList.remove("acc-btn-open"),t.classList.add("acc-btn-close"),i.classList.remove("acc-child-close"),i.classList.add("acc-child-open")):(n.classList.remove("acc-parent-open"),t.classList.remove("acc-btn-close"),t.classList.add("acc-btn-open"),i.classList.remove("acc-child-open"),i.classList.add("acc-child-close"))}!function(){var n=!1,i=t.body.offsetWidth,o=function(){var e=t.body.offsetWidth;(e<i-8||i+8<e)&&(a(),i=e)};e.addEventListener("resize",(function(){!1!==n&&clearTimeout(n),n=setTimeout(o,500)}))}(),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",a):a()}()}(window,document);var e=n(805);!function(t){var n=function(){var n=e.isMobile({tablet:!0});["device-mobile","device-pc"].forEach((function(e){return t.body.classList.remove(e)})),t.body.classList.add(n?"device-mobile":"device-pc")};"loading"===t.readyState?t.addEventListener("DOMContentLoaded",n):n()}(document)})()})();