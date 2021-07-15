<template>
  <div class="home">
    <button class="btn-add-post" v-on:click="show = !show">new post</button>
    <div class="container">
      <Input-form :show="show" v-on:passPosts="updatePosts($event)" />

      <Card v-if="this.posts.length > 0" :posts="posts" class="wrapper" />
      <p v-else>Click a new post button to make your firts post!</p>
      <Post v-show="false" />
    </div>
  </div>
</template>
<script>
// v-for="post in posts" :key="post.id"

import Card from "@/components/Card.vue";
import InputForm from "@/components/InputForm.vue";
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: { Card, Post, InputForm },
  data() {
    return {
      show: false,
      posts: [],
    };
  },
  methods: {
    updatePosts(data) {
      this.posts = data;
      this.show = false;
      console.log(this.posts);
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  width: 100%;
}

.comment {
  width: 80%;
  background-color: #fff;
  margin: 1rem;
}

.comment-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40rem;
  height: 5rem;
}

.post {
  width: 80%;
  height: auto;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.title {
  width: 80%;
}
.message {
  width: 80%;
  // height: 5rem;
}
.post-form {
  width: 80%;
  height: 10rem;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  button {
    width: 5rem;
    height: 2rem;
    appearance: none;
    background-color: #fff;
  }
}

.comments-counter {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 4rem;
  height: 1rem;
  background-color: #fff;
  font-size: 10px;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 80%;
  height: 10rem;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
}
.btn-add-post {
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 3rem;
  appearance: none;
  background-color: #42b983;
  color: #fff;
}
</style>
