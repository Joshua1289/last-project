import Register from "./Register";
import Login from "./login-component/login";
import Home from "./pages/home-page/home";
import About from "./pages/home-page/about";
import Contact from "./pages/home-page/contact";
import Order from "./pages/home-page/order";
import Search from "./search/search";
import Shop from "./pages/home-page/shop";
import Cart from "./cart/cart";
import Checkout from "./checkout/checkout";
import{BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App