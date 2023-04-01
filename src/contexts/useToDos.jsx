import { useContext } from "react";
import { todosContext } from "./ToDoProvider";

export const useToDos = () => {
  const context = useContext(todosContext);
  if (context) {
    return context;
  } else {
    throw new Error("useToDos deb ser usado dentro de  ToDoProvider");
  }
};
