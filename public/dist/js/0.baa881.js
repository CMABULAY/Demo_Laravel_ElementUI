(window.webpackJsonp=window.webpackJsonp||[]).push([[0,1],{14:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(3),i=n.n(o),s=n(6),c=n.n(s);function l(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){l(o,r,a,i,s,"next",t)}function s(t){l(o,r,a,i,s,"throw",t)}i(void 0)}))}}var d={data:function(){return{rules:[function(t){return!!t||"This is required"}],dialog:!1,table:[],progressbar:!1,menu:null,form:{id:null,title:null,description:null,remind_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},headers:[{width:"200",text:"Title",value:"title"},{width:"200",text:"Description",value:"description"},{width:"100",text:"Action",value:"id"}]}},created:function(){this.getData()},computed:{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.keys.filter((function(t){return"Name"!==t}))}},methods:{getData:function(){var t=this;return u(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progressbar=!0,e.next=3,i.a.get("/api/note/get").then((function(e){t.table=e.data,t.progressbar=!1}));case 3:case"end":return e.stop()}}),e)})))()},saveData:function(){var t=this;return u(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=3;break}return e.next=3,c.a.fire({title:"Do you want to save this data?",type:"question",showCancelButton:!0,confirmButtonColor:"#ce6666",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=u(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/note/save",t.form);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(e){e.value&&(c.a.fire({type:"success",title:"The data has been successfully saved.",html:""}),t.getData())}));case 3:case"end":return e.stop()}}),e)})))()},updateData:function(){var t=this;return u(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.validate()){e.next=3;break}return e.next=3,c.a.fire({title:"Do you want to update this data?",type:"question",showCancelButton:!0,confirmButtonColor:"#ce6666",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=u(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/note/update",t.form);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(e){e.value&&(c.a.fire({type:"success",title:"The data has been successfully updated.",html:""}),t.getData())}));case 3:case"end":return e.stop()}}),e)})))()},addData:function(){this.form={id:null,title:null,description:null,remind_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},this.dialog=!0},editData:function(t){console.log(t),this.form=t,this.form.remind_date=this.dateFormat(t.remind_date,"YYYY-MM-DD"),this.dialog=!0},deleteData:function(t){var e=this;return u(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.fire({title:"Do you want to delete this data?",type:"question",showCancelButton:!0,confirmButtonColor:"#ce6666",confirmButtonText:"Yes",cancelButtonText:"No",showLoaderOnConfirm:!0,preConfirm:function(){var e=u(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/note/delete",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),allowOutsideClick:function(){return!c.a.isLoading()}}).then((function(t){t.value&&(c.a.fire({type:"success",title:"The data has been successfully deleted.",html:""}),e.getData())}));case 2:case"end":return n.stop()}}),n)})))()},dateFormat:function(t,e){return moment(t).format(e)}}},f=(n(177),n(2)),v=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"none",color:"#ce6666"},attrs:{color:"#f8f2e0",large:""},on:{click:t.addData}},[n("v-icon",[t._v("mdi-plus")]),t._v(" New note")],1)],1),t._v(" "),n("v-data-table",{attrs:{loading:t.progressbar,height:"400",headers:t.headers,items:t.table},scopedSlots:t._u([{key:"item.id",fn:function(e){var r=e.item;return[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-btn",{staticClass:"px-1",class:a?"btn btn-primary text-white":"btn btn-link text-primary",attrs:{text:"",small:""},on:{click:function(e){return t.editData(r)}}},[n("small",[n("v-icon",{attrs:{size:"15"}},[t._v(" mdi-pencil ")]),t._v("\n            Edit\n          ")],1)])]}}],null,!0)}),t._v(" "),n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[n("v-btn",{staticClass:"px-1",class:a?"btn btn-danger text-white":"btn btn-link text-danger",attrs:{text:"",small:""},on:{click:function(e){return t.deleteData(r)}}},[n("small",[n("v-icon",{attrs:{size:"15"}},[t._v(" mdi-delete ")]),t._v("\n            Delete\n          ")],1)])]}}],null,!0)})]}}],null,!0)}),t._v(" "),n("v-dialog",{attrs:{id:"dialog1",persistent:"",elevation:"0",width:"600",height:"700"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-img",{staticStyle:{height:"600px",padding:"85px"},attrs:{src:"/img/login.png"}},[n("br"),t._v(" "),n("v-card",{staticClass:"transparent mx-auto",attrs:{height:"320",width:"530",flat:""}},[n("v-container",[n("v-form",{ref:"form"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title",outlined:"",rules:t.rules,dense:"","hide-details":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{rows:"4",label:"Description",outlined:"",dense:"","hide-details":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-menu",{ref:"menu",attrs:{rules:t.rules,"close-on-content-click":!1,"return-value":t.form.remind_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.form,"remind_date",e)},"update:return-value":function(e){return t.$set(t.form,"remind_date",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Remind me at","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.form.remind_date,callback:function(e){t.$set(t.form,"remind_date",e)},expression:"form.remind_date"}},"v-text-field",a,!1),r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.form.remind_date,callback:function(e){t.$set(t.form,"remind_date",e)},expression:"form.remind_date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                      Cancel\n                    ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.form.remind_date)}}},[t._v("\n                      OK\n                    ")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[t.form.id?n("v-btn",{staticClass:"orange",attrs:{dark:""},on:{click:t.updateData}},[t._v("Update")]):n("v-btn",{staticClass:"orange",attrs:{dark:""},on:{click:t.saveData}},[t._v("Save")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"white",on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports},161:function(t,e,n){var r=n(178);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(16)(r,a);r.locals&&(t.exports=r.locals)},177:function(t,e,n){"use strict";n(161)},178:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".v-dialog{box-shadow:none}",""])},22:function(t,e,n){"use strict";n.r(e);var r=n(11),a=n(14),o=n(6),i=n.n(o);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={metaInfo:function(){return{title:"Dashboard"}},components:{notelist:a.default},middleware:"auth",computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(r.b)({user:"auth/user"})),data:function(){return{data:""}},created:function(){this.user||this.$router.push({name:"login"}).catch((function(t){}))},methods:{otherPage:function(){i.a.fire({title:"Sorry, this page is unable for now.",html:"You can only access dashboard :)"})}}},u=n(2),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card-text",[n("v-row",[n("v-col",{attrs:{xl:"2",cols:"12"}},[n("v-btn",{staticClass:"m-1",staticStyle:{"text-transform":"none",color:"#ce6666"},attrs:{color:"#f8f2e0",large:""},on:{click:t.otherPage}},[n("v-icon",{attrs:{size:"15"}},[t._v("mdi-account")]),t._v(" My Profile")],1),t._v(" "),n("v-btn",{staticClass:"m-1",staticStyle:{"text-transform":"none",color:"#ce6666"},attrs:{color:"#f8f2e0",large:""},on:{click:t.otherPage}},[n("v-icon",{attrs:{size:"15"}},[t._v("mdi-hexagon")]),t._v(" Others")],1),t._v(" "),n("v-btn",{staticClass:"m-1",staticStyle:{"text-transform":"none",color:"#ce6666"},attrs:{color:"#f8f2e0",large:""},on:{click:t.otherPage}},[n("v-icon",{attrs:{size:"15"}},[t._v("mdi-hexagon")]),t._v(" Others")],1)],1),t._v(" "),n("v-col",{attrs:{xl:"10",cols:"12"}},[n("notelist")],1)],1),t._v(" "),n("v-card",{staticClass:" d-none transparent mx-auto text-white skewed pt-0",attrs:{flat:"",width:"450"}},[n("v-img",{staticStyle:{height:"400px",padding:"80px"},attrs:{src:"/img/login.png"}},[n("v-card",{staticClass:"transparent mx-auto",attrs:{height:"200",width:"430",flat:""}},[n("v-container",[n("h4",{staticClass:"text-dark"},[t._v("Hi "+t._s(t.user.name)+",")]),t._v(" "),n("span",{staticClass:"caption h4"},[t._v("\n                You don't have any todo list for today\n              ")])])],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",[t._v("ok")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);