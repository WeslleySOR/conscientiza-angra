import { AboutSelectiveCollection } from "./pages/AboutSelectiveCollection";
import { AboutUs } from "./pages/AboutUs";
import { Pevs } from "./pages/Pevs";
import { Tips } from "./pages/Tips";

function App() {
  return (
    <main className="flex flex-col gap-32 mx-48 pt-[148px] pb-36">
      <AboutSelectiveCollection />
      <Pevs />
      <Tips />
      <AboutUs />
    </main >
  );
}

export default App;
