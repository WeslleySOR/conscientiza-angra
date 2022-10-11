import { useContext } from "react";
import { MobileMenuContext } from "../../contexts/MobileMenuContext";

export function MobileMenuContainer() {
  const { mobileMenu, updateMobileMenu } = useContext(MobileMenuContext);
  return (
    <div
      className={`w-screen h-screen bg-[#7aaf60] flex-none transition-transform duration-500 ${
        mobileMenu ? "-translate-x-0" : "-translate-x-[100vw]"
      }`}
    >
      <nav className="h-full flex flex-col gap-2 items-center justify-center">
          <a
            className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline"
            href="#sobre-a-coleta"
          >
            Sobre a coleta
          </a>
          <a
            className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline"
            href="#pevs"
          >
            Pevs
          </a>
          <a
            className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline"
            href="#dicas"
          >
            Dicas
          </a>
          <a
            className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline"
            href="#sobre-nos"
          >
            Sobre nós
          </a>
      </nav>
    </div>
  );
}
