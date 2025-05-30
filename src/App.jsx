// src/App.js
import React, { useState } from "react";
import Search from "./Component/Search";
import Records from "./Component/Records";

const title = "Patient Medical Records";

const App = () => {
  const [selectedId, setSelectedId] = React.useState(""); // or null

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setId={setSelectedId} id={selectedId} />
        <Records selectedId={selectedId} setId={setSelectedId} />
      </div>
    </div>
  );
};

export default App;
