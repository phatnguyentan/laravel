import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <div>
    <div id="font-size">
      <nav className="navbar-fixed-top bg-1">
        <div className="container">
          <div className="row top-header">
            <div className="col-md-2">
              <a href="/">
                <img
                  src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/moriko_text_trang.png"
                  alt="Morikohouse.com"
                  style={{ maxWidth: "100%" }}
                />
              </a>
            </div>
            <div className="col-md-4">
              <div className="pt-3">
                <form className="form-inline" method="GET" action="/search">
                  <div className="form-group pr-1">
                    <input
                      type="text"
                      className="form-control"
                      name="keyword"
                      id="topSearchKeyword"
                      placeholder="Tìm kiếm sản phẩm"
                    />
                  </div>
                  <button type="submit" className="btn btn-default">
                    Tìm kiếm
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="navbar-nav row pt-2 flex-row">
                <li className="col-md-3 nav-item">
                  <a className="nav-link" href="/home">
                    GÓP Ý <br /> PHẢN ÁNH
                  </a>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="/home">
                    GIAO HÀNG <br /> TOÀN QUỐC
                  </p>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="#">
                    ĐẶT HÀNG <br /> 0945663543
                  </p>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="#">
                    LIÊN HỆ <br />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="navbar-nav bg-2 text-dark">
      <ul className="container list-inline m-0-auto">
        <li className="list-inline-item">
          <Link to="/products">MỚI VỀ</Link>
        </li>
        <li className="list-inline-item">
          <a href="#" className="list-group-item-action">
            BÁN CHẠY
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="dropdown-toggle list-group-item-action"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            THÚ BÔNG
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">
              THÚ BÔNG
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
);
export default Header;
