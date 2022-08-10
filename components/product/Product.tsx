import React, { useContext } from "react";
import StoreImage from "../core/Image";
import Button from "../core/Button";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { pContext } from "../../context/productContext";
import { StateInterface } from "../../models/product";


const Product = (props): JSX.Element => {

  const state = useContext(pContext) as StateInterface;
// console.log('from product component', state);
 
  return (
    <div className="product-container relative h-max">
      <Link href={`/productdetail/${encodeURIComponent(props.id)}`}> 
      <div className="flex flex-col items-center justify-around">
        <StoreImage width="200" height="200" src={props.image} alt="test" />
        <div className="m-2  text-lg font-bold tracking-tight text-black">
          {props.title.length > 55
            ? props.title.substring(0, 55 - 3) + "..."
            : props.title}
        </div>
      </div>
      </Link>
      
      <div className="productBody min-w-full absolute bottom-3">
        <div className="flex items-center justify-evenly ">
          <div className="rating flex">
            <span> {props.rating} </span>
            <span>
              <StarIcon className="starIcon" />
            </span>
          </div>
          <div className="">Price: {props.price}</div>
          {/* <Button title="Quick view" /> */}
          <Button btnType='submit' title="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default Product;
