function Mainbox() {
  return (
    <>
      <div
        style={{ width: "1125px" }}
        className="mt-20 mr-auto ml-auto flex h-5/6"
      >
        <div className="w-3/6">
          <h1 className="font-extrabold text-8xl">
            YOUR FEET DESERVE THE BEST
          </h1>
          <div className="w-85 h-20">
            <p className="text-sm font-semibold text-gray-500 mt-3">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div className="w-80 h-10 mt-3 flex justify-between">
              <button className="w-36 bg-red-600 text-xl font-semibold text-white h-full">
                shop Now
              </button>
              <button className="w-36 bg-gray-100 text-xl font-normal text-gray-600 h-full border border-black border-solid">
                Category
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/6 pt-16 pb-16 image-box">
          <img src="../public/images/shoes.png" alt="" />
        </div>
      </div>
    </>
  );
}
export default Mainbox;
