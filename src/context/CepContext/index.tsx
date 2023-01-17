import { createContext, useState } from "react";

export const CepContext = createContext<iCepContext>({} as iCepContext);

interface iContextProps {
  children: React.ReactNode;
}
interface iCepContext {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  district: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
  street: string;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
}
export function CepProvider({ children }: iContextProps) {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  return (
    <CepContext.Provider
      value={{
        city,
        setCity,
        district,
        setDistrict,
        street,
        setStreet,
        number,
        setNumber,
      }}
    >
      {children}
    </CepContext.Provider>
  );
}
