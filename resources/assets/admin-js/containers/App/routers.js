import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound";
import Login from "../../components/Login/Login";
import MediaContainer from "../Media/MediaContainer";
import ProductCreateContainer from "../Product/ProductCreateContainer";
import ProductListContainer from "../Product/ProductListContainer";
import ProductDetailContainer from "../Product/ProductDetailContainer";
import ProductCategoryContainer from "../Product/ProductCategoryContainer";
import PostCategoryContainer from "../Post/PostCategoryContainer";
import PostCreateContainer from "../Post/PostCreateContainer";
import PostDetailContainer from "../Post/PostDetailContainer";
import PostListContainer from "../Post/PostListContainer";
import BannerContainer from "../Layout/BannerContainer";
import AlbumContainer from "../Media/AlbumContainer";

class RoutersComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={this.props.config.adminPrefix}
          render={props => (
            <ProductListContainer {...props} context={this.props} />
          )}
        />

        <Route
          exact
          path={this.props.config.adminPrefix + "/login"}
          render={props => <Login {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts"}
          render={props => (
            <PostListContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts/create"}
          render={props => (
            <PostCreateContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/posts/:id"}
          render={props => (
            <PostDetailContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/post_categories"}
          render={props => (
            <PostCategoryContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products"}
          render={props => (
            <ProductListContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products/create"}
          render={props => (
            <ProductCreateContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/products/:id"}
          render={props => (
            <ProductDetailContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/product_categories"}
          render={props => (
            <ProductCategoryContainer {...props} context={this.props} />
          )}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/media"}
          render={props => <MediaContainer {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/albums"}
          render={props => <AlbumContainer {...props} context={this.props} />}
        />
        <Route
          exact
          path={this.props.config.adminPrefix + "/home/banners"}
          render={props => <BannerContainer {...props} context={this.props} />}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default RoutersComponent;
