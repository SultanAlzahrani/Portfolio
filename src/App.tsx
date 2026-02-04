//import { useState } from 'react'

import NavbarTop from './components/navbar.js'
import SwitchThemeButton from './components/switchthemebutton.js'
import Welcome from './components/welcome.js'
import Skills from './components/skills.js'
import Projects from './components/projects.js'
import Hobbies from './components/hobbies.js'
import Footer from './components/footer.js'
//
//
function App() {

    

  return (
    <div className='main-container'>
    <NavbarTop/>
    <SwitchThemeButton />
    <section className='main-section'>
      
      <Welcome />
      <Skills />
      <Projects />
      <Hobbies />
    </section>
          <Footer/>
    </div>
  )
}

export default App
