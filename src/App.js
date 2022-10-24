import './App.css';
import Nav from './components/nav';
import Intro from './components/intro';
import About from './components/about';
import Work from './components/work';
import Services from './components/services';

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
      </main>
    </div>
  );
}

export default App;
