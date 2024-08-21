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
            <td>node.js, vue.js, HTML/CSS</td>
        </tr>
        <tr>
            <th>OS</th>
            <td>MacOS</td>
        </tr>
        <tr>
            <th>Server</th>
            <td>Express.js</td>
        </tr>
        <tr>
            <th>Tools</th>
            <td>VSCode</td>
        </tr>
        <tr>
            <th>CI/CD</th>
            <td>Git</td>
        </tr>
        <tr>
            <th>DBMS</th>
            <td>PostgrSQL, DBeaver</td>
        </tr>
        <tr>
            <th>개발기간</th>
            <td>2024.06.01 ~ ing</td>
        </tr>
        <tr>
            <th>목표</th>
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
