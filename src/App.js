import "./App.css";
import React from "react";
import Contract from "./pages/Contract";
import ContractTemplates from "./pages/ContractTemplates";
// import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contract" element={<Contract />} />
        <Route path="ContractTemplates" element={<ContractTemplates />} />

        {/* <Profile></Profile> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
