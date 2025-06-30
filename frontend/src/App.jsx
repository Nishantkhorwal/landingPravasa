import { useState } from 'react'
import './App.css'
import PravasaLeadPage from './pages/Pravasa'
import ThankYouPage from './pages/ThankyouPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<PravasaLeadPage/>} />
        <Route path="/thankyou" element={<ThankYouPage/>} />
      
      </Routes>
    </Router>    
      
    </>
  )
}

export default App
