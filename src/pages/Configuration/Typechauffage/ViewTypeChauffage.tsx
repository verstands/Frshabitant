import Otbar from "../../../components/Agents/Otbar";
import { Link } from "react-router-dom";
import hasAccess from "../../../components/hasAcess";
import TypeChauffageTable from "./TypeChauffageTable";
import { FaPlus } from "react-icons/fa";
const ViewTypeChauffage = () => {
  return (
    <>
      <Otbar title="Espace roles" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Type chauffage / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          
           <Link
           to="/createtypechauffage"
           className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right"
         >
           <FaPlus /> Nouveau type de chauffage
         </Link>
          <div className="py-4"></div>
          <br />
          <hr />
          <TypeChauffageTable />
        </div>
      </div>
    </>
  );
};

export default ViewTypeChauffage;
