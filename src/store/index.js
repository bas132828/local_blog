import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    show: false,
    showComment: false,
  },
  mutations: {
    editThisBlog: (state, options) => {
      const postFound = state.posts.find((el) => el.id === options.id);
      postFound.message = options.text;
      (postFound.title = options.title),
        (postFound.brief = options.brief),
        (postFound.date = options.date);
    },

    showHandler: (state) => {
      state.show = !state.show;
    },
    showCommentHandler: (state) => {
      state.showComment = !state.showComment;
    },

    addPost: (state, data) => {
      state.posts.push(data);
    },
    rewritePosts: (state, newPosts) => {
      state.posts = newPosts;
    },

    addComment: (state, newComment) => {
      const postWanted = state.posts.find((el) => el.id === newComment.pageId);
      postWanted?.comments.push(newComment);
    },
    deleteComment: (state, ids) => {
      const postFound = state.posts.find((el) => el.id === ids.pageId);
      const commentNeeded = postFound.comments.findIndex(
        (el) => el.id === ids.cmtId
      );
      postFound.comments.splice(commentNeeded, 1);
    },
    deleteBlog: (state, id) => {
      const postFound = state.posts.findIndex((el) => el.id === id);
      state.posts.splice(postFound, 1);
    },
  },
  getters: {
    getComments: (state) => (id) => {
      const postFound = state.posts.find((el) => el.id === id);
      return postFound || [];
    },
  },
  actions: {},
  modules: {},
});
