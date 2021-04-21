import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {Overview, ProjectDetail} from './views'

const App = () => (
  <BrowserRouter basename='soen-357'>
    <Route path='/:id' component={ProjectDetail} />
    <Route path='/' component={Overview} />
  </BrowserRouter>
)
export default App
