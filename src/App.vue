<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem('users'));
    if (data && data.length > 0) {
      this.$store.commit('setUsers', data);
    }
  },
};
</script>

<style>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.4rem;
}

</style>
