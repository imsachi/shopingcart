import React, { useState } from "react";
import CardItem from "./CardItem";

const Catalogue = (props) => {
  const [catalogueItems, setCatalogueItems] = useState();
  return (
    <div className="container">
      <div className="row">
        <CardItem />
      </div>
    </div>
  );
};
export default Catalogue;
