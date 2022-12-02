import React, { useState, FC } from "react";
import TodoToaster from "./components/todo-toaster";
import Home from "./screens/home";

function App() {
  return (
    <div className={"overflow-x-hidden w-screen min-h-screen pb-6 bg-gray-600"}>
      <Home />
      <TodoToaster />
    </div>
  );
}

export default App;
