<template>
  <div class="index-container">
    <!-- 导航区域 -->
    <div class="nav">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="nav"
            active-text-color="#dd6d60"
            text-color="#303133"
          >
            <router-link to="/DiscoverMusic">
              <el-menu-item index="1">
                发现音乐
              </el-menu-item>
            </router-link>
            <router-link to="/LatestMusic">
              <el-menu-item index="3">
                最新音乐
              </el-menu-item>
            </router-link>
            <router-link to="/RecommendedMusic">
              <el-menu-item index="2">
                <li>
                  歌单
                </li>
              </el-menu-item>
            </router-link>

            <router-link to="/LatestMV">
              <el-menu-item index="4">
                视频
              </el-menu-item>
            </router-link>
            <el-submenu index="5">
              <template slot="title">
                <span>我创建的歌单</span>
              </template>

              <router-link to="/demo">
                <el-menu-item-group>
                  <el-menu-item index="1-1"
                    ><i class="el-icon-star-off"></i>我喜欢的音乐</el-menu-item
                  >
                </el-menu-item-group>
              </router-link>

             </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 主体区域 -->
    <div class="main">
      <keep-alive><!-- 避免重复渲染-->
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 播放标签 -->
    <div class="player">
      <!-- autoplay 自动播放 -->
      <div class="player_box">
        <!-- <span><i class="el-icon-video-play"></i> {{singsong}}</span> -->
        <span>{{ singsong }}</span>
      </div>
      <audio
        :src="musicUrl"
        ref="audioDom"
        controls="controls"
        crossOrigin="anonymous"
        autoplay="autoplay"
        paused
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicUrl: "",
      singsong: "",
    };
  },

  async created() {
  },
  methods: {
    //暂停
    async audioPause() {
      await this.$refs.audioDom.pause();
    },
    //播放
    //原因：
    // 从Chrome50开始，对<video>或<audio>元素的play()调用返回一个Promise。
    // 一个异步返回单个结果的函数。如果回放成功，Promise就会实现，而play事件也会同时触发，对应执行.then。
    // 如果回放失败，Promise将被拒绝，同时会有一个错误消息解释失败，对应执行.catch。
    async audioPlay() {
      // await this.$refs.audioDom.load();
      // await this.$refs.audioDom.play();
      let playPromise = this.$refs.audioDom.play();

      if (playPromise !== undefined) {
        await playPromise
          .then(() => {
            this.$refs.audioDom.play();
          })
          .catch(() => {});
      }
    },
    //播放地址
    audioSrc(value) {
      // this.$refs.audioDom.src = value;
      this.musicUrl = value;
    },
    //地址
    audioSong(value) {
      this.singsong = value;
    },
  },
};
</script>

<style>
.el-menu {
  border-right:none!important;
  margin-top: 10px!important;
  margin-left: 10px!important;
  width: 180px;
}
.el-menu-item.is-active {
  color: #303133!important;

  background-color: #ccc8c83d;
  font-weight: 1000;
  border-radius:5px ;
}
.el-menu-item, .el-submenu__title {
  height: 40px!important;
  line-height: 40px!important;
  padding-left: 10px!important;
  margin-top: 5px!important;
}
</style>
