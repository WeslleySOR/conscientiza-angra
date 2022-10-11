import { AboutSelectiveCollection } from "./components/AboutSelectiveCollection";
import { AboutUs } from "./components/AboutUs";
import { Pevs } from "./components/Pevs";
import { Tips } from "./components/Tips";

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
