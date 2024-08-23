<!-- frontend/src/views/Chat.vue -->
<template>
  <div>
    <h1>Chatting</h1>
    <p>Real Time Chat service</p>

    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
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
      newMessage: "",
    };
  },
  created() {
    this.socket = io("http://localhost:3000");

    this.socket.on("chat message", (msg) => {
      this.messages.push({ id: this.messages.length, text: msg });
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.socket.emit("chat message", this.newMessage);
        this.newMessage = "";
      }
    },
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  },
};
</script>
