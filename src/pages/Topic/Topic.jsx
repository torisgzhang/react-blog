import React, {Component} from 'react';

class Topic extends Component {
  render() {
    return(
      <div>
        <Aside />
        <Content />
        <Main />
      </div>
    );
  }
}
const Aside = (props) => (
  <div className="topicPage">
    话题页面的侧边{props.name1}
  </div>
);
const Content = (props) => (
  <div className="topicPage">
    话题页面的内容{props.name2}
  </div>
);
const Main = (props) => (
  <div className="topicPage">
    话题页面的主要{props.name3}
  </div>
);

export default Topic;