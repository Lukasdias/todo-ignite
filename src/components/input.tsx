import { PlusCircle } from "phosphor-react";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onClickCreateButton: () => void;
}

export default function Input({ ...props }: Props) {
  return (
    <div
      className={
        "max-w-[355px] sm:max-w-[736px] w-full flex flex-row items-center absolute -bottom-7 left-1/2 transform -translate-x-1/2"
      }
    >
      <input
        {...props}
        className={
          "bg-gray-500 placeholder:text-gray-300 p-4 text-white rounded-default transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 w-full"
        }
      />
      <button
        onClick={props.onClickCreateButton}
        className={
          "w-full flex flex-1 max-w-[90px] h ml-8 bg-blue-700 p-4 rounded-default text-gray-100 font-bold transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50 hover:bg-blue-400 justify-center items-center text-sm"
        }
      >
        Criar
        <PlusCircle weight={"bold"} className={"w-4 h-4 ml-2"} />
      </button>
    </div>
  );
}
