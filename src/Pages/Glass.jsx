import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const glassData = [
  {
    id: 1,
    name: "Glass Tumbler",
    price: 18,
    image: "https://i.pinimg.com/736x/2a/1d/e1/2a1de14f32fdb605056b8db8fc45b33c.jpg",
    description: "Elegant glass tumbler for everyday beverages.",
  },
  {
    id: 2,
    name: "Vintage Glass Jar",
    price: 22,
    image: "https://i.pinimg.com/736x/f7/33/15/f7331577bd9c274342d2a586d7ac3f89.jpg",
    description: "Classic glass jar for cookies or dry storage.",
  },
  {
    id: 3,
    name: "Iced Latte Glass",
    price: 16,
    image: "https://i.pinimg.com/736x/ba/b7/67/bab767a1effc690edba4a8df01262753.jpg",
    description: "Tall glass perfect for iced coffee or smoothies.",
  },
  {
    id: 4,
    name: "Etched Glass Cup",
    price: 20,
    image: "https://i.pinimg.com/736x/22/05/08/220508692154b54baaf3150505e6fee4.jpg",
    description: "Delicate etched design for premium presentation.",
  },
  
];

const Glass = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-20 mt-20">
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://i.pinimg.com/736x/30/04/2e/30042eaf538bf84e7ea6b3281ecea48e.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Glassware</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-2">Our Glassware Collection</h2>
        <p className="italic text-gray-700">
          Discover our beautifully crafted glassware, perfect for every occasion.
        </p>
      </section>

      {/* Glassware Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {glassData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="text-lg font-semibold mb-1">{item.name}</div>
              <div className="text-lg font-bold text-yellow-600">
                ${item.price.toFixed(2)}
              </div>
              <button
                onClick={() => setSelectedProduct(item)}
                className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Pop-Up Details Modal */}
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
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-2">{selectedProduct.description}</p>
            <div className="text-lg font-semibold text-yellow-600">
              ${selectedProduct.price.toFixed(2)}
            </div>
            <Link to='/shop'>
            <button className="mt-4 w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              Shop Now
            </button>
            </Link>
            
          </div>
        </div>
      )}

      {/* Featured Glass Items Carousel */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-600">
             Featured Glass Items
          </h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
            className="max-w-6xl mx-auto"
          >
            {glassData.slice(0, 3).map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                  />
                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-3xl font-bold text-yellow-600 mb-4">
                      {item.name}
                    </h3>
                    <p className="italic text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="px-6 py-3 bg-yellow-500 text-white text-sm md:text-base rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Glass;
