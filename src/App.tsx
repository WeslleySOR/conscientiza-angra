import { AboutSelectiveCollection } from "./components/AboutSelectiveCollection";
import { AboutUs } from "./components/AboutUs";
import * as SC from "./styles/App";

function App() {
  return (
    <SC.Container>
      <AboutUs />
      <AboutSelectiveCollection />
    </SC.Container>
  );
}

export default App;
