import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ratingIcon from "../../images/rating-icon.svg";
// import ProductsList from "../ProductsList/ProductsList";

const ProductDetails = (props) => {
  const params = useParams();
  console.log("Params: ", params);

  const [current, setCurrent] = useState(null);

  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products/" + params.id);
    const data = await response.json();
    setCurrent(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!current) {
    return (
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    );
  } else if (current) {
    return (
      <div className="main-about-container">
        <Link className="back-to-catalog" to={`/`}>
          Вернутся в каталог
        </Link>
        <div className="product-about-container">
          <div className="product-about-image">
            <img src={current.images[0]} className="about-image-main"></img>
            <div className="image-other-container">
              <img
                src={current.images[1]}
                className="about-image-other-one"
              ></img>
              <img
                src={current.images[2]}
                className="about-image-other-two"
              ></img>
              <img
                src={current.images[3]}
                className="about-image-other-three"
              ></img>
              <img
                src={current.images[4]}
                className="about-image-other-four"
              ></img>
            </div>
          </div>
          <div className="product-about-info">
            <h1>Подробнее о товаре</h1>
            <table>
              <tr>
                <td>Идентификатор:</td>
                <td></td>
                <td>{current.id}</td>
              </tr>
              <tr>
                <td>Наименование:</td>
                <td></td>
                <td>{current.title}</td>
              </tr>
              <tr>
                <td>Описание:</td>
                <td></td>
                <td>{current.description}</td>
              </tr>
              <tr>
                <td>Скидка на товар</td>
                <td></td>
                <td>{current.discountPercentage}%</td>
              </tr>
              <tr>
                <td>Рейтинг</td>
                <td></td>
                <td>
                  {current.rating} <img src={ratingIcon} />
                </td>
              </tr>
              <tr>
                <td>В наличии:</td>
                <td></td>
                <td>{current.stock} ед</td>
              </tr>
              <tr>
                <td>Бренд:</td>
                <td></td>
                <td>{current.brand}</td>
              </tr>
              <tr>
                <td>Категория:</td>
                <td></td>
                <td>{current.category}</td>
              </tr>
              <tr>
                <td>Цена:</td>
                <td></td>
                <td>${current.price}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // const product = JSON.parse(localStorage.getItem("productAbout"));
  // console.log("product: ", product);
};

ProductDetails.propTypes = {};

export default ProductDetails;

// const ProductDetails = () => {
//   // Logic

//   return (
//     //Razmetka
//   )
// };

// export default ProductDetails;
