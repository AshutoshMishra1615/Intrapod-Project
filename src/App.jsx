import { useState } from 'react';
import './App.css'

import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import  Home  from './components/sections/Home';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'




function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

  {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    <div className= {`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-custom-gradient text-gray-100`} >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Footer />
      

    </div>
  </>
  );

  

}

export default App;
