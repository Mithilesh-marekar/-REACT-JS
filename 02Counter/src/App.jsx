import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    if(counter<20){
      // counter = counter + 1;
      setCounter(counter + 1);
    }
    console.log("Value Added ", counter);
  };

  const removeValue = () => {
    if(counter>0 ){
      setCounter(counter -1);
    }
    console.log("value Removed", counter);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <p>THE COUNT VALUE IS : {counter}</p>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
