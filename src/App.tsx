import React from "react";
import "./App.css";
import { ReplicateProvider } from "./store/replicate.provider";
import { DemoTheme } from "./Components/DemoTheme";
import { SwitchTheme } from "./Components/SwitchTheme";

function App() {
  return (
    <div className="App">
      <ReplicateProvider>
        <div />
      </ReplicateProvider>
    </div>
  );
}

export default App;
