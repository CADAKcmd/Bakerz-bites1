import React, { useState, useEffect, useRef } from "react";

const cakes = [
  {
    id: 1,
    name: "Chocolate Fudge Cake",
    price: 18,
    oldPrice: 20,
    image: "https://i.pinimg.com/736x/36/5f/0a/365f0a18a536f0e8546f75b06b246a8d.jpg",
    sale: true,
    description: "A very chocolatey, moist Chocolate Fudge Cake that is similar to chocolate mud cake, but not as dense."
  },
  {
    id: 2,
    name: "Vanilla Buttercream Cake",
    price: 25,
    image: "https://i.pinimg.com/736x/8f/80/41/8f80412aade68a55ea92a9e1ab9da8d5.jpg",
    description: "This vanilla layer cake is soft and moist and smothered in light-as-air, creamy vanilla buttercream."
  },
  {
    id: 3,
    name: "Lemon Drizzle Cake",
    price: 45,
    image: "https://i.pinimg.com/736x/9e/b6/ef/9eb6ef177830b98aed447fc3de9e9582.jpg",
    description: "This light, fluffy butter sponge cake is drizzled with a simple sugar and lemon sauce that when cools, gives this cake a wonderful crunchy sugar icing layer."
  },
  {
    id: 4,
    name: "Black Forest Cake",
    price: 90,
    image: "https://i.pinimg.com/736x/14/39/f0/1439f0e6be89377bfbbf0802f28f77cf.jpg",
    description: " Black Forest Cake! With layers of chocolate sponge with cherries and cream, you'll love that it's not too sweet."
  },
  {
    id: 5,
    name: "Banana Cream Cake",
    price: 16,
    oldPrice: 18,
    image: "https://i.pinimg.com/736x/9f/91/9f/9f919f0adbf95bdf7426979868f56b46.jpg",
    sale: true,
    description: "Light and fluffy white cake layers with banana cream filling, toasted graham crackers, whipped cream, and salted caramel."
  },
];

const slides = [
  {
    image: "https://img.freepik.com/premium-photo/close-up-fruitcake-plate_1048944-10399918.jpg?w=900",
    title: "Special Chocolate Cake",
    description: "Delicious rich chocolate cake with premium cocoa and moist texture."
  },
  {
    image: "https://img.freepik.com/free-photo/waffle-cookies-with-homemade-delicious-cream_114579-35019.jpg?t=st=1744588289~exp=1744591889~hmac=835b6c4803357c289b90846f090012a033b2c0d2b4d63d67a97a8facb41442a0&w=996",
    title: "Vanilla Delight",
    description: "Classic vanilla cake made with real vanilla beans for unmatched flavor."
  },
  {
    image: "https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649300.jpg?t=st=1744588204~exp=1744591804~hmac=ceb3beea6c77b9fb07735792272c5e3b0c4fc4924dfe998b1ce2e3f0c9e440d6&w=1380",
    title: "Berry Blast",
    description: "Loaded with fresh berries and creamy frosting, a summer favorite."
  }
];

const Cakes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);
  const slideRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = useRef(null);
  const handleTouchEnd = useRef(null);

  const touchStart = (e) => {
    handleTouchStart.current = e.touches[0].clientX;
  };

  const touchEnd = (e) => {
    handleTouchEnd.current = e.changedTouches[0].clientX;
    const diff = handleTouchStart.current - handleTouchEnd.current;

    if (diff > 50) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (diff < -50) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const openModal = (cake) => {
    setSelectedCake(cake);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCake(null);
  };

  return (
    <div className="pt-20 mt-16">
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/view-delicious-sweet-cupcake-dessert-with-frosting_23-2150679532.jpg?t=st=1744586212~exp=1744589812~hmac=4df015dfd4cec0be75378ce0b8444decc69f73b62e9c05ab16605da916563b59&w=1380')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Cakes</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-2">Our Cakes</h2>
        <p className="italic text-gray-700">
          Baking schools closed during this time so when the war did eventually end there was an absence of skilled bakers. This resulted in new methods being developed to satisfy the world’s desire for bread.
        </p>
      </section>

      {/* Cake Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cakes.map((cake) => (
          <div key={cake.id} className="border rounded-lg overflow-hidden shadow-md bg-white relative">
            <img src={cake.image} alt={cake.name} className="h-48 w-full object-cover" />
            {cake.sale && (
              <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Sale!</span>
            )}
            <div className="p-4">
              <div className="text-lg font-semibold mb-1">{cake.name}</div>
              <div className="text-gray-800 font-bold">
                {cake.oldPrice && (
                  <span className="line-through text-sm text-gray-500 mr-2">
                    ${cake.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="italic">${cake.price.toFixed(2)}</span>
              </div>
              <button
                onClick={() => openModal(cake)}
                className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Special Recipe Carousel */}
      <section className="bg-yellow-500 py-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative w-full overflow-hidden h-[400px] rounded-lg"
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
          >
            <div
              ref={slideRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full h-[400px] relative">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 md:px-20">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-white italic max-w-lg">
                      {slide.description}
                    </p>
                    <button className="mt-6 bg-white text-black px-6 py-2 rounded font-semibold w-fit">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">{selectedCake.name}</h2>
          <img
            src={selectedCake.image}
            alt={selectedCake.name}
            className="w-full h-40 sm:h-48 object-cover mb-4 rounded"
          />
          <p className="text-gray-700 mb-4 text-sm sm:text-base">{selectedCake.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-base sm:text-lg font-bold">${selectedCake.price.toFixed(2)}</span>
            {selectedCake.oldPrice && (
              <span className="line-through text-sm text-gray-500">
                ${selectedCake.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={closeModal}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Cakes;
