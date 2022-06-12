import React from "react";

const Filters = ({ filters, updateFilter }, { currentFilterBy }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("0");
          }}
        >
          Cost high to low
        </div>

        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("1");
          }}
        >
          Cost low to high
        </div> 

        <div className="restaurant-option">

          <button onClick={()=>{updateFilter("star5")}} >5 ★ </button>
          <button onClick={()=>{updateFilter("star4")}} >4 ★</button>
          <button onClick={()=>{updateFilter("star3")}} >3 ★</button>
          <button onClick={()=>{updateFilter("star3")}} >2 ★</button>
          <button onClick={()=>{updateFilter("star1")}} >1 ★</button>
        </div>
          
        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("3");
          }}
        >
          Delivery time
        </div>

        <div
          className="restaurant-option"
          onClick={() => {
            updateFilter("4");
          }}
        >
          Relevance
        </div>
      </div>
    </div>
  );
};

export default Filters;
