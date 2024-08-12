import { FaBars, FaUserPlus } from 'react-icons/fa'
import Otbar from '../../components/Agents/Otbar'
import GraphiqueLeadDepartement from '../../components/Agents/GraphiqueLeadDepartement'
import GraphiqueStatistiqueAppel from '../../components/Agents/GraphiqueStatistiqueAppel'
import GraphiqueStatiqueSignature from '../../components/Agents/GraphiqueStatiqueSignature'
import { UserInterface } from '../../Interfaces/UserInterface'
import { useEffect, useState } from 'react'
import { RepositoryConfigInterface } from '../../Interfaces/RepositoryConfig.interface'
import ProspectService from '../../Services/Prospect.service'

const DashboadAgent = () => {
    const user: UserInterface = JSON.parse(
        sessionStorage.getItem("user") || "[]"
      );
  const [countNRP, setCountNRP] = useState(0);
  const [countNouveau, setCountNouveau] = useState(0);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const CountProspect = new ProspectService(config);

  const getProspect = async () => {
    try {
      const responseNouveau = await CountProspect.getcountNouveau();
      setCountNouveau(responseNouveau.nouveau);
      setCountNRP(responseNouveau.nrp);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProspect();
  }, []);


    return (
        <>
            <Otbar title={`Hey, Bienvenue ${user.prenom} ${user.nom}`} />
            <div className='p-5'>
                <div className=' grid md:grid-cols-2 gap-5'>
                    <div className='flex gap-3'>
                        <div className='border-white w-[50%] bg-white p-4 rounded-[10px] shadow'>
                            <div className='flex items-center mb-7 gap-2'>
                                <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                    <FaUserPlus className='text-[#415f95]' />
                                </div>
                                <p className=' font-bold'>Leads NRP</p>
                            </div>
                            <h1 className='font-bold'>{countNRP}</h1>
                            <h6 className='text-[#a9a9a9]'>Leads NRP</h6>
                        </div>
                        <div className='border-white w-[50%] bg-white p-4 rounded-[10px] shadow'>
                            <div className='flex items-center mb-7 gap-2'>
                                <div className=' p-3 border-[#cad5f1] rounded-[10px] bg-[#cad5f1]'>
                                    <FaBars className='text-[#415f95]' />
                                </div>
                                <p className=' font-bold'>Nouveau Leads</p>
                            </div>
                            <h1 className='font-bold'>{countNouveau}</h1>
                            <h6 className='text-[#a9a9a9]'>Nouveau Leads</h6>
                        </div>
                    </div>

                    <div className='border-white h-[50%] bg-white p-4 rounded-[10px] shadow'>
                        <GraphiqueLeadDepartement />
                    </div>
                    <div className='border-white h-[50px] bg-white p-4 rounded-[10px] shadow'>
                        <GraphiqueStatistiqueAppel />
                    </div>
                    <div className='border-white h-[50px] bg-white p-4 rounded-[10px] shadow'>
                        <GraphiqueStatiqueSignature />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboadAgent