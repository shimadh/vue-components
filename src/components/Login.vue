<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent"></div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="title">Login</p>

        <div class="field">
          <label class="label">Usre Name</label>
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
          <button class="button is-primary" @click="submit">Submit</button>
        </div>
      </article>
    </div>
    <div class="tile is-parent"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
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