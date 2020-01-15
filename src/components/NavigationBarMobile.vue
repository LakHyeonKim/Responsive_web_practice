<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Click" left>
          <b-dropdown-item v-on:click="goHome()">Home</b-dropdown-item>
          <b-dropdown-item v-on:click="goPost()">Post</b-dropdown-item>
          <b-dropdown-item v-on:click="goPortfolio()">Portfolio</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name:'NavigationBar',
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
