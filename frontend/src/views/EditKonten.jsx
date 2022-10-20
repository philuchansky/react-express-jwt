import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useEffect, useState} from "react";
import httpClient from "../httpClient.js";
import {useParams} from "react-router-dom";
function EditKonten(props) {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState(props.isLogin.username);
    const [user, setUser] = useState(props.isLogin);
    const {id} = useParams()

    useEffect(
        () => {
            if(user.role !== "admin"){
                window.location.href = "/"
            }

            httpClient.getKontenById(id).then((res) => {
                setTitle(res.title)
                setValue(res.content)
                console.log(title)
            })
        },[]
    )

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(value)
        let data = {
            user : username,
            title: title,
            content: value,
        }
        httpClient.updateKontenById(id,data).then((res) => {
            window.location.href = "/konten/" + id
        })
    }

    return (
        <div className="py-12 w-full px-32  pt-[100px]">
            <form onSubmit={handleSubmit}>
                <label  className='mb-1 text-xl font-semibold' htmlFor="title">Judul Konten</label>
                <input  placeholder={"Title"} required type="text"  value={title} onChange={(event)=>setTitle(event.target.value)} className="border border-gray-400 px-3 rounded-md w-full p-2 my-2"/>
                <label  className='mb-1 text-xl font-semibold' htmlFor="title">Isi Konten</label>
                <ReactQuill placeholder={"Isi Konten ..."} modules={modules}  value={value} onChange={setValue} />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full">Submit</button>
            </form>

        </div>
    );
}
export default EditKonten;