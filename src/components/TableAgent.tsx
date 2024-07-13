import {FaEllipsisH, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'




const TableAgent = () => {
    return (
        <>
            <div className=' m-7 flex items-center justify-between'>
                <h1 className='text-[25px]'>Tous les agents</h1>
                <div>
                    <Link to="/" className='bg-[#ff754c] text-[12px] mr-1 font-bold px-4 py-2 text-white rounded-[15px] shadow'>Tri & Filtre</Link>
                </div>
            </div>
            <div className='border border-[#ffffff] rounded-[20px] shadow m-7 bg-[#ffffff]'>
                <center>
                    <table className='gap-8'>
                        <thead className='border-b h-12 bg-[#e6e8f0] border-[#e6e8f0] rounded-t-[20px]'>
                            <tr>
                                <th style={{ width: '200px' }}>Nom</th>
                                <th style={{ width: '200px' }}>Post</th>
                                <th style={{ width: '200px' }}>Connexion</th>
                                <th style={{ width: '200px' }}>Appels</th>
                                <th style={{ width: '200px' }}>Pause</th>
                                <th style={{ width: '200px' }}>Confirmés</th>
                                <th style={{ width: '200px' }}>Campagne</th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr className=''>
                                <td >Chistine chabez</td>
                                <td >231</td>
                                <td>1234</td>
                                <td>10:30</td>
                                <td>1</td>
                                <td>3</td>
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
            <div className=' m-7 flex items-center justify-between'>
                <h1 className='text-[25px]'>Tous les bureaux</h1>
                <div>
                    <Link to="/" className='bg-[#ff754c] text-[12px] mr-1 font-bold px-4 py-2 text-white rounded-[15px] shadow'>Créer un bureau</Link>
                </div>
            </div>
            <div className='border p-5 border-[#ffffff] h-60 rounded-[20px] shadow bg-[#ffffff]'>
                <div className="flex gap-6">
                    <div className='border-b h-40 w-60 bg-[#fafbff] shadow-2xl border-[#fafbff] rounded-[20px]'>
                        <div className='p-5'>
                            <h1 className='font-bold text-[24px]'>Montreuil</h1>
                            <h1>Montreuil</h1>
                            <h1>16 nomvembre</h1>
                        </div>
                    </div>
                    <div className='border-b h-40 w-60 bg-[#fafbff] shadow-2xl border-[#fafbff] rounded-[20px]'>
                        <div className='p-5'>
                            <h1 className='font-bold text-[24px]'>Montreuil</h1>
                            <h1>Montreuil</h1>
                            <h1>16 nomvembre</h1>
                        </div>
                    </div>
                    <div className='border-b h-40 w-60 bg-[#fafbff] shadow-2xl border-[#fafbff] rounded-[20px]'>
                        <div className='p-5'>
                            <h1 className='font-bold text-[24px]'>Montreuil</h1>
                            <h1>Montreuil</h1>
                            <h1>16 nomvembre</h1>
                        </div>
                    </div>
                    <div className='border-b h-40 w-60 bg-[#fafbff] shadow-2xl border-[#fafbff] rounded-[20px]'>
                        <div className='p-5'>
                            <h1 className='font-bold text-[24px]'>Montreuil</h1>
                            <h1>Montreuil</h1>
                            <h1>16 nomvembre</h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Google Pixel Phone
                            </th>
                            <td className="px-6 py-4">
                                Gray
                            </td>
                            <td className="px-6 py-4">
                                Phone
                            </td>
                            <td className="px-6 py-4">
                                $799
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch 5
                            </th>
                            <td className="px-6 py-4">
                                Red
                            </td>
                            <td className="px-6 py-4">
                                Wearables
                            </td>
                            <td className="px-6 py-4">
                                $999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default TableAgent