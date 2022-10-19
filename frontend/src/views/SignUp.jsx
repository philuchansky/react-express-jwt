import {useMemo, useState} from "react";
import bg from '../assets/bg.jpg'
import httpClient from '../httpClient.js'
import {Link} from "react-router-dom";

function SignUp(props) {
    const [username, setUsername] = useState('')
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRepeatPassword, setErrorRepeatPassword] = useState('')

    useMemo(() => {
        if(props.isLogin){
            window.location.href = '/'
        }
    }, []);



    const submit = async (event) => {
        event.preventDefault();
        if(username === '' || nama === '' || email === '' || password === '' || repeatPassword === ''){
            alert('Please fill all the field')
            return;
        }

        // if (password.length < 7) {
        //     setErrorPassword('Password must be 8 characters long')
        //     return;
        // }

        if (password !== repeatPassword) {
            console.log('password tidak sama')
            return;
        }



        let data = {
            username: username,
            nama: nama,
            email: email,
            password: password,
            role: 'member',
        }

        const duplicate = await httpClient.cariUser(username).then((res) => {
            return res;
        });
        if (duplicate){
            if (duplicate.username === username) {
                setErrorUsername('(Username already exist)')
                console.log('username sudah ada')
                return;
            }
            if (duplicate.email === email) {
                setErrorUsername('(Email already exist)')
                console.log('email sudah ada')
                return;
            }

        }


        httpClient.signUp(data).then(user => {
            if (user) {
                console.log(user)
                props.login(user.username)
                window.location.href = '/'
            }
        })


    }
    const usernameChange = (event) => {
        setUsername(event.target.value)
        setErrorUsername('')
    }
    const repeatedPasswordChange = (event) => {
        setRepeatPassword(event.target.value)
        if(event.target.value !== password){
            setErrorRepeatPassword('(Password not match)')
            return;
        }
        setErrorRepeatPassword('')
    }
    const passwordChange = (event) => {
        setPassword(event.target.value)
        // if(password.length < 7){
        //     setErrorPassword('(Password must be 8 characters long)')
        // } else {
        //     setErrorPassword('')
        // }

        if(event.target.value !== repeatPassword && repeatPassword !== ''){
            setErrorRepeatPassword('(Password not match)')
        } else  {
            setErrorRepeatPassword('')
        }
    }


    return (
        <div className="App flex flex-row justify-center min-h-[100vh] max-h-[100vh]">
            <div className="w-[45vw] flex justify-center items-center flex-col min-h-full ">
                <div className='sm:w-96 w-screen lg:p-0 p-6'>
                    <h1 className="text-5xl font-bold my-4">Sign Up</h1>
                    <p className='my-2 mb-4'>Already have an account ? <Link to={'/signin'}  className='text-blue-600 hover:text-blue-900 ' >Sign In</Link></p>
                    <form  onSubmit={submit}>
                        <div className="flex flex-col my-2 ">
                            <label  htmlFor="username">Username
                                <span className="ml-2 text-sm text-red-500">{errorUsername}</span>
                            </label>
                            <input className={'p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500 ' + (errorUsername !== '' ? "border-red-500":'') } type="text" placeholder="Username" name="username" value={username} onChange={usernameChange}  />
                        </div>
                        <div className="flex flex-col my-2 ">
                            <label  htmlFor="name">Nama Lengkap</label>
                            <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="text" placeholder="Nama Lengkap" name="name" value={nama} onChange={(event) => setNama(event.target.value)}  />
                        </div>
                        <div className="flex flex-col my-2 ">
                            <label  htmlFor="email">Email</label>
                            <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="email" placeholder="Email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="flex flex-col my-2 ">
                            <label  htmlFor="password">Password
                                <span className="ml-2 text-sm text-red-500">{errorPassword}</span>
                            </label>
                            <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="password" placeholder="Password" name="password"  value={password} onChange={passwordChange}/>
                        </div>
                        <div className="flex flex-col my-2 ">
                            <label  htmlFor="password">Konfirmasi Password
                                <span className="ml-2 text-sm text-red-500">{errorRepeatPassword}</span>
                            </label>
                            <input className={'p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' + (errorRepeatPassword !== '' ? ' border-red-500':'')} type="password" placeholder="Konfirmasi Password" name="password" value={repeatPassword} onChange={repeatedPasswordChange}/>
                        </div>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded my-2 w-full'>Sign Up</button>

                    </form>
                </div>

            </div>
            <div className="w-[55vw] hidden lg:block">
                <img src={bg} alt="" className="w-full h-full object-cover object-bottom"/>
            </div>
        </div>
    )
}

export default SignUp
