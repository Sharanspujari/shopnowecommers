import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductListing from "./pages/ProductListing";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route
          exact={true}
          path="/productlisting"
          element={<ProductListing />}
        />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route exact={true} path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
