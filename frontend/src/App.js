import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ModalProvider } from './modal/modalContext';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import SolutionKnowledge from "./components/SolutionKnowledge";

import DataService from "./services/data.service";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { setCourses } from "./actions/courses";
import { setSearchTerm } from "./actions/search";
import { history } from "./helpers/history";
import m2e_logo from "./images/m2e_logo.png"
import DetailedRackCard from './components/detailed_course_card'
import AddDevicesToRack from './components/AddDevicesToRack'

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  useEffect(() => {
    DataService.getDevices().then(
      (devicesResponse) =>{
        DataService.getRacks().then(
          (racksResponse) =>{
            dispatch(setCourses(DataService.getCourses(racksResponse,devicesResponse)));
          }
        )
      }
    )
}, [dispatch]);
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div>
    <ModalProvider>
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
             M2E 
            <img
                        alt=""
                        src={m2e_logo}
                        width="30"
                        height="30"
                    />
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sk"} className="nav-link">
                Solution Knowledge
              </Link>
            </li>
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
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

          <Switch>
            <Route exact path={["/", "/home"]} component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/sk" component={SolutionKnowledge} />
          </Switch>

        </div>
      </div>
    </BrowserRouter>
    </ModalProvider>
    </div>
  );
};

export default App;
