
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FormeMaison = () => {
    return (
        <div className='p-5 flex justify-center gap-2'>
            <Link to="">
                <div className='border-white hover:text-white hover:bg-orange-400 rounded p-8 shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>Carée</p>
                    </div>
                </div>
            </Link>
            <Link to="">
                <div className='border-white hover:text-white p-8 hover:bg-orange-400 rounded shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>Allongé</p>
                    </div>
                </div>
            </Link>
            <Link to="">
                <div className='border-white hover:text-white hover:bg-orange-400 rounded p-8 shadow-2xl flex items-center justify-center h-full'>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <FaHome className='text-[100px]' />
                        </div>
                        <p className='text-center'>Daveloppée</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FormeMaison