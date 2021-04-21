import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail} from './views'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/:id' component={ProjectDetail} />
      <Route path='/' component={Overview} />
    </Switch>
  </Router>
)
export default App
