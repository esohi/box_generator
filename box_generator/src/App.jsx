import React, { useState } from "react";
import ColorForm from "./components/ColorForm";
import Display from "./components/Display";
import NinjaForm from "./components/NinjaForm";
import NinjaDisplay from "./components/NinjaDisplay";
import "./App.css";

const App = () => {
  const [boxColorArray, setBoxColorArray] = useState([]);
  const [ninjaBoxArray, setNinjaBoxArray] = useState([]);

  return (
    <div className="App">
      <h2>Box Generator (Color)</h2>
      <ColorForm
        boxColorArray={boxColorArray}
        setBoxColorArray={setBoxColorArray}
      />
      <Display boxColorArray={boxColorArray} />
    <h2>Ninja Box Generator (Color and Dimensions)</h2>
      <NinjaForm
        ninjaBoxArray={ninjaBoxArray}
        setNinjaBoxArray={setNinjaBoxArray}
      />
      <NinjaDisplay ninjaBoxArray={ninjaBoxArray} />
    </div>
  );
};

export default App;
