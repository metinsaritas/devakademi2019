import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainPage from './pages/MainPage'
import AuctionDetailPage from './pages/AuctionDetailPage'
import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} exact/>
        <Route path="/auction/:id" component={AuctionDetailPage} exact />
      </Router>
    )
  }
}

export default App;
