import { StyledHome } from "./style";
import bitcoin from "../../assets/img/bitcoinBackground.jpg";

export function Home() {
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
        <div>
          <h2>Bitcoin Price Index</h2>
        </div>
      </section>
    </StyledHome>
  );
}
