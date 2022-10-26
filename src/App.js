import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Process from './components/process';
import Shop from './components/shop';
import Blog from './components/blog';
import Info from './components/info';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Intro />
      </header>
      <main>
        <About />
        <Work/>
        <Services />
        <Testimonials />
        <Process />
        <Shop/>
        <Blog />
        <Info />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
