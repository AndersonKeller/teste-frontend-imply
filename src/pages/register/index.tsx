import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { ModalWrapper } from "../../components/Modal";
import { CepContext } from "../../context/CepContext";

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
  const { city, district, street, number, setMessageCpf, setMessagePhone } =
    useContext(CepContext);

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(15, "Formato inválido"),
    cpf: yup.string().required("CPF obrigatório"),
    cep: yup.string().required("CEP obrigatório").min(9, "formato inválido"),
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
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<iFormData> = async (data: iFormData) =>
    onSubmitApi(data);
  function onSubmitApi(data: iFormData) {
    let cpf = data.cpf.replaceAll(".", "");
    cpf = cpf.replace("-", "");

    const cpfList = Array.from(cpf);
    const res = cpfList.filter((cpf, index) => {
      return cpfList.indexOf(cpf) === index;
    });

    setMessagePhone("");
    setMessageCpf("");
    if (data.cpf.includes("_") || res.length === 1) {
      setMessageCpf("Formato inválido");
    } else if (data.phone.includes("_")) {
      setMessagePhone("Formato inválido");
    } else {
      setOpenModal(true);
    }
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
          label="Nome completo"
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
            onchangeCep
            errorMsg={errors.cep?.message && errors.cep.message}
          />

          <Input
            register={register("city")}
            type="text"
            require={false}
            label="Cidade"
            value={city}
          />
        </div>
        <Input
          register={register("district")}
          type="text"
          require={false}
          label="Bairro"
          value={district}
        />
        <div>
          <Input
            register={register("street")}
            type="text"
            require={false}
            label="Logradouro"
            value={street}
          />
          <Input
            register={register("number")}
            type="number"
            require={false}
            label="Número"
            value={number}
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
