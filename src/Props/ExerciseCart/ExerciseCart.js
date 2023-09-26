import React, { Component } from "react";
import CartModal from "./CartModal";
// import ProductList from "../ExerciseCarStore/ProductList";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    popUpGioHang: [],
  };

  themVaoGioHang = (spDuocCLick) => {
    let spGioHang = {
      maSP: spDuocCLick.maSP,
      tenSP: spDuocCLick.tenSP,
      donGia: spDuocCLick.giaBan,
      soLuong: 1,
      hinhAnh: spDuocCLick.hinhAnh,
    };

    //tìm xem sp đã có trog giỏ hàng chưa
    let index = this.state.popUpGioHang.findIndex(
      (checkSPgiohang) => checkSPgiohang.maSP === spGioHang.maSP
    );

    if (index !== -1) {
      this.state.popUpGioHang[index].soLuong += 1;
    } else {
      this.state.popUpGioHang.push(spGioHang);
    }

    // push vào this.state.giohang
    // this.state.popUpGioHang.push(spGioHang);
    this.setState({
      popUpGioHang: this.state.popUpGioHang,
    });
  };

  xoaGioHang = (maSP) => {
    let index = this.state.popUpGioHang.findIndex(
      (checkSPgiohang) => checkSPgiohang.maSP === maSP
    );
    if (index !== -1) {
      this.state.popUpGioHang.splice(index, 1);
    }

    this.setState({
      popUpGioHang: this.state.popUpGioHang,
    });
  };

  //   xoaGioHang = (maSP) => {
  //     //Thực hiện tính năng xóa giỏ hàng
  //     // console.log(maSP);

  //     let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
  //     if (index !== -1) {
  //         this.state.gioHang.splice(index, 1);
  //     }

  //     this.setState({
  //         gioHang: this.state.gioHang
  //     })

  //     //this.setState ....
  // }

  tinhTongSoLuong = () =>{
    let tongSoLuong = 0;
    for (let i=0;i<this.state.popUpGioHang.length;i++){
      let sanPham = this.state.popUpGioHang[i];
      tongSoLuong +=sanPham.soLuong;
    }
    return tongSoLuong;
  }

  tangGiamSoLuong = (maSP,number) =>{
    let soLuongHang = this.state.popUpGioHang;

    let index = soLuongHang.findIndex(spTrongGioHang => spTrongGioHang.maSP === maSP)
    if (index !== -1){
      if (soLuongHang[index].soLuong <= 1 && number== -1){
        alert('Số lượng tối thiểu là 1')
        return;
      }

      soLuongHang[index].soLuong += number;
    }

    this.setState({
      soLuongHang:soLuongHang
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">Bài tập giỏ hàng</h3>
        <button className="btn btn-success">acb</button>
        <div className="text-end">
          <span
            data-bs-toggle="modal"
            style={{ cursor: "pointer" }}
            data-bs-target="#modalId"
          >
            <i class="fa fa-shopping-cart"></i>({this.tinhTongSoLuong()}) Giỏ hàng
          </span>
        </div>
        <CartModal
          tangGiamSoLuong ={this.tangGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          popUpGioHang={this.state.popUpGioHang}
        />
        <ProductListEXC themVaoGioHang={this.themVaoGioHang} />
      </div>
    );
  }
}
