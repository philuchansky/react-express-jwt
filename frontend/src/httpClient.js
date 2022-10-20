import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}
httpClient.getAllUsers = function() {
	return this({ method: 'get', url: 'http://localhost:3001/api/users/' })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.deleteUser = function(nama) {
	return this({ method: 'delete', url: 'http://localhost:3001/api/users/' + nama })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.updateUser = function(nama, data) {
	console.log("masuk update")
	return this({ method: 'patch', url: 'http://localhost:3001/api/users/' + nama, data: data })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: 'http://localhost:3001/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: 'http://localhost:3001/api/users', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.cariUser = function(username) {
	return this({ method: 'get', url: 'http://localhost:3001/api/users/' + username })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	delete this.defaults.headers.common.token
	return true
}

httpClient.createKonten = function(konten) {
	return this({ method: 'post', url: 'http://localhost:3001/api/konten', data: konten})
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.getAllKonten = function() {
	return this({ method: 'get', url: 'http://localhost:3001/api/konten/' })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.getKontenById = function(id) {
	return this({ method: 'get', url: 'http://localhost:3001/api/konten/' + id })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.deleteKontenById = function(id) {
	return this({ method: 'delete', url: 'http://localhost:3001/api/konten/' + id })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.updateKontenById = function(id, konten) {
	return this({ method: 'patch', url: 'http://localhost:3001/api/konten/' + id, data: konten })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient