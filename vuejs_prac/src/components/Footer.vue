<template>
	<footer>
		<p>{{ copyright }} {{ footerTitle }}</p>
	</footer>
</template>

<script>
import { eventBus } from '../main';

export default {
	props: {
		footerTitle: {
			type: String,
			required: true,
		}
	},
	data() {
		return {
			copyright: 'Copyright 2022'
		}
	},
	created() {
		// not a good idea to mutate props (suggested use, computed refs)
		eventBus.$on('titleChanged', (newTitle) => this.footerTitle = newTitle)
	}
}
</script>

<style scoped>
footer {
	background: #222;
	padding: 6px;
}
p {
	color: lightgreen;
	text-align: center;
}
</style>
