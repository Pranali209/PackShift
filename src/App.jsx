import { useState } from 'react'
import Logo from './assets/Logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './Component/Header'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Home/>
    </>
  )
}

export default App
