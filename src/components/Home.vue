<template>
  <section class="home">
    <div
      v-if="users.length > 0"
      class="home--table"
    >
      <div class="home--table__titles">
        <p class="home--table__item">
          name
        </p>
        <p class="home--table__item">
          surname
        </p>
        <p class="home--table__item">
          phone
        </p>
        <p class="home--table__item">
          email
        </p>
        <p class="home--table__dump" />
      </div>
      <Row
        v-for="item in users"
        :key="item.id"
        :data="item"
      />
    </div>
    <p v-else>
      no data to display
    </p>
  </section>
</template>
<script>
import Row from './Row.vue';

export default {
  name: 'Home',
  components: {
    Row,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>
<style scoped>
.home{
    width:100%;
    min-width:100vw;
    min-height:calc(100vh - 6rem);
    padding-top:5vh;
    background: linear-gradient(to bottom, rgba(117, 111, 111, 0.65) 0%,rgba(0,0,0,0) 100%);
    display:flex;
    justify-content: center;
    align-items: flex-start;
}
.home--table{
    width:95%;
    max-width: 90rem;
}
.home--table__titles{
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: blue;
}
.home--table__item{
    width:20%;
    text-align: center;
    padding: 0.5rem 0;
    color:white;
    border-right:0.1rem solid white;
}
.home--table__dump{
    width:20%;
}
</style>
