import { AboutUsCard } from "../../components/AboutUsCard";

export function AboutUs() {
  return (
    <div className="scroll-mt-[152px] mt-8 flex flex-col bg-[#343434] text-[#fff] md:scroll-mt-[96px] lg:scroll-mt-[132px] lg:mx-12 lg:px-32" id="sobre-nos">
      <header className="flex items-center justify-center p-6">
        <h1 className="text-xl">Sobre nós</h1>
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
