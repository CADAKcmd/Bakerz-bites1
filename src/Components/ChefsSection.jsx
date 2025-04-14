import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const chefs = [
  {
    name: 'Michale Joe',
    expertise: 'Expert in Ice Cream Making',
    image: 'https://img.freepik.com/free-photo/unpleased-young-caucasian-male-barber-wearing-glasses-wavy-hair-band-uniform-holding-looking-shaving-brush-isolated-white-background-with-copy-space_141793-90507.jpg?t=st=1744566104~exp=1744569704~hmac=581679d746b4d4f16485558c476fddc0325be2b52aad0bd71d37df2dbd3da53f&w=900',
  },
  {
    name: 'Roger B.',
    expertise: 'Expert in pastries Making',
    image: 'https://i.pinimg.com/736x/e9/26/01/e9260100ea6b091e553421c0e6092284.jpg',
  },
  {
    name: 'Mark J.',
    expertise: 'Expert in Cake Making',
    image: 'https://i.pinimg.com/736x/aa/ed/e2/aaede24978ee91fa0fb3e6f5ff146151.jpg',
  },
];

export default function ChefsSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Our Chefs <span className="block w-16 h-1 bg-yellow-400 mt-2" />
            </h2>
            <p className="text-gray-600 mt-4">
              We have awesome chefs in our team. We are also always looking for new people to join our team. Our chefs know their stuff very well.
            </p>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:bg-yellow-400 transition group relative"
            >
              {/* Image with hover social icons */}
              <div className="relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center space-x-4">
                  <a href="#" className="text-white hover:text-yellow-400 text-lg">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 text-lg">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400 text-lg">
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black">
                  {chef.name}
                </h3>
                <p className="italic text-gray-600 group-hover:text-black">
                  {chef.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
