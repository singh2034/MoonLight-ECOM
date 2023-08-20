import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";
import { totalPrice } from "@/utils/totalPrice";
import DecrementButton from "./UI/DecrementButton";
import IncrementButton from "./UI/IncrementButton";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 md:w-2/5 w-3/4 h-screen p-12 overflow-x-scroll"
      >
        <>
          <button onClick={() => cartStore.toggleCart()}>
            <AiOutlineCloseCircle size={25} />
          </button>
          {cartStore.cart.map((product) => (
            <div className="flex py-4 gap-4 items-center border-b-grey-600 border-b-2 justify-between mb-5">
              <Image
                src={product.image}
                width={150}
                height={150}
                alt="moonlamp"
              />
              <h1 className="font-medium">{product.name}</h1>
              <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                <DecrementButton product={product} />
                <h2>{product.quantity}</h2>
                <IncrementButton product={product} />
              </div>
            </div>
          ))}
          {cartStore.cart.length > 0 ? (
            <span>Total: {formatPrice(total)}</span>
          ) : null}
        </>
        {cartStore.cart.length < 1 ? (
          <div className="h-full flex items-center justify-center">
            <span className="text-lg uppercase font-bold  whitespace-nowrap">
              Your cart is empty
            </span>
          </div>
        ) : null}
        {cartStore.cart.length > 0 ? (
          <button className="bg-[#778da9] py-2 mt-4 w-full rounded-md text-white">
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
