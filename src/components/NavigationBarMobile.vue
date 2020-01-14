<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Home" left>
          <b-dropdown-item href="#">Post</b-dropdown-item>
          <b-dropdown-item href="#">Portfolio</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({})
}
</script>
