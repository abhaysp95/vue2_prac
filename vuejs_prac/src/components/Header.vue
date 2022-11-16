<template>
	<header @click="changeTitle">
		<h1>{{ headerTitle }}</h1>
	</header>
</template>

<script>
import { eventBus } from '../main';

export default {
	props: [ "headerTitle" ],
	data() {
		return {
			title: "Vue Fighters"
		}
	},
	methods: {
		changeTitle: function() {
			/* this.$emit('changeTitleEvent', "Vue Warriors") */
			let newTitle = "Vue Warriors"
			this.headerTitle = newTitle;  // not a good approach to mutate props, unless you are sure of the changes it'll make on another components
			eventBus.$emit('titleChanged', newTitle)
		}
	}
}
</script>

<style scoped>
header {
	background: lightgreen;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;
}
</style>
