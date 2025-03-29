import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
