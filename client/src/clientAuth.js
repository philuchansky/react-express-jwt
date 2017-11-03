import axios from 'axios'
import jwtDecode from 'jwt-decode'

const clientAuth = axios.create()
clientAuth.defaults.headers.common.token = getToken()

function getToken() {
	return localStorage.getItem('token')
}

function setToken(token) {
	localStorage.setItem('token', token)
	return token
}

function getCurrentUser() {
	const token = getToken()
	if(token) return jwtDecode(token)
	return null
}

function logIn(credentials) {
	return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials })
		.then(res => {
			const token = res.data.token
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
function signUp(userInfo) {
	return clientAuth({ method: 'post', url: '/api/users', data: userInfo})
		.then(res => {
			const token = res.data.token
			if(token) {
				clientAuth.defaults.headers.common.token = setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

function logOut() {
	localStorage.removeItem('token')
	delete clientAuth.defaults.headers.common.token
	return true
}


export default {
	getCurrentUser,
	logIn,
	signUp,
	logOut
}