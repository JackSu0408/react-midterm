import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const title = "WA&WA"; 

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      <Navbar />
      <div className="flex-grow">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;