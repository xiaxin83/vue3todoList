<template lang="">
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
      <p>~Today I need to~</p>
    </div>
  </header>
  <form class="form-wrapper" @submit.native.prevent>
    <div class="form-input">
      <input
        type="text"
        v-model="todoContent"
        @keyup.native.enter="emitAddTodo"
        placeholder="Add new todo..."
      />
    </div>
  </form>
</template>

<script>
import { ElMessage } from "element-plus";
import { defineComponent, ref } from "vue";
import shortid from "shortid";
export default defineComponent({
  emits: ["add-todo"],
  setup(props, context) {
    let todoContent = ref("");
    const emitAddTodo = () => {
      if (todoContent.value == "")
        return ElMessage({
          type: "error",
          message: "please input your Todo",
        });
      const todo = {
        id: shortid.generate(),
        content: todoContent.value,
        completed: false,
      };
      context.emit("add-todo", todo);
      todoContent.value = "";
    };

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
