import { Link } from 'react-router-dom'
import {FaArrowLeft, FaArrowRight, FaEdit, FaEllipsisH, FaSearch, FaTrashAlt } from 'react-icons/fa'
import { BiBell, BiMessage } from 'react-icons/bi'

const Capagne = () => {
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <h2 className='text-[25px] font-bold'>Campagnes</h2>
                <div className='flex gap-1 items-center'>
                    <div>
                        <Link to="/" className='bg-[#6a7385] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Inserer des loads</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#6a7385] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Creer une campagne</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#ea2d2d] text-black text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Creer une campagne</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#ea2d2d] text-black text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Creer une campagne</Link>
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#6a7385] text-center'>
                        <FaSearch className='size-5 text-white' />
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#6a7385] text-center'>
                        <BiMessage className='size-5 text-white' />
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#6a7385] text-center'>
                        <BiBell className='size-5 text-white' />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='shadow m-1 border border-white bg-white rounded-[10px]'>
                    <div className=' border text-white flex items-center justify-center gap-10 font-bold  border-[#6d7592] rounded-t-[10px] shadow bg-[#6d7592] h-20'>
                        <div className='text-[10px]'>PAC SUD 2022</div>
                        <FaArrowLeft />
                        <div className='font-bold'>PAC RHOME 2022</div>
                        <FaArrowRight />
                        <div className='text-[10px]'>PHOTO SUD 2021</div>
                    </div>
                    <div className='grid grid-cols-3 gap-2 mt-5 p-3'>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Nom :</label>
                            <select name="" className='border border-gray-300 rounded-md px-28 py-3' id="">
                                <option value="">A</option>
                            </select>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Adminirateur :</label>
                            rapha5,scar
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Crée le :</label>
                            23.02.2032
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Produit :</label>
                            <select name="" className='border border-gray-300 rounded-md px-24 py-3' id="">
                                <option value="">A</option>
                            </select>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Script :</label>
                            <select name="" className='border border-gray-300 rounded-md px-28 py-3' id="">
                                <option value="">A</option>
                            </select>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="" className='font-bold'>Rgion :</label>
                            <select name="" className='border border-gray-300 rounded-md px-28 py-3' id="">
                                <option value="">A</option>
                            </select>
                        </div>
                    </div>
                    <div className=' p-3'>
                        <h2 className=' my-6 text-2xl'>12 agents affiliés</h2>
                        <div className='flex gap-2'>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className=' my-6 text-2xl'>12 Commerciaux affilié</h2>
                            <div>
                                <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Affiliations</Link>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[24px]'>Montreuil</h1>
                                    <h1>Montreuil</h1>
                                    <h1>16 nomvembre</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className=' my-6 text-2xl'>Statistique des rendez vous</h2>
                            <div>
                                <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Toutes les statistiques</Link>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow  mt-2 h-80'>
                                <div className="flex">
                                    <div className='justify-center'>
                                        <h2 className='text-4xl font-bold'>5</h2>
                                        <p>honorés</p>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow  mt-2 h-80'>
                                <div className="flex">
                                    <div className='justify-center'>
                                        <h2 className='text-4xl font-bold'>5</h2>
                                        <p>honorés</p>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow  mt-2 h-80'>
                                <div className="flex">
                                    <div className='justify-center'>
                                        <h2 className='text-4xl font-bold'>5</h2>
                                        <p>honorés</p>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow  mt-2 h-80'>
                                <div className="flex">
                                    <div className='justify-center'>
                                        <h2 className='text-4xl font-bold'>5</h2>
                                        <p>honorés</p>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow  mt-2 h-80'>
                                <div className="flex">
                                    <div className='justify-center'>
                                        <h2 className='text-4xl font-bold'>5</h2>
                                        <p>honorés</p>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                        <div className='rounded-[30px] border border-[#d8dae5] bg-[#d8dae5] w-[160px] mt-2 h-5'>Jean client</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className=' my-6 text-2xl'>Calendrier de la campagne</h2>
                        <div className='flex items-center justify-between'>
                            <h2 className=' my-6 text-2xl'>Statistique des leads</h2>
                            <div className='flex'>
                                <div>
                                    <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Toutes les statistiques</Link>
                                </div>
                                <div>
                                    <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Tri & Filtre</Link>
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-4 gap-2'>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[14px]'>Montreuil</h1>
                                    <div className='flex gap-4'>
                                        <h1>Pas interesse : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>NBR : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>Nepas appeler : </h1>
                                        <h1>16</h1>
                                    </div>

                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[14px]'>Montreuil</h1>
                                    <div className='flex gap-4'>
                                        <h1>Pas interesse : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>NBR : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>Nepas appeler : </h1>
                                        <h1>16</h1>
                                    </div>

                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[14px]'>Montreuil</h1>
                                    <div className='flex gap-4'>
                                        <h1>Pas interesse : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>NBR : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>Nepas appeler : </h1>
                                        <h1>16</h1>
                                    </div>

                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[14px]'>Montreuil</h1>
                                    <div className='flex gap-4'>
                                        <h1>Pas interesse : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>NBR : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>Nepas appeler : </h1>
                                        <h1>16</h1>
                                    </div>

                                </div>
                            </div>
                            <div className='border-b h-30 w-60 bg-[#fafbff] shadow border-[#fafbff] rounded-[20px]'>
                                <div className='p-5'>
                                    <h1 className='font-bold text-[14px]'>Montreuil</h1>
                                    <div className='flex gap-4'>
                                        <h1>Pas interesse : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>NBR : </h1>
                                        <h1>16</h1>
                                    </div>
                                    <div className='flex gap-4'>
                                        <h1>Nepas appeler : </h1>
                                        <h1>16</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className=' my-6 text-2xl'>Tous les fichiers de campagnes</h2>
                            <div className='flex'>
                                <div>
                                    <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Toutes les statistiques</Link>
                                </div>
                                <div>
                                    <Link to="/" className='bg-[#ffb098] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Tri & Filtre</Link>
                                </div>
                            </div>
                        </div>
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
                </div>
            </div>
        </>

    )
}

export default Capagne