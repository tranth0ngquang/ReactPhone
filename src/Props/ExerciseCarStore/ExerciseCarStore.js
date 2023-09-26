import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerciseCarStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  xemChiTiet = (clickedCar) =>{ 
    this.setState({
        productDetail: clickedCar
    })
  }

  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "Steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  render() {
    return (
      <div>
        <h3 className="display-4 text-center mb-5">Danh sách xe</h3>
        <Modal content = {this.state.productDetail} />
        <ProductList changeClickedCarFunction = {this.xemChiTiet} productsData={this.products} />
      </div>
    );
  }
}
