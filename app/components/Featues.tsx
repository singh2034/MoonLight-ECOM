import Image from "next/image";
import moonlamp from "@/public/transparentmoonlamp.png";
// React Icon
import {
  BsBatteryCharging,
  BsLightbulbFill,
  BsBrightnessHigh,
} from "react-icons/bs";

const Featues = () => {
  return (
    <>
      <section className="py-5 ">
        <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
          {/* class-less div is here */}
          <div>
            <ul className="space-y-10">
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>Battery Life</h3>
                  <div>
                    <BsBatteryCharging />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>Blue Light Filter</h3>
                  <div>
                    <BsLightbulbFill />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark">
                  <h3>Bright Light</h3>
                  <div>
                    <BsBrightnessHigh />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
          {/* image div moonlamp trans image */}
          <div className="flex justify-center items-center ">
            <Image
              src={moonlamp}
              alt="moonlamp-trans-img"
              width={500}
              height={500}
            />
          </div>
          <div>
            <ul className="space-y-10 text-right">
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                  <h3>Bright Light</h3>
                  <div>
                    <BsBrightnessHigh />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                  <h3>Battery Life</h3>
                  <div>
                    <BsBatteryCharging />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                  <h3>Blue Light Filter</h3>
                  <div>
                    <BsLightbulbFill />
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featues;
