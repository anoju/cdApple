<template>
	<div class="body">
		<!--포스팅 화면 -->
		<div v-if="스텝 == 1">
			<Post v-for="(포스팅,i) in 포스팅들" v-bind:포스팅="포스팅" v-bind:key="i">
				<!-- <h4>slot에 넣을수 잇는 글자</h4> -->
			</Post>
			<!-- <Post v-for="(포스팅,i) in 포스팅들" v-bind:포스팅="포스팅" v-bind:key="i" /> -->
			<!-- <Post />
			<Post />-->

			<button class="more" v-on:click="showMore">더보기+</button>
		</div>

		<!-- 필터 선택화면 -->
		<div v-if="스텝 == 2">
			<div class="upload-image" :class="[filter]" :style="{backgroundImage:'url('+uploadImg+')'}"></div>
			<div class="filters">
				<FilterBox
					:uploadImg="uploadImg"
					:필터="필터" 
					v-for="(필터,i) in 필터들" v-bind:key="i">
					<p>{{필터}}</p>
				</FilterBox>
				<!-- <div class="filter-1" :style="`background-image:url(${uploadImg})`"></div>
				<div class="filter-1" :style="`background-image:url(${uploadImg})`"></div>
				<div class="filter-1" :style="`background-image:url(${uploadImg})`"></div>
				<div class="filter-1" :style="`background-image:url(${uploadImg})`"></div>
				<div class="filter-1" :style="`background-image:url(${uploadImg})`"></div> -->
			</div>
		</div>

		<!-- 글쓰는 화면 -->
		<div v-if="스텝 == 3">
			<div class="upload-image" :class="[filter]" :style="{backgroundImage:'url('+uploadImg+')'}"></div>
			<!-- <button v-on:click="$emit('용돈','50000')">효도버튼</button> -->
			<div class="write"><textarea class="write-box" v-on:input="$emit('글입력',$event.target.value)" placeholder="등록 할 내용을 입력해주세요~!!"></textarea></div>
		</div>
	</div>
</template>
<script>
	import Post from './Post.vue'
	import FilterBox from './FilterBox.vue'
	import EventBus from '../EventBus';

	export default {
		props: {
			포스팅들: Array,
			스텝: Number,
			uploadImg: String,
			filter: String,
			필터들: Array
		},
		components: {
			Post,
			FilterBox
		},
		methods:{
			showMore(){
				EventBus.$emit('show-more', this.필터);
			}
		}
	}
</script>
<style>
.wow-enter{ opacity:0; } 
.wow-enter-to { opacity:1; } 
.wow-enter-active { transition : all 0.5s }

	.upload-image {
		width: 100%;
		height: 350px;
		background-color:#eee;
		background-repeat:no-repeat;
		background-size:cover;
		background-position:center center;
		border-radius:10px;
		overflow:hidden;
	}

	.filters {
		overflow-x: scroll;
		white-space: nowrap;
	}

	.filter-1 {
		width: 100px;
		height: 100px;
		margin: 10px 10px 10px auto;
		padding: 8px;
		display: inline-block;
		color: white;
		border-radius:5px;
		background-color: #eee;
		background-repeat:no-repeat;
		background-size: contain;
		background-position:center center;
	}

	.filters::-webkit-scrollbar {
		height: 5px;
	}

	.filters::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	.filters::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
	}

	.filters::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	.write-box {
		border: none;
		width: 90%;
		height: 100px;
		padding: 15px;
		margin: auto;
		display: block;
		outline: none;
	}
</style>