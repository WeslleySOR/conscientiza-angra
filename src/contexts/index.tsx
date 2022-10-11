import { ReactNode } from "react";
import { MobileMenuContextProvider } from "./MobileMenuContext";

type Props = {
  children: ReactNode;
};

export default function GlobalContext({ children }: Props) {
  return <MobileMenuContextProvider>{children}</MobileMenuContextProvider>;
}
