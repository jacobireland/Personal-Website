import React from 'react'
import { useState } from 'react'
import { Navbar, Header, About, Skills, Projects, Footer, Proj1Popup, } from './components';
import './App.css';


const App = () => {

  const [proj1Visible, setProj1Visible] = useState(false);

  return (
    <div className="App">
      { proj1Visible ? <Proj1Popup visible={proj1Visible} setVisible={setProj1Visible}/> : <div></div> }
      <div className="main_background">
        <Navbar />
        <Header />
      </div>
      <About />
      <div className="skills_page">
        <Skills />
      </div>
      <div className="projects_page">
        <Projects proj1Visible={proj1Visible} setProj1Visible={setProj1Visible}/>
      </div>
      <div className="footer_page">
        <Footer />
      </div>
    </div>
  )
}

export default App