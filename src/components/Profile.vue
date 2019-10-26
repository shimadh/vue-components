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
            <p class="subtitle is-6">@shimadh</p>
          </div>
        </div>

        <div class="content">
          {{ introduction }}
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
      name: "shimad",
      avatar: "https://avatars1.githubusercontent.com/u/12815658?v=4",
      introduction:
        "Hello, I am a fullstack Javscript Developer. This is the very first vue course i took my time for practicing my VueJs skills to the next level from lean Vue Js in 30 days program!",
      skills: ["Javascipt", "Vue", "React", "Node", "sequelize", "Php"]
    };
  },
  methods: {}
};
</script>
