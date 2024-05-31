import React from 'react'
import { useState } from 'react'
import { Navbar, Header, About, Skills, Projects, Footer, Proj1Popup, Proj2Popup, Proj3Popup, Proj4Popup } from './components';
import MetaTags from 'react-meta-tags'
import './App.css';


const App = () => {

  const [proj1Visible, setProj1Visible] = useState(false);
  const [proj2Visible, setProj2Visible] = useState(false);
  const [proj3Visible, setProj3Visible] = useState(false);
  const [proj4Visible, setProj4Visible] = useState(false);

  return (
    <div className="App">
      <MetaTags>
        <title>Personal Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      { proj1Visible ? <Proj1Popup visible={proj1Visible} setVisible={setProj1Visible}/> : <div></div> }
      { proj2Visible ? <Proj2Popup visible={proj2Visible} setVisible={setProj2Visible}/> : <div></div> }
      { proj3Visible ? <Proj3Popup visible={proj3Visible} setVisible={setProj3Visible}/> : <div></div> }
      { proj4Visible ? <Proj4Popup visible={proj4Visible} setVisible={setProj4Visible}/> : <div></div> }
      <div className="main_background">
        <Navbar />
        <Header />
      </div>
      <div className='about_page'>
        <About />
      </div>
      <div className="skills_page">
        <Skills />
      </div>
      <div className="projects_page">
        <Projects proj1Visible={proj1Visible} setProj1Visible={setProj1Visible} proj2Visible={proj2Visible} setProj2Visible={setProj2Visible}
                  proj3Visible={proj3Visible} setProj3Visible={setProj3Visible} proj4Visible={proj4Visible} setProj4Visible={setProj4Visible}/>
      </div>
      <div className="footer_page">
        <Footer />
      </div>
    </div>
  )
}

export default App