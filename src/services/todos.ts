import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";
import shortid from "shortid";
import { toast } from "react-hot-toast";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const notifyTodoAdd = () => toast.success("Tarefa adicionada com sucesso!");
const notifyTodoAddDuplicate = () =>
  toast.error("Erro ao adicionar tarefa! Tarefa repetida.");
const notifyTodoEmpty = () =>
  toast.error("Erro ao adicionar tarefa! Tarefa vazia.");
const notifyTodoDelete = () => toast.success("Tarefa removida com sucesso!");

const todosAtom = atomWithStorage<Todo[]>("todo-ignite", []);

const addTodoAtom = atom(null, (get, set, text: string) => {
  if (!text) {
    notifyTodoEmpty();
    return;
  }

  const todos = get(todosAtom);

  if (todos.some((todo) => todo.text === text)) {
    notifyTodoAddDuplicate();
    return;
  }

  const newTodo = {
    id: shortid.generate(),
    text,
    completed: false,
  };

  set(todosAtom, (todos) => [...todos, newTodo]);
  notifyTodoAdd();
});

const deleteTodoAtom = atom(null, (get, set, id: string) => {
  set(
    todosAtom,
    (todos) => todos.filter((todo) => todo.id !== id) ?? get(todosAtom)
  );
  notifyTodoDelete();
});

const todosCountAtom = atom((get) => get(todosAtom).length);

const completedTodosCount = atom(
  (get) => get(todosAtom).filter((todo) => todo.completed).length
);

const uncompletedTodosCount = atom(
  (get) => get(todosAtom).filter((todo) => !todo.completed).length
);

const toggleTodoAtom = atom(null, (get, set, id: string) => {
  set(todosAtom, (todos) =>
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});

export const useTodos = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const [, deleteTodo] = useAtom(deleteTodoAtom);
  const [todosCountValue] = useAtom(todosCountAtom);
  const [completedTodosCountValue] = useAtom(completedTodosCount);
  const [uncompletedTodosCountValue] = useAtom(uncompletedTodosCount);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    todosCountValue,
    completedTodosCountValue,
    uncompletedTodosCountValue,
  };
};
