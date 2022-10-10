import { useState } from "react";
import { Logo } from "../Logo";
import * as SC from "./style";

export function Header() {
  const [pageScrolled, setPageScrolled] = useState(false);

  document.addEventListener("scroll", (e) => {
    const lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition > 0) return setPageScrolled(true);
    return setPageScrolled(false);
  });
  
  return (
    <SC.HeaderContainer pageScrolled={pageScrolled}>
      <Logo />
      <SC.HeaderNavigation>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-a-coleta">Sobre a coleta</a>
        <a href="">Pevs</a>
        <a href="">Dicas</a>
        <a href="">Sobre nós</a>
      </SC.HeaderNavigation>
    </SC.HeaderContainer>
  );
}
