<template>
  <div class="edition-container">
    <div id="input">
      <form class="post-form" v-on:submit.prevent="onSubmitEdition">
        <label for="#text">Title</label>
        <input
          type="text"
          id="title"
          class="title"
          placeholder="Your title"
          v-model="titleMessageEdited"
          required
        />
        <label for="#brief">Brief</label>
        <input
          type="text"
          id="brief"
          class="title"
          placeholder="What's your blog about(will show the begging of the post if not mentioned)"
          v-model="brief"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      id: this.$route.params.id,
      titleMessageEdited: "",
      brief: "",
      textMessage: "",
    };
  },
  methods: {
    onSubmitEdition() {
      this.$store.commit("editThisBlog", {
        id: this.id,
        title: this.titleMessageEdited,
        brief: this.brief,
        text: this.textMessage,
      });
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      this.$router.push(`/${this.$route.params.id}`);
    },
  },
  mounted() {
    // preventing bug with reloading the page and loosing state data
    this.$store.commit(
      "rewritePosts",
      JSON.parse(localStorage.getItem("posts"))
    );
  },
};
</script>

<style lang="scss"></style>
