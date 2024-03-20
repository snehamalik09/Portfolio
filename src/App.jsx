import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

/* 
I have to add a functionality where clicking on download will download the resume
change the text lorem ipsum wala
deploy the project
*/
function App() {

  return (
    <>
    <Navbar/>
    <SocialLinks/>
    <Home/>
    <About/>
    <Project/>
    <Skills/>
    <Education/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
