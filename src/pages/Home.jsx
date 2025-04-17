import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../json/products.json';

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
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;