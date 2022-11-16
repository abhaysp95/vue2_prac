<template>
	<div id="fighters">
		<h1>List of Fighters</h1>
		<ul>
			<li v-for="fighter in fighters" @click="fighter.show = !fighter.show">
				<h2>{{ fighter.name }}</h2>
				<h3 v-show="fighter.show">{{ fighter.speciality }}</h3>
			</li>
		</ul>
		<button @click="deleteFighter">Delete Fighter</button>
	</div>
</template>

<script>
export default {
	/* data() {
	}, */
	/* props: [ 'fighters' ] */
	// validation syntax
	props: {
		fighters: {
			type: Array,
			required: true,
		}
	},
	methods: {
		deleteFighter: function() {
			this.fighters.pop()
		}
	}
}
</script>

<style scoped>
#fighters {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}
ul {
	display: flex;
	flex-wrap: wrap;
	padding: 0;
}
li {
	flex-grow: 1;
	flex-basis: 300px;
	border: 2px solid #222;
	text-align: center;
	padding: 30px;
	margin: 10px;
	list-style-type: none;
}
</style>
