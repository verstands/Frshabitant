import AgendaComponent from '../../components/Agents/AgendaComponent'
import Otbar from '../../components/Agents/Otbar'
import { FaClock } from 'react-icons/fa'
import useHasModule from '../../components/Agents/useHasModule';

const Agenda = () => {
    const hasModule = useHasModule('agenda');

  if (!hasModule) {
    return <div className="font-bold"><center> <br /> Accès refusé</center></div>;
  }
    return (
        <>
            <Otbar title='Espace Agenda' />
            <div className='border-white m-3  bg-white p-10 rounded-[10px] shadow'>
                <h2 className='font-bold'>Agenda</h2>
                <hr  className='mb-3'/>
                <div className='grid grid-cols-2 gap-4'> 
                    <div className='flex items-center'>
                        <div className='border-[#54c3e8] bg-[#54c3e8] rounded-l-[8px] p-7'>
                        <FaClock className='text-white' />
                        </div>
                        <p className='border-[#cff4fc] bg-[#cff4fc] rounded-r-[8px] p-3'><strong>Info - </strong> <span className='text-[#5c8b94] font-bold'>Les rendez-vous de cette couleur sont des rendez-vous de prospect </span></p>
                    </div>
                    <div className='flex items-center'>
                        <div className='border-[#54c3e8] bg-[#54c3e8] rounded-l-[8px] p-7'>
                        <FaClock className='text-white' />
                        </div>
                        <p className='border-[#cff4fc] bg-[#cff4fc] rounded-r-[8px] p-3'><strong>Info - </strong> <span className='text-[#5c8b94] font-bold'>Les rendez-vous de cette couleur sont des rendez-vous de dossers </span></p>
                    </div>
                </div>
                <div className='mb-3'></div>
                <AgendaComponent />
            </div >
        </>
    )
}

export default Agenda