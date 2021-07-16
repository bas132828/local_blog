<template>
  <div class="home">
    <button class="btn-add-post" v-on:click="showHandler">new post</button>
    <div class="container">
      <Input-form />
      <Card v-if="posts.length > 0" class="wrapper" :show="show" />
      <p v-else>Click a new post button to make your firts post!</p>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import InputForm from "@/components/InputForm.vue";

export default {
  name: "Home",
  components: { Card, InputForm },
  data() {
    return {};
  },
  methods: {
    showHandler() {
      this.$store.commit("showHandler");
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    show() {
      return this.$store.state.show;
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
