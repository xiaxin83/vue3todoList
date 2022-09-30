<template lang="">
  <div class="todo-footer">
    <span class="left_text" v-if="todos.length == 0 ? false : true"
      >{{ todos.length }}item left</span
    >
    <el-button
      v-if="todos.length == 0 ? false : true"
      type="text"
      v-for="filter in filters"
      :key="filter.value"
      class="filter"
      @click="$emit('change-filter', filter.value)"
      :class="{ active: selected === filter.value }"
    >
      {{ filter.label }}
    </el-button>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  props: {
    todos: {
      type: Array,
      default: () => {
        return [];
      },
    },
    selected: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  setup(props) {
    const buttonShow = ref(false);
    const filters = [
      { label: "all", value: "all" },
      { label: "done", value: "done" },
      { label: "incomplete", value: "todo" },
    ];

    return { filters, buttonShow };
  },
});
</script>
<style lang="scss">
.todo-footer {
  display: flex;
  justify-content: space-evenly;
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  padding: 10px;

  .filter {
    // display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 5px;
    // width: auto;
    // padding: 1px;
    height: 40px;
    font-size: 10px;
    box-sizing: border-box;
    // background-color: #fe7345;
    color: #fe7345;
    cursor: pointer;
    border-radius: 10px;
  }
  .active {
    transform: scale(1.2);
    transition: all 60ms ease-out;
  }
}
</style>
