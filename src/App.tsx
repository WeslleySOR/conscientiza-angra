import { AboutSelectiveCollection } from "./pages/AboutSelectiveCollection";
import { AboutUs } from "./pages/AboutUs";
import { Pevs } from "./pages/Pevs";
import { Routes } from "./pages/Routes";
import { Tips } from "./pages/Tips";

function App() {
  return (
    <main className={`min-h-screen w-screen mt-20 mb-4 `}>
      <AboutSelectiveCollection />
      <Pevs />
      <Routes />
      <Tips />
      <AboutUs />
    </main>
  );
}

export default App;
