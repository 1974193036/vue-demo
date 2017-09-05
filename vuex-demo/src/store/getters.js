export default {
	//写法1 es6简化版
	//nowCount(state) {
    //    return state.count;
    //},

    //写法2 es5完整版
 	// nowCount:function (state){
 	// 	return state.count;
 	// },

 	//写法3 es6箭头函数
 	//nowCount:(state)=>{return state.count},

 	//写法4 es6箭头函数
 	nowCount:(state)=>state.count,
 	
    getOdd(state) {
    	return state.count % 2 == 0 ? '偶数' : '奇数';
    }
}