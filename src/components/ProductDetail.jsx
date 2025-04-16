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
              <h1 className="text-black text-3xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-red-500 text-2xl font-bold mr-2">
                  ${product.price}
                </span>
                <span className="text-gray-500 text-lg">/ 個</span>
              </div>
              <div className="flex items-center mb-6">
                <span className="text-yellow-500 text-lg mr-2">★ 5.0</span>
                <span className="text-gray-500">(100 評價)</span>
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
        <div className="mt-8">
          <h3 className="text-black text-xl font-bold mb-4">商品資訊</h3>
          <ul className="text-gray-700 space-y-2">
            <li>商品數量：50</li>
            <li>產地：台灣</li>
            <li>保存期限：28天</li>
            <li>保存方式：冷藏保存於3日內食用最佳</li>
            <li>出貨方式：宅配 / 自取（需提前3日預訂）</li>
          </ul>
        </div>

        {/* 評價區塊 */}
        <div className="mt-8">
          <h3 className="text-black text-xl font-bold mb-4">顧客評價</h3>
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 font-medium">小潔（台中）</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-gray-600">
                第一次吃到 PRESS BUTTER SAND 的焦糖奶油餅，真的非常驚艷！外層酥脆，內餡濃郁，完全不膩口，會再回購！
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium">Andy（台北）</p>
              <p className="text-yellow-500">★★★★☆</p>
              <p className="text-gray-600">
                味道非常好，家裡每個人都很喜歡。但包裝上可以再改進，稍微有些不方便。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;