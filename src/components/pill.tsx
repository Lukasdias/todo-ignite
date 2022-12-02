import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Pill({ children }: Props) {
  return (
    <div className="flex max-h-5 items-center justify-center bg-gray-400 rounded-full p-2 text-white font-bold text-xs">
      {children}
    </div>
  );
}
