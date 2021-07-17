<template>
  <div id="blog" class="blog">
    <h1>{{ blogContent.title }}</h1>
    <h4 v-if="blogContent.brief">
      {{ blogContent.brief }}
    </h4>
    <p>{{ blogContent.message }}</p>
    <button class="btn-add-post" v-on:click="showHandler">new comment</button>

    <form
      v-if="showComment"
      class="comment-form"
      v-on:submit.prevent="onSubmitComment"
    >
      <input
        type="text"
        class="comment-form name"
        v-model="comment.title"
        placeholder="Enter your name"
        required
      />
      <textarea
        class="message"
        v-model="comment.content"
        placeholder="Your comment"
        required
      />
      <button type="submit">Leave a comment</button>
    </form>
    <div v-for="comment of comments.comments" :key="comment.id" class="comment">
      <h3>
        {{ comment.title }}
      </h3>

      <p>
        {{ comment.content }}
      </p>
      <button v-on:click="deleteComment(comment.id)">&times;</button>
    </div>
    <div class="button-wrapper">
      <button>Edit blog</button>
      <button v-on:click="deleteBlog">Delete blog</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      id: this.$route.params.id,
      blogContent: {},
      addCommentFlag: false,
      comment: {
        id: 0,
        title: "",
        content: "",
        pageId: this.$route.params.id,
      },
    };
  },
  methods: {
    deleteBlog() {
      this.$store.commit("deleteBlog", this.id);
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      this.$router.push("/");
    },

    deleteComment(commentId) {
      const ids = {
        cmtId: commentId,
        pageId: this.$route.params.id,
      };
      this.$store.commit("deleteComment", ids);
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
    },
    showHandler() {
      this.$store.commit("showCommentHandler");
    },
    addNewComment() {
      this.comment.id = Math.random()
        .toString()
        .slice(2, 8);
      console.log(this.comment);
      this.$store.commit("addComment", this.comment, this.comment.pageId);
      //allows us to rewrite LStorage every time we add a comment
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      this.showHandler();
      this.comment.title = "";
      this.comment.content = "";
    },
    onSubmitComment() {
      //
      this.addNewComment();

      this.$store.commit(
        "rewritePosts",
        JSON.parse(localStorage.getItem("posts"))
      );
    },
  },
  computed: {
    showComment() {
      return this.$store.state.showComment;
    },
    comments() {
      return this.$store.getters.getComments(this.id);
    },
  },
  created() {
    this.blogContent = JSON.parse(localStorage.getItem("posts")).find(
      (el) => el.id === this.id
    );
  },
  mounted() {
    // preventing bug with reloading the page and loosing state data
    localStorage.getItem("posts")?.length &&
      this.$store.commit(
        "rewritePosts",
        JSON.parse(localStorage.getItem("posts"))
      );
  },
};
</script>

<style lang="scss">
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

.blog {
  width: 80%;
  height: 90vh;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
</style>
