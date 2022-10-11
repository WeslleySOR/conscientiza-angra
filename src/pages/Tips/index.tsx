import { TipsCard } from "../../components/TipsCard";

export function Tips() {
  return (
    <div className="scroll-mt-[148px] flex flex-col rounded-md bg-[#343434] text-[#fff]" id="dicas">
      <h1 className="text-lg p-8 text-center">Dicas de reaproveitamento</h1>
      <TipsCard />
    </div>
  );
}
