import { useReducer } from 'react'

import './App.css';

const reducer = (state, action) => {
  return { count: state.count + 1 }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    dispatch()
  }

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h3>useReducer</h3>
        <div>{state.count}</div>
        <div style={{ margin: "20px", width: "30vw" }}>
          {/* <button style={{ width: "5vw"}} onClick={decrement}>-</button> */}
          <button style={{ width: "5vw"}} onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
