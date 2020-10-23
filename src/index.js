import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import StudentsIndex from "./components/students/index";
import StudentsCreate from "./components/students/create";
import StudentsEdit from "./components/students/edit";
import Main from "./components/layout/main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Main>
      <StudentsIndex></StudentsIndex>
      <hr></hr>
      <StudentsCreate></StudentsCreate>
      <hr></hr>
      <StudentsEdit></StudentsEdit>
      <Footer></Footer>
    </Main>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
