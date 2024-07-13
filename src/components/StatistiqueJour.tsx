import { Link } from 'react-router-dom';

const StatistiqueJour = () => {
    return (
        <>
            <div className='p-5'>
                <h2 className='text-3xl'>Statistique du Jour</h2>
            </div>
            <div className='rounded border p-6 border-white bg-white shadow-xl w-full'>
                <div className='text-center p-4 rounded-full border border-[#fafbff] bg-[#fafbff] shadow-xl w-full h-10'>
                    <Link to="/">Tri & Filtre</Link>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <div className='flex'>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-1/2 mt-2 h-40'>
                                <div className='justify-center'>
                                    <h2 className='text-4xl font-bold'>564</h2>
                                    <p>Appels</p>
                                </div>
                            </div>
                            <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-1/2 mt-2 h-40'>
                                <div className='justify-center'>
                                    <h2 className='text-4xl font-bold'>564</h2>
                                    <p>Agent en ligne</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-full mt-2 h-40'>
                            <div className='justify-center'>
                                <h2 className='text-4xl font-bold'>19:56:24</h2>
                                <p>heure d'appel</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-1/3 mt-2 h-80'>
                            <div className='justify-center'>
                                <h2 className='text-4xl font-bold'>5</h2>
                                <p>à attribuer</p>
                                <div className='rounded border border-red-500 bg-red-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-red-500 bg-red-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-red-500 bg-red-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-red-500 bg-red-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-red-500 bg-red-500 w-[160px] mt-2 h-5'></div>
                            </div>
                        </div>
                        <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-1/3 mt-2 h-80'>
                            <div className='justify-center'>
                                <h2 className='text-4xl font-bold'>16</h2>
                                <p>bruits</p>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                            </div>
                        </div>
                        <div className='text-center p-4 rounded border border-[#fafbff] bg-[#fafbff] shadow w-1/3 mt-2 h-80'>
                            <div className='justify-center'>
                                <h2 className='text-4xl font-bold'>13</h2>
                                <p>bruits</p>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px]mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                                <div className='rounded border border-gray-500 bg-gray-500 w-[160px] mt-2 h-5'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StatistiqueJour;