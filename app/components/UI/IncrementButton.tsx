import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productType";
import { BiPlus } from "react-icons/bi";

interface IncrementPropTypes {
  product: ProductType;
}

const IncrementButton = ({ product } : IncrementPropTypes) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
    >
      <BiPlus />
    </button>
  );
};

export default IncrementButton;
