import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ModalProvider } from './modal/modalContext';

import {
  ThemeProvider,
} from '@material-ui/styles'

import {
  createMuiTheme,
} from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import "font-awesome/css/font-awesome.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import SubjectPage from "./components/SubjectPage";
import SolutionKnowledge from "./components/SolutionKnowledge";

import DataService from "./services/data.service";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { setCourses } from "./actions/courses";
import { setSks } from "./actions/sk"
import { setSearchTerm } from "./actions/search";
import { setSubjects } from "./actions/subject";
import { history } from "./helpers/history";
import DetailedRackCard from './components/detailed_course_card'
import AddDevicesToRack from './components/AddDevicesToRack'
import { Subject } from "@material-ui/icons";
import Exam from "./components/Exam";
import CreateSolution from "./components/CreateSolution";

import NavigationBar from './components/NavigationBar'
import lightTheme from './utils/ui/themes/LightTheme';
import darkTheme from './utils/ui/themes/DarkTheme';
import pinkTheme from './utils/ui/themes/PinkTheme';
import staticTheme from './utils/ui/themes/StaticTheme'
import { light } from "@material-ui/core/styles/createPalette";
import { pink } from "@material-ui/core/colors";
import CoursesView from "./components/courses_view";
import { setSk } from "./actions/sk";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currThemeType, updateTheme] = useState("dark")

  const { user: currentUser } = useSelector((state) => state.auth);
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
    DataService.getCourses().then(
      (courseResponse) =>{
        dispatch(setCourses(courseResponse));
      }
    )
  })

  useEffect(()=>{
    DataService.getSk().then(
      (skResponse) =>{
        dispatch(setSks(skResponse));
      }
    )
  })

  useEffect(()=>{
    DataService.getSubjects().then(
      (subjectsResponse) =>{
        dispatch(setSubjects(subjectsResponse));
      }
    )
  })
  
  const logOut = () => {
    dispatch(logout());
  };

  let colorTheme = undefined

  switch (currThemeType) {
    case "dark":
      colorTheme = darkTheme
      break
    case "light":
      colorTheme = lightTheme
      break
    case "pink":
      colorTheme = pinkTheme
      break
    default:
      colorTheme = darkTheme
  }

  const theme = createMuiTheme(colorTheme, staticTheme, {
    palette: {
      type: currThemeType
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
      <CssBaseline />
        <BrowserRouter>
          <div>
            <NavigationBar onThemeChange= {updateTheme} currTheme={currThemeType}/>
            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/user" component={BoardUser} />
                <Route path="/mod" component={BoardModerator} />
                <Route path="/admin" component={BoardAdmin} />
                <Route path="/sk" component={SolutionKnowledge} />
                <Route path="/exam" component={Exam} />
                <Route path="/create/solution" component={CreateSolution} />
                <Route path="/course/detail" component={CoursesView}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
