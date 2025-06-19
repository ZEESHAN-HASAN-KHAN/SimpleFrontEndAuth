import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} /> 
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
