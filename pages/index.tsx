import Navbar from '../components/header/Header';
import Head from 'next/head'
import Product from '../components/product/Product';

const Home = (): JSX.Element => {
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
      <section className='section'>
      <Product />
      </section>
      {/* Product List */}


      <footer>
        
      </footer>
    </div>
  )
}

export default Home;