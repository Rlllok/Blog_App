<template>
<Menubar class="bar" :model="items">
</Menubar>
<router-view />
</template>

<script>
import Menubar from 'primevue/menubar'

export default {
  name: 'App',

  data() {
		return {
			items: [
                {label: 'Home', to: {name: "Home"}},
                {label: 'About', to: {name: "About"}},  
                {label: 'Login', to: {name: "Login"}, visible: () => !this.$store.getters.loggedIn},
                {label: 'Registration', to: {name: "Registration"}, visible: () => !this.$store.getters.loggedIn},
                {label: 'Profile', to: {name: "Profile"}, visible: () => this.$store.getters.loggedIn},
                {label: 'Logout', to: {name: "Logout"}, visible: () => this.$store.getters.loggedIn},
            ]
		}
	},

  components: {
    Menubar,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}

body {
  margin-top: 20px;
}
</style>
