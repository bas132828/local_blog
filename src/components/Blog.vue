<template>
  <div id="blog">
    <h1>{{ blogContent.title }}</h1>
    <div>{{ blogContent.message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogContent: {},
    };
  },
  created() {
    const tempId = this.id;
    console.log(tempId);
    this.blogContent = JSON.parse(localStorage.getItem("posts")).find(
      (el) => el.id === +tempId
    );
  },
};
</script>

<style></style>
