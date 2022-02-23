(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5377)}])},5377:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return le}});var t,o=r(5893),i=r(9008),u=r(7948),a=r(7357),s=r(5861),l=r(7294),c=r(2004),d=r(5113),f=r(1409),p=function(e){return{minutes:h(e),seconds:m(e)}},h=function(e){return x(Math.floor(e/60))},m=function(e){return x(Math.floor(e%60))},x=function(e){return"".concat(e).padStart(2,"0")},j=function(e){var n=e.duration,r=e.progress,t=p(n),i=t.minutes,u=t.seconds,a=p(n*r),l=a.minutes,c=a.seconds;return(0,o.jsxs)(s.Z,{variant:"caption",sx:{alignSelf:"flex-end"},gutterBottom:!0,children:[l,":",c," / ",i,":",u]})},v=r(5913);function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var g=(y(t={},v.QZ.Measure,"secondary.main"),y(t,v.QZ.Jump,"error.main"),t),b=function(e){var n=e.relativePosition,r=e.time,t=e.type;return(0,o.jsxs)(a.Z,{sx:{left:"".concat(100*n,"%"),position:"absolute",height:"100%",top:0},children:[(0,o.jsx)(a.Z,{height:"140%",width:2,sx:{position:"absolute",top:"-20%",backgroundColor:g[t]}}),(0,o.jsxs)(s.Z,{variant:"caption",sx:{position:"absolute",top:"120%",left:"-50%",textAlign:"center"},children:[h(r),":",m(r)]})]})},Z=function(e){var n=e.progress,r=e.audioDuration,t=e.markers,i=e.onClick,u=(0,l.useRef)(null),s=function(e){var n=(0,l.useState)({}),r=n[0],t=n[1];return(0,l.useEffect)((function(){if(e.current){var n=new ResizeObserver((0,f.Z)((function(){t(e.current.getBoundingClientRect())}),500));return n.observe(document.body),function(){n.unobserve(document.body)}}}),[e,t]),r}(u),c=(0,l.useCallback)((function(e){var n=s.x,r=s.width;i((e.clientX-n)/r)}),[i,s]);return(0,o.jsxs)(a.Z,{mt:2,pb:3,sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(j,{duration:r,progress:n}),(0,o.jsxs)(a.Z,{sx:{backgroundColor:"divider",height:40,position:"relative",borderRadius:1},onClick:c,ref:u,children:[(0,o.jsx)(a.Z,{sx:{backgroundColor:"primary.main",height:"100%",borderTopLeftRadius:function(e){return e.shape.borderRadius},borderBottomLeftRadius:function(e){return e.shape.borderRadius}},style:{width:"".concat(100*n,"%")}}),t.map((function(e,n){var t=e.time,i=e.type,u=t/r;return(0,o.jsx)(b,{time:t,type:i,relativePosition:u},n)}))]})]})},k=r(6863),M=r(1057),w=r(517),C=r(5819),O=r(5503),P=r(5441),D=r(657),S=r(1425),A=r(6514),T=r(8951),I=r(7645),E=function(e){var n=e.open,r=e.handleClose;return(0,o.jsx)(D.Z,{open:n,onClose:function(){return r(null)},children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,t=e.target;r(null!==(n=+t.measure.value)&&void 0!==n?n:null)},children:[(0,o.jsx)(I.Z,{children:"Add Jump Marker"}),(0,o.jsxs)(A.Z,{children:[(0,o.jsx)(T.Z,{children:"Enter the measure this marker should jump to:"}),(0,o.jsx)(P.Z,{autoFocus:!0,margin:"normal",id:"measure",label:"Measure Number",type:"Number",fullWidth:!0,required:!0})]}),(0,o.jsxs)(S.Z,{children:[(0,o.jsx)(M.Z,{onClick:function(){return r(null)},children:"Cancel"}),(0,o.jsx)(M.Z,{type:"submit",children:"Add Marker"})]})]})})},R=[.5,1,1.5,2],F=function(e){var n=e.speed,r=e.playing,t=e.setPlaying,i=e.setSpeed,u=e.addMeasureMarker,a=e.jumpToMeasureDialogIsOpen,s=e.openJumpToMeasureDialog,c=e.handleJumpMarkerDialogClose,d=(0,l.useState)(null),f=d[0],p=d[1],h=function(e){return function(){e&&i(e),p(null)}};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(k.Z,{sx:{ml:3},children:[(0,o.jsx)(M.Z,{onClick:function(){return t(!r)},children:r?"Pause":"Play"}),(0,o.jsx)(M.Z,{onClick:function(e){p(e.currentTarget)},endIcon:(0,o.jsx)(O.Z,{}),children:"Speed"}),(0,o.jsx)(w.Z,{anchorEl:f,open:!!f,onClose:h(null),anchorOrigin:{horizontal:20,vertical:"bottom"},children:R.map((function(e){return(0,o.jsxs)(C.Z,{selected:n===e,onClick:h(e),children:[e.toFixed(1),"x"]},e)}))}),(0,o.jsx)(M.Z,{onClick:function(){return u()},children:"Set Marker"}),(0,o.jsx)(M.Z,{onClick:function(){return s()},children:"Set Jump Marker"})]}),(0,o.jsx)(E,{open:a,handleClose:c})]})},J=r(2882),_=r(7906),N=r(3184),z=r(3816),U=r(3252),B=r(295);function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function H(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Q(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){H(e,n,r[n])}))}return e}function X(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e){var n=e.markers,r=e.removeMarker,t=function(e){return e.reduce((function(e,n,r){var t,o=r>0?e[r-1]:{measure:0};return X(e).concat([Q({},n,{measure:null!==(t=n.jumpToMeasure)&&void 0!==t?t:o.measure+1})])}),[])}(n);return(0,o.jsx)(a.Z,{mt:3,children:(0,o.jsx)(J.Z,{component:d.Z,variant:"outlined",sx:{maxHeight:"60vh",overflow:"scroll"},children:(0,o.jsxs)(_.Z,{sx:{minWidth:650},stickyHeader:!0,children:[(0,o.jsx)(N.Z,{sx:{width:"100%"},children:(0,o.jsxs)(z.Z,{children:[(0,o.jsx)(U.Z,{children:"Measure"}),(0,o.jsx)(U.Z,{children:"Type"}),(0,o.jsx)(U.Z,{children:"Time"}),(0,o.jsx)(U.Z,{children:"Actions"})]})}),(0,o.jsx)(B.Z,{children:t.reverse().map((function(e){var n=e.time,t=e.measure,i=e.type;return(0,o.jsxs)(z.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},selected:i===v.QZ.Jump,children:[(0,o.jsx)(U.Z,{component:"th",scope:"row",children:t}),(0,o.jsx)(U.Z,{component:"th",scope:"row",children:i}),(0,o.jsxs)(U.Z,{component:"th",scope:"row",children:[h(n),":",m(n)," (",n.toFixed(3),"s)"]}),(0,o.jsx)(U.Z,{component:"th",scope:"row",children:(0,o.jsx)(M.Z,{onClick:function(){return r(n)},children:"Remove"})})]},n)}))})]})})})},$=r(5617),q=function(){return(0,$.I0)()},G=$.v9,K=r(9218),V=function(e){var n=e.file,r=q(),t=G((function(e){return e.player})),i=t.playing,u=t.progress,f=t.duration,p=t.speed,h=t.jumpToMeasureDialogIsOpen,m=t.markers,x=n.url,j=n.name,y=function(e){return r(v.i9.setPlaying(e))},g=function(){return r(v.i9.addMeasureMarker())},b=function(){return r(v.i9.openJumpToMeasureDialog())},k=(0,l.useRef)(null),M=(0,l.useCallback)((function(e){var n;h||(null===(n=k.current)||void 0===n||n.seekTo(u*f+e,"seconds"))}),[u,f,h]);return function(e){var n=e.jumpToMeasureDialogIsOpen,r=e.togglePlaying,t=e.addMeasureMarker,o=e.openJumpToMeasureDialog,i=e.relativeSeek;(0,K.y1)("k",(function(){n||r()}),[n,r]),(0,K.y1)("space",(function(e){n||(e.preventDefault(),t())}),[n,t]),(0,K.y1)("shift+space",(function(e){e.preventDefault(),o()}),[o]),(0,K.y1)("j",(function(){return i(-10)}),[i]),(0,K.y1)("l",(function(){return i(10)}),[i]),(0,K.y1)("left",(function(){return i(-5)}),[i]),(0,K.y1)("right",(function(){return i(5)}),[i])}({jumpToMeasureDialogIsOpen:h,togglePlaying:function(){return r(v.i9.togglePlaying())},addMeasureMarker:g,openJumpToMeasureDialog:b,relativeSeek:M}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.Z,{sx:{mt:2,p:2},variant:"outlined",children:[(0,o.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,o.jsx)(s.Z,{variant:"h6",children:j}),(0,o.jsx)(F,{playing:i,speed:p,setPlaying:y,setSpeed:function(e){return r(v.i9.setSpeed(e))},addMeasureMarker:g,jumpToMeasureDialogIsOpen:h,openJumpToMeasureDialog:b,handleJumpMarkerDialogClose:function(e){return r(v.i9.handleJumpMarkerDialogClose(e))}})]}),(0,o.jsx)(c.Z,{url:x,playing:i,onPlay:function(){return y(!0)},onPause:function(){return y(!1)},onEnded:function(){return y(!1)},onProgress:function(e){var n,t=e.played;return n=t,r(v.i9.setProgress(n))},onDuration:function(e){return function(e){return r(v.i9.setDuration(e))}(e)},progressInterval:100,width:0,height:0,controls:!0,playbackRate:p,config:{file:{forceAudio:!0}},ref:k}),(0,o.jsx)(Z,{progress:u,audioDuration:f,markers:m,onClick:function(e){var n;return null===(n=k.current)||void 0===n?void 0:n.seekTo(e)}})]}),(0,o.jsx)(W,{removeMarker:function(e){return r(v.i9.removeMarker(e))},markers:m})]})},Y=r(4051),ee=r.n(Y),ne=r(5162);function re(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function te(e,n,r,t,o,i,u){try{var a=e[i](u),s=a.value}catch(l){return void r(l)}a.done?n(s):Promise.resolve(s).then(t,o)}function oe(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ie(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){oe(e,n,r[n])}))}return e}function ue(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(s){a=!0,o=s}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return re(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return re(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae=function(e){var n,r=e.setFile,t=(0,l.useCallback)((function(e){var n=ue(e,1)[0];if(n){var t=n.name,o=n.path,i=URL.createObjectURL(n);r({name:t,path:o,url:i})}}),[r]),i=(0,ne.uI)({onDrop:t,multiple:!1,accept:"audio/*"}),u=i.getRootProps,c=i.getInputProps,f=i.isDragActive,p=i.isDragAccept,h=(0,l.useCallback)((n=ee().mark((function e(){var n;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({name:"Mazurka in A minor, Op. 7 no. 2",path:n="examples/chopin-mazurka-opus-7-2.mp3",url:n});case 3:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function u(e){te(i,t,o,u,a,"next",e)}function a(e){te(i,t,o,u,a,"throw",e)}u(void 0)}))}),[r]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d.Z,ie({},u(),{sx:{minHeight:100,display:"flex",justifyContent:"center",alignItems:"center",color:"text.secondary",cursor:"pointer",p:2,height:function(e){return e.spacing(25)}},variant:"outlined",children:[(0,o.jsx)("input",ie({},c())),f&&p?(0,o.jsx)(s.Z,{variant:"body1",children:"Drop the file here ..."}):(0,o.jsx)(s.Z,{variant:"body1",children:"Drag and drop an audio file here, or click to select one"})]})),(0,o.jsx)(a.Z,{mt:2,sx:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(M.Z,{variant:"text",size:"small",color:"secondary",onClick:function(){return h()},children:"Use Example File"})})]})},se=r(1738),le=function(){var e=q(),n=G((function(e){return e.app.file}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.default,{children:[(0,o.jsx)("title",{children:"Audiate"}),(0,o.jsx)("meta",{name:"description",content:"Annotate audio files"}),(0,o.jsx)("base",{href:"/audiate/"})]}),(0,o.jsx)(u.Z,{sx:{pt:10,height:"100vh"},children:(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"Audiate"}),!n.hasFile&&(0,o.jsx)(ae,{setFile:function(n){return e(se.xZ.setFile(n))}}),n.hasFile&&(0,o.jsx)(V,{file:n})]})})]})}}},function(e){e.O(0,[65,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);