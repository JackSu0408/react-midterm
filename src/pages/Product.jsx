import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

function Product() {
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === Number(productId)
   );

   return (
      <div className="container mx-auto main-layout bg-[#DDE3EA]">
         <Helmet>
            <title>product</title>
         </Helmet>
         <Header
            title="Product Detail"
         />
         <ProductDetail product={product} className="content" />
         <Footer className="footer" />
      </div>
   );
}

export default Product;