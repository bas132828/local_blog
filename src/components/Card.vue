<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="card">
      <router-link v-bind:to="'/' + post.id">
        <h1>{{ post.title }}</h1>
      </router-link>
      <p>
        {{ post.brief || post.message | snippet }}
      </p>
      <div v-if="post.comments.length > 1" class="comments-counter">
        {{ post.comments.length }} comments
      </div>
      <div v-else class="comments-counter">
        {{ post.comments.length }} comment
      </div>
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
