<template>
  <div id="input">
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
    <button v-if="show" v-on:click="ok = !ok">preview your Post</button>
    <div id="preview" v-show="ok">
      <button v-on:click="ok = !ok">&times;</button>
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
  props: {
    show: Boolean,
  },

  data() {
    return {
      ok: false,
      titleMessage: "",
      textMessage: "",
      idForPost: 0,
      posts: [],
    };
  },
  methods: {
    addNewPost() {
      this.idForPost = Math.random()
        .toString()
        .slice(2, 8);
      this.posts.push({
        id: this.idForPost,
        title: this.titleMessage,
        message: this.textMessage,
      });

      // if (JSON.parse(localStorage.getItem("posts")).length) {

      // fixing the problem with reseting localStorage by merging it
      // const legacy = JSON.parse(localStorage.getItem("posts"));

      // console.log([legacy, ...this.posts]);
      //   localStorage.setItem(
      //     "posts",
      //     JSON.stringify([...legacy, ...this.posts])
      //   );
      // }
      // else
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    onSubmit() {
      this.addNewPost();
      this.idForPost++;
      this.$emit("passPosts", this.posts);
      (this.title = ""), (this.titleMessage = ""), (this.textMessage = "");
    },
  },
  mounted() {
    //using localstorage to render blogs if if have smth in the local storage
    if (localStorage.getItem("posts")) {
      this.posts = JSON.parse(localStorage.getItem("posts"));
      this.$emit("passPosts", this.posts);
    }
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
