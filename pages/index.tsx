import Navbar from "../components/header/Header";
import Head from "next/head";
import { Fragment } from "react";
import { CartState } from "../context/Context";
import Product from "../components/product/Product";
import Filter from "../components/filter/Filter";

const Home = (): JSX.Element => {
  const {
    state: { products, dispatch },
  } = CartState();
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

      {/* Navbar */}
      <Filter />
      {/* Navbar */}

      {/* Product List */}
      <section className="flex flex-wrap section">
        {products.length ? (
          <Fragment>
            {products.map((props) => (
              <div key={props.id} className="item">
                <Product key={props.id} product={props} />
              </div>
            ))}
          </Fragment>
        ) : (
          <h2>loading...</h2>
        )}
      </section>

      {/* Product List */}

      <footer></footer>
    </div>
  );
};

export default Home;
