import { localizations } from "../../utils/variables";

export function Pevs() {
  const getLocationsByDay = (day: number) => {
    const locations = localizations.filter(
      (localization) => localization.days === day
    );
    if (locations.length > 0) return locations;
    return [{
      name: "Nenhum local nesse dia",
      days: 99
    }];
  };
  return (
    <div
      className="scroll-mt-[192px] mt-8 flex flex-col text-[#000] md:scroll-mt-[112px] lg:scroll-mt-[132px] lg:mx-12"
      id="pevs"
    >
      <header className="flex items-center justify-center p-6">
        <h1 className="text-2xl md:text-3xl">Pevs</h1>
      </header>
      <main className="flex flex-col py-6 gap-8">
        <span className="text-base px-6">
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
            className="text-[#000] underline"
            href="http://conama.mma.gov.br/?option=com_sisconama&task=arquivo.download&id=273"
            target="__blank"
          >
            RESOLUÇÃO CONAMA nº 275, de 25 de abril de 2001:
          </a>
        </span>
        <ol className="list-disc px-10">
          <li className="text-base">AZUL: papel/papelão;</li>
          <li className="text-base">VERMELHO: plástico;</li>
          <li className="text-base">VERDE: vidro;</li>
          <li className="text-base">AMARELO: metal;</li>
          <li className="text-base">PRETO: madeira;</li>
          <li className="text-base">LARANJA: resíduos perigosos;</li>
          <li className="text-base">
            BRANCO: resíduos ambulatoriais e de serviços de saúde;
          </li>
          <li className="text-base">ROXO: resíduos radioativos;</li>
          <li className="text-base">MARROM: resíduos orgânicos;</li>
          <li className="text-base">
            CINZA: resíduo geral não reciclável ou misturado, ou contaminado não
            passível de separação.
          </li>
        </ol>
        <span className="text-base px-6">
          Entretanto, na iniciativa privada, existem opções personalizadas e
          divididas apenas em resíduos recicláveis e orgânicos.
        </span>
      </main>
    </div>
  );
}
