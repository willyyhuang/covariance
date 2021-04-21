import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail} from './views'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Overview} />
      <Route path='/Project/:id' component={ProjectDetail} />
    </Switch>
  </Router>
)
export default App
