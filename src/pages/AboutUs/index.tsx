import { AboutUsCard } from "../../components/AboutUsCard";

export function AboutUs() {
  return (
    <div className="scroll-mt-[80px] mt-8 flex flex-col bg-[#343434] text-[#fff]" id="sobre-nos">
      <header className="flex items-center justify-center p-6">
        <h1 className="text-xl">Sobre nós</h1>
      </header>
      <main className="flex flex-col py-16 px-6">
        <span className="text-base">
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        <div className="mt-16 flex justify-center flex-wrap gap-8">
          <AboutUsCard />
          <AboutUsCard />
          <AboutUsCard />
        </div>
      </main>
    </div>
  );
}
