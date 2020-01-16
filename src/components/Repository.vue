<template>
  <div class="py-3">
    <v-layout>
      <v-flex xs8>
        <h2 class="font-weight-regular text-banner-font" style="font-size:2vw">
          {{ repos.path_with_namespace }}
        </h2>
        <p class="subheading mb-1 grey--text text--darken-1 font-weight-light text-banner-font" style="font-size:0.9vw">
          {{ repos.namespace.name }}
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import GitlabService from '@/services/GitlabService'
import Token from '../token.json'

export default {
  name: 'Repository',
  props: {
    repos: { type: null }
  },
  data () {
    return {
	    stats: {},
	    token:Token.token
    }
  },
  mounted () {
    this.drawStatGraph(this.token)
  },
  methods: {
    async drawStatGraph (token) {
      this.commits = await GitlabService.getCommits(this.repos.id, token)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
.text-banner-font {
  font-family: 'Bebas Neue', cursiv;
  font-size: 36px;
}
</style>
