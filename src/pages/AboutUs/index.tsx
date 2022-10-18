import grupoDePessoas from "/assets/grupo-de-pessoas.png";

import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";

export function AboutUs() {
  return (
    <BoxComponentWrapper attributes={{ id: "sobre-nos", "aria-label": "Área onde é falado sobre o grupo do projeto" }}>
      <BoxComponentHeader title="Sobre nós" />
      <BoxComponentMain>
        <span className="text-base text-center">
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        <div className="mt-8 flex">
          <div className="flex flex-col gap-8 w-full">
            <img loading="lazy" src={grupoDePessoas} alt="Imagem grupo de pessoas" />
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-center text-lg">
                Turma: Assistente de logística- Senac / Angra dos Reis
              </h1>
              <p className="text-base text-center">
                Alunos: Ana, Kassiane, Maria Vitória, Maria Clara, Luiz, João
                Pedro, Gislaine, Joyce, Rodrigo e Jeniffer.
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  className="underline underline-offset-4 text-base text-[#000]"
                  href="https://www.instagram.com/coletaseletivaangra/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
