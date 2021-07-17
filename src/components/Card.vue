<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="card">
      <router-link v-bind:to="'/' + post.id">
        <h1>{{ post.title }}</h1>
      </router-link>
      <p>
        {{ post.brief || post.message | snippet }}
      </p>
      <div class="comments-counter">3 comments</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>

<style></style>
