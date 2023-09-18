import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductFormPage from './pages/ProductFormPage'
import WhoIAm from './pages/WhoIAm'
import PrivateRoute from './routes/PrivateRoutes'
import DashboardAdmin from './pages/DashboardAdmin'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello/:firstname/:lastname" Component={WhoIAm}></Route>
        <Route path="/product/" Component={ProductFormPage}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/admin" element={<PrivateRoute component={DashboardAdmin} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
