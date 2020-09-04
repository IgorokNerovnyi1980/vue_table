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
    <button class="row--button">
      edit
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
};
</script>
<style scoped>
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
    width:20%;
    height:100%;
    padding: 0.5rem 0;
    border:none;
    outline:none;
    background:none;
    cursor: pointer;
}
.row--item:last-child{
    border-right:none;
}
</style>
