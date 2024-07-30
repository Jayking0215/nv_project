<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Loading...",
    };
  },
  async create() {
    try {
      const response = await fetch("/api");
      const data = await response.json();
      this.message = "Server Time: ${data[0].now}";
    } catch (e) {
      this.message = "Failed to load message";
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
