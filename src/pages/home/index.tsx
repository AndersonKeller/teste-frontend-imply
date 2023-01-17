import { StyledHome } from "./style";
import bitcoin from "../../assets/img/bitcoinBackground.jpg";
import { useEffect, useState } from "react";
import { apiCoinDesk } from "../../services/api/api";

interface iHomeInfos {
  USD: iUSD;
  GBP: iGBP;
  EUR: iEUR;
}
interface iUSD {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}
interface iGBP {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}
interface iEUR {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export function Home() {
  const [infos, setInfos] = useState({} as iHomeInfos);
  function getApiInfo() {
    async function getApi() {
      const res = await apiCoinDesk.get("");
      console.log(res.data);
      setInfos(res.data.bpi);
    }

    getApi();
  }

  useEffect(() => {
    getApiInfo();
  }, []);
  console.log(infos);
  return (
    <StyledHome>
      <header>
        <img src={bitcoin} alt="bitcoin backgroundPage" />
      </header>
      <section>
        <p>
          A origem do Bitcoin é tão interessante quanto a sua evolução no
          mercado. Criada há quase uma década, a moeda virtual alcançou
          patamares históricos de cotações, atraindo ainda mais visibilidade
          para a economia digital e transformando a criptomoeda em{" "}
          <strong>um dos investimentos mais atrativos do momento</strong>
        </p>
        <div className="divMain">
          <h2>Bitcoin Price Index</h2>
          <div>
            {" "}
            <p>
              {infos.USD.description}: &#36;
              {infos.USD.rate_float.toFixed(2)}
            </p>
            <p>
              {infos.GBP.description}: &pound;
              {infos.GBP.rate_float.toFixed(2)}
            </p>
            <p>
              {infos.EUR.description}: &euro;
              {infos.EUR.rate_float.toFixed(2)}
            </p>
          </div>
        </div>
        <p>
          O grande mistério do Bitcoin ainda não foi revelado. Afinal, quem
          inventou a criptomoeda? Existem várias versões, mas nenhuma conclusiva
          até o momento. O que se sabe é que o fundador usa o pseudônimo Satoshi
          Nakamoto
        </p>
      </section>
    </StyledHome>
  );
}
