<script>
export default {
	name: 'Login',
	data() {
		return {
			userData: localStorage.getItem('userData') || null,
		}
	},

	mounted() {
		// Add OTPless Auth Script
		const otplessScript = document.createElement('script')
		otplessScript.type = 'text/javascript'
		otplessScript.src = 'https://otpless.com/auth.js'
		document.body.appendChild(otplessScript)

		// Set OTPless Callback function
		window.otpless = (otplessUser) => {
			this.userData = otplessUser
			localStorage.setItem('userData', JSON.stringify(otplessUser))
			window.location.reload()
		}
	},
	unmounted() {
		// Remove OTPless Auth Script
		document.body.removeChild(otplessScript)
	},
}
</script>

<template>
	<div id="otpless-login-page"></div>
</template>

<style scoped></style>
