import React, { Component } from "react";

export default class Child extends Component {
    
  renderThongSoCoThe = () => {
    let { chiso } = this.props.propsNameAll;
    return chiso.map((thongso, index) => {
      return (
        <button className="btn btn-light ms-3 me-3" key={index}>
          Chieu cao qua cac thoi ky: {thongso}
        </button>
      );
    });
  };

  renderTSCT2 = () =>{
    let { chiso } = this.props.propsNameAll;
    return <div>
        <button className="btn-success btn">Chiều dài: {chiso[1]}</button>
        <button className="btn-success btn">Chiều rộng:  {chiso[2]}</button>
        <button className="btn-success btn">Chiều cao:  {chiso[3]}</button>
        <button className="btn-success btn">Chiều dọc:  {chiso[0]}</button>

    </div>
  }

  renderChiSoSucManh = () => {
    let powerChild = this.props.propsPower;
    return powerChild.map((valueOfArray, index) => {
        return <div>
            <button className="btn btn-light">Sức mạnh lúc chap {index}</button>
            <button className="btn btn-light">Sức mạnh là {valueOfArray}</button>
        </div>
    });
  };
  render() {
    return (
      <div>
        <img
          style={{ width: "50%", backgroundSize: "cover" }}
          src={this.props.propsNameAll.src}
          alt="concac"
        />
        <div className="card text-white bg-dark">
          <img
            className="card-img-top"
            style={{ width: 100 }}
            src={this.props.propsNameAll.src}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.propsNameAll.title}</h4>
            <p className="card-text">{this.props.propsNameAll.desc}</p>
            {this.renderThongSoCoThe()}
            <div className="m-5"></div>

            {this.renderChiSoSucManh()}

            {this.renderTSCT2()}

            <button onClick={ () => {
                this.props.propsFunction('Thong bao da dc hien haha')
            }

            } className="btn btn-danger">Click to show thong bao</button>
          </div>
        </div>
      </div>
    );
  }
}
