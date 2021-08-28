import { useState, useReducer } from 'react'

import './App.css';

const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO: 'toggle_todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      
  }
}

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false }
}

const Todo = ({ todo }) => {
  return (
    <div>
      <div style={{ color: todo.complete ? 'salmon' : 'lightgrey' }}>
        {todo.name}
      </div>
      <button>
        toggle
      </button>
      <button>
        delete
      </button>
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } })
    setName('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>useReducer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </header>
    </div>
  );
}

export default App;
