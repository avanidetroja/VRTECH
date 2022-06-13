import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Membership from "./pages/membership"
import Financial_education from './pages/Financial_eduction';
import Opportunity from './pages/Opportunity';
import Pricing from './pages/Pricing';
import "./assets/css/app.2afad0c.bundle.css"
import "./assets/css/swiper-custom.css"
import "./styles/globals.css"
import "./styles/Home.module.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/membership" element={<Membership />} />

        <Route path='/Financial_education' element={<Financial_education/>} />

        <Route path='/Opportunity' element={<Opportunity/>} />

        <Route path='/Pricing' element={<Pricing/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
