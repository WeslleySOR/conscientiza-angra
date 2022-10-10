import { localizations } from "../../utils/variables";
import * as SC from "./style";

export function Pevs() {
  return (
    <SC.Container id="pevs">
      <SC.ContainerHeader>
        <h1>Pevs</h1>
      </SC.ContainerHeader>
      <SC.ContainerMain>
        <span>
          Locais:{" "}
          {localizations.length > 0 &&
            localizations
              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .map(
                (localization, index) =>
                  localization.name +
                  (index == localizations.length - 1 ? "" : ", ")
              )}
        </span>
        <SC.ContentTable>
          <tr>
            <th>Segunda-Feira</th>
            <th>Terça-Feira</th>
            <th>Quarta-Feira</th>
            <th>Quinta-Feira</th>
            <th>Sexta-Feira</th>
            <th>Sábado</th>
          </tr>
            {localizations.length > 0 &&
              localizations.map((localization) => (
                <tr>
                  <td>{localization.days === 0 ? localization.name : ""}</td>
                  <td>{localization.days === 1 ? localization.name : ""}</td>
                  <td>{localization.days === 2 ? localization.name : ""}</td>
                  <td>{localization.days === 3 ? localization.name : ""}</td>
                  <td>{localization.days === 4 ? localization.name : ""}</td>
                  <td>{localization.days === 5 ? localization.name : ""}</td>
                </tr>
              ))}
        </SC.ContentTable>
      </SC.ContainerMain>
    </SC.Container>
  );
}
