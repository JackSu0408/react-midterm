import { useState } from 'react';
import ProductItem from './ProductItem';
import Navbar from './Navbar';

function ProductList({ products = [] }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-[#DDE3EA] font-[playfair]">
      {products.slice(0, visibleCount).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      {visibleCount < products.length && (
        <div className="col-span-full text-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-[#394E5F] border-2 border-[#394E5F] rounded hover:bg-[#394E5F] hover:text-white transition"
          >
            查看更多商品
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;