
import { FaHome, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NiveauHabitable = () => {
    return (
        <div className='p-5 flex justify-center gap-2'>
            <Link to="">
                <div className='border-white hover:text-white hover:bg-orange-400 rounded p-8 shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>1</p>
                    </div>
                </div>
            </Link>
            <Link to="">
                <div className='border-white p-8 hover:text-white hover:bg-orange-400 rounded shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>2</p>
                    </div>
                </div>
            </Link>
            <Link to="">
                <div className='border-white p-8 hover:text-white hover:bg-orange-400 rounded shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>3</p>
                    </div>
                </div>
            </Link>
            <Link to="">
                <div className='border-white hover:text-white rounded p-8 shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaPlus className='text-[60px] text-orange-500' />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default NiveauHabitable