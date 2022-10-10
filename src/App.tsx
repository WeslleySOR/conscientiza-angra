import { AboutSelectiveCollection } from "./components/AboutSelectiveCollection";
import { AboutUs } from "./components/AboutUs";
import { Pevs } from "./components/Pevs";
import { Tips } from "./components/Tips";
import * as SC from "./styles/App";

function App() {
  return (
    <SC.Container>
      <AboutSelectiveCollection />
      <Pevs />
      <Tips />
      <AboutUs />
    </SC.Container>
  );
}

export default App;
