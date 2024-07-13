import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const CreerAgent = () => {
    return (
        <>
            <h2 className='text-[25px] p-6'>Crée un agent</h2>
            <div className='border border-[#ffffff] rounded-[10px] shadow m-7 bg-[#ffffff]'>
                <div className='flex p-4 items-center justify-center'>
                    <table>
                        <tbody className='p-6'>
                            <tr>
                                <td className='font-bold'>Type :</td>
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
                            <tr className='m-2'>
                                <td width={150} className='font-bold' >Nom, Prenom:</td>
                                <td>
                                    <input type="text" className='border border-gray-300 rounded-md px-20 pb-2 py-1' />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Bureau :</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Indentifiant :</td>
                                <td>


                                    <input type="text" className='border border-gray-300 rounded-md px-20 pb-2 py-1' />

                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        Générer un Identifiant
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Mot de passe</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        Générer un mot de passe
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>N° de Poste</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        Voir tous les postes
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Mail</td>
                                <td>

                                    <input type="text" className='border border-gray-300 rounded-md px-20 pb-2 py-1' />

                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        Créer une adresse email
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Telephone 1</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-5 py-1' id="">
                                        <option value="">+33 5</option>
                                    </select>
                                    <input type="text" className='border border-gray-300 rounded-md px-15 pb-2 py-1' />

                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer  text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        Générer un numero
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className='font-bold'>Campagne</td>
                                <td>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                    <select name="" className='border border-gray-300 rounded-md px-20 py-1' id="">
                                        <option value="">A</option>
                                    </select>
                                </td>
                                <td>
                                    <div className='bg-[#e6e8f0] cursor-pointer text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaPlus className='text-[#ff754c]' />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-4 flex justify-center">
                    <Link to="/creeAgent" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-20 py-4 rounded-[10px] shadow'>Valider</Link>
                </div>
            </div>
        </>
    )
}

export default CreerAgent