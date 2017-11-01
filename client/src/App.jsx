import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import SignUp from './views/SignUp'
import VIP from './views/VIP'
import Home from './views/Home'

class App extends React.Component {
	state = {}
	
	render() {
		return (
			<div className='App'>
				<NavBar />
				<Switch>
					<Route path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/vip" component={VIP} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		)
	}
}

export default App