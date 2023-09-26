import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { propsSanPham } = this.props;
    return (
      <div>
        <div className="card text-center" style={{ height: "600px" }}>
          <img
            className="card-img-top img-fluid"
            src={propsSanPham.hinhAnh}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">{propsSanPham.tenSP}</h4>
            <p className="card-text">{propsSanPham.giaBan.toLocaleString()}</p>
            <button className="btn btn-success text-white" onClick={() => {
            this.props.propsFunction(propsSanPham)
            }}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
