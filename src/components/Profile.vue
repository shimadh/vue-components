<template>
  <div class="column is-half">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="avatar" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="avatar" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{name}}</p>
            <p class="subtitle is-6">
              <a :href="login_url" target="_blank">@{{login}}</a>
            </p>
          </div>
        </div>

        <div class="content">{{ introduction }}</div>
        <div class="tags has-addons">
          <span class="tag">Skills:</span>
        </div>
        <div class="tags">
          <span class="tag is-link is-light" v-for="(skill, key) in skills" :key="key">{{skill}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "profile",
  data() {
    return {
      login: "",
      login_url: "",
      name: "",
      avatar: "",
      introduction:
        "Hello, I am a fullstack Javscript Developer. This is the very first vue course i took my time for practicing my VueJs skills to the next level from lean Vue Js in 30 days program!",
      skills: ["Javascipt", "Vue", "React", "Node", "sequelize", "Php"]
    };
  },
  created() {
    axios.get("https://api.github.com/users/shimadh").then(response => {
      this.login = response.data.login;
      this.login_url = response.data.html_url;
      this.name = response.data.name;
      this.avatar = response.data.avatar_url;
    });
  },
  methods: {}
};
</script>
