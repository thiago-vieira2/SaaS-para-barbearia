  import './App.css'
  import { DashBoard } from './pages/dashboard'

  import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainSection } from './pages/mainSection';
function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-zinc-900">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/dashboard" element={<DashBoard />} />
          
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



