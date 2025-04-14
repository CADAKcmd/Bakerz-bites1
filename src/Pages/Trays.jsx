import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const traysData = [
  {
    id: 1,
    name: "Wooden Tray",
    price: 18,
    image: "/src/assets/tray1.jpg",
    description: "Rustic wooden tray perfect for serving pastries.",
  },
  {
    id: 2,
    name: "Vintage Metal Tray",
    price: 22,
    image: "/src/assets/tray2.jpg",
    description: "Retro-style tray with handles for easy carrying.",
  },
  {
    id: 3,
    name: "Round Marble Tray",
    price: 30,
    image: "/src/assets/tray3.jpg",
    description: "Elegant marble design for a luxurious presentation.",
  },
  {
    id: 4,
    name: "Acrylic Display Tray",
    price: 16,
    image: "/src/assets/tray4.jpg",
    description: "Clear and modern — ideal for showcasing desserts.",
  },
  {
    id: 5,
    name: "Decorative Floral Tray",
    price: 20,
    image: "/src/assets/tray5.jpg",
    description: "Floral patterns that add charm to your table.",
  },
  {
    id: 6,
    name: "Tiered Dessert Tray",
    price: 28,
    image: "/src/assets/tray6.jpg",
    description: "Three levels to serve cupcakes, cookies, or snacks.",
  },
  {
    id: 7,
    name: "Ceramic Breakfast Tray",
    price: 25,
    image: "/src/assets/tray7.jpg",
    description: "Smooth ceramic finish perfect for breakfast in bed.",
  },
  {
    id: 8,
    name: "Slate Serving Tray",
    price: 24,
    image: "/src/assets/tray8.jpg",
    description: "Natural slate surface for a modern rustic look.",
  },
  {
    id: 9,
    name: "Handled Bamboo Tray",
    price: 19,
    image: "/src/assets/tray9.jpg",
    description: "Eco-friendly and lightweight bamboo serving tray.",
  },
  {
    id: 10,
    name: "Rectangle Gold Tray",
    price: 26,
    image: "/src/assets/tray10.jpg",
    description: "Chic golden tray to elevate your presentation.",
  },
];

const Trays = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (tray) => {
    setSelectedProduct(tray); // Set the selected tray to show its details in the modal
  };

  return (
    <div className="pt-20 pb-10 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-yellow-500">Merchandise</h1>
        <p className="text-lg text-gray-600 italic mt-2">Bakerz Bite</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {traysData.map((tray) => (
          <div
            key={tray.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={tray.image}
              alt={tray.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-bold text-yellow-500">{tray.name}</h2>
              <p className="mt-2 text-lg font-semibold">${tray.price.toFixed(2)}</p>
              <button
                onClick={() => handleViewDetails(tray)} // On click, pass the tray data
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
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl">
            <button
              onClick={() => setSelectedProduct(null)} // Reset selected product when closing modal
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
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              ${selectedProduct.price.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-500">
          🧁 Tray Highlights
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
                  src={`/src/assets/tray-special${i}.jpg`}
                  alt={`Tray Special ${i}`}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                    Tray Special {i}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    Beautiful trays to display, serve, and impress guests with every bite.
                  </p>
                  <button className="px-6 py-3 bg-yellow-500 text-white text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300">
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

export default Trays;
