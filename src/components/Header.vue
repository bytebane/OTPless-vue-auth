<script>
export default {
	name: 'Header',
	props: {
		title: String,
		isLoggedIn: Boolean,
	},
	methods: {
		logout() {
			localStorage.removeItem('nekoTssel-PTO')
			localStorage.removeItem('userData')
			document.cookie = 'nekoTssel-PTO=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
			window.location.reload()
		},
	},
}
</script>

<template>
	<header>
		<h1 @click="window.location.reload()">{{ title }}</h1>
		<button v-if="isLoggedIn" type="button" @click="logout">Logout</button>
	</header>
</template>

<style scoped>
header {
	top: 0;
	position: absolute;
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 1280px;
	padding-top: 2rem;
	padding-right: 4rem;
	align-items: center;
	justify-content: space-between;
}
h1 {
	margin: 0;
	font-size: 3.5rem;
	cursor: pointer;
}
</style>
