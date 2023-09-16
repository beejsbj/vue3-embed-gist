import GithubGist from "./components/GithubGist.vue";

export default {
  install: (app, options) => {
    app.component("GithubGist", GithubGist);
  },
};
