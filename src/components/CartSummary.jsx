import { useState } from "react";
import { ShoppingBasket } from "lucide-react";

function CartSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  // 假設購物車內商品數量
  const cartItemCount = 3;

  return (
    <nav
      onClick={toggleModal}
      className="inline-block top-6 right-2 md:right-6 cursor-pointer"
    >
      <div className="indicator">
        {/* 購物車圖標 */}
        <ShoppingBasket
          strokeWidth={1.5}
          className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
        />
        {/* 商品數量徽章 */}
        {cartItemCount > 0 && (
          <span className="absolute top-7 right-43 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </div>
    </nav>
  );
}

export default CartSummary;