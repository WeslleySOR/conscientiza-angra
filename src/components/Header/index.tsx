import useWindowDimensions from "../../hooks/useWindowDimensions";
import { HeaderMobile } from "./Mobile";
import { HeaderWeb } from "./Web";

export function Header() {
  const { width } = useWindowDimensions();

  return <>{width < 1024 ? <HeaderMobile /> : <HeaderWeb />}</>;
}
