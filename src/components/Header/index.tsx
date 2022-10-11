import { useContext, useState } from "react";
import { MobileMenuContext } from "../../contexts/MobileMenuContext";
import { MobileMenuButton } from "../MobileMenuButton";

import logoImage from "/assets/logo.svg";

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false);

  document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 0) return setPageScrolled(true);
    return setPageScrolled(false);
  });

  return (
    <header
      className={`z-50 fixed flex justify-center py-4 w-full bg-[#7aaf60] text-[#fff] transition-opacity duration-300 ${
        pageScrolled ? "opacity-95" : "opacity-100"
      }`}
    >
      <MobileMenuButton />
      <div className="select-none flex gap-4">
        <img
          className="w-12 h-12"
          src={logoImage}
          alt="Conscientiza Angra Logo"
        />
        <span className="flex my-auto text-lg">Conscientiza Angra</span>
      </div>
      <nav className="hidden md:flex md:items-center">
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
    </header>
  );
}
