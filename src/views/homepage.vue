<template>
  <div class="box">
    <div class="container">
      <Header :tid="todos.length" @add-todo="addTodo" />
      <List :todos="filteredTodos" />
      <Footer
        :todos="todos"
        :selected="filter"
        @change-filter="filter = $event"
      />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import List from "@/components/List.vue";
import Footer from "@/components/Footer.vue";
import {
  defineComponent,
  ref,
  provide,
  computed,
  watch,
  onMounted,
  toRef,
} from "vue";

export default {
  name: "Home",
  components: { Header, List, Footer },

  setup() {
    provide("del", del);
    provide("doneItem", doneItem);
    let todos = ref([]);
    const filter = ref("all");
    // 定义添加任务的函数
    const addTodo = (todo) => todos.value.push(todo);
    // 删除
    function del(index) {
      todos.value.splice(index, 1);
    }
    // 已完成
    function doneItem(index) {
      console.log(todos[index].completed);
      todos[index].completed = !todos[index].completed;
    }
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });
    watch(
      todos,
      (value) => {
        console.log(value);
        localStorage.setItem("todokey", JSON.stringify(value));
      },
      { deep: true }
    );
    onMounted(() => {
      let todokey = localStorage.getItem("todokey");
      todos.value = JSON.parse(todokey) || [];
    });
    return {
      doneItem,
      todos,
      addTodo,
      del,
      filter,
      filteredTodos,
      // todokey,
    };
  },
};
</script>
<style lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100%;

  flex-direction: column;

  background: linear-gradient(to right, #ffb0bb, #ffb7b3, #ffc0a4, #ffc2a1);
  .container {
    width: 500px;
    height: auto;
    box-sizing: border-box;
    background-color: #f2f2f2;
    border-radius: 5%;
  }
}
</style>
