function AturKonten() {
    console.log('atur konten')
    return(
        <div className='p-8 flex justify-center'>
            <div className="overflow-x-auto ">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Judul Konten</th>
                        <th>Tanggal Posting</th>
                        <th>Diposting Oleh</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Ayam Dulu atau Telur</td>
                        <td>22 Oktober 2022</td>
                        <td>Rembo</td>
                        <td>
                            <button className="btn btn-info rounded btn-sm">Detail</button>
                            <button className="btn btn-success mx-2 rounded btn-sm">Edit</button>
                            <button className="btn btn-error rounded btn-sm">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AturKonten;