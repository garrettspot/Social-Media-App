import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import './index.css'
import Home from './pages/Home'
import useCurrentUser from './hooks/useCurrentUser'
import { useSelector } from 'react-redux'

function App() {
  useCurrentUser();
  const { userData } = useSelector(state => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/home" element={userData ? <Home />: <SignIn />}></Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
