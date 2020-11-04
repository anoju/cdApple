import Vue from'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/project',
			name: 'Project',
			component: Project
		},
		{
			path: '/detail/:id',
			name: 'Detail',
			component: Detail,
			children:[
				{path:'author',component: Author},
				{path:'comment',component: Comment}
			]
		}
	]
});
