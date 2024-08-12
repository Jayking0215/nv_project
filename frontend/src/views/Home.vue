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

    <div class="forms">
      <!-- 회원가입 폼 -->
      <div class="regi">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <input v-model="username" placeholder="Username" required />
          <input v-model="email" type="email" placeholder="Email" required />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>

      <!-- 로그인 폼 -->
      <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input v-model="loginUsername" placeholder="Username" required />
          <input
            v-model="loginPassword"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.forms {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.regi,
.login {
  width: 45%;
}
</style>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      // 회원가입 필드
      username: "",
      email: "",
      password: "",

      // 로그인 필드
      loginUsername: "",
      loginPassword: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password,
          }),
        });

        if (response.ok) {
          alert("Registration successful!");
          this.username = "";
          this.email = "";
          this.password = "";
        } else {
          const error = await response.json();
          alert(`Error: ${error.message}`);
        }
      } catch (error) {
        console.error("Error registering user:", error);
        alert("An error occurred during registration.");
      }
    },
    async login() {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.loginUsername,
            password: this.loginPassword,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          alert(`Login successful! Welcome, ${data.user.username}.`);
          this.loginUsername = "";
          this.loginPassword = "";
        } else {
          const error = await response.json();
          alert(`Error: ${error.error}`);
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("An error occurred during login.");
      }
    },
  },
};
</script>
