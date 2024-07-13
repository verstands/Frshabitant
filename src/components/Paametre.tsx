import { FaEdit } from 'react-icons/fa'

const Paametre = () => {
    return (
        <>
            <div className='border   border-[#ffffff] rounded-[30px] shadow m-7 bg-[#ffffff]'>
                <div className='flex p-4 items-center justify-center'>
                    <table>
                        <tbody className='p-6'>
                            <tr className='m-2'>
                                <td width={150}>Identifiant:</td>
                                <td>
                                    carole_314
                                </td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>N° de poste:</td>
                                <td>
                                    312
                                </td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Téléphone:</td>
                                <td>
                                    06.03.04.02.03
                                </td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Téléphone 2:</td>
                                <td>
                                    06.03.04.02.03
                                </td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>E-mail:</td>
                                <td>
                                    carole.arg@gmail.com
                                </td>
                                <td>
                                    <div className='bg-[#04005f] text-white text-[12px] mr-1 font-bold px-2 py-2 rounded shadow'>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className='border flex items-center justify-center gap-10 font-bold text-[#100c67] border-[#e6e8f0] rounded-b-[30px] shadow bg-[#e6e8f0] h-20'>

                </div>
            </div>
        </>
    )
}

export default Paametre