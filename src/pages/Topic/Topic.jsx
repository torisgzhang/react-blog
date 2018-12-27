import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/header/header';
import './Topic.less';

class Topic extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    return(
      <div>
        <Header activeIndex={this.props.location.pathname} />
        <div className="topicPage">
          话题{this.props.location.pathname}
        </div>
      </div>
    );
  }
}
export default withRouter(Topic);