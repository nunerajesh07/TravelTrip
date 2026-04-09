
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import ProtectedRoute from './Components/ProtectedRoute'
import MyTrips from './Components/MyTrips'
import History from './Components/History'
import BookNewTrip from './Components/BookNewTrip'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path='/my-trips' element={<ProtectedRoute> <MyTrips /> </ProtectedRoute>} />
        <Route path='/history' element={<ProtectedRoute> <History /> </ProtectedRoute>} />
        <Route path='/book-new-trip' element={<ProtectedRoute> <BookNewTrip /> </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App