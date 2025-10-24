import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2> THis is the Voyage-AI  </h2>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Button> Press Me </Button>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
