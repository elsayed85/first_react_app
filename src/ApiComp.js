import React from "react";
import $ from "jquery";

class ApiComp extends React.Component {
  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        data.forEach((element) => {
          $(".posts").append("<li>" + element.title + "</li>");
        })
      );
  }
  render() {
    return "";
  }
}
export default ApiComp;
