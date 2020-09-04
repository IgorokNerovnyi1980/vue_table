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
    table: [{
      name: 'first', surname: 'first surname', phone: '1111111', email: '1@.com',
    }, {
      name: 'second', surname: 'second surname', phone: '222222', email: '2@.com',
    }],
    item: null,
  },
  mutations: {
  },
});
new Vue({
  components: { App },
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
