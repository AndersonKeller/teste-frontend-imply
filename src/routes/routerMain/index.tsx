import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/home";
import { Register } from "../../pages/register";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/" element={<Register></Register>}></Route>
      <Route path={"/register"} element={<Register></Register>}></Route>
      <Route path={"/*"} element={<Register></Register>}></Route>
      <Route path={"/home"} element={<Home></Home>}></Route>
    </Routes>
  );
}
