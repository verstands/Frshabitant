
import { FaEdit, FaEllipsisH, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FicheCampagne = () => {
    return (
        <>
            <div className='p-30'>
                <div className='border border-[#e6e8ef] bg-[#e6e8ef] w-5/12 p-1 m-3 rounded-[20px]'>
                    <h1 className='font-bold m-2'>PAC BRYAM</h1>
                    <table>
                        <tbody className='p-6'>
                            <tr className='m-2'>
                                <td>Sourceur:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Region:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Produit:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Date de debut:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaTrashAlt />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Date de fin:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaTrashAlt />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Champ date titre:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                            </tr>
                            <br />
                            <br />
                            <tr className='pt-10'>
                                <td className='font-bold'>Agents affilié(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEllipsisH />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Script(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEllipsisH />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Tous les leades(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEllipsisH />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Statistiques(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEllipsisH />
                                    </div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-bold'>Supprimer:</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEllipsisH />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='m-3'>
                        <Link to="/" className='bg-[#002685] text-[#fff6f3] text-[12px] mr-1 w-full font-bold px-28 py-3 rounded-[12px] shadow'>Sortir de la campagne   </Link>
                    </div>
                    <div className='m-3 pt-3'>
                        <Link to="/" className='bg-[#002685] text-[#fff6f3] text-[12px] mr-1 font-bold px-24 py-3 rounded-[12px] shadow'>Ajouter un script particulier</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FicheCampagne