import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  const [data, setData] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <button type="button" onClick={() => setToggle(false)}>
        OpenModal
      </button>
      <h1>Data- {data}</h1>
      {toggle ? <div></div> : <Modal setToggle={setToggle} setData={setData} />}
    </div>
  );
};

export default App;
