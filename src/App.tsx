import React from "react";
import "./App.css";
import { Header, NavBar, Routing, Sidebar } from "./UI";

function App() {
  return (
    <React.Fragment>
      <Header />

      <div className="content">
        <div className="navbar">
          <NavBar />
        </div>

        <div className="main">
          <Routing />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
