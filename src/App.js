import { useState, useEffect } from "react";

/* react-router-dom */
import { Routes, Route } from "react-router-dom";

/*components */
import { NavBarComponent } from "./Components/nav-bar";
import { HeroComponent } from "./Components/hero-component";
import { DestinationComponent } from "./Components/destinations-component";
import { CrewComponent } from "./Components/crew-components";

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
      <NavBarComponent
        showMenu={showMenu}
        menuClickHandler={menuClickHandler}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HeroComponent
              showMenu={showMenu}
              menuClickHandler={menuClickHandler}
            />
          }
        ></Route>
        <Route path="/destinations" element={<DestinationComponent />}></Route>
        <Route path="/crew" element={<CrewComponent />} />
      </Routes>
    </div>
  );
}

export default App;
