<template>
  <div class="container is-fluid">
    <div class="column">
      <Navbar></Navbar>
      <div class="columns is-mobile">
        <div class="column is-one-quarter">
          <Sidebar></Sidebar>
        </div>
        <div class="column">
          <Login></Login>
          <Profile></Profile>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    Login,
    Profile
  }
};
</script>
