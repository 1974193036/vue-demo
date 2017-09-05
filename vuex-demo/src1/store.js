import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={  //放置数据
	count: 0
};

const mutations={ //处理数据变化,写一些公共函数
	incrementss(state){ 
		state.count+=2;
	},
	decrementss(state){
		state.count--;
	}
};

const actions={ //处理你要干什么，异步请求，判断，流程控制,调用函数
	// increment:function({commit}){
	// 	return commit('incrementss');
	// }
	increment:({commit})=>{  
		console.log(commit);
		commit('incrementss');
	},
	decrement:({commit})=>{  
		commit('decrementss');
	},
	clickOdd:({commit,state})=>{ 
		console.log(state.count);
		if(state.count%2==0){
			commit('incrementss');
		};
	},
	clickAsync:({commit})=>{  
		new Promise((resolve) => {
            setTimeout(function() {
                commit('incrementss');
                resolve();
            }, 1000);
        });
	}
};

const getters = {   //获取数据
    nowCount(state) {
        return state.count;
    },
    getOdd(state) {
    	return state.count % 2 == 0 ? '偶数' : '奇数';
    }
};
//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});