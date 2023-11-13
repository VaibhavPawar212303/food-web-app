import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
function Quotesection() {
  return (
    <div className="section quote">
      <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="quote-author">-dummy author</div>
    </div>
  );
}

export default Quotesection;
