import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return (
        <div className="col-4 mb-5 w3-animate-zoom" key={index}>
               <ProductItem dataProductItem={item}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
