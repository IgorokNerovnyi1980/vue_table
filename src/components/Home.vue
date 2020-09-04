<template>
  <section class="home">
    <div class="home--table">
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
        <p class="home--table__item" />
      </div>
      <Row
        v-for="item in table"
        :key="item.name"
        :data="item"
      />
    </div>
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
    table() {
      return this.$store.state.table;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
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
    width:90%;
    max-width: 64rem;
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
    flex-grow: 1;
    text-align: center;
    padding: 0.5rem 0;
    color:white;
    border-right:0.1rem solid white;
}
.home--table__item:last-child{
    border-right:none;
}
</style>
