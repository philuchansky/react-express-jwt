import React from 'react'
import NavBar from './NavBar'

class App extends React.Component {
	state = {}
	
	render() {
		return (
			<div className='App'>
				<NavBar />
				<h1>React with JWT</h1>
			</div>
		)
	}
}

export default App