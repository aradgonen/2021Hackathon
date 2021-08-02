import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { BrowserRouter, Switch, Route, Link, withRouter } from "react-router-dom";
import Login from ".././containers/Login";
import Signup from ".././containers/Signup";
import Profile from ".././containers/Profile";
import AssignmentList from ".././containers/AssignmentList";
import AssignmentDetail from ".././containers/AssignmentDetail";
import AssignmentCreate from ".././containers/AssignmentCreate";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      // <Layout className="layout " theme="dark">

      //   <Header>
      //     <div className="logo" />
      //     <Menu
      //       theme="dark"
      //       mode="horizontal"
      //       defaultSelectedKeys={["2"]}
      //       style={{ lineHeight: "64px" }}
      //     >
      //       <Menu.Item className="right">
      //         BlaBlaBla
      //       </Menu.Item>
      //       {this.props.isAuthenticated ? (
      //         <Menu.Item key="2" onClick={this.props.logout}>
      //           Logout
      //         </Menu.Item>
      //       ) : (
      //         <Menu.Item key="2">
      //           <Link to="/login">Login</Link>
      //         </Menu.Item>
      //       )}
      //     </Menu>
      //   </Header>
      //   <Content style={{ padding: "0 50px" }}>
      //     <Breadcrumb style={{ margin: "16px 0" }}>
      //       <Breadcrumb.Item>
      //         <Link to="/">Home</Link>
      //       </Breadcrumb.Item>
      //       {this.props.token !== null ? (
      //         <Breadcrumb.Item>
      //           <Link to={`/profile/${this.props.userId}`}>Profile</Link>
      //         </Breadcrumb.Item>
      //       ) : null}
      //       {this.props.token !== null && this.props.is_teacher ? (
      //         <Breadcrumb.Item>
      //           <Link to="/create">Create</Link>
      //         </Breadcrumb.Item>
      //       ) : null}
      //     </Breadcrumb>
      //     <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      //       {this.props.children}
      //     </div>
      //   </Content>
      //   <Footer style={{ textAlign: "center" }}>
      //     ITNinjas - Mamram Hackathon 2021.
      //   </Footer>
      // </Layout>
      <div>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <Link to={"/"} className="navbar-brand">
                מפה לאוזן
              </Link>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
              </div>

              {this.props.isAuthenticated ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link">
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
              )}
            </nav>

            <div className="container mt-3">

              {/* <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />
                <Route path="/rack/:id" component={DetailedRackCard} />
                <Route exact path="/homelessdevices" component={AddDevicesToRack} />
              </Switch> */}
              <Switch>
                <Route exact path="/" component={AssignmentList} />
                <Route exact path="/create/" component={AssignmentCreate} />
                <Route exact path="/login/" component={Login} />
                <Route exact path="/signup/" component={Signup} />
                <Route exact path="/assignments/:id" component={AssignmentDetail} />
                <Route exact path="/profile/:id" component={Profile} />
              </Switch>

            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    is_teacher: state.auth.is_teacher
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
