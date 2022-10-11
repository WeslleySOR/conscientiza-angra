import { useState } from "react";
import { Logo } from "../Logo";

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false);

  document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 0) return setPageScrolled(true);
    return setPageScrolled(false);
  });

  return (
    <header
      className={`z-50 fixed flex justify-between py-8 px-24 w-full bg-[#7aaf60] text-[#fff] transition-opacity duration-300 ${pageScrolled ? 'opacity-95' : 'opacity-100'}`}
    >
      <Logo />
      <nav className="flex mx-16 items-center">
        <a className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline" href="#sobre-a-coleta">Sobre a coleta</a>
        <a className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline" href="#pevs">Pevs</a>
        <a className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline" href="#dicas">Dicas</a>
        <a className="text-[#fff] no-underline  text-base font-medium p-5 underline-offset-8 hover:underline" href="#sobre-nos">Sobre nós</a>
      </nav>
    </header>
  );
}
