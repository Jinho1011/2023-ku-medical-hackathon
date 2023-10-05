import React from "react";
import RTSPPlayer from "./components/RTSPPlayer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Daila</h1>
        <span>킹갓제너럴어쩌구저쩌구메디컬해커톤아자아자화이팅</span>
      </header>
      <main>
        <div className="container">
          <RTSPPlayer />
          <RTSPPlayer />
          <RTSPPlayer />
          <RTSPPlayer />
        </div>
      </main>
    </div>
  );
}

export default App;
