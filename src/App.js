import "./App.css";
import React, { useState } from "react";
import SearchBar from "./SearchBar.js";

function App() {

  const [data, setData] = useState({});

  const updateData = (searchParam) => {
    setData(searchParam);
  }

  return (
    <div className="App">

      <SearchBar callback={updateData}></SearchBar>

      <p>Result: {"name" in data ? data["name"]: "No data"}</p>
      <p>Result: {"price" in data ? data["price"]: "No data"}</p>
      <p>Result: {"type" in data ? data["type"]: "No data"}</p>
      <p>Result: {"brand" in data ? data["brand"]: "No data"}</p>

    </div>
  );
}

export default App;