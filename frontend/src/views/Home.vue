<!-- frontend/src/views/About.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p>This is CRM-Home with admin page & login</p>
    <router-link to="/">Go to Main</router-link>
    &nbsp;
    <router-link to="/about">Go to About</router-link>
    &nbsp;
    <router-link to="/contact">Go to Contact</router-link>
    &nbsp;

    <div class="regi">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
