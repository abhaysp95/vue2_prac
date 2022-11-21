<<template>
	<div>
		<h1>This is from child FormHelper</h1>
		<slot>
			<p>Template not passed from parent yet</p>
		</slot>
		<hr />
		<!-- named slots -->
		<slot name="heading">
			<h3>Default heading</h3>
		</slot>
		<slot name="para"> </slot>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>
