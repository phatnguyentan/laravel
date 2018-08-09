import React from "react";

class List extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        {/* {this.state.objects.map(ob => (
          <div key={ob.id}>
            <Link to={"/admin/posts/" + ob.id}>{ob.title}</Link>
          </div>
        ))} */}
      </div>
    );
  }
}

export default List;
