import React from 'react'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'

import './styles/app.scss'
import './styles/contact.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/mediaquery.scss'


import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <BrowserRouter >
      <Toaster />
      <Header />
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/contact"} element={<Contact />}/>
          <Route path={"/services"} element={<Services />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App