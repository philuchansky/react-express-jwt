import './App.css'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";


import SignUp from "./Views/SignUp.jsx";
import Navbar from "./Views/Navbar.jsx";
import SignIn from "./Views/SignIn.jsx";
import httpClient from "./httpClient.js";
import Member from "./Views/Member.jsx";
import AturKonten from "./Views/AturKonten.jsx";
import Beranda from "./Views/Beranda.jsx";
import BuatKonten from "./Views/BuatKonten.jsx";
import DetailMember from "./Views/DetailMember.jsx";
import EditMember from "./Views/EditMember.jsx";
import DetailKonten from "./Views/DetailKonten.jsx";
import EditKonten from "./Views/EditKonten.jsx";

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
        <Route path="/" element={<Navbar logout={logout} isLogin={username} />} >
            <Route index element={<Beranda  isLogin={username}  />} />
            <Route path="member" element={<Member />} />
            <Route path="buatkonten" element={<BuatKonten  isLogin={username} />} />
            <Route path="aturkonten" element={<AturKonten />} />
            <Route path="member/detail/:username" element={<DetailMember />} />
            <Route path="member/edit/:username" element={<EditMember />} />
            <Route path="konten/:id" element={<DetailKonten />} />
            <Route path="konten/edit/:id" element={<EditKonten />} />

        </Route>
            <Route path="signup" element={<SignUp login={loginSuccess} isLogin={username}  />} />
            <Route path="signin" element={<SignIn login={loginSuccess} isLogin={username}  /> } />
        </Routes>
    </BrowserRouter>

  )
}

export default App
