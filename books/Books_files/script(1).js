window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme23"]=window.wsb["Theme23"]||window.radpack("@widget/LAYOUT/bs-layout23-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-233282\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-233285\",\"targetId\":\"logo-text-233286\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"yellowtail\",\"default\",\"\"],\"colors\":[\"#5F0B35\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"6d6ddcac-3526-4f38-a756-75496ad7115b\":{\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"widgetId\":null,\"routePath\":\"/books\"},\"1ac6d785-9648-4931-8c37-906a2fa1ee3d\":{\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"widgetId\":null,\"routePath\":\"/books\"},\"4e3baed4-80ea-48c0-ae18-72358d2cb0f7\":{\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"widgetId\":null,\"routePath\":\"/books\"},\"3157f317-8ab6-4e20-881c-0a3a45c0b6b1\":{\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"widgetId\":null,\"routePath\":\"/books\"},\"da41e883-fa3e-4628-8604-0c37d45a9126\":{\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"widgetId\":null,\"routePath\":\"/books\"}},\"isInternalPage\":true,\"navigationMap\":{\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"18d3c2bb-2ce7-4a45-94b4-e36ffc28e1bc\",\"name\":\"Books\",\"href\":\"/books\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"592532d3-6857-42dd-aad1-b1172e763dff\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"592532d3-6857-42dd-aad1-b1172e763dff\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"82376dc7-c33c-43d1-add7-d652f3084660\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"82376dc7-c33c-43d1-add7-d652f3084660\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"8f7f22ee-ca8e-4559-adbe-5aba6af15e74\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8f7f22ee-ca8e-4559-adbe-5aba6af15e74\",\"name\":\"Projects\",\"href\":\"/projects\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"aed1149e-5d84-43b2-82a9-1aca9e84861b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"aed1149e-5d84-43b2-82a9-1aca9e84861b\",\"name\":\"Services\",\"href\":\"/services\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"b0df3f7c-7862-4018-9036-2188f41c64ec\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"b0df3f7c-7862-4018-9036-2188f41c64ec\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#5F0B35\",\"meta\":{\"primary\":\"rgb(95, 11, 53)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"yellowtail\",\"description\":\"\",\"tags\":[\"handwriting\",\"casual\"],\"meta\":{\"order\":41,\"primary\":{\"id\":\"yellowtail\",\"name\":\"Yellowtail\",\"url\":\"//fonts.googleapis.com/css?family=Yellowtail&display=swap\",\"family\":\"'Yellowtail', serif, system-ui\",\"size\":19,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"lora\",\"name\":\"Lora\",\"url\":\"//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap\",\"family\":\"Lora, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme23\",\"paintJob\":\"LIGHT\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-233288\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBar-233283\",\"widgetId\":\"5da1753f-c085-45bd-a0c8-125be4e20199\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"5da1753f-c085-45bd-a0c8-125be4e20199\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(w),i&&(g=s.pop(),f(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,f),h(d,0,n,I),h(s,n,s.length,I),h(d,n,s.length,f),f(p)}else s.forEach(f),I(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function w(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function I(e){e.style.display="none",e.classList.remove("visible")}function f(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-233287\",\"containerId\":\"navBar-233283\"}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-233281-navId-mobile\",\"uniqueId\":\"n-233281\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"5da1753f-c085-45bd-a0c8-125be4e20199\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"5da1753f-c085-45bd-a0c8-125be4e20199\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-233306\",\"targetId\":\"logo-text-233307\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
document.getElementById('page-233280').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_headerTreatment":false,"wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"ABOUT","wam_site_homepageFirstWidgetPreset":"about1","wam_site_businessCategory":"professionalengineer","wam_site_theme":"layout23","wam_site_locale":"en-US","wam_site_fontPack":"yellowtail","wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);