<template>
  <div class="box">
    <el-select
      v-model="LValue"
      class="m-2"
      placeholder="chooseLanguage"
      size="small"
      @change="LanguageChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
import { useI18n } from "vue-i18n";
import useFileteredTodos from "../hooks/useFileteredTodos";
import { ref, provide, watch, onMounted } from "vue";

export default {
  name: "Home",
  components: { Header, List, Footer },

  setup() {
    provide("del", del);
    provide("doneItem", doneItem);
    let todos = ref([]);
    const { filter, filteredTodos } = useFileteredTodos(todos);
    const { locale } = useI18n();
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
    // 国际化
    function LanguageChange(val) {
      console.log(val);
      locale.value = val == "en" ? "en" : "zh";
    }

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
    const LValue = ref("English");
    const options = ref([
      { value: "zh", label: "简体中文" },
      {
        value: "en",
        label: "English",
      },
    ]);
    return {
      doneItem,
      todos,
      addTodo,
      del,
      filter,
      filteredTodos,
      // todokey,
      options,
      LValue,
      LanguageChange,
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
