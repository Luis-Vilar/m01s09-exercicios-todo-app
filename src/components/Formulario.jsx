import { useRef } from "react";
import { useToDos } from "../contexts/useToDos";

export const Formulario = ({ onSubmit }) => {
  const textElementRef = useRef();
  const todosContext = useToDos();

  const handleSubmit = (event) => {
    event.preventDefault();
    todosContext.addToDo(textElementRef.current.value);
    textElementRef.current.value = "";
  };

  return (
    <div className="mb-5 p-4 bg-secondary-subtle bg-gradient rounded">
      <h5>Adicionar tarefa</h5>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <span className="input-group-text" id="campo-adicionar-tarefa">
          Texto da tarefa:
        </span>
        <input
          ref={textElementRef}
          type="text"
          className="form-control"
          aria-label="Adicionar tarefa"
          aria-describedby="campo-adicionar-tarefa"
        />
        <button
          className="btn btn-outline-primary bg-light"
          type="submit"
          id="button-addon2"
        >
          Adicionar tarefa
        </button>
      </form>
    </div>
  );
};
