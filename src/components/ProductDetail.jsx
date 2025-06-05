import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";

// 星星評分元件（小尺寸，無黑框）
function StarRating({ value, onChange, size = 5 }) {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          type="button"
          key={star}
          tabIndex={0}
          className="focus:outline-none"
          style={{ outline: "none" }} // 強制移除黑框
          onClick={() => onChange(star)}
          aria-label={`評分${star}星`}
        >
          <svg
            className={`w-${size} h-${size} transition ${value >= star ? "text-yellow-400" : "text-gray-300"}`}
            fill={value >= star ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <polygon
              points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ProductDetail({ product }) {
  const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);

  // 1. 讀取 localStorage 的評論
  function getPersistedReviews() {
    const key = `reviews_${product.id}`;
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return product.reviews
      ? product.reviews.map(r => ({
          ...r,
          rating: typeof r.rating === "string" ? r.rating.length : r.rating
        }))
      : [];
  }

  const [reviews, setReviews] = useState(getPersistedReviews());
  const [reviewUser, setReviewUser] = useState("");
  const [reviewRating, setReviewRating] = useState(5); // 1~5
  const [reviewComment, setReviewComment] = useState("");

  // 2. 每次 reviews 變動時寫入 localStorage
  useEffect(() => {
    const key = `reviews_${product.id}`;
    localStorage.setItem(key, JSON.stringify(reviews));
  }, [reviews, product.id]);

  // 3. 送出評論
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewUser.trim() || !reviewComment.trim()) return;
    setReviews([
      ...reviews,
      {
        user: reviewUser,
        rating: reviewRating, // 存數字
        comment: reviewComment,
      },
    ]);
    setReviewUser("");
    setReviewRating(5);
    setReviewComment("");
  };

  // 顯示星星（只讀，數字型）
  function renderStars(rating) {
    const num = typeof rating === "string" ? rating.length : rating;
    return (
      <span className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${num >= star ? "text-yellow-400" : "text-gray-300"}`}
            fill={num >= star ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <polygon
              points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"
            />
          </svg>
        ))}
      </span>
    );
  }

  return (
    <div className="bg-[#DDE3EA] min-h-screen">
      <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-lg">
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
              <h1 className="text-black text-3xl font-bold mb-4 flex items-center">{product.name}
              {/* <button
                  onClick={toggleFavorite}
                  className={`ml-60 text-4xl ${
                    isFavorite ? "text-red-800" : "text-gray-400"
                  }`}
                  aria-label="Toggle Favorite"
                >
                  {isFavorite ? "♡" : "♡"}
                </button>               */}
              </h1>
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
                defaultValue={Number(product.stock) > 0 ? 1 : 0}
                onChange={(event) => setQty(Number(event.target.value))}
                className="border border-gray-300 rounded px-3 py-2"
              >
                {[...Array(Number(product.stock)).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <AddToCart product={product} qty={qty} />
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
          <div className="space-y-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="border-b pb-2 flex justify-between items-start">
                <div>
                  <p className="text-gray-700 font-medium">{review.user}</p>
                  <div>{renderStars(review.rating)}</div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
                <button
                  className="ml-4 text-red-500 hover:text-red-700 text-xs"
                  onClick={() => {
                    const newReviews = reviews.filter((_, i) => i !== index);
                    setReviews(newReviews);
                  }}
                  title="刪除這則評論"
                >
                  刪除
                </button>
              </div>
            ))}
          </div>
          {/* 評論表單 */}
          <form onSubmit={handleReviewSubmit} className="bg-[#f7f7fa] p-4 rounded shadow space-y-3">
            <div>
              <label className="block text-gray-700 mb-1">暱稱</label>
              <input
                type="text"
                value={reviewUser}
                onChange={e => setReviewUser(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                placeholder="請輸入您的暱稱"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">評分</label>
              <StarRating value={reviewRating} onChange={setReviewRating} size={5} />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">評論內容</label>
              <textarea
                value={reviewComment}
                onChange={e => setReviewComment(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                rows={3}
                placeholder="請輸入您的評論"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#394E5F] text-white px-4 py-2 rounded hover:bg-[#2c3a4a] transition"
            >
              送出評論
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;