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
  const [loading, setLoading] = useState(true);
  function getApiInfo() {
    async function getApi() {
      try {
        setLoading(true);
        const res = await apiCoinDesk.get("");

        setInfos(res.data.bpi);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getApi();
  }

  useEffect(() => {
    getApiInfo();
  }, []);

  return (
    <StyledHome>
      <header>
        <img src={bitcoin} alt="bitcoin backgroundPage" />
      </header>
      <section>
        <p className="textColor">
          A origem do Bitcoin é tão interessante quanto a sua evolução no
          mercado. Criada há quase uma década, a moeda virtual alcançou
          patamares históricos de cotações, atraindo ainda mais visibilidade
          para a economia digital e transformando a criptomoeda em{" "}
          <strong>um dos investimentos mais atrativos do momento</strong>
        </p>
        <div className="divMain">
          <h1>Bitcoin Price Index</h1>
          {!loading ? (
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
          ) : (
            <div></div>
          )}
        </div>
        <p className="textColor">
          O grande mistério do Bitcoin ainda não foi revelado. Afinal, quem
          inventou a criptomoeda? Existem várias versões, mas nenhuma conclusiva
          até o momento. O que se sabe é que o fundador usa o pseudônimo Satoshi
          Nakamoto
        </p>
      </section>
    </StyledHome>
  );
}
