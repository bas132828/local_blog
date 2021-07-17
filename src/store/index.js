import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //posts should be empty array
    posts: [
      {
        id: "721210",
        brief: "",
        title: "Lorem ipsum",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus amet deserunt porro tempore. Voluptas fuga doloribus corrupti earum itaque adipisci eligendi dolorem sapiente, accusantium consectetur veniam mollitia facere, autem error quisquam natus vel iusto voluptates molestiae. Rerum quasi vel dolore sapiente sed harum id nam, magnam dolores molestiae aliquid officiis, magni, ipsum sint hic quas? Dolor placeat tempora, sit qui debitis quaerat rerum aperiam ex, pariatur consequuntur perspiciatis ab autem ad asperiores! Aliquam deleniti aspernatur veniam quod dolore, asperiores exercitationem optio assumenda fugit repellendus quam nam doloribus expedita, cupiditate explicabo ex temporibus sint necessitatibus sapiente praesentium dignissimos porro sequi placeat. Natus sapiente, ratione aliquam accusamus autem aperiam unde iusto eum debitis odit dolores ea adipisci doloribus cum eligendi praesentium similique dignissimos facere hic. Blanditiis ut id in. Iusto vero est quae. Esse explicabo doloribus voluptatum qui assumenda magni obcaecati optio, exercitationem, at sit expedita nulla fugit deleniti officia architecto. Eaque facere molestiae nemo! Ut at vero alias sed eius minima quia recusandae qui dolorem veniam provident similique praesentium, id culpa neque adipisci enim, expedita quasi sequi facere consequatur blanditiis facilis? Explicabo aliquam, ratione labore dolores distinctio incidunt itaque cumque porro rem dolor repudiandae quibusdam corporis inventore omnis saepe, voluptatum vero facere numquam, est iusto nostrum blanditiis deserunt repellat quis! Tempora ipsum voluptatibus sunt omnis, modi ratione fuga atque minus laboriosam. Quaerat suscipit commodi architecto et saepe? Obcaecati repellat, totam officiis ducimus officia distinctio magnam aperiam hic quis provident eius, atque praesentium tempora facilis. Excepturi iste ea impedit, aut, accusamus, ut laudantium sint voluptatibus incidunt corrupti itaque! Aliquam, fuga numquam, esse sint a ipsum quis, eaque porro iste voluptates delectus distinctio. Illo explicabo aliquid natus? Quis natus officiis repudiandae at, obcaecati pariatur reprehenderit laboriosam velit magni, quod mollitia. Possimus corrupti accusantium quidem! Natus, laboriosam. Ullam voluptatibus sequi consequatur voluptate error explicabo modi impedit illum reiciendis dolore esse, ipsa quos dignissimos nostrum neque molestiae excepturi eligendi quibusdam obcaecati blanditiis. Fugiat distinctio sint beatae delectus. Consequatur molestiae dignissimos quae, iste adipisci saepe. Labore molestiae tempora amet blanditiis consequuntur ratione, fuga eos voluptatibus necessitatibus rerum esse magni vero natus ex, cupiditate laudantium. Molestiae quia sint explicabo vero, numquam asperiores officiis neque nulla exercitationem! Illo, voluptate? Accusamus libero maiores impedit ad, provident saepe ea molestias nemo sunt enim dolorum similique ut, cupiditate minima laborum ex vero deserunt obcaecati et praesentium, illum maxime voluptatibus asperiores. Voluptates quod veritatis dolores error fugit, id incidunt vel maiores dolorem assumenda facilis recusandae! Veniam iusto suscipit tempora accusamus cupiditate illo soluta officia, ea commodi rerum ullam accusantium officiis? Corrupti explicabo ea autem culpa, ab et corporis? Esse libero deleniti est excepturi eligendi. Nesciunt illum ratione illo cum nostrum itaque vitae odio quae neque ducimus quibusdam consequuntur suscipit aliquid ea, architecto necessitatibus doloribus tempora officiis? Fugit dolores distinctio veritatis qui enim, quas molestias, dolorem, illo laudantium error sed? Vel sit officiis tenetur. Totam molestiae vero obcaecati consectetur! Optio est quasi impedit voluptatum dolore quidem ipsa, omnis, voluptatem unde nostrum consequatur totam quis voluptatibus non delectus a id similique. Eum, odio nisi.",
        comments: [],
      },
      {
        id: "267886",
        brief:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v",
        title: "Lorem",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        comments: [],
      },
      {
        id: "778985",
        brief: "",
        title: "Hodor Hodor",
        message:
          "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! ",
        comments: [],
      },
      {
        id: "711582",
        brief: "Lorem ipsum dolororem ipsum dolor",
        title: "Lorem ipsum dolor",
        message:
          "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooLorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.klyn. Blue bottle ennui tbh succulents.",
        comments: [
          {
            id: "187986",
            title: "Sagittis",
            content:
              "Tellus orci ac auctor augue mauris. Nulla pharetra diam sit amet nisl suscipit adipiscing. Sollicitudin tempor id eu nisl nunc mi.",
            pageId: "711582",
          },
          {
            id: "336182",
            title: "Mattis",
            content:
              "Mattis aliquam faucibus purus in. Ut lectus arcu bibendum at. Ante in nibh mauris cursus mattis molestie a. Et malesuada fames ac turpis. Laoreet suspendisse interdum consectetur libero id. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Arcu vitae elementum curabitur vitae nunc sed. Pharetra sit amet aliquam id diam maecenas ultricies. A scelerisque purus semper eget duis at tellus at urna. Potenti nullam ac tortor vitae purus. Feugiat scelerisque varius morbi enim nunc. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Quis imperdiet massa tincidunt nunc pulvinar sapien.\n\n",
            pageId: "711582",
          },
        ],
      },
      {
        id: "882407",
        brief:
          "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
        title: "Lorem ipsum",
        message:
          "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
        comments: [
          {
            id: "356917",
            title: "Lor",
            content: "Lorem ipsum",
            pageId: "882407",
          },
        ],
      },
      {
        id: "583822",
        brief: "Lorem ipsum lirem",
        title: "Lorem",
        message:
          "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
        comments: [],
      },
      {
        id: "477134",
        brief: "Ornare massa lobortis",
        title: "Ornare massa",
        message:
          "Mattis aliquam faucibus purus in. Ut lectus arcu bibendum at. Ante in nibh mauris cursus mattis molestie a. Et malesuada fames ac turpis. Laoreet suspendisse interdum consectetur libero id. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Morbi leo urna molestie at elementum eu facilisis sed. Arcu vitae elementum curabitur vitae nunc sed. Pharetra sit amet aliquam id diam maecenas ultricies. A scelerisque purus semper eget duis at tellus at urna. Potenti nullam ac tortor vitae purus. Feugiat scelerisque varius morbi enim nunc. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Quis imperdiet massa tincidunt nunc pulvinar sapien.\n\n",
        comments: [
          {
            id: "122442",
            title: "Lorem",
            content:
              "Mattis aliquam faucibus purus in. Ut lectus arcu bibendum at. Ante in nibh mauris cursus mattis molestie a. Et malesuada fames ac turpis. Laoreet suspendisse interdum consectetur libero id.",
            pageId: "477134",
          },
          {
            id: "925944",
            title: "Lorem ipsum",
            content:
              "Venenatis urna cursus eget nunc scelerisque viverra mauris in. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.",
            pageId: "477134",
          },
        ],
      },
    ],
    show: false,
    showComment: false,
  },
  mutations: {
    editThisBlog: (state, options) => {
      const postFound = state.posts.find((el) => el.id === options.id);
      postFound.message = options.text;
      (postFound.title = options.title), (postFound.brief = options.brief);
    },

    showHandler: (state) => {
      state.show = !state.show;
    },
    showCommentHandler: (state) => {
      state.showComment = !state.showComment;
    },

    addPost: (state, data) => {
      state.posts.push(data);
    },
    rewritePosts: (state, newPosts) => {
      state.posts = newPosts;
    },

    addComment: (state, newComment) => {
      const postWanted = state.posts.find((el) => el.id === newComment.pageId);
      postWanted?.comments.push(newComment);
    },
    deleteComment: (state, ids) => {
      const postFound = state.posts.find((el) => el.id === ids.pageId);
      const commentNeeded = postFound.comments.findIndex(
        (el) => el.id === ids.cmtId
      );
      postFound.comments.splice(commentNeeded, 1);
    },
    deleteBlog: (state, id) => {
      const postFound = state.posts.findIndex((el) => el.id === id);
      state.posts.splice(postFound, 1);
    },
  },
  getters: {
    getComments: (state) => (id) => {
      const postFound = state.posts.find((el) => el.id === id);
      return postFound || [];
    },
  },
  actions: {},
  modules: {},
});
