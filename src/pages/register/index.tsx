import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ModalWrapper } from "../../components/Modal";

interface iFormData {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  cep: string;
  city?: string;
  district?: string;
  street?: string;
  number?: string;
}

export function Register() {
  const [openModal, setOpenModal] = useState(false);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(11, "Formato inválido"),
    cpf: yup.string().required("CPF obrigatório").min(11, "Formato inválido"),
    cep: yup.string().required("CEP obrigatório").min(7, "formato inválido"),
    city: yup.string(),
    district: yup.string(),
    street: yup.string(),
    number: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    setOpenModal(true);
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
          errorMsg={errors.name?.message && errors.name.message}
        />
        <Input
          type="email"
          register={register("email")}
          require={true}
          label="Email"
          errorMsg={errors.email?.message && errors.email.message}
        />
        <div>
          <Input
            register={register("phone")}
            type="tel"
            mask="(99) 99999-9999"
            require={true}
            label="Telefone"
            errorMsg={errors.phone?.message && errors.phone.message}
          />
          <Input
            register={register("cpf")}
            type="number"
            mask="999.999.999-99"
            require={true}
            label="CPF"
            errorMsg={errors.cpf?.message && errors.cpf.message}
          />

          <Input
            register={register("cep")}
            type="number"
            mask="99999-999"
            require={true}
            label="CEP"
            onChangeCep={true}
            errorMsg={errors.cep?.message && errors.cep.message}
          />

          <Input
            register={register("city")}
            type="text"
            require={false}
            label="Cidade"
          />
        </div>
        <Input
          register={register("district")}
          type="text"
          require={false}
          label="Bairro"
        />
        <div>
          <Input
            register={register("street")}
            type="text"
            require={false}
            label="Logradouro"
          />
          <Input
            register={register("number")}
            type="number"
            require={false}
            label="Número"
          />
        </div>

        <button type="submit">CADASTRAR</button>
      </Form>
      <p className="textFooter">
        Os cookies são utilizados para facilitar a navegação e torna-lá mais
        simples e não danificam o seu dispositivo. Permitem uma navegação mais
        rápida e eficiente, eliminando a necessidade de introduzir repetidamente
        as mesmas informações.
      </p>
      {openModal && <ModalWrapper></ModalWrapper>}
    </>
  );
}
