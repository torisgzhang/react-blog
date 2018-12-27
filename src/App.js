import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Topic from "./pages/Topic/Topic";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomeWrapper} />
      <Route path="/about" component={AboutWrapper} />
      <Route path="/topics" component={TopicWrapper} />
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

export default App;