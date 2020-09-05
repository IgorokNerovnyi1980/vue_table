import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import Home from './components/Home.vue';
import Editor from './components/Editor.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/editor', component: Editor },
  ],
});

const store = new Vuex.Store({
  state: {
    users: [],
    item: null,
  },
  mutations: {
    setUsers(state, arr) {
      state.users = arr;
    },
    createUser(state, data) {
      state.users = [...state.users, data];
    },
    startEdit(state, id) {
      state.item = state.users.find((user) => user.id === id);
    },
    editUser(state, newData) {
      state.item = state.users.map((user) => {
        if (newData.id === user.id) {
          return newData;
        }
        return user;
      });
    },
    endEdit(state) {
      state.item = null;
    },
    deleteUser(state, id) {
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});
new Vue({
  components: { App },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
