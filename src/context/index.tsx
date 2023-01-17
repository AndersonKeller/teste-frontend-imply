import { createContext } from "react";
import { CepProvider } from "./CepContext";

export const MainContext = createContext({});
interface iContextProps {
  children: React.ReactNode;
}

export function MainProvider({ children }: iContextProps) {
  return (
    <MainContext.Provider value={{}}>
      <CepProvider>{children}</CepProvider>
    </MainContext.Provider>
  );
}
