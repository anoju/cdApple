<template>
	<b-container>
		<b-row>
			<b-col>
				<div v-for="project in projects" v-bind:key="project">
					<a href="javascript:void(0)" v-on:click="$router.push('/detail/'+project.number);">
						<h2>{{project.title}}</h2>
						<p>{{project.date}}</p>
					</a>
				</div>
			</b-col>
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