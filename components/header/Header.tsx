import React from "react";
import Logo from "../core/Logo";
import Link from "next/link";
import StoreImage from "../core/Image";

import { ShoppingCartIcon } from "@heroicons/react/solid";

const header = (): JSX.Element => {
  return (
    <div className="border-b-rs-blue bg-white pt-3 pl-2 pb-2 pr-2">
      <div
        className="xl:container xl:mx-auto
            flex items-center justify-between
            "
      >
        <Link href="/" className="">
          <a>
            <StoreImage width='150' height='43' src='/react-store.png' alt='logo' />
          </a>
        </Link>

        <Link href="/cart" className="align-middle">
          <a>
            <ShoppingCartIcon className="cartIcon"/>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default header;
