import React from "react";

const Menu = () => {
  return (
    <div className="fonnt-poppins mt-20">

      <div className="relative bg-black">
        <img
          src="https://plus.unsplash.com/premium_photo-1666675707746-ec5f0e689d97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Menu Banner"
          className="w-full h-[300px] object-cover opacity-40r"
        />
        <div className="absolute inset-0 "></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Menu
        </h1>
      </div>


      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Our Price List</h2>
        <hr className="w-12 border-t-2 border-gray-300 mx-auto mb-4" />
        <p className="text-gray-600 italic max-w-2xl mx-auto">
          But in order that we may explain the whole matter, how all this mistaken idea of denouncing pleasure and praising pain arose, we must look into the source from which it originated
        </p>
      </div>


      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          ["Double Chocolate Pie", 8.99],
          ["Zabaglione Cake", 12.99],
          ["Blueberry Muffin", 8.99],
          ["Box of Delight", 7.99],
          ["Classic French Croissant", 6.99],
          ["Macarons & Tea", 10.99],
          ["Fried Egg Sandwich", 8.99],
          ["Multigrain Hot Cake", 11.99],
          ["Branch Special Cake", 8.99],
          ["Bialy Egg Sandwich with Cake", 6.99],
          ["Strawberry Sweet Cake", 8.99],
          ["Cupcake of Vanela", 8.99],
          ["Classic Chocolate Cake", 20.99],
        ].map(([title, price], index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{title}</h3>
              <span className="text-yellow-500 font-bold text-md">${price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-600">
              Chocolate puding, vanilla, fruite rasberry jam milk
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://images.unsplash.com/photo-1597528662465-55ece5734101?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Macarons" className="w-full h-[200px] object-cover rounded" />
        <img src="https://images.unsplash.com/photo-1679812000030-44c07cd1f2bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Baking" className="w-full h-[200px] object-cover rounded" />
        <img src="https://plus.unsplash.com/premium_photo-1716647126905-3acaec3fc2e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Green Cake" className="w-full h-[200px] object-cover rounded" />
      </div>
    </div>
  );
};

export default Menu;
