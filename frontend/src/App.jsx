import './App.css'
import {BrowserRouter, HashRouter, Route, Routes, Navigate} from "react-router-dom";
import {useState} from "react";


import SignUp from "./Views/SignUp.jsx";
import Navbar from "./Views/Navbar.jsx";
import SignIn from "./Views/SignIn.jsx";
import httpClient from "./httpClient.js";
import AturMember from "./Views/User/AturMember.jsx";
import AturKonten from "./Views/Content/AturKonten.jsx";
import Beranda from "./Views/Beranda.jsx";
import BuatKonten from "./Views/Content/BuatKonten.jsx";
import DetailMember from "./Views/User/DetailMember.jsx";
import EditMember from "./Views/User/EditMember.jsx";
import DetailKonten from "./Views/Content/DetailKonten.jsx";
import EditKonten from "./Views/Content/EditKonten.jsx";

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
            <Route path="member" element={<AturMember isLogin={username} />} />
            <Route path="buatkonten" element={<BuatKonten  isLogin={username} />} />
            <Route path="aturkonten" element={<AturKonten isLogin={username}/>} />
            <Route path="member/detail/:username" element={<DetailMember isLogin={username}/>} />
            <Route path="member/edit/:username" element={<EditMember isLogin={username}/>} />
            <Route path="konten/:id" element={<DetailKonten isLogin={username}/>} />
            <Route path="konten/edit/:id" element={<EditKonten  isLogin={username}/>} />
        </Route>
            <Route path="signup" element={<SignUp login={loginSuccess} isLogin={username}  />} />
            <Route path="signin" element={<SignIn login={loginSuccess} isLogin={username}  /> } />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </BrowserRouter>

  )
}

export default App
