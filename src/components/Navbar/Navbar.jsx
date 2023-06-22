import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalContext } from "./context";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav-bar" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">fashion store</Link>
          <button className="toggle-btn" onClick={openSidebar}>
            <MenuIcon />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              category
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>

        <div className="icons">
          <PersonOutlineOutlinedIcon />
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div>
        </div>

        {open && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
