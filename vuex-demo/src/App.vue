<template>
    <div id="app">
        <h1>{{msg}}</h1>
        <input type="button" value="增加" @click="increment">
        <input type="button" value="减少" @click="decrement">
        <input type="button" value="偶数才能点击+" @click="clickOdd">
        <input type="button" value="点击异步" @click="clickAsync">

        <div>现在的数字为：{{nowCount}}</div>
        <div>它现在是：{{getOdd}}</div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your vuex',
            //count: 0,
            //getOdd: ''
        }
    },
    //原始写法
    // methods:{
    //     increment(){
    //         this.count+=2;  
    //         this.getOdd=this.count % 2 == 0 ? '偶数' : '奇数';
    //     },
    //     decrement(){
    //         this.count--; 
    //         this.getOdd=this.count % 2 == 0 ? '偶数' : '奇数'; 
    //     },
    //     clickOdd(){
    //         if(this.count%2==0){
    //             this.count+=2;
    //             this.getOdd=this.count % 2 == 0 ? '偶数' : '奇数';
    //         }
    //     },
    //     clickAsync(){
    //         new Promise((resolve) => {
    //             setTimeout(function() {
    //                 this.count+=2;
    //                 resolve();
    //             }, 1000);
    //         });
    //     }
    // }
    computed:mapGetters([  //获取数据
        'nowCount',  //这相当于函数
        'getOdd'
    ]),
    methods:mapActions([  //处理函数
        'increment',
        'decrement',
        'clickOdd',
        'clickAsync'
    ])
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

h1,
h2 {
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
    color: #42b983;
}
</style>