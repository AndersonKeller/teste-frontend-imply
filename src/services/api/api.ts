import axios from "axios";

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 5000,
});
export const apiCoinDesk = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
  timeout: 5000,
});
