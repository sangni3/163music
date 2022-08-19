"use strict";(self["webpackChunkvue_163music"]=self["webpackChunkvue_163music"]||[]).push([[660],{1660:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"playlist-container"},[s("div",{staticClass:"top-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.playlist.coverImgUrl,onerror:t.errorImage,alt:""}})]),s("div",{staticClass:"info-wrap"},[s("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))]),s("div",{staticClass:"author-wrap"},[s("img",{staticClass:"avatar",attrs:{src:t.creator.avatarUrl,onerror:t.errorImage,alt:""}}),s("span",{staticClass:"name"},[t._v(t._s(t.creator.nickname)+"/")]),s("span",{staticClass:"time"},[t._v(t._s(t._f("filterDatas")(t.playlist.createTime)))])]),t._m(0),s("div",{staticClass:"tag-wrap"},[s("span",{staticClass:"title"},[t._v("标签:")]),s("ul",t._l(t.playlist.tags,(function(a,e){return s("li",{key:e},[t._v(" "+t._s(a)+" ")])})),0)]),s("div",{staticClass:"desc-wrap"},[s("span",{staticClass:"title"},[t._v("简介:")]),s("span",{staticClass:"desc"},[t._v(" "+t._s(t.playlist.description)+" ")])])])]),s("el-tabs",{attrs:{type:"border-card"},model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},[s("el-tab-pane",{attrs:{label:"歌曲列表",name:"song"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tracks}},[s("el-table-column",{attrs:{label:"图片",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("img",{staticStyle:{height:"50px"},attrs:{src:a.row.al.picUrl,onerror:t.errorImage}})]}}])}),s("el-table-column",{attrs:{prop:"name",label:"歌曲名称",width:"180"}}),s("el-table-column",{attrs:{prop:"ar[0].name",label:"作者",width:"180"}}),s("el-table-column",{attrs:{prop:"name",label:"专辑",width:"180"}}),s("el-table-column",{attrs:{label:"发布时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[s("span",[t._v(" "+t._s(t._f("filterDatas")(a.row.publishTime)))])]}}])}),s("el-table-column",{attrs:{prop:"",label:"功能",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[t.isPay!=a.row.id?s("i",{staticClass:"el-icon-video-play",staticStyle:{"font-size":"22px"},on:{click:function(s){return t.playMusic(a.row.id,a.row.name)}}}):s("i",{staticClass:"el-icon-video-pause",staticStyle:{"font-size":"22px"},on:{click:function(a){return t.audioPause()}}}),s("i",{staticClass:"el-icon-star-off",staticStyle:{"font-size":"22px"},on:{click:function(s){return t.LikeMusic(a.row.id)}}}),s("i",{staticClass:"el-icon-circle-plus-outline",staticStyle:{"font-size":"22px"},on:{click:function(s){return t.MoreMusic(a.row.id)}}})]}}])})],1)],1),s("el-tab-pane",{attrs:{label:"评论",name:"songcomment"}},[s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v(" 精彩评论 "),s("span",{staticClass:"number"},[t._v("("+t._s(t.hotCount)+")")])]),s("div",{staticClass:"comments-wrap"},t._l(t.hotComment,(function(a,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,onerror:t.errorImage,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+":")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v(t._s(t._f("filterDatas")(a.time)))])])])})),0)]),s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v(" 最新评论 "),s("span",{staticClass:"number"},[t._v("( "+t._s(t.total)+" )")])]),s("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(a,e){return s("div",{key:e,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,onerror:t.errorImage,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v(t._s(t._f("filterDatas")(a.time)))])])])})),0)]),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"play-wrap"},[s("span",{staticClass:"iconfont icon-circle-play"}),s("span",{staticClass:"text"},[t._v("播放全部")])])}],l=s(5582),r=s.n(l),n={filters:{filterDatas(t){return 0==t?"未获取到数据":r()(t).format("YYYY-MM-DD")}},data(){return{errorImage:'this.src="'+s(7755)+'"',tabs:"song",total:0,page:1,tracks:[],playlist:{},creator:[],hotComment:[],hotCount:0,comments:[],isPay:null}},created(){this.playlisttrackall(),this.commenthot(),this.commentplaylist()},methods:{async playlisttrackall(){const{data:t}=await this.$http.get("/playlist/detail",{params:{id:this.$route.query.q}});if(200!==t.code)return this.$message.error("error:获取歌单详细失败了，请检查版权...网络404 ");this.playlist=t.playlist,this.creator=t.playlist.creator,this.tracks=t.playlist.tracks},async commenthot(){const{data:t}=await this.$http.get("/comment/hot",{params:{id:this.$route.query.q,type:2}});if(200!==t.code)return this.$message.error("error:获取热门评论失败了，请检查版权...或者网络 ");this.hotComment=t.hotComments,this.hotCount=t.total},async commentplaylist(){const{data:t}=await this.$http.get("/comment/playlist?id="+this.$route.query.q);if(200!==t.code)return this.$message.error("error:获取最新评论失败了，请检查版权...或者网络 ");this.total=t.total,this.comments=t.comments},async playMusic(t,a=null){this.isPay=t;const{data:s}=await this.$http.get("/song/url?id="+t);if(200!==s.code)return this.$message.error("error:获取歌曲地址失败，请检查版权...或者网络 ");{let t=s.data[0].url;this.$parent.audioSrc(t),this.$parent.audioSong(a),this.$parent.audioPlay()}},async audioPause(){this.isPay=null,await this.$parent.audioPause()},LikeMusic(){return this.$message.warning("warning:该功能待更新，仅提供音乐试听")},MoreMusic(){return this.$message.warning("warning:该功能待更新，仅提供音乐试听")},async handleCurrentChange(t){this.page=t;const{data:a}=await this.$http.get("/comment/playlist?id="+this.$route.query.q+"&limit=10&offset="+10*(this.page-1));if(200!==a.code)return this.$message.error("error:获取页码失败请检查网络 ");this.total=a.total,this.comments=a.comments}}},c=n,o=s(1001),p=(0,o.Z)(c,e,i,!1,null,null,null),u=p.exports},7755:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=660.3a006c12.js.map