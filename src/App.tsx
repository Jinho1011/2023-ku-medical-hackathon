import React from "react";
import RTSPPlayer from "./components/RTSPPlayer";
import ChatLog from "./components/Log/ChatLog";
import ActionLog from "./components/Log/ActionLog";
import StatisticLog from "./components/Log/StatisticLog";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Daila</h1>
        <span>너는 다일라다일라 나는 통카닥콩카닥이 다일라다일라 요기조기</span>
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
            <ActionLog />
          </section>
          <section>
            <StatisticLog />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
