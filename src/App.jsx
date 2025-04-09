import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import Heading from './components/Heading.jsx'
import Popups from './components/Popups.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Heading title="Nat's List" />
    <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value);
      }} />
      <button>Add to do</button>
    </div>
    <Todo task="learn react"
     />
    <Todo task="land a junior job"
    />
    <Todo task="earn $200,000+"
    />
  
    <Popups greeting="Are you sure?" description = "ABSOLUTELY" />
    
    </>
   
  )
}

export default App;
