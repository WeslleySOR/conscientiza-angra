import { localizations } from "../../utils/variables";

export function Pevs() {
  return (
    <div className="scroll-mt-[148px] flex flex-col rounded-md bg-[#343434] text-[#fff]" id="pevs">
      <header className="flex items-center justify-center p-8">
        <h1 className="text-lg">Pevs</h1>
      </header>
      <main className="flex flex-col gap-8 p-16">
        <span className="text-base">
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
            className="text-[#fff]"
            href="http://conama.mma.gov.br/?option=com_sisconama&task=arquivo.download&id=273"
            target="__blank"
          >
            RESOLUÇÃO CONAMA nº 275, de 25 de abril de 2001:
          </a>
        </span>
        <ol className="px-8 list-disc">
          <li className="text-base">AZUL: papel/papelão;</li>
          <li className="text-base">VERMELHO: plástico;</li>
          <li className="text-base">VERDE: vidro;</li>
          <li className="text-base">AMARELO: metal;</li>
          <li className="text-base">PRETO: madeira;</li>
          <li className="text-base">LARANJA: resíduos perigosos;</li>
          <li className="text-base">BRANCO: resíduos ambulatoriais e de serviços de saúde;</li>
          <li className="text-base">ROXO: resíduos radioativos;</li>
          <li className="text-base">MARROM: resíduos orgânicos;</li>
          <li className="text-base">
            CINZA: resíduo geral não reciclável ou misturado, ou contaminado não
            passível de separação.
          </li>
        </ol>
        <span className="text-base">
          Entretanto, na iniciativa privada, existem opções personalizadas e
          divididas apenas em resíduos recicláveis e orgânicos.
        </span>
        <span className="text-base pt-16 border-t border-solid border-[#fafafa]">
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
        <table className="border-collapse">
          <tr className="even:bg-[#262626] hover:bg-[#121212]">
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Segunda-Feira</th>
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Terça-Feira</th>
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Quarta-Feira</th>
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Quinta-Feira</th>
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Sexta-Feira</th>
            <th className="border border-solid border-[#ddd] py-3 text-left bg-[#53803e] text-base text-[#fff]">Sábado</th>
          </tr>
          {localizations.length > 0 &&
            localizations.map((localization) => (
              <tr className="even:bg-[#262626] hover:bg-[#121212]">
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 0 ? localization.name : ""}</td>
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 1 ? localization.name : ""}</td>
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 2 ? localization.name : ""}</td>
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 3 ? localization.name : ""}</td>
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 4 ? localization.name : ""}</td>
                <td className="border border-solid border-[#ddd] font-semibold text-sm">{localization.days === 5 ? localization.name : ""}</td>
              </tr>
            ))}
        </table>
      </main>
    </div>
  );
}
