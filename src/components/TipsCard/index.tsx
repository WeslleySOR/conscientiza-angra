import * as SC from "./style";

export function TipsCard() {
  return (
    <SC.Container>
      <SC.ContainerHeader>
        <h2>Sabão caseiro em barra</h2>
      </SC.ContainerHeader>
      <SC.ContainerMain>
        <SC.ContentSeparator>
          <strong>Ingredientes: </strong>
          <ol>
            <li>2 litros de água quente</li>
            <li>1 kg de soda cáustica em flocos</li>
            <li>1 litro de álcool</li>
            <li>4 litros de óleo de cozinha</li>
            <li>Óleo essencial de sua preferência</li>
          </ol>
        </SC.ContentSeparator>
        <SC.ContentSeparator>
          <strong>Passo a Passo: </strong>
          <ol className="decimal">
            <li>Utilize um balde para colocar a soda cáustica em flocos</li>
            <li>
              Vá adicionando de maneira delicada e bem devagar os 2 litros de
              água quente sobre a soda cáustica que está no balde
            </li>
            <li>
              Com o auxílio de uma colher de pau, mexa bem essa mistura até que
              a soda cáustica esteja totalmente dissolvida
            </li>
            <li>
              Adicione os 4 litros de óleo de cozinha a essa mistura do balde e
              mexa por cerca de 20 minutos
            </li>
            <li>
              Após os 20 minutos, adicione o álcool e o óleo essencial de sua
              preferência
            </li>
            <li>Mexa bem essa mistura, até ficar uma pasta bem consistente</li>
            <li>
              Coloque a pasta em formas e deixe secar bem, por cerca de 24 horas
              ou mais
            </li>
            <li>
              Depois basta cortar o sabão do tamanho e formato que você quiser
            </li>
          </ol>
        </SC.ContentSeparator>
      </SC.ContainerMain>
    </SC.Container>
  );
}
