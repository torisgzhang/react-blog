import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Topic from "./pages/Topic/Topic";

const typeArea = {
    width: 1090,
    margin: '0 auto',
}
const App = () => (
  
  <Router>
    <div>
      <HeaderWrapper />
      <div style={ typeArea }>
        <Route exact path="/" component={HomeWrapper} />
        <Route path="/about" component={AboutWrapper} />
        <Route path="/topics" component={TopicWrapper} />
      </div>
    </div>
  </Router>
);

const HomeWrapper = () => (
  <Home />
);
const AboutWrapper = () => (
  <About />
);
const TopicWrapper = () => (
  <Topic />
);
const HeaderWrapper = () => (
  <Header />
)
export default App;