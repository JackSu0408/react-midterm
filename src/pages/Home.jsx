import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="wflex flex-col min-h-screen">
      <Header 
        title ="WA&WA"
      />
      <Navbar />
      <div className="flex-grow">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;