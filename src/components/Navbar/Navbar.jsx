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
  const products = useSelector((state) => state.cart.products);

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

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
        <Link className="link" to="/">
          fashion store
        </Link>
        <button className="nav-toggle" onClick={toggleLinks}>
          <MenuIcon />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <div className="links" ref={linksRef}>
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/">
            About
          </Link>

          <Link className="link" to="/">
            Contact
          </Link>

          <Link className="link" to="/">
            Stores
          </Link>
        </div>
      </div>

      
        <div className="social-icons">
          <div className="icons">
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      

      {/* <div className="item">
            <Link className="link" to="/products/1">
              blouse
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              skirt
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              heels
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              bag
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              boots
            </Link>
          </div> */}

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
