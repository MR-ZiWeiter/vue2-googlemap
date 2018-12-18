!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vueGooglemap",[],t):"object"==typeof exports?exports.vueGooglemap=t():e.vueGooglemap=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=10)}([function(e,t){e.exports=function(e,t,i,n,o,s){var r,a=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(r=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId=o);var u;if(s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var d=c.functional,p=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(e,t){return u.call(t),p(e,t)}):c.beforeCreate=p?[].concat(p,u):[u]}return{esModule:r,exports:a,options:c}}},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),s={key:null,v:"3",language:null,callback:"googleMapInit"},r=function(){function e(t){n(this,e),this.config=Object.assign({},s,t),this._window=window,this._document=document,this._scriptLoaded=!1}return o(e,[{key:"load",value:function(){var e=this;if(this._window.google)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var t=this._document.createElement("script");return t.type="text/javascript",t.async=!0,t.defer=!0,t.src=this.getSrc(),this._scriptLoadingPromise=new Promise(function(i,n){e._window.googleMapInit=function(){return i()},t.onerror=function(e){return n(e)}}),this._document.head.appendChild(t),this._scriptLoadingPromise}},{key:"getSrc",value:function(){var e=this,t=["key","v","language","callback"];return"https://maps.googleapis.com/maps/api/js?"+Object.keys(this.config).filter(function(e){return-1!==t.indexOf(e)}).filter(function(t){return null!==e.config[t]}).map(function(t){return{key:t,value:e.config[t]}}).map(function(e){return e.key+"="+e.value}).join("&")}}]),e}(),a=null;t.initGooglemap=function(e){a||(t.instance=a=new r(e),a.load())};t.instance=a},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);!function(e){e&&e.__esModule}(o);t.default={name:"vue-googlemap",data:function(){return{}},props:{backgroundColor:String,center:{type:[Array,Object],required:!0},clickableIcons:{type:Boolean,default:!0},disableDefaultUI:{type:Boolean,default:!1},disableDoubleClickZoom:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},zoom:{type:Number,default:13},maxZoom:Number,minZoom:Number,controls:{type:Array,default:function(){return["zoom","mapType","scale","streetView","rotate","fullscreen"]}},events:Object,mapOptions:Object},watch:{center:{handler:function(e,t){if(e!==t){if(void 0===this.$map)return;console.log("112345"),this.$map.setCenter(Array.isArray(nv)?{lat:nv[0],lng:nv[1]}:nv),this.$map.panTo(Array.isArray(nv)?{lat:nv[0],lng:nv[1]}:nv)}},deep:!0,immediate:!0}},mounted:function(){this.createMap()},destroyed:function(){google.maps.event.clearInstanceListeners(this.$map)},methods:{createMap:function(){var e=this,t={};for(var i in this.$props)if(void 0!==this.$props[i])if("center"===i){var s=Array.isArray(this.$props[i])?{lat:this.$props[i][0],lng:this.$props[i][1]}:this.$props[i];Object.assign(t,{center:s})}else if("controls"!==i||this.$props.disableDefaultUI)Object.assign(t,n({},""+i,this.$props[i]));else{var r=["zoom","mapType","scale","streetView","rotate","fullscreen"];r.forEach(function(i){-1!==e.$props.controls.indexOf(i)?Object.assign(t,n({},i+"Control",!0)):Object.assign(t,n({},i+"Control",!1))})}o.instance.load().then(function(){e.$map=new google.maps.Map(e.$el.querySelector(".vue-googlemap"),t),0!==e.$children.length&&e.$children.forEach(function(t){t.$emit("mapReady",e.$map)}),e.registerEvents(),e.$watch("zoom",function(t){e.$map.setZoom(t)}),e.$watch("center",function(t){e.$map.setCenter(Array.isArray(t)?{lat:t[0],lng:t[1]}:t),e.$map.panTo(Array.isArray(t)?{lat:t[0],lng:t[1]}:t)}),e.$emit("initMap",e.$map)})},setCenter:function(e){this.$map.setCenter(e),this.$map.panTo(e)},getZoom:function(){return this.$map.getZoom()},getCenter:function(){return this.$map.getCenter()},registerEvents:function(){var e=this,t=this.events,i=this;if(t){for(var n in t)!function(n){n&&e.$map.addListener(n,function(e){t[n](i,i.mapOptions,e)})}(n)}}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var o=["load","click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"];t.default={name:"vue-googlemap-marker",data:function(){return{}},props:{position:{type:[Array,Object],required:!0},clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},icon:[String,Object],label:String,title:String,opacity:{type:Number,default:1},visible:{type:Boolean,default:!0},zIndex:Number,events:Object,markerList:[Array,Object],markerInfo:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createMarker():this.$on("mapReady",function(t){e.$map=t,e.createMarker()})},watch:{markerList:{handler:function(e,t){this.reset()}}},destroyed:function(){this.$marker.setMap(null),google.maps.event.clearInstanceListeners(this.$marker)},methods:{reset:function(){var e=this;this.$marker&&(this.$marker.setMap(null),google.maps.event.clearInstanceListeners(this.$marker),this.$map=this.$map||this.$parent.$map,this.$map?this.createMarker():this.$on("mapReady",function(t){e.$map=t,e.createMarker()}))},createMarker:function(){var e=this,t={};for(var i in this.$props)if(void 0!==this.$props[i])if("position"===i){var o=Array.isArray(this.$props.position)?{lat:this.$props.position[0],lng:this.$props.position[1]}:this.$props.position;Object.assign(t,{position:o})}else Object.assign(t,n({},i,this.$props[i]));this.$marker=new google.maps.Marker(t),this.$marker.setMap(this.$map),this.$watch("position",function(t){e.$marker.setPosition(Array.isArray(t)?{lat:t[0],lng:t[1]}:t)}),["clickable","draggable","icon","label","title","opacity","visible","zIndex"].forEach(function(t){e.$watch(t,function(i){e.$marker["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.$emit("markLoad",this.markerInfo,this.$marker),this.registerEvents()},registerEvents:function(){var e=o,t=this;e&&e.map(function(e){e&&t.$marker.addListener(e,function(){t.$emit("mark"+(e.charAt(0).toUpperCase()+e.slice(1)),t.markerInfo,t.$marker)})})}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-googlemap-polyline",data:function(){return{}},props:{path:Array,clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},geodesic:Boolean,strokeColor:String,strokeOpacity:Number,strokeWeight:Number,visible:{type:Boolean,default:!0},zIndex:Number,events:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createPolyline():this.$on("mapReady",function(t){e.$map=t,e.createPolyline()})},destroyed:function(){this.$polyline.setMap(null),google.maps.event.clearInstanceListeners(this.$polyline)},methods:{createPolyline:function(){var e=this,t={};for(var i in this.$props)void 0!==this.$props[i]&&Object.assign(t,n({},i,this.$props[i]));["draggable","editable","visible","path"].forEach(function(t){e.$watch(t,function(i){e.$polyline["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.$polyline=new google.maps.Polyline(t),this.$polyline.setMap(this.$map),this.registerEvents()},registerEvents:function(){var e=this,t=this.$polyline.getPath();t.addListener("insert_at",function(i){e.$emit("change",t)}),t.addListener("remove_at",function(i){e.$emit("change",t)}),t.addListener("set_at",function(i){e.$emit("change",t)});var i=this.events;if(i)for(var n in i)n&&this.$polyline.addListener(n,i[n])}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-googlemap-polygon",data:function(){return{}},props:{paths:Array,clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},fillColor:String,fillOpacity:{type:Number,default:1},geodesic:Boolean,strokeColor:String,strokeOpacity:Number,strokeWeight:Number,visible:{type:Boolean,default:!0},zIndex:Number,events:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createPolygon():this.$on("mapReady",function(t){e.$map=t,e.createPolygon()})},destroyed:function(){this.$polygon.setMap(null),google.maps.event.clearInstanceListeners(this.$polygon)},methods:{createPolygon:function(){var e=this,t={};for(var i in this.$props)void 0!==this.$props[i]&&Object.assign(t,n({},i,this.$props[i]));["draggable","editable","visible","paths"].forEach(function(t){e.$watch(t,function(i){e.$polygon["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.$polygon=new google.maps.Polygon(t),this.$polygon.setMap(this.$map),this.registerEvents()},registerEvents:function(){var e=this,t=this.$polygon.getPaths();t.forEach(function(i){i.addListener("insert_at",function(i){e.$emit("change",t)}),i.addListener("remove_at",function(i){e.$emit("change",t)}),i.addListener("set_at",function(i){e.$emit("change",t)})});var i=this.events;if(i)for(var n in i)n&&this.$polygon.addListener(n,i[n])}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-googlemap-circle",data:function(){return{}},props:{center:{type:[Array,Object],required:!0},clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},fillColor:String,fillOpacity:Number,radius:Number,strokeColor:String,strokeOpacity:Number,strokeWeight:Number,visible:{type:Boolean,default:!0},zIndex:Number,events:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createCircle():this.$on("mapReady",function(t){e.$map=t,e.createCircle()})},destroyed:function(){this.$circle.setMap(null),google.maps.event.clearInstanceListeners(this.$circle)},methods:{createCircle:function(){var e=this,t={};for(var i in this.$props)if(void 0!==this.$props[i])if("center"===i){var o=Array.isArray(this.$props.center)?{lat:this.$props.center[0],lng:this.$props.center[1]}:this.$props.center;Object.assign(t,{center:o})}else Object.assign(t,n({},i,this.$props[i]));this.$circle=new google.maps.Circle(t),this.$circle.setMap(this.$map),this.$watch("center",function(t){e.$circle.setCenter(Array.isArray(t)?{lat:t[0],lng:t[1]}:t)}),["draggable","editable","visible"].forEach(function(t){e.$watch(t,function(i){e.$circle["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.registerEvents()},registerEvents:function(){var e=this;this.$circle.addListener("center_changed",function(t){e.$emit("change",{center:e.$circle.getCenter(),radius:e.$circle.getRadius()})}),this.$circle.addListener("radius_changed",function(t){e.$emit("change",{center:e.$circle.getCenter(),radius:e.$circle.getRadius()})});var t=this.events;if(t)for(var i in t)i&&this.$circle.addListener(i,t[i])}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-googlemap-rectangle",data:function(){return{}},props:{bounds:Array,clickable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},fillColor:String,fillOpacity:{type:Number,default:1},strokeColor:String,strokeOpacity:Number,strokeWeight:Number,visible:{type:Boolean,default:!0},zIndex:Number,events:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createRectangle():this.$on("mapReady",function(t){e.$map=t,e.createRectangle()})},destroyed:function(){this.$rectangle.setMap(null),google.maps.event.clearInstanceListeners(this.$rectangle)},methods:{createRectangle:function(){var e=this,t={};for(var i in this.$props)if(void 0!==this.$props[i])if("bounds"===i){var o=this.$props[i].slice(0,4),s={north:o[0],south:o[1],east:o[2],west:o[3]};Object.assign(t,n({},i,s))}else Object.assign(t,n({},i,this.$props[i]));this.$watch("bounds",function(t){var i=e.$props[key].slice(0,4),n={north:i[0],south:i[1],east:i[2],west:i[3]};e.$rectangle.setBounds(n)}),["draggable","editable","visible"].forEach(function(t){e.$watch(t,function(i){e.$rectangle["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.$rectangle=new google.maps.Rectangle(t),this.$rectangle.setMap(this.$map),this.registerEvents()},registerEvents:function(){var e=this;this.$rectangle.addListener("bounds_changed",function(t){e.$emit("change",e.$rectangle.getBounds())});var t=this.events;if(t)for(var i in t)i&&this.$rectangle.addListener(i,t[i])}}}},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-googlemap-infoWindow",data:function(){return{}},props:{content:String,disableAutoPan:{type:Boolean,default:!0},maxWidth:Number,pixelOffset:Array,position:[Array,Object],zIndex:Number,events:Object,windowInfo:Object},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createInfoWindow():this.$on("mapReady",function(t){e.$map=t,e.createInfoWindow()})},destroyed:function(){this.$window.close(),google.maps.event.clearInstanceListeners(this.$window)},methods:{createInfoWindow:function(){var e=this,t={};for(var i in this.$props)if(void 0!==this.$props[i])if("pixelOffset"===i)Object.assign(t,n({},i,new google.maps.Size(this.$props[i][0],this.$props[i][1])));else if("position"===i){var o=Array.isArray(this.$props.position)?{lat:this.$props.position[0],lng:this.$props.position[1]}:this.$props.position;Object.assign(t,{position:o})}else Object.assign(t,n({},i,this.$props[i]));this.$watch("position",function(t){e.$window.setPosition(Array.isArray(t)?{lat:t[0],lng:t[1]}:t)}),["content","zIndex"].forEach(function(t){e.$watch(t,function(i){e.$window["set"+(t.charAt(0).toUpperCase()+t.slice(1))](i)})}),this.$window=new google.maps.InfoWindow(t),this.registerEvents()},registerEvents:function(){var e=this;this.$window.addListener("content_changed",function(t){e.$emit("change",{content:e.$window.getContent(),position:e.$window.getPosition(),zindx:e.$window.getZIndex()})}),this.$window.addListener("position_changed",function(t){e.$emit("change",{content:e.$window.getContent(),position:e.$window.getPosition(),zindx:e.$window.getZIndex()})}),this.$window.addListener("zindex_changed",function(t){e.$emit("change",{content:e.$window.getContent(),position:e.$window.getPosition(),zindx:e.$window.getZIndex()})});var t=this.events,i=this;if(t){for(var n in t)!function(n){n&&e.$window.addListener(n,function(){t[n],"closeclick"===n&&i.$emit("closeClick",i.windowInfo)})}(n)}},open:function(e){e?this.$window.open(this.$map,e):this.$window.open(this.$map)},close:function(){this.$window.close()}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"];t.default={name:"vue-googlemap-overlayView",data:function(){return{$infoBox:null,InfoBox:null}},props:{content:{default:null,type:String},disableAutoPan:{default:!1,type:Boolean},maxWidth:{default:0,type:Number},pixelOffset:{default:null,type:String},zIndex:{default:null,type:Number},boxStyle:{default:null,type:Object},closeBoxMargin:{default:"10px 2px 2px 2px",type:String},closeBoxStyle:{default:null,type:String},closeBoxURL:{default:"http://www.google.com/intl/en_us/mapfiles/close.gif",type:String},infoBoxClearance:{default:null,type:String},isHidden:{default:!1,type:Boolean},pane:{default:"floatPane",type:String},enableEventPropagation:{default:!1,type:Boolean}},mounted:function(){var e=this;this.$map=this.$map||this.$parent.$map,this.$map?this.createInfoBox():this.$on("mapReady",function(t){e.$map=t,e.createInfoBox()})},watch:{content:{handler:function(e,t){null!==e&&""!==e&&(console.log(e),this.$infoBox.setContent(e))},deep:!0}},destroyed:function(){this.$infoBox.setMap(null),google.maps.event.clearInstanceListeners(this.$infoBox)},methods:{createInfoBox:function(){/*!
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *       http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
this.InfoBox=function(e){e=e||{},google.maps.OverlayView.apply(this,arguments),this.content_=e.content||"",this.disableAutoPan_=e.disableAutoPan||!1,this.maxWidth_=e.maxWidth||0,this.pixelOffset_=e.pixelOffset||new google.maps.Size(0,0),this.position_=e.position||new google.maps.LatLng(0,0),this.zIndex_=e.zIndex||null,this.boxClass_=e.boxClass||"infoBox",this.boxStyle_=e.boxStyle||{},this.closeBoxMargin_=e.closeBoxMargin||"2px",this.closeBoxStyle_=e.closeBoxStyle||"",this.closeBoxURL_=e.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",""===e.closeBoxURL&&(this.closeBoxURL_=""),this.infoBoxClearance_=e.infoBoxClearance||new google.maps.Size(1,1),void 0===e.visible&&(void 0===e.isHidden?e.visible=!0:e.visible=!e.isHidden),this.isHidden_=!e.visible,this.alignBottom_=e.alignBottom||!1,this.pane_=e.pane||"floatPane",this.enableEventPropagation_=e.enableEventPropagation||!1,this.div_=null,this.closeListener_=null,this.moveListener_=null,this.contextListener_=null,this.eventListeners_=null,this.fixedWidthSet_=null},this.InfoBox.prototype=new google.maps.OverlayView,this.InfoBox.prototype.createInfoBoxDiv_=function(){var e,t,i,n=this,o=function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},s=function(e){e.returnValue=!1,e.preventDefault&&e.preventDefault(),n.enableEventPropagation_||o(e)};if(!this.div_){if(this.div_=document.createElement("div"),this.setBoxStyle_(),void 0===this.content_.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+this.content_:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(this.content_)),this.getPanes()[this.pane_].appendChild(this.div_),this.addClickHandler_(),this.div_.style.width?this.fixedWidthSet_=!0:0!==this.maxWidth_&&this.div_.offsetWidth>this.maxWidth_?(this.div_.style.width=this.maxWidth_,this.div_.style.overflow="auto",this.fixedWidthSet_=!0):(i=this.getBoxWidths_(),this.div_.style.width=this.div_.offsetWidth-i.left-i.right+"px",this.fixedWidthSet_=!1),this.panBox_(this.disableAutoPan_),!this.enableEventPropagation_){for(this.eventListeners_=[],t=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],e=0;e<t.length;e++)this.eventListeners_.push(google.maps.event.addDomListener(this.div_,t[e],o));this.eventListeners_.push(google.maps.event.addDomListener(this.div_,"mouseover",function(e){this.style.cursor="default"}))}this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",s),google.maps.event.trigger(this,"domready")}},this.InfoBox.prototype.getCloseBoxImg_=function(){var e="";return""!==this.closeBoxURL_&&(e="<img",e+=" src='"+this.closeBoxURL_+"'",e+=" align=right",e+=" style='",e+=" position: relative;",e+=" cursor: pointer;",e+=" margin: "+this.closeBoxMargin_+";",e+=this.closeBoxStyle_,e+="'>"),e},this.InfoBox.prototype.addClickHandler_=function(){var e;""!==this.closeBoxURL_?(e=this.div_.firstChild,this.closeListener_=google.maps.event.addDomListener(e,"click",this.getCloseClickHandler_())):this.closeListener_=null},this.InfoBox.prototype.getCloseClickHandler_=function(){var e=this;return function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(e,"closeclick"),e.close()}},this.InfoBox.prototype.panBox_=function(e){var t,i=0,n=0;if(!e&&(t=this.getMap())instanceof google.maps.Map){t.getBounds().contains(this.position_)||t.setCenter(this.position_),t.getBounds();var o=t.getDiv(),s=o.offsetWidth,r=o.offsetHeight,a=this.pixelOffset_.width,l=this.pixelOffset_.height,c=this.div_.offsetWidth,u=this.div_.offsetHeight,d=this.infoBoxClearance_.width,p=this.infoBoxClearance_.height,h=this.getProjection().fromLatLngToContainerPixel(this.position_);if(h.x<-a+d?i=h.x+a-d:h.x+c+a+d>s&&(i=h.x+c+a+d-s),this.alignBottom_?h.y<-l+p+u?n=h.y+l-p-u:h.y+l+p>r&&(n=h.y+l+p-r):h.y<-l+p?n=h.y+l-p:h.y+u+l+p>r&&(n=h.y+u+l+p-r),0!==i||0!==n){t.getCenter();t.panBy(i,n)}}},this.InfoBox.prototype.setBoxStyle_=function(){var e,t;if(this.div_){this.div_.className=this.boxClass_,this.div_.style.cssText="",t=this.boxStyle_;for(e in t)t.hasOwnProperty(e)&&(this.div_.style[e]=t[e]);this.div_.style.WebkitTransform="translateZ(0)",void 0!==this.div_.style.opacity&&""!==this.div_.style.opacity&&(this.div_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*this.div_.style.opacity+')"',this.div_.style.filter="alpha(opacity="+100*this.div_.style.opacity+")"),this.div_.style.position="absolute",this.div_.style.visibility="hidden",null!==this.zIndex_&&(this.div_.style.zIndex=this.zIndex_)}},this.InfoBox.prototype.getBoxWidths_=function(){var e,t={top:0,bottom:0,left:0,right:0},i=this.div_;return document.defaultView&&document.defaultView.getComputedStyle?(e=i.ownerDocument.defaultView.getComputedStyle(i,""))&&(t.top=parseInt(e.borderTopWidth,10)||0,t.bottom=parseInt(e.borderBottomWidth,10)||0,t.left=parseInt(e.borderLeftWidth,10)||0,t.right=parseInt(e.borderRightWidth,10)||0):document.documentElement.currentStyle&&i.currentStyle&&(t.top=parseInt(i.currentStyle.borderTopWidth,10)||0,t.bottom=parseInt(i.currentStyle.borderBottomWidth,10)||0,t.left=parseInt(i.currentStyle.borderLeftWidth,10)||0,t.right=parseInt(i.currentStyle.borderRightWidth,10)||0),t},this.InfoBox.prototype.onRemove=function(){this.div_&&(this.div_.parentNode.removeChild(this.div_),this.div_=null)},this.InfoBox.prototype.draw=function(){this.createInfoBoxDiv_();var e=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=e.x+this.pixelOffset_.width+"px",this.alignBottom_?this.div_.style.bottom=-(e.y+this.pixelOffset_.height)+"px":this.div_.style.top=e.y+this.pixelOffset_.height+"px",this.isHidden_?this.div_.style.visibility="hidden":this.div_.style.visibility="visible"},this.InfoBox.prototype.setOptions=function(e){void 0!==e.boxClass&&(this.boxClass_=e.boxClass,this.setBoxStyle_()),void 0!==e.boxStyle&&(this.boxStyle_=e.boxStyle,this.setBoxStyle_()),void 0!==e.content&&this.setContent(e.content),void 0!==e.disableAutoPan&&(this.disableAutoPan_=e.disableAutoPan),void 0!==e.maxWidth&&(this.maxWidth_=e.maxWidth),void 0!==e.pixelOffset&&(this.pixelOffset_=e.pixelOffset),void 0!==e.alignBottom&&(this.alignBottom_=e.alignBottom),void 0!==e.position&&this.setPosition(e.position),void 0!==e.zIndex&&this.setZIndex(e.zIndex),void 0!==e.closeBoxMargin&&(this.closeBoxMargin_=e.closeBoxMargin),void 0!==e.closeBoxStyle&&(this.closeBoxStyle_=e.closeBoxStyle),void 0!==e.closeBoxURL&&(this.closeBoxURL_=e.closeBoxURL),void 0!==e.infoBoxClearance&&(this.infoBoxClearance_=e.infoBoxClearance),void 0!==e.isHidden&&(this.isHidden_=e.isHidden),void 0!==e.visible&&(this.isHidden_=!e.visible),void 0!==e.enableEventPropagation&&(this.enableEventPropagation_=e.enableEventPropagation),this.div_&&this.draw()},this.InfoBox.prototype.setContent=function(e){this.content_=e,this.div_&&(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.fixedWidthSet_||(this.div_.style.width=""),void 0===e.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+e:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(e)),this.fixedWidthSet_||(this.div_.style.width=this.div_.offsetWidth+"px",void 0===e.nodeType?this.div_.innerHTML=this.getCloseBoxImg_()+e:(this.div_.innerHTML=this.getCloseBoxImg_(),this.div_.appendChild(e))),this.addClickHandler_()),google.maps.event.trigger(this,"content_changed")},this.InfoBox.prototype.setPosition=function(e){this.position_=e,this.div_&&this.draw(),google.maps.event.trigger(this,"position_changed")},this.InfoBox.prototype.setZIndex=function(e){this.zIndex_=e,this.div_&&(this.div_.style.zIndex=e),google.maps.event.trigger(this,"zindex_changed")},this.InfoBox.prototype.setVisible=function(e){this.isHidden_=!e,this.div_&&(this.div_.style.visibility=this.isHidden_?"hidden":"visible")},this.InfoBox.prototype.getContent=function(){return this.content_},this.InfoBox.prototype.getPosition=function(){return this.position_},this.InfoBox.prototype.getZIndex=function(){return this.zIndex_},this.InfoBox.prototype.getVisible=function(){return void 0!==this.getMap()&&null!==this.getMap()&&!this.isHidden_},this.InfoBox.prototype.show=function(){this.isHidden_=!1,this.div_&&(this.div_.style.visibility="visible")},this.InfoBox.prototype.hide=function(){this.isHidden_=!0,this.div_&&(this.div_.style.visibility="hidden")},this.InfoBox.prototype.open=function(e,t){var i=this;t&&(this.position_=t.position,this.moveListener_=google.maps.event.addListener(t,"position_changed",function(){i.setPosition(i.getPosition())})),this.setMap(e),this.div_&&this.panBox_()},this.InfoBox.prototype.close=function(){var e;if(this.closeListener_&&(google.maps.event.removeListener(this.closeListener_),this.closeListener_=null),this.eventListeners_){for(e=0;e<this.eventListeners_.length;e++)google.maps.event.removeListener(this.eventListeners_[e]);this.eventListeners_=null}this.moveListener_&&(google.maps.event.removeListener(this.moveListener_),this.moveListener_=null),this.contextListener_&&(google.maps.event.removeListener(this.contextListener_),this.contextListener_=null),this.setMap(null)};var e={content:this.content,disableAutoPan:!1,maxWidth:250,pixelOffset:new google.maps.Size(-140,0),zIndex:null,boxStyle:{background:"url('tipbox.gif') no-repeat",opacity:.75,width:"280px"},closeBoxMargin:"10px 2px 2px 2px",closeBoxStyle:"",closeBoxURL:"http://www.google.com/intl/en_us/mapfiles/close.gif",infoBoxClearance:new google.maps.Size(1,1),isHidden:!1,pane:"floatPane",enableEventPropagation:!1};this.$infoBox=new this.InfoBox(Object.assign({},e,this.$props)),this.$emit("infoBox",this.$infoBox),this.registerEvents()},registerEvents:function(){var e=n,t=this;e&&e.map(function(e){e&&t.$infoBox.addListener(e,function(){})})}}}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),s=i(11),r=n(s),a=i(18),l=n(a),c=i(20),u=n(c),d=i(22),p=n(d),h=i(24),f=n(h),g=i(26),v=n(g),m=i(28),y=n(m),_=i(30),b=n(_),$=[r.default,l.default,u.default,p.default,f.default,v.default,y.default,b.default],x={initGooglemap:o.initGooglemap,components:$,installed:!1,install:function(e){x.installed||($.forEach(function(t){e.component(t.name,t)}),x.installed=!0)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(x),t.default=x},function(e,t,i){"use strict";function n(e){i(12)}Object.defineProperty(t,"__esModule",{value:!0});var o=i(2),s=i.n(o);for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);var a=i(17),l=i(0),c=n,u=l(s.a,a.a,!1,c,null,null);t.default=u.exports},function(e,t,i){var n=i(13);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(15)("2eb27026",n,!0,{})},function(e,t,i){t=e.exports=i(14)(!1),t.push([e.i,".vue-googlemap,.vue-googlemap-container{height:100%}",""])},function(e,t){function i(e,t){var i=e[1]||"",o=e[3];if(!o)return i;if(t&&"function"==typeof btoa){var s=n(o);return[i].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=u[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(s(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var r=[],o=0;o<i.parts.length;o++)r.push(s(i.parts[o]));u[i.id]={id:i.id,refs:1,parts:r}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function s(e){var t,i,n=document.querySelector("style["+m+'~="'+e.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(y){var s=h++;n=p||(p=o()),t=r.bind(null,n,s,!1),i=r.bind(null,n,s,!0)}else n=o(),t=a.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function r(e,t,i,n){var o=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function a(e,t){var i=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(m,t.id),o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(16),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,f=!1,g=function(){},v=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i,o){f=i,v=o||{};var s=c(e,t);return n(s),function(t){for(var i=[],o=0;o<s.length;o++){var r=s[o],a=u[r.id];a.refs--,i.push(a)}t?(s=c(e,t),n(s)):s=[];for(var o=0;o<i.length;o++){var a=i[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete u[a.id]}}}};var _=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var i=[],n={},o=0;o<t.length;o++){var s=t[o],r=s[0],a=s[1],l=s[2],c=s[3],u={id:e+":"+o,css:a,media:l,sourceMap:c};n[r]?n[r].parts.push(u):i.push(n[r]={id:r,parts:[u]})}return i}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vue-googlemap-container"},[i("div",{staticClass:"vue-googlemap"}),e._v(" "),e._t("default")],2)},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(19),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(21),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(5),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(23),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(6),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(25),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(7),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(27),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(8),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(29),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9),o=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);var r=i(31),a=i(0),l=a(o.a,r.a,!1,null,null,null);t.default=l.exports},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],s={render:n,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=vue2-googlemap.js.map