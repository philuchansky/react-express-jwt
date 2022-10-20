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

    const handleHTML = (html) => {
        return {__html: html};
    }

    return (
        <div className="pt-[120px] mb-20 flex justify-center">
            <div className="w-2/3">
                <h1 className="text-5xl font-bold mb-2 w-3/4 leading-tight ">{data.title}</h1>
                <p className="font-semibold  mb-6 ">posted on {data.date?.substring(0, 10)} by {data.user}</p>
                <div className="prose prose-gray block m-0 max-w-none" dangerouslySetInnerHTML={handleHTML(data.content)} ></div>
            </div>
        </div>
    )
}
export default DetailKonten;