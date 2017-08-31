import LoadingComponent from './Loading.vue'

const Loading = {
    install: function(Vue) {
        Vue.component('Loadings', LoadingComponent)
    }
};

export default Loading