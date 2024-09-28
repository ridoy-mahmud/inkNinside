const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-[#f3f3f3] mx-auto w-10/12 py-16 items-center rounded-2xl">
      <div className="w-full md:w-7/12 mx-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl text-black font-bold">
          Books to freshen up your bookshelf
        </h1>
        <br />
        <br />
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Visit The List
        </button>
      </div>
      <div className="w-full md:w-8/12 lg:w-8/12 mx-auto">
        <img
          className="w-80 h-auto mx-auto"
          src="https://i.ibb.co.com/McS4YPY/pngwing-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
