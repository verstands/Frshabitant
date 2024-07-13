import { FaClock, FaDownload } from 'react-icons/fa'


const Statistique = () => {
    return (
        <>
            <div className='border border-[#ffffff] rounded-[30px] shadow m-7 bg-[#ffffff]'>
                <div className='flex items-center justify-center p-5 gap-2'>
                    <div className='w-7/12'>
                        <h3 className='border border-[#e6e8f0] h-10 font-bold rounded-[30px] shadow bg-[#e6e8f0] text-center'>Toutes les statistiques</h3>
                        <div className='flex items-center justify-center gap-2 mt-3'>
                        <h4 className='border border-[#e6e8f0] h-10 font-bold w-full rounded-[30px] shadow bg-[#e6e8f0] text-center'>Campagnes</h4>
                        <h4 className='border border-[#e6e8f0] h-10 font-bold w-full rounded-[30px] shadow bg-[#e6e8f0] text-center'>Période</h4>
                        <h4 className='border border-[#e6e8f0] h-10 font-bold w-full rounded-[30px] shadow bg-[#e6e8f0] text-center'>Produit</h4>
                        </div>
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#e6e8f0] h-20 w-20 font-bold  rounded-[20px] shadow bg-[#e6e8f0] text-center'>
                        <FaClock className=' size-8' />
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#e6e8f0] h-20 w-20 font-bold  rounded-[20px] shadow bg-[#e6e8f0] text-center'>
                        <FaDownload className=' size-8' />
                    </div>
                </div>

                <div className='border flex items-center justify-center gap-10 font-bold text-[#100c67] border-[#e6e8f0] rounded-b-[30px] shadow bg-[#e6e8f0] h-20'>
                   
                </div>
            </div>
        </>
    )
}

export default Statistique