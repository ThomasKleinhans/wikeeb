"use strict";(self["webpackChunkwikeeb"]=self["webpackChunkwikeeb"]||[]).push([[529],{3546:(e,i,a)=>{a.d(i,{Z:()=>h});a(71);var l=a(3673),t=a(2323);const s={class:"absolute-bottom"};function o(e,i,a,o,n,r){const c=(0,l.up)("q-btn"),d=(0,l.up)("q-card-section"),p=(0,l.up)("q-chip"),m=(0,l.up)("q-space"),u=(0,l.up)("q-img"),v=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(v,{class:"keycaps-card"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"flex items-center justify-between q-py-sm q-px-md"},{default:(0,l.w5)((()=>[(0,l._)("span",{onClick:i[0]||(i[0]=(...e)=>r.sendToDetails&&r.sendToDetails(...e)),class:"title"},(0,t.zw)(a.item.name),1),(0,l.Wm)(c,{flat:"",round:"",color:r.isFavorite?"negative":"favorite",style:(0,t.j5)(r.isFavorite?"":"opacity:.3"),icon:"favorite",onClick:i[1]||(i[1]=e=>r.favorite())},null,8,["color","style"])])),_:1}),(0,l.Wm)(u,{src:a.item.image,class:"card-image",onClick:r.sendToDetails},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(p,{size:"12px",color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.item.material),1)])),_:1}),(0,l.Wm)(p,{size:"12px",color:"secondary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.item.profile),1)])),_:1}),(0,l.Wm)(m),(0,l.Wm)(p,{size:"12px",color:r.availabilityColor},{default:(0,l.w5)((()=>[(0,l.Uk)((0,t.zw)(a.item.availability),1)])),_:1},8,["color"])])])),_:1},8,["src","onClick"])])),_:1})}var n=a(7874);const r={props:{item:{type:Object}},methods:{...(0,n.nv)(["addKeycapsToFavorties"]),favorite(){this.getAuthStatus?this.addKeycapsToFavorties({keycapsUID:this.item.id,userUID:this.getUserUID}):this.$router.push({name:"login"})},sendToDetails(){this.$router.push({name:"keycaps-details",params:{id:this.item.id}})}},computed:{...(0,n.Se)(["getAuthStatus","getUserUID","getFavoritesKeycaps"]),availabilityColor(){switch(this.item.availability){case"GB-Ended":return"negative";case"GB-Live":return"positive";case"In-stock":return"positive";case"Sold out":return"negative";case"Interest Check":return"info";default:return"dark"}},isFavorite(){return this.getFavoritesKeycaps.includes(this.item.id)}}};var c=a(4260),d=a(151),p=a(5589),m=a(8240),u=a(4027),v=a(7030),y=a(2025),b=a(7518),f=a.n(b);const g=(0,c.Z)(r,[["render",o],["__scopeId","data-v-000550b8"]]),h=g;f()(r,"components",{QCard:d.Z,QCardSection:p.Z,QBtn:m.Z,QImg:u.Z,QChip:v.Z,QSpace:y.Z})},5529:(e,i,a)=>{a.r(i),a.d(i,{default:()=>U});var l=a(3673);const t={class:"row q-mb-md"},s={class:"col"},o={class:"col"},n={class:"col"},r={class:"col"},c={class:"col"},d={class:"col q-ml-xs"},p={class:"row q-col-gutter-xl"};function m(e,i,a,m,u,v){const y=(0,l.up)("q-select"),b=(0,l.up)("q-btn"),f=(0,l.up)("KeycapsCard"),g=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(g,{padding:""},{default:(0,l.w5)((()=>[(0,l._)("div",t,[(0,l._)("div",s,[(0,l.Wm)(y,{filled:"",class:"q-mr-xs",clearable:"",modelValue:u.filters.brand,"onUpdate:modelValue":i[0]||(i[0]=e=>u.filters.brand=e),options:u.brandOptions,label:"Brand"},null,8,["modelValue","options"])]),(0,l._)("div",o,[(0,l.Wm)(y,{filled:"",class:"q-mx-xs",clearable:"",modelValue:u.filters.profile,"onUpdate:modelValue":i[1]||(i[1]=e=>u.filters.profile=e),options:u.profileOptions,label:"Profile"},null,8,["modelValue","options"])]),(0,l._)("div",n,[(0,l.Wm)(y,{filled:"",class:"q-mx-xs",clearable:"",modelValue:u.filters.material,"onUpdate:modelValue":i[2]||(i[2]=e=>u.filters.material=e),options:u.materialOptions,label:"Material"},null,8,["modelValue","options"])]),(0,l._)("div",r,[(0,l.Wm)(y,{filled:"",class:"q-mx-xs",clearable:"",modelValue:u.filters.availability,"onUpdate:modelValue":i[3]||(i[3]=e=>u.filters.availability=e),options:u.availabilityOptions,label:"Availability"},null,8,["modelValue","options"])]),(0,l._)("div",c,[(0,l.Wm)(y,{filled:"",class:"q-mx-xs",clearable:"",modelValue:u.filters.compatibility,"onUpdate:modelValue":i[4]||(i[4]=e=>u.filters.compatibility=e),options:u.compatibilityOptions,label:"Compatibility"},null,8,["modelValue","options"])]),(0,l._)("div",d,[(0,l.Wm)(b,{color:"primary",onClick:i[5]||(i[5]=i=>e.fetchFilteredKeycaps(u.filters)),label:"Filter",class:"full-width",padding:"md"})])]),(0,l._)("div",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(v.keycapsToShow,((e,i)=>((0,l.wg)(),(0,l.iD)("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2",key:i},[(0,l.Wm)(f,{item:e},null,8,["item"])])))),128))])])),_:1})}var u=a(7874),v=a(3546),y=a(9587);const b={components:{KeycapsCard:v.Z},data(){return{brandOptions:y.brand,profileOptions:y.profile,compatibilityOptions:y.compatibility,materialOptions:y.material,availabilityOptions:y.availability,filters:{brand:[],profile:[],compatibility:[],material:[],availability:[]}}},computed:{...(0,u.Se)(["getAllKeycaps","getFilteredKeycaps"]),keycapsToShow(){return this.getFilteredKeycaps.length>0?this.getFilteredKeycaps:this.getAllKeycaps}},methods:{...(0,u.nv)(["fetchFilteredKeycaps"])}};var f=a(4260),g=a(6762),h=a(6819),k=a(8240),w=a(7518),S=a.n(w);const C=(0,f.Z)(b,[["render",m]]),U=C;S()(b,"components",{QPage:g.Z,QSelect:h.Z,QBtn:k.Z})},9587:e=>{e.exports=JSON.parse('{"profile":["Cherry","OEM","DCS","SA","MT3","NP","DSA","XDA","KAT","KAM","Unknown"],"material":["ABS","PBT","Aluminium","Brass","Unknown"],"brand":["GMK","Signature Plastic","MilkyWay","Keyreative","EnjoyPBT","Unknown"],"availability":["Interest Check","GB-Live","GB-Ended","In-stock","Sold out"],"compatibility":["ISO-UK","ANSI-US","ISO-FR","ISO-DE","ISO-CH"],"links":[{"name":"GeekHack","icon":"Geekhack.svg"},{"name":"Reddit","icon":"Reddit.svg"},{"name":"Worldwide","icon":"worldwide.svg"},{"name":"EU","icon":"union-europeenne.svg"},{"name":"CA","icon":"canada.svg"},{"name":"CN","icon":"chine.svg"},{"name":"JP","icon":"japon.svg"},{"name":"OCE","icon":"australie.svg"},{"name":"UK","icon":"royaume-uni.svg"},{"name":"US","icon":"etats-unis.svg"}]}')}}]);