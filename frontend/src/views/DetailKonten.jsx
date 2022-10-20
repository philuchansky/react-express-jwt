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
        <div className="pt-[120px] flex justify-center min-h-screen">
            <div className="w-3/4 bg-white mb-4 px-12 py-12 rounded-md pt-8 h-fit">
                <h1 className="text-5xl font-bold mb-2 w-3/4 leading-tight text-black">{data.title}</h1>
                <p className="font-semibold  mb-6 text-black">Posted on {data.date?.substring(0, 10)} by {data.user}</p>
                <div className="prose prose-gray block m-0 max-w-none text-black" dangerouslySetInnerHTML={handleHTML(data.content)} ></div>
            </div>
        </div>
    )
}
export default DetailKonten;