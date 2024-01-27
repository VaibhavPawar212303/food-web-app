import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Cancel from "./components/Cancel/Cancel";
import Success from "./components/Success/Success";
import Payment from "./components/Payment/Payment";
import CartProvider from "./components/Utilities/context";
import Dishpage from "./components/Dish/Dishpage";
import Orders from "./components/Orders/Orders";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
