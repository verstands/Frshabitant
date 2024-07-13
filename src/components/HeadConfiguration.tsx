import { UserInterface } from "../Interfaces/UserInterface";
import { FaKey, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeadConfiguration = () => {
  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );
  return (
    <div className="flex items-center justify-between p-5">
      <h2 className="text-[25px] font-bold">Mon reseaut habitant</h2>
      <div className="flex items-center">
        <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
          <FaKey />
          <Link to="/" className="ml-1 ">
            Mot de pass oublié
          </Link>
        </div>
        <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
          <FaUser />
          <Link to="/" className="ml-1 ">
            {user.prenom} {user.nom}
          </Link>
        </div>
        <div className="flex mr-1 items-center  text-[12px] font-bold px-4 py-2 rounded shadow">
          <FaSignOutAlt />
          <Link to="/" className="ml-1 ">
            Se deconnecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadConfiguration;
