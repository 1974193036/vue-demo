import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouter)



const router=new VueRouter();
/*router.map({
	'home':{
		component:Home
	},
	'news':{
		component:News
	}
});*/
router.map(routerConfig);

/*new Vue({
	el:'body',
	components:{
		app:App
	}
});*/
router.redirect({
	'/':'/home'
});
router.start(App,'#app');