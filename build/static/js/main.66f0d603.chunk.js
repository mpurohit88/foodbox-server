(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(44),c=a.n(r),i=a(157),o=a(159),s=a(158),u=(a(81),a(3)),m=a(4),d=a(6),h=a(5),p=a(7),E=a(2),f=(a(47),a(17)),b=a.n(f),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a.saveCustomer=a.saveCustomer.bind(Object(E.a)(Object(E.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(e,t){b()("api/getCustomers",{method:"GET"}).then(function(t){e(t.data)}).catch(function(e){console.log(e),t(e)})}).then(function(t){e.props.setCustomers(t)})}},{key:"saveCustomer",value:function(){var e,t=this,a={firstName:document.getElementById("FirstName_0").value,email:document.getElementById("Email_0").value,sex:document.getElementById("Sex_0").value,mobile:document.getElementById("Mobile_0").value,cityName:document.getElementById("CityName_0").value,remark:document.getElementById("Remark_0").value};(e=a,new Promise(function(t,a){b()("api/saveCustomer",{method:"POST",data:e}).then(function(e){t(e.data)}).catch(function(e){console.log(e),a(e)})})).then(function(e){t.props.setCustomers(e)})}},{key:"render",value:function(){var e=this;return[l.a.createElement("div",null,l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Sex"),l.a.createElement("th",null,"Mobile"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Remark"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"firstName",id:"FirstName_0"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"email",id:"Email_0"})),l.a.createElement("td",null,l.a.createElement("select",{id:"Sex_0"},l.a.createElement("option",{value:"M"},"Male"),l.a.createElement("option",{value:"F"},"Female"))),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"mobile",id:"Mobile_0"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"cityName",id:"CityName_0"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"remark",id:"Remark_0"})),l.a.createElement("td",null,l.a.createElement("input",{type:"button",id:"AddCustomer",value:"Add Customer",onClick:this.saveCustomer}))),this.props.customers&&this.props.customers.map(function(t,a){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"firstName",id:"FirstName_".concat(a)},t.FirstName)),l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"email",id:"Email_".concat(a)},t.Email)),l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"sex",id:"Sex_".concat(a)},t.Sex)),l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"mobile",id:"Mobile_".concat(a)},t.Mobile)),l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"cityName",id:"CityName_".concat(a)},t.CityName)),l.a.createElement("td",null,l.a.createElement("label",{type:"text",name:"remark",id:"Remark_".concat(a)},t.Remark)),l.a.createElement("td",null,l.a.createElement("input",{type:"button",name:"schedule",id:"Schedule_".concat(a),value:"Schedule",onClick:function(){return e.props.openDialog(t._id)}})))}))))]}}]),t}(n.Component),v=a(45),g=a.n(v),k=a(28),_=a.n(k),N=a(45),S=function(e,t){return N(t+"-"+(e+=1)).daysInMonth()},w=function(){return N()},C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={isDialogOpen:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleCheckboxClick",value:function(e,t){4===e&&(document.getElementById("BreakFast_"+t).checked?(document.getElementById("Amount_BreakFast_"+t).value="20",document.getElementById("Quantity_BreakFast_"+t).value="1"):(document.getElementById("Amount_BreakFast_"+t).value="",document.getElementById("Quantity_BreakFast_"+t).value="")),1===e&&(document.getElementById("Launch_"+t).checked?(document.getElementById("Amount_Launch_"+t).value="40",document.getElementById("Quantity_Launch_"+t).value="1"):(document.getElementById("Amount_Launch_"+t).value="",document.getElementById("Quantity_Launch_"+t).value="")),2===e&&(document.getElementById("Dinner_"+t).checked?(document.getElementById("Amount_Dinner_"+t).value="40",document.getElementById("Quantity_Dinner_"+t).value="1"):(document.getElementById("Amount_Dinner_"+t).value="",document.getElementById("Quantity_Dinner_"+t).value=""))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("span",null,"Break Fast:"),l.a.createElement("input",{type:"checkbox",name:"breakFast",id:"BreakFast_"+this.props.id,value:"Break Fast",defaultChecked:this.props.tiffin.breakFast?"checked":"",onClick:function(){return e.handleCheckboxClick(4,e.props.id)}}),l.a.createElement("input",{type:"text",name:"amount",id:"Amount_BreakFast_"+this.props.id,defaultValue:this.props.tiffin.breakFast?this.props.tiffin.breakFast.amount:"",size:"5"})," \xa0",l.a.createElement("input",{type:"text",name:"quantity",id:"Quantity_BreakFast_"+this.props.id,defaultValue:this.props.tiffin.breakFast?this.props.tiffin.breakFast.qty:"1",size:"5"})," \xa0",l.a.createElement("span",null,"Launch:"),l.a.createElement("input",{type:"checkbox",name:"launch",id:"Launch_"+this.props.id,value:"Launch",defaultChecked:this.props.tiffin.launch?"checked":"",onClick:function(){return e.handleCheckboxClick(1,e.props.id)}}),l.a.createElement("input",{type:"text",name:"amount",id:"Amount_Launch_"+this.props.id,defaultValue:this.props.tiffin.launch?this.props.tiffin.launch.amount:"",size:"5"})," \xa0",l.a.createElement("input",{type:"text",name:"quantity",id:"Quantity_Launch_"+this.props.id,defaultValue:this.props.tiffin.launch?this.props.tiffin.launch.qty:"1",size:"5"})," \xa0",l.a.createElement("span",null,"Dinner:"),l.a.createElement("input",{type:"checkbox",name:"dinner",id:"Dinner_"+this.props.id,value:"Dinner",defaultChecked:this.props.tiffin.dinner?"checked":"",onClick:function(){return e.handleCheckboxClick(2,e.props.id)}}),l.a.createElement("input",{type:"text",name:"amount",id:"Amount_Dinner_"+this.props.id,defaultValue:this.props.tiffin.dinner?this.props.tiffin.dinner.amount:"",size:"5"})," \xa0",l.a.createElement("input",{type:"text",name:"quantity",id:"Quantity_Dinner_"+this.props.id,defaultValue:this.props.tiffin.dinner?this.props.tiffin.dinner.qty:"1",size:"5"})," \xa0")}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"_updateSchedule",value:function(){var e=this.props,t=[];document.getElementById("BreakFast_Update").checked&&t.push({tiffinType:"4",amount:document.getElementById("Amount_BreakFast_Update").value,qty:document.getElementById("Quantity_BreakFast_Update").value}),document.getElementById("Launch_Update").checked&&t.push({tiffinType:"1",amount:document.getElementById("Amount_Launch_Update").value,qty:document.getElementById("Quantity_Launch_Update").value}),document.getElementById("Dinner_Update").checked&&t.push({tiffinType:"2",amount:document.getElementById("Amount_Dinner_Update").value,qty:document.getElementById("Quantity_Dinner_Update").value});var a,n={_id:e._id,customerId:e.customerId,index:e.index,date:e.date,bill:t};(a=n,new Promise(function(e,t){b()("api/updateSchedule",{method:"POST",data:a}).then(function(t){e(t.data)}).catch(function(e){console.log(e),t(e)})})).then(function(t){e.handleClose(),e.setSchedule(t),console.log("updated.................",t)})}},{key:"render",value:function(){var e=this;return[l.a.createElement(_.a,{title:"Update Schedule",modal:!0,onClose:this.props.handleClose,buttons:[{text:"Close",onClick:function(){return e.props.handleClose()}}]},l.a.createElement("h3",null,this.props.date),l.a.createElement(C,{id:"Update",tiffin:this.props.tiffin}),"\xa0\xa0\xa0 ",l.a.createElement("br",null),l.a.createElement("input",{type:"button",name:"updateSchedule",id:"UpdateShedule",value:"Update",onClick:function(){return e._updateSchedule()}}))]}}]),t}(n.Component),B=[{text:"Amount:",main:"$20,000.00",icon:"fa fa-money"},{text:"Shipping Address:",main:"123 Los Olas Blvd, Ste. 101, Fort Lauderdale, FL 33301 USA",icon:"fa fa-map-marker"},{text:"Issuer:",main:"Allied Steel Buildings",icon:"fa fa-star-o"},{text:"Confirmation No:",main:"878NJDBW8Y9",icon:"fa fa-list-alt"}],I=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).printBill=function(){window.print()},e.state={breakdown:{}},e.printBill=e.printBill.bind(Object(E.a)(Object(E.a)(e))),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.setState({breakdown:B})}},{key:"render",value:function(){return l.a.createElement("div",{className:"receipt"},l.a.createElement("table",{className:"receipt-table",cellspacing:"0",rowspacing:"0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"left-section head"}),l.a.createElement("th",{className:"right-section"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",{className:"recipt-logo"},"FudBocs")," ",l.a.createElement("br",null)," 11/517 ",l.a.createElement("br",null)," Chopasani Housing Board ",l.a.createElement("br",null)," Jodhpur, Rajasthan 342008 ",l.a.createElement("br",null)," India"),l.a.createElement("div",{className:"float-right"},l.a.createElement("img",{src:"./images/foodbox_public_boot_images_logo.png",className:"height-115"}),l.a.createElement("div",{className:"reciept-tag"},"Accha Khao Accha Khilao")))))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"To,")),l.a.createElement("div",{className:"float-right"})))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},"Mukesh Purohit"),l.a.createElement("div",{className:"float-right"},l.a.createElement("strong",null,"Currency:")," INR")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},"Jodhpur, Rani Station "),l.a.createElement("div",{className:"float-right"},l.a.createElement("strong",null,"Issue Date:")," 23/23/2323")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},"  asdkfasldf, asdfasdf"),l.a.createElement("div",{className:"float-right"},l.a.createElement("strong",null,"Due Date:")," 12/12/1212")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"},"234213123"),l.a.createElement("div",{className:"float-right"}," ")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("strong",{className:"reciept-invoice-font"},"INVOICE #100"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right receipt-row-border-bottom"},l.a.createElement("table",null,l.a.createElement("th",null,l.a.createElement("td",{className:"width-160"},"Item"),l.a.createElement("td",{className:"width-400"},"Quantity"),l.a.createElement("td",{className:"width-160"},"Price"),l.a.createElement("td",{className:"width-160"},"Total"))))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"},"1."),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"width-160"},"Tiffin"),l.a.createElement("td",{className:"width-400"},"13"),l.a.createElement("td",{className:"width-160"},"$50.00"),l.a.createElement("td",{className:"width-160"},"$500.00"))))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right receipt-row-border-top"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"}),l.a.createElement("div",{className:"float-right"}," ",l.a.createElement("strong",null,"TOTAL:")," $1231.03")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right receipt-row-border-bottom"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"}),l.a.createElement("div",{className:"float-right"}," ",l.a.createElement("strong",null,"PAID:")," $0.00")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right receipt-row-border-bottom-red"},l.a.createElement("div",null,l.a.createElement("div",{className:"float-left"}),l.a.createElement("div",{className:"float-right"}," ",l.a.createElement("strong",null,"AMOUNT DUE:")," $12312.22")))),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})),l.a.createElement("tr",null,l.a.createElement("td",{className:"left-section receipt-row-border-left"}),l.a.createElement("td",{className:"right-section receipt-row-border-right"})))))}}]),t}(l.a.Component),j=(l.a.Component,function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.details;return l.a.createElement("li",null,l.a.createElement("span",{className:e.icon}),l.a.createElement("div",{className:"list-content"},l.a.createElement("p",null,e.text,l.a.createElement("span",{className:"list-bold"},e.main))))}}]),t}(l.a.Component)),D=(l.a.Component,function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"overview-header"},l.a.createElement("img",{className:"logo",src:this.props.logo}),l.a.createElement("div",{className:"timestamp"},l.a.createElement("span",null,"20 Deccember, 2016"),l.a.createElement("span",null,"08:30:57 EST")),l.a.createElement("hr",null))}}]),t}(l.a.Component)),x=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"purchase-overview"},l.a.createElement("h3",null,this.props.product))}}]),t}(l.a.Component),F=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"overview-body"},l.a.createElement(x,this.props),l.a.createElement("div",{className:"user-info"},l.a.createElement("p",{className:"user-info-name"}," Hello ",this.props.name,","),l.a.createElement("p",{className:"user-info-text"}," You sent a payment of ",l.a.createElement("span",null,this.props.value)," to ",this.props.merchant,". (",l.a.createElement("a",{href:"mailto: info@alliedbuildings.com"},this.props.merchantEmail),").  One of our experienced project managers will be in touch with you shortly to review your building specifications."),l.a.createElement("p",null,"Thank you for choosing Allied."),l.a.createElement("p",{className:"salutation"},l.a.createElement("img",{src:"https://ec2-52-40-174-59.us-west-2.compute.amazonaws.com/banners/about_us_pic.png"}))),l.a.createElement("div",{className:"descriptor"},l.a.createElement("p",null,"It may take a few moments for this transaction to appear in your account")))}}]),t}(l.a.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"overview-footer"},l.a.createElement("span",{className:"site"},l.a.createElement("a",{href:"http://www.alliedbuildings.com/contact-us/",target:"_blank"},"www.allied.build/help")),l.a.createElement("span",{className:"invoice-id"},"+1.877.94 STEEL"))}}]),t}(l.a.Component),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).printBill=function(){localStorage.setItem("pageData","Data Retrieved from axios request"),window.open("http://localhost:3000/reciept","_blank")},a.setSchedule=function(e){a.setState({schedule:e})},a.createCalendar=function(e){for(var t=S(e.month(),e.year()),n=[],r=[],c=e.startOf("month").get("day"),i=1;i<c;i++)r.push(l.a.createElement("td",null));c=8-c;for(var o=function(t){var i=a.isDateExistInSchedule(t,e.month()+1,e.year());t%c===0?(c+=7,r.push(l.a.createElement("td",{className:i&&i.colorCode,onClick:function(){return a.updateSchedule(i&&i.index,t,e)}},t)),n.push(l.a.createElement("tr",null,r)),r=[]):r.push(l.a.createElement("td",{className:i&&i.colorCode,onClick:function(){return a.updateSchedule(i&&i.index,t,e)}},t))},s=1;s<=t;s++)o(s);return r.length>0&&n.push(l.a.createElement("tr",null,r)),n},a.state={showDialog:!1,printBill:!1,showSchedulerInput:!1},a.saveShedule=a.saveShedule.bind(Object(E.a)(Object(E.a)(a))),a._getSchedule=a._getSchedule.bind(Object(E.a)(Object(E.a)(a))),a.handleClose=a.handleClose.bind(Object(E.a)(Object(E.a)(a))),a.printBill=a.printBill.bind(Object(E.a)(Object(E.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"saveShedule",value:function(){var e=this,t=[];document.getElementById("BreakFast_Schedule").checked&&t.push({tiffinType:"4",amount:document.getElementById("Amount_BreakFast_Schedule").value,qty:document.getElementById("Quantity_BreakFast_Schedule").value}),document.getElementById("Launch_Schedule").checked&&t.push({tiffinType:"1",amount:document.getElementById("Amount_Launch_Schedule").value,qty:document.getElementById("Quantity_Launch_Schedule").value}),document.getElementById("Dinner_Schedule").checked&&t.push({tiffinType:"2",amount:document.getElementById("Amount_Dinner_Schedule").value,qty:document.getElementById("Quantity_Dinner_Schedule").value});var a,n={startDate:document.getElementById("StartDate").value,endDate:document.getElementById("EndDate").value,customerId:this.props.customerId,isWeekend:document.getElementById("Yes").checked,bill:t};(a=n,new Promise(function(e,t){b()("api/saveSchedule",{method:"POST",data:a}).then(function(t){e(t.data)}).catch(function(e){console.log(e),t(e)})})).then(function(t){console.log("Schedule.............",t),e.setState({schedule:t})})}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return e.customerId!==this.props.customerId&&this._getSchedule(),!1}},{key:"componentDidMount",value:function(){var e=new Date;document.querySelector("#StartDate")&&(document.querySelector("#StartDate").valueAsDate=new Date(e.getFullYear(),e.getMonth(),2)),document.querySelector("#EndDate")&&(document.querySelector("#EndDate").valueAsDate=new Date(e.getFullYear(),e.getMonth()+1,1)),this._getSchedule()}},{key:"handleClose",value:function(){this.setState({showDialog:!1})}},{key:"updateSchedule",value:function(e,t,a){var n=a.year()+"-"+(a.month()+1)+"-"+t,l={};this.state.schedule.monthSchedule.map(function(e){e.date===n&&(l=e.tiffin)}),this.setState({showDialog:!0,index:e,date:n,tiffin:l})}},{key:"_getSchedule",value:function(e){var t,a=this;(t={customerId:this.props.customerId,date:e},new Promise(function(e,a){b()("api/getSchedule?customerId="+t.customerId+"&date"+t.date,{method:"GET"}).then(function(t){e(t.data)}).catch(function(e){console.log(e),a(e)})})).then(function(e){console.log("Schedule.............",e),e.monthSchedule?a.setState({schedule:e,showSchedulerInput:!1}):a.setState({showSchedulerInput:!0})})}},{key:"isDateExistInSchedule",value:function(e,t,a){var n=void 0;return this.state.schedule&&(this.state.schedule.monthSchedule||[]).map(function(l,r){g()(a+"-"+t+"-"+e).isSame(l.date)&&l.tiffin&&(l.tiffin.launch&&l.tiffin.dinner?n={colorCode:"both",index:r}:l.tiffin.launch?n={colorCode:"launch",index:r}:l.tiffin.dinner&&(n={colorCode:"dinner",index:r}))}),n}},{key:"render",value:function(){var e=this;return l.a.createElement(_.a,{title:"Manage Schedule",modal:!0,onClose:this.props.handleClose,buttons:[{text:"Close",onClick:function(){return e.props.handleClose()}}]},l.a.createElement("br",null),this.state.showSchedulerInput&&l.a.createElement("div",null,"Start Date: ",l.a.createElement("input",{type:"date",name:"startDate",id:"StartDate"})," \xa0 End Date: ",l.a.createElement("input",{type:"date",name:"endDate",id:"EndDate"})," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C,{id:"Schedule",tiffin:{breakFast:{amount:40,qty:1},launch:{amount:40,qty:1},dinner:{amount:40,qty:1}}})," \xa0 \xa0",l.a.createElement("br",null),l.a.createElement("label",null,"Include Weekends:")," \xa0",l.a.createElement("input",{type:"radio",id:"Yes",name:"drone",value:"yes",checked:!0}),l.a.createElement("label",{htmlFor:"Yes"},"Yes"),"\xa0",l.a.createElement("input",{type:"radio",id:"No",name:"drone",value:"no"}),l.a.createElement("label",{htmlFor:"No"},"No")," ",l.a.createElement("br",null)),void 0===this.state.showSchedulerInput?l.a.createElement("input",{type:"button",name:"printBill",id:"PrintBill",value:"Print Bill",onClick:function(){return e.printBill()}}):l.a.createElement("input",{type:"button",name:"saveSchedule",id:"SaveShedule",value:"Save",onClick:function(){return e.saveShedule()}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"month"},l.a.createElement("ul",null,l.a.createElement("li",{className:"prev"},"\u276e"),l.a.createElement("li",{className:"next"},"\u276f"),l.a.createElement("li",null,["January","February","March","April","May","June","July","August","September","October","November","December"][w().month()],l.a.createElement("br",null),l.a.createElement("span",null,w().year())))),l.a.createElement("table",{className:"weekdays"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Mo"),l.a.createElement("td",null,"Tu"),l.a.createElement("td",null,"We"),l.a.createElement("td",null,"Th"),l.a.createElement("td",null,"Fr"),l.a.createElement("td",null,"Sa"),l.a.createElement("td",null,"Su"))),l.a.createElement("tbody",{className:"days"},this.createCalendar(w()))),this.state.showDialog&&l.a.createElement(O,{index:this.state.index,_id:this.state.schedule._id,tiffin:this.state.tiffin,customerId:this.props.customerId,date:this.state.date,setSchedule:this.setSchedule,handleClose:function(){return e.handleClose()}}))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).openDialog=function(e){return a.setState({isDialogOpen:!0,customerId:e})},a.handleClose=function(){return a.setState({isDialogOpen:!1})},a.state={isDialogOpen:!1},a.setCustomers=a.setCustomers.bind(Object(E.a)(Object(E.a)(a))),a.filterCustomer=a.filterCustomer.bind(Object(E.a)(Object(E.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("#Date_Search").valueAsDate=new Date}},{key:"resetCustomer",value:function(){var e=this.state.originalList.slice();this.setState({customers:e,originalList:e})}},{key:"setCustomers",value:function(e){this.setState({customers:e,originalList:e})}},{key:"filterCustomer",value:function(e){var t,a=this,n=this.state.originalList.slice(),l=document.getElementById("FirstName_Search").value,r=document.getElementById("Address_Search").value,c=document.getElementById("Date_Search").value;document.getElementById("Launch_Search").checked&&document.getElementById("Dinner_Search").checked?t="3":document.getElementById("Launch_Search").checked?t="1":document.getElementById("Dinner_Search").checked?t="2":document.getElementById("BreakFast_Search").checked&&(t="4");var i=[],o=!0;e?function(e,t){return new Promise(function(a,n){b()("api/filterCustomer?date="+e+"&tiffinType="+t,{method:"GET"}).then(function(e){a(e.data)}).catch(function(e){console.log(e),n(e)})})}(c,t).then(function(e){var c=[];n.map(function(e){o=!0,""!==l&&-1===e.FirstName.toLowerCase().indexOf(l.toLowerCase())&&(o=!1),""!==r&&-1===e.CityName.toLowerCase().indexOf(r.toLowerCase())&&(o=!1),e.TiffinType&&""!==t&&-1===e.TiffinType.indexOf(t)&&(o=!1),o&&c.push(e)}),c.map(function(t){o=!1,e&&e.length>0&&(e.map(function(e){t._id===e.CustomerId&&(o=!0)}),o&&i.push(t))}),a.setState({customers:i})}):(n.map(function(e){o=!0,""!==l&&-1===e.FirstName.toLowerCase().indexOf(l.toLowerCase())&&(o=!1),""!==r&&-1===e.CityName.toLowerCase().indexOf(r.toLowerCase())&&(o=!1),e.TiffinType&&""!==t&&-1===e.TiffinType.indexOf(t)&&(o=!1),o&&i.push(e)}),this.setState({customers:i}))}},{key:"render",value:function(){var e=this;return console.log("customes.........",this.state.customers),[l.a.createElement("div",{className:"App"},"Welcome Admin ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("strong",null,"Filter: "),"Name: ",l.a.createElement("input",{type:"text",id:"FirstName_Search",onChange:function(){return e.filterCustomer(!0)}}),"\xa0 Address: ",l.a.createElement("input",{type:"text",id:"Address_Search",onChange:function(){return e.filterCustomer(!0)}}),"\xa0 ",l.a.createElement("input",{type:"checkbox",name:"breakFast",id:"BreakFast_Search",value:"Break Fast"})," Break Fast | \xa0 ",l.a.createElement("input",{type:"checkbox",name:"launch",id:"Launch_Search",value:"Break Fast"})," Launch | \xa0 ",l.a.createElement("input",{type:"checkbox",name:"dinner",id:"Dinner_Search",value:"Break Fast"})," Dinner | \xa0 Date: ",l.a.createElement("input",{type:"date",id:"Date_Search",min:"2018-11-30"}),"\xa0 ",l.a.createElement("input",{type:"button",id:"Search",value:"Search",onClick:function(){return e.filterCustomer(!0)}}),"\xa0 ",l.a.createElement("input",{type:"button",id:"Reset",value:"Reset",onClick:function(){return e.resetCustomer()}}),l.a.createElement("hr",null),l.a.createElement(y,{setCustomers:this.setCustomers,customers:this.state.customers,openDialog:this.openDialog}),this.state.isDialogOpen&&l.a.createElement(L,{handleClose:this.handleClose,customerId:this.state.customerId}))]}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(i.a,null,l.a.createElement("main",null,l.a.createElement(o.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:T}),l.a.createElement(s.a,{path:"/reciept",component:I})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){},76:function(e,t,a){e.exports=a(155)},81:function(e,t,a){}},[[76,2,1]]]);
//# sourceMappingURL=main.66f0d603.chunk.js.map