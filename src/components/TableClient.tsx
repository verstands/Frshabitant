import { FaEllipsisH, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TableClient = () => {
    return (
        <>
            <div className='p-5 flex items-center justify-between'>
                <h2 className=' my-6 text-2xl'>Tous les clients</h2>
                <div>
                    <Link to="/" className='bg-[#f76235] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[20px] shadow'>Tri & filtre</Link>
                </div>
            </div>
            <div className='border border-[#ffffff] rounded-[20px] shadow m-7 bg-[#ffffff]'>
                <center>
                    <table className='gap-8'>
                        <thead className=''>
                            <tr>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                                <th style={{ width: '200px' }}></th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr className=''>
                                <td >Chistine chabez</td>
                                <td className=' bg-blue-400 text-center rounded-[20px]'>Pre-visite</td>
                                <td className=' bg-red-600 text-center rounded-[20px]'>ERREUR</td>
                                <td>12/12/2023</td>
                                <td>345 345 678</td>
                                <td>David martin</td>
                                <td className='flex gap-2'>
                                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[20px] shadow bg-[#6a7385] text-center'>
                                        <FaUser className='size-5 text-[#d8ffc7]' />
                                    </div>
                                    <div className='gap-3 border flex items-center justify-center  border-[#e6e8f0] h-10 w-10 font-bold  rounded-[20px] shadow bg-[#e6e8f0] text-center'>
                                        <FaEllipsisH className='size-5 text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            
                            <br />
                            
                            <tr className=''>
                                <td >Chistine chabez</td>
                                <td className=' bg-blue-400 text-center rounded-[20px]'>Pre-visite</td>
                                <td className=' bg-red-600 text-center rounded-[20px]'>ERREUR</td>
                                <td>12/12/2023</td>
                                <td>345 345 678</td>
                                <td>David martin</td>
                                <td className='flex gap-2'>
                                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[20px] shadow bg-[#6a7385] text-center'>
                                        <FaUser className='size-5 text-[#d8ffc7]' />
                                    </div>
                                    <div className='gap-3 border flex items-center justify-center  border-[#e6e8f0] h-10 w-10 font-bold  rounded-[20px] shadow bg-[#e6e8f0] text-center'>
                                        <FaEllipsisH className='size-5 text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )
}

export default TableClient