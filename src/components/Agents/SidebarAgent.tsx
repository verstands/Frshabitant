import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaBars,
  FaTachometerAlt,
  FaFileAlt,
  FaHeadphones,
  FaCalendarAlt,
} from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";
import { useState } from "react"; // Importez useState pour gérer l'état local
import { BsCalendar } from "react-icons/bs";
import { RiSignalTowerLine } from "react-icons/ri";
import { UserInterface } from "../../Interfaces/UserInterface";
import hasAccess from "../hasAcess";
const SidebarAgent = () => {
  const location = useLocation();
  const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false); // État local pour gérer l'affichage du sous-menu Dashboard
  const [showDashboardSubMenuConfig, setShowDashboardSubMenuConfig] =
    useState(false); // État local pour gérer l'affichage du sous-menu Dashboard

  const user: UserInterface = JSON.parse(
    sessionStorage.getItem("user") || "[]"
  );


  return (
    <>
      {hasAccess("read") && (
        <div className="fixed top-0 left-0 h-screen p-2 flex flex-col gap-2 justify-center rounded-b-3xl overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-radius">
       
        <div className="p-2 h-20 flex items-center gap-2 justify-center rounded-b-3xl">
          <Link to="/dashboard">
            <div className="font-bold">Mon Reseau Habitat</div>
          </Link>
          <div>
            <FaBars />
          </div>
        </div>
        <p
          className="p-4 text-[#cccbd0]  font-bold"
          style={{ fontSize: "10px" }}
        >
          TABLEAU DE BORD
        </p>
        <div className="h-screen px-[10px]">
          <div
            className={
               location.pathname === "/bagent" ? "p-2 rounded-[10px] border-[#f4f5f9] bg-[#f4f5f9] flex items-center   gap-[15px] py-[5px]" : "flex items-center   gap-[15px] py-[5px]"
            }
            onClick={() => setShowDashboardSubMenu(!showDashboardSubMenu)}
          >
            {" "}
            <FaTachometerAlt color="#55565a" />
            <Link
              to="#"
              className="font-bold text-[12px] leading-[20px] text-[#55565a]"
            >
              Tableau de bord
            </Link>
            <p>{showDashboardSubMenu ? "-" : "+"}</p>
          </div>
          {showDashboardSubMenu && (
            <>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/bagent"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Principal
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/commercialstatistique"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Commercial
                </Link>
              </div>
            </>
          )}
          <p
            className="pt-3 text-[#cccbd0]  font-bold"
            style={{ fontSize: "10px" }}
          >
            GESTION
          </p>
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <BsCalendar color="#898c94" />
            <Link
              to="/agenda"
              className="text-[12px] font-bold leading-[20px] text-[#898c94]"
            >
              Agenda
            </Link>
          </div>
          {user.statut === "0" && (
            <div className="flex items-center p-2 gap-[15px] py-[15px]">
              <FaCalendarAlt color="#898c94" />
              <Link
                to="/agenda"
                className="text-[12px] font-bold leading-[20px] text-[#898c94]"
              >
                Plannig RDV
              </Link>
            </div>
          )}
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <AiOutlineFolder color="#898c94" />
            <Link
              to="/dossiers"
              className="text-[12px] font-bold leading-[20px] text-[#898c94]"
            >
              Dossiers
            </Link>
          </div>
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <FaUsers color="#898c94" />
            <Link
              to="/viewProspect"
              className="text-[12px] font-bold leading-[20px] text-[#898c94]"
            >
              Prospects
            </Link>
          </div>
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <FaFileAlt color="#898c94" />
            <Link
              to="/viewCdr"
              className="text-[12px] font-bold leading-[20px] text-[#898c94]"
            >
              CDR
            </Link>
          </div>
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <div className="flex items-center gap-[15px]">
              <FaHeadphones color="#898c94" />
              <Link
                to="/appels"
                className="text-[12px] font-bold leading-[20px] text-[#898c94]"
              >
                Appel automatique
              </Link>
            </div>
            <div className="border-[#4aa873]  bg-[#4aa873] p-2 rounded-[50%]">
              <p className="text-white">+99</p>
            </div>
          </div>
          <div className="flex items-center p-2 gap-[15px] py-[15px]">
            <RiSignalTowerLine color="#898c94" />
            <Link
              to="/viewCapagne"
              className="text-[12px] font-bold leading-[20px] text-[#898c94]"
            >
              Campagne
            </Link>
          </div>
          <p
            className="pt-3 text-[#cccbd0]  font-bold"
            style={{ fontSize: "10px" }}
          >
            CONFIGURATION
          </p>
          <div
            className="flex items-center  p-2 rounded-[10px] border-[#f4f5f9] bg-[#f4f5f9] gap-[15px] py-[5px]"
            onClick={() =>
              setShowDashboardSubMenuConfig(!showDashboardSubMenuConfig)
            }
          >
            {" "}
            <FaTachometerAlt color="#55565a" />
            <NavLink
              to="#"
              className="font-bold text-[12px] leading-[20px] text-[#55565a]"
            >
              Parametre
            </NavLink>
            <p>{showDashboardSubMenuConfig ? "-" : "+"}</p>
          </div>
          {showDashboardSubMenuConfig && (
            <>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/bagent"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Facures
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/commercialstatistique"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Abonnement
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/commercialstatistique"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Cartes
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/viewUser"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Utilisateurs
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/commercialstatistique"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Installateurs
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/commercialstatistique"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Provenances
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/viewRole"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Role
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/viewRoleUser"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Role & uilisateur
                </Link>
              </div>
              <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                <Link
                  to="/script"
                  className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                >
                  Script
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      )}
    </>
  );
};

export default SidebarAgent;
