import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/core/Button";
import { CartState } from "../../context/Context";
import StoreImage from "../../components/core/Image";

const index = () => {
  const { state, dispatch } = CartState();
  console.log;
  return (
    <div>
      <Header />

      <section className=" section text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-10  sm:w-full  mx-auto flex flex-wrap">
            {state.cart.map((product) => (
              <div key={product.id} className="cart-item w-full">
                  <div className="flex rounded">
                    <StoreImage
                      width="100"
                      height="100"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="flex ">
                    <div>{product.name} </div>
                    
                    
                    
                   
                  </div>
                  <div>${product.price}</div>
                  <div>
                      {state.cart.some((p) => p.id === product.id) ? (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product.id,
                            });
                          }}
                          type="submit"
                          className="btn-danger"
                        >
                          Remove From Cart
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch({ type: "ADD_TO_CART", payload: product })
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
        </div>
      </section>
    </div>
  );
};

export default index;
