import Navbar from "../components/header/Header";
import Head from "next/head";
import Product from "../components/product/Product";

import { reducerfunction, initialState } from "../reducer/index";
import { Fragment, useEffect, useReducer } from "react";

import { pContext } from "../context/productContext";
import { StateInterface } from "../models/product";
import product from "./product";

const Home = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducerfunction, initialState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);

  return (
    <div className="">
      <Head>
        <title>Anotheritdude | React Store</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://i.postimg.cc/KcLT1WsV/favicon.png"
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Navbar */}

      {/* Product List */}
      <section className="flex flex-wrap section">
        <pContext.Provider value={state}>
          {state.products.length ? (
            <Fragment>
              {state.products.map((product) => (
                <div key={product.id} className="item">
                  <Product
                    
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    rating={product.rating.rate}
                  />
                </div>
              ))}
            </Fragment>
          ) : (
            <h2>loading...</h2>
          )}
        </pContext.Provider>
      </section>

      {/* Product List */}

      <footer>

        
      </footer>
    </div>
  );
};

export default Home;
