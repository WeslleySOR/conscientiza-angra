import { AboutUsCard } from "../../components/AboutUsCard";

export function AboutUs() {
  return (
    <div className="scroll-mt-[192px] mt-8 flex flex-col text-[#000] md:scroll-mt-[112px] lg:scroll-mt-[132px] lg:mx-12 lg:px-32" id="sobre-nos">
      <header className="flex items-center justify-center p-6">
        <h1 className="text-2xl md:text-3xl">Sobre nós</h1>
      </header>
      <main className="flex flex-col py-8 lg:px-6">
        <span className="text-base text-center">
          Somos um grupo de alunos, onde nosso objetivo é auxiliar na coleta
          seletiva do lixo, pensando sempre no melhor para a comunidade e a
          natureza.
        </span>
        {/* justify-center flex-wrap gap-8 */}
        <div className="mt-8 flex">
          <AboutUsCard />
        </div>
      </main>
    </div>
  );
}
