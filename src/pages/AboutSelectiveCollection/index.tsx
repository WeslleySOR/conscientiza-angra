import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function AboutSelectiveCollection() {
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    drag: width >= 1024 ? false : true,
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
        className="scroll-mt-[152px] mt-[4.5rem] relative flex odd:bg-[#262626] md:scroll-mt-[96px] lg:scroll-mt-[132px] xl:mx-12 xl:mt-8"
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
          {loaded && instanceRef.current && width >= 1024 && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
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

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  return (
    <svg
      onClick={props.onClick}
      className={`w-8 h-full bg-[rgba(0,0,0,0.2)] absolute top-1/2 -translate-y-[50%] fill-white cursor-pointer ${
        props.left ? "left-1" : "left-auto right-1"
      } ${props.disabled ? "fill-zinc-600" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
