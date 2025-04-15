import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const bagsData = [
  {
    id: 1,
    name: "Canvas Tote Bag",
    price: 22,
    image: "https://i.pinimg.com/736x/09/38/a6/0938a62e5edc549c7157c3eff1d9626f.jpg",
    description: "Eco-friendly and spacious canvas tote for daily errands.",
  },
  {
    id: 2,
    name: "Mini Crossbody Bag",
    price: 28,
    image: "https://i.pinimg.com/736x/15/cf/fa/15cffa854b5bf2400e6e7374d5f95c7f.jpg",
    description: "Compact crossbody perfect for light travels.",
  },
  {
    id: 3,
    name: "Bakerz Bite Jute Bag",
    price: 30,
    image: "https://i.pinimg.com/736x/39/81/df/3981df0c1c24cb239c147ceed2edf67f.jpg",
    description: "Signature branded jute bag made from natural fibers.",
  },
  {
    id: 4,
    name: "Foldable Grocery Bag",
    price: 18,
    image: "https://i.pinimg.com/736x/2c/9c/a7/2c9ca7421a8dcaa5f87ef7844cf95377.jpg",
    description: "Lightweight and foldable bag perfect for shopping.",
  },
];

const carouselData = [
  {
    id: 1,
    title: "Tote Trend",
    description: "Spacious & stylish – your go-to everyday carry bag.",
    image: "https://i.pinimg.com/736x/6d/87/5b/6d875b8c2ca860a8ffc0672ca0b53ea4.jpg",
  },
  {
    id: 2,
    title: "Jute Charm",
    description: "Eco-friendly jute elegance with Bakerz Bite flair.",
    image: "https://i.pinimg.com/736x/00/d0/24/00d0248fd279b56aecafdda7d559e7c5.jpg",
  },
  {
    id: 3,
    title: "Mini Must-Have",
    description: "Light, compact, and always trendy — carry less, shine more.",
    image: "https://i.pinimg.com/736x/09/89/c4/0989c410cf1ffaf23bfb9046468a3338.jpg",
  },
];

const Bag = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-20 mt-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-900">Merchandise</h1>
        <p className="text-lg text-gray-600">Bakerz Bite</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {bagsData.map((bag) => (
          <div
            key={bag.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={bag.image}
              alt={bag.name}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />
            <div className="flex flex-col flex-1 p-4 text-center justify-between">
              <h2 className="text-base md:text-lg font-bold text-yellow-800 mb-2">
                {bag.name}
              </h2>
              <span className="text-base md:text-lg font-semibold text-gray-800">
                ${bag.price.toFixed(2)}
              </span>
              <button
                onClick={() => setSelectedProduct(bag)}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white text-sm md:text-base rounded hover:bg-yellow-600 transition"
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
            <h2 className="text-2xl font-bold mb-2 text-yellow-800">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-semibold text-gray-800">
              ${selectedProduct.price.toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-yellow-100 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-800">
          👜 Trending Bags
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
};

export default Bag;
