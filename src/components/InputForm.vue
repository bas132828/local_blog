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
      posts: [
        // {
        //   id: 1,
        //   title: "Test title",
        //   message:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus aliquam veniam praesentium, rerum minima quaerat ullam!",
        //   comments: [
        //     {
        //       author: "",
        //       comment: "",
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   title: "Test2 title2",
        //   message:
        //     "Lorem ipsum dolor elit. Delectus possimus aliquam veniam praesentium, rerum minima quaerat ullam!",
        // },
      ],
    };
  },
  methods: {
    addNewPost() {
      this.posts.push({
        id: this.idForPost,
        title: this.titleMessage,
        message: this.textMessage,
      });
      localStorage.setItem("posts", JSON.stringify(this.posts));
    },
    onSubmit() {
      this.addNewPost();
      this.idForPost++;
      this.$emit("passPosts", this.posts);
      (this.title = ""), (this.titleMessage = ""), (this.textMessage = "");
    },
  },
  beforeCreate() {
    if (localStorage.getItem("posts"))
      this.posts = JSON.parse(localStorage.getItem("posts"));
    this.$emit("passPosts", this.posts);
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
