(this.webpackJsonptest_task_solution=this.webpackJsonptest_task_solution||[]).push([[0],{106:function(e,t,a){},15:function(e,t,a){e.exports={header:"Header_header__1XZcZ",allHeader:"Header_allHeader__2uV4H",iconArea:"Header_iconArea__1iYdb",icon:"Header_icon__giZPv",title:"Header_title__3m83c",headerTitle:"Header_headerTitle__iI69k",titleName:"Header_titleName__SQxMh",version:"Header_version__33aen",panel:"Header_panel__3oVBv",versionProject:"Header_versionProject__3M1Nn",hr:"Header_hr__lkqNa"}},245:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(22),s=a.n(n),i=(a(106),a(41)),l=a.n(i),d=a(94),o=a.n(d),j=a(30),b=a.n(j),u=a(8),_=a(24),m=a(9),O=a(4),h=a(95),f=a.n(h).a.create({baseURL:"https://solution-fund.com/api/trader/",headers:{Authorization:"Bearer OudDwOorhDOBpLZpxjnekDOEnkfTqHGU"}}),x=function(){return f.get("getAll/dummy")},v={traders:[],currentDate:null,isLoading:!1},N=function(e){return{type:"tradersReducer/SET_CURRENT_DATE",date:e}},T=function(e){return{type:"tradersReducer/SET_IS_LOADING",isLoading:e}},p=a(1),g=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.traders})).traders,a=function(){e(T(!0)),setTimeout((function(){e(T(!1))}),1e3)};return Object(p.jsx)("div",{className:b.a.listTraders,children:t.map((function(e){return Object(p.jsxs)("div",{className:b.a.trader,children:[Object(p.jsx)("div",{className:b.a.name,children:e.name}),Object(p.jsx)(_.b,{to:"/traders/".concat(e.id),className:b.a.moreDetails,onClick:a,children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]},e.id)}))})},P=a(15),D=a.n(P),k=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:D.a.header,children:[Object(p.jsxs)("div",{className:D.a.allHeader,children:[Object(p.jsx)("div",{className:D.a.iconArea,children:Object(p.jsx)("div",{className:D.a.icon})}),Object(p.jsxs)("div",{className:D.a.title,children:[Object(p.jsx)("div",{className:D.a.headerTitle,children:"\u0422\u0440\u0435\u0439\u0434\u0435\u0440\u044b"}),Object(p.jsx)("div",{className:D.a.titleName,children:"\u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0444\u043e\u043d\u0434 Solution"})]})]}),Object(p.jsxs)("div",{className:D.a.version,children:[Object(p.jsxs)("div",{className:D.a.panel,children:["\u041f\u0430\u043d\u0435\u043b\u044c \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",Object(p.jsx)("br",{}),"Solution"]}),Object(p.jsx)("div",{className:D.a.versionProject,children:"v.0.2"})]})]}),Object(p.jsx)("div",{className:D.a.hr})]})},E=function(){return Object(p.jsxs)("div",{className:o.a.tradersPage,children:[Object(p.jsx)(k,{}),Object(p.jsx)(g,{})]})},S=a(3),y=a.n(S),H=a(5),R=a.p+"static/media/traderIcon.c591492c.png",A=a(101),C=function(e){var t=e.id,a=Object(u.c)((function(e){return e.traders})),r=a.traders,c=a.currentDate,n=r.find((function(e){return e.id===Number(t)})).history,s=0!==n.length?n[c]:null,i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=["","","","","","","","","","","",""];if(s)for(var d=0;d<i.length;d++)l[d]=s[i[d]];var o={labels:i,datasets:[{data:s?l:[],backgroundColor:function(e){return e.raw<=0?"#c11e1e":"rgb(53,171,23)"}}]};return Object(p.jsx)("div",{children:Object(p.jsx)(A.a,{data:o,options:{scales:{y:{ticks:{stepSize:10,callback:function(e){return e+"%"}},grid:{color:function(e){return"0%"===e.tick.label?"#ffffff":"#2f323b"}}},x:{grid:{display:!1}}},plugins:{legend:!1}}})})},L=a(100),F=function(e){var t=e.id,a=Object(u.b)(),c=Object(u.c)((function(e){return e.traders})).traders;Object(r.useEffect)((function(){i[0]&&a(N(i[0].value))}),[]);var n=c.find((function(e){return e.id===Number(t)})),s=n?n.history:[],i=Object.entries(s).map((function(e){return{value:e[0],label:e[0]}})),l={control:function(e){return Object(O.a)(Object(O.a)({},e),{},{border:"0",boxShadow:"none",margin:"10px 10px 10px 0",backgroundColor:"rgb(57 60 69)",fontSize:"1rem",paddingLeft:"center",fontFamily:"'Roboto', sans-serif",lineHeight:"1.1"})},singleValue:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"rgb(57 60 69)",color:"#949ba2",border:"none",fontSize:"1rem",fontFamily:"'Roboto', sans-serif",lineHeight:"1.1"})},option:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"rgb(57 60 69)",color:"#949ba2",fontSize:"1rem",fontFamily:"'Roboto', sans-serif",lineHeight:"1.1","&:hover":{backgroundColor:"#007bff",color:"#FFFF"}})},menu:function(e){return Object(O.a)(Object(O.a)({},e),{},{backgroundColor:"rgb(57 60 69)"})}};return Object(p.jsx)(L.a,{options:i,styles:l,defaultValue:i[0],onChange:function(e){e&&a(N(e.value))}})},w=function(){var e=Object(u.b)(),t=Object(H.g)().id,a=Object(u.c)((function(e){return e.traders})).traders.find((function(e){return e.id===Number(t)})),r=a?a.added.split("-"):[],c=new Date("".concat(r[1],"-").concat(r[2],"-").concat(r[0])),n=new Date,s=new Date("".concat(n.getMonth(),"-").concat(n.getDay(),"-").concat(n.getFullYear())),i=Math.ceil(Math.ceil(Math.abs(s.getTime()-c.getTime())/864e5)/30)+2,l="\u0412\u0441\u0442\u0443\u043f\u0438\u043b \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ";return i>=12?l+="1 \u0433\u043e\u0434 \u043d\u0430\u0437\u0430\u0434":i<=1?l+="".concat(i," \u043c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434"):2===i||3===i||4===i?l+="".concat(i," \u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0437\u0430\u0434"):5!==i&&6!==i&&7!==i&&8!==i&&9!==i&&10!==i&&11!==i||(l+="".concat(i," \u043c\u0435\u0441\u044f\u0446\u0432 \u043d\u0430\u0437\u0430\u0434")),Object(p.jsxs)("div",{className:y.a.traderProfile,children:[Object(p.jsx)(k,{}),a&&Object(p.jsxs)("div",{className:y.a.row,children:[Object(p.jsxs)("div",{className:y.a.personal,children:[Object(p.jsx)("img",{src:R,alt:"icon",className:y.a.iconTrader}),Object(p.jsx)("div",{className:y.a.nameTrader,children:a.name}),Object(p.jsx)("div",{className:y.a.entryTime,children:l}),Object(p.jsx)("div",{className:y.a.location,children:a.description})]}),Object(p.jsxs)("div",{className:y.a.additionalData,children:[Object(p.jsxs)("div",{className:y.a.commonInfo,children:[Object(p.jsxs)("div",{className:y.a.column,children:[Object(p.jsx)("div",{className:y.a.title1,children:"ROI"}),Object(p.jsx)("div",{className:y.a.interest,children:"".concat(a.roi,"%")})]}),Object(p.jsxs)("div",{className:y.a.column,children:[Object(p.jsx)("div",{className:y.a.title1,children:"\u0418\u043d\u0432\u0435\u0441\u0442\u043e\u0440\u044b"}),Object(p.jsx)("div",{className:y.a.count,children:a.investors})]})]}),Object(p.jsx)("div",{className:y.a.line}),Object(p.jsxs)("div",{className:y.a.table,children:[Object(p.jsxs)("div",{className:y.a.column1,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u0410\u043a\u0442\u0438\u0432\u043e\u0432 \u043f\u043e\u0434 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c"}),Object(p.jsx)("div",{className:y.a.count,children:a.current_assets<=0?"\u221e":"".concat(a.asset," ").concat(a.current_assets)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0430\u043a\u0442\u0438\u0432\u044b \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u0430"}),Object(p.jsx)("div",{className:y.a.count,children:a.personal_assets<=0?"\u221e":"".concat(a.asset," ").concat(a.personal_assets)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442"}),Object(p.jsx)("div",{className:y.a.count,children:a.min_deposit<=0?"\u221e":"".concat(a.asset," ").concat(a.min_deposit)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0435\u043f\u043e\u0437\u0438\u0442"}),Object(p.jsx)("div",{className:y.a.count,children:a.max_deposit<=0?"\u221e":"".concat(a.asset," ").concat(a.max_deposit)})]})]}),Object(p.jsxs)("div",{className:y.a.column1,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0434\u0435\u043b\u043e\u043a"}),Object(p.jsx)("div",{className:y.a.count,children:"\u0414\u0430"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u041a\u043e\u043c\u0438\u0441\u0441\u0438\u044f \u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0441\u0434\u0435\u043b\u043e\u043a"}),Object(p.jsx)("div",{className:y.a.count,children:"".concat(a.fee,"%")})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f \u043f\u0440\u043e\u0441\u0430\u0434\u043a\u0430"}),Object(p.jsx)("div",{className:y.a.count,children:"".concat(a.allowed_dropdown,"%")})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:y.a.title2,children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0432\u0435\u0441\u0442\u043e\u0440\u043e\u0432"}),Object(p.jsx)("div",{className:y.a.count,children:a.max_investors<=0?"\u221e":"".concat(a.max_investors)})]})]}),Object(p.jsxs)("div",{className:y.a.column1,children:[Object(p.jsx)("div",{className:y.a.count,children:"PnL"}),a.pnl.map((function(e,t){return Object(p.jsxs)("div",{className:y.a.time,children:[Object(p.jsx)("div",{className:y.a.title2,children:e[0]}),Number(e[1])<=0?Object(p.jsx)("div",{className:y.a.minusProfit,children:e[1]}):Object(p.jsx)("div",{className:y.a.plusProfit,children:e[1]})]},t)}))]})]})]})]}),Object(p.jsxs)("div",{className:y.a.barChart,children:[Object(p.jsx)("div",{className:y.a.chart,children:Object(p.jsx)(C,{id:t})}),Object(p.jsxs)("div",{className:y.a.select,children:[Object(p.jsx)("div",{className:y.a.selectText,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0434"}),Object(p.jsx)(F,{id:t})]})]}),Object(p.jsx)(_.b,{to:"/",className:y.a.comeBack,onClick:function(){e(T(!0)),setTimeout((function(){e(T(!1))}),1e3)},children:"\u0412\u0441\u0435 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u044b"})]})},I=a(98),M=a.n(I),B=function(){return Object(p.jsx)("div",{className:M.a.linePreloader})},z=function(){var e=Object(u.b)();Object(r.useEffect)((function(){e((function(e){e(T(!0)),x().then((function(t){e({type:"tradersReducer/SET_TRADERS_DATA",data:t.data.traders}),e(T(!1))})).catch((function(t){console.log(t.message?t.message:"some error... Please try again."),e(T(!1))}))})),e(N(c))}),[]);var t=Object(u.c)((function(e){return e.traders})),a=t.traders,c=t.currentDate,n=t.isLoading;return Object(p.jsx)("div",{className:l.a.app,children:0===a.length||n?Object(p.jsx)(B,{}):Object(p.jsxs)(H.d,{children:[Object(p.jsx)(H.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(E,{})}}),Object(p.jsx)(H.b,{path:"/traders/:id",render:function(){return Object(p.jsx)(w,{})}}),Object(p.jsx)(H.b,{path:"/404",render:function(){return Object(p.jsx)("div",{className:l.a.textError,children:"404: PAGE NOT FOUND"})}}),Object(p.jsx)(H.a,{from:"*",to:"/404"})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,246)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))},J=a(99),U=a(43),Z=Object(U.b)({traders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tradersReducer/SET_TRADERS_DATA":return Object(O.a)(Object(O.a)({},e),{},{traders:t.data.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{history:e.history,pnl:Object(m.a)(e.pnl)})}))});case"tradersReducer/SET_CURRENT_DATE":return Object(O.a)(Object(O.a)({},e),{},{currentDate:t.date});case"tradersReducer/SET_IS_LOADING":return Object(O.a)(Object(O.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),V=Object(U.c)(Z,Object(U.a)(J.a));s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{store:V,children:Object(p.jsx)(_.a,{children:Object(p.jsx)(z,{})})})}),document.getElementById("root")),G()},3:function(e,t,a){e.exports={traderProfile:"TraderProfile_traderProfile__G_e8P",row:"TraderProfile_row__3IkMG",personal:"TraderProfile_personal__-LoO0",iconTrader:"TraderProfile_iconTrader__8KHIt",nameTrader:"TraderProfile_nameTrader__1GTTD",entryTime:"TraderProfile_entryTime__1N9tB",location:"TraderProfile_location__3BlOe",additionalData:"TraderProfile_additionalData__3xkk8",commonInfo:"TraderProfile_commonInfo__15Ihd",column:"TraderProfile_column__SNGUJ",line:"TraderProfile_line__1j7Ys",table:"TraderProfile_table__2C_9M",title1:"TraderProfile_title1__12udS",title2:"TraderProfile_title2__2tFY0",interest:"TraderProfile_interest__22uMg",count:"TraderProfile_count__1ChzP",column1:"TraderProfile_column1__qvYv1",time:"TraderProfile_time__3HTsD",plusProfit:"TraderProfile_plusProfit__3rEWl",minusProfit:"TraderProfile_minusProfit__ZHZ8P",barChart:"TraderProfile_barChart__3YzXr",chart:"TraderProfile_chart__1sjku",select:"TraderProfile_select__2hRlo",selectText:"TraderProfile_selectText__isoEE",comeBack:"TraderProfile_comeBack__36Svt"}},30:function(e,t,a){e.exports={listTraders:"ListTraders_listTraders__MmK-V",trader:"ListTraders_trader__oEeQ3",name:"ListTraders_name__1uEU7",moreDetails:"ListTraders_moreDetails__2bJ9D"}},41:function(e,t,a){e.exports={app:"App_app__ESFWR",textError:"App_textError__2arTa"}},94:function(e,t,a){e.exports={tradersPage:"TradersPage_tradersPage__2Z-VC"}},98:function(e,t,a){e.exports={linePreloader:"Preloader_linePreloader__wzXpy",scroll:"Preloader_scroll__1K8xo"}}},[[245,1,2]]]);
//# sourceMappingURL=main.29e12a0f.chunk.js.map