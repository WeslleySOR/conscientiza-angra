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
          <strong>O que são pevs:</strong> PEV é uma abreviação para Ponto de
          Entrega Voluntária. São coletores instalados em pontos públicos e
          privados estrategicamente posicionados - como próximo à comércios -
          para depósito, acondicionamento, transporte e destinação de resíduos
          sólidos. Normalmente são resistentes e com boa capacidade de
          armazenamento.
          <br />
          São ferramentas relevantes para possibilitar a coleta seletiva, ou
          seja, a adequada separação dos resíduos na fonte geradora. Muitas
          vezes estão associados à cores que indicam quais materiais devem ser
          comportados no receptor, como determina a{" "}
          <a
            href="http://conama.mma.gov.br/?option=com_sisconama&task=arquivo.download&id=273"
            target="__blank"
          >
            RESOLUÇÃO CONAMA nº 275, de 25 de abril de 2001:
          </a>
        </span>
        <ol>
          <li>AZUL: papel/papelão;</li>
          <li>VERMELHO: plástico;</li>
          <li>VERDE: vidro;</li>
          <li>AMARELO: metal;</li>
          <li>PRETO: madeira;</li>
          <li>LARANJA: resíduos perigosos;</li>
          <li>BRANCO: resíduos ambulatoriais e de serviços de saúde;</li>
          <li>ROXO: resíduos radioativos;</li>
          <li>MARROM: resíduos orgânicos;</li>
          <li>
            CINZA: resíduo geral não reciclável ou misturado, ou contaminado não
            passível de separação.
          </li>
        </ol>
        <span>
          Entretanto, na iniciativa privada, existem opções personalizadas e
          divididas apenas em resíduos recicláveis e orgânicos.
        </span>
        <span className="localizations">
          Locais:{" "}
          {localizations.length > 0 &&
            localizations
              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .map(
                (localization, index) =>
                  localization.name +
                  (index == localizations.length - 1 ? "" : ", ")
              )}
          <p>
            <strong>*Somente Angra dos Reis* </strong>
          </p>
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
