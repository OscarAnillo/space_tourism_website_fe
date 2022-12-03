import { NavBarComponent } from "./Components/nav-bar";
import { HeroComponent } from "./Components/hero-component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBarComponent />
        <HeroComponent />
      </div>
    </div>
  );
}

export default App;
