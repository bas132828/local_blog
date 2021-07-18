<template>
  <div class="blog-main">
    <form
      v-if="showComment"
      class="comment-form"
      v-on:submit.prevent="onSubmitComment"
    >
      <input
        type="text"
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
      <button class="btn" type="submit">Leave a comment</button>
    </form>
    <div class="blog-container flex-item">
      <h1>{{ blogContent.title }}</h1>
      <h4 v-if="blogContent.brief">
        {{ blogContent.brief }}
      </h4>
      <p>{{ blogContent.message }}</p>

      <div class="button-container">
        <router-link v-bind:to="'/edit/' + this.id" exact>
          <button class="btn btn-edit">Edit blog</button></router-link
        >
        <button class="btn btn-delete" v-on:click="deleteBlog">
          Delete blog
        </button>
      </div>
    </div>
    <div class="comments-container flex-item">
      <button class="btn-add-post" v-on:click="showHandler">
        <img
          :class="{ rotate_that_cross: showComment }"
          class="btn-add-comment--cross"
          src="../assets/cross.svg"
          alt="cross-btn"
        />
      </button>

      <div
        v-for="comment of comments.comments"
        :key="comment.id"
        class="comment"
      >
        <button
          class="btn-comment-delete"
          v-on:click="deleteComment(comment.id)"
        >
          <img
            src="../assets/cross-comment-delete.svg"
            alt="cross-delete-comment-svg"
          />
        </button>
        <h3 class="name">{{ comment.title }} <em>said:</em></h3>
        <p>
          {{ comment.content }}
        </p>
      </div>
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
.flex-item {
  margin: 6rem 3rem 3rem;
  width: 50%;
  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
.blog-main {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  background-color: #a0a0a0;
  width: 80%;
  height: 80vh;
  left: 50%;
  top: 11rem;
  transform: translate(-50%);
  overflow: hidden;
  box-shadow: 4px 4px 10px rgb(83, 83, 83);

  .button-container {
    position: relative;
    bottom: 0;
  }

  .btn-add-comment--cross {
    transition: 0.5s;
    height: 3rem;
    position: absolute;
    right: 0;
  }
}
.comments-container {
  padding-top: 4rem;

  .comment {
    width: 95%;
    background-color: #fff;
    margin: 0 0 1rem 0;
    height: auto;
    display: inline-block;
    box-shadow: 2px 2px 5px rgb(83, 83, 83);
    transition: 0.4s;
    position: relative;
    &:hover {
      box-shadow: 2px 2px 5px #cf8a3a;
      transition: 0.4s;
    }
    .name {
      position: relative;
    }
    p {
      display: inline-block;
      width: 100%;
    }
    .btn-comment-delete {
      appearance: none;
      background-color: transparent;
      border: none;
      position: absolute;
      margin-top: 0.5rem;
      margin-right: 1rem;
      right: 0;
      height: 2rem;
      z-index: 4;
      img {
        height: 2rem;
      }
    }
  }
}

.blog-container {
  position: relative;
  display: inline-block;
  color: #fff;
}

.comment-form {
  position: absolute;
  display: flex;
  height: 60vh;
  min-height: 25rem;
  width: 60vw;
  min-width: 25rem;
  background-color: #ccc;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  z-index: 5;
  button {
    width: 12rem;
  }
  input {
    display: inline-block;
    width: 80%;
    height: auto;
    appearance: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #222222;
    outline: none;
    transition: 0.4s;
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;

    &:focus {
      border-bottom: 1px solid rgb(221, 122, 65);
      transition: 0.4s;
    }
  }

  textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #222222;
    height: 2rem;
    resize: none;
    overflow: hidden;
    outline: none;
    transition: 0.4s;
    width: 80%;
    &:focus {
      border-bottom: 1px solid rgb(221, 122, 65);
      transition: 0.4s;
    }
  }
}
</style>
