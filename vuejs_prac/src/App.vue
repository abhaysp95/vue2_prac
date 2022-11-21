<template>
  <div id="app">
	<formHelper>
	 	<h2>Hi, this is your parent</h2>
		<!-- passing to named slots -->
		<h3 slot="heading">Hi, from heading H3</h3>
		<p slot="para">This text belongs to slot para</p>
	</formHelper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue'

export default {
  name: 'app',
  components: {
	'formHelper': FormHelper,
  },
  data () {
	return {}
  }
}
</script>

<style scoped></style>
