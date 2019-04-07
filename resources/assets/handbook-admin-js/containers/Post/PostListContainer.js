import BaseList from "../../components/Base/List/list";

export default class PostListContainer extends BaseList {
  constructor(props) {
    super(props);
    this.entity = "posts";
    this.template = ["id", "title", "excerpt", "published"];
  }
}
