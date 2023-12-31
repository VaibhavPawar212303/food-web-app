import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dish from "./components/Dish/Dish";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dishes" element={<Dish />}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
