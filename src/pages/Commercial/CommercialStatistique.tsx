import Otbar from '../../components/Agents/Otbar'
import { FaArrowUp, FaClock, FaHeadphones, FaPhoneAlt } from 'react-icons/fa'
import TableauAppels from '../../components/Agents/TableauAppels'
import GraphiqueCampagne from '../../components/Agents/GraphiqueCampagne'

const CommercialStatistique = () => {
    return (
        <>
            <Otbar title='Statistiques commercial' />
            <div className='p-5'>
                <div className='flex gap-2 justify-end'>
                    <select name="" className='border border-white-300 rounded-md px-20 py-1' id="">
                        <option value="">Depuis le debut</option>
                    </select>
                    <select name="" className='border border-white-300 rounded-md px-20 py-1' id="">
                        <option value="">Toutes les campagnes</option>
                    </select>
                </div>
                <div className=' grid md:grid-cols-4 gap-5 mt-5'>
                    <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                        <div className='flex items-center justify-between mb-7'>
                            <p className=' font-bold'>Appels</p>
                            <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                <FaPhoneAlt className='text-[#415f95]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-[30px]'>0</h1>
                            <div className='flex items-center'>
                                <FaArrowUp className='text-green-500'/>
                                <h6 className='text-green-500'>0.00%</h6>
                            </div>
                        </div>
                    </div>
                    <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                        <div className='flex items-center justify-between mb-7'>
                            <p className=' font-bold'>Durée</p>
                            <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                <FaClock className='text-[#415f95]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-[30px]'>00:00:00</h1>
                            <div className='flex items-center'>
                                <FaArrowUp className='text-green-500'/>
                                <h6 className='text-green-500'>0.00%</h6>
                            </div>
                        </div>
                    </div>
                    <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                        <div className='flex items-center justify-between mb-7'>
                            <p className=' font-bold'>Restant</p>
                            <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                <FaHeadphones className='text-[#415f95]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-[30px]'>30</h1>
                            <div className='flex items-center'>
                                <FaArrowUp className='text-green-500'/>
                                <h6 className='text-green-500'>0.00%</h6>
                            </div>
                        </div>
                    </div>
                    <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                        <div className='flex items-center justify-between mb-7'>
                            <p className=' font-bold'>Appels(Répondu)</p>
                            <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                <FaPhoneAlt className='text-[#415f95]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-[30px]'>0</h1>
                            <div className='flex items-center'>
                                <FaArrowUp className='text-green-500'/>
                                <h6 className='text-green-500'>0.00%</h6>
                            </div>
                        </div>
                    </div>
                    <div className='border-white  bg-white p-4 rounded-[10px] shadow'>
                        <div className='flex items-center justify-between mb-7'>
                            <p className=' font-bold'>Durée(Repondu)</p>
                            <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                <FaClock className='text-[#415f95]' />
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1 className='font-bold text-[30px]'>00:00:00</h1>
                            <div className='flex items-center'>
                                <FaArrowUp className='text-green-500'/>
                                <h6 className='text-green-500'>0.00%</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5 mt-5'>
                    <TableauAppels />
                    <GraphiqueCampagne />
                </div>
            </div>
        </>
    )
}

export default CommercialStatistique