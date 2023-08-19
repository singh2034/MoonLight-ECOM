"use client";
// React and Next imports
import { useState } from "react";
import Image from "next/image";
// react icons
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
// importing framer
import { motion } from "framer-motion";
// product images
import image1 from "@/public/productimage1.jpeg";
import image2 from "@/public/productimage2.jpeg";
import image3 from "@/public/productimage3.jpeg";
import image4 from "@/public/productimage4.jpeg";

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const productImages = [image1, image2, image3, image4];
  // Image Animation
  const imageVarients = {
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };
  return (
    <>
      <section className="py-20 ">
        <div className="w-[89%] m-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          {/* LEFT SIDE */}
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-4">
              {productImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={100}
                  height={100}
                  onClick={() => setCurrentImage(index)}
                  alt="product-images"
                  className="rounded-md cursor-pointer"
                />
              ))}
            </div>
            <div className="flex items-center">
              <motion.div
                initial="exit"
                animate="enter"
                exit="exit"
                variants={imageVarients}
                key={currentImage}
              >
                <Image
                  src={productImages[currentImage]}
                  width={480}
                  height={480}
                  alt="main-image"
                  className="rounded-md"
                />
              </motion.div>
            </div>
          </div>
          {/* Right Side */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-5">WireLess Moonlamp</h2>
            <div className="flex gap-1 text-yellow-400 justify-center items-center mb-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <span>(4.0)</span>
            </div>
            <div className="mb-5">
              <span className="text-2xl mr-3 font-bold">₹2499/-</span>
              <span className="text-gray-400 mr-3 line-through">₹4999/-</span>
              <span className="text-xl text-red-500">50% off*</span>
            </div>
            <p className="font-bold text-left text-gray-500 mb-5 text-sm">
              Product-Description : Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consequatur corrupti ipsum alias iure fugit
              voluptatum illo accusantium libero ab aliquid in voluptatibus
              dolor tempora repudiandae illum beatae sapiente eveniet, error
              quisquam voluptate. Cupiditate dolore animi qui pariatur quod
              debitis expedita. Lorem ipsum dolor sit amet. Lorem, ipsum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
