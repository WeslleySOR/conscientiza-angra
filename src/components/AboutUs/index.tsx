import { AboutUsCard } from "../AboutUsCard";

export function AboutUs() {
  return (
    <div className="scroll-mt-[148px] flex flex-col rounded-md bg-[#343434] text-[#fff]" id="sobre-nos">
      <header className="flex items-center justify-center p-8">
        <h1 className="text-lg">Sobre nós</h1>
      </header>
      <main className="flex flex-col p-16">
        <span className="text-base">
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        <div className="mt-16 flex justify-center flex-wrap gap-8">
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
        </div>
      </main>
    </div>
  );
}
