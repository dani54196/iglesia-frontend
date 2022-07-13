import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navigation from "./lib/Navigation";

import Home from "./pages/home/Home"
import Finance from "./pages/finance/Finance"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/finance" element={<Finance/>} />
      </Routes>
    </div>
  );
}

export default App;
