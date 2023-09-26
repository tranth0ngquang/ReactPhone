import React, { Component } from "react";
import Parents from "./Parents";
import DanhSachSanPham from "./DanhSachSanPham";

export default class DemoProps extends Component {
  refParent = React.createRef();

  changeTitle = () => {
    this.refParent.current.changeTitle();
  };

  render() {
    return (
      <div>
        <button onClick={this.changeTitle}>click de</button>
        <Parents ref={this.refParent}>
          <DanhSachSanPham />
          <h3>Dkm vkl djtt me m ? </h3>
          <DanhSachSanPham />
        </Parents>
      </div>
    );
  }
}
