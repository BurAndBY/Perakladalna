import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Games from './views/games'
import Linux from './views/linux'
import YDKJ2015 from './views/y-d-k-j2015'
import Windows from './views/windows'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Page} exact path="/" />
        <Route component={Games} exact path="/games" />
        <Route component={Linux} exact path="/linux" />
        <Route component={YDKJ2015} exact path="/y-d-k-j2015" />
        <Route component={Windows} exact path="/windows" />
        <Route component={AboutUs} exact path="/about-us" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
