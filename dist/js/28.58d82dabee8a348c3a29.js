webpackJsonp([28],{1346:function(t,a,e){var n=e(1347);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(32)("4a797610",n,!0,{})},1347:function(t,a,e){(t.exports=e(28)(!1)).push([t.i,".VueTables__search-field label{width:70px;text-align:left!important}",""])},1348:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(36),s=e.n(n),o=e(232),i=(e.n(o),e(233)),r=e.n(i),c=e(223),l=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};s.a.use(o.ClientTable,{},!1),s.a.use(r.a),a.default={name:"users",components:{},data:function(){return{columns:["id","name","email","created_at"],options:{sortIcon:{base:"fa",up:"fa fa-angle-up",down:"fa fa-angle-down"},perPage:10,highlightMatches:!0,pagination:{chunk:7,dropdown:!1}}}},computed:l({},Object(c.b)(["admins"])),created:function(){this.$store.dispatch("admins")}}},1349:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 mb-3"},[a("b-card",{staticClass:"bg-default-card data"},[a("v-client-table",{attrs:{data:this.admins,columns:this.columns,options:this.options}})],1)],1)])},staticRenderFns:[]}},1457:function(t,a,e){var n=e(48)(e(1348),e(1349),!1,function(t){e(1346)},null,null);t.exports=n.exports}});