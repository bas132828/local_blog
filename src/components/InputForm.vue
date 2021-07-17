<template>
  <div id="input">
    <!-- -->
    <form v-if="show" class="post-form" v-on:submit.prevent="onSubmit">
      <label for="#text">Title</label>
      <input
        type="text"
        id="title"
        class="title"
        placeholder="Your title"
        v-model="titleMessage"
        required
      />
      <label for="#message">Message</label>
      <textarea
        id="message"
        class="message"
        placeholder="Your text"
        required
        v-model="textMessage"
      />
      <button type="submit">Post</button>
    </form>
    <!--  -->
    <button v-if="show" v-on:click="previewShow = !previewShow">
      preview your Post
    </button>
    <div id="preview" v-show="previewShow">
      <button v-on:click="previewShow = !previewShow">&times;</button>
      <h2>Preview</h2>
      <h3>{{ titleMessage }}</h3>
      <p>
        {{ textMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewShow: false,
      titleMessage: "",
      textMessage: "",
      idForPost: 0,
      posts: [],
    };
  },
  methods: {
    showHandler() {
      this.$store.commit("showHandler");
    },
    addNewPost() {
      this.idForPost = Math.random()
        .toString()
        .slice(2, 8);

      this.$store.commit("addPost", {
        id: this.idForPost,
        title: this.titleMessage,
        message: this.textMessage,
        comments: [],
      });
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      this.showHandler();
    },
    onSubmit() {
      this.addNewPost();
      (this.titleMessage = ""), (this.textMessage = "");
    },
  },
  computed: {
    show() {
      return this.$store.state.show;
    },
  },
  mounted() {
    //using localstorage to render blogs if if have smth in the there
    localStorage.getItem("posts")?.length &&
      this.$store.commit(
        "rewritePosts",
        JSON.parse(localStorage.getItem("posts"))
      );
  },
};
</script>

<style>
#preview {
  position: absolute;
  width: 90%;
  height: 20rem;
  z-index: 1;
  background-color: tomato;
}
#input {
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>
