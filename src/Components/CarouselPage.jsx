import { useEffect, useState } from 'react';
import { FaIceCream, FaShoppingBag, FaBirthdayCake, FaBreadSlice, FaUtensils, FaCookieBite, FaChevronLeft, FaChevronRight, FaPiedPiper } from 'react-icons/fa';

const slides = [
  {
    image: 'https://i.pinimg.com/736x/ef/b5/97/efb597b6b6c57d5f871255c3cec40ef7.jpg',
    title: 'Fresh & Delicious',
    subtitle: 'Bakery Shop',
    description: 'Premium Quality & Tasty Products',
  },
  {
    image: 'https://i.pinimg.com/736x/3a/da/0c/3ada0c9e3c7656c5093039af6db0d2d9.jpg',
    title: 'Sweet Cravings',
    subtitle: 'Cupcake Heaven',
    description: 'Delight in Every Bite',
  },
  {
    image: 'https://i.pinimg.com/736x/b5/03/8f/b5038fd3a28b19f18226b8249d2e4962.jpg',
    title: 'Chill Treats',
    subtitle: 'Ice Cream Bliss',
    description: 'Cool Off with Flavor',
  },
  {
    image: 'https://i.pinimg.com/736x/7d/53/39/7d5339a9452f4f11a2b8ff3d4df804fe.jpg',
    title: 'Daily Freshness',
    subtitle: 'Bread & Buns',
    description: 'Soft & Wholesome',
  },
  {
    image: 'https://i.pinimg.com/736x/5e/93/c5/5e93c5d96bcdef67d1bebce5b5cb338d.jpg',
    title: 'Crunchy Goodness',
    subtitle: 'Rusk Toast',
    description: 'Perfect Morning Snack',
  },
  {
    image: 'https://i.pinimg.com/736x/1c/a8/3d/1ca83dc6d7543d869fd3191f67701202.jpg',
    title: 'Tasty Layers',
    subtitle: 'Pastry Paradise',
    description: 'Flaky & Delicious',
  },
];

export default function CarouselPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden mt-10">
      {/* Carousel */}
      <div className="w-full h-[80vh] relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt="carousel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
              <p className="text-yellow-500 text-sm mb-2 font-poppins">{slide.title}</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans-serif">{slide.subtitle}</h2>
              <p className="mb-4 text-lg md:text-xl">{slide.description}</p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">SHOP NOW</button>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-yellow-500 transition"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-yellow-500 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Category List */}
      <div className="grid grid-cols-3 md:grid-cols-6 bg-black text-white text-center">
        {/* <Link to="/ice-cream"> */}
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaIceCream className="text-2xl" /> Ice Cream
        </button>
        {/* </Link> */}
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaShoppingBag className="text-2xl" /> Merchandise
        </button>
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaBirthdayCake className="text-2xl" /> Cake
        </button>
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaBreadSlice className="text-2xl" /> Bread & Buns
        </button>
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaPiedPiper className="text-2xl" /> Pie
        </button>
        <button className="py-4 hover:bg-yellow-500 transition flex flex-col items-center gap-1">
          <FaCookieBite className="text-2xl" /> Pastry
        </button>
      </div>
    </div>
  );
}
