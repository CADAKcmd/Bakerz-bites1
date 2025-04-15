import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Mastering the Art of Sourdough Bread at Home",
    image: "https://i.pinimg.com/736x/bf/9d/10/bf9d107319611864038dd68eb6db87cc.jpg",
    date: "April 10, 2025",
    content: "Learn how to bake authentic sourdough bread with a crunchy crust and soft interior using traditional techniques.",
  },
  {
    title: "Creative Cake Decorating Ideas for Every Occasion",
    image: "https://i.pinimg.com/736x/a4/3c/a7/a43ca7b9860391220ee64bfcd6d2d630.jpg",
    date: "April 8, 2025",
    content: "Explore fun and professional cake decorating tips to make birthdays, weddings, and holidays even sweeter.",
  },
  {
    title: "Secrets to Baking the Perfect Cookie",
    image: "https://i.pinimg.com/736x/53/c2/33/53c233f638b26e7c96a2f6e9a4ae219d.jpg",
    date: "April 5, 2025",
    content: "From chewy chocolate chip to crunchy biscotti, get expert tips on how to bake cookies that everyone will love.",
  },
];

const LatestBlogSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <Link to='/blog'>
           <h2 className="text-4xl font-bold text-gray-900 hover:text-yellow-400 mb-2">Bakery Blog</h2>
          </Link>
          <p className="italic text-gray-500">
            Get inspired with our latest baking guides, tips, and delicious ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md border hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="bg-white p-5 flex flex-col h-full">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
