import Background from "./Background";
import Header from "./header";
import "./App.css"
import Result from "./Result";
import { useState } from "react";

function App() {
  // the useState is distributed, the function is sent to header as its own name and the value(inputValue) is sent to the result section as its own name
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
