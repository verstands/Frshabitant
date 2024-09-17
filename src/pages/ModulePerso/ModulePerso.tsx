import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import useAgentData from '../../components/Agents/useAgentData';
import Otbar from '../../components/Agents/Otbar';
import ModulePersoTable from './ModulePersoTable';

const ModulePerso = () => {
    const { isAdmin, accessDenied } = useAgentData();

    if (accessDenied) {
      return <div className="font-bold"><center> <br /> Accès refusé</center></div>;
    }
  return (
    <>
    {isAdmin && (
      <>
        <Otbar title="Espace Module" />
        <div className="flex items-center p-2 justify-between">
          <div className="flex p-4">
            <h1 className="text-[#b3b4b6]">Module / </h1>
            <h1 className="font-bold"> Liste</h1>
          </div>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
            <ModulePersoTable />
        </div>

      </>
    )}
  </>
  )
}

export default ModulePerso