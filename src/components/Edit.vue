<template>
  <div class="input">
    <form class="post-form" v-on:submit.prevent="onSubmitEdition">
      <input
        type="text"
        id="title"
        class="title"
        placeholder="Your new title"
        v-model="titleMessageEdited"
        maxlength="25"
        required
      />
      <input
        type="text"
        id="brief"
        class="title"
        placeholder="Your new brief"
        v-model="brief"
      />
      <textarea
        id="message"
        class="message"
        placeholder="Your new text"
        required
        v-model="textMessage"
      />
      <button class="btn" type="submit">Post</button>
    </form>
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
