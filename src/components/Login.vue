<template>
  <div class="column is-half">
    <p class="title">Login</p>

    <div class="field">
      <label class="label">User Name</label>
      <div class="control">
        <input v-model="username" class="input" type="text" placeholder="Username">
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control">
        <input v-model="password" class="input" type="password" placeholder="Password">
      </div>
    </div>

    <div class="field">
      <button class="button is-primary" @click="submit">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      errors: {}
    };
  },
  methods: {
    submit() {
      window.console.log(this.username, this.password);
    }
  }
};
</script>