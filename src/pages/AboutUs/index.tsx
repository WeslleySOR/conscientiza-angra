import { AboutUsCard } from "../../components/AboutUsCard";

import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";

export function AboutUs() {
  return (
    <BoxComponentWrapper attributes={{ id: "sobre-nos" }}>
      <BoxComponentHeader title="Sobre nós" />
      <BoxComponentMain>
        <span className="text-base text-center">
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        <div className="mt-8 flex">
          <AboutUsCard />
        </div>
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
