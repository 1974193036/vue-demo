<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <router-link to="/home">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <br>
      <br>
      <el-button @click="get">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="info">信息按钮</el-button>

      <el-button type="primary" icon="edit">编辑</el-button>
      <el-button type="primary" icon="share"></el-button>
      <el-button type="primary" icon="delete"></el-button>
      <el-button type="primary" icon="search">搜索</el-button>
      <span class="el-icon-circle-check"></span>
      <span class="el-icon-circle-check"></span>
      <br>
      <br>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <Date></Date>
          </div>
        </el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <MyButton @click.native="get"></MyButton>
      <div>
        {{myMessage}}
      </div>     
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Date from './Date.vue'
import MyButton from './Button.vue'
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your element-demo',
      myMessage:''
    }
  },
  /*载入页面显示数据*/
  mounted(){
    this.get();
  },
  methods:{
    get(){
      axios.get('https://api.github.com/users/itstrive')
      .then(function(res){
        this.myMessage=res.data;
      }.bind(this)).catch(function(err){
          console.log(err);
      })
    }
  },
  components:{
    Date,MyButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="styleheet/less">
@color:#42b983;
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: @color;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
