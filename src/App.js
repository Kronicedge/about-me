import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './Style.css'
import AboutMe from './AboutMe.js'
import WorkExperience from './WorkExperience.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/work-history" component={WorkExperience} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
