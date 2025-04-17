import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.stock,
      qty,
    }))
  };
  return (
    <>
      <button className="btn btn-primary px-8 py-5 hover:bg-[#394E5F] hover:text-white text-[#394E5F] border-2 border-[#394E5F] rounded transition duration-300 ease-in-out" onClick={addToCart}>
        <span className="font-thin ml-3">加入購物車</span>
      </button>
    </>
  );
}