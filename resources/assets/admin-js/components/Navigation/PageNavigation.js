import React from "react";
import QueryBuilder from "../../../my-libs/String/Query/url-builder";
import UrlParser from "../../../my-libs/String/Url/url-parser";
// import "./styles.css";

export default class PageNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.urlParser = new UrlParser(window.location.href);
    this.props.history.listen((location, action) => {
      this.urlParser = new UrlParser(window.location.href);
    });
    this.queryBuilder = new QueryBuilder();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // console.log(this.props);
  }

  render() {
    let pages = "";
    if (this.props.pagination.last_page) {
      pages = Array.from(
        { length: this.props.pagination.last_page },
        (v, i) => i + 1
      ).map(page => {
        const link =
          page == this.props.pagination.current_page ? (
            <a className="page-link text-dark" href="javascript:void(0)">
              {page}
            </a>
          ) : (
            <a
              className="page-link"
              href="javascript:void(0)"
              onClick={e => {
                let queryHash = this.urlParser.getQueryHash();
                queryHash.page = page;
                const query = this.queryBuilder.getQuery(queryHash);
                this.props.history.push(this.props.location.pathname + query);
              }}
            >
              {page}
            </a>
          );
        return (
          <li key={page} className="page-item">
            {link}
          </li>
        );
      });
    }
    // =============================
    let next;
    let previous;
    if (this.props.pagination.current_page < this.props.pagination.last_page) {
      next = (
        <a
          className="page-link"
          href="javascript:void(0)"
          onClick={e => {
            let queryHash = this.urlParser.getQueryHash();
            queryHash.page = parseInt(queryHash.page) + 1;
            const query = this.queryBuilder.getQuery(queryHash);
            this.props.history.push(this.props.location.pathname + query);
          }}
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      );
    } else {
      next = (
        <a className="page-link" href="javascript:void(0)" disabled="true">
          <span aria-hidden="true" className="text-dark">
            &raquo;
          </span>
        </a>
      );
    }
    if (this.props.pagination.current_page > 1) {
      previous = (
        <a
          className="page-link"
          href="javascript:void(0)"
          onClick={e => {
            let queryHash = this.urlParser.getQueryHash();
            queryHash.page = parseInt(queryHash.page) - 1;
            const query = this.queryBuilder.getQuery(queryHash);
            this.props.history.push(this.props.location.pathname + query);
          }}
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      );
    } else {
      previous = (
        <a className="page-link text-dark" href="javascript:void(0)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      );
    }
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">{previous}</li>
          {pages}
          <li className="page-item">{next}</li>
        </ul>
      </nav>
    );
  }
}
