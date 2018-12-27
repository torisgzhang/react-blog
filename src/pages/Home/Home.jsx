import React, {Component} from 'react';
import {Button} from 'antd'

class Home extends Component {
  render() {
    return(
      <div className="homePage">
        首页数据
        <div>
          <Button type="danger">按钮颜色是什么</Button>
        </div>
      </div>
    );
  }
}

export default Home;