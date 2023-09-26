import React, { Component } from "react";

export default class ProductItemEXC extends Component {
  
  anifunction = () =>{
    return <div className="d-none animate__animated animate__heartBeat"></div>
  }
  render() {
    let { propsSanPham } = this.props;


    return (
      <div>
        <div className="card text-white bg-primary ">
          <img style={{height:400}} className="card-img-top img-fluid" src={propsSanPham.hinhAnh} alt="Title" />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{propsSanPham.tenSP}</h4>
            <p className="card-text text-center">{propsSanPham.giaBan.toLocaleString()}</p>
            <button className="btn btn-success  " onClick={()=>{this.props.themVaoGioHang(propsSanPham)}}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
