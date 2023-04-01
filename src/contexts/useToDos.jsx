import { useContext } from "react";
import { todosContext } from "./ToDoProvider";

export const useToDos = () => {
  const context = useContext(todosContext);
  if (context) {
    return context;
  } else {
    return alert("useToDos deb ser usado dentro de  ToDoProvider");
  }
};
