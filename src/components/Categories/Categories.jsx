import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col">
                <div className="description">
                  <img
                    src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link className="link" to="/products/1">
                      blouse
                    </Link>
                  </button>
                </div>

                <div className="description">
                  <img
                    src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/2" className="link">
                      skirt
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="description">
                  <img
                    className="right"
                    src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/5" className="link">
                      Heels
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col">
                <div className="description">
                  <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/4" className="link">
                      Bag
                    </Link>
                  </button>
                </div>
                <div className="description">
                  <img
                    src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/3" className="link">
                      Boots
                    </Link>
                  </button>
                </div>
              </div>

              <div className="col">
                <div className="description">
                  <img
                    className="right"
                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Jeans
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
