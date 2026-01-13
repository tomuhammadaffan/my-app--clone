import React, { useState } from "react";
import "./App.css";



function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return(
      <div className="App">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h3>Text input is {input}</h3>
            <h3>Count is {count}</h3>
            <ChildComponent count={count} />
      </div>
  );
}

function ChildComponent({count}){
  console.log("rendering child component")
  return <h4>Count from child component is {count}</h4>;
}

export default App;
