<!-- frontend/src/views/About.vue -->
<template>
  <div>
    <h1>About</h1>
    <p>This is an about page_프로젝트 소개, 안내내용 넣기</p>
    <p>Main.vue 추가; TODO, 각 페이지 이동 link</p>
    <p>Home.vue = CRM의 홈; 각 link, Admin.vue link->login</p>
    <p>Admin.vue; 고객, 문의 등 관리 (미정)</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
