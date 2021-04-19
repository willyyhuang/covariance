import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import React from 'react'
import {Overview} from './views'

const App = () => (
  <BrowserRouter>
    <Route path='*'>
      <Redirect to='/' />
    </Route>
    <Route exact path='/' component={Overview} />
  </BrowserRouter>
)
export default App
