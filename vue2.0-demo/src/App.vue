<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-link to="/home">主页</router-link>
    <router-link to="/news">新闻</router-link>
    <div>
      <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  }
}
</script>

<style lang="less" rel="styleheet/less">
@height:60px;
@colorA:#42b983;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: @height;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: @colorA;
}
</style>
