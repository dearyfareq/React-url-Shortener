import Background from "./Background";
import Header from "./header";
import "./App.css"
import Result from "./Result";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="App">
      <Header setInputValue={setInputValue}/>
      <Background/>
      <Result inputValue={inputValue}/>
    </div>
  );
}

export default App;
