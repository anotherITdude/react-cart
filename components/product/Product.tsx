import React from "react";
import StoreImage from "../core/Image";
import Button from "../core/Button";
import { StarIcon } from "@heroicons/react/solid";

const Product = (): JSX.Element => {
  return (
    <div className="product-container">
      <div className="flex flex-col items-center justify-around">
        {/* <StoreImage width="200" height="200"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="test"
        /> */}
        <div className="m-2  text-lg font-bold tracking-tight text-black">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </div>
      </div>
      <div className="productBody min-w-full">
        <div className="flex items-center justify-evenly ">
          <div className="rating flex">
            <span> 4 </span>
            <span>
              <StarIcon className="starIcon" />
            </span>
          </div>
          <div className="">Price: 14$</div>
          {/* <Button title="Quick view" /> */}
          <Button title="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default Product;
