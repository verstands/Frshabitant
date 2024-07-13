import { FaBullhorn, FaChartBar, FaCog, FaTimes, FaUser } from 'react-icons/fa'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import InformationAgent from './InformationAgent'
import { useState } from 'react'
import Client from './Client'
import Statistique from './Statistique'
import Paametre from './Paametre'


const InformationsAgnet = () => {
    const [activeA, setActive] = useState<boolean>(true)
    const [activeB, setActiveB] = useState<boolean>(false)
    const [activeC, setActivC] = useState<boolean>(false)
    const [activeD, setActiveD] = useState<boolean>(false)

    const Fo = () => {
        setActive(true)
        setActiveB(false)
        setActivC(false)
        setActiveD(false)
    }
    const Fo2 = () => {
        setActive(false)
        setActiveB(true)
        setActivC(false)
        setActiveD(false)
    }
    const Fo3 = () => {
        setActive(false)
        setActiveB(false)
        setActivC(true)
        setActiveD(false)
    }
    const Fo4 = () => {
        setActive(false)
        setActiveB(false)
        setActivC(false)
        setActiveD(true)
    }
    return (
        <>
            <div className='p-10 flex items-center justify-between'>
                <div className='p-5 flex items-center gap-3'>
                    <FaTimes className='border border-red-500 bg-red-500 rounded-full w-7 h-7 text-white' />
                    <h2 className=' font-bold text-3xl'>Information de l'agent</h2>
                </div>
                <div>
                    <Link to="/" className='bg-[#ff754c] text-[#fff6f3] text-[12px] mr-1 font-bold px-4 py-2 rounded shadow'>RAJOUTER À UNE CAPAGNE</Link>
                </div>
            </div>
            <div className='p-10'>
                <div className='flex items-center justify-center m-1 border border-white bg-white rounded-[20px]'>
                    <div className='flex p-5'>
                        <img src="e3.png" className='w-[100px] h-[100px]  rounded-full' alt="" />
                        <div className='p-5'>
                            <h1 className='font-bold text-[#100c67]'>Carole</h1>
                            <p className='text-[#100c67]'>carole.arl@gmail.com</p>
                            <p className='text-[#100c67]'>Créee le 12.06.2024</p>
                        </div>
                    </div>
                    <div className='p-8'>
                        <p className='text-[#100c67]'>06.03.04.02.03</p>
                        <p className='text-[#100c67]'>06.03.04.02.03</p>
                        <p className='text-[#100c67]'>@carole_12</p>
                    </div>
                    <div className='p-5 flex items-center'>
                        <div>
                            <p className='text-[#100c67]'>En direct</p>
                            <p className='text-[#100c67]'>00.12.24</p>
                        </div>
                        <div className='p-3'>
                            <FiPlay />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex p-2'>
                <div onClick={Fo} className="border cursor-pointer  border-[#04005f] bg-[#04005f] h-14 rounded-[12px] w-3/12 m-2 flex flex-col items-center">
                    <div className="mb-auto">
                        <p className="text-center text-[#fbfbfc]">Campagnes</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBullhorn className="text-center text-[#fbfbfc] pb-1" />
                    </div>
                </div>
                <div onClick={Fo2} className="border cursor-pointer  cursor-pointer-[#e6e8f0] bg-[#e6e8f0] h-14 rounded-[12px] w-3/12 m-2 flex flex-col items-center">
                    <div className='mb-auto'>
                        <p className='text-center text-[#04005f]'>Statistique</p>
                    </div>
                    <div className='flex items-center'>
                        <FaChartBar className="text-center pb-1 text-[#04005f]" />
                    </div>
                </div>
                <div onClick={Fo3} className="border border-[#e6e8f0] cursor-pointer bg-[#e6e8f0] h-14 rounded-[12px] w-3/12 m-2 flex flex-col items-center">
                    <div className='mb-auto'>
                        <p className='text-center text-[#04005f]'>Clients</p>
                    </div>
                    <div className='flex items-center'>
                        <FaUser className="text-center pb-1 text-[#04005f]" />
                    </div>
                </div>
                <div onClick={Fo4} className="border border-[#e6e8f0] cursor-pointer bg-[#e6e8f0] h-14 rounded-[12px] w-3/12 m-2 flex flex-col items-center">
                    <div className='mb-auto'>
                        <p className='text-center text-[#04005f]'>Parametre</p>
                    </div>
                    <div className='flex items-center'>
                        <FaCog className="text-center pb-1 text-[#04005f]" />
                    </div>
                </div>

            </div>
            {
                activeA ? <InformationAgent /> : null
            }
            {
                activeC ? <Client /> : null
            }
            {
                activeB ? <Statistique /> : null
            }
            {
                activeD ? <Paametre /> : null
            }
        </>
    )
}

export default InformationsAgnet