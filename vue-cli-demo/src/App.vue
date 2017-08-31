<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    <aaa></aaa>
    <router-view></router-view>
  </div>
</template>

<script>
import News from './components/News.vue'
export default{
  data () {
    return {
      msg: '我是数据'
    }
  },
  components: {
    aaa: News
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
