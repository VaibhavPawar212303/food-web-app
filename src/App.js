import Main from "./components/Main/Main";
import Middlesection from "./components/Middlesection/Middlesection";
import Navbar from "./components/Navbar/Navbar";
import Quotesection from "./components/Quotesection/Quotesection";
import Topcheif from "./components/Topcheif/Topcheif";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <Main />
        <Middlesection />
        <Quotesection />
        <Topcheif />
      </div>
      <Footer />
    </div>
  );
}

export default App;
