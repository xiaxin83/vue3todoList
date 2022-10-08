<template lang="">
  <div>
    <header>
      <div class="top">
        <div class="img-wrapper">
          <img src="../assets/note.svg" alt="" />
        </div>
        <div class="text">
          <p>To-Do-List</p>
        </div>
      </div>
      <div class="bottom">
        <p>~{{ $t("animations.title") }}~</p>
      </div>
    </header>
    <form class="form-wrapper" @submit.native.prevent>
      <div class="form-input">
        <input
          type="text"
          v-model="todoContent"
          @keyup.native.enter="emitAddTodo"
          :placeholder="$t('animations.add')"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useTodoContent from "../hooks/useTodoContent";
export default defineComponent({
  emits: ["add-todo"],
  setup(props, context) {
    const { todoContent, emitAddTodo } = useTodoContent(context);
    return {
      todoContent,
      emitAddTodo,
    };
  },
});
</script>
<style lang="scss">
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  .img-wrapper {
    width: 80px;
    margin-right: 5px;
    img {
      width: 100%;
    }
  }
  .text {
    width: 100px;
    p {
      font-size: 20px;
      width: 100px;
      background-color: #fe9b45;
      padding: 15px;
      transform: rotate(3deg);
      border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    }
  }
}
.bottom {
  margin-top: 40px;
  text-align: center;
  p {
    font-size: 25px;
    font-weight: 700;
  }
}
.form-wrapper {
  display: flex;
  justify-content: center;
  .form-input {
    display: inline-block;
    flex-grow: 0.65;
    margin-right: 15px;
    input {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 3px dashed #fe7345;
      padding: 5px 0 3px;
      font-size: 18px;
      background: transparent;
    }
  }
}
</style>
