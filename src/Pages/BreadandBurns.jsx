import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const breadData = [
  {
    "id": 1,
    "name": "Bread & Bun 1",
    "price": 6,
    "originalPrice": 8,
    "image": "/src/assets/bread1.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 1.",
  },
  {
    "id": 2,
    "name": "Bread & Bun 2",
    "price": 8,
    "originalPrice": null,
    "image": "/src/assets/bread2.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 2.",
  },
  {
    "id": 3,
    "name": "Bread & Bun 3",
    "price": 10,
    "originalPrice": 12,
    "image": "/src/assets/bread3.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 3.",
  },
  {
    "id": 4,
    "name": "Bread & Bun 4",
    "price": 12,
    "originalPrice": 15,
    "image": "/src/assets/bread4.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 4.",
  },
  {
    "id": 5,
    "name": "Bread & Bun 5",
    "price": 14,
    "originalPrice": 16,
    "image": "/src/assets/bread5.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 5.",
  },
  {
    "id": 6,
    "name": "Bread & Bun 6",
    "price": 16,
    "originalPrice": 18,
    "image": "/src/assets/bread6.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 6.",
  },
  {
    "id": 7,
    "name": "Bread & Bun 7",
    "price": 18,
    "originalPrice": null,
    "image": "/src/assets/bread1.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 7.",
  },
  {
    "id": 8,
    "name": "Bread & Bun 8",
    "price": 20,
    "originalPrice": 22,
    "image": "/src/assets/bread2.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 8.",
  },
  {
    "id": 9,
    "name": "Bread & Bun 9",
    "price": 22,
    "originalPrice": 25,
    "image": "/src/assets/bread3.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 9.",
  },
  {
    "id": 10,
    "name": "Bread & Bun 10",
    "price": 24,
    "originalPrice": 26,
    "image": "/src/assets/bread4.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 10.",
  },
  {
    "id": 11,
    "name": "Bread & Bun 11",
    "price": 26,
    "originalPrice": 28,
    "image": "/src/assets/bread5.jpg",
    "onSale": true,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 11.",
  },
  {
    "id": 12,
    "name": "Bread & Bun 12",
    "price": 28,
    "originalPrice": null,
    "image": "/src/assets/bread6.jpg",
    "onSale": false,
    "description": "Freshly baked bread and buns with rich flavors and soft texture. Variant 12.",
  },
];

const BreadAndBuns = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewDetails, setViewDetails] = useState(false); // State to handle view details action

  return (
    <div className="pt-20 mt-20">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/bread-hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Bread & Buns</h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10">
        {breadData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md relative overflow-hidden hover:shadow-lg transition"
          >
            {item.onSale && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                Sale!
              </span>
            )}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <div className="mb-2">
                {item.originalPrice && (
                  <span className="line-through text-sm text-gray-400 mr-1">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg italic font-semibold text-gray-800">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <h2 className="font-medium text-yellow-500">{item.name}</h2>
              <button
                onClick={() => {
                  setSelectedProduct(item);
                  setViewDetails(true); // Show details when clicked
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
      {selectedProduct && viewDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => {
                setSelectedProduct(null);
                setViewDetails(false); // Close modal and hide details
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <button className="mt-4 w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
              Confirm Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-yellow-50 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-600">
          Baker’s Specials
        </h2>

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
                  src={`/src/assets/bread-special${i}.jpg`}
                  alt={`Bread Special ${i}`}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-600 mb-4">
                    Bread Special {i}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    Enjoy warm, fresh, oven-baked classics—perfect for every
                    meal or snack.
                  </p>
                  <button className="px-6 py-3 bg-yellow-600 text-white text-sm md:text-base rounded-lg hover:bg-yellow-700 transition duration-300">
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

export default BreadAndBuns;
