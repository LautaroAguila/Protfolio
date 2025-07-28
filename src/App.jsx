import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Contact />
      <About />
    </>
  );
}

export default App;
