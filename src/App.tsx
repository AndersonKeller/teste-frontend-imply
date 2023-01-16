import React from "react";
import { Form } from "./components/Form";

import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Form>
        <h2 className="titleColor">Cadastro de usuário</h2>
        <p className="textColor">
          Utilize esse cadastro para fazer parte do maior site de trade de
          Bitcoin do mundo
        </p>
        <Input require label="Nome Completo" />
        <Input require label="Email" />
        <div>
          <Input require label="Telefone" />
          <Input require label="CPF" />
          <Input require label="CEP" />
          <Input require={false} label="Cidade" />
        </div>
        <Input require={false} label="Bairro" />
        <div>
          <Input require={false} label="Logradouro" />
          <Input require={false} label="Número" />
        </div>

        <button type="submit">CADASTRAR</button>
      </Form>
    </>
  );
}

export default App;
