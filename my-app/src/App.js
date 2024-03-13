import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import './App.css';

import Nav from "./components/Nav"
import Tarifs from "./pages/Tarifs";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/tarifs" element={<Tarifs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
