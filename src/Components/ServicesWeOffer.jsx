// components/ServicesWeOffer.jsx

import React from 'react';
import {
  FaBirthdayCake,
  FaTruck,
  FaListAlt,
} from 'react-icons/fa';
import { GiCupcake, GiChefToque } from 'react-icons/gi';
import { PiCakeBold } from 'react-icons/pi';

const services = [
  {
    icon: <FaBirthdayCake size={40} />,
    title: 'Cookies Cakes',
    description: 'We offer the best cookies cakes. Lorem Ipsum is simply my text of the printing and Ipsum.',
  },
  {
    icon: <GiCupcake size={40} />,
    title: 'Tasty Cupcakes',
    description: 'Our Tasty cupcakes are so tasty that if you taste once you will fall in love instantly.',
  },
  {
    icon: <PiCakeBold size={40} />,
    title: 'Wedding Cakes',
    description: 'Check out our tasty wedding cakes. Ipsum is simply my text of the printing.',
  },
  {
    icon: <GiChefToque size={40} />,
    title: 'Awesome Recipes',
    description: 'Ducimus qui blanditiis praesentium dsaf voluptatum deleniti atque corrupti.',
  },
  {
    icon: <FaListAlt size={40} />,
    title: 'Menu Planner',
    description: 'Menu Planner is simply my text of the printing and Ipsum is simply text of the Ipsum is simply.',
  },
  {
    icon: <FaTruck size={40} />,
    title: 'Home Delivery',
    description: 'We provide free home delivery. Printing and Ipsum is simply text of the Ipsum is simply.',
  },
];

export default function ServicesWeOffer() {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Services We offer</h2>
        <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-dashed border-gray-300  p-6 flex items-start gap-4 hover:bg-yellow-400 transition-colors duration-300"
          >
            <div className="text-black">{service.icon}</div>
            <div>
              <h3 className="font-bold text-lg mb-1">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
