import Header from "../components/header";
import TodoList from "../components/todo-list";
import { useTodos } from "../services/todos";

export default function Home() {
  const { todos } = useTodos();
  return (
    <div className={"flex w-full h-full  flex-col"}>
      <Header />
      <div
        className={
          "w-full flex justify-center flex-col items-center text-white font-bold mt-10"
        }
      >
        <TodoList />
      </div>
    </div>
  );
}
