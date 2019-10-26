<template>
  <aside class="menu">
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <a href="/">Dashboard</a>
      </li>
    </ul>
    <ul class="menu-list">
      <li>
        <a class="is-active">Components</a>
        <ul>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "sidebar"
};
</script>
