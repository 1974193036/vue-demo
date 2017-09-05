import {
	INCREMENT,
	DECREMENT
}from './types.js'

import getters from './getters.js' //获取数据

var state={  //初始数据,放置数据
	count: 0
};

const mutations={ //处理数据变化,写一些公共函数
	// incrementss(state){ 
	// 	state.count+=2;
	// },
	// decrementss(state){
	// 	state.count--;
	// }
	[INCREMENT](state){ 
		state.count+=2;
	},
	[DECREMENT](state){
		state.count--;
	}
};





export default{
	state,
	mutations,
	getters
}