<template lang="">
  <div class="todo-footer">
    <span class="left_text" v-if="todos.length == 0 ? false : true"
      >{{ todos.length }}{{ $t("animations.item") }}</span
    >
    <el-button
      v-if="todos.length == 0 ? false : true"
      link
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
    const filters = [
      { label: "all", value: "all" },
      { label: "done", value: "done" },
      { label: "incomplete", value: "todo" },
    ];
    return { filters };
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
    margin: 0;
    padding: 0;
    margin-right: 5px;

    height: 40px;
    font-size: 10px;
    box-sizing: border-box;

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
