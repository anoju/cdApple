<template>
	<b-container>
		<b-row>
			<b-col>
				<p>{{projects[$route.params.id].number}}</p>
				<h2>{{projects[$route.params.id].title}}</h2>
				<p>{{projects[$route.params.id].content}}</p>
				<p>{{projects[$route.params.id].date}}</p>
			</b-col>
		</b-row>
		<b-row>
			<router-view></router-view>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props :{
		projects: Array
	}
}
</script>

<style>

</style>