import httpClient from "../httpClient.js";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Beranda(props) {

    const [allKonten, setAllKonten] = useState([]);



    useEffect(() => {
        httpClient.getAllKonten().then((res) => {
            setAllKonten(res);
            console.log(res)
        })
    },[])

   const handleHTML = (html) => {
       let clean = html.replace(/(<([^>]+)>)/ig,"");
        return clean;
    }

    function readingTime(textinput) {
        const text = textinput
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        return Math.ceil(words / wpm);
    }

    return(
        <div className='p-8 grid justify-center w-auto  gap-6 grid-cols-2 pt-[100px]' >
                {
                    allKonten.map((item, index) => {
                        return(
                        <Link key={index}  className="border-[.1em] p-6 rounded-md shadow-sm " to={"/konten/"+item._id}>
                            <h1 className="font-semibold text-xl ">{item.title}</h1>
                            <p className='my-1'>{item.date.substring(0, 10)} | {readingTime(handleHTML(item.content))} min read</p>
                            <div className="line-clamp-3">{handleHTML(item.content)}</div>
                        </Link>
                        )
                    })
                }

        </div>
    )
}
export default Beranda;