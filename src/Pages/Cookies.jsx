import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// special cookie carousel data using URLs
const specialCookies = [
  {
    id: 1,
    title: "Discover Cookies",
    image: "https://img.freepik.com/free-photo/selective-focus-shot-baking-grid-with-delicious-round-chocolate-cookies-cup-milk_181624-32076.jpg?t=st=1744617960~exp=1744621560~hmac=b20ca6655e61265658d28305e5dbef6346232923f4e4952432e2e7cdd76ae712&w=900",
    description:
      "Discover a new twist on cookies — sweet, gooey, crunchy, and unforgettable.",
  },
  {
    id: 2,
    title: "Cookies Create Love",
    image: "https://img.freepik.com/premium-photo/portrait-happy-black-couple-drinking-coffee-eating-cookies-kitchen_116547-18544.jpg?w=996",
    description:
      "Indulge in rich flavor combinations crafted for cookie lovers everywhere.",
  },
  {
    id: 3,
    title: "Perfect Cookies",
    image: "https://img.freepik.com/free-photo/front-view-different-delicious-biscuits-light-background_140725-94909.jpg?t=st=1744618496~exp=1744622096~hmac=15c556fef91e3670efd06265c0323d88f522854da0acfd2d3d4990d155624bf3&w=996",
    description:
      "The perfect treat for any time — soft, chewy, and packed with goodness.",
  },
];

const cookiesData = [
  {
    id: 1,
    name: "Oatmeal Raisin Cookie",
    price: 12,
    image: "https://i.pinimg.com/736x/f6/c3/0d/f6c30d2baecaf25f66a6633155e18ae5.jpg",
    onSale: true,
    originalPrice: 15,
    description: "A classic cookie with a chewy texture and sweet raisins.",
  },
  {
    id: 2,
    name: "Peanut Butter Cookie",
    price: 10,
    image: "https://i.pinimg.com/736x/fd/2a/b3/fd2ab3aa22ad893e056e487caece4650.jpg",
    onSale: false,
    description: "Crunchy and creamy peanut butter cookie with a hint of salt.",
  },
  {
    id: 3,
    name: "Molasses Cookie",
    price: 13,
    image: "https://i.pinimg.com/736x/57/c2/eb/57c2eb9500319f7691ab43e33932edf0.jpg",
    onSale: false,
    description: "Soft and chewy molasses cookie with a hint of spice.",
  },
  {
    id: 4,
    name: "Double Chocolate Cookie",
    price: 14,
    originalPrice: 16,
    onSale: true,
    image: "https://i.pinimg.com/736x/46/81/16/4681168dad2826a4f26b11f2bd9ff864.jpg",
    description: "Rich and decadent cookie loaded with chocolate chips.",
  },
];

const Cookies = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const handleViewDetails = (cookie) => {
    setSelectedProduct(cookie);
    setShowDescription(false);
  };

  const handleShowDescription = () => {
    setShowDescription(true);
  };

  return (
    <div className="pt-20 mt-20">
      {/* Hero */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/top-view-different-cookies-yellow-surface_176474-617.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Cookies</h1>
        </div>
      </div>

      {/* Cookie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10">
        {cookiesData.map((cookie) => (
          <div
            key={cookie.id}
            className="bg-white rounded-xl shadow-md relative overflow-hidden hover:shadow-lg transition"
          >
            {cookie.onSale && (
              <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                Sale!
              </span>
            )}
            <img
              src={cookie.image}
              alt={cookie.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <div className="mb-2">
                {cookie.originalPrice && (
                  <span className="line-through text-sm text-gray-400 mr-1">
                    ${cookie.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg italic font-semibold text-gray-800">
                  ${cookie.price.toFixed(2)}
                </span>
              </div>
              <h2 className="font-medium text-yellow-500">{cookie.name}</h2>
              <button
                onClick={() => handleViewDetails(cookie)}
                className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Carousel */}
      <div className="mt-16 px-4 md:px-10">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">Special Recipes</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3500 }}
          modules={[Autoplay]}
          className="w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden"
        >
          {specialCookies.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 text-center">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base max-w-md">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-56 object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-4 text-yellow-600">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
            {showDescription ? (
              <p className="mt-4 text-sm text-gray-500 italic">
                Full cookie details go here — made fresh daily!
              </p>
            ) : (
              <button
                onClick={handleShowDescription}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Show More
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cookies;
