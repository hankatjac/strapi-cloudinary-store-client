import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../context";
import sublinks from "./data";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <CloseIcon />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Link key={index} to={url} onClick={closeSidebar}>
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
        <div className="sidebar-icons">
          <PersonOutlineOutlinedIcon />
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
          </div>
        </div>
        {open && <Cart />}
      </aside>
    </div>
  );
};

export default Sidebar;
