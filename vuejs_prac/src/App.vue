<template>
  <div id="app">
	<fighter-header></fighter-header>
	<fighter-vue :fighters="fighters"></fighter-vue>
	<fighter-footer></fighter-footer>
  </div>
</template>

<script>
import fighters from './components/Fighters.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
	"fighter-vue": fighters,
	"fighter-header": Header,
	"fighter-footer": Footer,
  },
  data () {
	return {
		fighters: [
			{ name: "Ryu", speciality: "Karate", show: false },
			{ name: "Crystal", speciality: "Jui-Jitsu", show: false },
			{ name: "Hitoshi", speciality: "Kalaripayattu", show: false },
			{ name: "Tango", speciality: "Boxing", show: false },
			{ name: "Kami", speciality: "MMA", show: false },
		]
	}
  }
}
</script>

<style scoped>
h1 {
	color: purple;
	font-family: 'Nunito SemiBold';
}
</style>
