import { useState } from 'react'

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        useReducer
        <div>{count}</div>
        <div style={{ margin: "20px", width: "30vw" }}>
          <button style={{ width: "5vw"}} onClick={decrement}>-</button>
          <button style={{ width: "5vw"}} onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
