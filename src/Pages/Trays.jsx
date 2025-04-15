import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Grid Data
const traysData = [
  {
    id: 1,
    name: "Wooden Tray",
    price: 18,
    image: "https://i.pinimg.com/736x/4b/bd/dd/4bbddd307e5a32957ce45c910d3f54a3.jpg",
    description: "Rustic wooden tray perfect for serving pastries.",
  },
  {
    id: 2,
    name: "Vintage Metal Tray",
    price: 22,
    image: "https://i.pinimg.com/736x/1c/cb/8a/1ccb8ae7177222157b8610045b6e624f.jpg",
    description: "Retro-style tray with handles for easy carrying.",
  },
  {
    id: 3,
    name: "Round Marble Tray",
    price: 30,
    image: "https://i.pinimg.com/736x/26/e9/a0/26e9a0eac4dc3a814cf1559f95d3c04b.jpg",
    description: "Elegant marble design for a luxurious presentation.",
  },
  {
    id: 4,
    name: "Acrylic Display Tray",
    price: 16,
    image: "https://i.pinimg.com/736x/34/6a/9d/346a9d86d2954a4091fb1251807dae3c.jpg",
    description: "Clear and modern — ideal for showcasing desserts.",
  },
];

// Carousel Data
const trayCarouselData = [
  {
    id: 1,
    title: " Premium Tray",
    description: "Premium trays that blend style and practicality for elegant presentations.",
    image: "https://i.pinimg.com/736x/fe/9a/b5/fe9ab502781acd3232875469490d4b2d.jpg",
  },
  {
    id: 2,
    title: "Modern Tray",
    description: "Modern trays with sleek finishes to elevate any dessert experience.",
    image: "https://i.pinimg.com/736x/15/f1/7f/15f17ff349146c3bbac04b45b4ce6019.jpg",
  },
  {
    id: 3,
    title: "Crafted Tray",
    description: "Handcrafted trays that add a personal touch to your serving.",
    image: "https://i.pinimg.com/736x/e6/04/fd/e604fd83f8b92634a5d2116e85cb2948.jpg",
  },
];

const Trays = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
                onClick={() => setSelectedProduct(tray)}
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
           Tray Highlights
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {trayCarouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link to='/shop'>
                   <button className="px-6 py-3 bg-yellow-500 text-white text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300">
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

export default Trays;
