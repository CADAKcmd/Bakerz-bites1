import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useCart } from '../context/CartContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Navigation
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    name: 'Chocolate Cake',
    price: 18,
    originalPrice: 20,
    image: '/assets/chocolate.jpg',
    sale: true,
  },
  {
    name: 'Mixture Cookies',
    price: 18,
    image: '/assets/cookies.jpg',
  },
  {
    name: 'Cake blast',
    price: 45,
    image: '/assets/strawberrycake.jpg',
  },
  {
    name: 'Strawberry Cake',
    price: 55,
    originalPrice: 66,
    image: '/assets/strawcake.jpg',
    sale: true,
  },
  {
    name: 'Marble Cake',
    price: 20,
    image: 'https://i.pinimg.com/736x/78/2c/18/782c18b710f88efafe6726817f8a3255.jpg',
  },
  {
    name: 'Red Velvet Cake',
    price: 20,
    originalPrice: 66,
    image: 'https://i.pinimg.com/736x/cf/78/07/cf78076d0d60df4c585ecb55380dccff.jpg',
    sale: true,
  },
];

export default function FeaturedCakes() {
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  return (
    <div className="w-full bg-yellow-400 py-12 px-4 md:px-12 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Featured Cakes
        </h2>
        <p className="italic text-white mt-2">
          Seldolor sit amet consectetur
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 text-white cursor-pointer">
        <FaArrowLeft size={30} />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-2 z-10 text-white cursor-pointer">
        <FaArrowRight size={30} />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
              {product.sale && (
                <span className="absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded z-10">
                  Sale!
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="text-center p-4">
                <div className="text-gray-800 text-xl font-semibold">
                  {product.name}
                </div>
                <div className="mt-2 text-lg">
                  {product.originalPrice && (
                    <span className="line-through text-gray-400 mr-2 text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="italic text-yellow-400 font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    addToCart(product); // ✅ Passing the right item
                    navigate('/cart'); // ✅ Go to cart page
                  }}
                  className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 transition text-white rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination-custom mt-6 text-center" />

      {/* Pagination Style */}
      <style>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          background-color: black;
          opacity: 1;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: black;
        }
      `}</style>
    </div>
  );
}
