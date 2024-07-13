import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { BiBell, BiMessage } from 'react-icons/bi';
import CreerAgent from '../../components/CreerAgent';
import TableAgent from '../../components/TableAgent';
import { useState } from 'react';

const Agents = () => {
    const [creeAgent, setcreeAgent ] = useState<boolean>(false)
    const [accuiel, setacceuil ] = useState<boolean>(true)
    const Fo2 = () => {
        setcreeAgent(true)
        setacceuil(false)
    }
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <h2 className='text-[25px] font-bold'>Agents</h2>
                <div className='flex items-center'>
                    <div>
                        <div onClick={Fo2} className='bg-[#bfc0c9] cursor-pointer text-[12px] mr-1 font-bold px-4 py-2 rounded shadow'>Créer un agent</div>
                    </div>
                    <div className='flex mr-1 items-center bg-[#d8dae5] text-[12px] font-bold px-4 py-2 rounded shadow'>
                        <FaSearch />
                        <Link to="/" className='ml-1 '>Recherche</Link>
                    </div>
                    <div className='bg-[#d8dae5] text-[12px] mr-1 font-bold px-4 py-2 rounded shadow'>
                        <Link to="/">
                            <BiMessage className='font-bold' />
                        </Link>
                    </div>
                    <div className='bg-[#d8dae5] text-[12px] mr-1 font-bold px-4 py-2 rounded shadow'>
                        <Link to="/">
                            <BiBell className='font-bold' />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
            {
                accuiel ? <TableAgent /> : null
            }
            {
                creeAgent ? <CreerAgent /> : null
            }
            </div>
        </>
    )
}

export default Agents