import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <nav className="navigation">
    {/* START Navbar */}
    <div className="navbar-inverse navbar navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="current navbar-brand" href="../index.html">
            <img alt="Spin Logo Inverted" className="h-20" src="..//assets/images/logo-primary-white@2X.png" />
          </a>
          <button className="action-right-sidebar-toggle navbar-toggle collapsed" data-target="#navdbar" data-toggle="collapse" type="button" data-original-title title>
            <i className="fa fa-fw fa-align-right text-white" />
          </button>
          <button className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
            <i className="fa fa-fw fa-user text-white" />
          </button>
          <button className="action-sidebar-open navbar-toggle collapsed" type="button">
            <i className="fa fa-fw fa-bars text-white" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar">
          {/* START Search Mobile */}
          <div className="form-group hidden-lg hidden-md hidden-sm">
            <div className="input-group hidden-lg hidden-md">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button"><i className="fa fa-fw fa-search" /></button>
              </span>
            </div>
          </div>
          {/* END Search Mobile */}
          {/* START Left Side Navbar */}
          <ul className="nav navbar-nav navbar-left clearfix yamm">
            {/* START Switch Sidebar ON/OFF */}
            <li id="sidebar-switch" className="hidden-xs">
              <a className="action-toggle-sidebar-slim" data-placement="bottom" data-toggle="tooltip" href="javascript: void(0)" title data-original-title="Slim sidebar on/off">
                <i className="fa fa-lg fa-bars fa-fw" />
              </a>
            </li>
            {/* END Switch Sidebar ON/OFF */}
            {/* START Menu Only Visible on Navbar */}
            <li id="top-menu-switch" className="dropdown">
              <a href="javascript: void(0)" className="dropdown-toggle" data-toggle="dropdown">Menu <i className="fa fa-fw fa-caret-down" /></a>
              <ul className="dropdown-menu">
                <li>
                  <div className="yamm-content">
                    <div className="row">
                      {/* START Start, Widgets Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong> Start</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/overview.html" className="text-gray-lighter">
                            <span className="nav-label">Overview</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/projects.html" className="text-gray-lighter">
                            <span className="nav-label">Projects</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/analytics.html" className="text-gray-lighter">
                            <span className="nav-label">Analytics</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/activity-team.html" className="text-gray-lighter">
                            <span className="nav-label">Activity Team</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/e-commerce.html" className="text-gray-lighter">
                            <span className="nav-label">E-Commerce</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/financial.html" className="text-gray-lighter">
                            <span className="nav-label">Financial</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/stock.html" className="text-gray-lighter">
                            <span className="nav-label">Stock</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/performance.html" className="text-gray-lighter">
                            <span className="nav-label">Performance</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/exchange&trading.html" className="text-gray-lighter">
                            <span className="nav-label">Exchange &amp; Trading</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/system.html" className="text-gray-lighter">
                            <span className="nav-label">System</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../start/monitor.html" className="text-gray-lighter">
                            <span className="nav-label">Monitor</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Widgets</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../widgets/widgets.html" className="text-gray-lighter">
                            <span className="nav-label">Widgets</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a href="../graphs-widgets/widgets.html" className="text-gray-lighter">
                            <span className="nav-label">Graphs Widgets</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Tables</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../tables/pricing-tables.html">
                            <span className="nav-label">Pricing Tables</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../tables/tables.html">
                            <span className="nav-label">Tables</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../tables/datatables.html">
                            <span className="nav-label">Datatables</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"> <strong> Grid</strong></p>
                          <ul>
                            <li className="m-l-1 ">
                              <a className="text-gray-lighter" href="../grids/grids.html">
                                <span className="nav-label">Grids</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* END Start, Widgets Navbar Menu */}
                      {/* START Layouts, Sidebars Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong>Layouts</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/default-fullwidth.html">
                            <span className="nav-label">Default FullWidth</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/default-fixed.html">
                            <span className="nav-label">Default Fixed</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/default-w-navbar.html">
                            <span className="nav-label">Default w/ Navbar</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/default-w-footer.html">
                            <span className="nav-label">Default w/ Footer</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/default-footer-fixed.html">
                            <span className="nav-label">Default Footer Fixed</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/navbar.html">
                            <span className="nav-label">Navbar</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/navbar-container.html">
                            <span className="nav-label">Navbar Container</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../layouts/empty-page.html">
                            <span className="nav-label">Empty Page</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Sidebars</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-default.html">
                            <span className="nav-label">Sidebar Default</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-w-progress.html">
                            <span className="nav-label">Sidebar w/ Progress</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-w-menu.html">
                            <span className="nav-label">Sidebar w/ Menu</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-w-bars.html">
                            <span className="nav-label">Sidebar w/ Bars</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-avatar-&-bars.html">
                            <span className="nav-label">Sidebar Avatar &amp; Bars</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-aside.html">
                            <span className="nav-label">Sidebar ASide</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-avatar-numbers.html">
                            <span className="nav-label">With Avatar &amp; Numbers</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-avatar-stats.html">
                            <span className="nav-label">With Avatar &amp; Stats</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-slim.html">
                            <span className="nav-label">Sidebar Slim</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../sidebars/sidebar-big-icons.html">
                            <span className="nav-label">Sidebar Big Icons</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Layouts, Sidebars Navbar Menu */}
                      {/* START Layouts, Sidebars Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong> Interface</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/colors.html">
                            <span className="nav-label">Colors</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/typography.html">
                            <span className="nav-label">Typography</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/buttons.html">
                            <span className="nav-label">Buttons</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/paginations&pager.html">
                            <span className="nav-label">Paginations &amp; Pager</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/images&thumbs.html">
                            <span className="nav-label">Images &amp; Thumbs</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/avatars.html">
                            <span className="nav-label">Avatars</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/navbars.html">
                            <span className="nav-label">Navbars</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/alerts.html">
                            <span className="nav-label">Alerts</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/toastr.html">
                            <span className="nav-label">Toastr</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/modals.html">
                            <span className="nav-label">Modals</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/progress-bars.html">
                            <span className="nav-label">Progress Bars</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/badges&labels.html">
                            <span className="nav-label">Badges &amp; Labels</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/breadcrumps.html">
                            <span className="nav-label">Breadcrumbs</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/tabs&pills.html">
                            <span className="nav-label">Tabs &amp; Pills</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/tooltips&popovers.html">
                            <span className="nav-label">Tooltips &amp; Popovers</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../interface/list-groups.html">
                            <span className="nav-label">List Groups</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Graphs</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../graphs/highcharts.html">
                            <span className="nav-label">Highcharts</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../graphs/highstock.html">
                            <span className="nav-label">Highstock</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../graphs/peity.html">
                            <span className="nav-label">Peity</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../graphs/sparklines.html">
                            <span className="nav-label">Sparklines</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../graphs/chartist.html">
                            <span className="nav-label">Chartist</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Layouts, Sidebars Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong> Pages</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/register.html">
                            <span className="nav-label">Register</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/login.html">
                            <span className="nav-label">Login</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/forgot-password.html">
                            <span className="nav-label">Forgot Password</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/lock-screen.html">
                            <span className="nav-label">Lock Screen</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/error-404.html">
                            <span className="nav-label">Error 404</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/invoice.html">
                            <span className="nav-label">Invoice</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../pages/timeline.html">
                            <span className="nav-label">Timeline</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Projects</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/projects-list.html">
                            <span className="nav-label">Projects List</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/projects-grid.html">
                            <span className="nav-label">Projects Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"> <strong> Tasks</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/tasks-list.html">
                            <span className="nav-label">Tasks List</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/tasks-grid.html">
                            <span className="nav-label">Tasks Grid</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/tasks-details.html">
                            <span className="nav-label">Tasks Details</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Files Manager</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/files-list.html">
                            <span className="nav-label">Files List</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/files-grid.html">
                            <span className="nav-label">Files Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong> Search Results</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/search-results.html">
                            <span className="nav-label">Search Results</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/images-results.html">
                            <span className="nav-label">Images Results</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/videos-results.html">
                            <span className="nav-label">Videos Results</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/users-results.html">
                            <span className="nav-label">Users Results</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong> Users</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/users-list.html">
                            <span className="nav-label">Users List</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/users-grid.html">
                            <span className="nav-label">Users Grid</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Mailbox</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/inbox.html">
                            <span className="nav-label">Inbox</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/email-details.html">
                            <span className="nav-label">Email Details</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/new-email.html">
                            <span className="nav-label">New Email</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"> <strong> Profile User</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/profile-details.html">
                            <span className="nav-label">Profile Details</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/profile-edit.html">
                            <span className="nav-label">Profile Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/account-edit.html">
                            <span className="nav-label">Account Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/billing-edit.html">
                            <span className="nav-label">Billing Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/settings-edit.html">
                            <span className="nav-label">Settings Edit</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../apps/sessions-edit.html">
                            <span className="nav-label">Sessions Edit</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong> Icons</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../icon/fonts-awesome.html">
                            <span className="nav-label">Fonts Awesome</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../icon/glyphicons.html">
                            <span className="nav-label">Glyphicons</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Versions</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../versions/jquery.html">
                            <span className="nav-label">JQuery</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../versions/react.html">
                            <span className="nav-label">React</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../versions/react.html">
                            <span className="nav-label">Photoshop .PSD</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                      {/* START Pages Navbar Menu */}
                      <ul className="col-sm-2 list-unstyled">
                        <li>
                          <p className="text-muted small text-uppercase"><strong>Forms</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../forms/forms.html">
                            <span className="nav-label">Forms</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../forms/forms-layouts.html">
                            <span className="nav-label">Forms Layouts</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../forms/date-range-picker.html">
                            <span className="nav-label">Date Range Picker</span>
                          </a>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../forms/forms-extended.html">
                            <span className="nav-label">Forms Extended</span>
                          </a>
                        </li>
                        <li>
                          <p className="text-muted small text-uppercase m-t-2"><strong>Panels</strong></p>
                        </li>
                        <li className="m-l-1 ">
                          <a className="text-gray-lighter" href="../panels/panels.html">
                            <span className="nav-label">Panels</span>
                          </a>
                        </li>
                      </ul>
                      {/* END Pages Navbar Menu */}
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* END Menu Only Visible on Navbar */}
            <li className="spin-search-box clearfix hidden-xs">
              <a href="javascript: void(0)" className="float-xs-left">
                <i className="fa fa-search fa-lg icon-inactive" />
                <i className="fa fa-close fa-lg icon-active" />
              </a>
              <div className="input-group input-group-sm float-xs-left p-10">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>
          </ul>
          {/* START Left Side Navbar */}
          {/* START Right Side Navbar */}
          <ul className="nav navbar-nav navbar-right">
            <li role="separator" className="dropdown-divider hidden-lg hidden-md hidden-sm" />
            <li className="dropdown-header hidden-lg hidden-md hidden-sm text-gray-lighter text-uppercase">
              <strong>Your Profile</strong>
            </li>
            {/* START Notification */}
            <li className="dropdown">
              {/* START Icon Notification with Badge (10)*/}
              <a className="dropdown-toggle" data-toggle="dropdown" href="javascript: void(0)" role="button">
                <i className="fa fa-lg fa-fw fa-bell hidden-xs" />
                <span className="hidden-sm hidden-md hidden-lg">
                  Notifications <span className="tag tag-pill badge-primary m-l-1">10</span>
                </span>
                <span className="tag label-primary label-pill label-with-icon hidden-xs">10</span>
                <span className="fa fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
              </a>
              {/* END Icon Notification with Badge (10)*/}
              {/* START Notification Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                <li>
                  <div className="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                    <ul className="list-group m-b-0 b-b-0">
                      <li className="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0  b-t-l-0 b-b-2 w-350">
                        <small className="text-uppercase">
                          <strong>Notifications</strong>
                        </small>
                        <a role="button" href="../apps/settings-edit.html" className="btn m-t-0 btn-sm btn-secondary float-xs-right">
                          <i className="fa fa-fw fa-gear" />
                        </a>
                      </li>
                      {/* START Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                        <div className="scroll-300 custom-scrollbar ps-container ps-theme-default" data-ps-id="4c866893-51e3-0346-64da-1d33628aba20">
                          <a href="../pages/timeline.html" className="list-group-item b-r-0 b-t-0 b-l-0">
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-danger" />
                                  <i className="fa fa-close fa-stack-1x fa-fw text-danger" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>Try to navigate the JBOD sensor, maybe it will calculate the online program!</span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>18-Jun-2013, 09:39</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../pages/timeline.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-primary" />
                                  <i className="fa fa-info fa-stack-1x text-primary" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>If we copy the protocol, we can get to the RAM protocol through the neural SMS system!</span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>19-Apr-2014, 03:56</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../pages/timeline.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-success" />
                                  <i className="fa fa-check fa-stack-1x text-success" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>The SDD bandwidth is down, connect the redundant bandwidth so we can parse the SSL feed!</span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>06-May-2011, 12:29</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../pages/timeline.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle-thin fa-stack-2x text-warning" />
                                  <i className="fa fa-exclamation fa-stack-1x fa-fw text-warning" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h5 className="m-t-0">
                                  <span>You can't generate the firewall without hacking the cross-platform SCSI transmitter!</span>
                                </h5>
                                <p className="text-nowrap small m-b-0">
                                  <span>02-Feb-2013, 07:34</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps-scrollbar-y-rail" style={{ top: 0, right: 0 }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></div>
                      </li>
                      {/* END Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 r-a-0 b-b-0">
                        <a className="list-group-item text-xs-center b-r-0 b-b-0 b-l-0 b-r-b-r-0 b-r-b-l-0" href="../pages/timeline.html">
                          See All Notifications <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* END Notification Dropdown Menu */}
            </li>
            {/* END Notification */}
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="javascript: void(0)" role="button">
                <i className="fa fa-lg fa-fw fa-envelope hidden-xs" />
                <span className="hidden-sm hidden-md hidden-lg">Messages <span className="tag tag-pill badge-info m-l-1">3</span></span>
                <span className="tag label-info label-pill label-with-icon hidden-xs">3</span>
                <span className="fa fa-fw fa-angle-down hidden-lg hidden-md hidden-sm" />
              </a>
              {/* START Messages Dropdown Menu */}
              <ul className="dropdown-menu dropdown-menu-right p-t-0 b-t-0 p-b-0 b-b-0 b-a-0">
                <li>
                  <div className="yamm-content p-t-0 p-r-0 p-l-0 p-b-0">
                    <ul className="list-group m-b-0">
                      <li className="list-group-item b-r-0 b-l-0 b-r-0 b-t-r-0 b-t-l-0 b-b-2 w-350">
                        <small className="text-uppercase">
                          <strong>Messages</strong>
                        </small>
                        <a role="button" href="../apps/new-email.html" className="btn m-t-0 btn-sm btn-secondary float-xs-right">
                          <i className="fa fa-pencil" />
                        </a>
                      </li>
                      {/* START Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 p-y-0 b-t-0">
                        <div className="scroll-200 custom-scrollbar ps-container ps-theme-default" data-ps-id="f2d299b4-9b0e-46e1-9cab-a3bc8b259e89">
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-t-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/linux29/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Antonia Sipes</span>
                                  <small><span>04:57</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Atque eum odio cupiditate qui earum eius tempora aut quos.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Dahlia Bode</span>
                                  <small><span>05:35</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Corrupti sunt doloremque optio nulla eum iure.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Katrina Gerlach</span>
                                  <small><span>03:55</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Minus laboriosam ea ex quia exercitationem aut.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/aislinnkelly/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-danger b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Neil Lang</span>
                                  <small><span>08:58</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Quasi dolorem veniam.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/wegotvices/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-warning b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Dora O'Keefe</span>
                                  <small><span>08:22</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Sint repudiandae iure assumenda.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <a href="../apps/email-details.html" className="list-group-item b-r-0 b-l-0">
                            <div className="media">
                              <div className="media-left media-middle">
                                <div className="avatar">
                                  <img className="media-object img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/prinzadi/128.jpg" alt="Avatar" />
                                  <i className="avatar-status avatar-status-bottom bg-success b-gray-darker" />
                                </div>
                              </div>
                              <div className="media-body media-auto">
                                <h5 className="m-b-0 m-t-0">
                                  <span>Federico Huels</span>
                                  <small><span>04:35</span></small>
                                </h5>
                                <p className="m-t-0 m-b-0">
                                  <span>Et corporis qui vel.</span>
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps-scrollbar-y-rail" style={{ top: 0, right: 0 }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></div>
                      </li>
                      {/* END Scroll Inside Panel */}
                      <li className="list-group-item b-a-0 p-x-0 b-b-0 p-y-0 r-a-0">
                        <a className="list-group-item text-xs-center b-b-0 b-r-0 b-l-0 b-r-b-r-0 b-r-b-l-0" href="../apps/inbox.html">
                          See All Messages <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/* END Messages Dropdown Menu */}
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle user-dropdown" data-toggle="dropdown" href="javascript: void(0)" role="button">
                <span className="m-r-1">Henriette Harvey</span>
                <div className="avatar avatar-image avatar-sm avatar-inline loaded">
                  <img alt="User" src="https://s3.amazonaws.com/uifaces/faces/twitter/mwarkentin/128.jpg" />
                </div>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-header text-gray-lighter">
                  <strong className="text-uppercase">Account</strong>
                </li>
                <li role="separator" className="dropdown-divider" />
                <li>
                  <a href="../apps/profile-details.html">Your Profile</a>
                </li>
                <li>
                  <a href="../apps/profile-edit.html">Settings</a>
                </li>
                <li>
                  <a href="../apps/faq.html">Faq</a>
                </li>
                <li role="separator" className="dropdown-divider" />
                <li>
                  <a href="../pages/login.html">Sign Out</a>
                </li>
              </ul>
            </li>
            <li className="hidden-xs">
              <a className="action-right-sidebar-toggle" title data-original-title="Right sidebar on/off">
                <i className="fa fa-lg fa-align-right" />
              </a>
            </li>
          </ul>
          {/* END Right Side Navbar */}
        </div>
      </div>
    </div>
    {/* END Navbar */}
    {/* START Sidebars */}
    <aside className="navbar-default sidebar ps-container ps-theme-default affix-top" data-ps-id="6574a96d-040f-0582-7f5f-9dd77222064e">
      <div className="sidebar-overlay-head">
        <img src="..//assets/images/logo-primary-white@2X.png" alt="Logo" width={90} />
        <a href="javascript: void(0)" className="sidebar-switch action-sidebar-close">
          <i className="fa fa-times" />
        </a>
      </div>
      <div className="sidebar-logo">
        <img className="logo-default" src="..//assets/images/logo-big-primary-white@2X.png" alt="Logo" width={53} />
        <img className="logo-slim" src="..//assets/images/logo-slim-primary@2X.png" alt="Logo" height={13} />
      </div>
      <div className="sidebar-content">
        <div className="p-y-3 avatar-container">
          <img src="../assets/images/avatars/spin-avatar-woman.png" width={50} alt="Avatar" className="spin-avatar img-circle" />
          <div className="text-xs-center">
            <h6 className="m-b-0">Michelle Baez</h6>
            <small className="text-muted">Help Desk</small>
            <p className="m-t-1 m-b-2">
              <span id="sidebar-avatar-chart" style={{ display: 'none' }}>5,3,2,-1,-3,-2,2,3,5,2</span><svg className="peity" height={16} width={32}><rect fill="#4D89F9" x="0.32" y={0} width="2.56" height={10} /><rect fill="#4D89F9" x="3.5200000000000005" y={4} width="2.5599999999999996" height={6} /><rect fill="#4D89F9" x="6.720000000000001" y={6} width="2.5599999999999987" height={4} /><rect fill="#4D89F9" x="9.92" y={10} width="2.5600000000000005" height={2} /><rect fill="#4D89F9" x="13.12" y={10} width="2.5600000000000023" height={6} /><rect fill="#4D89F9" x="16.32" y={10} width="2.5600000000000023" height={4} /><rect fill="#4D89F9" x="19.52" y={6} width="2.5600000000000023" height={4} /><rect fill="#4D89F9" x="22.72" y={4} width="2.5600000000000023" height={6} /><rect fill="#4D89F9" x="25.919999999999998" y={0} width="2.5600000000000023" height={10} /><rect fill="#4D89F9" x="29.119999999999997" y={6} width="2.5600000000000023" height={4} /></svg>
            </p>
          </div>
        </div>
        <div className="sidebar-default-visible text-muted small text-uppercase sidebar-section p-y-2">
          <strong>Navigation</strong>
        </div>
        {/* START Tree Sidebar Common */}
        <ul className="side-menu">
          <li className="Dashboards nested-active primary-submenu has-submenu expanded">
            <a href="javascript: void(0)" title="Dashboards">
              <i className="fa fa-home fa-lg fa-fw" /><span className="nav-label">Start</span><i className="fa arrow" />
            </a>
            <ul data-submenu-title="Start" className="submenu-level-1">
              <li className>
                <a href="../start/financial.html">
                  <span className="nav-label">Financial</span>
                </a>
              </li>
              <li className="active nested-active expanded">
                <a href="../start/projects.html">
                  <span className="nav-label">Projects</span>
                </a>
              </li>
              <li className>
                <a href="../start/monitor.html">
                  <span className="nav-label">Monitor</span>
                </a>
              </li>
              <li className>
                <a href="../start/system.html">
                  <span className="nav-label">System</span>
                </a>
              </li>
              <li className>
                <a href="../start/activity-team.html">
                  <span className="nav-label">Activity Team</span>
                </a>
              </li>
              <li className>
                <a href="../start/e-commerce.html">
                  <span className="nav-label">E-Commerce</span>
                </a>
              </li>
              <li className>
                <a href="../start/stock.html">
                  <span className="nav-label">Stock</span>
                </a>
              </li>
              <li className>
                <a href="../start/performance.html">
                  <span className="nav-label">Performance</span>
                </a>
              </li>
              <li className>
                <a href="../start/exchange&trading.html">
                  <span className="nav-label">Exchange &amp; Trading</span>
                </a>
              </li>
              <li className>
                <a href="../start/overview.html">
                  <span className="nav-label">Overview</span>
                </a>
              </li>
              <li className>
                <a href="../start/analytics.html">
                  <span className="nav-label">Analytics</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Dashboards">
              <i className="fa fa-th fa-lg" /><span className="nav-label">Widgets</span>
              <span className="float-xs-right tag label-primary label-outline text-uppercase">New</span>
            </a>
            <ul data-submenu-title="Widgets" className="submenu-level-1">
              <li className>
                <a href="../widgets/widgets.html">
                  <span className="nav-label">Data Widgets</span>
                </a>
              </li>
              <li className>
                <a href="../widgets/graphs-widgets.html">
                  <span className="nav-label">Graphs Widgets</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Layouts">
              <i className="fa fa-columns fa-lg fa-fw" /><span className="nav-label">Layouts</span><i className="fa arrow" />
            </a>
            <ul data-submenu-title="Layouts" className="submenu-level-1">
              <li className>
                <a href="../layouts/default.html">
                  <span className="nav-label">Default Page</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/default-fixed.html">
                  <span className="nav-label">Default Fixed</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/default-w-navbar.html">
                  <span className="nav-label">Default w/ Navbar</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/default-w-footer.html">
                  <span className="nav-label">Default w/ Footer</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/default-footer-fixed.html">
                  <span className="nav-label">Default Footer Fixed</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/navbar.html">
                  <span className="nav-label">Navbar</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/navbar-fixed.html">
                  <span className="nav-label">Navbar Fixed</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/navbar-container.html">
                  <span className="nav-label">Navbar Container</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/default-fullwidth.html">
                  <span className="nav-label">Default FullWidth</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/empty-page.html">
                  <span className="nav-label">Empty Page</span>
                </a>
              </li>
              <li className>
                <a href="../layouts/boxed.html">
                  <span className="nav-label">Boxed</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Layouts">
              <i className="fa fa-fw fa-lg fa-bars" /><span className="nav-label">Sidebars</span><i className="fa arrow" />
            </a>
            <ul data-submenu-title="Sidebars" className="submenu-level-1">
              <li className>
                <a href="../sidebars/sidebar-default.html">
                  <span className="nav-label">Sidebar Default</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-w-progress.html">
                  <span className="nav-label">Sidebar w/ Progress</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-w-menu.html">
                  <span className="nav-label">Sidebar w/ Menu</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-w-bars.html">
                  <span className="nav-label">Sidebar w/ Bars</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-avatar-&-bars.html">
                  <span className="nav-label">Sidebar Avatar &amp; Bars</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-aside.html">
                  <span className="nav-label">Sidebar ASide</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-avatar-numbers.html">
                  <span className="nav-label">With Avatar &amp; Numbers</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-avatar-stats.html">
                  <span className="nav-label">With Avatar &amp; Stats</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-slim.html">
                  <span className="nav-label">Sidebar Slim</span>
                </a>
              </li>
              <li className>
                <a href="../sidebars/sidebar-big-icons.html">
                  <span className="nav-label">Sidebar Big Icons</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Skins">
              <i className="fa fa-google-wallet fa-lg" /><span className="nav-label">Skins</span>
              <span className="float-xs-right tag tag-pill badge-info badge-outline text-uppercase">42</span>
            </a>
            <ul data-submenu-title="Skins" className="submenu-level-1">
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Dark &amp; Inverse</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/dark-inverse-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-inverse-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-inverse-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-inverse-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-inverse-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Dark &amp; White</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/dark-default-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-default-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-default-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-default-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-default-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Dark &amp; Color</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/dark-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/dark-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Light &amp; Inverse</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/light-inverse-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-inverse-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-inverse-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-inverse-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-inverse-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Light &amp; White</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/light-default-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-soft-purple.html">
                      <span className="nav-label">Soft Purple</span>
                      <small><i className="fa fa-fw fa-circle text-soft-purple float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-default-lighting-yellow.html">
                      <span className="nav-label">Lighting Yellow</span>
                      <small><i className="fa fa-fw fa-circle text-lighting-yellow float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Light &amp; Color</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/light-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/light-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Color &amp; Inverse</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/primary-inverse.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/info-inverse.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/success-inverse.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/warning-inverse.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/danger-inverse.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Color &amp; White</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/primary-default.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/info-default.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/success-default.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/warning-default.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/danger-default.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Color &amp; Color</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../skins/primary-primary.html">
                      <span className="nav-label">Primary</span>
                      <small><i className="fa fa-fw fa-circle text-primary float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/info-info.html">
                      <span className="nav-label">Info</span>
                      <small><i className="fa fa-fw fa-circle text-info float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/success-success.html">
                      <span className="nav-label">Success</span>
                      <small><i className="fa fa-fw fa-circle text-success float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/warning-warning.html">
                      <span className="nav-label">Warning</span>
                      <small><i className="fa fa-fw fa-circle text-warning float-xs-right" /></small>
                    </a>
                  </li>
                  <li className>
                    <a href="../skins/danger-danger.html">
                      <span className="nav-label">Danger</span>
                      <small><i className="fa fa-fw fa-circle text-danger float-xs-right" /></small>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)">
              <i className="fa fa-toggle-on fa-lg" /><span className="nav-label">Interface</span><i className="fa arrow" />
            </a>
            <ul data-submenu-title="Interface" className="submenu-level-1">
              <li className>
                <a href="../interface/colors.html">
                  <span className="nav-label">Colors</span>
                </a>
              </li>
              <li className>
                <a href="../interface/typography.html">
                  <span className="nav-label">Typography</span>
                </a>
              </li>
              <li className>
                <a href="../interface/buttons.html">
                  <span className="nav-label">Buttons</span>
                </a>
              </li>
              <li className>
                <a href="../interface/paginations&pager.html">
                  <span className="nav-label">Paginations &amp; Pager</span>
                </a>
              </li>
              <li className>
                <a href="../interface/images&thumbs.html">
                  <span className="nav-label">Images &amp; Thumbs</span>
                </a>
              </li>
              <li className>
                <a href="../interface/avatars.html">
                  <span className="nav-label">Avatars</span>
                </a>
              </li>
              <li className>
                <a href="../interface/navbars.html">
                  <span className="nav-label">Navbars</span>
                </a>
              </li>
              <li className>
                <a href="../interface/alerts.html">
                  <span className="nav-label">Alerts</span>
                </a>
              </li>
              <li className>
                <a href="../interface/toastr.html">
                  <span className="nav-label">Toastr</span>
                </a>
              </li>
              <li className>
                <a href="../interface/modals.html">
                  <span className="nav-label">Modals</span>
                </a>
              </li>
              <li className>
                <a href="../interface/progress-bars.html">
                  <span className="nav-label">Progress Bars</span>
                </a>
              </li>
              <li className>
                <a href="../interface/badges&labels.html">
                  <span className="nav-label">Badges &amp; Labels</span>
                </a>
              </li>
              <li className>
                <a href="../interface/breadcrumps.html">
                  <span className="nav-label">Breadcrumbs</span>
                </a>
              </li>
              <li className>
                <a href="../interface/tabs&pills.html">
                  <span className="nav-label">Tabs &amp; Pills</span>
                </a>
              </li>
              <li className>
                <a href="../interface/tooltips&popovers.html">
                  <span className="nav-label">Tooltips &amp; Popovers</span>
                </a>
              </li>
              <li className>
                <a href="../interface/list-groups.html">
                  <span className="nav-label">List Groups</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Graphs">
              <i className="fa fa-pie-chart  fa-lg" /><span className="nav-label">Graphs</span> <i className="fa arrow" />
            </a>
            <ul data-submenu-title="Graphs" className="submenu-level-1">
              <li className>
                <a href="../graphs/peity.html">
                  <span className="nav-label">Peity</span>
                </a>
              </li>
              <li className id="sidebar-link-highstock">
                <a href="../graphs/highstock.html">
                  <span className="nav-label">Highstock</span>
                </a>
              </li>
              <li className>
                <a href="../graphs/sparklines.html">
                  <span className="nav-label">Sparklines</span>
                </a>
              </li>
              <li className>
                <a href="../graphs/chartist.html">
                  <span className="nav-label">Chartist</span>
                </a>
              </li>
              <li className>
                <a href="../graphs/highcharts.html">
                  <span className="nav-label">Highcharts</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Tables">
              <i className="fa fa-trello fa-lg" /><span className="nav-label">Tables</span> <i className="fa arrow" />
            </a>
            <ul data-submenu-title="Tables" className="submenu-level-1">
              <li className>
                <a href="../tables/pricing-tables.html">
                  <span className="nav-label">Pricing Tables</span>
                </a>
              </li>
              <li className>
                <a href="../tables/tables.html">
                  <span className="nav-label">Tables</span>
                </a>
              </li>
              <li className>
                <a href="../tables/datatables.html">
                  <span className="nav-label">Datatables</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Forms">
              <i className="fa fa-check-square-o fa-fw fa-lg" /><span className="nav-label">Forms</span> <i className="fa arrow" />
            </a>
            <ul data-submenu-title="Forms" className="submenu-level-1">
              <li className>
                <a href="../forms/forms.html">
                  <span className="nav-label">Forms</span>
                </a>
              </li>
              <li className>
                <a href="../forms/forms-layouts.html">
                  <span className="nav-label">Forms Layouts</span>
                </a>
              </li>
              <li className>
                <a href="../forms/date-range-picker.html">
                  <span className="nav-label">Date Range Picker</span>
                </a>
              </li>
              <li className>
                <a href="../forms/forms-extended.html">
                  <span className="nav-label">Forms Extended</span>
                </a>
              </li>
            </ul>
          </li>
          <li className>
            <a href="../grids/grids.html" title="Grids">
              <i className="fa fa-lg fa-th-list fa-fw" /><span className="nav-label">Grids</span>
            </a>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Pages">
              <i className="fa fa-clone fa-lg" /><span className="nav-label">Pages</span> <i className="fa arrow" />
            </a>
            <ul data-submenu-title="Pages" className="submenu-level-1">
              <li className>
                <a href="../pages/register.html">
                  <span className="nav-label">Register</span>
                </a>
              </li>
              <li className>
                <a href="../pages/login.html">
                  <span className="nav-label">login</span>
                </a>
              </li>
              <li className>
                <a href="../pages/forgot-password.html">
                  <span className="nav-label">Forgot Password</span>
                </a>
              </li>
              <li className>
                <a href="../pages/lock-screen.html">
                  <span className="nav-label">Lock Screen</span>
                </a>
              </li>
              <li className>
                <a href="../pages/error-404.html">
                  <span className="nav-label">Error 404</span>
                </a>
              </li>
              <li className>
                <a href="../pages/invoice.html">
                  <span className="nav-label">Invoice</span>
                </a>
              </li>
              <li className>
                <a href="../pages/timeline.html">
                  <span className="nav-label">Timeline</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Apps">
              <i className="fa fa-suitcase fa-lg" /><span className="nav-label">Apps</span> <i className="fa arrow" />
            </a>
            <ul data-submenu-title="Apps" className="submenu-level-1">
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Projects</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/projects-list.html">
                      <span className="nav-label">Projects List</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/projects-grid.html">
                      <span className="nav-label">Projects Grid</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Tasks</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/tasks-list.html">
                      <span className="nav-label">Tasks List</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/tasks-grid.html">
                      <span className="nav-label">Tasks Grid</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/tasks-details.html">
                      <span className="nav-label">Tasks Details</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Files Manager</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/files-list.html">
                      <span className="nav-label">Files List</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/files-grid.html">
                      <span className="nav-label">Files Grid</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Search Results</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/search-results.html">
                      <span className="nav-label">Search Results</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/images-results.html">
                      <span className="nav-label">Images Results</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/videos-results.html">
                      <span className="nav-label">Videos Results</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/users-results.html">
                      <span className="nav-label">Users Results</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="../apps/faq.html">
                  <span className="nav-label">FAQ</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Users</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/users-list.html">
                      <span className="nav-label">Users List</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/users-grid.html">
                      <span className="nav-label">Users Grid</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="../apps/chat.html">
                  <span className="nav-label">Chat</span>
                </a>
              </li>
              <li className>
                <a href="../apps/calendar.html">
                  <span className="nav-label">Calendar</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Mailbox</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/inbox.html">
                      <span className="nav-label">Inbox</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/email-details.html">
                      <span className="nav-label">Email Details</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/new-email.html">
                      <span className="nav-label">New Email</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className>
                <a href="../apps/clients.html">
                  <span className="nav-label">Clients</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript: void(0)">
                  <span className="nav-label">Profile User</span> <i className="fa arrow" />
                </a>
                <ul className="submenu-level-2">
                  <li className>
                    <a href="../apps/profile-details.html">
                      <span className="nav-label">Profile Details</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/profile-edit.html">
                      <span className="nav-label">Profile Edit</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/account-edit.html">
                      <span className="nav-label">Account Edit</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/billing-edit.html">
                      <span className="nav-label">Billing Edit</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/settings-edit.html">
                      <span className="nav-label">Settings Edit</span>
                    </a>
                  </li>
                  <li className>
                    <a href="../apps/sessions-edit.html">
                      <span className="nav-label">Sessions Edit</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="primary-submenu has-submenu">
            <a href="javascript: void(0)" title="Icons">
              <i className="fa fa-star  fa-lg" /><span className="nav-label">Icons</span><i className="fa arrow" />
            </a>
            <ul data-submenu-title="Icons" className="submenu-level-1">
              <li className>
                <a href="../icon/fonts-awesome.html">
                  <span className="nav-label">Fonts Awesome</span>
                </a>
              </li>
              <li className>
                <a href="../icon/glyphicons.html">
                  <span className="nav-label">Glyphicons</span>
                </a>
              </li>
            </ul>
          </li>
          <li className>
            <a href="../panels/panels.html">
              <i className="fa fa-columns fa-lg " /><span className="nav-label">Panels</span>
            </a>
          </li>
          <li className>
            <a href="../styleguide/styleguide.html">
              <i className="fa fa-cube  fa-lg" /><span className="nav-label">Styleguide</span>
            </a>
          </li>
          <li className>
            <a href="../docs/docs.html">
              <i className="fa fa-file-o fa-lg " /><span className="nav-label">Docs</span>
              <span className="tag tag-pill badge-outline badge-gray-lighter float-xs-right">2</span>
            </a>
          </li>
          <li>
            <a href="http://spin.webkom.co/react/">
              <i className="fa fa-flash fa-lg" /><span className="nav-label">Switch to React</span>
              <span className="tag label-outline label-danger float-xs-right">NEW</span>
            </a>
          </li>
        </ul>
        {/* END Tree Sidebar Common  */}
        <div className="sidebar-default-visible">
          <hr />
        </div>
        <div className="sidebar-default-visible sidebar-section m-b-2">
          <span className="small text-muted text-uppercase p-b-2 block">
            <strong>Labels</strong>
          </span>
          <br />
          <br />
          <p><i className="fa fa-circle-thin text-danger m-r-1" /> Videos</p>
          <p><i className="fa fa-circle-thin text-info m-r-1" /> Pictures</p>
          <p><i className="fa fa-circle-thin text-muted m-r-1" /> Documents</p>
        </div>
      </div>
      <div className="ps-scrollbar-x-rail" style={{ left: 0, bottom: 0 }}><div className="ps-scrollbar-x" tabIndex={0} style={{ left: 0, width: 0 }} /></div><div className="ps-scrollbar-y-rail" style={{ top: 0, right: 0 }}><div className="ps-scrollbar-y" tabIndex={0} style={{ top: 0, height: 0 }} /></div></aside>
    {/* END Sidebars */}
  </nav>

);
export default Header;
