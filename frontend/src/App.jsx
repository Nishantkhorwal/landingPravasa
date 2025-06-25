import { useState } from 'react'
import './App.css'
import PravasaLeadPage from './pages/Pravasa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PravasaLeadPage/>
    </>
  )
}

export default App
