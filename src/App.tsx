
import "./App.css";
import { Home } from "./pages/Home";
import { HomeContextComponent } from "./context/Home";

function App() {
  return (
    <HomeContextComponent>
      <Home />
    </HomeContextComponent>
  );
}

export default App;
