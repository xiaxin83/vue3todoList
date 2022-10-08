<template lang="">
  <li
    class="todoItem"
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :class="{ done: todo.completed }"
  >
    <label>
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="$emit('change-state', $event)"
      />
      <span>&nbsp;{{ todo.content }}</span>
    </label>
    <div class="btn btn-danger" v-if="isShow" @click="delet(todo.id)">删除</div>
  </li>
</template>
<script>
import { defineComponent, ref, inject } from "vue";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const del = inject("del");
    const doneItem = inject("doneItem");
    const isShow = ref(false);
    function mouseHandler(flag) {
      if (flag) {
        isShow.value = true;
      } else {
        isShow.value = false;
      }
    }
    function delet(id) {
      del(id);
    }

    return {
      isShow,
      mouseHandler,
      delet,
    };
  },
});
</script>
<style lang="scss">
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
.todoItem.done {
  background-color: #fe7345;
  border-radius: 5px;
  animation: flipInX-132cabf7 0.75s ease-in-out both;
  label {
    text-decoration: line-through;
    font-style: italic;
  }
}
@keyframes flipInX-132cabf7 {
  0% {
    transform: rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: rotateX(-10deg);
  }
  70% {
    transform: rotateX(10deg);
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
</style>
