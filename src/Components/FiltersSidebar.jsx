import React from 'react';

const FiltersSidebar = ({ search, setSearch, category, setCategory, priceRange, setPriceRange, rating, setRating }) => {
  return (
    <div className="w-full sm:w-64 p-4 bg-white shadow-md rounded-2xl">
      <h2 className="text-lg font-bold mb-4">Merchandise with Bakerz</h2>

      {/* Search */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Search</label>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="e.g. cupcake"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="cakes">Cakes</option>
          <option value="cookies">Cookies</option>
          <option value="bread & buns">Bread & Buns</option>
          <option value="pastries">Pastries</option>
          <option value="ice-cream">Ice Cream</option>
          <option value="pies">Pies</option>
          <option value="tray">Trays</option>
          <option value="mugs">Mugs</option>
          <option value="bags">Bags</option>
          <option value="glass">Glasses</option>
        </select>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Price Range</label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-full sm:w-1/2 p-1 border rounded-md"
          />
          <input
            type="number"
            value={priceRange[1]}
            onChange={e => setPriceRange([priceRange[0], +e.target.value])}
            className="w-full sm:w-1/2 p-1 border rounded-md"
          />
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block mb-1 font-medium">Minimum Rating</label>
        <select
          value={rating}
          onChange={e => setRating(+e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value={0}>Any</option>
          <option value={3}>3+ stars</option>
          <option value={4}>4+ stars</option>
          <option value={5}>5 stars</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersSidebar;
