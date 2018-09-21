import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }
  componentWillMount() {
    this.props.context.api
      .get(`/categories?filter[where][type]=product`)
      .then(res => {
        this.setState({ categories: res.data });
      });
  }

  render() {
    return (
      <div>
        <div id="font-size">
          <nav className="navbar-fixed-top bg-1">
            <div className="container">
              <div className="row top-header">
                <div className="col-md-2">
                  <a href="/">
                    <img
                      src="/storage/images/moriko/moriko_text_trang.png"
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
        <div className="navbar-nav bg-dark-1 text-light">
          <ul className="container list-inline m-0-auto">
            <li className="list-inline-item">
              <Link to="/moi-ve">MỚI VỀ</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/ban-chay">BÁN CHẠY</Link>
            </li>
            {this.state.categories.map(c => {
              return (
                <li key={c.id} className="list-inline-item">
                  <Link to={"/categories/" + c.slug}>
                    {c.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
            {/* <li className="list-inline-item">
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
        </li> */}
          </ul>
        </div>
      </div>
    );
  }
}
