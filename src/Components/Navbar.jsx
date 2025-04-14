import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative">
      <Link to="/cart">
        <FiShoppingBag className="text-xl cursor-pointer" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

const Dropdown = ({ label, items, name, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === name;

  const handleToggle = () => {
    setOpenDropdown(isOpen ? '' : name);
  };

  const handleClose = () => {
    setOpenDropdown('');
  };

  return (
    <div className="relative group">
      <button
        onClick={handleToggle}
        className="hover:text-yellow-500 transition duration-300 font-medium flex items-center gap-1"
      >
        {label}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isOpen && (
        <div className="absolute flex flex-col bg-white shadow-md rounded-md mt-2 min-w-[180px] z-10">
          {items.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={handleClose}
              className="px-4 py-2 text-sm hover:bg-yellow-100 hover:text-yellow-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Europe/London',
      };
      setCurrentTime(now.toLocaleTimeString('en-GB', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? '' : name));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown('');
  };

  const isActive = (path) => location.pathname === path;

  const aboutLinks = [
    { label: 'Services', link: '/service' },
    { label: 'Gallery Classic', link: '/gallery' },
   
  ];

  const listLinks = [
    { label: 'Cakes', link: '/cakes' },
    { label: 'Pastries', link: '/pastries' },
    { label: 'Cookies', link: '/cookies' },
    { label: 'Pies', link: '/pies' },
    { label: 'Ice Cream', link: '/ice-cream' },
    { label: 'Bread & Buns', link: '/bread-buns' },
  ];

  const merchLinks = [
    { label: 'Bag', link: '/bag' },
    { label: 'Glass', link: '/glass' },
    { label: 'Mugs', link: '/mugs' },
    { label: 'Trays', link: '/trays' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black text-white text-sm text-center px-4 py-1">
        OPEN NOW FROM 11:00 AM To 7:00 PM ({currentTime})
      </div>

      <nav className="bg-white shadow-md h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white flex justify-between items-center pt-2">
            <Link to="/" className="flex items-center gap-2 text-xl font-poppins text-black">
              <img src="src/public/assets/4860511_54307-removebg-preview.png" alt="Logo" className="w-20 h-16" />
              Bakerz Bite
            </Link>

            <div className="hidden md:flex gap-6 text-black items-center">
              <Link to="/" className={isActive('/') ? 'text-yellow-500 font-poppins' : ''}>Home</Link>
             
              <Link to="/menu" className={isActive('/menu') ? 'text-yellow-500 font-poppins' : ''}>Menu</Link>

              <Dropdown
                label="List"
                items={listLinks}
                name="list"
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <Link to="/blog" className={isActive('/blog') ? 'text-yellow-500 font-poppins' : ''}>Blogs</Link>
              <Link to="/shop" className={isActive('/shop') ? 'text-yellow-500 font-poppins' : ''}>Shop</Link>
              <Dropdown
                label="Merchandise"
                items={merchLinks}
                name="merch"
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <Dropdown
                label="About Us"
                items={aboutLinks}
                name="about"
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />

              <Link to="/contactus" className={isActive('/contactus') ? 'text-yellow-500 font-poppins' : ''}>Contact Us</Link>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                {mobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
              </button>
              <Link to="/login"><FiUser className="text-xl cursor-pointer" /></Link>
              <CartIcon />
            </div>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2 text-sm bg-white shadow-md">
            <Link to="/" onClick={closeMobileMenu} className={isActive('/') ? 'text-yellow-500' : ''}>Home</Link>
            <Link to="/cakes" onClick={closeMobileMenu} className={isActive('/cakes') ? 'text-yellow-500' : ''}>Cakes</Link>
            <Link to="/menu" onClick={closeMobileMenu} className={isActive('/menu') ? 'text-yellow-500' : ''}>Menu</Link>

            <button
              onClick={() => toggleDropdown('list')}
              className="flex justify-between items-center w-full font-medium py-2"
            >
              List {openDropdown === 'list' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div className={`pl-4 transition-all duration-300 overflow-hidden ${openDropdown === 'list' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {listLinks.map((item) => (
                <Link key={item.label} to={item.link} onClick={closeMobileMenu} className="block py-1">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/blog" onClick={closeMobileMenu} className={isActive('/blog') ? 'text-yellow-500' : ''}>Blogs</Link>
            <Link to="/shop" onClick={closeMobileMenu} className={isActive('/shop') ? 'text-yellow-500' : ''}>Shop</Link>
            <button
              onClick={() => toggleDropdown('merch')}
              className="flex justify-between items-center w-full font-medium py-2"
            >
              Merchandise {openDropdown === 'merch' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div className={`pl-4 transition-all duration-300 overflow-hidden ${openDropdown === 'merch' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {merchLinks.map((item) => (
                <Link key={item.label} to={item.link} onClick={closeMobileMenu} className="block py-1">
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => toggleDropdown('about')}
              className="flex justify-between items-center w-full font-medium py-2"
            >
              About Us {openDropdown === 'about' ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div className={`pl-4 transition-all duration-300 overflow-hidden ${openDropdown === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {aboutLinks.map((item) => (
                <Link key={item.label} to={item.link} onClick={closeMobileMenu} className="block py-1">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link to="/contactus" onClick={closeMobileMenu} className={isActive('/contactus') ? 'text-yellow-500' : ''}>Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
