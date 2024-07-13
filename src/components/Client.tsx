
const Client = () => {
    return (
        <>
            <div className='border border-[#ffffff] rounded-[20px] shadow m-7 bg-[#ffffff]'>
                <center>
                    <table className='gap-8'>
                        <thead className='border-b h-12 bg-[#e6e8f0] border-[#e6e8f0] rounded-t-[20px]'>
                            <tr>
                                <th style={{ width: '200px' }}>Nom</th>
                                <th style={{ width: '200px' }}>RDV</th>
                                <th style={{ width: '200px' }}>Avancé</th>
                                <th style={{ width: '200px' }}>RDV</th>
                                <th style={{ width: '200px' }}>Telephone</th>
                                <th style={{ width: '200px' }}>Region</th>
                                <th style={{ width: '200px' }}>Parametre</th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr className='p-20'>
                                <td >Chistine chabez</td>
                                <td className='border border-blue-300 bg-blue-300  text-center rounded-[20px] p-1'>Pre-visiste</td>
                                <td className='border border-red-300 bg-red-300  text-center rounded-[20px] p-1'>Erreur</td>
                                <td>02/12/2023</td>
                                <td>+34455677</td>
                                <td>9844</td>
                                <td>David martin</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )
}

export default Client