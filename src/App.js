import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Products from "./components/Products/Products";

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Contact from "./components/Contact/Contact";

import { AppProvider } from "./context";
import Navbar from "./components/Navbar/Navbar";
const Layout = () => {
  return (
    <div className="app">
      <AppProvider>
        <Navbar />
        <Outlet />
      </AppProvider>
      <Contact />
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/featured-products",
        element: <FeaturedProducts type="featured" />,
      },
      {
        path: "/trending-products",
        element: <FeaturedProducts type="trending" />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
