import { useState, useEffect } from "react";

/* react-router-dom */
import { Routes, Route } from "react-router-dom";

/*components */
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
        <Routes>
          <Route path="/" element={<HeroComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
