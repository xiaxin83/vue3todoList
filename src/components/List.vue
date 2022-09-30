<template lang="">
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      @change-state="todo.completed = $event.target.checked"
    />
  </ul>
</template>
<script>
import Item from "./item.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { Item },
  props: {
    todos: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
});
</script>
<style lang="scss">
.todo-main {
  box-sizing: border-box;
  perspective: 350px;
}
</style>
