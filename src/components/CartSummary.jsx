import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingBasket } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";

function CartSummary() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const count = cartItems.length > 0 ? cartItems.reduce((sum, item) => sum + item.qty, 0) : 0;
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav onClick={toggleModal} className="relative inline-block cursor-pointer">
      <div className="indicator relative">
        {/* 購物車圖標 */}
        <ShoppingBasket
          strokeWidth={1.5}
          className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform"
        />
        {/* 商品數量徽章 */}
        {count > 0 && (
          <span
            className="absolute bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center
            -top-2 -right-2 md:-top-3 md:-right-3"
          >
            {count}
          </span>
        )}
      </div>
    </nav>
  );
}

export default CartSummary;