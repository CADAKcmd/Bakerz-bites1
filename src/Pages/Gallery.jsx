import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Chocolate Drip Cake",
    image:
      "https://i.pinimg.com/736x/3b/22/a8/3b22a89b1d967fe92bc73c5f59016ff5.jpg",
  },
  {
    id: 2,
    title: "Fruity Tart",
    image:
      "https://i.pinimg.com/736x/51/67/9c/51679c03f2e7680d655df536850ed070.jpg",
  },
  {
    id: 3,
    title: "Blueberry Cheesecake",
    image:
      "https://i.pinimg.com/736x/b7/58/0a/b7580a57cef788948ce38c6eab457742.jpg",
  },
  {
    id: 4,
    title: "Cinnamon Rolls",
    image:
      "https://i.pinimg.com/736x/d9/48/aa/d948aa27ad5c696fa3fd3fc57740c597.jpg",
  },
  {
    id: 5,
    title: "Macarons",
    image:
      "https://i.pinimg.com/736x/cc/c3/f5/ccc3f5e5b424e0a88628b598afd50fe1.jpg",
  },
  {
    id: 6,
    title: "Croissants",
    image:
      "https://i.pinimg.com/736x/cf/9b/af/cf9bafa8f904bb4c2aacf06cebf46331.jpg",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-20 mt-20 px-4 md:px-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-500">
        Bakery Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-yellow-400 bg-opacity-50 text-white text-center py-2 text-lg font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-gray-600 text-2xl hover:text-black"
            >
              &times;
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-[400px] object-cover rounded-md"
            />
            <h2 className="text-center mt-4 text-xl font-semibold text-yellow-500">
              {selectedImage.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
