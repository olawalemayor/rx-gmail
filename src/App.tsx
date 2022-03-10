import React, { useState } from "react";
import "./App.css";
import { Header, NavBar, Routing, Sidebar } from "./UI";
import ComposeButton from "./components/composeButton";

function App() {
  const [navbarExpansion, setNavbarExpansion] = useState(true);

  return (
    <React.Fragment>
      <Header handleNavExpansion={() => setNavbarExpansion(!navbarExpansion)} />

      <div className="content">
        <div className="navbar">
          <ComposeButton expand={navbarExpansion} />
          <NavBar navbarExpansion={navbarExpansion} />
        </div>

        <div className="main">
          <Routing />
        </div>

        <div className="sidebar box">
          <Sidebar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
