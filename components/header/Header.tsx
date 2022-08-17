import React, { useContext } from "react";
import Link from "next/link";
import StoreImage from "../core/Image";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { CartState } from "../../context/Context";
import Head from "next/head";

const Header = (): JSX.Element => {
  const router = useRouter();
  const { state: { products, cart},
  productState,
  productDispatch} = CartState();

  

  return (
    <div className='sticky'>
    <Head>
    <title>Anotheritdude | NextJS/TypeScript Shopping Cart Using Tailwind CSS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>  
    <div className="border-b-rs-blue z-50 bg-white pt-3 pl-2 pb-2 pr-2 top-0 border">
      <div
        className="xl:container xl:mx-auto relative
            flex items-center justify-between 
            "
      >
        <Link href="/" className="">
          <a>
            <StoreImage width='150' height='43' src='https://i.postimg.cc/KzFvH9xq/react-store.png' alt='logo' />
          </a>
        </Link>
        <input 
         className='bg-rs-bg border p-1 
         border-rs-blue lg:w-96 sm:w-50 mob:w-32'  
         type="text" 
         placeholder="Search Products..."
         onChange={(e) => {          
          productDispatch({
            type: 'BY_SEARCH',
            payload: e.target.value
          })
         }}
         value={productState.bySearchString}
         />


        <Link href="/cart" className="align-middle">
          <a>
            <ShoppingCartIcon className="cartIcon"/>
            <span className="sup">{cart.length}</span>
          </a>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
