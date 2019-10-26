<template>
  <main class="container is-fluid wrapper">
    <div class="column">
      <div class="columns is-mobile">
        <div class="column is-one-quarter">
          <Sidebar></Sidebar>
        </div>
        <div class="column">
          <Breadcrumb></Breadcrumb>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Breadcrumb
  }
};
</script>

<style scoped>
.wrapper {
  flex: 1;
}
</style>
