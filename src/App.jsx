import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Heading from './components/Heading'
import Popups from './components/Popups'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Heading />
    <Todo task="learn react" />
    <Todo task="land a junior job"/>
    <Todo task="earn $200,000+"/>
    <Popups />
    
    </>
   
  )
}

export default App
