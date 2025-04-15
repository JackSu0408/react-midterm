import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Home;