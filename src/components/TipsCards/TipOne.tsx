import sabaoImage from "/assets/sabao-em-barra.jpeg";

export function TipOne() {
  return (
    <div className="flex flex-col items-center gap-6 h-fit pb-6 border-b border-solid border-[#dbdbdb]">
      <aside className="w-fit flex flex-col justify-center items-center">
        <img className="max-w-full md:max-w-[630px]" src={sabaoImage} alt="" />
        <h2 className="text-lg font-semibold">Sabão caseiro em barra</h2>
      </aside>
      <div className="flex flex-col gap-6 px-4 w-full">
        <div className="h-fit flex flex-col gap-4 w-full">
          <strong className="text-base">Ingredientes: </strong>
          <ol className="list-disc px-5">
            <li className="text-base">2 litros de água quente</li>
            <li className="text-base">1 kg de soda cáustica em flocos</li>
            <li className="text-base">1 litro de álcool</li>
            <li className="text-base">4 litros de óleo de cozinha</li>
            <li className="text-base">Óleo essencial de sua preferência</li>
          </ol>
        </div>
        <div className="h-fit flex flex-col gap-4 w-full">
          <strong className="text-base">Passo a Passo: </strong>
          <ol className="list-decimal px-5">
            <li className="text-base">
              Utilize um balde para colocar a soda cáustica em flocos
            </li>
            <li className="text-base">
              Vá adicionando de maneira delicada e bem devagar os 2 litros de
              água quente sobre a soda cáustica que está no balde
            </li>
            <li className="text-base">
              Com o auxílio de uma colher de pau, mexa bem essa mistura até que
              a soda cáustica esteja totalmente dissolvida
            </li>
            <li className="text-base">
              Adicione os 4 litros de óleo de cozinha a essa mistura do balde e
              mexa por cerca de 20 minutos
            </li>
            <li className="text-base">
              Após os 20 minutos, adicione o álcool e o óleo essencial de sua
              preferência
            </li>
            <li className="text-base">
              Mexa bem essa mistura, até ficar uma pasta bem consistente
            </li>
            <li className="text-base">
              Coloque a pasta em formas e deixe secar bem, por cerca de 24 horas
              ou mais
            </li>
            <li className="text-base">
              Depois basta cortar o sabão do tamanho e formato que você quiser
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
