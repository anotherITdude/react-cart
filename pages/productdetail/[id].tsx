import Header from "../../components/header/Header";
import React, { Fragment, useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { pContext } from "../../context/productContext";
import { ProductInterface, StateInterface } from "../../models/product";
import StoreImage from "../../components/core/Image";
import Button from "../../components/core/Button";

const Index: React.FC = (): JSX.Element => {
  const router = useRouter();
  const state = useContext(pContext) as StateInterface;

  const product: ProductInterface = state?.products.find(
    (product) => product.id == router.query.id
  ) as ProductInterface;
  console.log(product);
  return (
    <div>
      <Header />

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-10 mx-auto">
          <div className=" sm:w-full lg:w-4/5 mx-auto flex flex-wrap">
            <div className=" flex pl-16">
              <StoreImage
                className=""
                width="200"
                height="200"
                src={product?.image}
                alt={product?.title}
              />
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-2">
                {product?.title}
              </h1>

              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  {/* <div className="relative">
              <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
             
            </div> */}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="title-font font-medium text-2xl text-black">
                  ${product?.price}
                </span>
                <Button className="flex ml-auto " title="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
