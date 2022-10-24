import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import httpClient from "../../httpClient.js";
function DetailMember() {
  const [data, setData] = useState([]);
  let { username } = useParams();
  useEffect(() => {
    httpClient.cariUser(username).then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className="min-w-[max]  py-24 border-solid  p-8 flex justify-center items-center pt-[100px]">
      <div className="border-solid bg-[#FFFFFF] border-2 min-w-[300px] py-2 px-6 h-[400px] drop-shadow-xl rounded-md">
        <div className="bg-[url('https://i.pravatar.cc/150?img=56')] bg-cover shadow-sm bg-center w-[150px] h-[150px] rounded-full mx-auto my-6 "></div>
        <h1 className="font-semibold text-2xl my-2 mb-6 text-center">
          {data.username}
        </h1>
        <table>
          <tr>
            <td className="pr-6 ">Nama</td>
            <td className="pb-2">: {data.nama}</td>
          </tr>
          <tr>
            <td className="pb-2">Email</td>
            <td className="pb-2">
              :{" "}
              <a
                className="text-sky-600 hover:text-sky-800 hover:underline"
                href={"mailto:" + data.email}
              >
                {data.email}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pb-2">Role</td>
            <td className="pb-2">: {data.role}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default DetailMember;
