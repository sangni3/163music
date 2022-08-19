<template>
  <div id="app">
    <!-- 顶部 -->
    <top  />
    <index />
  </div>
</template>

<script>
import top from './components/MusicTop.vue';
import index from './components/MusicIndex.vue'

export default {
  name: 'app',
  data(){
    return{
    }
  },
  components: {
    top,
    index
  },
  methods:{

  },

};
</script>

<style >

</style>
