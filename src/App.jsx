import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Signup } from './pages/Signup'
import { Detail } from './pages/Detail'
import { Profile } from './pages/Profile'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>     
    </>
  )
}

export default App
