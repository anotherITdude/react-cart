import Navbar from "../components/header/Header";
import { Fragment } from "react";
import { CartState } from "../context/Context";
import Product from "../components/product/Product";
import Filter from "../components/filter/Filter";
import Header from "../components/header/Header";
import { productReducer } from "../context/Reducers";

const Home = (): JSX.Element => {
  const {
    state: { products, dispatch },
    productState : {sort, byFastDelivery, byStock, bySearchString}
  } = CartState();

const productList = () => {
  let sortedProducts = products;

  if (sort) {
    sortedProducts = sortedProducts.sort((productA, productB) => 
      sort === 'lowToHigh' ? productA.price - productB.price : productB.price - productA.price
    );
  }

  if(!byStock){
    sortedProducts = sortedProducts.filter( (product) => product.inStock)
  }

  if(byFastDelivery) {
    sortedProducts = sortedProducts.filter( ( product) => product.fastDelivery)
  }

  if(bySearchString){
    sortedProducts = sortedProducts.filter( (product) => 
      product.name.toLowerCase().includes(bySearchString)
  );
  }

  return sortedProducts;
}

  return (
    <div className="">
      
        
      

      {/* Navbar */}
      <Navbar />
      {/* Navbar */}

      {/* Navbar */}
      
      <Filter count={productList().length} />
      {/* Navbar */}

      {/* Product List */}
      <section className="flex flex-wrap section">
        {productList().length ? (
          <Fragment>
            {productList().map((props) => (
              <div key={props.id} className="item">
                <Product key={props.id} product={props} />
              </div>
            ))}
          </Fragment>
        ) : (
          <div className="bg-white w-full ">
            <div className='h-24 text-2xl items-center flex justify-center '>
            <h1 className="text-rs-blue text-center">No Search results. Please try a different keyword</h1>

            </div>
          </div>
        )}
      </section>

      {/* Product List */}

      <footer></footer>
    </div>
  );
};

export default Home;
