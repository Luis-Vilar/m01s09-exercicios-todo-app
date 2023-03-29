import React from 'react';
import { Link } from 'react-router-dom';
function Error() {
  return (
    <div className=" d-flex flex-column ">
      <h1>
        Ups!.. algo aconteceu aqui, não  te preocupa  mõ quiridu!
      </h1>
      <h2>Por favor, tente recarregar o site ou volte mais tarde.</h2>
      <Link to={'/'}>Voltar pro home..</Link>
    </div>
  );
}

export default Error;
