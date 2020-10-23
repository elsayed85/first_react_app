import React from "react";

class Header extends React.Component {
  render() {
      return (<div class="container">
        {this.props.children}
    </div>);
  }
}
export default Header;
