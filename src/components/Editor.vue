<template>
  <section class="editor">
    <div
      class="editor--form"
    >
      <input
        v-model="newUser.name"
        class="editor--form__input"
        type="text"
        name="name"
        placeholder="name"
        required
      >
      <input
        v-model="newUser.surname"
        class="editor--form__input"
        type="text"
        name="surname"
        placeholder="surname"
        required
      >
      <input
        v-model="newUser.phone"
        class="editor--form__input"
        type="tel"
        name="phone"
        placeholder="1112233"
        pattern="[0-9]{7}"
      >
      <input
        v-model="newUser.email"
        class="editor--form__input"
        type="email"
        name="email"
        placeholder="email@email.com"
      >
      <button
        class="editor--form__button"
        @click="saveUser"
      >
        save
      </button>
    </div>
    <input
      ref="fileInput"
      class="editor--form__input"
      type="file"
      accept="application/JSON"
      @change="parseFile"
    >
  </section>
</template>
<script>
export default {
  name: 'Editor',
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        id: this.$store.state.users.length + 1,
      },
      isEdit: false,
    };
  },
  mounted() {
    if (this.$store.state.item) {
      this.newUser = this.$store.state.item;
      this.isEdit = true;
    }
  },
  destroyed() {
    this.$store.commit('endEdit');
    this.isEdit = false;
  },
  methods: {
    parseFile(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        try {
          const result = JSON.parse(event.target.result);
          this.newUser = { ...result };
        } catch (err) {
                alert(err.message); // eslint-disable-line
        }
      };
    },
    saveUser() {
      if (!this.isEdit) {
        this.$store.commit('createUser', this.newUser);
      }
      localStorage.setItem('users', JSON.stringify(this.$store.state.users));
      this.$router.push('/home');
    },
  },
};
</script>
<style scoped>
.editor{
    width:100%;
    min-width:100vw;
    min-height:calc(100vh - 6rem);
    padding-top:5vh;
    background-color: lightgray;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.editor--form{
  min-width:28rem;
  min-height: 40vh;
  padding:0 1rem;
  border: 0.1rem solid black;
  border-radius:0.3rem;

  display:flex;
  flex-direction: column;
  justify-content: space-around;
}
.editor--form__input, .editor--form__button{
  padding:0.5rem 1rem;
}
</style>
