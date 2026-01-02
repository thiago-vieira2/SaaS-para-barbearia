import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DashBoard } from './pages/dashboard'
import { HeaderDashboard } from './pages/header-dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderDashboard/>
      <DashBoard/>
    </>
  )
}

export default App
