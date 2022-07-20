import React, { useState } from "react";
import Catalogue from "./Catalogue.js";
import Navbar from "./Navbar.js";

const FirstPage = () => {
  const [cartItems, setCartItems] = useState(0);
  const handleCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };
  return (
    <div className=" bg-light ">
      <Navbar cartItems={cartItems} />
      <Catalogue handleCartItems={handleCartItems} cartItems={cartItems} />
    </div>
  );
};
export default FirstPage;
