import Otbar from '../../components/Agents/Otbar'
import { FaClock, FaPencilAlt, FaPhoneAlt } from 'react-icons/fa'
import Discours from '../../components/Agents/Discours'
import DetailProspect from '../../components/Agents/DetailProspect'
import Swal from "sweetalert2";

const Appels: React.FC = () => {
    
    const appel = () =>{
        Swal.fire({
            icon: 'question',
            title: 'Êtes-vous prêt ?',
            text: 'Les appels automatiques vont commencer',
            confirmButtonText: "C'est parti",
          });
    }
    return (
        <>
            <Otbar title="Robot d'appel automatique " />
            <div className='border-white bg-white p-4 m-3 rounded-[10px] shadow flex items-center justify-between'>
                <div onClick={() => appel()} className=' cursor-pointer text-[#6c7ec2] border-[#e7edfe] flex items-center gap-2 p-2 rounded-[10px] bg-[#e7edfe]'>
                    <p>Démarrer un appel avec ce prospect</p>
                    <FaPhoneAlt />
                </div>
                <div className=''>
                    <p><strong>Date de création : </strong> 11/12/2023 12:22:45</p>
                    <p className='flex gap-2'><strong>A rappeler : </strong> 11/12/2023 12:22:45 <FaPencilAlt className=' text-[#6c7ec2] cursor-pointer ' /></p>
                    <p><strong>Status : </strong> A rappeler</p>
                    <p><strong>Commercial : </strong> YOEL AIEM</p>
                    <p><strong>Campagne : </strong> DATA B 0.35.2</p>
                </div>
            </div>
            <div className=' p-4'>
                <div className='flex items-center mb-2'>
                    <div className='bg-[#29b765] rounded-l-[10px] p-12 flex items-center flex-grow-0'>
                        <FaClock className='text-white' />
                    </div>
                    <div className='bg-[#d1e6dd] rounded-r-[10px] p-3 flex-grow'>
                        <p><strong>Rendez-vous </strong>- cet appel est un appel programmé dans votre agenda</p>
                        <p>Rendez-vous - cet appel est un appel programmé dans votre agenda</p>
                        <button className='text-white bg-[#f85153] p-2 rounded-[8px]'>Rappeler plus tard</button>
                    </div>
                </div>


                <div className='border-white h-[50%] bg-white p-4 rounded-[10px] shadow'>
                    <h2 className="font-bold">Actions rapides</h2>
                    <div className='flex items-center'>
                        <div className='bg-[#56c3ee] rounded-l-[10px] p-7 flex items-center flex-grow-0'>
                            <FaClock className='text-white' />
                        </div>
                        <div className='bg-[#d1e6dd] rounded-r-[10px] p-3 flex-grow'>
                            <p className='text-[#1d59cc]'><strong>Help #1 </strong>Ces boutons permettent de changer le statut du prospect en 1 clic</p>
                            <p className='text-[#1d59cc]'><strong>Help #2 </strong>Ex : "RDV" : Change le statut en "RDV", crée un lead, puis passe au prospect suivant </p>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-6 flex gap-1 items-center'>
                        <button className='bg-[#f2c231] rounded-[7px] p-2 '>NRP</button>
                        <button className='bg-[#20b669] rounded-[7px] p-2 text-white'>RDV</button>
                        <button className='bg-[#eb5c56] rounded-[7px] p-2 text-white'>Non valide</button>
                    </div>
                </div>
                <br />
                <div className='grid grid-cols-2 gap-2'>
                    <Discours />
                    <DetailProspect />
                </div>
            </div>

        </>
    )
}

export default Appels