import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import PageNotFound from './Pages/PageNotFound';
import Menu from './Pages/Menu';
import List from './Pages/List';
import Merchandise from './Pages/Merchandise';
import Cakes from './Pages/Cakes';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Cookies from './Pages/Cookies';
import Glass from './Pages/Glass';
import IceCream from './Pages/IceCream';
import Gallery from './Pages/Gallery';
import Trays from './Pages/Trays';
import Pastries from './Pages/Pastries';
import Pies from './Pages/Pies';
import Mugs from './Pages/Mugs';
import BreadAndBuns from './Pages/BreadandBuns';
import Bag from './Pages/Bag';
import ShopPage from './Pages/ShopPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckOutPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        {/* Layout as a parent route with nested children */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Cakes" element={<Cakes />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="List" element={<List />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Merchandise" element={<Merchandise />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
          {/* Add more routes as needed */}
          <Route path="service" element={<Services />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="glass" element={<Glass />} />
          <Route path="ice-cream" element={<IceCream />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="trays" element={<Trays />} />
          <Route path="pastries" element={<Pastries />} />
          <Route path="pies" element={<Pies />} />
          <Route path="mugs" element={<Mugs />} />
          <Route path="bread-buns" element={<BreadAndBuns />} />
          <Route path="bag" element={<Bag />} />
          {/* shop details */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
