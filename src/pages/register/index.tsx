import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface iFormData {
  name: string;
}

export function Register() {
  const registerSchema = yup.object().shape({
    name: yup.string().required("nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    console.log(data);
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="titleColor">Cadastro de usuário</h2>
        <p className="textColor">
          Utilize esse cadastro para fazer parte do maior site de trade de
          Bitcoin do mundo
        </p>
        <Input
          register={register("name")}
          type="text"
          require={true}
          label="Nome Completo"
        />
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
