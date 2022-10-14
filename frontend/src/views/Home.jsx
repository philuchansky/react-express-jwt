import httpClient from '../httpClient.js'
import {useMemo} from "react";


function Home(props) {
    useMemo(() => {
        if(!props.isLogin){
            window.location.href = '/signin'
        }
    }, []);



    httpClient.getAllUsers().then((res) => {
    console.log(res)
})
    return(

        <div>
            <h1>Home</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}
export default Home;