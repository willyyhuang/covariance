import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail, ProjectDocumentation} from './views'

// Front-end of the application, first introduce router system, in this case we are using hashRouter so that when it is hosted on gh-pages, the routing system works.
const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Overview} />
      <Route path='/Project/:id' component={ProjectDetail} />
      <Route path='/Documentation' component={ProjectDocumentation} />
    </Switch>
  </Router>
)
export default App
