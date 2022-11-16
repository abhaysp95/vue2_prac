<template>
	<footer>
		<p>{{ copyright }} {{ footerTitle }}</p>
	</footer>
</template>

<script>
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
