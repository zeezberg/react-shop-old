import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import ratingIcon from "../../images/rating-icon.svg";
import searchIcon from "../../images/search-btn.svg";
import clearIcon from "../../images/clear-btn.svg";
import "../../components/SwitchTheme/SwitchTheme.css";
import { ThemeContext } from "../../App";
import Header from "../../components/Header/Header";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { theme } = useContext(ThemeContext);
  console.log("Theme: ", theme);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  const searchProduct = document.getElementById("search_product");

  const searchProductsCatalog = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + searchProduct.value,
    );
    const { products } = await response.json();
    setProducts(products);
  };

  const clearProductsCatalog = () => {
    searchProduct.value = "";
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  const themeModProductContainer = `product-container-${theme}`;
  const themeModProductContainerAboutButtton = `about-product-${theme}`;

  return (
    <div className="main">
      <Header />
      <div className="search-container">
        <form className="search-form" onSubmit={searchProductsCatalog}>
          <input id="search_product" type="text" />
          <button type="submit" className="button button-search">
            <img src={searchIcon} alt="Изображение иконки товара" />
          </button>
          <button
            onClick={clearProductsCatalog}
            className="button button-clear"
          >
            <img src={clearIcon} alt="Изображение иконки товара" />
          </button>
        </form>
      </div>

      <div className="main-catalog">
        {products.map((item) => (
          // className productContainer
          <div className={themeModProductContainer}>
            {/* <div className="product-container-"> */}
            <div className="image-container">
              <img key={1} src={item.images[0]} alt="Изображение товара" />
            </div>
            <div className="info-container">
              <div>
                <span key={2} className="product-element product-title">
                  {item.title}
                </span>
                <span key={3} className="product-element product-category">
                  {item.category}
                </span>
              </div>
              <div>
                <span key={4} className="product-element product-rating">
                  {item.rating}
                  <img src={ratingIcon} alt="Изображение товара" />
                </span>
                <span key={5} className="product-element product-price">
                  ${item.price}
                </span>
              </div>

              {/* className about-product */}
              <Link
                className={themeModProductContainerAboutButtton}
                // className="button-link"
                to={`products/${item.id}`}
                // to={"product/" + item.id}
              >
                Узнать подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
