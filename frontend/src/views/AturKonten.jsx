import httpClient from "../httpClient.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function AturKonten() {

    const [data, setData] = useState([]);

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
            <div className="overflow-x-auto ">
                <table className="table">
                    <thead  >
                    <tr className="headTable" >
                        <th></th>
                        <th >Judul Konten</th>
                        <th>Tanggal Posting</th>
                        <th>Diposting Oleh</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td>{item.user}</td>
                                <td>
                                    <Link to={'/konten/'+item._id} href="">
                                        <button className="btn btn-info rounded btn-sm">Detail</button>
                                    </Link>
                                    <button className="btn btn-success mx-2 rounded btn-sm">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-error rounded btn-sm">Delete</button>

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