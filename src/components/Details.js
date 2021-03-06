import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProducts;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-red my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
                  <img src={img} className="img-fluid" alt="product" />

                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalized" />
                  <h1> Model :{title}</h1>
                  <h4 className=" text-uppercase mt-3 mb-2">
                    made by:{" "}
                    <span className="text-muted text-uppercae">{company}</span>
                  </h4>
                  <h4 className="text blue">
                    <strong>
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold font-italic mt-3 mb-0  text-red">
                    some information about the product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/" />
                    <ButtonContainer disabled={inCart ? true : false}>
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
