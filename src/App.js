import { useState } from 'react'

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    if (toDo === '') {
      return
    }
    setToDos((currentArray) => [toDo, ...currentArray])
    setToDo('')
  }
  // console.log(toDos)
  console.log(toDos.map((task, index) => <li key={index}>{task}</li>))
  return (
    <div className="App">
      <h1>To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Add task"
        />
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
