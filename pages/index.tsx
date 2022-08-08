import Header from '../components/header/Header';
import Head from 'next/head'

const Home = (): JSX.Element => {
  return (
    <div className=''>
      <Head>
      <title>React Store</title>
      <link rel="icon" type="image/x-icon" href="{`${process.env.FAVICON}`}/favicon.png" />
      </Head>
      <Header />
      <h1 className=' text-rs-blue text-2xl mt-11 mb-11 text-center'>
        ReactJS/Tailwind Shopping cart using nextJS
      </h1>
      <footer>
        
      </footer>
    </div>
  )
}

export default Home;