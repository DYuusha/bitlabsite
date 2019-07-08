import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Courses from './courses/courses.js';
const routing = (
  <Router>
    <div>
    <Route exact path="/" component={Home} />
      <Route path="/index" component={Home} />
      <Route path="/courses" component={Courses} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.querySelector("#root"));