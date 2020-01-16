<template>
  <v-layout column px-4>
    <v-flex v-for="i in repositories.length > limits ? limits : repositories.length" :key="i">
      <v-divider v-if="i === 1"></v-divider>
      <Repository :repos="repositories[i - 1]"></Repository>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
import Repository from '@/components/Repository'
import GitlabService from '@/services/GitlabService'
import Token from '../token.json'

export default {
	name: 'RepositoryList',
	props: {
		limits: {type: Number, default: 10},
		loadMore: {type: Boolean, default: true}
	},
	data() {
		return {
			repositories: [],
			token:Token.token
    	}
	},
	components: {
		Repository
	},
	mounted() {
		this.getGitlabRepos('rlafkrgus963',this.token)
	},
	methods: {
		async getGitlabRepos(userName,token) {
			const response = await GitlabService.getRepos(userName,token)
			if(response.status !== 200) {
				return
			}
			window.console.log(response);
			this.repositories = response.data
		}
	}
}
</script>
