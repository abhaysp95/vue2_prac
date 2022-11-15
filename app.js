new Vue({
	el: '#vue-app',
	data: {
		favFood: "None"
	},
	methods: {
		readRefs: function() {
			// first line just for test
			// console.log(`div test: ${this.$refs.getContent.innerHTML}`)
			console.log(this.$refs.getContent)
			this.favFood = this.$refs.userInput.value
		}
	}
})
