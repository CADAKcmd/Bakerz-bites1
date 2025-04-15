import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const piesData = [
  {
    id: 1,
    name: "Apple Crumble",
    price: 16,
    image: "https://i.pinimg.com/736x/42/3a/80/423a80aa7104bc06578e0044e13f80c1.jpg",
    onSale: true,
    originalPrice: 18,
    description: "Classic apple pie with a crispy golden crumble topping.",
  },
  {
    id: 2,
    name: "Cherry Blossom",
    price: 15,
    image: "https://i.pinimg.com/736x/15/c2/e7/15c2e7d02d93b02e9162179542565f35.jpg",
    onSale: false,
    description: "Tart cherries in a buttery flaky crust. A timeless favorite.",
  },
  {
    id: 3,
    name: "Key Lime Dream",
    price: 14,
    image: "https://i.pinimg.com/736x/16/7a/db/167adb50b32ccd3c0da60eba48dae4a3.jpg",
    onSale: false,
    description: "Creamy and tangy key lime filling with whipped topping.",
  },
  {
    id: 4,
    name: "Pecan Crunch",
    price: 17,
    originalPrice: 19,
    onSale: true,
    image: "https://i.pinimg.com/736x/9a/a7/5c/9aa75c5158a6eeff8cac546a84840cbc.jpg",
    description: "Sweet and nutty with roasted pecans and caramel glaze.",
  },
];

const pieSpecials = [
  {
    id: 1,
    title: "Maple Walnut Delight",
    description: "A cozy blend of maple syrup and toasted walnuts.",
    image: "https://i.pinimg.com/736x/85/35/1f/85351f08b4ef269237dfabd5c9536495.jpg",
  },
  {
    id: 2,
    title: "Berry Harvest Medley",
    description: "Seasonal berries tucked into a golden crust.",
    image: "https://i.pinimg.com/736x/d4/2f/a5/d42fa5501d24f5763d5bbfc26466fa80.jpg",
  },
  {
    id: 3,
    title: "Chocolate Silk Slice",
    description: "Rich, creamy chocolate layered in a flaky pie shell.",
    image: "https://i.pinimg.com/736x/ce/24/11/ce241153547caa3d1f86b6ed430673f4.jpg",
  },
];

const Pies = () => {
  const [selectedPie, setSelectedPie] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className="pt-20 mt-20">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/4f/81/e7/4f81e7cf53be675fd268208d8dab5e0c.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Pies</h1>
        </div>
      </div>

      {/* Pie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10">
        {piesData.map((pie) => (
          <div
            key={pie.id}
            className="bg-white rounded-xl shadow-md relative overflow-hidden hover:shadow-lg transition"
          >
            {pie.onSale && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                Sale!
              </span>
            )}
            <img
              src={pie.image}
              alt={pie.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <div className="mb-2">
                {pie.originalPrice && (
                  <span className="line-through text-sm text-gray-400 mr-1">
                    ${pie.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg italic font-semibold text-gray-800">
                  ${pie.price.toFixed(2)}
                </span>
              </div>
              <h2 className="font-medium text-yellow-500">{pie.name}</h2>
              <button
                onClick={() => {
                  setSelectedPie(pie);
                  setViewDetails(true);
                }}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPie && viewDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => {
                setSelectedPie(null);
                setViewDetails(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedPie.image}
              alt={selectedPie.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-yellow-500">
              {selectedPie.name}
            </h2>
            <p className="text-gray-600 mb-2">{selectedPie.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              ${selectedPie.price.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-500">
          Pie Specials
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {pieSpecials.map((special) => (
            <SwiperSlide key={special.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={special.image}
                  alt={special.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                    {special.title}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    {special.description}
                  </p>
                  <Link to='/shop'>
                  <button
                    onClick={() => setViewDetails(true)}
                    className="px-6 py-3 bg-yellow-500 text-white text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    Shop Now
                  </button>
                  </Link>
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Pies;
