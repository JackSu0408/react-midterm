import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const addToCart = () => {
    setShowToast(true); // 顯示 toast
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }));
    // 2 秒後自動關閉 toast
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button
        className="btn btn-primary px-8 py-5 hover:bg-[#394E5F] hover:text-white text-[#394E5F] border-2 border-[#394E5F] rounded transition duration-300 ease-in-out"
        onClick={addToCart}
      >
        <span className="font-thin ml-3">加入購物車</span>
      </button>
      {showToast && (
        <div
          className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 z-50"
          style={{ minWidth: "250px" }}
        >
          <div className="alert">
            <span>
              {qty}件 {product.name} 已加入您的購物車！
            </span>
          </div>
        </div>
      )}
    </>
  );
}