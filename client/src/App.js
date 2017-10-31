import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Home from './Home'
import LogIn from './LogIn'
import SignUp from './SignUp'
import VIP from './VIP'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>

        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/vip" component={VIP} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
