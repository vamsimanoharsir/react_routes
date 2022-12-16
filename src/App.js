import { Routes, Route } from "react-router-dom"; //BrowserRouter import in index.js
import { Link } from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage";
import About from "./components/About";
import Contact from "./components/Contact"
import Support from "./components/Support"
import Information from "./components/Information"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/information' element={<Information/>}/>
      </Routes>
    </div>
  );
}

export default App;
