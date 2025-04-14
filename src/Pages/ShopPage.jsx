import React, { useEffect, useState } from 'react';
import FiltersSidebar from '../Components/FiltersSidebar';
import BakeryCard from '../Components/BakeryCard';
import ProductsData from '../data/products.json'; // Assuming you have a JSON file with product data

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setProducts(ProductsData); 
    setFiltered(ProductsData); 
  }, []);

  useEffect(() => {
    let result = products
      .filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter(p => (category === 'all' ? true : p.category === category))
      .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter(p => p.rating?.rate >= rating);

    setFiltered(result);
  }, [search, category, priceRange, rating, products]);

  return (
    <div className="flex flex-col sm:flex-row bg-yellow-50 min-h-screen p-4 mt-24 ">
      <FiltersSidebar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        rating={rating}
        setRating={setRating}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ml-4">
        {filtered.map(item => (
          <BakeryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
