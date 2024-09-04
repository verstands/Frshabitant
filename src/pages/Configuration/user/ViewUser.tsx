import { FaPlus } from "react-icons/fa";
import Otbar from "../../../components/Agents/Otbar";
import TableUser from "./TableUser";
import { Link } from "react-router-dom";
import useAgentData from "../../../components/Agents/useAgentData";

const ViewUser = () => {
  const { isAdmin, accessDenied } = useAgentData();

  if (accessDenied) {
    return <div className="font-bold"><center> <br /> Accès refusé</center></div>;
  }

  return (
    <>
      {isAdmin && (
        <>
          <Otbar title="Espace Utilisateurs" />
          <div className="flex items-center p-2 justify-between">
            <div className="flex p-4">
              <h1 className="text-[#b3b4b6]">Utilisateur / </h1>
              <h1 className="font-bold"> Liste</h1>
            </div>
          </div>
          <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
            <Link
              to="/user"
              className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
            >
              <FaPlus /> Nouveau utilisateur
            </Link>
            <div className="py-4"></div>
            <br />
            <hr />
            <TableUser />
          </div>
        </>
      )}
    </>
  );
};

export default ViewUser;
