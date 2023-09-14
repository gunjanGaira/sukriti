import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Desk/Home/Home'
import About from './Desk/About/About'
import Ecomitra from './Desk/Ecomitra/Ecomitra'
import Rewater from './Desk/Rewater/Rewater'
import Careers from './Desk/Careers/Careers'
import Contact from './Desk/Contact/Contact'
import Navbar from './Desk/Navbar/Navbar'
import Footer from "./Desk/Footer/Footer"

 

const App = () => {

  return (
    <Router>

      <Navbar/>
    
      <Routes>
      <Route path='/' element={< Home/>}/>
      <Route path='about' element={< About/>}/>
      <Route path='ecomitra' element={< Ecomitra/>}/>
      <Route path='rewater' element={< Rewater/>}/>
      <Route path='careers' element={<Careers/>}/>
      <Route path='contact' element={< Contact/>}/>
      </Routes>

    </Router>
    
    
 
  )
}

export default App
