import * as types from './types.js' 

export default{
	increment:({commit})=>{  
	 	commit(types.INCREMENT);
	},
	decrement:({commit})=>{  
		commit(types.DECREMENT);
	},
	clickOdd:({commit,state})=>{
		console.log(state); 
		console.log(state.mutations.count);
		if(state.mutations.count%2==0){
			commit(types.INCREMENT);
		};
	},
	clickAsync:({commit})=>{  
		new Promise((resolve) => {
            setTimeout(function() {
                commit(types.INCREMENT);
                resolve();
            }, 1000);
        });
	}

	// increment:({commit})=>{  
	// 	console.log(commit);
	// 	commit('incrementss');
	// },
	// decrement:({commit})=>{  
	// 	commit('decrementss');
	// },
	// clickOdd:({commit,state})=>{ 
	// 	console.log(state.mutations.count);
	// 	if(state.mutations.count%2==0){
	// 		commit('incrementss');
	// 	};
	// },
	// clickAsync:({commit})=>{  
	// 	new Promise((resolve) => {
 //            setTimeout(function() {
 //                commit('incrementss');
 //                resolve();
 //            }, 1000);
 //        });
	// }
};