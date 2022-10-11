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
      className="scroll-mt-[152px] flex flex-col bg-[#343434] text-[#fff] md:scroll-mt-[96px] lg:scroll-mt-[132px] xl:mx-12"
      id="pevs"
    >
      <header className="flex items-center justify-center p-6">
        <h1 className="text-xl">Pevs</h1>
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
            className="text-[#fff] underline"
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
        <span className="text-base border-t border-solid p-6 border-[#fafafa]">
          Locais:{" "}
          {localizations.length > 0 &&
            localizations
              .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
              .map(
                (localization, index) =>
                  localization.name +
                  (index == localizations.length - 1 ? "" : ", ")
              )}
          <p className="mt-6">
            <strong>*Somente Angra dos Reis* </strong>
          </p>
        </span>
        <div className="flex flex-col px-6 gap-6">
          {localizations.length > 0 && (
            <>
            <div>
              <span>Segunda-Feira: </span>
              {getLocationsByDay(0).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(0).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Terça-Feira: </span>
              {getLocationsByDay(1).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(1).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Quarta-Feira: </span>
              {getLocationsByDay(2).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(2).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Quinta-Feira: </span>
              {getLocationsByDay(3).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(3).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Sexta-Feira: </span>
              {getLocationsByDay(4).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(4).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Sábado: </span>
              {getLocationsByDay(5).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(5).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            <div>
              <span>Domingo: </span>
              {getLocationsByDay(6).map((localization, index) => 
                <span key={localization.name}>
                  {localization.name}{index === getLocationsByDay(6).length - 1 ? "." : ", "}
                </span>  
              )}
            </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
