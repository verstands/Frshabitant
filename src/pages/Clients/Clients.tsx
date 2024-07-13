import { BiBell, BiMessage } from 'react-icons/bi'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TableClient from '../../components/TableClient'
import TableLead from '../../components/TableLead'

const Clients = () => {
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <h2 className='text-[25px] font-bold'>Clients</h2>
                <div className='flex gap-1 items-center'>
                    <div>
                        <Link to="/" className='bg-[#6a7385] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Inserer des loads</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#6a7385] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Ajouter un client</Link>
                    </div>
                    <div className='flex gap-4 items-center bg-[#6a7385] rounded-[10px] shadow px-4 py-3'>
                        <FaSearch className='text-white' />
                        <Link to="/" className=' text-white text-[12px] mr-1 font-bold  '>Recherche</Link>
                    </div>


                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#6a7385] text-center'>
                        <BiMessage className='size-5 text-white' />
                    </div>
                    <div className='gap-3 border flex items-center justify-center  border-[#6a7385] h-10 w-10 font-bold  rounded-[10px] shadow bg-[#6a7385] text-center'>
                        <BiBell className='size-5 text-white' />
                    </div>
                </div>
            </div>
            <TableClient />
            <TableLead />
        </>
    )
}

export default Clients