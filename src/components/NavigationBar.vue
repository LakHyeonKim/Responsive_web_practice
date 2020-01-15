<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <v-layout row wrap>
          <v-flex sm4 text-sm-center>
            <b-nav-item v-on:click="goHome()">Home</b-nav-item>
          </v-flex>
          <v-flex sm4 text-sm-center>
            <b-nav-item v-on:click="goPost()">Post</b-nav-item>
          </v-flex>
          <v-flex sm4 text-sm-center>
            <b-nav-item v-on:click="goPortfolio()">Portfolio</b-nav-item>
          </v-flex>
        </v-layout>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: () => ({

  }),
  methods:{
    goHome(){
      this.$router.push('/')
    },
    goPost(){
      this.$router.push('/post')
    },
    goPortfolio(){
      this.$router.push('/portfolio')
    }
  }
}
</script>
