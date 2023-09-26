import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={item.img} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">{item.price}</p>
            <button
              data-bs-toggle="modal"
              data-bs-target="#modalId"
              className="btn btn-success"
              onClick={() => {
                this.props.changeClickedCarFunction(item);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
