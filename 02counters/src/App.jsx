import {useState} from 'react'
import reactLOGO from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
 // let counter=5;
  const addvalue=()=>{
    
   //counter=counter+1
   setCounter(counter+1)
   console.log("clicked",counter);
  }
  const removeValue=()=>{
    setCounter(counter-1)
  }
 
  return (
    <>
    <h1>komal and mansi</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
