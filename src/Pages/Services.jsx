import { FaTruck, FaStore, FaBirthdayCake, FaBoxOpen, FaCookieBite, FaConciergeBell, FaHandsHelping, FaTshirt, FaMugHot } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-16 bg-yellow-50 text-gray-800 mt-20">
      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-yellow-600">Our Services</h1>
        <p className="text-lg mt-4 text-gray-600 italic">
          Everything we bake, we bake with love.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            title: "Custom Cake Orders",
            description: "Design your dream cake for birthdays, weddings, and events.",
            icon: <FaBirthdayCake className="text-4xl text-yellow-500" />,
          },
          {
            title: "Daily Fresh Pastries",
            description: "Enjoy freshly baked cookies, croissants, and buns every morning.",
            icon: <FaCookieBite className="text-4xl text-yellow-500" />,
          },
          {
            title: "Catering Services",
            description: "Perfect for business meetings, parties, and community events.",
            icon: <FaConciergeBell className="text-4xl text-yellow-500" />,
          },
          {
            title: "Bakery Subscriptions",
            description: "Get weekly boxes of our bestsellers delivered to your door.",
            icon: <FaBoxOpen className="text-4xl text-yellow-500" />,
          },
          {
            title: "In-store Pickup",
            description: "Order online and pick up at your convenience.",
            icon: <FaStore className="text-4xl text-yellow-500" />,
          },
          {
            title: "Local Delivery",
            description: "Same-day delivery available within your neighborhood.",
            icon: <FaTruck className="text-4xl text-yellow-500" />,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-yellow-500">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Partnering with Merchandise */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-yellow-600 mb-4 text-center flex justify-center items-center gap-2">
          <FaHandsHelping className="text-yellow-50" /> Partnering with Merchants
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          At Bakerz Bite, we collaborate with trusted local and online retailers to bring our
          exclusive merchandise directly to you. From branded mugs and trays to stylish baking
          accessories, our partnerships ensure high-quality products that reflect our bakery's
          charm and commitment to excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "Custom Aprons", image: "/src/assets/merch-apron.jpg", icon: <FaTshirt className="text-yellow-500 text-2xl mb-2" /> },
            { title: "Bakerz Mugs", image: "/src/assets/merch-mug.jpg", icon: <FaMugHot className="text-yellow-500 text-2xl mb-2" /> },
            { title: "Pastry Trays", image: "/src/assets/merch-tray.jpg", icon: <FaConciergeBell className="text-yellow-500 text-2xl mb-2" /> },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-yellow-100 rounded-xl overflow-hidden shadow-md w-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <div>{item.icon}</div>
                <h3 className="font-semibold text-yellow-600">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
