
import { FaTimes } from 'react-icons/fa'

const AffilierCampagne = () => {
    return (
        <>
            <div className='p-5 flex items-center gap-3'>
                <FaTimes className='border border-red-500 bg-red-500 rounded-full w-7 h-7 text-white'/>
                <h2 className=' font-bold text-3xl'>Affilier à une campagne</h2>
            </div>
            <div className='p-5 '>
                <input type="text" className='w-full h-[400px]  rounded-[30px]' />
            </div>
        </>
    )
}

export default AffilierCampagne