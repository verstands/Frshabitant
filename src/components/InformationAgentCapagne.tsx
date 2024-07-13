import { FaEdit } from 'react-icons/fa'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const InformationAgentCapagne = () => {
    return (
        <>
            <div className='p-3 flex items-center justify-between'>
                <div className='p-5 flex items-center gap-3'>
                    <h2 className=' font-bold text-3xl'>Information de l'agent dans la campagne</h2>
                </div>
            </div>
            <div className='p-10'>
                <h3 className=' text-3xl'>Information générales</h3>
                <div className='shadow m-1 border border-white bg-white rounded-[20px]'>
                    <div className='flex items-cent justify-center '>
                        <div className='flex p-5'>
                            <img src="e3.png" className='w-[100px] h-[100px]  rounded-full' alt="" />
                            <div className='p-5'>
                                <h1 className='font-bold text-[#100c67]'>Carole</h1>
                                <p className='text-[#100c67]'>carole.arl@gmail.com</p>
                                <p className='text-[#100c67]'>Créee le 12.06.2024</p>
                            </div>
                        </div>
                        <div className='p-8'>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <p className='text-[#100c67]'>06.03.04.02.03</p>
                                    <p className='text-[#100c67]'>06.03.04.02.03</p>
                                    <p className='text-[#100c67]'>@carole_12</p>
                                </div>
                                <div className='gap-3 border flex items-center justify-center  border-[#100c67] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#100c67] text-center'>
                                    <FaEdit className='size-5 text-white' />
                                </div>
                            </div>


                        </div>
                        <div className='p-5 flex items-center'>
                            <div>
                                <p className='text-[#100c67]'>En direct</p>
                                <p className='text-[#100c67]'>00.12.24</p>
                            </div>
                            <div className='p-3'>
                                <FiPlay />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center p-5'>
                        <div>
                            <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>AFFILIER UN SCRIPT PARTICULIER</Link>
                            <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>SORTIR DE LA CAMPAGNE</Link>
                            <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>STATISTIQUE COMPLETES</Link>
                            <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>TOUS LES ENREGISTREMENTS</Link>
                        </div>
                    </div>
                </div>
                <br />
                <h5 className='mt-10 text-3xl m-7'>Clients de l'agent dans la campagne</h5>
                <div className='border border-[#ffffff] rounded-[20px] shadow m-7 bg-[#ffffff]'>
                    <center>
                        <table className='gap-8'>
                            <thead className='border-b h-12 bg-[#e6e8f0] border-[#e6e8f0] rounded-t-[20px]'>
                                <tr>
                                    <th style={{ width: '200px' }}>Nom</th>
                                    <th style={{ width: '200px' }}>RVD</th>
                                    <th style={{ width: '200px' }}>Avancé</th>
                                    <th style={{ width: '200px' }}>RDV</th>
                                    <th style={{ width: '200px' }}>Téléphone</th>
                                    <th style={{ width: '200px' }}>Region</th>
                                    <th style={{ width: '200px' }}>Agent</th>
                                </tr>
                            </thead>
                            <br />
                            <tbody>
                                <tr className='text-center'>
                                    <td >Chistine chabez</td>
                                    <td className=' bg-blue-500 rounded-[30px]'>Pre-visité</td>
                                    <td className=' font-bold bg-red-500 rounded-[30px] text-white'>ERREUR</td>
                                    <td>10:30</td>
                                    <td>1</td>
                                    <td>3</td>
                                    <td>
                                        ddd
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        </>
    )
}

export default InformationAgentCapagne