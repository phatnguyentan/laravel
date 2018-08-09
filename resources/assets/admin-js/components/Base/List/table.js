import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, data } = this.props;
    const longest = data.reduce((acc, curr) => {
      if (!acc) {
        acc = curr;
      } else {
        Object.keys(curr).length > acc.length ? (acc = Object.keys(curr)) : "";
      }
      return acc;
    }, []);

    return (
      <div>
        <table className={className}>
          <thead>
            <tr>
              {longest.map(i => {
                return <th key={i}>{i}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map(d => {
              return (
                <tr key={d.id}>
                  {Object.keys(d).map(k => {
                    return <td key={d.id + k}>{d[k]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
