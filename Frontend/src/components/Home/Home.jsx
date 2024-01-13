import React from "react";
import Main from "../Main/Main";
import Middlesection from "../Middlesection/Middlesection";
import Quotesection from "../Quotesection/Quotesection";
import Topcheif from "../Topcheif/Topcheif";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div className="container main">
        <Main />
        <Middlesection />
        <Quotesection />
        <Topcheif />
      </div>
    </div>
  );
}

export default Home;
