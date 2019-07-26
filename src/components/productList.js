import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title.js";

import { ProductConsumer } from "./Context";

export default class productList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-4">
            <div className="container">
              <Title name="Our" title="Mobile Store" />
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
