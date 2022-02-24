(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1384)}])},1384:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ue}});var t,i=r(5893),o=r(9008),u=r(7948),a=r(7357),s=r(5861),l=r(7294),c=r(2004),d=r(5113),f=r(1409),p=function(e){return{minutes:h(e),seconds:x(e)}},h=function(e){return m(Math.floor(e/60))},x=function(e){return m(Math.floor(e%60))},m=function(e){return"".concat(e).padStart(2,"0")},j=function(e){var n=e.duration,r=e.progress,t=p(n),o=t.minutes,u=t.seconds,a=p(n*r),l=a.minutes,c=a.seconds;return(0,i.jsxs)(s.Z,{variant:"caption",sx:{alignSelf:"flex-end"},gutterBottom:!0,children:[l,":",c," / ",o,":",u]})},g=r(2683);function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var y=(v(t={},g.QZ.Measure,"secondary.main"),v(t,g.QZ.Jump,"error.main"),t),Z=function(e){var n=e.relativePosition,r=e.time,t=e.type;return(0,i.jsxs)(a.Z,{sx:{left:"".concat(100*n,"%"),position:"absolute",height:"100%",top:0},children:[(0,i.jsx)(a.Z,{height:"140%",width:2,sx:{position:"absolute",top:"-20%",backgroundColor:y[t]}}),(0,i.jsxs)(s.Z,{variant:"caption",sx:{position:"absolute",top:"120%",left:"-50%",textAlign:"center"},children:[h(r),":",x(r)]})]})},b=function(e){var n=e.progress,r=e.audioDuration,t=e.markers,o=e.onClick,u=(0,l.useRef)(null),s=function(e){var n=(0,l.useState)({}),r=n[0],t=n[1];return(0,l.useEffect)((function(){if(e.current){var n=new ResizeObserver((0,f.Z)((function(){t(e.current.getBoundingClientRect())}),500));return n.observe(document.body),function(){n.unobserve(document.body)}}}),[e,t]),r}(u),c=(0,l.useCallback)((function(e){var n=s.x,r=s.width;o((e.clientX-n)/r)}),[o,s]);return(0,i.jsxs)(a.Z,{mt:2,pb:3,sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(j,{duration:r,progress:n}),(0,i.jsxs)(a.Z,{sx:{backgroundColor:"divider",height:40,position:"relative",borderRadius:1},onClick:c,ref:u,children:[(0,i.jsx)(a.Z,{sx:{backgroundColor:"primary.main",height:"100%",borderTopLeftRadius:function(e){return e.shape.borderRadius},borderBottomLeftRadius:function(e){return e.shape.borderRadius}},style:{width:"".concat(100*n,"%")}}),t.map((function(e,n){var t=e.time,o=e.type,u=t/r;return(0,i.jsx)(Z,{time:t,type:o,relativePosition:u},n)}))]})]})},k=r(6863),M=r(1057),C=r(517),w=r(5819),D=r(5503),P=r(5441),O=r(657),S=r(1425),A=r(6514),T=r(8951),F=r(7645),I=function(e){var n=e.open,r=e.handleClose;return(0,i.jsx)(O.Z,{open:n,onClose:function(){return r(null)},children:(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,t=e.target;r(null!==(n=+t.measure.value)&&void 0!==n?n:null)},children:[(0,i.jsx)(F.Z,{children:"Add Jump Marker"}),(0,i.jsxs)(A.Z,{children:[(0,i.jsx)(T.Z,{children:"Enter the measure this marker should jump to:"}),(0,i.jsx)(P.Z,{autoFocus:!0,margin:"normal",id:"measure",label:"Measure Number",type:"Number",fullWidth:!0,required:!0})]}),(0,i.jsxs)(S.Z,{children:[(0,i.jsx)(M.Z,{onClick:function(){return r(null)},children:"Cancel"}),(0,i.jsx)(M.Z,{type:"submit",children:"Add Marker"})]})]})})},E=r(8093),R=function(e){var n=e.speed,r=e.playing,t=e.setPlaying,o=e.setSpeed,u=e.addMeasureMarker,a=e.exportAsFile,s=e.jumpToMeasureDialogIsOpen,c=e.openJumpToMeasureDialog,d=e.handleJumpMarkerDialogClose,f=(0,l.useState)(null),p=f[0],h=f[1],x=(0,l.useState)(null),m=x[0],j=x[1],v=function(e){return function(){e&&o(e),h(null)}},y=function(e){return function(){e&&a(e),j(null)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(k.Z,{sx:{ml:3},children:[(0,i.jsx)(M.Z,{onClick:function(){return t(!r)},children:r?"Pause":"Play"}),(0,i.jsx)(M.Z,{onClick:function(e){h(e.currentTarget)},endIcon:(0,i.jsx)(D.Z,{}),children:"Speed"}),(0,i.jsx)(C.Z,{anchorEl:p,open:!!p,onClose:v(null),children:g.NC.map((function(e){return(0,i.jsxs)(w.Z,{sx:{minWidth:100},selected:n===e,onClick:v(e),children:[e.toFixed(1),"x"]},e)}))}),(0,i.jsx)(M.Z,{onClick:function(){return u()},children:"Set Marker"}),(0,i.jsx)(M.Z,{onClick:function(){return c()},children:"Set Jump Marker"}),(0,i.jsx)(M.Z,{onClick:function(e){j(e.currentTarget)},endIcon:(0,i.jsx)(D.Z,{}),children:"Export"}),(0,i.jsx)(C.Z,{anchorEl:m,open:!!m,onClose:y(null),anchorOrigin:{horizontal:"left",vertical:"bottom"},children:E.UQ.map((function(e){return(0,i.jsx)(w.Z,{sx:{minWidth:110},onClick:y(e),children:E.lx[e]},e)}))})]}),(0,i.jsx)(I,{open:s,handleClose:d})]})},J=r(2882),_=r(7906),N=r(3184),z=r(3816),U=r(3252),B=r(295),L=r(7774),Q=function(e){var n=e.markers,r=e.removeMarker,t=(0,L.D)(n);return(0,i.jsx)(a.Z,{mt:3,children:(0,i.jsx)(J.Z,{component:d.Z,variant:"outlined",sx:{maxHeight:"60vh",overflow:"scroll"},children:(0,i.jsxs)(_.Z,{sx:{minWidth:650},stickyHeader:!0,children:[(0,i.jsx)(N.Z,{sx:{width:"100%"},children:(0,i.jsxs)(z.Z,{children:[(0,i.jsx)(U.Z,{children:"Measure"}),(0,i.jsx)(U.Z,{children:"Type"}),(0,i.jsx)(U.Z,{children:"Time"}),(0,i.jsx)(U.Z,{children:"Actions"})]})}),(0,i.jsx)(B.Z,{children:t.reverse().map((function(e){var n=e.time,t=e.measure,o=e.type;return(0,i.jsxs)(z.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},selected:o===g.QZ.Jump,children:[(0,i.jsx)(U.Z,{component:"th",scope:"row",children:t}),(0,i.jsx)(U.Z,{component:"th",scope:"row",children:o}),(0,i.jsxs)(U.Z,{component:"th",scope:"row",children:[h(n),":",x(n)," (",n.toFixed(3),"s)"]}),(0,i.jsx)(U.Z,{component:"th",scope:"row",children:(0,i.jsx)(M.Z,{onClick:function(){return r(n)},children:"Remove"})})]},n)}))})]})})})},W=r(5617),H=function(){return(0,W.I0)()},X=W.v9,q=r(9218),$=function(e){var n=e.file,r=H(),t=X((function(e){return e.player})),o=t.playing,u=t.progress,f=t.duration,p=t.speed,h=t.jumpToMeasureDialogIsOpen,x=t.markers,m=n.url,j=n.name,v=function(e){return r(g.i9.setPlaying(e))},y=function(){return r(g.i9.addMeasureMarker())},Z=function(){return r(g.i9.openJumpToMeasureDialog())},k=(0,l.useRef)(null),M=(0,l.useCallback)((function(e){var n;h||(null===(n=k.current)||void 0===n||n.seekTo(u*f+e,"seconds"))}),[u,f,h]);return function(e){var n=e.jumpToMeasureDialogIsOpen,r=e.togglePlaying,t=e.addMeasureMarker,i=e.openJumpToMeasureDialog,o=e.relativeSeek;(0,q.y1)("k",(function(){n||r()}),[n,r]),(0,q.y1)("space",(function(e){n||(e.preventDefault(),t())}),[n,t]),(0,q.y1)("shift+space",(function(e){e.preventDefault(),i()}),[i]),(0,q.y1)("j",(function(){return o(-10)}),[o]),(0,q.y1)("l",(function(){return o(10)}),[o]),(0,q.y1)("left",(function(){return o(-5)}),[o]),(0,q.y1)("right",(function(){return o(5)}),[o])}({jumpToMeasureDialogIsOpen:h,togglePlaying:function(){return r(g.i9.togglePlaying())},addMeasureMarker:y,openJumpToMeasureDialog:Z,relativeSeek:M}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{sx:{mt:2,p:2},variant:"outlined",children:[(0,i.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,i.jsx)(s.Z,{variant:"h6",children:j}),(0,i.jsx)(R,{playing:o,speed:p,setPlaying:v,setSpeed:function(e){return r(g.i9.setSpeed(e))},addMeasureMarker:y,jumpToMeasureDialogIsOpen:h,openJumpToMeasureDialog:Z,handleJumpMarkerDialogClose:function(e){return r(g.i9.handleJumpMarkerDialogClose(e))},exportAsFile:function(e){return r(g.i9.exportAsFile(e))}})]}),(0,i.jsx)(c.Z,{url:m,playing:o,onPlay:function(){return v(!0)},onPause:function(){return v(!1)},onEnded:function(){return v(!1)},onProgress:function(e){var n,t=e.played;return n=t,r(g.i9.setProgress(n))},onDuration:function(e){return function(e){return r(g.i9.setDuration(e))}(e)},progressInterval:100,width:0,height:0,controls:!0,playbackRate:p,config:{file:{forceAudio:!0}},ref:k}),(0,i.jsx)(b,{progress:u,audioDuration:f,markers:x,onClick:function(e){var n;return null===(n=k.current)||void 0===n?void 0:n.seekTo(e)}})]}),(0,i.jsx)(Q,{removeMarker:function(e){return r(g.i9.removeMarker(e))},markers:x})]})},G=r(4051),K=r.n(G),V=r(5162);function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function ee(e,n,r,t,i,o,u){try{var a=e[o](u),s=a.value}catch(l){return void r(l)}a.done?n(s):Promise.resolve(s).then(t,i)}function ne(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function re(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){ne(e,n,r[n])}))}return e}function te(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);u=!0);}catch(s){a=!0,i=s}finally{try{u||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ie=function(e){var n,r=e.setFile,t=(0,l.useCallback)((function(e){var n=te(e,1)[0];if(n){var t=n.name,i=n.path,o=URL.createObjectURL(n);r({name:t,path:i,url:o})}}),[r]),o=(0,V.uI)({onDrop:t,multiple:!1,accept:"audio/*"}),u=o.getRootProps,c=o.getInputProps,f=o.isDragActive,p=o.isDragAccept,h=(0,l.useCallback)((n=K().mark((function e(){var n;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({name:"Mazurka in A minor, Op. 7 no. 2",path:n="examples/chopin-mazurka-opus-7-2.mp3",url:n});case 3:case"end":return e.stop()}}),e)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function u(e){ee(o,t,i,u,a,"next",e)}function a(e){ee(o,t,i,u,a,"throw",e)}u(void 0)}))}),[r]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,re({},u(),{sx:{minHeight:100,display:"flex",justifyContent:"center",alignItems:"center",color:"text.secondary",cursor:"pointer",p:2,height:function(e){return e.spacing(25)}},variant:"outlined",children:[(0,i.jsx)("input",re({},c())),f&&p?(0,i.jsx)(s.Z,{variant:"body1",children:"Drop the file here ..."}):(0,i.jsx)(s.Z,{variant:"body1",children:"Drag and drop an audio file here, or click to select one"})]})),(0,i.jsx)(a.Z,{mt:2,sx:{display:"flex",justifyContent:"center"},children:(0,i.jsx)(M.Z,{variant:"text",size:"small",color:"secondary",onClick:function(){return h()},children:"Use Example File"})})]})},oe=r(1738),ue=function(){var e=H(),n=X((function(e){return e.app.file}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Audiate"}),(0,i.jsx)("meta",{name:"description",content:"Annotate audio files"}),(0,i.jsx)("base",{href:"/audiate/"})]}),(0,i.jsx)(u.Z,{sx:{pt:10,height:"100vh"},children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(s.Z,{variant:"h3",gutterBottom:!0,children:"Audiate"}),!n.hasFile&&(0,i.jsx)(ie,{setFile:function(n){return e(oe.xZ.setFile(n))}}),n.hasFile&&(0,i.jsx)($,{file:n})]})})]})}}},function(e){e.O(0,[65,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);