import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ServerLists from "./components/ServerLists";
import ServerInfo from "./components/ServerInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ServerLists/>}/>
        <Route path="/server/:id" element={<ServerInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
