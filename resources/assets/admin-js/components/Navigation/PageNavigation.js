import React from "react";
// import "./styles.css";

export default class PageNavigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
        return (
          <li key={page} className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={e => {
                this.props.navigatePage(page);
              }}
            >
              {page}
            </a>
          </li>
        );
      });
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {pages}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
