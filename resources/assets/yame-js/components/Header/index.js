import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <div>
    <div id="font-size">
      <nav className="navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <a href="/">
                <img
                  src="http://localhost:5050/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/39080687_276196499827542_5762063699804160_n.jpg"
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
                    GÓP Ý <br /> THAN PHIỀN
                  </a>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="/home">
                    GIAO HÀNG <br /> TOÀN QUỐC
                  </p>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="#">
                    ĐẶT HÀNG <br /> (028) 7307 1441
                  </p>
                </li>
                <li className="col-md-3 nav-item">
                  <p className="nav-link text-white" href="#">
                    BẢO HÀNH <br /> 365 NGÀY
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="navbar-nav bg-dark-2">
      <ul className="container list-inline">
        <li className="list-inline-item">
          <Link to="/products">Mới Về</Link>
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
