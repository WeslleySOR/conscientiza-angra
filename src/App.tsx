import { AboutSelectiveCollection } from "./components/AboutSelectiveCollection";
import { AboutUs } from "./components/AboutUs";
import { Pevs } from "./components/Pevs";
import * as SC from "./styles/App";

function App() {
  return (
    <SC.Container>
      <AboutSelectiveCollection />
      <Pevs />
      <AboutUs />
    </SC.Container>
  );
}

export default App;
