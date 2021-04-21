import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail} from './views'

const App = () => (
  <BrowserRouter>
    <Route path='/soen-357'>
      <Redirect to='/' />
    </Route>
    <Route path='/:id' component={ProjectDetail} />
    <Route exact path='/' component={Overview} />
  </BrowserRouter>
)
export default App
