import React, { Component } from "react";
// import Child from "./Child";
// import ChildFunctional from "./ChildFunctional";

export default class Parents extends Component {
  // objectCard = {
  //   src: "https://images6.fanpop.com/image/photos/36200000/Yakushi-Kabuto-image-yakushi-kabuto-36286034-605-750.jpg",
  //   title: "Day la anh kabuto",
  //   desc: "Kabuto o lang la' va la ninja cap S",
  //   chiso: [180,56,198,200]
  // };

  // power = [10,20,30,40,50,100];

  // showInfor = (name) =>{
  // alert(name)
  // }


  state = {
    title: 'tao la 1'
  }

  changeTitle = () =>{
    this.setState({
      title:'Khai'
    })
  }
  render() {
    return (
      <div>

      <h1>{this.state.title}</h1>


        {/* {this.props.children.map((item, index) => {
          return (
            <div>
              {item}
              <h3>{index}</h3>
            </div>
          );
        })} */}
        {/* <h3>Danh sách sản phẩm</h3> */}
        {/* <this.props.component/> */}
        {/* <Child propsNameAll={this.objectCard}  propsPower={this.power}  propsFunction={this.showInfor}/>
        <ChildFunctional propsNameAll={this.objectCard} propsPower={this.power} />  */}

        {/* <Child propNameSource={'https://i.pinimg.com/originals/05/5a/1d/055a1de0f1d3c598363b313d61696ecd.gif'} propNameTitle={'Day la anh itachi'} propNameDesc={'Itachi la th l an hen rat rac =))'} />
        <ChildFunctional propNameSource={'https://downloadwap.com/thumbs2/wallpapers/p2/new/15/hkASpO7J.jpg'} propNameTitle='Day la De nhi' propNameDesc='Anti Uchiha Chúa'/> */}
      </div>
    );
  }
}
