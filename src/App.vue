<template>
  <div id="app">
    <!-- <h1>{{ welcome }}</h1> -->
    <Login></Login>
    <!-- <Profile></Profile> -->
  </div>
</template>

<script>
import Login from "./components/Login.vue";
// import Profile from "./components/ProfileCard.vue";

export default {
  name: "app",
  data() {
    return {
      welcome: "Welcome to learn Vue Js in 30 days"
    };
  },
  components: {
    Login
    // Profile
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
