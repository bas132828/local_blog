<template>
  <div class="cards-container observer-root">
    <div v-for="post in posts" :key="post.id" class="card observable">
      <router-link class="router_link" v-bind:to="'/' + post.id"> </router-link>
      <h4 class="blog-date">posted on {{ post.date }}</h4>
      <h1>{{ post.title }}</h1>
      <h4>
        {{ post.brief || post.message | snippet }}
      </h4>
      <div class="comments-counter">
        {{ post.comments.length }}
        {{ (post.comments.length === 1 && "comment") || "comments" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style lang="scss">
//
.router_link {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.cards-container {
  display: grid;
  margin: 5rem 0 15rem 0;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 3rem 3rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, 40rem);
  justify-content: space-around;
  justify-items: stretch;
  position: relative;
  top: 10rem;
}
.card {
  display: inline-block;
  position: relative;
  height: 40rem;
  width: 100%;
  background-color: #aaaaaa;
  box-shadow: 5px 5px 15px #000;
  transition: 0.3s;

  .router_link {
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
      color: rgb(66, 66, 66);
    }
  }

  &:hover {
    transform: translateY(-1rem);
    transition: 0.3s;
    box-shadow: 5px 5px 15px rgb(221, 122, 65);
  }
  .blog-date {
    display: inline-block;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    width: 5rem;
    height: auto;
    margin: 0.3rem;
    font-size: 1rem;
    color: rgb(235, 235, 235);
  }
  h1 {
    font-family: "Lato", sans-serif;
    margin-top: 3rem;
  }
  h4 {
    font-family: "Kalam", cursive;
    color: #fff;
    margin: 8rem 3rem;
    width: 80%;
  }
  .comments-counter {
    position: relative;
    bottom: -10rem;
    color: #fff;
    font-family: "Kalam", cursive;
  }
}
</style>
