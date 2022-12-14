import React, { useContext } from "react";
import StoreImage from "../core/Image";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CartState } from "../../context/Context";
import { Box, useToast } from '@chakra-ui/react'

const Product = ({ product }): JSX.Element => {
  const { state, dispatch } = CartState();
  const toast = useToast()
  return (
    <div className="product-container relative h-max">
      <Link href={`/productdetail/${encodeURIComponent(product.id)}`}>
        <div className="flex flex-col items-center justify-around">
          <StoreImage width="200" height="200" src={product.image} alt="test" />
          <div className="m-2  text-lg font-bold tracking-tight text-black">
            {product.name.length > 55
              ? product.name.substring(0, 55 - 3) + "..."
              : product.name}
          </div>
        </div>
      </Link>

      <div className="productBody min-w-full absolute bottom-3">
        <div className="flex items-center justify-evenly ">
          <div className="rating flex">
            <span> {product.ratings} </span>
            <span>
              <StarIcon className="starIcon" />
            </span>
          </div>
          <div className="">Price: ${product.price}</div>
          {state.cart.some((p) => p.id === product.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product.id,
                });
                toast({
                  isClosable: true,
                  duration: 1500,
                  render: () => (
                    <Box className='bg-red-600 text-center' color='white' p={3} >
                      Product removed from cart
                    </Box>
                  ),
                })
              }}
              type="submit"
              className="btn-danger"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={() =>{
                dispatch({ type: "ADD_TO_CART", payload: product })
                toast({
                  isClosable: true,
                  duration: 1500,
                  render: () => (
                    <Box className='bg-rs-blue text-center' color='white' p={3} >
                      Product added to cart
                    </Box>
                  ),
                })
              }
                
              }
              type="submit"
              disabled={product.inStock ? false : true}
              className={product.inStock ? "btn-primary" : "btn-out-of-stock"}
            >
              {product.inStock ? "Add to Cart" : "Out Of Stock"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
