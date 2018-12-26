import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/topics">话题</Link>
        </li>
      </ul>
    );
  }
}

export default Header;