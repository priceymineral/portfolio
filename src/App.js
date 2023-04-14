import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import About from './components/About'
import Projects from './components/Projects'
import Carousel, { CarouselItem } from './components/Carousel'
import jsLogo from './assets/images/js.png'
import rorLogo from './assets/images/RoR.png'
import psqlLogo from './assets/images/postgres.jpg'
import jestLogo from './assets/images/jest.avif'
import rubyLogo from './assets/images/ruby.png'
import pythonLogo from './assets/images/python.png'
import reactLogo from './assets/images/react.png'
import nodeLogo from './assets/images/node.jpg'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <div className="subheader">Tech Carousel (Stack)</div>
      <Carousel>
        <CarouselItem>
          <a
            className="github"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"
            rel="noreferrer"
          >
            <img src={jsLogo} alt="JS logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://guides.rubyonrails.org/" target="_blank"
            rel="noreferrer"
          >
            <img src={rorLogo} alt="RoR logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://www.postgresql.org/docs/" target="_blank"
            rel="noreferrer"
          >
            <img src={psqlLogo} alt="PostgreSQL logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://jestjs.io/" target="_blank"
            rel="noreferrer"
          >
            <img src={jestLogo} alt="Jest logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://ruby-doc.org/" target="_blank"
            rel="noreferrer"
          >
            <img src={rubyLogo} alt="Ruby logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://docs.python.org/3/" target="_blank"
            rel="noreferrer"
          >
            <img src={pythonLogo} alt="Python logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://reactjs.org/docs/getting-started.html" target="_blank"
            rel="noreferrer"
          >
            <img src={reactLogo} alt="React logo" />
          </a>
        </CarouselItem>
        <CarouselItem>
          <a
            className="github"
            href="https://nodejs.org/en/docs/" target="_blank"
            rel="noreferrer"
          >
            <img src={nodeLogo} alt="Node logo" />
          </a>
        </CarouselItem>
      </Carousel>
      <Projects />
      <Form />
    </>
  )
}

export default App
