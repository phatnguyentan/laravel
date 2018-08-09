import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ApiService from "../../services/api-service";
import Table from "../Base/List/table";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objects: [] };
  }
  componentDidMount() {
    ApiService.get("/posts").then(res => {
      this.setState({
        objects: res.data
      });
    });
  }
  render() {
    return (
      <div>
        <Table className="table" data={this.state.objects} />
        {/* {this.state.objects.map(ob => (
          <div key={ob.id}>
            <Link to={"/admin/posts/" + ob.id}>{ob.title}</Link>
          </div>
        ))} */}
      </div>
    );
  }
}

export default PostList;
