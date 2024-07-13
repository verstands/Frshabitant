import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CreeCamapgne = () => {
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <h2 className='text-[25px] font-bold'>Créer une campagne</h2>
                <div className='flex items-center'>
                    <div>
                        <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-2 rounded-[20px] shadow'>Enregistrer comme brouillons</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-2 rounded-[20px] shadow'>Continuer</Link>
                    </div>
                </div>
            </div>
            <div className='border   border-[#ffffff] rounded-[10px] shadow m-7 bg-[#ffffff]'>
                <div className='flex p-4 items-center justify-center'>
                    <table>
                        <tbody className='p-6'>
                            <tr className='m-2'>
                                <td width={150} className='font-bold' >Nom:</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-40 pb-2 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Produit:</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />

                            <tr>
                                <td className='font-bold'>Regions:</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Indicatifs :</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Scripts</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Agents</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Commerciaux</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Controle qualités</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Installateur</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CreeCamapgne