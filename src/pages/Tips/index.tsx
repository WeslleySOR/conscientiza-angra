import { TipsCard } from "../../components/TipsCard";

export function Tips() {
  return (
    <div
      className="scroll-mt-[80px] mt-8 flex flex-col bg-[#343434] text-[#fff] md:scroll-mt-[96px] lg:scroll-mt-[132px] xl:mx-12"
      id="dicas"
    >
      <header className="flex items-center justify-center p-6">
        <h1 className="text-xl">Dicas de reaproveitamento</h1>
      </header>
      <main>
        <TipsCard />
      </main>
    </div>
  );
}
