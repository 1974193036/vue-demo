import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import actions from './actions.js'  //处理你要干什么，异步请求，判断，流程控制,调用函数
import mutations from './mutations.js'  //处理数据变化,写一些公共函数



//需要导出actions对象
export default new Vuex.Store({
	actions,
	modules:{  //模块
		mutations
	},
});