<template>
  <div>
    <div v-for="post in posts" :key="post.id" class="card">
      <h1>{{ post.title }}</h1>
      <p>
        {{ post.message }}
      </p>
      <div class="comments-counter">3 comments</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  // data() {
  //   return;
  // },
};
</script>

<style></style>
