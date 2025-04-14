import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const mugsData = [
  {
    id: 1,
    name: "Classic White Mug",
    price: 10,
    image: "/src/assets/mug1.jpg",
    description: "A sleek and stylish white mug for your everyday use.",
  },
  {
    id: 2,
    name: "Black Coffee Mug",
    price: 12,
    image: "/src/assets/mug2.jpg",
    description: "A bold black mug perfect for coffee lovers.",
  },
  {
    id: 3,
    name: "Ceramic Travel Mug",
    price: 15,
    image: "/src/assets/mug3.jpg",
    description: "A ceramic travel mug to enjoy your beverages on the go.",
  },
  {
    id: 4,
    name: "Custom Logo Mug",
    price: 18,
    image: "/src/assets/mug4.jpg",
    description: "Personalized ceramic mug with your logo or design.",
  },
  {
    id: 5,
    name: "Large Latte Mug",
    price: 14,
    image: "/src/assets/mug5.jpg",
    description: "A large, comfortable mug perfect for lattes.",
  },
  {
    id: 6,
    name: "Minimalist Mug",
    price: 11,
    image: "/src/assets/mug6.jpg",
    description: "A clean, minimalist design for modern coffee lovers.",
  },
  {
    id: 7,
    name: "Pastel Color Mug",
    price: 13,
    image: "/src/assets/mug7.jpg",
    description: "Soft pastel-colored mug for a subtle, elegant touch.",
  },
  {
    id: 8,
    name: "Vintage Style Mug",
    price: 16,
    image: "/src/assets/mug8.jpg",
    description: "A vintage-style mug that brings a nostalgic feel.",
  },
  {
    id: 9,
    name: "Bold Pattern Mug",
    price: 14,
    image: "/src/assets/mug9.jpg",
    description: "A mug with a bold and unique pattern for the adventurous.",
  },
  {
    id: 10,
    name: "Handcrafted Mug",
    price: 20,
    image: "/src/assets/mug10.jpg",
    description: "A beautifully handcrafted mug for a personal touch.",
  },
];

const Mug = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-20 mt-20 bg-white">
      <div className="text-center py-8 bg-black">
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
              <h2 className="font-semibold text-yellow-700 mb-1">
                {mug.name}
              </h2>
              <p className="text-lg font-medium text-black">
                ${mug.price.toFixed(2)}
              </p>
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
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={`/src/assets/mug-special${i}.jpg`}
                  alt={`Mug Special ${i}`}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-700 mb-4">
                    Mug Special {i}
                  </h3>
                  <p className="italic text-gray-700 mb-6 leading-relaxed">
                    High-quality mugs perfect for your morning brew.
                  </p>
                  <button className="px-6 py-3 bg-yellow-500 text-black text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300">
                    View Details
                  </button>
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
