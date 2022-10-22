import httpClient from "../../httpClient.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function AturKonten(props) {

    const [data, setData] = useState([]);
    const [user, setUser] = useState(props.isLogin);

    useEffect(() => {
        httpClient.getAllKonten().then((res)  => {
            setData(res);
            console.log(res)
        });
    },[]);
    const handleDelete = (id) => {
        setData(data.filter((item) => item._id !== id))
        httpClient.deleteKontenById(id).then((res) => {
            console.log(res)
        })
    }

    return(
        <div className='p-8 flex justify-center  pt-[100px]'>
            <div className="overflow-x-auto border-[1px] shadow-md rounded-md">
                <table className="table min-w-screen overflow-x-auto sm:min-w-[1100px] max-w-screen">
                    <thead  >
                    <tr className="headTable" >
                        <th className="headTable"></th>
                        <th  className="headTable">Judul Konten</th>
                        <th className="headTable">Tanggal Posting</th>
                        <th className="headTable">Diposting Oleh</th>
                        <th className="headTable">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="titletab">{item.title}</td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td>{item.user}</td>
                                <td className="actionbutton">
                                    <Link to={'/konten/'+item._id} href="frontend/src/Views/Content/AturKonten.jsx">
                                        <button className="btn btn-info rounded btn-sm text-white">Detail</button>
                                    </Link>
                                    {
                                        user.role === 'admin' && item.user === user.username ? (
                                            <>
                                                <Link to={'/konten/edit/'+item._id} href="frontend/src/Views/Content/AturKonten.jsx">
                                                    <button className="btn btn-success mx-2 rounded btn-sm text-white">Edit</button>
                                                </Link>
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-error rounded btn-sm text-white">Delete</button>

                                            </>
                                        ):null
                                    }


                                </td>
                            </tr>
                        )
                    }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AturKonten;