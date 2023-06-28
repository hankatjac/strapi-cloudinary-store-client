import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useGlobalContext } from "../../context";

const Product = () => {
  const { closeSubmenu } = useGlobalContext();

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product" onMouseOver={closeSubmenu}>
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="container">
            <div className="row gap-2">
              <div className="col-12 col-md-3">
                <div>
                  <img
                    className="col-6 col-md-12 img-sel"
                    src={data?.attributes?.img?.data?.attributes?.url}
                    alt=""
                    onClick={(e) => setSelectedImg("img")}
                  />
                  <img
                    className="col-6 col-md-12 img-sel"
                    src={data?.attributes?.img2?.data?.attributes?.url}
                    alt=""
                    onClick={(e) => setSelectedImg("img2")}
                  />
                </div>
              </div>
              <div className="col-12 col-md-4 mainImg">
                <img
                  src={data?.attributes[selectedImg]?.data?.attributes?.url}
                  alt=""
                />
              </div>

              <div className="col-12 col-md-4">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  {quantity}
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>
                <button
                  className="add"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity,
                      })
                    )
                  }
                >
                  <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links">
                  <div className="item">
                    <FavoriteBorderIcon /> ADD TO WISH LIST
                  </div>
                  <div className="item">
                    <BalanceIcon /> ADD TO COMPARE
                  </div>
                </div>
                <div className="info">
                  <span>Vendor: Polo</span>
                  <span>Product Type: T-Shirt</span>
                  <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                  <span>DESCRIPTION</span>
                  <hr />
                  <span>ADDITIONAL INFORMATION</span>
                  <hr />
                  <span>FAQ</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
