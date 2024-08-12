<!-- frontend/src/views/About.vue -->
<template>
  <div>
    <div class="title">
      <h1>About</h1>
    </div>
    <div class="sub_title">
      <p>This is an about page_프로젝트 소개, 안내내용 넣기</p>
      <p>Home.vue = CRM의 홈; 각 link, Admin.vue link->login</p>
      <p>Admin.vue; 고객, 문의 등 관리 (미정)</p>
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
};
</script>
