
const TableLead = () => {
    return (
        <>
            <div className='p-5 flex items-center justify-between'>
                <h2 className=' my-6 text-2xl'>Tous les leads</h2>
            </div>
            <div className='border border-[#ffffff] rounded-[20px] shadow m-7 bg-[#ffffff]'>
                <div className='p-2 flex'>
                    <div className='w-6/12'>
                        <input type="text" placeholder='Recherche' className='border border-gray-300 rounded-[20px] px-20 py-1' />
                    </div>
                    <div className='w-3/12'>
                        <select name="" className='border border-gray-300 rounded-[20px]  py-1' id="">
                            <option value="">Tri et Filtres</option>
                        </select>
                    </div>
                    <div className='w-3/12'>
                        <input type="text" placeholder='Selectionner tout' className='border border-gray-300 rounded-[20px]  py-1' />
                    </div>
                </div>
                <center>
                    <table className='gap-8'>
                        <thead className='border-b h-12 bg-[#e6e8f0] border-[#e6e8f0] rounded-t-[20px]'>
                            <tr>
                                <th style={{ width: '200px' }}>Etat</th>
                                <th style={{ width: '200px' }}>Nom</th>
                                <th style={{ width: '200px' }}>Prenom</th>
                                <th style={{ width: '200px' }}>Sourceur</th>
                                <th style={{ width: '200px' }}>Campagne Affiliés</th>
                                <th style={{ width: '200px' }}>Telephone</th>
                                <th style={{ width: '200px' }}>Email</th>
                                <th style={{ width: '200px' }}>Appels</th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr className='text-center'>
                                <td >Chistine chabez</td>
                                <td >231</td>
                                <td>1234</td>
                                <td>10:30</td>
                                <td>1</td>
                                <td>3</td>
                                <td>3</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )
}

export default TableLead