import React from "react";

export default function Header({ children }) {
  return (
    <header>
      <h1>The Hero - {children}</h1>
    </header>
  );
}

//export default Header;
