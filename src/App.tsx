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
      <p className="textFooter">
        Os cookies são utilizados para facilitar a navegação e torna-lá mais
        simples e não danificam o seu dispositivo. Permitem uma navegação mais
        rápida e eficiente, eliminando a necessidade de introduzir repetidamente
        as mesmas informações.
      </p>
    </>
  );
}

export default App;
