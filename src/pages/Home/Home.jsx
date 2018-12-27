import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';
import './Home.less';

class Home extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    return(
      <div>
        <Header activeIndex={this.props.location.pathname} />
        <div className="homePage">
          首页数据{this.props.location.pathname}
        </div>
      </div>
      
    );
  }
}

export default withRouter(Home);