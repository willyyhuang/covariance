import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail} from './views'

const App = () => (
  <BrowserRouter>
    <Route path='/:id' component={ProjectDetail} />
    <Route exact path='/' component={Overview} />
  </BrowserRouter>
)
export default App
