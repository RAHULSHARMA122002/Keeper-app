import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> note keeperⓒ {year}</p>
    </footer>
  );
}

export default Footer;
