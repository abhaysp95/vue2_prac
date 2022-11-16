<template>
	<header>
		<h1>{{ headerTitle }}</h1>
	</header>
</template>

<script>
export default {
	props: [ "headerTitle" ],
	data() {
		return {
			title: "Vue Fighters"
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
