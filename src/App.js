import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </Router>
  );
}

export default App;
