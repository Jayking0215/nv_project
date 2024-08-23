<!-- frontend/src/views/Chat.vue -->
<template>
  <div>
    <h1>Chatting</h1>
    <p>Real Time Chat service</p>

    <div v-for="(message, index) in messages" :key="index">
      {{ message }}
    </div>

    <input 
      v-model="newMessage" 
      @keyup.enter="sendMessage" 
      placeholder="Type a message..." 
    />

    <router-link to="/">Go to Main</router-link>
  </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  name: "ChatPage",
  data() {
    return {
      socket: null,
      messages: [],
      newMessage: ""
    };
  },
  created() {
    this.socket = io("http://localhost:3000");
    
    // 서버로부터 'chat message' 이벤트를 수신하여 메시지 배열에 추가
    this.socket.on("chat message", (msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        // 서버로 'chat message' 이벤트 전송
        this.socket.emit("chat message", this.newMessage);
        this.newMessage = "";
      }
    }
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 소켓 연결 해제
    if (this.socket) {
      this.socket.disconnect();
    }
  }
};
</script>

<style scoped>
/* 스타일은 필요에 따라 추가 */
</style>