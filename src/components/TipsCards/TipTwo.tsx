import copoReciclado from "/assets/copo-reciclado.jpeg";

export function TipTwo() {
  return (
    <div className="flex flex-col py-16">
      <header className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-lg">Copos reciclados</h2>
        <img
          className="max-w-full md:max-w-[630px]"
          src={copoReciclado}
          alt=""
        />
      </header>
      <main className="flex flex-col px-10 gap-10">
        <div className="flex flex-col">
          <strong className="text-base">Você vai precisar de: </strong>
          <ol className="list-disc">
            <li className="text-base">Garrafa;</li>
            <li className="text-base">Linha;</li>
            <li className="text-base">Removedor de esmalte para unhas;</li>
            <li className="text-base">Isqueiro;</li>
            <li className="text-base">Lixa.</li>
          </ol>
        </div>
        <div className="flex flex-col">
          <strong className="text-base">Modo de fazer:</strong>
          <ol className="list-decimal">
            <li className="text-base">
              Enrole a linha em volta da garrafa seis vezes e amarre-a.
            </li>
            <li className="text-base">
              Retire o fio da garrafa e mergulhe no removedor de esmalte para
              unhas, colocando de volta na garrafa novamente depois que já
              estiver saturado.
            </li>
            <li className="text-base">
              Queime o fio e gire a garrafa em círculos, de 20 a 30 segundos.
            </li>
            <li className="text-base">
              Quando a chama se apagar, mergulhe a garrafa imediatamente na água
              gelada e deixe-a lá até que ela se rompa, formando o seu copo.
            </li>
            <li className="text-base">
              Para finalizar, utilize a lixa na parte que você usará para beber.
            </li>
            <li className="text-base">Está pronto para uso!</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
