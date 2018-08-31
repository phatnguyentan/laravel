import React from "react";
import "./styles.css";

const Slider = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide container p-3"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      />
      <li data-target="#carouselExampleIndicators" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          className="d-block"
          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
          alt="First slide"
          style={{ height: "341px", width: "1140px" }}
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block"
          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
          alt="Second slide"
          style={{ height: "341px", width: "1140px" }}
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block"
          src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg"
          alt="Second slide"
          style={{ height: "341px", width: "1140px" }}
        />
      </div>
      {/* <div className="carousel-item">
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/341.1x1140"
          alt="Third slide"
        />
      </div> */}
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);
export default Slider;
