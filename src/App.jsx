import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import GameMode from './components/GameMode'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamemode" element={<GameMode />} />
    </Routes>
  )
}

export default App
