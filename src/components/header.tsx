import { useCallback, useState } from "react";
import shortid from "shortid";
import { useTodos } from "../services/todos";
import Logo from "./../assets/logo-todo-ignite.png";
import Input from "./input";

export default function Header() {
  const { addTodo, deleteTodo } = useTodos();
  const [todo, setTodo] = useState("");

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(event.target.value);
    },
    [todo]
  );

  const handleClickCreateButton = useCallback(() => {
    addTodo(todo);
  }, [todo]);

  return (
    <header
      className={
        "w-full flex bg-gray-700 justify-center items-center relative h-[200px]"
      }
    >
      <img src={Logo} alt="Todo logo" className={"w-full max-w-[126px]"} />
      <Input
        value={todo}
        onChange={handleChange}
        onClickCreateButton={handleClickCreateButton}
        placeholder={"Adicione uma nova tarefa"}
      />
    </header>
  );
}
