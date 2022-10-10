import { AboutUsCard } from "../AboutUsCard";
import * as SC from "./style";

export function AboutUs() {
  return (
    <SC.Container id="sobre-nos">
      <SC.ContainerHeader>
        <h1>Sobre nós</h1>
      </SC.ContainerHeader>
      <SC.ContainerMain>
        <span>
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        <SC.ContainerCards>
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </SC.ContainerCards>
      </SC.ContainerMain>
    </SC.Container>
  );
}
