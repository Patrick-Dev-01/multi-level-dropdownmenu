import { Navbar } from './components/menu/NavBar';
import './App.css'

function App() {
  return ( 
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">CodeSolution </a>
        <Navbar />
      </div> 
    </header >
  );
}

export default App
