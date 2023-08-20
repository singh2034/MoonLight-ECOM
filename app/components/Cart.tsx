import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import formatPrice from "@/utils/formatPrice";
import { totalPrice } from "@/utils/totalPrice";
import DecrementButton from "./UI/DecrementButton";
import IncrementButton from "./UI/IncrementButton";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);
  return (
    <>
      <div
        onClick={() => cartStore.toggleCart()}
        className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white absolute rigth-0 top-0 md:w-2/5 w-3/4 h-screen p-12"
        >
          <>
            <button onClick={() => cartStore.toggleCart()}>
              Back to Store
            </button>
            {cartStore.cart.map((Product) => (
              <div className="flex py-4 gap-4 items-center border-b-2 border-b-gray-300 justify-between mb-5">
                <Image
                  src={Product.image}
                  width={150}
                  height={150}
                  alt="moonlamp-pic"
                />
                <h1 className="font-medium ">{Product.name}</h1>
                <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                  <DecrementButton product={Product} />
                  <h2>{Product.quantity}</h2>
                  <IncrementButton product={Product} />
                </div>
              </div>
            ))}
            {cartStore.cart.length > 0 ? (
              <span>Total : {formatPrice(total)}</span>
            ) : null}
          </>
          {cartStore.cart.length < 1 ? (
            <div className="h-full flex items-center justify-center">
              <span className="text-lg uppercase font-bold whitespace-nowrap">
                Your Cart is Empty
              </span>
            </div>
          ) : null}
          {cartStore.cart.length > 0 ? (
            <button className="bg-primary py-2 mt-4 w-full rounded-md text-white">
              Checkout
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
