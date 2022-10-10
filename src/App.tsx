import { AboutSelectiveCollection } from "./components/AboutSelectiveCollection";
import { Home } from "./components/Home";
import * as SC from "./styles/App";

function App() {
  return (
    <SC.Container>
      <Home />
      <AboutSelectiveCollection />
    </SC.Container>
  );
}

export default App;
