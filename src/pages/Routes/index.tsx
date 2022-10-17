import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";
import routesImage from "/assets/rotas.png";

export function Routes() {
  return (
    <BoxComponentWrapper attributes={{ id: "rotas" }}>
      <BoxComponentHeader title="Rotas" />
      <BoxComponentMain>
        <div className="mx-auto">
          <img src={routesImage} alt="" />
        </div>
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
