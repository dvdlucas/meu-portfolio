import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"

const Home = () => {


  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
