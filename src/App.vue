<script>
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/Header.vue'

export default {
	name: 'App',
	components: {
		Header,
	},
	data() {
		return {
			activeComponent: 'Home',
			userData: JSON.parse(localStorage.getItem('userData')) || null,
		}
	},
	mounted() {
		if (this.userData) {
			this.activeComponent = 'home'
		} else {
			this.activeComponent = 'login'
		}
	},
}

// check in localStorage for 'userData'
// let userData = localStorage.getItem('userData') || null
// // check in localStorage for 'nekoTssel-PTO'
// const localStoreToken = localStorage.getItem('nekoTssel-PTO') || null
// // check in cookies for 'nekoTssel-PTO'
// const cookieToken = document.cookie.match(/nekoTssel-PTO=([^;]+)/)?.[1] || null
</script>

<template>
	<!-- <HelloWorld msg="Vite + Vue" /> -->
	<Header title="OTPless" :isLoggedIn="!!userData" />

	<main>
		<component :is="activeComponent" :userData="userData" />
	</main>
	<!-- <Home v-show="userData" :userData="userData" />
	<Login v-if="!userData" /> -->
</template>
