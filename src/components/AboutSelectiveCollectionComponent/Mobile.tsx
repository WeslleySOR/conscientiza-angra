import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

export function AboutSelectiveCollectionComponentMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <>
      <div
        className="scroll-mt-[152px] relative flex odd:bg-[#262626] md:scroll-mt-[96px] lg:scroll-mt-[132px] xl:mx-12 xl:mt-8"
        id="sobre-a-coleta"
      >
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 select-none flex flex-col flex-1 gap-8 pt-28 pb-36 bg-[#343434] text-[#fff] transition-opacity duration-200 hover:opacity-90">
            <h1 className="text-lg text-center">O QUE É COLETA SELETIVA?</h1>
            <span className="text-base text-center px-12">
              Coleta seletiva ou recolha seletiva é o termo utilizado para o
              recolhimento dos materiais que são possíveis de serem reciclados,
              previamente separados na fonte geradora.
            </span>
          </div>
          <div className="keen-slider__slide number-slide1 select-none flex flex-col flex-1 gap-8 pt-28 pb-36 bg-[#343434] text-[#fff] transition-opacity duration-200 hover:opacity-90">
            <h1 className="text-lg text-center">QUAL A SUA IMPORTANCIA? </h1>
            <span className="text-base text-center px-12">
              Evita a disseminação de doenças e contribui para que os resíduos
              se encaminhem para os seus devidos lugares. Acima Falamos sobre a
              coleta seletiva, vimos a sua importância. Mas você sabe o que
              acontece quando Lixos e Resíduos são descartados de forma
              incorreta.
            </span>
          </div>
          <div className="keen-slider__slide number-slide1 select-none flex flex-col flex-1 gap-8 pt-28 pb-36 bg-[#343434] text-[#fff] transition-opacity duration-200 hover:opacity-90">
            <h1 className="text-lg text-center">COMO DEVE SER FEITA</h1>
            <span className="text-base text-center px-12">
              Exige que os descartes sejam separados em úmidos, secos,
              recicláveis e orgânicos. E dentro dessas categorias há
              subcategorias. O tipo de material que pode ser reciclado, por
              exemplo, abrange o alumínio, o papel, o papelão e alguns tipos de
              plástico, entre outros
            </span>
          </div>
          <div className="keen-slider__slide number-slide1 select-none flex flex-col flex-1 gap-8 pt-28 pb-36 bg-[#343434] text-[#fff] transition-opacity duration-200 hover:opacity-90">
            <h1 className="text-lg text-center">
              VOCE SABE QUE SEU LIXO TEM VALOR?
            </h1>
            <span className="text-base text-center px-12">
              Existem pessoas que compram lixos recicláveis tais como; Garrafa
              pet, vidro, papelão, papel e muitos outros. Essas pessoas compram
              para vender para empresas que são responsáveis pelo transporte e
              reutilização do lixo.
            </span>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex py-3 justify-center -translate-y-14">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "border-none w-3 h-3 bg-[#c5c5c5] rounded-[50%] mx-1 p-1 cursor-pointer " +
                  (currentSlide === idx ? "bg-[#000]" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}
