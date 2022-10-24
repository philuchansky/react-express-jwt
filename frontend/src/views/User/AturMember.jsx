import { useEffect, useState } from "react";
import httpClient from "../../httpClient.js";
import { Link } from "react-router-dom";

function AturMember(props) {
  const [user, setUser] = useState(props.isLogin);

  const [data, setData] = useState([]);
  useEffect(() => {
    httpClient.getAllUsers().then((res) => {
      let data = res.filter((item) => item.username !== user.username);
      setData(data);
    });
  }, []);

  const handleDelete = (name) => {
    setData(data.filter((item) => item.username !== name));
    httpClient.deleteUser(name).then((res) => {});
  };

  return (
    <div className="p-8 flex justify-center pt-[100px]">
      <div className="overflow-x-auto  border-[1px] shadow-md rounded-md">
        <table className="table min-w-screen overflow-x-auto min-w-[1100px]   ">
          <thead className="headTable">
            <tr className="headTable">
              <th className="headTable"></th>
              <th className="headTable">Nama</th>
              <th className="headTable">Email</th>
              <th className="headTable">Role</th>
              <th className="headTable">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td className="actionbutton">
                    <Link
                      to={"/member/detail/" + item.username}
                      href="frontend/src/Views/User/AturMember.jsx"
                    >
                      <button className="btn btn-info rounded btn-sm text-white">
                        Detail
                      </button>
                    </Link>
                    {user.role === "admin" && item.role !== "admin" ? (
                      <>
                        <Link
                          to={"/member/edit/" + item.username}
                          href="frontend/src/Views/User/AturMember.jsx"
                        >
                          <button className="btn btn-success mx-2 rounded btn-sm text-white">
                            Edit
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(item.username)}
                          className="btn btn-error rounded btn-sm text-white"
                        >
                          Delete
                        </button>
                      </>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default AturMember;
