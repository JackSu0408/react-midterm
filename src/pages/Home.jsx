import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;