import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductListing from "./pages/ProductListing";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/productlisting" element={<ProductListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
