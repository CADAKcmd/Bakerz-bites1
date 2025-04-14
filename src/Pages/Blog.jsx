import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Baking the Perfect Cupcake',
    date: 'April 11, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/09/61/25/09612506b117740efcd41f7d8ca03d72.jpg',
    summary: 'Learn the secrets behind fluffy and moist cupcakes that melt in your mouth.',
    fullText:
      ' From ingredient selection to oven temperature, everything you need to know is packed in this guide. Discover how to create bakery-style cupcakes at home with ease. Plus, we’ll show you decorating tricks to make your cupcakes stand out at any party or gathering.',
  },
  {
    id: 2,
    title: 'The Art of Bread Making',
    date: 'April 10, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/cc/3f/27/cc3f27d9b72cb9bb3f764bc8fd5d2d9a.jpg',
    summary: 'Bread baking is a combination of science and art, and we break it down for you.',
    fullText:
      ' Whether you prefer sourdough or whole wheat, our step-by-step instructions help you bake the perfect loaf every time. Learn about fermentation, shaping, and scoring techniques to get bakery-quality results in your kitchen.',
  },
  {
    id: 3,
    title: 'Pastry Perfection',
    date: 'April 9, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/73/c9/a8/73c9a8028b583d506a36809faaf1ff77.jpg',
    summary: 'Master the technique of making buttery, flaky pastries from scratch.',
    fullText:
      ' Our guide includes everything from puff pastry to Danish doughs, ensuring your pastries come out just like the pros. We also cover temperature tricks, lamination tips, and egg wash secrets.',
  },
  {
    id: 4,
    title: 'Chocolate Cake Wonders',
    date: 'April 8, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/9a/9d/00/9a9d001f0337febc01ece42815e62781.jpg',
    summary: 'Dive into the world of chocolate cakes with our deliciously rich recipes.',
    fullText:
      ' Learn tips for enhancing chocolate flavor, achieving the perfect crumb, and creating a luscious frosting. From classic layer cakes to molten lava cakes, we have your chocolate cravings covered.',
  },
  {
    id: 5,
    title: 'Decorating Like a Pro',
    date: 'April 7, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/c7/bf/c0/c7bfc04361e84a821e51d218a99d05fb.jpg',
    summary: 'Take your baked goods to the next level with professional decorating techniques.',
    fullText:
      ' From buttercream flowers to fondant figurines, we show you how to turn your desserts into edible art. Learn how to use piping tips, coloring gels, and stencils like a cake artist.',
  },
  {
    id: 6,
    title: 'Secrets of Sourdough',
    date: 'April 6, 2025',
    category: 'Bakery Tips',
    author: 'Elitedinesh',
    image: 'https://i.pinimg.com/736x/82/d8/a8/82d8a8a7e72a7c149321fbc17792f948.jpg',
    summary: 'Unlock the ancient art of sourdough and discover flavor-rich loaves.',
    fullText:
      ' Learn how to start and maintain your own sourdough starter, the science behind natural fermentation, and tricks to get that crispy crust and soft interior every time.',
  },
];

export default function BlogPage() {
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 mt-20">
      {/* Top banner */}
      <div className="relative h-72 w-full bg-yellow-300 flex items-center justify-center text-white text-center">
        <img
          src="https://i.pinimg.com/originals/6e/88/30/6e883015e6f0bd5748ce5aa2ac3cf93c.jpg"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="relative text-4xl font-bold uppercase tracking-wide drop-shadow-md">
          Our Blog
        </h1>
      </div>

      {/* Blog posts */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.02]"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-yellow-500 text-sm font-semibold mb-1">
                {post.date} &middot; {post.category}
              </p>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">
                {post.summary}
                {expandedPost === post.id && post.fullText}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => toggleReadMore(post.id)}
                  className="text-yellow-500 hover:text-yellow-600 text-sm font-semibold"
                >
                  {expandedPost === post.id ? 'Show Less ▲' : 'Read More ▼'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
