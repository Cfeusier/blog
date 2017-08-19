import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link =>
      <a key={link.label}
        href={link.url}
        target={link.label === "Contact" ? "_self" : "_blank"}
        rel="noopener">
        {labeled ? link.label : ""}
      </a>
    );
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return (
      <div className="user-links">
        {this.getLinkElements()}
      </div>
    );
  }
}

export default UserLinks;
