<template>
	<div id="app">
		<div>
			<b-navbar toggleable="lg" type="dark" variant="info">
				<b-navbar-brand href="#"><img alt="Vue logo" src="./assets/logo.png"></b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
					<li class="nav-item"><router-link to="/project" class="nav-link">Project</router-link></li>
				</b-navbar-nav>
				</b-collapse>
			</b-navbar>
			<div class="mt-5">
				<router-view  v-bind:projects="posts"></router-view>
			</div>
			<button v-on:click="this.탭내용 = 0">버튼0</button>
			<button v-on:click="this.탭내용 = 1">버튼1</button>
			<button v-on:click="this.탭내용 = 2">버튼2</button>

			<div v-if="탭내용 == 0">탭내용0</div>
			<div v-if="탭내용 == 1">탭내용1</div>
			<div v-if="탭내용 == 2">탭내용2</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'app',
	data(){
		return{
			탭내용: 0,
			posts : [
				{ title : '첫 째 프로젝트 : JavaScript 쇼핑몰', content : '서버가 아닌 프론트엔드 환경에서 대부분의 기능을 만들어낼 수 있기 때문에 만들어보았습니다.', date : 'September 24, 2019', number : 0 },
				{ title : '둘 째 프로젝트 : 뷰로만든 뷰동산', content : '이제 앱보다는 PWA가 대세입니다. 뷰를 이용하면 매끈한 앱같은 웹을 만들 수 있습니다.', date : 'October 20, 2019', number : 1 },
				{ title : '셋 째 프로젝트 : 현피 앱', content : '거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요', date : 'September 24, 2019', number : 2 }
			]
		}
	},
	components: {
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.navbar-brand img{height:30px;}
</style>
