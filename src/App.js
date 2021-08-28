import { useReducer } from 'react'

import './App.css';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: "reset"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  const reset = () => {
    dispatch({ type: ACTIONS.RESET })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>useReducer</h3>
        <div>{state.count}</div>
        <div style={{ margin: "20px", width: "30vw" }}>
          <button style={{ width: "5vw"}} onClick={decrement}>-</button>
          <button style={{ width: "5vw"}} onClick={increment}>+</button>
          <button style={{ width: "5vw"}} onClick={reset}>reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
