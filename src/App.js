import './App.css';
// Components
import Footer from "./components/Footer"
import Header from "./components/Header"
import {Route, Routes} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import About from './pages/About'
import Projects from "./pages/Projects"



function App() {
  const URL = "https://knguyen111601express-react-lab.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
