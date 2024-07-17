import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parallax from './pages/Parallax/Parallax'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parallax></Parallax>
    </>
  )
}

export default App
