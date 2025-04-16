import { Link } from 'react-router';

function ProductItem({ product }) {
  return (
    <section className="pt-4 px-3 lg:px-4">
      <div className="w-64 border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md flex flex-col">
        <Link to={`/products/id/${product.id}`}>
          <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
        </Link>
        <div className="pt-6 p-4 flex flex-col justify-between">
          <h5 className="text-black text-center font-medium mb-2">
            {product.name}
          </h5>
          <div className="text-center text-gray-700 font-bold">
            NTD${product.price}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductItem;