import React, { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const depthLevel = 0;
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">fashion store</Link>
        <button className="nav-toggle" onClick={toggleLinks}>
          <MenuIcon />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <div className="links" ref={linksRef}>
          <Link to="/">Home</Link>

          <Link to="/">About</Link>

          <Link to="/">Contact</Link>

          <div
            className="dropdown"
            // aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <span>Store</span>

            <span className="arrow" />
          </div>
          <div className={`dropdown-${dropdown ? "show" : "close"}`}>
            <Link to="/featured-products">featured Products</Link>
            <Link to="/trending-products">Trending Products</Link>

            <div
              className="dropdown"
              // aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setSubDropdown((prev) => !prev)}
              to="/"
            >
              <span>Categories&raquo;</span>
            </div>

            <div className={`dropdown-${subDropdown ? "show" : "close"}`}>
              <Link to="/products/1">blouse</Link>
              <Link to="/products/2">skirt</Link>
              <Link to="/products/5">heels</Link>
              <Link to="/products/4">bag</Link>
              <Link to="/products/3">boots</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="icons">
        <PersonOutlineOutlinedIcon />
        <div className="cartIcon" onClick={() => setOpen(!open)}>
          <ShoppingCartOutlinedIcon />
          <span>{products.length}</span>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
