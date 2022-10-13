import { useState } from "react";

import logoImage from "/assets/logo2.png";

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false);

  document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 0) return setPageScrolled(true);
    return setPageScrolled(false);
  });

  return (
    <header
      className={`z-50 sticky top-0 flex flex-col items-center md:flex-row md:justify-around py-4 w-full bg-[#7aaf60] text-[#fff] transition-opacity duration-300 ${
        pageScrolled ? "opacity-95" : "opacity-100"
      }`}
    >
      <div className="select-none flex items-center gap-4">
        <img
          className="w-20 h-20 lg:w-24 lg:h-24"
          src={logoImage}
          alt="Conscientiza Angra Logo"
        />
        <span className="flex my-auto text-lg lg:text-xl">Conscientiza Angra</span>
      </div>
      <nav className="flex items-center">
        <a
          className="text-[#fff] no-underline text-sm p-4 md:text-base font-medium md:p-5 underline-offset-8 lg:text-lg hover:underline"
          href="#sobre-a-coleta"
        >
          Sobre a coleta
        </a>
        <a
          className="text-[#fff] no-underline text-sm p-4 md:text-base font-medium md:p-5 underline-offset-8 lg:text-lg hover:underline"
          href="#pevs"
        >
          Pevs
        </a>
        <a
          className="text-[#fff] no-underline text-sm p-4 md:text-base font-medium md:p-5 underline-offset-8 lg:text-lg hover:underline"
          href="#rotas"
        >
          Rotas
        </a>
        <a
          className="text-[#fff] no-underline text-sm p-4 md:text-base font-medium md:p-5 underline-offset-8 lg:text-lg hover:underline"
          href="#dicas"
        >
          Dicas
        </a>
        <a
          className="text-[#fff] no-underline text-sm p-4 md:text-base font-medium md:p-5 underline-offset-8 lg:text-lg hover:underline"
          href="#sobre-nos"
        >
          Sobre nós
        </a>
      </nav>
    </header>
  );
}
