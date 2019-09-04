import React from "react";
import "./App.css";
import MainNavber from "./Component/navbar";
import MenuCard from "./Component/menuCard";
import AddNumber from "./Component/addNumber";

function App() {
  
  return (
    <div className="App">
      <MainNavber />
      <div className="container">
      <AddNumber />
      <MenuCard/>
      </div>
    
    </div>
  );
}

export default App;
