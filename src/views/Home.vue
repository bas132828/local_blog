<template>
  <div class="home">
    <button class="btn-add-post" v-on:click="showHandler">
      <img
        class="btn-add-post--cross"
        src="../assets/cross.svg"
        alt="cross-svg"
        :class="{ rotate_that_cross: show }"
      />
    </button>
    <Input-form />

    <Card v-if="posts.length" :show="show" />
    <p class="no-post-message" v-show="posts.length === 0">
      Click a new post button to make your firts post!
    </p>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import InputForm from "@/components/InputForm.vue";

export default {
  name: "Home",
  components: { Card, InputForm },
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
  //checking if we have some dummy data hardcoded and load it to localstorage to
  beforeCreate() {
    this.$store.state.posts.length &&
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
  },
};
</script>

<style lang="scss">
.btn-add-post {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  background-color: transparent;
  border: none;
  appearance: none;

  .btn-add-post--cross {
    transition: 0.7s;
    height: 4rem;
  }
}
.no-post-message {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  font-size: 4rem;
  font-family: "Kalam", cursive;
}
.rotate_that_cross {
  transform: rotate(45deg);
  transition: 0.7s;
}
.title {
  width: 80%;
}
.message {
  width: 80%;
}
</style>
