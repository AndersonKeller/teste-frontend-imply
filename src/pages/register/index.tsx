import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

export function Register() {
  function handle() {
    console.log("oi");
  }
  return (
    <>
      <Form noValidate={true} onSubmit={() => handle()}>
        <h2 className="titleColor">Cadastro de usuário</h2>
        <p className="textColor">
          Utilize esse cadastro para fazer parte do maior site de trade de
          Bitcoin do mundo
        </p>
        <Input type="text" require={true} label="Nome Completo" />
        <Input type="email" require label="Email" />
        <div>
          <Input type="tel" require label="Telefone" />
          <Input type="number" require label="CPF" />
          <Input type="number" require label="CEP" />
          <Input type="text" require={false} label="Cidade" />
        </div>
        <Input type="text" require={false} label="Bairro" />
        <div>
          <Input type="text" require={false} label="Logradouro" />
          <Input type="number" require={false} label="Número" />
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
