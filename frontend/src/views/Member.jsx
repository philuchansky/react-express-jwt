import {useEffect, useState} from "react";
import httpClient from "../httpClient.js";
import {Link} from "react-router-dom";

function Member() {

    const [data, setData] = useState([])
    useEffect(() => {
        httpClient.getAllUsers().then((res) => {
            console.log(res)
            setData(res)
        })

    },[])

    const handleDelete = (name) => {

        setData(data.filter((item) => item.username !== name))

        httpClient.deleteUser(name).then((res) => {
            console.log(res)
        })
    }

    return(
        <div className='p-8 flex justify-center pt-[100px]'>
        <div className="overflow-x-auto">
            <table className="table min-w-screen overflow-x-auto sm:min-w-[1000px]  ">
                <thead className="headTable">
                <tr className="headTable"   >
                    <th></th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td className='actionbutton'>
                                <Link to={'/member/detail/'+item.username} href="">
                                    <button className="btn btn-info rounded btn-sm">Detail</button>
                                </Link>
                                <Link to={'/member/edit/'+item.username} href="">
                                    <button className="btn btn-success mx-2 rounded btn-sm">Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(item.username)} className="btn btn-error rounded btn-sm">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </div>
    )
}
export default Member;