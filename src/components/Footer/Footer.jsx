import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 item">
            <h1>Categories</h1>
            <Link className="link" to="/products/1">
              Bloouse
            </Link>
            <Link className="link" to="/products/2">
              Skirt
            </Link>
            <Link className="link" to="/products/5">
              Heels
            </Link>
            <Link className="link" to="/products/4">
              Bag
            </Link>
            <Link className="link" to="/products/3">
              Boots
            </Link>
          </div>
          <div className="col-12 col-md-3 item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="col-12 col-md-3">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
          </div>
          <div className="col-12 col-md-3">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-sm-6 ">
            <span className="logo">Fashion Store</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="col-12 col-sm-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
