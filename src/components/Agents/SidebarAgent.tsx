import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaUsers,
  FaTachometerAlt,
  FaFileAlt,
  FaHeadphones,
  FaCalendarAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsCalendar } from "react-icons/bs";
import { RiSignalTowerLine } from "react-icons/ri";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import ProspectService from "../../Services/Prospect.service";
import { AiOutlineFolder } from "react-icons/ai";

const SidebarAgent = () => {
  const location = useLocation();
  const [showDashboardSubMenu, setShowDashboardSubMenu] = useState(false);
  const [countNouveau, setCountNouveau] = useState(0);
  const [menus, setMenus] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showDashboardSubMenuConfig, setShowDashboardSubMenuConfig] =
    useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const CountProspect = new ProspectService(config);

  const getProspect = async () => {
    try {
      const responseNouveau = await CountProspect.getcountNouveau();
      setCountNouveau(responseNouveau.nouveau);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const iconMap = {
    agenda: <BsCalendar color="#898c94" />,
    planning: <FaCalendarAlt color="#898c94" />,
    dossier: <AiOutlineFolder color="#898c94" />,
    prospect: <FaUsers color="#898c94" />,
    cdr: <FaFileAlt color="#898c94" />,
    appel: <FaHeadphones color="#898c94" />,
    campagne: <RiSignalTowerLine color="#898c94" />,
  };

  useEffect(() => {
    const agentData = JSON.parse(sessionStorage.getItem("user") || "{}");
  
    if (agentData && agentData.fonction) {
      const extractedMenus = agentData.fonction.fonctions
        .map(f => f.menu)
        .filter(menu => menu);
      setMenus(extractedMenus);
      setIsAdmin(agentData.fonction.initule === "Administrateur");
    }
  
    getProspect();
  }, []);

  return (
    <>
      <div className=" top-0 left-0 h-screen p-2 flex flex-col gap-2 justify-center rounded-b-3xl overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-radius">
        <div className="p-2 h-20 flex items-center gap-2 justify-center rounded-b-3xl">
          <Link to="/dashboard">
            <div className="font-bold">Mon Reseau Habitat</div>
          </Link>
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
              location.pathname === "/bagent"
                ? "p-2 rounded-[10px] border-[#f4f5f9] bg-[#f4f5f9] flex items-center   gap-[15px] py-[5px]"
                : "flex items-center   gap-[15px] py-[5px]"
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
          {menus.map((menu) => (
      <div
        key={menu.id}
        className="flex items-center p-2 gap-[15px] py-[15px]"
      >
        {iconMap[menu.icon] || ""}
        <Link
          to={menu.url}
          className="text-[12px] font-bold leading-[20px] text-[#898c94]"
        >
          {menu.nom}
        </Link>
      </div>
    ))}
          {isAdmin && (
            <>
              <p
                className="pt-3 text-[#cccbd0]  font-bold"
                style={{ fontSize: "10px" }}
              >
                CONFIGURATION
              </p>
              <div
                className="flex items-center  p-2 rounded-[10px] border-[#f4f5f9] bg-[#f4f5f9] gap-[12px] py-[5px]"
                onClick={() =>
                  setShowDashboardSubMenuConfig(!showDashboardSubMenuConfig)
                }
              >
                <FaTachometerAlt color="#55565a" />
                <NavLink
                  to="#"
                  className="font-bold text-[12px] leading-[10px] text-[#55565a]"
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
                      to="/fonction"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Roles
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
                      to="/viewapplicationuser"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Application et role
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/viewapplicationuser"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Module et role
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
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/viewtypeproduit"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Type produit
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/typechauffage"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Type chauffage
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/script"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Programme
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/script"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Installateur
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/script"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Status
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/script"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Provenance
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px]">
                    <Link
                      to="/historique"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Logs
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px] cursor-pointer">
                    <Link
                      to="/modelemail"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Model mail
                    </Link>
                  </div>
                  <div className="flex items-center gap-[15px] py-[5px] pl-[20px] cursor-pointer">
                    <Link
                      to="/workflow"
                      className="text-[12px] leading-[20px] text-[#7d839d] font-bold"
                    >
                      Etape de workflow
                    </Link>
                  </div>
                  <br />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarAgent;
