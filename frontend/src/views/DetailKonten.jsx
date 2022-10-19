import {useParams} from "react-router-dom";
import httpClient from "../httpClient.js";
import {useEffect, useState} from "react";
const DetailKonten = () => {
    const {id} = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        httpClient.getKontenById(id).then((res) => {
            setData(res);
            console.log(res)
        })
    },[]);

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
export default DetailKonten;