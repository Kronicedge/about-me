import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './Style.css'
import AboutMe from './AboutMe'
import WorkExperience from './WorkExperience'
import ProjectsPage from './ProjectsPage'

class App extends Component {
  render = () => {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={AboutMe} />
            <Route path='/work-history' component={WorkExperience} />
            <Route path='/projects-page' component={ProjectsPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
