import React from "react";
import RTSPPlayer from "./components/RTSPPlayer";
import ChatLog from "./components/Log/ChatLog";
import InfoLog from "./components/Log/InfoLog";

import "./App.css";
import TodoLog from "./components/Log/TodoLog";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Daila</h1>
        <span>킹갓제너럴어쩌구저쩌구메디컬해커톤아자아자화이팅</span>
      </header>
      <main>
        <div className="container">
          <section>
            <RTSPPlayer />
          </section>
          <section>
            <ChatLog />
          </section>
          <section>
            <InfoLog />
          </section>
          <section>
            <TodoLog />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
