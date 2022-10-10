import * as SC from "./style";

import logoImage from "/assets/logo.svg";

export function Logo() {
  return (
    <SC.LogoContainer>
      <img src={logoImage} alt="Conscientiza Angra Logo" />
      <span>Conscientiza Angra</span>
    </SC.LogoContainer>
  );
}
