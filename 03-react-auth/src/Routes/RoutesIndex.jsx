// Implementar react-router-dom
import { Routes, Route } from 'react-router-dom'
// Importante tambien importar BrowserRouter
// y RoutesIndex en App.jsx
import { Home, Dashboard, Login, Secret, Signup } from '../Pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default RoutesIndex