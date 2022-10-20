import {Link, useParams} from "react-router-dom";
import { redirect } from "react-router-dom";
import {useEffect, useState} from "react";
import httpClient from "../httpClient.js";
function EditMember(props){
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [id, setId] = useState('')
    const [data, setData] = useState([])
    let { username } = useParams();
    const [user, setUser] = useState(props.isLogin)



    useEffect(() => {
        if (user.role !== 'admin' && user.username !== username) {
            window.location.href = '/'
        }

        httpClient.cariUser(username).then((res) => {
            setData(res)
            setNama(res.nama)
            setEmail(res.email)
            setRole(res.role)
            setId(res.id)

        });
    }, []);

    const onsubmit = (e) => {
        console.log('submit')
        e.preventDefault()
        let data = {
            nama: nama,
            email: email,
            role: role,
        }
        httpClient.updateUser(username,data).then((res) => {
        })
        window.location.href = '/member/detail/'+username

    }

    return(
        <div className=" flex justify-center items-center flex-col min-h-full  pt-[80px]">
            <div className='sm:w-96 w-screen lg:p-8 mt-8 bg-white p-6 shadow-xl rounded-md border-[.6px]'>
                <h1 className="text-3xl font-bold my-4">Update Data</h1>
                <form onSubmit={onsubmit} >
                    <div className="flex flex-col my-2 ">
                        <label className='mb-1' htmlFor="username">Username
                        </label>
                        <input disabled className={'p-2 px-3 border cursor-not-allowed border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500 ' } type="text" placeholder="Username" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="flex flex-col my-2 ">
                        <label className='mb-1' htmlFor="name">Nama Lengkap</label>
                        <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="text" placeholder="Nama Lengkap" name="name" value={nama} onChange={(event) => setNama(event.target.value)}  />
                    </div>
                    <div className="flex flex-col my-2 ">
                        <label className='mb-1' htmlFor="email">Email</label>
                        <input className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' type="email" placeholder="Email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    {
                        user.role === 'admin' && user.username !== role ? (
                            <div className="flex flex-col my-2 ">
                                <label className='mb-1' htmlFor="role">Role</label>
                                <select className='p-2 px-3 border border-gray-400 rounded-md focus:outline-2 focus:outline-blue-500' name="role" value={role} onChange={(event) => setRole(event.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="member">Member</option>
                                </select>
                            </div>
                        ) : null


                    }

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded my-2 w-full'>Update Data</button>

                </form>
            </div>

        </div>
    )
}
export default EditMember