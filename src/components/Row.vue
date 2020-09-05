<template>
  <div class="row">
    <p class="row--item">
      {{ data.name }}
    </p>
    <p class="row--item">
      {{ data.surname }}
    </p>
    <p class="row--item">
      {{ data.phone }}
    </p>
    <p class="row--item">
      {{ data.email }}
    </p>
    <button
      class="row--button green"
      @click="editItem(data.id)"
    >
      edit
    </button>
    <button
      class="row--button red"
      @click="deleteItem(data.id)"
    >
      delete
    </button>
  </div>
</template>
<script>
export default {
  name: 'Row',
  props: {
    data: {
      type: Object,
      default: () => ({
        name: '', surname: '', phone: '', email: '',
      }),
    },
  },
  methods: {
    editItem(id) {
      this.$store.commit('startEdit', id);
      this.$router.push('/editor');
    },
    deleteItem(id) {
      this.$store.commit('deleteUser', id);
      localStorage.setItem('users', JSON.stringify(this.$store.state.users));
    },
  },
};
</script>
<style scoped>
.red {
  background-color:red;
}
.green{
  background-color:green;
}
.row{
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
}
.row:nth-child(odd){
  background-color: lightgray;
}
.row--item{
    width:20%;
    text-align: center;
    padding: 0.5rem 0;
    color: black;
    border-right:0.1rem solid black;
}
.row--button{
    width:10%;
    height:100%;
    padding: 0.5rem 0;
    border:none;
    outline:none;
    color:white;
    cursor: pointer;
    border-right:0.1rem solid white;
}
.row--item:last-child{
    border-right:none;
}
.row--button:last-child{
    border-right:none;
}
</style>
