import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Customize from "./pages/Customize";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;