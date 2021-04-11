import React from 'react';
import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";

function App() {
  return (
    <div>
        <Counter/> 
        <DecreaseCounter/>
        <IncreaseCounter/>
        <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
