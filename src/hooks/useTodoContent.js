import { ref } from "vue";
import shortid from "shortid";
import { ElMessage } from "element-plus";

export default function useTodoContent(context) {
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
}
