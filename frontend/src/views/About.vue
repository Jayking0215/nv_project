<!-- frontend/src/views/About.vue -->
<template>
  <div>
    <div class="title">
      <h1>About</h1>
    </div>
    <div class="sub_title">
      <p>This is an about page_프로젝트 소개, 안내내용 넣기</p>
      <p>개발환경</p>
      <p>프로젝트 개요</p>
      <p>프로젝트 IA.img 업로드</p>
      <p>시작하기 Btn -> Home.vue로 이동</p>
      <div>
        <button type="button" @click="goToHome">시작하기</button>
      </div>
      <router-link to="/">Go to Main</router-link>
    </div>
  </div>
</template>

<style>
.title {
}
.sub_title {
}
</style>

<script>
export default {
  name: "MainPage",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
