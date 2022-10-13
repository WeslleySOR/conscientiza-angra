import trashCanblack from "/assets/trash-can-black.svg";
import trashCanblue from "/assets/trash-can-blue.svg";
import trashCanbrown from "/assets/trash-can-brown.svg";
import trashCangray from "/assets/trash-can-gray.svg";
import trashCangreen from "/assets/trash-can-green.svg";
import trashCanorange from "/assets/trash-can-orange.svg";
import trashCanpurple from "/assets/trash-can-purple.svg";
import trashCanred from "/assets/trash-can-red.svg";
import trashCanwhite from "/assets/trash-can-white.svg";
import trashCanyellow from "/assets/trash-can-yellow.svg";

export function Pevs() {
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
        <ol className="flex flex-col gap-1 px-6">
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanblue} alt="Icone da lixeira Azul" />
            <span>AZUL: papel/papelão;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanred} alt="Icone da lixeira Vermelha" />
            <span>VERMELHO: plástico;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCangreen} alt="Icone da lixeira Verde" />
            <span>VERDE: vidro;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanyellow} alt="Icone da lixeira Amarela" />
            <span>AMARELO: metal;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanblack} alt="Icone da lixeira Preta" />
            <span>PRETO: madeira;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanorange} alt="Icone da lixeira Laranja" />
            <span>LARANJA: resíduos perigosos;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanwhite} alt="Icone da lixeira Branca" />
            <span>BRANCO: resíduos ambulatoriais e de serviços de saúde;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanpurple} alt="Icone da lixeira Roxa" />
            <span>ROXO: resíduos radioativos;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCanbrown} alt="Icone da lixeira Marrom" />
            <span>MARROM: resíduos orgânicos;</span>
          </li>
          <li className="flex gap-2 text-base">
            <img className="w-6 h-6" src={trashCangray} alt="Icone da lixeira Cinza" />
            <span>
              CINZA: resíduo geral não reciclável ou misturado, ou contaminado
              não passível de separação.
            </span>
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
