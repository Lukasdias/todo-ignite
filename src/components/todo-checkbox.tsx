import React, { useState, memo } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface TodoCheckboxProps {
  checked?: boolean;
  onClick?: () => void;
}
const Root = Checkbox.Root;
const Indicator = Checkbox.Indicator;

function TodoCheckbox({ checked, onClick }: TodoCheckboxProps) {
  return (
    <Root
      checked={checked}
      onCheckedChange={onClick}
      className={`border-blue-400 border-2 rounded-full w-6 h-6 flex justify-start items-center${
        checked ? "bg-purple-700 border-none" : "bg-transparent"
      } `}
    >
      <Indicator
        className={
          "bg-purple-700 w-6 h-6 rounded-full flex justify-center items-center "
        }
      >
        <Check className={" text-white"} />
      </Indicator>
    </Root>
  );
}

export default memo(TodoCheckbox);
