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

    <div class="login">
    
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
