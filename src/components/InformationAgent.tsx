
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const InformationAgent = () => {
    return (
        <>
            <div className='border border-[#ffffff] rounded-[30px] shadow m-7 bg-[#ffffff]'>
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
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Date de fin:</td>
                                <td><input type="text" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
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
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Script(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Tous les leades(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr className='mt-10'>
                                <td className='font-bold'>Statistiques(4):</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='font-bold'>Supprimer:</td>
                                <td><input type="hidden" className='border border-gray-300 rounded-md px-1 py-1
                                ' /></td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='m-3'>
                        <Link to="/" className='bg-[#ff754c] text-[#fff6f3] text-[12px] mr-1 w-full font-bold px-28 py-3 rounded-[12px] shadow'>Sortir de la campagne   </Link>
                    </div>
                     <div className='m-3 pt-3'>
                        <Link to="/" className='bg-[#ff754c] text-[#fff6f3] text-[12px] mr-1 font-bold px-24 py-3 rounded-[12px] shadow'>Ajouter un script particulier</Link>
                    </div>
                </div>

                <div className='border flex items-center justify-center gap-10 font-bold text-[#100c67] border-[#e7faff] rounded-b-[30px] shadow bg-[#e7faff] h-20'>
                    <Link to="/" title='Liste des produis'>Liste des produis</Link>
                    <Link to="/" title='Liste des sourceurs'>Liste des sourceurs</Link>
                    <Link to="/" title='Liste des script'>Liste des script</Link>
                </div>
            </div>
        </>


    )
}

export default InformationAgent