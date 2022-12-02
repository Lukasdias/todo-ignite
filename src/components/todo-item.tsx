import React, { memo } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Todo, useTodos } from "../services/todos";
import TodoCheckbox from "./todo-checkbox";
import { Trash } from "phosphor-react";

function TodoItem({ ...props }: Todo) {
  const { id, completed, text } = props;
  const { toggleTodo, deleteTodo } = useTodos();
  return (
    <div
      className={
        "w-full p-4 bg-gray-400 rounded-default flex items-center justify-between"
      }
    >
      <TodoCheckbox checked={completed} onClick={() => toggleTodo(id)} />
      <span className={"text-gray-100 text-sm ml-3"} style={{ flex: 10 }}>
        {text}
      </span>
      <Trash
        weight={"bold"}
        className={
          "w-6 h-6 text-gray-300 cursor-pointer hover:text-danger transition duration-200 hover:scale-110"
        }
        style={{ flex: 1 }}
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
}

export default memo(TodoItem);
