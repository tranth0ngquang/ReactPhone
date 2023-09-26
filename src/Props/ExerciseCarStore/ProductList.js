import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.productsData.map((item, index) => {
      return (
        <div key={index} className="col-3">
          <Product item={item}  changeClickedCarFunction= {this.props.changeClickedCarFunction}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderProductItem()}</div>
      </div>
    );
  }
}
