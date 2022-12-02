import { Clipboard } from "phosphor-react";

export default function TodoListEmpty() {
  return (
    <div
      className={
        "w-full px-6 py-16 justify-center items-center border-t-2 border-t-gray-500 rounded-t-default"
      }
    >
      <div className={"flex flex-col items-center gap-1"}>
        <Clipboard weight={"bold"} className={"w-14 h-14 text-gray-300"} />
        <span className={"text-gray-300 text-center"}>
          Você ainda não tem tarefas cadastradas
        </span>
        <span className={"text-gray-300 text-center"}>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  );
}
