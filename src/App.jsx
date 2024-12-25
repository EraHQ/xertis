import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDashboard from './components/UserDashboard'
import SignIn from './components/signIn'
// import Sign from './components/sign'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/curator/dashboard" element={<UserDashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path='/bb' element={<Sign />} /> */}
      </Routes>
    </Router>
  )
}

export default App
