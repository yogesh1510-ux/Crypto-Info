import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";

import News from "./components/News";
import Footer from "./components/Footer";


function App() {
  return (
   <div>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}  /> 
        <Route path="/coins" element={<Coins/>}/> 
        <Route path="/coin/:id" element={<CoinDetails />} />
      
       <Route path="/news" element={<News/>} />
        <Route path="/exchanges" element={<Exchanges/>}  /> 
      </Routes>
      <Footer />
    </Router>
   </div>
  );
}

export default App;
