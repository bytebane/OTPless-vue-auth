<script>
export default {
	name: 'Home',
	props: {
		userData: Object,
	},

	mounted() {},
}
</script>

<template>
	<h2>User Data</h2>
	<div class="user-data">
		<div class="key-value" v-for="[key, value] in Object.entries(userData)" :key="key">
			<span class="key">{{ key }}</span>
			<span class="value">{{ value }}</span>
		</div>
	</div>
</template>

<style scoped>
h2 {
	font-size: 2.5em;
}
.user-data {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.key-value {
	display: flex;
	gap: 1.5rem;
	justify-content: space-between;
	align-items: center;
}

span.key {
	font-size: 1.25em;
	font-weight: bold;
	text-transform: capitalize;
}
span.key::after {
	content: ' : ';
}
</style>
