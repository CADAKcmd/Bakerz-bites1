import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const breadData = [
  {
    id: 1,
    name: "Ciabatta Bread",
    price: 6,
    originalPrice: 8,
    image: "https://i.pinimg.com/736x/af/a9/8e/afa98e73af3aafd04bcea967abdf5232.jpg",
    onSale: true,
    description: "Ciabatta is a rustic Italian bread characterized by a crisp, chewy crust and a soft, porous interior.",
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    price: 8,
    originalPrice: null,
    image: "https://i.pinimg.com/736x/90/22/82/9022825ab3cc7633f10aae80088d6218.jpg",
    onSale: false,
    description: "Whole wheat bread is made from flour derived from the entire wheat kernel, including the bran, germ, and endosperm",
  },
  {
    id: 3,
    name: "Dinner Rolls",
    price: 10,
    originalPrice: 12,
    image: "https://i.pinimg.com/736x/f7/f0/71/f7f071dc43507dd586e4e6df5132e067.jpg",
    onSale: true,
    description: "Soft and fluffy dinner rolls are a classic side dish for any meal.",
  },
  {
    id: 4,
    name: "Garlic Bread",
    price: 12,
    originalPrice: 15,
    image: "https://i.pinimg.com/736x/ec/64/7a/ec647a56b8ec6fad3b3bb53be9e338ea.jpg",
    onSale: false,
    description: "Freshly baked bread and buns with rich flavors and soft texture. Variant 4.",
  },
];

const breadCarouselData = [
  {
    id: 1,
    title: "Rustic Rye Delight",
    description: "A dense, tangy rye loaf with a dark crust and earthy aroma, perfect for sandwiches.",
    image: "https://i.pinimg.com/736x/3a/69/6d/3a696d624d5a69a421a84877085d04a0.jpg",
  },
  {
    id: 2,
    title: "Brioche Dream",
    description: "Soft and buttery with a golden top, ideal for sweet or savory dishes.",
    image: "https://i.pinimg.com/736x/b9/79/5d/b9795d99577dafa353184b248d9f9658.jpg",
  },
  {
    id: 3,
    title: "Seeded Multigrain",
    description: "A healthy blend of grains and seeds for added crunch and nutrition.",
    image: "https://i.pinimg.com/736x/08/32/db/0832db13e276f6e9c2ae668eb8a01b5d.jpg",
  },
];

const BreadAndBuns = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className="pt-20 mt-20">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/d7/53/c5/d753c5623307b40037a36b4599ac119a.jpg')` }}
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
      {selectedProduct && viewDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => {
                setSelectedProduct(null);
                setViewDetails(false);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl sm:text-xl"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-600">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              {selectedProduct.description}
            </p>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
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
          {breadCarouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-600 mb-4">
                    {item.title}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link to='/shop'>
                   <button className="px-6 py-3 bg-yellow-600 text-white text-sm md:text-base rounded-lg hover:bg-yellow-700 transition duration-300">
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

export default BreadAndBuns;
