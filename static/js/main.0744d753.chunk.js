(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},22:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(21),i=a.n(r),c=(a(10),a(2)),o=a(3),s=a(5),m=a(4),d=a(7),u=a(6),p=a(8),b=a.n(p),f=(a(11),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"header-wrapper"},n.a.createElement("div",{id:"header",className:"container"},n.a.createElement("div",{id:"logo"},n.a.createElement("h1",null,"ForgetMeNot"),n.a.createElement("span",null,"Bill reminder app"))))}}]),t}(n.a.Component)),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).updateBillType=function(e){a.setState({billType:e.target.value})},a.updateEmailAdd=function(e){a.setState({emailAdd:e.target.value})},a.updateBillProvider=function(e){a.setState({billProvider:e.target.value})},a.updateRenewalDate=function(e){a.setState({renewalDate:e.target.value})},a.addNewBillFn=function(){a.props.addNewBillFunc(a.state.billType,a.state.renewalDate,a.state.billProvider,a.state.emailAdd)},a.state={billType:e.myFormFields.billType,emailAdd:e.myFormFields.emailAdd,billProvider:e.myFormFields.billProvider,renewalDate:e.myFormFields.renewalDate,categories:e.categories},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=this.state.categories;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"AddForm card mb-5"},n.a.createElement("div",{className:"card-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"exampleFormControlSelect1"},"Bill Type"),n.a.createElement("select",{className:"form-control",id:"exampleFormControlSelect1",onChange:this.updateBillType,value:t.billType},n.a.createElement("option",null,"Select a category"),a.map((function(e,t){return n.a.createElement("option",{value:e.id,key:t},e.name)})))),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"renewalDateInput"},"Renewal Date"),n.a.createElement("input",{id:"renewalDateInput",type:"date",onChange:this.updateRenewalDate,value:t.renewalDate,className:"form-control"}))),n.a.createElement("div",{className:"form-row"},n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"nameOfBillProviderInput"},"Name of Bill Provider"),n.a.createElement("input",{id:"nameOfBillProviderInput",type:"text",onChange:this.updateBillProvider,value:t.billProvider,className:"form-control",placeholder:"Type company here",autoComplete:"off"})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"emailInput"},"Email address"),n.a.createElement("input",{id:"emailInput",type:"email",onChange:this.updateEmailAdd,value:t.emailAdd,className:"form-control",placeholder:"name@example.com"}))),n.a.createElement("button",{type:"button",onClick:function(){return e.addNewBillFn()},className:"btn btn-primary btn-block"},"Add")))))}}]),t}(n.a.Component),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).categories=function(e){if(e)return a.props.categoriesFunc(e)},a.deleteBillFn=function(e){a.props.deleteFunc(e)},a.updateSortOrderAsc=function(){a.props.sortOrderFn("asc")},a.updateSortOrderDesc=function(){a.props.sortOrderFn("desc")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.bills;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-striped table table-hover table table-sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Bill Type"),n.a.createElement("th",{scope:"col"},"Name of Bill Provider"),n.a.createElement("th",{scope:"col"},"Renewal Date",n.a.createElement("button",{onClick:this.updateSortOrderAsc},n.a.createElement("i",{className:"fas fa-sort-up"})),n.a.createElement("button",{onClick:this.updateSortOrderDesc},n.a.createElement("i",{className:"fas fa-sort-down"}))),n.a.createElement("th",{scope:"col"},"Delete"))),n.a.createElement("tbody",null,t.map((function(t,a){var l=e.categories(t.billType);return n.a.createElement("tr",{key:a},n.a.createElement("th",{scope:"row"},n.a.createElement("i",{className:l.icon})," ",l.name),n.a.createElement("td",null,t.billProvider),n.a.createElement("td",null,t.renewalDate.split("T")[0]),n.a.createElement("td",null,n.a.createElement("button",{type:"button",onClick:function(){return e.deleteBillFn(t.billId)},className:"btn"},n.a.createElement("i",{className:"fa fa-trash"}))))}))))))}}]),t}(n.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={categories:e.categories},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.categories;return n.a.createElement("div",{id:"buttons",className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col text-center"},e.map((function(e,t){return n.a.createElement("button",{key:t,className:"btn btn-info btn-circle btn-sm m-1",title:e.name},n.a.createElement("i",{className:e.icon}))})))))}}]),t}(n.a.Component),w=a(9),y=a.n(w),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).updateSortOrder=function(t){e.setState({sortOrder:t})},e.addNewBill=function(t,a,l,n){var r=e.state.billList,i={billType:parseInt(t),renewalDate:a,billProvider:l,emailAdd:n,userId:e.getUserId()};b.a.post("https://0w2rty5zca.execute-api.eu-west-1.amazonaws.com/dev/bills",i).then((function(t){var a=r;i.billId=t.data.bill.billId,a.slice(),a.push(i),e.setState({billList:a}),y.a.success("Bill added"),e.resetForm()})).catch((function(e){console.log(e)}))},e.resetForm=function(){e.setState({formFields:{billType:null,renewalDate:"",billProvider:"",emailAdd:""}})},e.categories=function(e){var t=[{id:1,name:"Insurance",icon:"fas fa-car-crash"},{id:2,name:"Car",icon:"fas fa-car"},{id:3,name:"Home",icon:"fas fa-home"},{id:4,name:"Phone",icon:"fas fa-phone"},{id:5,name:"Broadband",icon:"fas fa-wifi"},{id:6,name:"Others",icon:"fa fa-search"}];if(e){var a={};return t.forEach((function(t){e===t.id&&(a=t)})),a}return t},e.deleteBill=function(t){var a=Object(d.a)(e);y.a.confirm("Are you sure you want to delete this bill?",(function(){a.deleteBillConfirm(t)}))},e.deleteBillConfirm=function(t){b.a.delete("https://0w2rty5zca.execute-api.eu-west-1.amazonaws.com/dev/bills/".concat(t));var a=e.state.billList.filter((function(e){return e.billId!==t}));e.setState({billList:a}),y.a.error("Bill deleted")},e.getUserId=function(){return 1},e.state={billList:[],formFields:{billType:"",renewalDate:"",billProvider:"",emailAdd:""},sortOrder:null},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://0w2rty5zca.execute-api.eu-west-1.amazonaws.com/dev/bills").then((function(t){var a=t.data.bills;e.setState({billList:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.categories(),t=this.state.billList,a=this.state.formFields,l=this.state.sortOrder;return null!==l&&("desc"===l?t.sort((function(e,t){return new Date(t.renewalDate)-new Date(e.renewalDate)})):t.sort((function(e,t){return new Date(e.renewalDate)-new Date(t.renewalDate)}))),n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(h,{addNewBillFunc:this.addNewBill,myFormFields:a,categories:e}),n.a.createElement(E,{categories:e}),n.a.createElement(v,{bills:t,categoriesFunc:this.categories,deleteFunc:this.deleteBill,sortOrderFn:this.updateSortOrder}))}}]),t}(n.a.Component);i.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0744d753.chunk.js.map