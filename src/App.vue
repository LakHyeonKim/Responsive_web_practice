<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import store from './store'

export default {
	name: 'App',
	store,
	data() {
		return {
			//
		}
	}
}
</script>
