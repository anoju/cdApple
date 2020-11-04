<template>
<div class="filter-item-wrap">
	<div :class="['filter-item', 필터]" :style="{backgroundImage:'url('+uploadImg+')'}" v-on:click="filterChange"></div>
	<slot></slot>
</div>
<!-- <div :class="`filter-item ${필터}`" :style="{backgroundImage:'url('+uploadImg+')'}"></div> -->
<!-- <div class="filter-item" :class="[필터]" :style="{backgroundImage:'url('+uploadImg+')'}"></div> -->
</template>

<script>
import EventBus from '../EventBus';
export default {
	props:{
		uploadImg:String,
		필터:String 
	},
	methods:{
		filterChange(){
			EventBus.$emit('select-filter', this.필터);
		}
	}
}
</script>


<style>
.filter-item-wrap{
	display: inline-block;
margin: 10px 10px 10px auto;text-align:center;
}
.filter-item-wrap>p{margin:0.3em 0;}
.filter-item {
width: 100px;
height: 100px;
padding: 8px;

color: white;
border-radius:5px;
background-color: #eee;
background-repeat:no-repeat;
background-size: cover;
background-position:center center;
overflow:hidden;
}
</style>