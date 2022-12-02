import React from "react";
import shortid from "shortid";
import { useTodos } from "../services/todos";
import Pill from "./pill";
import TodoItem from "./todo-item";
import TodoListEmpty from "./todo-list-empy";

export default function TodoList() {
  const { todos, todosCountValue, completedTodosCountValue } = useTodos();

  return (
    <div
      className={
        "w-full flex flex-col items-center max-w-[355px] sm:max-w-[736px]"
      }
    >
      <div className={"w-full flex justify-between my-6"}>
        <div className={"flex flex-row gap-2 items-center"}>
          <span className={"text-blue-400 text-sm font-bold"}>
            Tarefas criadas
          </span>{" "}
          <Pill>{todosCountValue}</Pill>
        </div>
        <div className={"flex flex-row gap-2 items-center"}>
          <span className={"text-purple-400 text-sm font-bold"}>
            Concluídas{" "}
          </span>{" "}
          <Pill>
            {todosCountValue === 0
              ? 0
              : `${completedTodosCountValue} de ${todosCountValue}`}
          </Pill>
        </div>
      </div>
      <div className={"w-full flex flex-col items-center gap-3"}>
        {todosCountValue > 0 ? (
          todos.map((todo) => <TodoItem key={shortid.generate()} {...todo} />)
        ) : (
          <TodoListEmpty />
        )}
      </div>
    </div>
  );
}
