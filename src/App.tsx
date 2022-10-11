import { AboutSelectiveCollection } from "./pages/AboutSelectiveCollection";
import { AboutUs } from "./pages/AboutUs";
import { Pevs } from "./pages/Pevs";
import { Tips } from "./pages/Tips";

function App() {
  return (
    <main className={`min-h-screen w-screen mt-[80px] mb-4 `}>
      <AboutSelectiveCollection />
      <Pevs />
      <Tips />
      <AboutUs />
    </main >
  );
}

export default App;
