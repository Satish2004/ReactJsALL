import React from "react";


const Product = ({ProductName, Desc1, Desc2, OldPrice, newPrice}) => {
  return (
    <div className="card">
  
      <div className="mainContainer">
        <div className="heading">
          <h2>{ProductName}</h2>
        </div>
        <div className="description">
          {Desc1} <br />{Desc2}
        </div>
        <div className="prices">
          <span className="OldPrice">{OldPrice}</span>
          &nbsp;    &nbsp;    &nbsp;
          <span className="newPrice">{newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
