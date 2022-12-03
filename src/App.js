import { useState, useEffect } from "react";

import { NavBarComponent } from "./Components/nav-bar";
import { HeroComponent } from "./Components/hero-component";

import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.height = "100vh";
    } else {
      document.body.style.minHeight = "100vh";
    }
  }, [showMenu]);

  return (
    <div className="App">
      <div className="container">
        <NavBarComponent
          showMenu={showMenu}
          menuClickHandler={menuClickHandler}
        />
        <HeroComponent />
      </div>
    </div>
  );
}

export default App;
