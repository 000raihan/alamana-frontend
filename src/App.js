// import logo from './logo.svg';
import "./App.css";

import Home from "./pages/Home";
import SandCategory from "./pages/SandCategory";
import StoneCategory from "./pages/StoneCategory";
import StoneProducts from "./pages/StoneCategory/StoneProducts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stone" element={<StoneCategory/>} />
        <Route path="/stone_products" element={<StoneProducts/>} />
        <Route path="/sand" element={<SandCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
