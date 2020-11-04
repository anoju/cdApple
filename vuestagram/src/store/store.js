import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export let store = new Vuex.Store({
	state: {		//데이터 저장하는 공간
		name : 'Anoju',
		age: 40,
		like: 99,
		isLike: false
	},
	getters : {		//꺼내는 쓰는 방법 지정
		NAME(state){
			return state.name;
		},
		AGE(state){
			return state.age;
		},
		LIKE(state){
			return state.like;
		}
	},
	mutations: {	//변환하는 방법 지정
		이름바꾸기(state, 이름 ) {
			state.name = 이름;
		},
		ADD_LIKE(state) {
			if(state.isLike == false){
				state.like++;
				state.isLike = true;
			}else{
				state.like--;
				state.isLike = false;
			}
		}
	},
	actions : {		//mutations 함수를 동작시키는 방법 지정, ajax 요청이 필요할때 사용(axios랑 같이 사용)
		이름바꾸기 (context, payload) {
			context.commit( '이름바꾸기',payload);
		}
	}
})
