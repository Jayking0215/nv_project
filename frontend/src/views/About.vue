<!-- frontend/src/views/About.vue -->
<template>
  <div>
    <div class="title">
      <h1>About</h1>
    </div>
    <div class="sub_title">
      <p>This is an about page_프로젝트 소개, 안내내용 넣기</p>
      <p>Node, Vue Project</p>
      <table>
        <tr>
          <th>사용언어</th>
          <th>OS</th>
          <th>Server</th>
          <th>Tools</th>
          <th>CI/CD</th>
          <th>DBMS</th>
          <th>개발기간</th>
          <th>목표</th>
        </tr>
        <tr>
          <td>node.js, vue.js, HTML/CSS</td>
          <td>MacOS</td>
          <td>Express.js</td>
          <td>VSCode</td>
          <td>Git</td>
          <td>PostgrSQL, DBeaver</td>
          <td>2024.06.01 ~ ing</td>
          <td>
            <p>
              Java와 node.js차이 확인하기<br />
              node=single thread, Spring=Thread in HTTP
            </p>
          </td>
        </tr>
      </table>
      <p>프로젝트 개요</p>
      <div>
        <p>프로젝트 IA</p>
        <img src="" />
      </div>
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
