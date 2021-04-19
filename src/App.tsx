import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import {Overview} from './views'

const App = () => (
  <BrowserRouter>
    <Route path='/' component={Overview} />
  </BrowserRouter>
)
export default App
