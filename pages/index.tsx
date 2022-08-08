import Header from '../components/header/Header';
import Head from 'next/head'
import Logo from '../public/favicon.png';

const Home = (): JSX.Element => {
  return (
    <div className=''>
      <Head >
      <title>React Store</title>
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