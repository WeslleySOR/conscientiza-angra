import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";

import { TipOne } from "../../components/TipsCards/TipOne";
import { TipTwo } from "../../components/TipsCards/TipTwo";

export function Tips() {
  return (
    <BoxComponentWrapper attributes={{ id: "dicas", "aria-label": "Área de dicas para reaproveitamento" }}>
      <BoxComponentHeader title="Dicas de reaproveitamento" />
      <BoxComponentMain>
        <TipOne />
        <TipTwo />
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
