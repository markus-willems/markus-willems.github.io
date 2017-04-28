import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route } from 'react-router-dom'

// import page components
import Home from './components/Home'
//import About from './components/About'

// styles
import normalize from './assets/css/normalize.css'
import style from './assets/css/main.css'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)