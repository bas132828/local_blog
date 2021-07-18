import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: "397514",
        brief: "Ut enim ad minim veniam",
        date: "18.07.2021, 23:03:37",
        title: "Lorem ipsum",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Malesuada bibendum arcu vitae elementum. Bibendum arcu vitae elementum curabitur. Facilisi cras fermentum odio eu feugiat. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisi porta lorem mollis aliquam ut. In hendrerit gravida rutrum quisque non tellus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Diam vulputate ut pharetra sit. Fames ac turpis egestas maecenas pharetra. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Ultrices tincidunt arcu non sodales neque sodales ut etiam.\n\nNibh tortor id aliquet lectus. Nibh nisl condimentum id venenatis a. Lacus vestibulum sed arcu non odio euismod lacinia. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Pulvinar proin gravida hendrerit lectus a. Ante metus dictum at tempor commodo ullamcorper a. Volutpat diam ut venenatis tellus in metus. Libero enim sed faucibus turpis in eu mi bibendum. Scelerisque fermentum dui faucibus in ornare. In ante metus dictum at tempor commodo ullamcorper a. Fames ac turpis egestas sed tempus urna. Ac tincidunt vitae semper quis lectus. Viverra nam libero justo laoreet sit amet cursus. Sed tempus urna et pharetra pharetra massa massa ultricies.",
        comments: [
          {
            id: "950954",
            title: "Volutpat",
            content: "Volutpat diam ut venenatis tellus in metus.",
            pageId: "397514",
          },
          {
            id: "326181",
            title: "Libero",
            content:
              "Libero enim sed faucibus turpis in eu mi bibendum. Scelerisque fermentum dui faucibus in ornare. In ante metus dictum at tempor commodo ullamcorper a.",
            pageId: "397514",
          },
        ],
      },
      {
        id: "699753",
        brief: "Hodor. Hodor",
        date: "18.07.2021, 23:05:33",
        title: "Hodor",
        message:
          "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...",
        comments: [
          {
            id: "300050",
            title: "Hodor",
            content:
              "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor...",
            pageId: "699753",
          },
        ],
      },
      {
        id: "839815",
        brief: "Lorem Ipsum is the single greatest threat. ",
        date: "18.07.2021, 23:06:48",
        title: "Lorem Ipsum",
        message:
          "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.",
        comments: [
          {
            id: "717168",
            title: "XOXO",
            content:
              "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. ",
            pageId: "839815",
          },
          {
            id: "760510",
            title: "Brunch",
            content:
              "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
            pageId: "839815",
          },
        ],
      },
      {
        id: "892439",
        brief: "",
        date: "18.07.2021, 23:08:00",
        title: "Zombie ipsum ",
        message:
          "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.",
        comments: [],
      },
    ],
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
