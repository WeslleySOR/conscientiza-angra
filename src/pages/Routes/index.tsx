import { BoxComponentWrapper } from "../../components/BoxComponent";
import { BoxComponentHeader } from "../../components/BoxComponent/Header";
import { BoxComponentMain } from "../../components/BoxComponent/Main";
import routesImage from "/assets/rotas.jpeg";

export function Routes() {
  return (
    <BoxComponentWrapper attributes={{ id: "rotas", "aria-label": "Área onde é mostrado as rotas da coleta seletiva" }}>
      <BoxComponentHeader title="Rotas" />
      <BoxComponentMain>
        <div className="mx-auto">
          <img src={routesImage} alt="Roteirização da frota da coleta seletiva." />
        </div>
      </BoxComponentMain>
    </BoxComponentWrapper>
  );
}
