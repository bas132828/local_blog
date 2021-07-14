<template>
  <div class="home">
    <button class="btn-add-post">new post</button>
    <div class="container">
      <article class="card">
        <h1>First post title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          possimus aliquam veniam praesentium, rerum minima quaerat ullam
          accusamus omnis voluptatem distinctio nesciunt quisquam provident
          consequuntur!
        </p>
        <div class="comments-counter">3 comments</div>
      </article>
      <article class="card">
        <h1>This is a post title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eius
          vel. Rerum eum asperiores quae.
        </p>
        <div class="comments-counter">3 comments</div>
      </article>
      <article class="card">
        <h1>Third post title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          nesciunt perferendis dolores recusandae nihil porro neque, quidem
          quae.
        </p>
        <div class="comments-counter">3 comments</div>
      </article>
      <form class="post-form">
        <label for="#text">Title</label>
        <input type="text" id="title" class="title" />
        <label for="#message"></label>
        <input type="text" id="message" class="message" />
        <button type="submit">Post</button>
      </form>
      <article class="post">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illum
          beatae soluta cupiditate, nobis nulla ducimus iure laboriosam alias
          illo facilis itaque odit maxime repellat ab distinctio eveniet
          corporis! Blanditiis molestiae earum officia itaque quod est minima?
          Exercitationem pariatur officiis dolor ad recusandae dolorum et
          quaerat aliquid qui sequi maiores itaque, modi sint dolore esse sit
          voluptate quo. Voluptas eum nam, tenetur autem temporibus at mollitia
          soluta sed ab unde repellendus ipsum! Tempora enim perspiciatis fuga
          cumque beatae doloribus mollitia expedita veritatis animi deserunt,
          facere, ipsa iusto iure amet id neque sit saepe officiis laboriosam
          voluptas debitis ipsum a rem.
        </p>
        <form class="comment-form">
          <input type="text" class="comment-form name" />
          <input type="text" class="comment-form comment" />
          <button>Leave a comment</button>
        </form>
        <div class="comment">
          <h3>Ivan</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            iure maiores ipsam suscipit accusamus placeat! At quo ad velit
            eligendi recusandae, impedit animi provident quia obcaecati non
            dolores commodi qui?
          </p>
        </div>
        <div class="comment">
          <h3>Ivan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
            ullam.
          </p>
        </div>
        <div class="comment">
          <h3>Ivan</h3>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Card from "@/components/Card.vue";

export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
  data: () => ({
    message: [
      {
        title: "Test title",
        message: "test message",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
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

.post {
  width: 80%;
  height: auto;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.title {
  width: 80%;
}
.message {
  width: 80%;
  // height: 5rem;
}
.post-form {
  width: 80%;
  height: 10rem;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  button {
    width: 5rem;
    height: 2rem;
    appearance: none;
    background-color: #fff;
  }
}

.comments-counter {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 4rem;
  height: 1rem;
  background-color: #fff;
  font-size: 10px;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 80%;
  height: 10rem;
  background-color: #42b983;
  margin: 2rem;
  position: relative;
}
.btn-add-post {
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 3rem;
  appearance: none;
  background-color: #42b983;
  color: #fff;
}
</style>
