"use strict";(self["webpackChunkvue_163music"]=self["webpackChunkvue_163music"]||[]).push([[279],{7279:function(s,e,t){t.r(e),t.d(e,{default:function(){return u}});var o=function(){var s=this,e=s.$createElement,o=s._self._c||e;return o("div",{staticClass:"logboxmax"},[o("div",{staticClass:"logbox"},[o("el-card",{staticClass:"box-card"},[o("el-form",{ref:"loginuserlistref",attrs:{model:s.loginuserlist,"label-width":"80px"}},[o("div",{staticClass:"logboximg"},[o("img",{attrs:{src:t(1784)}})]),o("el-form-item",{attrs:{label:"手机号"}},[o("el-input",{model:{value:s.loginuserlist.phone,callback:function(e){s.$set(s.loginuserlist,"phone",e)},expression:"loginuserlist.phone"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{type:"password"},model:{value:s.loginuserlist.password,callback:function(e){s.$set(s.loginuserlist,"password",e)},expression:"loginuserlist.password"}}),o("span",[s._v("登入网易云音乐，该接口不会获取隐私数据")]),o("span",[s._v("不登入无法获取完成Api数据！")]),o("span",[s._v("已经登录请忽视，后续再增加判断")])],1)],1),o("div",{staticClass:"btnbox"},[o("el-button",{attrs:{type:"primary"},on:{click:s.getlogin_userid}},[s._v("登入")]),o("el-button",[s._v("注册")])],1)],1)],1)])},i=[],l={data(){return{loginuserlist:{phone:"",password:""}}},created(){},methods:{async getlogin_userid(){const{data:s}=await this.$http.post("/login/cellphone?phone="+this.loginuserlist.phone+"&password="+this.loginuserlist.password,{emulateJSON:!0},{headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"}});if(200!=s.code)return this.$message.error("error:登入失败哦 ");this.$message({message:"success:登入成功",type:"success"}),window.sessionStorage.setItem("userid",s.account.id),window.sessionStorage.setItem("token",s.token),this.$router.push({name:"home",params:{islogin:!0}})}}},a=l,n=t(1001),r=(0,n.Z)(a,o,i,!1,null,null,null),u=r.exports},1784:function(s,e,t){s.exports=t.p+"img/logo.c70a41aa.png"}}]);
//# sourceMappingURL=279.394c1b25.js.map