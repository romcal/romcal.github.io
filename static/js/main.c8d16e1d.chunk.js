(this["webpackJsonpmy-app-using-romcal"]=this["webpackJsonpmy-app-using-romcal"]||[]).push([[0],{161:function(e,n,t){},190:function(e,n,t){},191:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(38),l=t.n(c),i=(t(161),function(e){e&&e instanceof Function&&t.e(63).then(t.bind(null,273)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,l=n.getTTFB;t(e),a(e),r(e),c(e),l(e)}))}),o=t(17),s=t(250),d=t(245),b=t(136),h=t(261),u=t(271),j=t(8),O=t(115),m=t.n(O),x=t(125),f=t(62),g=t(237),p=t(52),y=t(19),v=t(55),D=t.n(v),w={GeneralRoman:t.e(25).then(t.bind(null,274)),Americas:t.e(3).then(t.bind(null,275)),Argentina:t.e(4).then(t.bind(null,276)),Australia:t.e(5).then(t.bind(null,277)),Austria:t.e(6).then(t.bind(null,278)),Belgium:t.e(7).then(t.bind(null,279)),Bolivia:t.e(8).then(t.bind(null,280)),BosniaHerzegovina:t.e(9).then(t.bind(null,281)),Brazil:t.e(10).then(t.bind(null,282)),Canada:t.e(11).then(t.bind(null,283)),Chile:t.e(12).then(t.bind(null,284)),China:t.e(13).then(t.bind(null,285)),CostaRica:t.e(14).then(t.bind(null,286)),Croatia:t.e(15).then(t.bind(null,287)),CzechRepublic:t.e(16).then(t.bind(null,288)),Denmark:t.e(17).then(t.bind(null,289)),England:t.e(18).then(t.bind(null,290)),Europe:t.e(19).then(t.bind(null,291)),Finland:t.e(20).then(t.bind(null,292)),France:t.e(24).then(t.bind(null,293)),France_Paris:t.e(21).then(t.bind(null,294)),France_SaintDenis:t.e(22).then(t.bind(null,295)),France_Strasbourg:t.e(23).then(t.bind(null,296)),Germany:t.e(26).then(t.bind(null,297)),Greece:t.e(27).then(t.bind(null,298)),Guatemala:t.e(28).then(t.bind(null,299)),Hungary:t.e(29).then(t.bind(null,300)),India:t.e(30).then(t.bind(null,301)),Ireland:t.e(31).then(t.bind(null,302)),Italy:t.e(32).then(t.bind(null,303)),Japan:t.e(33).then(t.bind(null,304)),Lebanon:t.e(34).then(t.bind(null,305)),Lithuania:t.e(35).then(t.bind(null,306)),Malta:t.e(36).then(t.bind(null,307)),Mexico:t.e(37).then(t.bind(null,308)),Netherlands:t.e(38).then(t.bind(null,309)),NewZealand:t.e(39).then(t.bind(null,310)),Norway:t.e(40).then(t.bind(null,311)),Panama:t.e(41).then(t.bind(null,312)),Paraguay:t.e(42).then(t.bind(null,313)),Peru:t.e(43).then(t.bind(null,314)),Philippines:t.e(44).then(t.bind(null,315)),Poland:t.e(45).then(t.bind(null,316)),Portugal:t.e(46).then(t.bind(null,317)),PuertoRico:t.e(47).then(t.bind(null,318)),Romania:t.e(48).then(t.bind(null,319)),Russia:t.e(49).then(t.bind(null,320)),Scotland:t.e(50).then(t.bind(null,321)),Slovakia:t.e(51).then(t.bind(null,322)),Slovenia:t.e(52).then(t.bind(null,323)),Spain:t.e(53).then(t.bind(null,324)),SriLanka:t.e(54).then(t.bind(null,325)),Sweden:t.e(55).then(t.bind(null,326)),Switzerland:t.e(56).then(t.bind(null,327)),Ukraine:t.e(57).then(t.bind(null,328)),UnitedStates:t.e(58).then(t.bind(null,329)),Uruguay:t.e(59).then(t.bind(null,330)),Venezuela:t.e(60).then(t.bind(null,331)),Vietnam:t.e(61).then(t.bind(null,332)),Wales:t.e(62).then(t.bind(null,333))};var C,k={romcalStore:new function e(){var n=this;Object(f.a)(this,e),this.fetchingData=!1,this.yearlyData=[],this.monthlyData=[],this.localeKey="En",this.calendarKey="GeneralRoman",this.currentYear=(new Date).getFullYear(),this.currentMonth=(new Date).getMonth(),this.fetchRomcalData=Object(x.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.yearlyData.length){e.next=10;break}return e.next=3,w[n.calendarKey];case 3:return e.t0="".concat(n.calendarKey,"_").concat(n.localeKey),t=e.sent[e.t0],a=new D.a({localizedCalendar:t}),e.next=8,a.generateCalendar(n.currentYear).then(Object.values);case 8:r=e.sent,Object(y.o)((function(){n.yearlyData=r}));case 10:return e.abrupt("return",Promise.resolve());case 11:case"end":return e.stop()}}),e)}))),this.getMonthData=function(){Object(y.o)((function(){return n.fetchingData=!0})),n.fetchRomcalData().then((function(){var e=n.yearlyData.filter((function(e){return new Date(e[0].date).getMonth()===n.currentMonth}));Object(y.o)((function(){n.monthlyData=e,n.fetchingData=!1}))}))},this.setCalendarKey=function(e){n.calendarKey=e,n.yearlyData=[],n.getMonthData()},this.setLocaleKey=function(e){n.localeKey=e,n.yearlyData=[],n.getMonthData()},this.setDate=function(e){var t=e.getFullYear();t!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=t,n.currentMonth=e.getMonth(),n.getMonthData()},this.setPreviousMonth=function(){var e=Object(g.a)(new Date(n.currentYear,n.currentMonth,1),1);e.getFullYear()!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=e.getFullYear(),n.currentMonth=e.getMonth(),n.getMonthData()},this.setNextMonth=function(){var e=Object(p.a)(new Date(n.currentYear,n.currentMonth,1),1);e.getFullYear()!==n.currentMonth&&(n.yearlyData=[]),n.currentYear=e.getFullYear(),n.currentMonth=e.getMonth(),n.getMonthData()},Object(y.l)(this)}},M=a.createContext(k),N=t(31),E=t(60),S=t(253),F=t(263),R=t(257),L=t(264),z=t(258),K=t(265),Y=t(137),P=t(14),A=t(1);function I(e){var n=e.color,t=e.colorName;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("span",{className:"color-ship ".concat(n.toLowerCase())}),Object(P.a)(t)]})}function W(e){var n=e.colors,t=e.colorNames;return Object(A.jsx)(A.Fragment,{children:n.map((function(e,n){return Object(A.jsxs)("span",{children:[n>0?", ":"",Object(A.jsx)(I,{color:e,colorName:t[n]},e)]},n)}))})}function B(e){var n=e.day,t=["SUNDAY","WEEKDAY"].includes(n.rank)?null:Object(P.a)(n.rankName),a=n.isHolyDayOfObligation&&0!==new Date(n.date).getDay()?"(Holy Day of Obligation)":null;return Object(A.jsxs)(V,{children:[Object(A.jsx)(W,{colors:n.colors,colorNames:n.colorNames}),n.colors.length&&t?",":""," ",t," ",a]})}var T,G,_,H,U,J,V=Object(j.a)("p")(C||(C=Object(o.a)(["\n  margin: 0;\n  font-family: 'EB Garamond', serif;\n  font-size: 0.9em;\n"]))),Z=t(131),$=t.n(Z),q=t(127),Q=t.n(q),X=function e(n){return Object(E.a)(Object(E.a)(Object(E.a)({key:n.key},n.customLocaleKey?{customLocaleKey:n.customLocaleKey}:{}),{},{name:n.name,date:n.date},n.dateExceptions?{dateExceptions:n.dateExceptions}:{}),{},{dateDef:n.dateDef,precedence:n.precedence,rank:n.rank,rankName:n.rankName,allowSimilarRankItems:n.allowSimilarRankItems,isHolyDayOfObligation:n.isHolyDayOfObligation,isOptional:n.isOptional,i18nDef:n.i18nDef,seasons:n.seasons,seasonNames:n.seasonNames,periods:n.periods,colors:n.colors,colorNames:n.colorNames,martyrology:n.martyrology,titles:n.titles,calendar:n.calendar,cycles:{properCycle:n.cycles.properCycle,properCycleName:n.cycles.properCycleName,sundayCycle:n.cycles.sundayCycle,sundayCycleName:n.cycles.sundayCycleName,weekdayCycle:n.cycles.weekdayCycle,weekdayCycleName:n.cycles.weekdayCycleName,psalterWeek:n.cycles.psalterWeek,psalterWeekName:n.cycles.psalterWeekName},fromCalendar:"ProperOfTime",fromExtendedCalendars:[]},n.weekday?{weekday:e(n.weekday)}:{})};function ee(e){var n=e.liturgicalDay,t=new Date(n[0].date);return Object(A.jsxs)(A.Fragment,{children:[1===t.getDate()&&Object(A.jsx)(ae,{children:Object(Y.a)(t,"MMMM yyyy")}),Object(A.jsxs)(S.a,{className:"dow-".concat(t.getDay()," date-in-month-").concat(t.getDate()),TransitionProps:{unmountOnExit:!0},children:[Object(A.jsx)(F.a,{expandIcon:Object(A.jsx)($.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(A.jsxs)(te,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",children:[Object(A.jsx)(R.a,{item:!0,xs:1,children:Object(A.jsx)(L.a,{children:Object(A.jsx)(z.a,{placement:"top-start",title:Object(Y.a)(t,"EEEE"),children:Object(A.jsx)(re,{children:t.getDate()})})})}),Object(A.jsx)(R.a,{item:!0,xs:!0,children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(ce,{className:n[0].rank.toLowerCase(),children:n[0].name}),Object(A.jsx)(B,{day:n[0]}),n.length>1&&n.slice(1).map((function(e){return Object(A.jsxs)("div",{children:[Object(A.jsxs)(le,{className:e.rank.toLowerCase(),children:[e.isOptional?Object(A.jsx)(ie,{children:"or: "}):Object(A.jsx)(A.Fragment,{}),e.name]},e.key),Object(A.jsx)(B,{day:e})]},e.key)}))]})})]})}),Object(A.jsx)(K.a,{children:Object(A.jsx)(Q.a,{src:n.map((function(e){return X(e)})),displayDataTypes:!1,shouldCollapse:function(e){var n;return["dateDef","i18nDef","weekday"].includes(null!==(n=e.name)&&void 0!==n?n:"")},name:n[0].date})})]})]})}var ne,te=Object(j.a)(R.a)(T||(T=Object(o.a)(["\n  margin: 5px 0;\n"]))),ae=Object(j.a)("h4")(G||(G=Object(o.a)(["\n  font-weight: 100;\n  font-family: 'Roboto', sans-serif;\n  font-size: 2em;\n"]))),re=Object(j.a)("h4")(_||(_=Object(o.a)(["\n  font-family: 'EB Garamond', serif;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: right;\n  width: 30px;\n  margin: 0;\n"]))),ce=Object(j.a)("h5")(H||(H=Object(o.a)(["\n  font-weight: 500;\n  font-family: 'EB Garamond', serif;\n  vertical-align: baseline;\n  line-height: 30px;\n  margin: 0;\n\n  &::before {\n    content: '';\n    font-size: 25px;\n  }\n"]))),le=Object(j.a)("h6")(U||(U=Object(o.a)(["\n  font-weight: 500;\n  font-family: 'EB Garamond', serif;\n  vertical-align: baseline;\n  line-height: 30px;\n  margin: 5px 0 0;\n\n  &::before {\n    content: '';\n    font-size: 25px;\n  }\n"]))),ie=Object(j.a)("span")(J||(J=Object(o.a)(["\n  font-size: 19px;\n  text-transform: none;\n  font-variant: normal;\n  font-weight: 400;\n"]))),oe=t(68),se=t(266);function de(){return Object(A.jsx)(Oe,{sx:{display:"flex"},children:Object(A.jsx)(se.a,{})})}var be,he,ue,je,Oe=Object(oe.a)(L.a)(ne||(ne=Object(o.a)(["\n  margin: 80px 0 50px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n"]))),me=Object(N.a)((function(e){var n=Object(a.useContext)(M).romcalStore,t=n.fetchingData,r=n.monthlyData;return 0!==r.length||t||n.getMonthData(),t?Object(A.jsx)(de,{}):Object(A.jsx)(xe,{children:r.map((function(e){return Object(A.jsx)(ee,{liturgicalDay:e},e[0].date)}))})})),xe=Object(j.a)("div")(be||(be=Object(o.a)(["\n  padding: 30px 10px;\n"]))),fe=t(267),ge=t(255),pe=t(244),ye=Object(N.a)((function(){var e=Object(a.useContext)(M).romcalStore,n=e.calendarKey,t=e.setCalendarKey;return Object(A.jsx)(L.a,{sx:{minWidth:120,marginRight:2},children:Object(A.jsxs)(fe.a,{fullWidth:!0,children:[Object(A.jsx)(ge.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"Calendar"}),Object(A.jsx)(pe.a,{id:"calendar",value:n,onChange:function(e){e.target.value&&t(e.target.value)},children:Object.keys(w).map((function(e){return Object(A.jsx)("option",{value:e,children:(n=e,Object(P.a)(n.replace(/_/g," / ").replace(/([A-Z])/g," $1").replace(/\s([a-z])/g,(function(e){return" ".concat(e.toUpperCase())}))))},e);var n}))})]})})})),ve=t(11),De=Object(N.a)((function(){var e=Object(a.useContext)(M).romcalStore,n=e.localeKey,t=e.setLocaleKey,r=D.a.LOCALE_KEYS.reduce((function(e,n,t){return e[D.a.LOCALE_VAR_NAMES[t]]=n,e}),{});return Object(A.jsx)(L.a,{sx:{minWidth:120},children:Object(A.jsxs)(fe.a,{fullWidth:!0,children:[Object(A.jsx)(ge.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"Locale"}),Object(A.jsx)(pe.a,{id:"calendar",value:n,onChange:function(e){t(e.target.value)},children:Object.entries(r).map((function(e){var n=Object(ve.a)(e,2),t=n[0],a=n[1];return Object(A.jsx)("option",{value:t,children:a},t)}))})]})})})),we=t(132),Ce=t.n(we),ke=t(133),Me=t.n(ke),Ne=t(249),Ee=t(268),Se=t(252),Fe=Object(N.a)((function(e){var n=Object(a.useContext)(M).romcalStore,t=n.currentYear,r=n.currentMonth;return Object(A.jsxs)(Re,{children:[Object(A.jsx)(L.a,{sx:{marginRight:1,marginTop:1},children:Object(A.jsx)(Ee.a,{"aria-label":"delete",color:"primary",onClick:function(){return n.setPreviousMonth()},children:Object(A.jsx)(Ce.a,{})})}),Object(A.jsx)(L.a,{sx:{minWidth:120},children:Object(A.jsx)(Ne.a,{label:"Month and Year",views:["year","month"],minDate:new Date("1969-01-01"),value:new Date(t,r,1),onChange:function(e){e&&n.setDate(e)},renderInput:function(e){return Object(A.jsx)(Se.a,Object(E.a)(Object(E.a)({},e),{},{variant:"standard",helperText:null}))}})}),Object(A.jsx)(L.a,{sx:{marginLeft:1,marginTop:1},children:Object(A.jsx)(Ee.a,{"aria-label":"delete",color:"primary",onClick:function(){return n.setNextMonth()},children:Object(A.jsx)(Me.a,{})})})]})})),Re=Object(oe.a)("div")(he||(he=Object(o.a)(["\n  margin-top: 20px;\n  display: inline-flex;\n"])));function Le(){return Object(A.jsxs)(Ke,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(Fe,{}),Object(A.jsxs)(Ye,{children:[Object(A.jsx)(ye,{}),Object(A.jsx)(De,{})]})]})}var ze,Ke=Object(j.a)(R.a)(ue||(ue=Object(o.a)(["\n  margin-bottom: 0;\n"]))),Ye=Object(j.a)("div")(je||(je=Object(o.a)(["\n  margin-top: 20px;\n  display: inline-flex;\n"]))),Pe=Object(N.a)((function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Le,{}),Object(A.jsx)(me,{})]})})),Ae=t(270);function Ie(){return Object(A.jsx)("a",{href:"./",children:Object(A.jsx)(Te,{src:"./romcal-logo.png",alt:"Romcal"})})}var We,Be,Te=Object(j.a)("img")(ze||(ze=Object(o.a)(["\n  max-height: 60px;\n  padding: 35px 20px 40px;\n"])));function Ge(){return Object(A.jsxs)(R.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(A.jsx)(Ie,{}),Object(A.jsxs)(Ue,{children:[Object(A.jsx)(Je,{href:"https://github.com/romcal/romcal/blob/dev/README.md",underline:"hover",children:"Documentation"}),Object(A.jsx)(Je,{href:"https://github.com/romcal/romcal",underline:"hover",children:"Source Code"})]})]})}var _e,He,Ue=Object(j.a)(L.a)(We||(We=Object(o.a)(["\n  margin: 20px 0;\n"]))),Je=Object(j.a)(Ae.a)(Be||(Be=Object(o.a)(["\n  text-transform: uppercase;\n  margin: 10px;\n  font-weight: bold;\n  font-size: 0.9em;\n"]))),Ve=t(134),Ze=t.n(Ve),$e=t(260);function qe(){return Object(A.jsxs)(en,{children:[Object(A.jsx)("p",{children:"A JavaScript library that generates liturgical calendars of the Roman Rite of the Roman Catholic Church."}),Object(A.jsx)(nn,{children:Object(A.jsx)($e.a,{variant:"outlined",href:"https://github.com/romcal/romcal",startIcon:Object(A.jsx)(Ze.a,{}),children:"See more"})})]})}var Qe,Xe,en=Object(j.a)("div")(_e||(_e=Object(o.a)(["\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n  font-size: 1.5em;\n  margin: 0 0 30px;\n  padding: 20px;\n  border-radius: 3px;\n  background-image: linear-gradient(135deg, #fcfaf8 0%, #faf7f4 100%);\n\n  > p {\n    margin: 0;\n    line-height: 1.4em;\n  }\n"]))),nn=Object(j.a)("p")(He||(He=Object(o.a)(["\n  text-align: right;\n  padding-top: 10px;\n"]))),tn=(t(190),Object(N.a)((function(){return Object(A.jsxs)(an,{children:["romcal v.",D.a.getVersion()]})}))),an=Object(j.a)("div")(Qe||(Qe=Object(o.a)(["\n  padding: 30px 10px;\n  text-align: center;\n  font-size: 0.8em;\n  color: #7f7f7f;\n  font-weight: 100;\n"]))),rn=Object(b.a)({palette:{primary:{light:"#ff5f3d",main:"#D02611",dark:"#970000",contrastText:"#000"},secondary:{light:"#4f5b62",main:"#263238",dark:"#000a12",contrastText:"#fff"}}});var cn=function(){return Object(A.jsx)(M.Provider,{value:k,children:Object(A.jsx)(d.b,{dateAdapter:s.a,children:Object(A.jsx)(h.a,{theme:rn,children:Object(A.jsxs)(ln,{maxWidth:"md",fixed:!0,children:[Object(A.jsx)(Ge,{}),Object(A.jsx)(qe,{}),Object(A.jsx)(Pe,{}),Object(A.jsx)(tn,{})]})})})})},ln=Object(j.a)(u.a)(Xe||(Xe=Object(o.a)(["\n  border-style: solid;\n  border-color: #fff;\n  border-width: 0;\n  border-left-width: thin;\n  border-right-width: thin;\n  background-color: rgba(255, 255, 2555, 0.9);\n  box-sizing: border-box;\n  min-height: 100vh;\n"])));l.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(cn,{})}),document.getElementById("root")),i()}},[[191,1,2]]]);
//# sourceMappingURL=main.c8d16e1d.chunk.js.map