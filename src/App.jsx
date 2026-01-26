import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>API Teste</h1>
        <Home />
      </div>
    </>
  )
}

export default App
