import axios from "axios";

export const apiCep = axios.create({
  baseURL: "viacep.com.br/ws/95800000/json/",
  timeout: 5000,
});
export const apiCoinDesk = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/currentprice.json",
  timeout: 5000,
});
