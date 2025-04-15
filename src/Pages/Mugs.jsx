import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Product Grid Data
const mugsData = [
  {
    id: 1,
    name: "Classic White Mug",
    price: 10,
    image: "https://i.pinimg.com/736x/a9/8e/4e/a98e4e348a5db2abe0b5103be407dad2.jpg",
    description: "A sleek and stylish white mug for your everyday use.",
  },
  {
    id: 2,
    name: "Black Coffee Mug",
    price: 12,
    image: "https://i.pinimg.com/736x/8b/38/fa/8b38fa301753b9037b39c85a751f9e41.jpg",
    description: "A bold black mug perfect for coffee lovers.",
  },
  {
    id: 3,
    name: "Ceramic Travel Mug",
    price: 15,
    image: "https://i.pinimg.com/736x/ac/a7/9b/aca79b4808157c8bad1cf8990b5abd68.jpg",
    description: "A ceramic travel mug to enjoy your beverages on the go.",
  },
  {
    id: 4,
    name: "Custom Logo Mug",
    price: 18,
    image: "https://i.pinimg.com/736x/65/38/f9/6538f9f56865be9c415ea15bd9b697d0.jpg",
    description: "Personalized ceramic mug with your logo or design.",
  },
];

// Carousel Data
const mugCarouselData = [
  {
    id: 1,
    title: "Ceramic Coffee Mug",
    description: "This premium ceramic mug is perfect for everyday use with a stylish finish.",
    image: "https://i.pinimg.com/736x/2d/d5/94/2dd594f4bbed0de33ee2dbf5e428a646.jpg",
  },
  {
    id: 2,
    title: "Coffee Lover's Mug",
    description: "A high-quality mug designed for true coffee lovers and morning brews.",
    image: "https://i.pinimg.com/736x/6a/1a/6c/6a1a6cf1f557ba17094cbf50b1ae8517.jpg",
  },
  {
    id: 3,
    title: "Minimalist Mug",
    description: "Modern and minimalist mug that blends with any kitchen decor.",
    image: "https://i.pinimg.com/736x/70/86/e6/7086e6582b3032363dce90f05b0d0bd4.jpg",
  },
];

const Mug = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-20 mt-20 bg-white">
      {/* Header */}
      <div className="text-center py-8 ">
        <h1 className="text-4xl font-bold text-yellow-500">Merchandise</h1>
        <p className="text-lg text-white mt-2">Bakerz Bite</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10 mt-10">
        {mugsData.map((mug) => (
          <div
            key={mug.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={mug.image}
              alt={mug.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-semibold text-yellow-700 mb-1">{mug.name}</h2>
              <p className="text-lg font-medium text-black">${mug.price.toFixed(2)}</p>
              <button
                onClick={() => setSelectedProduct(mug)}
                className="mt-3 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-yellow-700">
              {selectedProduct.name}
            </h2>
            <p className="text-lg font-semibold text-black">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <p className="mt-4 text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-yellow-500 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {mugCarouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="italic text-gray-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link to='/shop'>
                  <button className="px-6 py-3 bg-yellow-500 text-black text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300">
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

export default Mug;
