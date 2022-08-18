import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { CartState } from "../../context/Context";
import StoreImage from "../../components/core/Image";

 import { Box, useToast } from '@chakra-ui/react'

const Index = () => {
  const { state, dispatch } = CartState();
  const [total, setTotal] = useState();
  const toast = useToast()
  useEffect(() => {
    setTotal(
      state.cart.reduce(
        (accumulator, presentProduct) =>
          accumulator + parseInt(presentProduct.price) * presentProduct.qty,
        0
      )
    );
  }, [state.cart]);
  return (
    <div>
      <Header />

      <section className=" section text-gray-700 body-font overflow-hidden bg-white">
        {state.cart.length > 0 ? (
          <div className="container grid grid-flow-row auto-rows-max ">
            {state.cart.map((product) => (
              <div
                key={product.id}
                className="grid lg:grid-cols-5 sm:grid-cols-2 gap-4 
          border-b pb-2  border-b-blue-200 mb-2 items-center"
              >
                <div>
                  <div className="flex rounded">
                    <StoreImage
                      width="100"
                      height="100"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
                <div>{product.name}</div>
                <div>${product.price}</div>
                <div>
                  <div className="relative">
                    <select
                      value={product.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CART_QUANTITY",
                          payload: {
                            id: product.id,
                            qty: e.target.value,
                          },
                        })
                      }
                      className="rounded bg-rs-bg border appearance-none border-gray-400 py-2 focus:outline-none focus:border-rs-blue text-base pl-3 pr-10"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
                <div>
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
                      X
                    </button>
                  ) : (
                    <button
                      onClick={() => {
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
                      className={
                        product.inStock ? "btn-primary" : "btn-out-of-stock"
                      }
                    >
                      {product.inStock ? "Add to Cart" : "Out Of Stock"}
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="h-24 text-2xl items-center flex justify-center ">
              <h1 className="text-rs-blue text-center">Total: ${total}</h1>
            </div>
          </div>
        ) : (
          <div className="h-24 text-2xl items-center flex justify-center ">
            <h1 className="text-rs-blue text-center">Your cart is empty</h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
