import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";
import { TipsCard } from "../../components/TipsCard";

export function Tips() {
  return (
    <BoxComponentWrapper attributes={{ id: "dicas" }}>
      <BoxComponentHeader title="Dicas de reaproveitamento" />
      <BoxComponentMain>
        <TipsCard />
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
