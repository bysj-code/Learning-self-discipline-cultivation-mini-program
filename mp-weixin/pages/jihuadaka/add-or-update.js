(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jihuadaka/add-or-update"],{"28df":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,n,a,r,u){try{var s=t[r](u),o=s.value}catch(h){return void e(h)}s.done?i(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var i=this,e=arguments;return new Promise((function(n,a){var u=t.apply(i,e);function s(t){r(u,n,a,s,o,"next",t)}function o(t){r(u,n,a,s,o,"throw",t)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("5dc4"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{jihuabiaoti:"",jihuatupian:"",kaishiriqi:"",jihuaneirong:"",jieshushijian:"",jihuatianshu:"",wanchengdu:"",dakariqi:"",dakatianshu:"",zhanghao:"",xingming:"",userid:""},wanchengduOptions:[],wanchengduIndex:0,user:{},ro:{jihuabiaoti:!1,jihuatupian:!1,kaishiriqi:!1,jihuaneirong:!1,jieshushijian:!1,jihuatianshu:!1,wanchengdu:!1,dakariqi:!1,dakatianshu:!1,zhanghao:!1,xingming:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(n.default.mark((function i(e){var a,r,u,s;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.kaishiriqi=this.$utils.getCurDate(),a=t.getStorageSync("nowTable"),i.next=4,this.$api.session(a);case 4:if(r=i.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.wanchengduOptions="未完成,完成".split(","),this.ruleForm.userid=t.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!e.id){i.next=17;break}return this.ruleForm.id=e.id,i.next=15,this.$api.info("jihuadaka",this.ruleForm.id);case 15:r=i.sent,this.ruleForm=r.data;case 17:if(!e.cross){i.next=72;break}u=t.getStorageSync("crossObj"),i.t0=n.default.keys(u);case 20:if((i.t1=i.t0()).done){i.next=72;break}if(s=i.t1.value,"jihuabiaoti"!=s){i.next=26;break}return this.ruleForm.jihuabiaoti=u[s],this.ro.jihuabiaoti=!0,i.abrupt("continue",20);case 26:if("jihuatupian"!=s){i.next=30;break}return this.ruleForm.jihuatupian=u[s],this.ro.jihuatupian=!0,i.abrupt("continue",20);case 30:if("kaishiriqi"!=s){i.next=34;break}return this.ruleForm.kaishiriqi=u[s],this.ro.kaishiriqi=!0,i.abrupt("continue",20);case 34:if("jihuaneirong"!=s){i.next=38;break}return this.ruleForm.jihuaneirong=u[s],this.ro.jihuaneirong=!0,i.abrupt("continue",20);case 38:if("jieshushijian"!=s){i.next=42;break}return this.ruleForm.jieshushijian=u[s],this.ro.jieshushijian=!0,i.abrupt("continue",20);case 42:if("jihuatianshu"!=s){i.next=46;break}return this.ruleForm.jihuatianshu=u[s],this.ro.jihuatianshu=!0,i.abrupt("continue",20);case 46:if("wanchengdu"!=s){i.next=50;break}return this.ruleForm.wanchengdu=u[s],this.ro.wanchengdu=!0,i.abrupt("continue",20);case 50:if("dakariqi"!=s){i.next=54;break}return this.ruleForm.dakariqi=u[s],this.ro.dakariqi=!0,i.abrupt("continue",20);case 54:if("dakatianshu"!=s){i.next=58;break}return this.ruleForm.dakatianshu=u[s],this.ro.dakatianshu=!0,i.abrupt("continue",20);case 58:if("zhanghao"!=s){i.next=62;break}return this.ruleForm.zhanghao=u[s],this.ro.zhanghao=!0,i.abrupt("continue",20);case 62:if("xingming"!=s){i.next=66;break}return this.ruleForm.xingming=u[s],this.ro.xingming=!0,i.abrupt("continue",20);case 66:if("userid"!=s){i.next=70;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,i.abrupt("continue",20);case 70:i.next=20;break;case 72:this.styleChange();case 73:case"end":return i.stop()}}),i,this)})));function e(t){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},kaishiriqiChange:function(t){this.ruleForm.kaishiriqi=t.target.value,this.$forceUpdate()},jieshushijianChange:function(t){this.ruleForm.jieshushijian=t.target.value,this.$forceUpdate()},dakariqiChange:function(t){this.ruleForm.dakariqi=t.target.value,this.$forceUpdate()},wanchengduChange:function(t){this.wanchengduIndex=t.target.value,this.ruleForm.wanchengdu=this.wanchengduOptions[this.wanchengduIndex]},jihuatupianTap:function(){var t=this;this.$api.upload((function(i){t.ruleForm.jihuatupian=t.$base.url+"upload/"+i.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.jihuabiaoti){t.next=3;break}return this.$utils.msg("计划标题不能为空"),t.abrupt("return");case 3:if(!this.ruleForm.dakatianshu||this.$validate.isIntNumer(this.ruleForm.dakatianshu)){t.next=6;break}return this.$utils.msg("打卡天数应输入整数"),t.abrupt("return");case 6:if(!this.ruleForm.id){t.next=11;break}return t.next=9,this.$api.update("jihuadaka",this.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,this.$api.add("jihuadaka",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var i=new Date,e=i.getFullYear(),n=i.getMonth()+1,a=i.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),n=n>9?n:"0"+n,a=a>9?a:"0"+a,"".concat(e,"-").concat(n,"-").concat(a)},toggleTab:function(t){this.$refs[t].show()}}};i.default=o}).call(this,e("543d")["default"])},"2c10":function(t,i,e){"use strict";(function(t){e("4bca"),e("921b");n(e("66fd"));var i=n(e("8f5d"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"37d0":function(t,i,e){"use strict";e.r(i);var n=e("28df"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"3a76":function(t,i,e){},"3c67":function(t,i,e){"use strict";var n=e("3a76"),a=e.n(n);a.a},"8f5d":function(t,i,e){"use strict";e.r(i);var n=e("97a9"),a=e("37d0");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("3c67");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"256bc441",null,!1,n["a"],u);i["default"]=o.exports},"97a9":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement;t._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))}},[["2c10","common/runtime","common/vendor"]]]);