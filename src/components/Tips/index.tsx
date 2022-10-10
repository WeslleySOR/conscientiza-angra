import { localizations } from "../../utils/variables";
import { TipsCard } from "../TipsCard";
import * as SC from "./style";

export function Tips() {
  return (
    <SC.Container id="dicas">
      <h1>Dicas de reaproveitamento</h1>
      <TipsCard />
    </SC.Container>
  );
}
