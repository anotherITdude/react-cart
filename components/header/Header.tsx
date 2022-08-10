import React, { useContext } from "react";
import Link from "next/link";
import StoreImage from "../core/Image";

import { ShoppingCartIcon } from "@heroicons/react/solid";
import { StateInterface } from "../../models/product";
import { pContext } from "../../context/productContext";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const router = useRouter();
    // //const state = useContext(pContext) as StateInterface;
    // console.log(useContext(pContext)); 
  return (
    <div className="border-b-rs-blue z-50 bg-white pt-3 pl-2 pb-2 pr-2 sticky top-0 border">
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

        <Link href="/cart" className="align-middle">
          <a>
            <ShoppingCartIcon className="cartIcon"/>
            <span className="sup">3</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
