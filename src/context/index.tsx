import { createContext } from "react";
import { CepProvider } from "./CepContext";

export const MainContext = createContext<iContextProps>({} as iContextProps);
interface iContextProps {
  children: React.ReactNode;
}

export function MainProvider({ children }: iContextProps) {
  return (
    <MainContext.Provider value={{ children }}>
      <CepProvider>{children}</CepProvider>
    </MainContext.Provider>
  );
}
