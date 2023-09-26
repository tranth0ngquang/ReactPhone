import React from "react";

export default function ChildFunctional(props) {

    let {src,title,desc} = props.propsNameAll;
  return (
    <div>
      <img
        style={{ width: "50%", backgroundSize: "cover" }}
        src={src}
        alt="concac"
      />
      <div className="card text-white bg-dark">
        <img
          className="card-img-top"
          style={{ width: 100 }}
          src={src}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
}
