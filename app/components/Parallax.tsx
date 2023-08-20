const Parallax = () => {
  return (
    <>
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover flex-col">
        <h1 className="text-4xl font-bold text-white uppercase text-center drop-shadow-2xl">
          Subscribe To Our News Letter
        </h1>
        <div className="bg-white py-2 px-4 flex items-center justify-between border border-gray-200 rounded-[10px] mb-[49px] mt-10">
          <input
            type="email"
            className="outline-none ml-5 w-[200px] md:w-[400px]"
            placeholder="Enter Your Email"
          />
          <div>
            <button className="flex items-center py-[5px] px-[10px] md:py-[10px] md:px-[26px] rounded-[8px] font-semibold md:text-lg  text-white bg-primary whitespace-nowrap flex-1 w-fit ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
