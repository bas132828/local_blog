<template>
  <div id="blog" class="blog">
    <h1>{{ blogContent.title }}</h1>
    <div>{{ blogContent.message }}</div>
    <form class="comment-form" v-on:submit.prevent="onSubmitComment">
      <input
        type="text"
        class="comment-form name"
        v-model.lazy="commentTitle"
      />
      <input
        type="text"
        class="comment-form comment"
        v-model.lazy="commentContent"
      />
      <button type="submit">Leave a comment</button>
    </form>
    <div class="comment">
      <h3>{{ commentTitle }}</h3>
      <p>
        {{ commentContent }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogContent: {},
      commentTitle: "",
      commentContent: "",
      comments: [],
    };
  },
  methods: {
    onSubmitComment() {
      this.comments.push({
        //comment id
        commentTitle: this.commentTitle,
        commentContent: this.commentContentx,
      });
      //comment id
      this.commentTitle = "";
      this.commentContent = "";
    },
  },
  created() {
    const tempId = this.id;
    this.blogContent = JSON.parse(localStorage.getItem("posts")).find(
      (el) => el.id === tempId
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
