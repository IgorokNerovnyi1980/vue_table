<template>
  <header class="header">
    <h3 class="header--logo">
      Test Vue Table
    </h3>
    <nav class="header--navigation">
      <router-link
        v-if="currentPath !== '/home' && currentPath !== '/'"
        class="header--navigation__link"
        to="/home"
      >
        Home
      </router-link>
      <router-link
        v-else
        class="header--navigation__link"
        to="/editor"
      >
        add new User
      </router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
.header{
    width:100%;
    min-width:100vw;
    height:6rem;
    padding:1rem;
    background-color: grey;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.header--logo{
    color:white;
}
.header--navigation{
    min-width:10rem;
}
.header--navigation__link{
    outline:none;
    text-decoration: none;
    border: 0.1rem solid white;
    color:white;
    border-radius:0.2rem;
    padding:0.5rem 1rem;
}
</style>
