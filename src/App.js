import { useReducer } from 'react'

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    dispatch({ type: 'increment' })
  }

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>useReducer</h3>
        <div>{state.count}</div>
        <div style={{ margin: "20px", width: "30vw" }}>
          <button style={{ width: "5vw"}} onClick={decrement}>-</button>
          <button style={{ width: "5vw"}} onClick={increment}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
