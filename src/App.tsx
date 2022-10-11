import { useContext } from "react";
import { MobileMenuContext } from "./contexts/MobileMenuContext";
import { AboutSelectiveCollection } from "./pages/AboutSelectiveCollection";
import { AboutUs } from "./pages/AboutUs";
import { Pevs } from "./pages/Pevs";
import { Tips } from "./pages/Tips";

function App() {
  const { mobileMenu } = useContext(MobileMenuContext)
  return (
    <main className={`min-h-screen w-screen mt-[80px] mb-4 flex-none transition-[transform_opacity] duration-500 ${
      mobileMenu
        ? "-translate-x-0 opacity-50 h-screen"
        : "-translate-x-[100vw]"
    }`}>
      <AboutSelectiveCollection />
      <Pevs />
      <Tips />
      <AboutUs />
    </main >
  );
}

export default App;
