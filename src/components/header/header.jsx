import React, { Component } from 'react';
import { Link,  } from "react-router-dom";
import { Menu } from 'antd';
import './header.less';

class Header extends Component {
  constructor (props) {
      super(props);
      console.log(this.props);
      this.state = {
        current: 'home',
      }
  }
  
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    }, () => console.log('setState finished'));
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-wrapper_top">
          <div className="_top-content">
            <span >广州</span>
          </div>
        </div>
        <div className="header-wrapper_con">
          <div className="_con-content">
            <div className="logo">
            </div>
          </div>
          <div className="_con-nav">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">平台项目</Link>
              </Menu.Item>
              <Menu.Item key="topics">
                <Link to="/topics">设计师</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;