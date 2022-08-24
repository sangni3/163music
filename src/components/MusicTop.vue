<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <img
          width="179px"
          height="54px"
          class="icon-wrapper_img"
          src="../assets/music.png"
        />
        <h1 class="logo"></h1>
      </div>
      <div class="btn">
        <el-button   icon=" el-icon-arrow-left" circle></el-button>
        <el-button   icon=" el-icon-arrow-right" circle></el-button>
      </div>
      <div class="el-input el-input--small el-input--prefix">
        <!-- 搜索框 -->
        <input
            type="text"
            autocomplete="off"
            placeholder="搜索"
            class="el-input__inner"
            v-model="inputValue"
            @keyup.enter="toResult"
        />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
    <div class="right-box">
      <div class="right-box-img">
        <img v-if="islogin" :src='avator' alt="" />
<!--        <a  v-if="!islogin" @click="login" >登录</a>-->
        <el-button type="text" v-if="!islogin" @click="centerDialogVisible = true" style="color: black"
        >登录</el-button>
      </div>
      <div v-if="islogin"  class="right-user">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
          {{profile.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-switch-button" >
                <a @click="logout">退出</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

      </div>

    </div>
    <el-dialog   :visible.sync="centerDialogVisible"  title="登录" width="30%"  center>
      <el-form
          ref="loginuserlistref"
          :model="loginuserlist"
      >
        <el-form-item label="手机号">
          <el-input v-model="loginuserlist.phone"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input
              v-model="loginuserlist.password"
              type="password"
          ></el-input>
        </el-form-item>
        <el-form-item >
          <span style="margin-left: 80px">登入网易云音乐，该接口不会获取隐私数据</span>
        </el-form-item>
      </el-form>
      <template #footer>
            <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="getlogin_userid()"
            >submit</el-button>
            </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "top",
  data() {
    return {
      //是已经否登录
      islogin:false,
      //用户
      account:[],
      //用户信息
      profile:[],
      //头像
      avator: '',
      // 输入的内容
      inputValue: "",
      //登录
      centerDialogVisible : false,
      loginuserlist: {
        phone: "",
        password: "",
      },
    };
  },
  async created() {
    //判断登录
    this.isLogon();

  },
  methods: {
    //登出
    logout(){
      const { data: res }=this.$http.get("/logout");
      this.islogin=false
      this.$router.replace('/')
    },
    getlog(){
      if (this.$route.params.islogin){
        const a=this.$route.params.islogin;
        this.$data.islogin=a;
        this.isLogon()
      }
    },
    //登录
    async getlogin_userid() {
      const { data: res } = await this.$http.post("/login/cellphone?phone="+this.loginuserlist.phone
          +"&password="+this.loginuserlist.password,
          {emulateJSON: true}, {  // 这里是跨域写法
            headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}  // 这里是跨域的写法
          });

      if (res.code != 200) {
        return this.$message.error("error:登入失败哦 ");
      } else {
        this.centerDialogVisible = false
        this.islogin=true
        this.$message({
          message: "success:登入成功",
          type: "success",
        });
        window.sessionStorage.setItem("userid", res.account.id);
        window.sessionStorage.setItem("token", res.token);
        this.$router.push({name:'home',params:{islogin:true}});
        // this.$router.push("/DiscoverMusic");
      }
    },
    //判断是否登录
    async isLogon() {
      const { data: res } = await this.$http.get("/login/status");
      if (res.data.code == 200 || res.data.account == null) {
        this.$data.islogin=false
      }
      if(res.data.account != null)
      {
        this.account = res.data.account;
        this.profile = res.data.profile;
        this.avator=this.profile.avatarUrl;
        this.islogin=true;
      }

    },
    async toResult() {
      // 非空判断
      if (this.inputValue == "") {
        // 提示用户
        this.$message.warning("请输入内容");
      } else {
        // 去搜索页 携带数据
        await this.$router.push("/searchMusic?q=" + this.inputValue);
        // await this.$router.go(0);
      }
    },
  },
  watch: {
    '$route.params.islogin': {
      immediate:true,
      handler:'getlog',
    }

  },
};
</script>

<style scoped>

.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.left-box>.el-input__prefix{
  height: 32px;
}
.left-box>.el-input{
  margin-top: 30px;
  transform: translateY(-50%);
  height: 32px;
  width: 210px;
  margin-left: 50px;
}
.left-box>.el-input__inner{
  background-color: #dd3e3e;
  border-radius: 20px;
  border: 1px solid #dd3e3e;
}

.left-box>.el-input__inner:hover {
  border-color: #DD3E3E;
}
.icon-wrapper_img{
  margin-top: 30px;
  transform: translateY(-50%);
}
.btn{
  height: 40px;
}
.btn > *{
  margin-top: 30px;
  transform: translateY(-50%);
  background: rgba(31,45,61,.11);
  border: 0px;
}
.el-form-item {
  display: flex;
  --font-size: 14px;
  margin-bottom: 18px;
}
.el-form-item__label{
  height: 32px;
}

</style>
