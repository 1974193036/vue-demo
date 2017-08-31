<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button class="btn btn-default">普通按钮</button>
    <button class="btn btn-danger">危险按钮</button>
    <div class="row">
      <div class="col-sm-8 my-border">8</div>
      <div class="col-sm-4 my-border">4</div>
    </div>
  </div>   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Bootstrap'
    }
  }
}
</script>

<style>
  .my-border{
    border:1px solid #000;
  }
</style>
