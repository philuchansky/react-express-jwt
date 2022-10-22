import {useEffect, useMemo, useState} from "react";
import bg from '../assets/bg.jpg'
import httpClient from '../httpClient.js'
import {Link,Navigate} from "react-router-dom";

function SignIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    if (props.isLogin) {
        return (
        <Navigate to="/" />
        )
    }

    const submit = async (event) => {
            event.preventDefault();
        httpClient.logIn({username, password}).then((user) => {
            if (user) {
                console.log(user)
                props.login(user.username)
                window.location.href = '/'
            } else {
                console.log('no user')
                alert('Username or password is incorrect')
            }
        })
    }
    const usernameChange = (event) => {
        setUsername(event.target.value)
    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
    }


    return (
        <div className="App flex flex-row justify-center min-h-[100vh] max-h-[100vh]">
            <div className="w-[45vw] flex justify-center items-center flex-col min-h-full ">
                <div className='sm:w-96 w-screen lg:p-0 p-6'>
                    <h1 className="text-5xl font-bold my-4">Sign In</h1>
                    <p className='my-2 mb-4'>Don't have an account yet? <Link to={'/signup'} className='text-blue-600 hover:text-blue-900 ' href="#">Sign Up</Link></p>
                    <form  onSubmit={submit}>
                        <div className="flex flex-col my-2 ">
                            <label className='mb-1' htmlFor="username">Username
                            </label>
                            <input className={'p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500 '} type="text" placeholder="Username" name="username" value={username} onChange={usernameChange}  />
                        </div>


                        <div className="flex flex-col my-2 ">
                            <label className='mb-1' htmlFor="password">Password
                            </label>
                            <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="password" placeholder="Password" name="password"  value={password} onChange={passwordChange}/>
                        </div>

                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded my-2 w-full'>Sign In</button>

                    </form>
                </div>

            </div>
            <div className="w-[55vw] hidden lg:block">
                <img src={bg} alt="" className="w-full h-full object-cover object-bottom"/>
            </div>
        </div>
    )
}

export default SignIn
