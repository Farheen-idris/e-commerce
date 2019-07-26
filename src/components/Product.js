import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 max=auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container py-5 "
            onClick={() => console.log("you clicked me on the img container")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("Added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-captialize mb-0" disabled>
                  {" "}
                  InCart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.03 rem solid grey;
      box-shadow: 2px 2px 6px 0px black;
    }

    .card-footer {
      background: grey;
    }
    .card-img-top {
      transform: scale(1.1);
    }

    
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container {
    overflow: hidden;
    position: relative;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.5rem;
    color: white;
    background: maroon;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transition: all 1s linear;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

.cart-btn:hover{
     cursor: pointer;
  }
}
`;
