(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8591)}])},8591:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return ce}});var t=n(5893),a=n(9008),i=n(7948),u=n(7357),o=n(5861),l=n(7294),c=n(5113),s=n(6863),f=n(1057),d=n(517),p=n(5819),m=n(5503),h=n(5617),y=function(){return(0,h.I0)()},v=h.v9,x=n(5441),k=n(657),b=n(1425),j=n(6514),g=n(8951),C=n(7645),Z=function(e){var r=e.open,n=e.handleClose;return(0,t.jsx)(k.Z,{open:r,onClose:function(){return n(null)},children:(0,t.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r,t=e.target;n(null!==(r=+t.measure.value)&&void 0!==r?r:null)},children:[(0,t.jsx)(C.Z,{children:"Add Jump Marker"}),(0,t.jsxs)(j.Z,{children:[(0,t.jsx)(g.Z,{children:"Enter the measure this marker should jump to:"}),(0,t.jsx)(x.Z,{autoFocus:!0,margin:"normal",id:"measure",label:"Measure Number",type:"Number",fullWidth:!0,required:!0})]}),(0,t.jsxs)(b.Z,{children:[(0,t.jsx)(f.Z,{onClick:function(){return n(null)},children:"Cancel"}),(0,t.jsx)(f.Z,{type:"submit",children:"Add Marker"})]})]})})},w=n(4632),M=n(8093),S=function(e){var r=(0,l.useState)(null),n=r[0],t=r[1];return[n,(0,l.useCallback)((function(e){t(e.currentTarget)}),[t]),(0,l.useCallback)((function(r){r&&e(r),t(null)}),[e,t])]};function R(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function D(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],u=!0,o=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);u=!0);}catch(l){o=!0,a=l}finally{try{u||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return R(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(){var e=y(),r=v((function(e){return e.player})),n=r.playing,a=r.speed,i=r.jumpToMeasureDialogIsOpen,u=(0,l.useCallback)((function(r){return e(w.i9.setPlaying(r))}),[e]),o=(0,l.useCallback)((function(r){return e(w.i9.setSpeed(r))}),[e]),c=(0,l.useCallback)((function(){return e(w.i9.addMeasureMarker())}),[e]),h=(0,l.useCallback)((function(){return e(w.i9.openJumpToMeasureDialog())}),[e]),x=(0,l.useCallback)((function(r){return e(w.i9.handleJumpMarkerDialogClose(r))}),[e]),k=(0,l.useCallback)((function(r){return e(w.i9.exportAsFile(r))}),[e]),b=D(S(o),3),j=b[0],g=b[1],C=b[2],R=D(S(k),3),P=R[0],T=R[1],A=R[2];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.Z,{sx:{ml:3},children:[(0,t.jsx)(f.Z,{onClick:function(){return u(!n)},children:n?"Pause":"Play"}),(0,t.jsx)(f.Z,{onClick:g,endIcon:(0,t.jsx)(m.Z,{}),children:"Speed"}),(0,t.jsx)(d.Z,{anchorEl:j,open:!!j,onClose:function(){return C(null)},children:w.NC.map((function(e){return(0,t.jsxs)(p.Z,{sx:{minWidth:100},selected:a===e,onClick:function(){return C(e)},children:[e.toFixed(1),"x"]},e)}))}),(0,t.jsx)(f.Z,{onClick:function(){return c()},children:"Set Marker"}),(0,t.jsx)(f.Z,{onClick:function(){return h()},children:"Set Jump Marker"}),(0,t.jsx)(f.Z,{onClick:T,endIcon:(0,t.jsx)(m.Z,{}),children:"Export"}),(0,t.jsx)(d.Z,{anchorEl:P,open:!!P,onClose:function(){return A(null)},anchorOrigin:{horizontal:"left",vertical:"bottom"},children:M.UQ.map((function(e){return(0,t.jsx)(p.Z,{sx:{minWidth:110},onClick:function(){return A(e)},children:M.lx[e]},e)}))})]}),(0,t.jsx)(Z,{open:i,handleClose:x})]})},T=l.memo(P),A=n(2882),E=n(7906),O=n(3184),I=n(3816),F=n(3252),_=n(295),J=function(e){return U(Math.floor(e/60))},N=function(e){return U(Math.floor(e%60))},U=function(e){return"".concat(e).padStart(2,"0")},z=function(){var e=y(),r=v(w.D$),n=(0,l.useCallback)((function(r){return e(w.i9.removeMarker(r))}),[e]);return(0,t.jsx)(u.Z,{mt:3,children:(0,t.jsx)(A.Z,{component:c.Z,variant:"outlined",sx:{maxHeight:"60vh",overflow:"scroll"},children:(0,t.jsxs)(E.Z,{sx:{minWidth:650},stickyHeader:!0,children:[(0,t.jsx)(O.Z,{sx:{width:"100%"},children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(F.Z,{children:"Measure"}),(0,t.jsx)(F.Z,{children:"Type"}),(0,t.jsx)(F.Z,{children:"Time"}),(0,t.jsx)(F.Z,{children:"Actions"})]})}),(0,t.jsx)(_.Z,{children:r.map((function(e){var r=e.time,a=e.type,i=e.measure;return(0,t.jsx)(L,{time:r,type:a,measure:i,removeMarker:n},r)}))})]})})})},W=function(e){var r=e.time,n=e.type,a=e.measure,i=e.removeMarker;return(0,t.jsxs)(I.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},selected:n===w.QZ.Jump,children:[(0,t.jsx)(F.Z,{component:"th",scope:"row",children:a}),(0,t.jsx)(F.Z,{component:"th",scope:"row",children:n}),(0,t.jsxs)(F.Z,{component:"th",scope:"row",children:[J(r),":",N(r)," (",r.toFixed(3),"s)"]}),(0,t.jsx)(F.Z,{component:"th",scope:"row",children:(0,t.jsx)(f.Z,{onClick:function(){return i(r)},children:"Remove"})})]},r)},L=l.memo(W),$=l.memo(z),H=n(9218),Q=n(2734),X=n(4051),q=n.n(X);function B(e,r,n,t,a,i,u){try{var o=e[i](u),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}var G=function(e){var r=e.waveSurferRef,t=e.waveContainerRef,a=e.timelineContainerRef,i=e.onDuration,u=e.url,o=e.colors;return(0,l.useEffect)((function(){var e=function(){var e,l=(e=q().mark((function e(){var l,c,s,f,d,p,m;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.current&&a.current){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.e(33).then(n.t.bind(n,9954,23));case 4:return l=e.sent,c=l.default,e.next=8,n.e(684).then(n.t.bind(n,4684,23));case 8:return s=e.sent,f=s.default,e.next=12,n.e(512).then(n.t.bind(n,3512,23));case 12:d=e.sent,p=d.default,(m=c.create({container:t.current,scrollParent:!0,backend:"MediaElement",cursorColor:o.textSecondary,progressColor:o.primaryDark,waveColor:o.primaryLight,plugins:[f.create({markers:[{draggable:!0}]}),p.create({container:a.current,fontFamily:"Roboto",unlabeledNotchColor:o.textSecondary,secondaryFontColor:o.textPrimary})]})).markers.clear(),m.load(u),m.on("ready",(function(){i(m.getDuration()),n.g.waveSurfer=m})),r.current=m;case 19:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var i=e.apply(r,n);function u(e){B(i,t,a,u,o,"next",e)}function o(e){B(i,t,a,u,o,"throw",e)}u(void 0)}))});return function(){return l.apply(this,arguments)}}();return e(),function(){r.current&&(r.current.destroy(),r.current=null)}}),[r,a,t,i,o,u])},K=function(e,r,n){(0,l.useEffect)((function(){if(e.current){var t=e.current;return t.on(r,n),function(){t&&(null===t||void 0===t||t.un(r,n))}}}),[e,e.current,r,n])},V=function(e){var r=e.url,n=e.playing,a=e.onPlay,i=e.onPause,o=e.onEnded,c=e.onTime,s=e.onDuration,f=e.onSeek,d=e.updateMarkerTime,p=e.playbackRate,m=e.markers,h=e.waveSurferRef,y=e.colors,v=(0,l.useRef)(null),x=(0,l.useRef)(null);G({waveSurferRef:h,waveContainerRef:v,timelineContainerRef:x,colors:y,onDuration:s,url:r}),function(e){var r=e.waveSurferRef,n=e.playing,t=(0,l.useRef)(n);(0,l.useEffect)((function(){if(r.current&&t.current!==n){try{var e,a;n?null===(e=r.current)||void 0===e||e.play():null===(a=r.current)||void 0===a||a.pause()}catch(i){console.log(i)}t.current=n}}),[r,n])}({waveSurferRef:h,playing:n}),function(e){var r=e.waveSurferRef,n=e.playbackRate;(0,l.useEffect)((function(){if(r.current)try{var e,t;null===(e=r.current)||void 0===e||null===(t=e.setPlaybackRate)||void 0===t||t.call(e,n)}catch(a){console.log(a)}}),[r,n])}({waveSurferRef:h,playbackRate:p}),function(e){var r=e.waveSurferRef,n=e.markers,t=e.colors;(0,l.useEffect)((function(){if(r.current)try{r.current.markers.clear(),n.forEach((function(e){var n,a=e.time,i=e.measure,u=e.type,o=e.id,l=u===w.QZ.Jump?t.secondaryMain:t.primaryMain,c=(null===(n=r.current)||void 0===n?void 0:n.addMarker({oldTime:a,time:a,label:i,color:l,position:"top",draggable:!0})).el;c.setAttribute("data-marker-id",o);var s=c.children[0];s.style.background=l,s.style.opacity=.5;var f=c.children[1].children[1];f.style.fontFamily="Roboto",f.style.fontSize="80%",f.style.marginTop="-4px"}))}catch(e){console.log(e)}}),[r,n,t])}({waveSurferRef:h,markers:m,colors:y});var k=(0,l.useCallback)((function(e){var r=e.el.getAttribute("data-marker-id");d({markerId:r,newMarkerTime:e.time})}),[d]);return K(h,"play",a),K(h,"pause",i),K(h,"finish",o),K(h,"audioprocess",c),K(h,"seek",f),K(h,"marker-drop",k),(0,t.jsxs)(u.Z,{mt:5,mb:5,children:[(0,t.jsx)(u.Z,{ref:v,sx:{"& wave::-webkit-scrollbar":{display:"none"},"& wave":{scrollbarWidth:"none"}}}),(0,t.jsx)(u.Z,{ref:x})]})},Y=function(e){var r=e.waveSurferRef,n=y(),a=v((function(e){return e.player})),i=a.playing,u=a.speed,o=v((function(e){return e.app.file.url})),c=v(w.D$),s=(0,Q.Z)(),f=(0,l.useMemo)((function(){return{primaryMain:s.palette.primary.main,primaryDark:s.palette.primary.dark,primaryLight:s.palette.primary.light,secondaryMain:s.palette.secondary.main,textPrimary:s.palette.text.primary,textSecondary:s.palette.text.secondary}}),[s]),d=(0,l.useCallback)((function(e){return n(w.i9.setPlaying(e))}),[n]),p=(0,l.useCallback)((function(e){return n(w.i9.setTime(e))}),[n]),m=(0,l.useCallback)((function(e){return n(w.i9.setProgress(e))}),[n]),h=(0,l.useCallback)((function(e){return n(w.i9.setDuration(e))}),[n]),x=(0,l.useCallback)((function(e){var r=e.markerId,t=e.newMarkerTime;return n(w.i9.updateMarkerTime({markerId:r,newMarkerTime:t}))}),[n]);return(0,t.jsx)(V,{url:o,playing:i,onPlay:(0,l.useCallback)((function(){return d(!0)}),[d]),onPause:(0,l.useCallback)((function(){return d(!1)}),[d]),onEnded:(0,l.useCallback)((function(){return d(!1)}),[d]),onTime:(0,l.useCallback)((function(e){return p(e)}),[p]),updateMarkerTime:x,onSeek:(0,l.useCallback)((function(e){return m(e)}),[m]),onDuration:(0,l.useCallback)((function(e){return h(e)}),[h]),playbackRate:u,markers:c,waveSurferRef:r,colors:f})},ee=function(){var e=y(),r=v((function(e){return e.player.jumpToMeasureDialogIsOpen})),n=v((function(e){return e.app.file.name})),a=(0,l.useCallback)((function(){return e(w.i9.togglePlaying())}),[e]),i=(0,l.useCallback)((function(){return e(w.i9.addMeasureMarker())}),[e]),s=(0,l.useCallback)((function(){return e(w.i9.openJumpToMeasureDialog())}),[e]),f=(0,l.useRef)(null);return function(e){var r=e.jumpToMeasureDialogIsOpen,n=e.togglePlaying,t=e.addMeasureMarker,a=e.openJumpToMeasureDialog,i=e.relativeSeek;(0,H.y1)("k",(function(){r||n()}),[r,n]),(0,H.y1)("space",(function(e){r||(e.preventDefault(),t())}),[r,t]),(0,H.y1)("shift+space",(function(e){e.preventDefault(),a()}),[a]),(0,H.y1)("j",(function(){return i(-10)}),[i]),(0,H.y1)("l",(function(){return i(10)}),[i]),(0,H.y1)("left",(function(){return i(-5)}),[i]),(0,H.y1)("right",(function(){return i(5)}),[i])}({jumpToMeasureDialogIsOpen:r,togglePlaying:a,addMeasureMarker:i,openJumpToMeasureDialog:s,relativeSeek:(0,l.useCallback)((function(e){f.current&&f.current.skip(e)}),[])}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.Z,{sx:{mt:2,p:2},variant:"outlined",children:[(0,t.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,t.jsx)(o.Z,{variant:"h6",children:n}),(0,t.jsx)(T,{})]}),(0,t.jsx)(Y,{waveSurferRef:f})]}),(0,t.jsx)($,{})]})},re=n(5162);function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function te(e,r,n,t,a,i,u){try{var o=e[i](u),l=o.value}catch(c){return void n(c)}o.done?r(l):Promise.resolve(l).then(t,a)}function ae(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ie(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){ae(e,r,n[r])}))}return e}function ue(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,i=[],u=!0,o=!1;try{for(n=n.call(e);!(u=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);u=!0);}catch(l){o=!0,a=l}finally{try{u||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return ne(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var oe=function(e){var r,n=e.setFile,a=(0,l.useCallback)((function(e){var r=ue(e,1)[0];if(r){var t=r.name,a=r.path,i=URL.createObjectURL(r);n({name:t,path:a,url:i})}}),[n]),i=(0,re.uI)({onDrop:a,multiple:!1,accept:"audio/*"}),s=i.getRootProps,d=i.getInputProps,p=i.isDragActive,m=i.isDragAccept,h=(0,l.useCallback)((r=q().mark((function e(){var r;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({name:"Mazurka in A minor, Op. 7 no. 2",path:r="examples/chopin-mazurka-opus-7-2.mp3",url:r});case 3:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=r.apply(e,n);function u(e){te(i,t,a,u,o,"next",e)}function o(e){te(i,t,a,u,o,"throw",e)}u(void 0)}))}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.Z,ie({},s(),{sx:{minHeight:100,display:"flex",justifyContent:"center",alignItems:"center",color:"text.secondary",cursor:"pointer",p:2,height:function(e){return e.spacing(25)}},variant:"outlined",children:[(0,t.jsx)("input",ie({},d())),p&&m?(0,t.jsx)(o.Z,{variant:"body1",children:"Drop the file here ..."}):(0,t.jsx)(o.Z,{variant:"body1",children:"Drag and drop an audio file here, or click to select one"})]})),(0,t.jsx)(u.Z,{mt:2,sx:{display:"flex",justifyContent:"center"},children:(0,t.jsx)(f.Z,{variant:"text",size:"small",color:"secondary",onClick:function(){return h()},children:"Use Example File"})})]})},le=n(1738),ce=function(){var e=y(),r=v((function(e){return e.app.file}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"Audiate"}),(0,t.jsx)("meta",{name:"description",content:"Annotate audio files"}),(0,t.jsx)("base",{href:"/audiate/"})]}),(0,t.jsx)(i.Z,{sx:{pt:10,height:"100vh"},children:(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(o.Z,{variant:"h3",gutterBottom:!0,children:"Audiate"}),!r.hasFile&&(0,t.jsx)(oe,{setFile:function(r){return e(le.xZ.setFile(r))}}),r.hasFile&&(0,t.jsx)(ee,{})]})})]})}}},function(e){e.O(0,[242,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);