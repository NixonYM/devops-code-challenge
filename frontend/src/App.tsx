import { useState } from "react";
import "./App.css";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  const [responseMsg, setResponseMsg] = useState<string>("");

  const handlePing = async () => {
    const start = Date.now();
    await fetch(`${SERVER_URL}/ping`)
      .then((resp) => {
        if (!resp?.ok) {
          throw new Error("unable to ping server");
        }

        return resp.json();
      })
      .then((json) => {
        setResponseMsg(
          `ping successful: ${json.message} took ${
            (Date.now() - start) / 1000
          }ms`
        );
      })
      .catch((e) => {
        setResponseMsg(`unable to ping server ${e.message}`);
      });
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
};

export default App;
