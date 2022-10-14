import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";


import SignUp from "./Views/SignUp.jsx";
import Home from "./Views/Home.jsx";
import SignIn from "./Views/SignIn.jsx";
import httpClient from "./httpClient.js";

function App() {

    const [username, setUsername] = useState(httpClient.getCurrentUser())
    const loginSuccess = (username) => {
        setUsername(httpClient.getCurrentUser())
    }
    const logout = () => {
        httpClient.logOut()
        setUsername('')
        window.location.href = '/'
    }
return(
    <BrowserRouter>
        <Routes>
        <Route index element={<Home logout={logout} isLogin={username} />} />
            <Route path="signup" element={<SignUp login={loginSuccess} isLogin={username}  />} />
            <Route path="signin" element={<SignIn login={loginSuccess} isLogin={username}  /> } />
        </Routes>
    </BrowserRouter>

  )
}

export default App
