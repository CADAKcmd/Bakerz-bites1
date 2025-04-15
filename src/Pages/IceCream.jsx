import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const iceCreamData = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: 8,
    image: "https://i.pinimg.com/736x/60/84/89/60848925f340bed613beef5b6308f0c7.jpg",
    onSale: true,
    originalPrice: 10,
    description: "Creamy vanilla scoop topped with caramel drizzle.",
  },
  {
    id: 2,
    name: "Strawberry Swirl",
    price: 9,
    image: "https://i.pinimg.com/736x/02/ae/13/02ae136d153deb574e69a3d5090a4d75.jpg",
    onSale: false,
    description: "Strawberry infused delight with fruity layers.",
  },
  {
    id: 3,
    name: "Mint Choco Chip",
    price: 11,
    image: "https://i.pinimg.com/736x/c6/d1/e0/c6d1e02d2b89fc0d01a3c4138b2a9424.jpg",
    onSale: false,
    description: "Refreshing mint with rich chocolate chips.",
  },
  {
    id: 4,
    name: "Chocolate Fudge",
    price: 12,
    originalPrice: 14,
    onSale: true,
    image: "https://i.pinimg.com/736x/67/35/ed/6735ed47a1a89f69349028c07ffcfe00.jpg",
    description: "Decadent chocolate ice cream with fudge ribbons.",
  },
];

const carouselData = [
  {
    id: 1,
    title: "Ice Cream Special ",
    description: "Cool, creamy, and indulgent — handcrafted specials that melt hearts.",
    image: "https://i.pinimg.com/736x/84/6c/16/846c16f31decfedef0f96bf3c9a61dbf.jpg",
  },
  {
    id: 2,
    title: "Ice Cream Matchup",
    description: "Try our double chocolate delight — rich, smooth, and unforgettable.",
    image: "https://i.pinimg.com/736x/0b/09/10/0b0910fcc509e5be78089e2714360bd9.jpg",
  },
  {
    id: 3,
    title: "Tropical Bliss",
    description: "Tropical fruity twist to refresh your day with real mango and passionfruit.",
    image: "https://i.pinimg.com/736x/aa/95/f6/aa95f6e698f162f2407ba324b18a97f6.jpg",
  },
];

export default function IceCream() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const handleViewDetails = (item) => {
    setSelectedProduct(item);
    setShowDescription(false);
  };

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/84/6c/16/846c16f31decfedef0f96bf3c9a61dbf.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Ice Cream Treats</h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10">
        {iceCreamData.map((item) => (
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
                onClick={() => handleViewDetails(item)}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl mx-4">
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
            <h2 className="text-2xl font-bold mb-2 text-yellow-500">
              {selectedProduct.name}
            </h2>
            {showDescription && (
              <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            )}
            <p className="text-lg font-semibold text-gray-800">
              ${selectedProduct.price.toFixed(2)}
            </p>
            {!showDescription && (
              <button
                onClick={handleShowDescription}
                className="mt-4 w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Show Description
              </button>
            )}
            {showDescription && (
              <button className="mt-4 w-full py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
                Confirm Add to Cart
              </button>
            )}
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-500">
           Ice Cream Specials
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-800 mb-4">
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
}
