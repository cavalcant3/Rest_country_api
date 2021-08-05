import React from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
