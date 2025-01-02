import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cards from './component/cards'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"rishav",age:21
  }
  let newArray=[1,2,3]

  return (
<>
<h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind css test</h1>
<cards username="arpana and simpy" btnText="clickme"/>
<cards username="hitesh" btnText="visit me"/>

</>
  )
}

export default App
