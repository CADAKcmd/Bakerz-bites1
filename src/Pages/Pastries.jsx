import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const pastriesData = [
  {
    id: 1,
    name: "Danish Pastry",
    price: 18,
    originalPrice: 20,
    image: "https://i.pinimg.com/736x/3e/63/cb/3e63cbcb02732e8a1aab411603cfbcb8.jpg",
    onSale: true,
    description: "Danish pastry is a sweet, laminated pastry, typically filled with custard, jam, or cheese, and often topped with fruit or chocolate.",
  },
  {
    id: 2,
    name: "Apple Turnover",
    price: 25,
    image: "https://i.pinimg.com/736x/a0/6a/10/a06a10e1c1645c7dcaccdd6fe5e630a3.jpg",
    onSale: false,
    description: "A turnover is a triangular filled pastry that looks a little bit like a hand pie",
  },
  {
    id: 3,
    name: "Pain au Chocolat",
    price: 45,
    image: "https://i.pinimg.com/736x/fe/6b/c0/fe6bc0983cb0660151f30002b1223941.jpg",
    onSale: false,
    description: "Pain au chocolat is a French pastry made of a yeast-leavened dough, similar to croissant dough, filled with chocolate.",
  },
  {
    id: 4,
    name: "Cream Horn",
    price: 90,
    image: "https://i.pinimg.com/736x/8f/d7/93/8fd79353d53f23e8ce5addfc7268b289.jpg",
    onSale: false,
    description: "A cream horn is a pastry made from a rolled sheet of puff pastry, filled with whipped cream or custard.",
  },
  {
    id: 5,
    name: "Chocolate Éclair",
    price: 16,
    originalPrice: 18,
    image: "https://i.pinimg.com/736x/19/15/0f/19150f2a94d93a431ee4ab5aadcbab19.jpg",
    onSale: true,
    description: "An éclair is a pastry made with choux dough filled with cream and topped with chocolate icing.",
  },
];

const pastrySlides = [
  {
    id: 1,
    title: "Pastries made with love",
    image: "https://img.freepik.com/free-photo/side-view-puff-pastries-with-ground-meat-sesame-seeds-shortcakes-filled-with-mashed-potato-table_141793-5064.jpg",
    description:
      "Pastries made with love are baked goods, often sweet treats like cakes, cookies, and tarts, crafted with care and attention, often with a focus on quality ingredients and a personal touch",
  },
  {
    id: 2,
    title: "Pastries with fruit",
    image: "https://img.freepik.com/premium-photo/delicious-pastry-white-space_392895-17393.jpg",
    description:
      "Pastries with fruit are delightful baked goods that incorporate fresh or cooked fruits, adding natural sweetness and flavor to the pastry, often enjoyed as desserts or breakfast items.",
  },
  {
    id: 3,
    title: "Pastries taste good",
    image: "https://img.freepik.com/free-photo/set-bakery-pastries-wooden-table_123827-31526.jpg",
    description:
      "Pastries taste good because they are often made with high-quality ingredients, including butter, sugar, and flour, which create a rich and flaky texture, while fillings like fruit, cream, or chocolate add delightful flavors.",
  },
];

export default function Pastries() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-20 mt-20">
      {/* Hero */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/delicious-donuts-with-topping-arrangement_23-2150705261.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Pastries</h1>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-10">
        {pastriesData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md relative overflow-hidden hover:shadow-lg transition"
          >
            {product.onSale && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                Sale!
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <div className="mb-2">
                {typeof product.originalPrice === "number" && (
                  <span className="line-through text-sm text-gray-400 mr-1">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg italic font-semibold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <h2 className="font-medium text-yellow-500">{product.name}</h2>
              <button
                onClick={() => setSelectedProduct(product)}
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
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
            <button className="mt-4 w-full py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
              Confirm Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl py-10 px-4 md:px-12 shadow-inner">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-500">
          Special Recipe
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {pastrySlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full md:w-1/2 h-[320px] object-cover rounded-2xl"
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                    {slide.title}
                  </h3>
                  <p className="italic text-gray-600 mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <Link to="/shop">
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
}
