<template>
  <div>
    <div class="title">
      <h1>To-Do List</h1>
    </div>
    <div>
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" placeholder="Enter a new task" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.description }}
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
    <div>
      <router-link to="/home">Go to Home</router-link>
      &nbsp;
      <router-link to="/about">Go to About</router-link>
      &nbsp;
      <router-link to="/contact">Go to Contact</router-link>
      &nbsp;
      <router-link to="/chat">Go to Chat</router-link>
    </div>
  </div>
</template>

<style>
.title {
}
</style>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  async created() {
    await this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await fetch("/api/todos");
        this.todos = await response.json();
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
    async addTodo() {
      try {
        const response = await fetch("/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: this.newTodo }),
        });
        const newTodo = await response.json();
        this.todos.push(newTodo);
        this.newTodo = "";
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },
    async deleteTodo(id) {
      try {
        await fetch(`/api/todos/${id}`, { method: "DELETE" });
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    },
  },
};
</script>
