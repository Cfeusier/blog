import React, { Component } from "react";
import Link from "gatsby-link";

const headerStyle = {
  margin: '0',
  backgroundColor: 'grey',
  width: '100%',
  height: 40,
  padding: '10px'
};

class Header extends Component {
  render() {
    return (
      <nav style={headerStyle}>
        <Link to={'/'}>
          <button>Home</button>
        </Link>
      </nav>
    );
  }
}

export default Header;
