import React from "react";
import "./App.css";
import Header from "./UI/header/header";
import Routing from "./UI/routing/routing";
import Sidebar from "./UI/sidebar/sidebar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="contents">
        <div></div>
        <div className="routes">
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
