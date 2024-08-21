<!-- frontend/src/views/Contact.vue -->
<template>
  <div>
    <h1>Admin</h1>
    <p>This is a ADMIN page.</p>
    <router-link to="/">Go to Main</router-link>
    <div class="memManage">
      <p>고객관리</p>
    </div>
    <div class="proManage">
      <p>상품관리</p>
    </div>
    <div class="qnaManage">
      <p>문의관리</p>
    </div>
    <p>contact에서 admin으로 변경하기</p>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
