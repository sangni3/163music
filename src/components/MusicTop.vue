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
        <a  v-if="!islogin" @click="login" >登录</a>
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
    };
  },
  async created() {
    //判断登录
    this.isLogon();

  },
  methods: {
    login(){
        this.$router.push('/login')
    },
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
.el-input__prefix{
  height: 32px;
}
.el-input{
  margin-top: 30px;
  transform: translateY(-50%);
  height: 32px;
  width: 210px;
  margin-left: 50px;
}
.el-input__inner{
  background-color: #dd3e3e;
  border-radius: 20px;
  border: 1px solid #dd3e3e;
}

.el-input__inner:hover {
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
.el-input__inner {

}

</style>
