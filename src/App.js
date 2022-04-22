import "./App.css";
import React from "react";
import Contract from "./pages/Contract";
import ContractTemplates from "./pages/ContractTemplates";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Contract" element={<Contract></Contract>}></Route>
        <Route
          path="ContractTemplates"
          element={<ContractTemplates></ContractTemplates>}
        ></Route>
        {/* <Profile></Profile> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
