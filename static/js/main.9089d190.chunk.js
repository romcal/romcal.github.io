(this["webpackJsonpmy-app-using-romcal"]=this["webpackJsonpmy-app-using-romcal"]||[]).push([[0],{161:function(e,n,t){},190:function(e,n,t){},191:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(38),l=t.n(c),i=(t(161),function(e){e&&e instanceof Function&&t.e(63).then(t.bind(null,273)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,l=n.getTTFB;t(e),a(e),r(e),c(e),l(e)}))}),o=t(17),s=t(250),d=t(245),h=t(136),b=t(261),u=t(271),j=t(8),O=t(114),m=t.n(O),x=t(125),f=t(61),g=t(237),p=t(52),y=t(19),v=t(55),D=t.n(v),C={GeneralRoman:t.e(25).then(t.bind(null,274)),Americas:t.e(3).then(t.bind(null,275)),Argentina:t.e(4).then(t.bind(null,276)),Australia:t.e(5).then(t.bind(null,277)),Austria:t.e(6).then(t.bind(null,278)),Belgium:t.e(7).then(t.bind(null,279)),Bolivia:t.e(8).then(t.bind(null,280)),BosniaHerzegovina:t.e(9).then(t.bind(null,281)),Brazil:t.e(10).then(t.bind(null,282)),Canada:t.e(11).then(t.bind(null,283)),Chile:t.e(12).then(t.bind(null,284)),China:t.e(13).then(t.bind(null,285)),CostaRica:t.e(14).then(t.bind(null,286)),Croatia:t.e(15).then(t.bind(null,287)),CzechRepublic:t.e(16).then(t.bind(null,288)),Denmark:t.e(17).then(t.bind(null,289)),England:t.e(18).then(t.bind(null,290)),Europe:t.e(19).then(t.bind(null,291)),Finland:t.e(20).then(t.bind(null,292)),France:t.e(24).then(t.bind(null,293)),France_Paris:t.e(21).then(t.bind(null,294)),France_SaintDenis:t.e(22).then(t.bind(null,295)),France_Strasbourg:t.e(23).then(t.bind(null,296)),Germany:t.e(26).then(t.bind(null,297)),Greece:t.e(27).then(t.bind(null,298)),Guatemala:t.e(28).then(t.bind(null,299)),Hungary:t.e(29).then(t.bind(null,300)),India:t.e(30).then(t.bind(null,301)),Ireland:t.e(31).then(t.bind(null,302)),Italy:t.e(32).then(t.bind(null,303)),Japan:t.e(33).then(t.bind(null,304)),Lebanon:t.e(34).then(t.bind(null,305)),Lithuania:t.e(35).then(t.bind(null,306)),Malta:t.e(36).then(t.bind(null,307)),Mexico:t.e(37).then(t.bind(null,308)),Netherlands:t.e(38).then(t.bind(null,309)),NewZealand:t.e(39).then(t.bind(null,310)),Norway:t.e(40).then(t.bind(null,311)),Panama:t.e(41).then(t.bind(null,312)),Paraguay:t.e(42).then(t.bind(null,313)),Peru:t.e(43).then(t.bind(null,314)),Philippines:t.e(44).then(t.bind(null,315)),Poland:t.e(45).then(t.bind(null,316)),Portugal:t.e(46).then(t.bind(null,317)),PuertoRico:t.e(47).then(t.bind(null,318)),Romania:t.e(48).then(t.bind(null,319)),Russia:t.e(49).then(t.bind(null,320)),Scotland:t.e(50).then(t.bind(null,321)),Slovakia:t.e(51).then(t.bind(null,322)),Slovenia:t.e(52).then(t.bind(null,323)),Spain:t.e(53).then(t.bind(null,324)),SriLanka:t.e(54).then(t.bind(null,325)),Sweden:t.e(55).then(t.bind(null,326)),Switzerland:t.e(56).then(t.bind(null,327)),Ukraine:t.e(57).then(t.bind(null,328)),UnitedStates:t.e(58).then(t.bind(null,329)),Uruguay:t.e(59).then(t.bind(null,330)),Venezuela:t.e(60).then(t.bind(null,331)),Vietnam:t.e(61).then(t.bind(null,332)),Wales:t.e(62).then(t.bind(null,333))};var w,k={romcalStore:new function e(){var n=this;Object(f.a)(this,e),this.fetchingData=!1,this.yearlyData=[],this.monthlyData=[],this.localeKey="En",this.calendarKey="GeneralRoman",this.currentYear=(new Date).getFullYear(),this.currentMonth=(new Date).getMonth(),this.fetchRomcalData=Object(x.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.yearlyData.length){e.next=10;break}return e.next=3,C[n.calendarKey];case 3:return e.t0="".concat(n.calendarKey,"_").concat(n.localeKey),t=e.sent[e.t0],a=new D.a({localizedCalendar:t}),e.next=8,a.generateCalendar(n.currentYear).then(Object.values);case 8:r=e.sent,Object(y.o)((function(){n.yearlyData=r}));case 10:return e.abrupt("return",Promise.resolve());case 11:case"end":return e.stop()}}),e)}))),this.getMonthData=function(){Object(y.o)((function(){return n.fetchingData=!0})),n.fetchRomcalData().then((function(){var e=n.yearlyData.filter((function(e){return new Date(e[0].date).getMonth()===n.currentMonth}));Object(y.o)((function(){n.monthlyData=e,n.fetchingData=!1}))}))},this.setCalendarKey=function(e){n.calendarKey=e,n.yearlyData=[],n.getMonthData()},this.setLocaleKey=function(e){n.localeKey=e,n.yearlyData=[],n.getMonthData()},this.setDate=function(e){var t=e.getFullYear();t!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=t,n.currentMonth=e.getMonth(),n.getMonthData()},this.setPreviousMonth=function(){var e=Object(g.a)(new Date(n.currentYear,n.currentMonth,1),1);e.getFullYear()!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=e.getFullYear(),n.currentMonth=e.getMonth(),n.getMonthData()},this.setNextMonth=function(){var e=Object(p.a)(new Date(n.currentYear,n.currentMonth,1),1);e.getFullYear()!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=e.getFullYear(),n.currentMonth=e.getMonth(),n.getMonthData()},Object(y.l)(this)}},M=a.createContext(k),N=t(31),S=t(253),E=t(263),F=t(257),R=t(264),z=t(258),Y=t(265),L=t(137),P=t(14),K=t(1);function A(e){var n=e.color,t=e.colorName;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("span",{className:"color-ship ".concat(n.toLowerCase())}),Object(P.a)(t)]})}function I(e){var n=e.colors,t=e.colorNames;return Object(K.jsx)(K.Fragment,{children:n.map((function(e,n){return Object(K.jsxs)("span",{children:[n>0?", ":"",Object(K.jsx)(A,{color:e,colorName:t[n]},e)]},n)}))})}function W(e){var n=e.day,t=["SUNDAY","WEEKDAY"].includes(n.rank)?null:Object(P.a)(n.rankName),a=n.isHolyDayOfObligation&&0!==new Date(n.date).getDay()?"(Holy Day of Obligation)":null;return Object(K.jsxs)(J,{children:[Object(K.jsx)(I,{colors:n.colors,colorNames:n.colorNames}),n.colors.length&&t?",":""," ",t," ",a]})}var B,T,G,_,H,U,J=Object(j.a)("p")(w||(w=Object(o.a)(["\n  margin: 0;\n  font-family: 'EB Garamond', serif;\n  font-size: 0.9em;\n"]))),V=t(131),Z=t.n(V),$=t(127),q=t.n($);function Q(e){var n,t=e.liturgicalDay,a=new Date(t[0].date);return Object(K.jsxs)(K.Fragment,{children:[1===a.getDate()&&Object(K.jsx)(ne,{children:Object(L.a)(a,"MMMM yyyy")}),Object(K.jsxs)(S.a,{className:"dow-".concat(a.getDay()," date-in-month-").concat(a.getDate()),TransitionProps:{unmountOnExit:!0},children:[Object(K.jsx)(E.a,{expandIcon:Object(K.jsx)(Z.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(K.jsxs)(ee,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(K.jsx)(F.a,{item:!0,xs:1,children:Object(K.jsx)(R.a,{children:Object(K.jsx)(z.a,{placement:"top-start",title:Object(L.a)(a,"EEEE"),children:Object(K.jsx)(te,{children:a.getDate()})})})}),Object(K.jsx)(F.a,{item:!0,xs:!0,children:Object(K.jsxs)(R.a,{children:[Object(K.jsx)(ae,{className:t[0].rank.toLowerCase(),children:t[0].name}),Object(K.jsx)(W,{day:t[0]}),t.length>1&&t.slice(1).map((function(e){return Object(K.jsxs)("div",{children:[Object(K.jsxs)(re,{className:e.rank.toLowerCase(),children:[e.isOptional?Object(K.jsx)(ce,{children:"or: "}):Object(K.jsx)(K.Fragment,{}),e.name]},e.key),Object(K.jsx)(W,{day:e})]},e.key)}))]})})]})}),Object(K.jsx)(Y.a,{children:Object(K.jsx)(q.a,{src:(n=t,n.map((function(e){return{key:e.key,name:e.name,date:e.date,dateDef:e.dateDef,precedence:e.precedence,rank:e.rank,rankName:e.rankName,allowSimilarRankItems:e.allowSimilarRankItems,isHolyDayOfObligation:e.isHolyDayOfObligation,isOptional:e.isOptional,i18nDef:e.i18nDef,seasons:e.seasons,seasonNames:e.seasonNames,periods:e.periods,colors:e.colors,colorNames:e.colorNames,martyrology:e.martyrology,titles:e.titles,calendar:e.calendar,cycles:{properCycle:e.cycles.properCycle,properCycleName:e.cycles.properCycleName,sundayCycle:e.cycles.sundayCycle,sundayCycleName:e.cycles.sundayCycleName,weekdayCycle:e.cycles.weekdayCycle,weekdayCycleName:e.cycles.weekdayCycleName,psalterWeek:e.cycles.psalterWeek,psalterWeekName:e.cycles.psalterWeekName},fromCalendar:"ProperOfTime",fromExtendedCalendars:[]}}))),displayDataTypes:!1,shouldCollapse:function(e){var n;return["dateDef","i18nDef"].includes(null!==(n=e.name)&&void 0!==n?n:"")}})})]})]})}var X,ee=Object(j.a)(F.a)(B||(B=Object(o.a)(["\n  margin: 5px 0;\n"]))),ne=Object(j.a)("h4")(T||(T=Object(o.a)(["\n  font-weight: 100;\n  font-family: 'Roboto', sans-serif;\n  font-size: 2em;\n"]))),te=Object(j.a)("h4")(G||(G=Object(o.a)(["\n  font-family: 'EB Garamond', serif;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: right;\n  width: 30px;\n  margin: 0;\n"]))),ae=Object(j.a)("h5")(_||(_=Object(o.a)(["\n  font-weight: 500;\n  font-family: 'EB Garamond', serif;\n  vertical-align: baseline;\n  line-height: 30px;\n  margin: 0;\n\n  &::before {\n    content: '';\n    font-size: 25px;\n  }\n"]))),re=Object(j.a)("h6")(H||(H=Object(o.a)(["\n  font-weight: 500;\n  font-family: 'EB Garamond', serif;\n  vertical-align: baseline;\n  line-height: 30px;\n  margin: 5px 0 0;\n\n  &::before {\n    content: '';\n    font-size: 25px;\n  }\n"]))),ce=Object(j.a)("span")(U||(U=Object(o.a)(["\n  font-size: 19px;\n  text-transform: none;\n  font-variant: normal;\n  font-weight: 400;\n"]))),le=t(67),ie=t(266);function oe(){return Object(K.jsx)(ue,{sx:{display:"flex"},children:Object(K.jsx)(ie.a,{})})}var se,de,he,be,ue=Object(le.a)(R.a)(X||(X=Object(o.a)(["\n  margin: 80px 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n"]))),je=Object(N.a)((function(e){var n=Object(a.useContext)(M).romcalStore,t=n.fetchingData,r=n.monthlyData;return 0!==r.length||t||n.getMonthData(),t?Object(K.jsx)(oe,{}):Object(K.jsx)(Oe,{children:r.map((function(e){return Object(K.jsx)(Q,{liturgicalDay:e},e[0].date)}))})})),Oe=Object(j.a)("div")(se||(se=Object(o.a)(["\n  padding: 30px 10px;\n"]))),me=t(267),xe=t(255),fe=t(244),ge=Object(N.a)((function(){var e=Object(a.useContext)(M).romcalStore,n=e.calendarKey,t=e.setCalendarKey;return Object(K.jsx)(R.a,{sx:{minWidth:120,marginRight:2},children:Object(K.jsxs)(me.a,{fullWidth:!0,children:[Object(K.jsx)(xe.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"Calendar"}),Object(K.jsx)(fe.a,{id:"calendar",value:n,onChange:function(e){e.target.value&&t(e.target.value)},children:Object.keys(C).map((function(e){return Object(K.jsx)("option",{value:e,children:(n=e,Object(P.a)(n.replace(/_/g," / ").replace(/([A-Z])/g," $1").replace(/\s([a-z])/g,(function(e){return" ".concat(e.toUpperCase())}))))},e);var n}))})]})})})),pe=t(11),ye=Object(N.a)((function(){var e=Object(a.useContext)(M).romcalStore,n=e.localeKey,t=e.setLocaleKey,r=D.a.LOCALE_KEYS.reduce((function(e,n,t){return e[D.a.LOCALE_VAR_NAMES[t]]=n,e}),{});return Object(K.jsx)(R.a,{sx:{minWidth:120},children:Object(K.jsxs)(me.a,{fullWidth:!0,children:[Object(K.jsx)(xe.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"Locale"}),Object(K.jsx)(fe.a,{id:"calendar",value:n,onChange:function(e){t(e.target.value)},children:Object.entries(r).map((function(e){var n=Object(pe.a)(e,2),t=n[0],a=n[1];return Object(K.jsx)("option",{value:t,children:a},t)}))})]})})})),ve=t(115),De=t(132),Ce=t.n(De),we=t(133),ke=t.n(we),Me=t(249),Ne=t(268),Se=t(252),Ee=Object(N.a)((function(e){var n=Object(a.useContext)(M).romcalStore,t=n.currentYear,r=n.currentMonth;return Object(K.jsxs)(Fe,{children:[Object(K.jsx)(R.a,{sx:{marginRight:1,marginTop:1},children:Object(K.jsx)(Ne.a,{"aria-label":"delete",color:"primary",onClick:function(){return n.setPreviousMonth()},children:Object(K.jsx)(Ce.a,{})})}),Object(K.jsx)(R.a,{sx:{minWidth:120},children:Object(K.jsx)(Me.a,{label:"Month and Year",views:["year","month"],minDate:new Date("1969-01-01"),value:new Date(t,r,1),onChange:function(e){e&&n.setDate(e)},renderInput:function(e){return Object(K.jsx)(Se.a,Object(ve.a)(Object(ve.a)({},e),{},{variant:"standard",helperText:null}))}})}),Object(K.jsx)(R.a,{sx:{marginLeft:1,marginTop:1},children:Object(K.jsx)(Ne.a,{"aria-label":"delete",color:"primary",onClick:function(){return n.setNextMonth()},children:Object(K.jsx)(ke.a,{})})})]})})),Fe=Object(le.a)("div")(de||(de=Object(o.a)(["\n  margin-top: 20px;\n  display: inline-flex;\n"])));function Re(){return Object(K.jsxs)(Ye,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(K.jsx)(Ee,{}),Object(K.jsxs)(Le,{children:[Object(K.jsx)(ge,{}),Object(K.jsx)(ye,{})]})]})}var ze,Ye=Object(j.a)(F.a)(he||(he=Object(o.a)(["\n  margin-bottom: 0;\n"]))),Le=Object(j.a)("div")(be||(be=Object(o.a)(["\n  margin-top: 20px;\n  display: inline-flex;\n"]))),Pe=Object(N.a)((function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Re,{}),Object(K.jsx)(je,{})]})})),Ke=t(270);function Ae(){return Object(K.jsx)("a",{href:"./",children:Object(K.jsx)(Be,{src:"./romcal-logo.png",alt:"Romcal"})})}var Ie,We,Be=Object(j.a)("img")(ze||(ze=Object(o.a)(["\n  max-height: 60px;\n  padding: 35px 20px 40px;\n"])));function Te(){return Object(K.jsxs)(F.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(K.jsx)(Ae,{}),Object(K.jsxs)(He,{children:[Object(K.jsx)(Ue,{href:"https://github.com/romcal/romcal/blob/dev/README.md",underline:"hover",children:"Documentation"}),Object(K.jsx)(Ue,{href:"https://github.com/romcal/romcal",underline:"hover",children:"Source Code"})]})]})}var Ge,_e,He=Object(j.a)(R.a)(Ie||(Ie=Object(o.a)(["\n  margin: 20px 0;\n"]))),Ue=Object(j.a)(Ke.a)(We||(We=Object(o.a)(["\n  text-transform: uppercase;\n  margin: 10px;\n  font-weight: bold;\n  font-size: 0.9em;\n"]))),Je=t(134),Ve=t.n(Je),Ze=t(260);function $e(){return Object(K.jsxs)(Xe,{children:[Object(K.jsx)("p",{children:"A JavaScript library that generates liturgical calendars of the Roman Rite of the Roman Catholic Church."}),Object(K.jsx)(en,{children:Object(K.jsx)(Ze.a,{variant:"outlined",href:"https://github.com/romcal/romcal",startIcon:Object(K.jsx)(Ve.a,{}),children:"See more"})})]})}var qe,Qe,Xe=Object(j.a)("div")(Ge||(Ge=Object(o.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  font-size: 1.5em;\n  margin: 0 0 30px;\n  padding: 20px;\n  border-radius: 3px;\n  background-image: linear-gradient(135deg, #fcfaf8 0%, #faf7f4 100%);\n\n  > p {\n    margin: 0;\n    line-height: 1.4em;\n  }\n"]))),en=Object(j.a)("p")(_e||(_e=Object(o.a)(["\n  text-align: right;\n  padding-top: 10px;\n"]))),nn=(t(190),Object(N.a)((function(){return Object(K.jsxs)(tn,{children:["romcal v.",D.a.getVersion()]})}))),tn=Object(j.a)("div")(qe||(qe=Object(o.a)(["\n  padding: 30px 10px;\n  text-align: center;\n  font-size: 0.8em;\n  color: #7f7f7f;\n  font-weight: 100;\n"]))),an=Object(h.a)({palette:{primary:{light:"#ff5f3d",main:"#D02611",dark:"#970000",contrastText:"#000"},secondary:{light:"#4f5b62",main:"#263238",dark:"#000a12",contrastText:"#fff"}}});var rn=function(){return Object(K.jsx)(M.Provider,{value:k,children:Object(K.jsx)(d.b,{dateAdapter:s.a,children:Object(K.jsx)(b.a,{theme:an,children:Object(K.jsxs)(cn,{maxWidth:"md",fixed:!0,children:[Object(K.jsx)(Te,{}),Object(K.jsx)($e,{}),Object(K.jsx)(Pe,{}),Object(K.jsx)(nn,{})]})})})})},cn=Object(j.a)(u.a)(Qe||(Qe=Object(o.a)(["\n  border-style: solid;\n  border-color: #fff;\n  border-width: 0;\n  border-left-width: thin;\n  border-right-width: thin;\n  background-color: rgba(255, 255, 2555, 0.9);\n  box-sizing: border-box;\n  min-height: 100vh;\n"])));l.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(rn,{})}),document.getElementById("root")),i()}},[[191,1,2]]]);
//# sourceMappingURL=main.9089d190.chunk.js.map