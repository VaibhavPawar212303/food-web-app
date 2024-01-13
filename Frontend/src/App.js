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


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
