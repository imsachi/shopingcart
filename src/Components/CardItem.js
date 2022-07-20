import React, { useState } from "react";

const CardItem = (props) => {
  /* const [quantity, setQuantity] = useState(0); //Total Quantity of products
  const [displayStatus, setDisplayStatus] = useState({ display: "none" }); //Enable quantity buttons
  const [cartButton, setCartButton] = useState("Add to Cart");
  const handleCartItems = () => {
    if (cartButton === "Add to Cart") {
      props.handleCartItems(props.cartItems + 1);
      setQuantity(quantity + 1);
    }
    setDisplayStatus({ display: "inline" });
    setCartButton("Go to Cart");
  }; //Active the cart button
  const increaseQuntity = () => {
    setQuantity(quantity + 1);
  }; //increase the product quality
  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(0);
      props.handleCartItems(props.cartItems - 1);
      setCartButton("Add to Cart");
      setDisplayStatus({ display: "none" });
      return null;
    } else {
      setQuantity(quantity - 1);
    }
  };*/
  return (
    <div
      className="card  m-2  border-gray"
      style={{
        width: "18rem",
        border: "1px solid whitesmoke",
        textAlign: "left",
      }}
    >
      <img className="card-img-top" />
      <div className="card-body mb-0 ">
        <h3 className="card-title"></h3>
        <p className="card-text"> description....</p>
        <button
          name="Add to Cart"
          className="btn btn-primary"
          style={{ float: "right" }}
        ></button>
        <div className="btn-group" role="group" aria-label="">
          <button className="btn border" name="qntdecrease">
            -
          </button>
          <button className="btn" name="quantity"></button>
          <button className="btn border " name="qntincrease">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
