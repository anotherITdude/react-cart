import Navbar from '../components/header/Header';
import Head from 'next/head'
import Product from '../components/product/Product';

import { reducerfunction, initialState } from '../reducer/index';
import { Fragment, useEffect, useReducer } from 'react';

import { pContext } from '../context/productContext'; 
import { StateInterface } from '../models/product';
import product from './product';



const Home = (): JSX.Element => { 
  
  const [state, dispatch] = useReducer(reducerfunction, initialState);
 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => dispatch({ type: "ADD_PRODUCTS", payload: data}))
    }, []);

    return (
    <div className=''>
      <Head >
      <title>Anotheritdude | React Store</title>
      <link rel="icon" type="image/x-icon" href='https://i.postimg.cc/KcLT1WsV/favicon.png' />
      </Head>
      
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

     
      {/* Product List */}

      <section className='section grid 
      xl:grid-cols-4 xl:gap-4  xl:gap-y-4
      lg:grid-cols-3  lg:gap-x-4 lg:gap-y-4
      md:grid-cols-3  md:gap-x-3 md:gap-y-3  
      sm:grid-col-2 sm:gap-2 sm:gap-y-5
      xs:grid-col-1 xs:gap-2 xs:gap-y-5
      '>
      <pContext.Provider value={state}>
          
            {
              state.products.length ? (
                <Fragment>
                  {state.products.map(product => (
                   
                     <Product key={product.id}
                     title={product.title}
                     price={product.price}
                     image={product.image}
                     category={product.category}
                    rating={product.rating.rate} 
                     />
                  ))}
                 
                </Fragment>
                
              ) : (
                <h2>loading...</h2>
              )
            }
          
        </pContext.Provider>
      </section>
      {/* Product List */}


      <footer>
        

      </footer>
    </div>
  )
}

export default Home;