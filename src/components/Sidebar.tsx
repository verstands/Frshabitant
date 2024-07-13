import { Link } from 'react-router-dom'
import { FaBriefcase, FaHome, FaUsers } from 'react-icons/fa';
import { BiBarChartAlt2, BiBullseye, BiUser } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <>
            <div className='bg-dark-theme p-2 h-24 flex items-center gap-2 justify-center rounded-b-3xl'>
                <img src="e3.png" className='w-10 h-10  rounded-full' alt="" />
                <div>
                    <p className='font-bold'>Raphael Hamard</p>
                    <p className="text-[12px]">Admin - Chef planning</p>
                </div>
            </div>
            <div className='h-screen px-[50px]'>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaHome color='#7d839d' />
                    <Link to='/' className='text-[12px] leading-[20px]  text-[#7d839d]'>Accueil</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaUsers color='#054dc7' />
                    <Link to='/agents' className='text-[12px] font-bold leading-[20px]  text-[#054dc7]'>Agents</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaBriefcase color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Commerciaux</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBullseye color='#7d839d' />
                    <Link to='/capagne' className='text-[12px] leading-[20px]  text-[#7d839d]'>Capagnes</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiUser color='#7d839d' />
                    <Link to='/client' className='text-[12px] leading-[20px]  text-[#7d839d]'>Client</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBarChartAlt2 color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Statistiques</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <AiOutlineSetting color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Parametres</Link>
                </div>
            </div >
        </>
    )
}

export default Sidebar