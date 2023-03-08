import { useState, useEffect } from "react";
import "./App.css";

type User = {
  name: string;
};

function App() {
  const [responseMsg, setResponseMsg] = useState<string>("");

  const handleGetUsers = async () => {
    const resp = await fetch("http://localhost:8080/users");

    if (!resp.ok) {
      setResponseMsg("unable to fetch users");
      return;
    }

    const json = await resp.json();
    setUsers(json.users);
    return;
  };
  const handlePing = async () => {
    const start = Date.now();
    const resp = await fetch("http://localhost:8080/ping");

    if (!resp.ok) {
      setResponseMsg("unable to ping server");
      return;
    }

    const json = await resp.json();
    setResponseMsg(
      `ping successful: ${json.message} took ${(Date.now() - start) / 1000}ms`
    );

    return;
  };

  const handleClear = () => {
    setResponseMsg("");
  };

  return (
    <div>
      <h1>DevOps Code Challenge Frontend</h1>
      <div className="container">
        <div className="op-group">
          <button className="btn" onClick={handlePing}>
            Ping
          </button>
          <button className="btn" onClick={handleClear}>
            X
          </button>
        </div>
        <div className="op-group">
          <div className="responseMsg">
            {responseMsg && <p>{responseMsg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
