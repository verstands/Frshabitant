const TableauAppels = () => {
    return (
        <div>
            <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                <h2 className='font-bold'>Appels</h2>
                <div className='border border-[#ffffff]  shadow m-7 bg-[#ffffff]'>
                <center>
                    <table className='gap-8'>
                        <thead className='border-b h-12 bg-[#e6e8f0] border-[#e6e8f0] rounded-t-[20px]'>
                            <tr>
                                <th style={{ width: '200px' }}>Nom</th>
                                <th style={{ width: '200px' }}>Date</th>
                                <th style={{ width: '200px' }}>Nombres</th>
                                <th style={{ width: '200px' }}>Temps</th>
                                <th style={{ width: '200px' }}>Créneaux</th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr className=''>

                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
            </div>
        </div>
    )
}

export default TableauAppels