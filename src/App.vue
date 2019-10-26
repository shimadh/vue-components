<template>
  <div id="app" class="site">
    <Navbar></Navbar>
    <Layout></Layout>
    <Footer></Footer>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Layout,
    Footer
  }
};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
