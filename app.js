new Vue({
	el: '#vue-app',
	data: {
		age: 10,
		x: 0,
		y: 0
	},
	methods: {
		addAge: function(inc) {
			this.age += inc
		},
		subAge: function(dec) {
			this.age -= dec
		},
		updateXY: function(event) {
			// console.log(event)
			this.x = event.offsetX
			this.y = event.offsetY
		}
	}
});
