import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componets/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "vishnagi-Pratik",
    age: 20
  }

  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind test</h1>
      <Card username='Vishangi-Pratik' btnText='visit me' />
      

    </>
  )
}

export default App
