import AddToCart from "./AddToCart";

function ProductDetail({ product }) {
  return (
    <div className="bg-[#DDE3EA] min-h-screen">
      <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 左側：產品圖片 */}
          <div className="lg:col-span-5">
            <img
              alt={product.name}
              className="w-full h-96 object-cover object-center rounded-md"
              src={product.image}
            />
          </div>

          {/* 右側：產品資訊 */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-gray-500 text-lg mb-2">{product.category}</h2>
              <h1 className="text-black text-3xl font-bold mb-4 flex items-center">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-red-500 text-2xl font-bold mr-2">
                  ${product.price}
                </span>
                <span className="text-gray-500 text-lg">/ 個</span>
              </div>
              <div className="flex items-center mb-6">
                <span className="text-yellow-500 text-lg mr-2">★ {product.total_rating.toFixed(1)}</span>
                <span className="text-gray-500">({product.ratingCount} 評價)</span>
              </div>
            </div>

            {/* 數量與按鈕 */}
            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="quantity" className="text-gray-700 font-medium">
                數量：
              </label>
              <select
                id="quantity"
                className="border border-gray-300 rounded px-3 py-2"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <AddToCart />
          </div>
        </div>

        {/* 商品詳細資訊 */}
        <div className="mt-8 text-left">
          <h3 className="text-black text-xl font-bold mb-4">商品資訊</h3>
          <ul className="text-gray-700 space-y-2">
            <li>商品數量：{product.stock}</li>
            <li>產地：{product.origin}</li>
            <li>保存期限：{product.exp}</li>
            <li>保存方式：{product.method}</li>
            <li>出貨方式：{product.ship}</li>
          </ul>
        </div>

        {/* 評價區塊 */}
        <div className="mt-8 text-left">
          <h3 className="text-black text-xl font-bold mb-4">顧客評價</h3>
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index}>
                <p className="text-gray-700 font-medium">{review.user}</p>
                <p className="text-yellow-500">{review.rating}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;