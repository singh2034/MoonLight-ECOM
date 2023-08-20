"use client";
// next and react comps
import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productType";

const AddToCartButton = ({
  name,
  image,
  unit_amount,
  id,
  quantity,
}: ProductType) => {
  const cartStore = useCartStore();
  return (
    <>
      <button
        onClick={() =>
          cartStore.addToCart({
            name,
            image,
            unit_amount,
            id,
            quantity,
          })
        }
        className="my-12 text-white px-6 py-2 font-medium rounded-md bg-primary "
      >
        Add To Cart
      </button>
    </>
  );
};

export default AddToCartButton;
