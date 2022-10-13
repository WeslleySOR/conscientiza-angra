import routesImage from '/assets/rotas.png'

export function Routes() {
  return (
    <div
      className="scroll-mt-[192px] mt-8 flex flex-col text-[#000] md:scroll-mt-[112px] lg:scroll-mt-[132px] lg:mx-12"
      id="rotas"
    >
      <header className="flex items-center justify-center p-6">
        <h1 className="text-2xl md:text-3xl">Rotas</h1>
      </header>
      <main className="flex flex-col items-center py-6 gap-8">
        <div className="">
          <img src={routesImage} alt="" />
        </div>
      </main>
    </div>
  );
}
