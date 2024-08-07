import React , { useState } from "react";

function Card(props) {
  let [image,setImage] = useState(props["one"]["image"])

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="/public/IMG_20210110_065610 - Copy.jpg" className="card-img-top" alt="..." />
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Chitrarekha Voguish Sarees </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;