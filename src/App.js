import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Csv from "./components/Csv";

const App = () => {
  return(


    <>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/csvform" element={<Csv />} />
    </Routes>
  </>
  )

};

export default App;
