const vue1 = new Vue({
	el: '#vue-app-one',
	data: {
		title: "Vue App Two"
	},
	computed: {
		greet: function() {
			return `Howdy from ${this.title}`
		}
	}
});

const vue2 = new Vue({
	el: '#vue-app-two',
	data: {
		title: "Vue App One"
	},
	computed: {
		greet: function() {
			return `Howdy from ${this.title}`
		}
	},
})
