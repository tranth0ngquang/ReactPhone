import React, { Component } from "react";

export default class CartModal extends Component {
  renderCart = () => {
    let { popUpGioHang } = this.props;
    return popUpGioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: 75, height: 75 }}
              src={item.hinhAnh}
              alt="cc"
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button className="btn btn-success" onClick={() => {
              this.props.tangGiamSoLuong(item.maSP,-1)
            }}>
              -
            </button>
            {item.soLuong}
            <button className="btn btn-success" onClick={() => {
                this.props.tangGiamSoLuong(item.maSP,1)
            }}>
              +
            </button>
          </td>
          <td>{item.donGia.toLocaleString()}</td>
          <td>{(item.donGia * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () =>{
    let tongTien = 0;
    let {popUpGioHang} = this.props;

    for (let i=0;i<popUpGioHang.length;i++){
      let motSanPham = popUpGioHang[i];
      tongTien += motSanPham.soLuong * motSanPham.donGia;
    }
    return tongTien.toLocaleString();
  }

  render() {
    let { popUpGioHang } = this.props;
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modalId"
            tabIndex={-1}
            data-bs-backdrop="static-false"
            data-bs-keyboard="true"
            role="dialog"
            aria-labelledby="modalTitleId"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
              role="document"
              style={{ minWidth: 1000 }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitleId">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="table-responsive">
                    <table className="table table-default">
                      <thead>
                        <tr>
                          <th scope="col">Mã sản phẩm</th>
                          <th scope="col">Hình Ảnh</th>
                          <th scope="col">Tên sản phẩm</th>
                          <th scope="col">Số lượng</th>
                          <th scope="col">Đơn giá</th>
                          <th scope="col">Thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>{this.renderCart()}</tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="5"></td>
                          <td>Tổng tiền</td>
                          <td>{this.tinhTongTien()}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
