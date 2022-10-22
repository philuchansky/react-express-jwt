import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import httpClient from "../../httpClient.js";
function DetailMember() {
    const [data, setData] = useState([])
    let { username } = useParams();
    useEffect(() => {
        httpClient.cariUser(username).then((res) => {
            setData(res)
        });
    }, []);
    return(
        <div
            className="min-w-[max]  py-24 border-solid  p-8 flex justify-center items-center pt-[100px]">
            <div className="border-solid bg-[#FFFFFF] border-2 min-w-[300px] py-2 px-6 h-[400px] drop-shadow-xl rounded-md">
                <div className="bg-[url('https://i.pravatar.cc/150?img=56')] bg-cover shadow-sm bg-center w-[150px] h-[150px] rounded-full mx-auto my-6 "></div>
                <h1 className="font-semibold text-2xl my-2 mb-6 text-center">{data.username}</h1>
                <table>
                    <tr>
                        <td className="pr-6 pb-A symlink (symbolic) is a type of file that points to other files or directories (folders) in Linux.

You can create a symlink (symbolic) by using the ln command in the command line.

Symbolic links are useful because they act as shortcuts to a file or directory.

In this article, I will go over how to use the ln command to create a symlink to a file or directory.

What is the difference between soft and hard links in Linux?
A soft link or symbolic link will point to the original file on your system. A hard link will create a copy of the file.

Soft links can point to other files or directories on a different file system, whereas hard links cannot.

How to create a symlink to a file
You can find the command line using the Terminal application on Mac or using the Command Prompt on Windows.

Here is the basic syntax for creating a symlink to a file in your terminal.

ln -s existing_source_file optional_symbolic_link
You use the ln command to create the links for the files and the -s option to specify that this will be a symbolic link. If you omit the -s option, then a hard link will be created instead.

The existing_source_file represents the file on your computer that you want to create the symbolic link for.

The optional_symbolic_link parameter is the name of the symbolic link you want to create. If omitted, then the system will create a new link for you in the current directory you are in.

Let's take a look at an example to better understand how this works.

On my Desktop I have a file called example_fcc_file.txt.

Screen-Shot-2022-02-19-at-7.48.02-PM
I will need to first open up my terminal, and then make sure I am in the Desktop directory. I can run the command cd Desktop to navigate to my Desktop.

After running that command, you should see you are now in the Desktop.

jessicawilkins@Dedrias-MacBook-Pro-2 ~ % cd Desktop
jessicawilkins@Dedrias-MacBook-Pro-2 Desktop %
I can then use the ln command to create a new symbolic link called fcc_link.txt.2">Nama</td>
                        <td className="pb-2">: {data.nama}</td>
                    </tr>
                    <tr>
                        <td className="pb-2">Email</td>
                        <td className="pb-2">: <a className="text-sky-600 hover:text-sky-800 hover:underline"
                                                  href={"mailto:"+data.email}>{data.email}</a></td>
                    </tr>
                    <tr>
                        <td className="pb-2">Role</td>
                        <td className="pb-2">: {data.role}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default DetailMember;