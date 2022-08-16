import React from "react";
import { FilterIcon, SearchCircleIcon } from "@heroicons/react/solid";

const Filter = () => {
  return (
    <div className="section">
      <div className="flex justify-center  items-center mb-2">
      <span ><FilterIcon className="filterIcon" /></span>
      <span >Filter Products</span>
      </div>
      
      <form className="filter-container">
          <div className="m-2">
            <input
              type="radio"
              id="priceASC"
              name="pricefilter"
              className="pr-2"
              value="ascending"
            />
            <label htmlFor="priceASC" className="pl-1">
              Price Ascending
            </label>
          </div>

          <div className="m-2">
            <input
              type="radio"
              id="priceDES"
              name="pricefilter"
              className="pr-2"
              value="decending"
            />
            <label htmlFor="priceDES" className="pl-1">
              Price Decending
            </label>
          </div>

          <div className="m-2">
            <input
              type="checkbox"
              id="fastDelivery"
              name="pricefilter"
              className="pr-2"
              value="decending"
            />
            <label htmlFor="fastDelivery" className="pl-1">
              Fast Delivery
            </label>
          </div>

          <div className="m-2">
            <input
              type="checkbox"
              id="outOfStock"
              name="pricefilter"
              className="pr-2"
              value="decending"
            />
            <label htmlFor="outOfStock" className="pl-1">
              Show Out Of Stock
            </label>
          </div>
      </form>
    </div>
  );
};

export default Filter;
