import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    show: false,
  },
  mutations: {
    addPost: (state, data) => {
      state.posts.push(data);
    },
    rewritePosts: (state, newPosts) => {
      state.posts = newPosts;
    },
    showHandler: (state) => {
      state.show = !state.show;
    },
  },
  actions: {},
  modules: {},
});
