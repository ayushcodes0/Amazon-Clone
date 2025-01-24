(function(f){var a=window.AmazonUIPageJS||window.P,p=a._namespace||a.attributeErrors,k=p?p("DetailPagePQVAssets",""):a;k.guardFatal?k.guardFatal(f)(k,window):k.execute(function(){f(k,window)})})(function(f,a,p){function k(d,c){if(!(d instanceof c))throw new TypeError("Cannot call a class as a function");}function A(){B||(B=!0,f.register("pqv-ready"))}var t=function(){function d(c,d){for(var e=0;e<d.length;e++){var a=d[e];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);
Object.defineProperty(c,a.key,a)}}return function(c,a,e){a&&d(c.prototype,a);e&&d(c,e);return c}}(),B=!1;f.when("dp-latency-marker").execute(A);f.when("PQVOverlayMarker").execute(A);f.when("pqv-ready").register("PQVConstants",function(){return{AUI_COMPONENT_TYPE_DESKTOP:"popover",AUI_COMPONENT_TYPE_MOBILE:"sheet",AUI_COMPONENT_MODULE_DESKTOP:"a-modal",AUI_COMPONENT_MODULE_MOBILE:"a-sheet",FEEDBACK_METRIC_NEGATIVE:"PQV:Feedback:Negative",FEEDBACK_METRIC_POSITIVE:"PQV:Feedback:Positive",INGRESS_CLICK_METRIC:"PQV:Ingress:Click",
INGRESS_ERROR_METRIC:"PQV:Ingress:Error",DEVICE_TYPE_DESKTOP:"Desktop",DEVICE_TYPE_MOBILE:"Mobile",PQV_DECLARATIVE_ACTION_ID:"pqv-trigger",PQV_INGRESS_CONTAINER_ID:"pqv-hidden-ingress",PQV_POPOVER_TRIGGER_ID:"pqv-overlay",PQV_TEMPLATE_ID:"pqv-template",PQV_TIMEOUT:2E3,PQV_TRIGGER_CONTAINER:"#dp",QUICK_LINKS:"buybox unqualified-buybox buying-options reviews report-issue twister".split(" "),ELEMENTS_TO_HIDE:"price-omnibus report-issue ratings bought-in-last-month twister newer-version documents price-list-price".split(" "),
SPACE_KEY_CODE:32,AE_CUSTOM_EVENT_SCHEMA_ID:"A11y.AccessibilityEngagementMetrics.2",AE_PRODUCER_ID:"ae-metrics",PQV_A11Y_ENGAGEMENT_SIGNAL:"PQV"}});f.when("A","jQuery","3p-promise","PQVConstants").register("PQV-API",function(d,c,b,e){var l=void 0,u=void 0,m=void 0,h=void 0,q=void 0;c("#"+e.PQV_INGRESS_CONTAINER_ID).removeClass("aok-hidden");return{initialize:function(g){var b=g===e.DEVICE_TYPE_MOBILE;u=b?e.AUI_COMPONENT_TYPE_MOBILE:e.AUI_COMPONENT_TYPE_DESKTOP;b=b?e.AUI_COMPONENT_MODULE_MOBILE:e.AUI_COMPONENT_MODULE_DESKTOP;
g===e.DEVICE_TYPE_MOBILE&&f.when("a-sheet").execute(function(c){d.on("a:sheet:afterShow:pqvOverlay",function(){var g=c.get("pqvOverlay");if(g){var a=d.$("#pqvBottomSheet").height();0<a&&g.changeHeight({height:a})}})});f.when("PQVOverlayMarker","pqv_quickLink","pqv_hideElement","pqv_metrics","ae_metrics_publisher",b).execute(function(b,l,k,n,C,t){var D=b.loadTime,x=void 0,y=void 0,v=[];a.aPageStart&&n.recordMetric("PQV:Modal:"+g+":ReadyTime",b.loadTime-a.aPageStart);l.initialize();k.initialize();b=
document.getElementById(e.PQV_TEMPLATE_ID);if(!b)n.incrementMetric(e.INGRESS_ERROR_METRIC);else if(b.content&&b.content.cloneNode){l=b.content.cloneNode(!0);k=document.querySelector(e.PQV_TRIGGER_CONTAINER);if(!k)throw Error("PQV trigger container was not found on the page");k.insertBefore(l,k.firstChild);b.remove&&b.remove();var z=c("#"+e.PQV_POPOVER_TRIGGER_ID);if(1>z.length)throw Error("PQV trigger was not found on the page");q=t.get(z);f.register("PQVPopoverTrigger",function(){return z});d.on("a:"+
u+":afterShow:pqvOverlay",function(){x=+new Date;n.incrementMetric("PQV:Modal:"+g+":View");n.recordMetric("PQV:Modal:"+g+":LaunchTime",x-D);c("body \x3e div:visible:not([aria-hidden]):not([aria-modal]):not([aria-live]):not(.a-modal-scroller):not(.a-sheet-web-container)").each(function(){0<this.innerText.length&&(this.setAttribute("aria-hidden","true"),v.push(this))});for(var a=c(".pqv-time"),b=0;b<a.length;b++){var d=c(a.get(b)),h=parseInt(d.attr("datetime"));d.text((new Date(h)).toLocaleString())}if((a=
document.querySelector('[data-cel-widget^\x3d"pqv-dpx-widget-"] h1'))&&"pqv-title"!==a.id)throw Error("PQV displayed an error message");});d.on("a:"+u+":afterHide:pqvOverlay",function(){y=+new Date;n.incrementMetric("PQV:Modal:"+g+":Close");n.recordMetric("PQV:Modal:"+g+":DwellTime",y-x);D=y;h?function(){var b=c(h),a=b.attr("tabindex"),g=0<=+a;g||b.attr("tabindex","-1");b[0].focus({focusVisible:g,preventscroll:!0});b[0].scrollIntoView({behavior:"smooth"});g||function(){b.blur(function E(){a!==b.attr("tabindex")&&
("undefined"===typeof a?b.removeAttr("tabindex"):b.attr("tabindex",a));b.unbind("blur",E)})}()}():m&&m.focus();if(q.attrs){var b=!(h||m);q.attrs("restoreFocusOnHide",b);b||function(){var b=a.scrollTo;a.scrollTo=function(){};d.delay(function(){a.scrollTo=b},750)}()}m=h=p;for(b=0;b<v.length;b++)v[b].removeAttribute("aria-hidden");v.splice(0,v.length)});var r=c("#"+e.PQV_DECLARATIVE_ACTION_ID);r.click(function(){n.incrementMetric(e.INGRESS_CLICK_METRIC);C.publishAECustomEvent(g)});r.keydown(function(b){b.keyCode===
e.SPACE_KEY_CODE&&(n.incrementMetric(e.INGRESS_CLICK_METRIC),C.publishAECustomEvent(g))});var w=d.$("#pqv-ingress");w.attr("tabindex",0);r.attr("tabindex",-1);w.focus(function(){w.removeAttr("tabindex");r.removeAttr("tabindex");r[0].focus()});r.blur(function(){w.attr("tabindex",0);r.attr("tabindex",-1)});0<=navigator.userAgent.toUpperCase().indexOf("MAC")&&w.addClass("has-opt-key")}})},checkVisibility:function(b){return"function"===typeof b.checkVisibility?b.checkVisibility({visibilityProperty:!0,
checkVisibilityCSS:!0}):!!(b.offsetParent||b.offsetWidth||b.offsetHeight||b.getClientRects().length)&&"hidden"!==getComputedStyle(b).visibility},get:function(){l||(l=new b(function(b,a){var c=!1,h=d.delay(function(){c=!0;a()},e.PQV_TIMEOUT);f.when("PQVPopoverTrigger").execute(function(a){f.when("a-modal").execute(function(d){c||(clearTimeout(h),b(d.get(a)))})})}));return l},setReturnFocusElement:function(b){m=b},setReturnHash:function(b){h=b}}});f.when("pqv-ready").execute(function(){function d(){var c=
a.innerWidth*a.innerHeight;return!!document.elementsFromPoint(Math.floor(a.innerWidth/2),Math.floor(a.innerHeight/2)).find(function(b){if(["fixed","absolute"].includes(getComputedStyle(b).position))return b=b.clientWidth*b.clientHeight,0<c&&.5<b/c})}document.addEventListener("keydown",function(a){!a.shiftKey||!a.altKey||"KeyD"!==a.code||a.repeat||a.ctrlKey||a.metaKey||(a.preventDefault(),f.when("PQV-API","pqv_metrics","PQVConstants","ae_metrics_publisher").execute(function(b,a,c,u){a.incrementMetric("PQV:Shortcut:Pressed");
u.publishAECustomEvent(c.DEVICE_TYPE_DESKTOP);b.get().then(function(c){if(c.isActive())c.hide(),a.recordMetric("PQV:Shortcut:PressedToClose",1);else{var h;if(!(h=document.activeElement.matches('input[type\x3d"text"], input[type\x3d"search"], input[type\x3d"email"], input[type\x3d"password"], textarea, [contenteditable\x3d"true"], select')||d()))a:{h=document.querySelectorAll("#hmenu-container, .a-popover, .a-dropdown, .a-popover-modal");for(var q=0;q<h.length;q++)if(b.checkVisibility(h[q])){h=!0;
break a}h=!1}h?a.recordMetric("PQV:Shortcut:Blocked",1):(document.activeElement&&b.setReturnFocusElement(document.activeElement),c.show())}}).catch(function(){f.now("PQVOverlayMarker").execute(function(b){document.getElementById(c.PQV_POPOVER_TRIGGER_ID)?b?a.recordMetric("PQV:Shortcut:Failed",1):a.recordMetric("PQV:Shortcut:Failed:PQVOverlayNotFound",1):a.recordMetric("PQV:Shortcut:Failed:PQVIngressNotFound",1)})})}))})});f.when("pqv-ready").register("pqv_metrics",function(){return{recordMetric:function(d,
c){a.ue&&"function"===typeof a.ue.count&&a.ue.count(d,c)},incrementMetric:function(d){var c=1<arguments.length&&arguments[1]!==p?arguments[1]:1;a.ue&&"function"===typeof a.ue.count&&a.ue.count(d,(a.ue.count(d)||0)+c)},recordLatency:function(d){a.uex&&"function"===typeof a.uex&&a.uex("ld",d,{wb:1})}}});f.when("PQV-API","PQVConstants").execute(function(a,c){a.initialize(c.DEVICE_TYPE_DESKTOP)});f.when("pqv","PQV-API","PQVConstants").execute(function(a,c,b){var d=function(){function b(a,c,d,g,e,f){k(this,
b);this.A=a;this.overlay=c;this.deviceType=d;this.pqv=g;this.pqvMetrics=e;this.Constants=f;this.target=null}t(b,[{key:"initialize",value:function(){var b=this;this.Constants.QUICK_LINKS.forEach(function(a){a="pqv-"+a;var d=document.getElementById(a);if(d){var g=document.querySelector(d.dataset.target);g&&""!==g.innerText&&c.checkVisibility(g)?b.A.declarative(a+"-action","click",function(a){b.redirectOnClick(a)}):(b.pqvMetrics.incrementMetric("PQV:QuickLink:"+a+":TargetNotPresent"),d.classList.add("aok-hidden"))}})}},
{key:"redirectOnClick",value:function(b){var a=b.$target.context.getAttribute("data-target"),c=this.overlay.get("pqvOverlay");c&&(b.$event.preventDefault(),this.pqv.setReturnHash(a),c.hide())}}]);return b}(),l="mobile"===a.overlayType?b.DEVICE_TYPE_MOBILE:b.DEVICE_TYPE_DESKTOP;f.when("A","pqv_metrics",l===b.DEVICE_TYPE_MOBILE?b.AUI_COMPONENT_MODULE_MOBILE:b.AUI_COMPONENT_MODULE_DESKTOP).register("pqv_quickLink",function(a,e,h){return new d(a,h,l,c,e,b)})});f.when("pqv","PQV-API","PQVConstants").execute(function(a,
c,b){var d=function(){function b(a,c,d,g,e,f){k(this,b);this.A=a;this.overlay=c;this.deviceType=d;this.pqv=g;this.pqvMetrics=e;this.Constants=f;this.target=null}t(b,[{key:"initialize",value:function(){var b=this;this.Constants.ELEMENTS_TO_HIDE.forEach(function(a){a="pqv-"+a;var d=document.getElementById(a);if(d){var g=document.querySelector(d.dataset.target);if(!g||""===g.innerText||!c.checkVisibility(g)||"pqv-bought-in-last-month"===a&&d.innerText!==g.innerText)b.pqvMetrics.incrementMetric("PQV:HideElement:"+
a+":TargetNotPresent"),d.classList.add("aok-hidden")}})}}]);return b}(),l="mobile"===a.overlayType?b.DEVICE_TYPE_MOBILE:b.DEVICE_TYPE_DESKTOP;f.when("A","pqv_metrics",l===b.DEVICE_TYPE_MOBILE?b.AUI_COMPONENT_MODULE_MOBILE:b.AUI_COMPONENT_MODULE_DESKTOP).register("pqv_hideElement",function(a,e,f){return new d(a,f,l,c,e,b)})});f.when("A","a-button","pqv_metrics","PQVConstants","PQVOverlayMarker").execute(function(a,c,b,e){var d=function(){function a(b,c,d,e){k(this,a);this.$=b;this.metrics=c;this.positiveButton=
d;this.negativeButton=e;this.feedbackMetricRecorded=p}t(a,[{key:"setFeedback",value:function(a){if(!this.feedbackMetricRecorded){var b=a?e.FEEDBACK_METRIC_POSITIVE:e.FEEDBACK_METRIC_NEGATIVE;this.metrics.incrementMetric(b);this.feedbackMetricRecorded=b;this.positiveButton.hide();this.negativeButton.hide();a="pqv-feedback-message-"+(a?"positive":"negative");this.$("#"+a).removeClass("aok-hidden");this.$("#pqv-feedback-reset").removeClass("aok-hidden");this.$("#pqv-feedback-buttons-section")&&this.$("#pqv-feedback-buttons-section").addClass("aok-hidden");
this.$("#pqv-feedback-submit-section")&&this.$("#pqv-feedback-submit-section").removeClass("aok-hidden");this.$("#"+a+" .a-alert-content").focus()}}},{key:"resetFeedback",value:function(){if(this.feedbackMetricRecorded){this.metrics.incrementMetric(this.feedbackMetricRecorded,-1);this.feedbackMetricRecorded=p;this.positiveButton.show();this.negativeButton.show();this.$("#pqv-feedback-reset").addClass("aok-hidden");this.$("#pqv-feedback-message-positive").addClass("aok-hidden");this.$("#pqv-feedback-message-negative").addClass("aok-hidden");
var a=this.$("#pqv-feedback-buttons-section"),b=this.$("#pqv-feedback-submit-section");a&&a.removeClass("aok-hidden");b&&this.$("#pqv-feedback-submit-section").addClass("aok-hidden");this.$("#pqv-feedback-positive-native").focus()}}}]);return a}();a.$("#pqv-feedback .a-alert-content").attr("tabindex",-1);var f=c("#pqv-feedback-positive");c=c("#pqv-feedback-negative");var m=new d(a.$,b,f,c);a.declarative("pqv-feedback-positive-action","click",function(){m.setFeedback(!0)});a.declarative("pqv-feedback-negative-action",
"click",function(){m.setFeedback(!1)});a.declarative("pqv-feedback-reset-action","click",function(){m.resetFeedback()})});f.when("PQVConstants").register("ae_metrics_publisher",function(d){return{publishAECustomEvent:function(c){a.csa&&a.ue&&(a.ue.rid||a.ue.sid)&&a.csa("Events",{producerId:d.AE_PRODUCER_ID})("log",{schemaId:d.AE_CUSTOM_EVENT_SCHEMA_ID,hashedCustomerId:"",requestId:a.ue.rid||"",sessionId:a.ue.sid||"",accessibilityEngagementSignal:[d.PQV_A11Y_ENGAGEMENT_SIGNAL],platform:c})}}})});