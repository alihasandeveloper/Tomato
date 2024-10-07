import Navber from "./components/Navber/Navber";
import { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import './style.css';
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp.jsx";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div >
      <div className="mx-auto md:max-w-[80%]">
        {
          isLogin ? <LoginPopUp /> : <></>
        }
        <Navber isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;