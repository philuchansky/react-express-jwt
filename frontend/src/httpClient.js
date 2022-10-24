import axios from 'axios'
import jwtDecode from 'jwt-decode'
const API_LINK  = import.meta.env.VITE_API_LINK
const httpClient = axios.create()

// create an interceptor that will run before every request
httpClient.defaults.withCredentials = true

//get token from local storage
httpClient.getToken = function() {
	return localStorage.getItem('token')
}

//set token to local storage and return it
httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

// get the current user from local storage
httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

// get all users
httpClient.getAllUsers = function() {
	return this({ method: 'get', url: API_LINK + 'api/users' })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

// delete user
httpClient.deleteUser = function(nama) {
	return this({ method: 'delete', url: API_LINK + 'api/users/' + nama })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

//update user
httpClient.updateUser = function(nama, data) {
	console.log("masuk update")
	return this({ method: 'patch', url: API_LINK + 'api/users/' + nama, data: data })
		.then((serverResponse) => {
			return serverResponse.data
		})
}


httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: API_LINK + 'api/users/authenticate/',data: credentials
	})
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
	return this({ method: 'post', url: API_LINK + 'api/users', data: userInfo})
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
	return this({ method: 'get', url: API_LINK + 'api/users/' + username })
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
	return this({ method: 'post', url: API_LINK + 'api/konten', data: konten})
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.getAllKonten = function() {
	return this({ method: 'get', url: API_LINK + 'api/konten/' })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.getKontenById = function(id) {
	return this({ method: 'get', url: API_LINK + 'api/konten/' + id })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.deleteKontenById = function(id) {
	return this({ method: 'delete', url: API_LINK + 'api/konten/' + id })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.updateKontenById = function(id, konten) {
	return this({ method: 'patch', url: API_LINK + 'api/konten/' + id, data: konten })
		.then((serverResponse) => {
			return serverResponse.data
		})
}
httpClient.cariEmail = function(email) {
	return this({ method: 'get', url: API_LINK + 'api/users/email/' + email })
		.then((serverResponse) => {
			return serverResponse.data
		})
}

// token is automatically sent with every request
httpClient.defaults.headers.common.token = httpClient.getToken()

export default httpClient