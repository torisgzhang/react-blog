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
const test = {
  name1: '张三',
  name2: '李四',
  name3: '王二'
}
const Aside = (test) => (
  <div className="topicPage">
    话题页面的侧边{test.name1}
  </div>
);
const Content = (test) => (
  <div className="topicPage">
    话题页面的内容{test.name2}
  </div>
);
const Main = (test) => (
  <div className="topicPage">
    话题页面的主要{test.name3}
  </div>
);

export default Topic;