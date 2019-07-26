import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductProvider = React.createContext();

class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      detailProducts: detailProduct
    };
  }
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(items => {
      const singleItem = { ...items };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts
    });
  };

  handleDetail = () => {
    console.log("handledetail");
  };

  handlecart = () => {
    console.log("handlecart");
  };

  render() {
    return (
      <ProductProvider.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handlecart: this.handlecart
        }}
      >
        {this.props.children}
      </ProductProvider.Provider>
    );
  }
}

const ProductConsumer = ProductProvider.Consumer;

export { Context, ProductConsumer };
