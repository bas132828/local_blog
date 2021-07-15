<template>
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
    <label for="#message"></label>
    <input
      type="text"
      id="message"
      class="message"
      placeholder="Your text"
      required
      v-model="textMessage"
    />
    <button type="submit">Post</button>
  </form>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },

  data() {
    return {
      //   show: false, titleMessage: "",
      textMessage: "",
      idForPost: 3,
      posts: [
        {
          id: 1,
          title: "Test title",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus aliquam veniam praesentium, rerum minima quaerat ullam!",
        },
        {
          id: 2,
          title: "Test2 title2",
          message:
            "Lorem ipsum dolor elit. Delectus possimus aliquam veniam praesentium, rerum minima quaerat ullam!",
        },
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
      // this.show = false;
    },
  },
};
</script>

<style></style>
