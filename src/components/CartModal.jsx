import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function CartModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0)
         ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   };

   return (
      <>
         {/* DaisyUI Modal */}
         {isOpen && (
            <div className="modal modal-open fixed inset-0 z-50 flex items-center justify-center">
                 <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm"></div>
                              <div className=" max-w-md bg-white  bg-opacity-50 rounded-lg shadow-lg p-6 relative">
                  <h3 className="font-bold text-[2rem] mb-4 text-left">購物車</h3>
                  {/* Cart Items */}
                  {cartItems.length === 0 ? (
                     <div className="text-center m-5">目前購物車內沒有商品</div>
                  ) : (
                     cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
                           <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`} onClick={handleCancel}>
                              <img className="max-w-16 max-h-16 flex-1 cursor-pointer" src={item.image} alt={item.name} />
                           </Link>
                           <div className="ml-8 flex-8 w-48 text-left">
                              <div className="font-medium mb-1">{item.name}</div>
                              <div className="flex items-center space-x-2">
                                 <span>數量：</span>
                                 <select
                                    defaultValue={item.qty}
                                    onChange={(e) =>
                                       dispatch(addCartItems({
                                          id: item.id,
                                          name: item.name,
                                          image: item.image,
                                          price: item.price,
                                          stock: item.stock,
                                          qty: Number(e.target.value),
                                       }))
                                    }
                                    className="select select-bordered select-xs w-[3.5rem] px-2"
                                 >
                                    {[...Array(Number(item.stock)).keys()].map((x) => (
                                       <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>
                           <div className="text-right">
                              <div className="font-bold text-base">${item.price * item.qty}</div>
                              <div
                                 className="text-xl opacity-60 cursor-pointer"
                                 onClick={() => dispatch(removeCartItems(item.id))}
                              >
                                 x
                              </div>
                           </div>
                        </li>
                     ))
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center mt-4">
                     <div className="font-semibold">Total</div>
                     <div className="font-bold text-right">${getTotalPrice()}</div>
                  </div>

                  {/* Checkout Button */}
                  <button
                     className="btn btn-primary w-full text-base font-light py-3 mt-8 flex justify-center items-center bg-[#AAB7BF] rounded"
                  >
                     <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                     <span className="font-thin ml-3">去結帳</span>
                  </button>

                  {/* Close button */}
                  <div className="absolute right-4 top-4 modal-action mt-4">
                     <button onClick={handleCancel} className="btn btn-sm font-thin">X</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}