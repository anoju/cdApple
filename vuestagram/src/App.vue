<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="header">
			<ul class="header-button-left">
				<li v-on:click="cancle" v-if="스텝 > 1">Cancel</li>
			</ul>

			<ul class="header-button-right">
				<li v-if="스텝 == 2" v-on:click="nextStep">Next</li>
				<li v-if="스텝 == 3" v-on:click="complate">Done</li>
			</ul>

			<img src="./assets/logo.png" class="logo">
		</div>
		<div class="info_box">
			<!-- <h4>{{$store.getters.NAME}}</h4> -->
			<h4>{{name}}</h4>
			<h4>{{$store.commit('이름바꾸기','zun5761')}}</h4>
			<!-- <h4>{{$store.dispatch('이름바꾸기','zun5761')}}</h4> -->
			<p>{{$store.getters.AGE}}</p>
		</div>
		<Body
			:포스팅들="포스팅들" 
			:스텝="스텝"
			:uploadImg="uploadImg" 
			:filter="filter"
			:필터들="필터들"
			v-on:글입력="uploadTxt = $event"
		/>
		<!-- v-on:용돈="지갑 = $event" -->

		<!-- <div class="sample-box">임시 박스</div> -->
		

		<div class="footer" v-if="스텝 == 1">
			<ul class="footer-button-plus">
				<li>
					<input type="file" id="file" class="inputfile" v-on:change="upload">
					<label for="file" class="input-plus">+</label>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import Body from './components/Body.vue';
	import Posts from './assets/postdata';
	import EventBus from './EventBus';
	import axios from 'axios';

	export default {
		name: 'app',
		data() {
			return {
				포스팅들: Posts,
				스텝: 1,
				uploadImg:'',
				filter:'',
				uploadTxt:'',
				필터들: [ "normal", "clarendon", "gingham", "moon", "lark", "reyes", "juno", "slumber", "aden", "perpetua", "mayfair", "rise", "hudson", "valencia", "xpro2", "willow", "lofi", "inkwell", "nashville"]
			}
		},
		components: {
			Body
		},
		computed:{
			name(){
				return this.$store.getters.NAME;
			}
		},
		mounted(){
			EventBus.$on('select-filter', (필터) => {
				//console.log(필터)
				this.filter = 필터;
			});

			EventBus.$on('show-more', (결과) => {
				axios.get('/postdata2.json').then(결과 => {
					var 추가데이터 = 결과.data;
					for(var i in 추가데이터){
						this.포스팅들.push(추가데이터[i]);
					}
				}).catch(에러 => {

				});
			});
		},
		methods:{
			upload(e){
				let file = e.target.files;
				let reader = new FileReader(); 
				reader.readAsDataURL(file[0]); 
				reader.onload = e => { 
					this.스텝 = 2;
					this.uploadImg = e.target.result;
				}
			},
			cancle(){
				this.스텝 = 1;
			},
			nextStep(){
				this.스텝 = 3;
			},
			complate(){
				if(this.uploadTxt != ''){
					var 우리데이터 = {
						name: "Anoju",
						userImage: "https://placeimg.com/100/100/arch",
						postImage: this.uploadImg,
						likes: 0,
						date: 'Now',
						liked: false,
						caption: this.uploadTxt,
						filter: this.filter
					}
					this.포스팅들.unshift(우리데이터);
					this.스텝 = 1;
				}else{
					alert('등록 할 내용을 입력해주세요')
				}
			}
			// ,
			// showMore(){
			// 	axios.get('/postdata2.json').then(결과 => {
			// 		var 추가데이터 = 결과.data;
			// 		for(var i in 추가데이터){
			// 			this.포스팅들.push(추가데이터[i]);
			// 		}
			// 	}).catch(에러 => {

			// 	});
			// }
		}
	}
</script>

<style>
	html{height:100%;}
	body {
		height:100%;margin: 0;
	}
	#app{min-height:100%;}

	ul {
		padding: 5px;
		list-style-type: none;
	}
	.info_box{margin:10px;padding:15px;text-align:center;border:1px solid #eee;border-radius:8px;}

	.logo {
		width: 22px;
		margin: auto;
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		top: 13px;
	}

	.header {
		width: 100%;
		height: 40px;
		background-color: white;
		padding-bottom: 8px;
		position: sticky;
		top: 0;
	}

	.header-button-left {
		color: skyblue;
		float: left;
		width: 50px;
		padding-left: 20px;
		cursor: pointer;
		margin-top: 10px;
	}

	.header-button-right {
		color: skyblue;
		float: right;
		width: 50px;
		cursor: pointer;
		margin-top: 10px;
	}

	.footer {
		width:40px;
		height:40px;
		position: fixed;
		right: 2em;
		bottom: 2em;
		background-color: rgb(79, 91, 255);
		border-radius:50px
	}

	.footer-button-plus {
		text-align: center;
		cursor: pointer;
		font-size: 24px;
		line-height:40px;
		padding:0;
		margin:0;
		color:#fff;
	}

	.sample-box {
		width: 100%;
		height: 600px;
		background-color: bisque;
	}

	.inputfile {
		display: none;
	}

	.input-plus {
		cursor: pointer;
		display:block;
	}
	.more{display:block;width:100%;padding:10px 0;margin:20xp;text-align:center;background:none;border:1px solid #666;border-width:1px 0;color:#151515;}

	#app {
		box-sizing: border-box;
		font-family: 'consolas';
		margin-top: 60px;
		width: 100%;
		max-width: 460px;
		margin: auto;
		position: relative;
		border-right: 1px solid #eee;
		border-left: 1px solid #eee;
	}
</style>