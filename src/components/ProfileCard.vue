<template>
  <div class="hello">
    <h2>Profile</h2>
    <img :src="avatar" alt>
    <p>{{ name }}</p>
    <p>{{ introduction }}</p>
    <button @click="getIntroduction">Who am i?</button>
    <p>
      <strong>Skills</strong>
    </p>
    <p v-for="skill in skills" :key="skill">{{skill}}</p>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      name: "shimad",
      avatar: "https://avatars1.githubusercontent.com/u/12815658?v=4",
      introduction: "",
      skills: ["Javascipt", "Vue", "React", "Node", "sequelize", "Php"]
    };
  },
  methods: {
    getIntroduction() {
      this.introduction =
        this.introduction === ""
          ? "Hello, I am a fullstack Javscript Developer. This is the very first vue course i took my time for practicing my VueJs skills to the next level from lean Vue Js in 30 days program!"
          : "";
    }
  }
};
</script>
