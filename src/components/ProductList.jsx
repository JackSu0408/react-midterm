import ProductItem from './ProductItem';
import products from '../json/products.json';

function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-[#DDE3EA]">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      <div className="col-span-full text-center mt-6">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          查看更多商品
        </button>
      </div>
    </div>
  );
}

export default ProductList;