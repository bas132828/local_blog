<template>
  <div id="input" class="input" :class="{ z_index_fix: show }">
    <form v-show="show" class="post-form" v-on:submit.prevent="onSubmit">
      <input
        type="text"
        id="title"
        class="title"
        placeholder="Your title"
        v-model="titleMessage"
        maxlength="25"
        required
      />
      <input
        type="text"
        id="brief"
        class="title"
        placeholder="What's your blog about(will show the beginning of the post if not mentioned)"
        v-model="brief"
      />
      <textarea
        id="message"
        class="message"
        placeholder="Your text"
        required
        v-model="textMessage"
      />
      <button class="btn" type="submit">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewShow: false,
      titleMessage: "",
      brief: "",
      textMessage: "",
      idForPost: 0,
      posts: [],
    };
  },
  methods: {
    showHandler() {
      this.$store.commit("showHandler");
    },
    addNewPost() {
      this.idForPost = Math.random()
        .toString()
        .slice(2, 8);

      this.$store.commit("addPost", {
        id: this.idForPost,
        brief: this.brief,

        title: this.titleMessage,
        message: this.textMessage,
        comments: [],
      });
      localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      this.showHandler();
    },
    onSubmit() {
      this.addNewPost();
      (this.titleMessage = ""), (this.textMessage = "");
      this.brief = "";
    },
  },
  computed: {
    show() {
      return this.$store.state.show;
    },
  },
  mounted() {
    //using localstorage to render blogs if if have smth in the there
    localStorage.getItem("posts")?.length &&
      this.$store.commit(
        "rewritePosts",
        JSON.parse(localStorage.getItem("posts"))
      );
  },
};
</script>

<style lang="scss">
#preview {
  position: absolute;
  width: 90%;
  height: 20rem;
  z-index: 1;
  background-color: #444;
}
.input {
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: -1;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  min-width: 30rem;
  min-height: 30rem;
  height: 80vh;

  .post-form {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #ccc;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: 5px 5px 15px rgb(221, 122, 65);

    input {
      display: inline-block;
      width: 80%;
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
    label {
      display: inline-block;
      outline: none;
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

      &:focus {
        border-bottom: 1px solid rgb(221, 122, 65);
        transition: 0.4s;
      }
    }
  }
}
.btn {
  width: 8rem;
  height: 3rem;
  appearance: none;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgb(109, 109, 109);
  border: none;
  font-family: "Kalam", cursive;
  margin: 1rem;
}
.z_index_fix {
  z-index: 3;
}
</style>
