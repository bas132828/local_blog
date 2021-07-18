<template>
  <div id="app">
    <div id="nav">
      <div class="home-btn">
        <router-link to="/" exact class="link">Home</router-link>
      </div>
      <div class="central-text">
        <h1>Introvert blog</h1>
        <h3>Who needs the internet <br />When you have localStorage</h3>
      </div>
    </div>
    <router-view />
    <!-- <footer id="footer"><h3>this is the end...</h3></footer> -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300;400&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,700&display=swap");

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}
body {
  background-color: #ccc;
  background-size: 100%;
  background: linear-gradient(-45deg, #e7e4e4, #bdb5b5, #7cc6e0, #dbd09e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
}

#nav {
  padding: 30px;
  position: absolute;
  background-color: #666666;
  top: 0;
  width: 100%;
  height: 10rem;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
  .home-btn {
    position: absolute;
    left: 0;
    font-size: 3rem;
    margin-left: 3rem;
  }
  .link {
    text-decoration: none;
    color: #fff;
  }
  .central-text {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    margin-top: 1rem;

    h1 {
      font-family: "Lato", sans-serif;
      color: rgb(255, 255, 255);
    }
    h3 {
      font-size: 1.2rem;
      font-family: "Kalam", cursive;
      color: #fff;
    }
  }
}

body {
  background: linear-gradient(
    -45deg,
    #e7e4e49c,
    #b1aeae73,
    #adbfc591,
    #babb9f85
  );
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 600px) {
  html {
    font-size: 56%;
  }
  .blog-main {
    flex-direction: column;
  }
}
@media (max-width: 500px) {
  html {
    font-size: 50%;
  }
}
</style>
