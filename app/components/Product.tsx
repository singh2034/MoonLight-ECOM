"use client";
// React and Next imports
import { useState } from "react";
import Image from "next/image";
// react icons
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
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
        </div>
      </section>
    </>
  );
};

export default Product;
