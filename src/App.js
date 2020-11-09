import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";

function App() {
  const [connected, setConnected] = useState(false);

  const socket = io("http://localhost:3000");
  socket.on("connect", () => setConnected(true));
  socket.on("error", (error) => console.log("error: " + error));
  socket.on("disconnect", () => console.log("disconnect"));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{connected ? "Connected" : "Connecting to server"}</p>
      </header>
    </div>
  );
}

export default App;
