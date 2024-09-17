import React, { useEffect, useState } from "react";
import Otbar from "../../../components/Agents/Otbar";
import { FaPlus } from "react-icons/fa";
import useAgentData from "../../../components/Agents/useAgentData";
import TableModule from "./TableModule";
import { Spinner } from "@material-tailwind/react";
import { FonctionInterface } from "../../../Interfaces/FonctionInterface";
import { RepositoryConfigInterface } from "../../../Interfaces/RepositoryConfig.interface";
import FonctionService from "../../../Services/Fonction.service";
import { ModulePersoInterface } from "../../../Interfaces/ModulePersoInterface";
import ModulePersoService from "../../../Services/ModulePerso.service";
import { ModuleInterface } from "../../../Interfaces/ModuleInterface";
import ModuleService from "../../../Services/Module.service";
import { MenuInterface } from "../../../Interfaces/MenuInterface";
import MenuService from "../../../Services/Menu.service";
import FonctionMenuService from "../../../Services/FonctionMenu.service";
import { FonctionMenuDInterface } from "../../../Interfaces/FonctionMenuDInterface";

const Modules = () => {
  const { isAdmin, accessDenied } = useAgentData();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agent, setAgent] = useState<FonctionInterface[] | null>(null);
  const [moduleperso, setModuleperso] = useState<ModulePersoInterface[] | null>(
    null
  );
  const [menu, setmenu] = useState<MenuInterface[] | null>(null);
  const [data, setdata] = useState<ModuleInterface>({
    id_fonction: "",
    id_module: "",
  });

  const [datamenu, setdatamenu] = useState<FonctionMenuDInterface>({
    idfonction: "",
    idmenu: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdatamenu((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const fonctionservice = new FonctionService(config);
  const modulepersodata = new ModulePersoService(config);
  const moduleservice = new ModuleService(config);
  const menuService = new MenuService(config);
  const fonctionmernuservice = new FonctionMenuService(config);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuOpen = () => {
    setisOpenMenu(!isOpenMenu);
  };

  const getMenu = async () => {
    try {
      const response = await menuService.getMenu();
      setmenu(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getFonction = async () => {
    try {
      const response = await fonctionservice.getFonction();
      setAgent(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getModule = async () => {
    try {
      const response = await modulepersodata.getModuleperso();
      setModuleperso(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await moduleservice.postModule(data);
    setLoading(false);
    window.location.reload();
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  const handleSubmitMenu = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fonctionmernuservice.postFonctionMenuService(datamenu);
    setLoading(false);
    window.location.reload();
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFonction();
    getModule();
    getMenu();
    setLoading(false);
  }, []);

  if (accessDenied) {
    return (
      <div className="font-bold">
        <center>
          {" "}
          <br /> Accès refusé
        </center>
      </div>
    );
  }
  return (
    <>
      {isAdmin && (
        <>
          <Otbar title="Espace Utilisateurs" />
          <div className="flex items-center p-2 justify-between">
            <div className="flex p-4">
              <h1 className="text-[#b3b4b6]">Module / </h1>
              <h1 className="font-bold"> Liste</h1>
            </div>
          </div>
          <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
            <div className="flex gap-2">
              <button
                className="border-[#1e58c1] text-white flex items-center gap-3 bg-blue-500 p-3 rounded-[15px] float-right"
                onClick={handleClose}
              >
                <FaPlus /> Ajouter un module dans un role
              </button>
              <button
                onClick={handleMenuOpen}
                className="border-[#1e58c1] text-white flex items-center gap-3 bg-blue-500 p-3 rounded-[15px] float-right"
              >
                <FaPlus /> Ajouter un menu dans un role
              </button>
            </div>
            <div className="py-4"></div>
            <br />
            <hr />
            <TableModule />
          </div>
        </>
      )}

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">
                Ajouter un module dans un role
              </h3>
              <hr />
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="id_typerevenu_from"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Role: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="id_fonction"
                    id=""
                    value={data.id_fonction}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">Selectionner un role</option>
                    {agent?.map((r) => {
                      return <option value={r.id}>{r.initule}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="id_typerevenu_from"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Module: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="id_module"
                    id=""
                    value={data.id_module}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">selectionner un module</option>
                    {moduleperso?.map((m) => {
                      return <option value={m.id}>{m.libelle}</option>;
                    })}
                  </select>
                </div>
                <div className="flex items-center py-4 gap-2 float-end">
                  <button
                    className="bg-red-500 p-2 pt-1 rounded-[5px] text-white flex items-center gap-1"
                    onClick={handleClose}
                  >
                    Fermer
                  </button>
                  {loading ? (
                    <div className="float-right">
                      <Spinner />
                    </div>
                  ) : (
                    <button className="bg-[#1d59cc] p-2 pt-1 rounded-[5px] text-white flex items-center gap-1">
                      Enregistrer
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {isOpenMenu && (
        <form onSubmit={handleSubmitMenu}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">
                Ajouter un module dans un menu
              </h3>
              <hr />
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="id_typerevenu_from"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Role: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="idfonction"
                    id=""
                    value={datamenu.idfonction}
                    onChange={handleChangeMenu}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">Selectionner un role</option>
                    {agent?.map((r) => {
                      return <option value={r.id}>{r.initule}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="id_typerevenu_from"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Menu: <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="idmenu"
                    id=""
                    value={datamenu.idmenu}
                    onChange={handleChangeMenu}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">selectionner un module</option>
                    {menu?.map((m) => {
                      return <option value={m.id}>{m.nom}</option>;
                    })}
                  </select>
                </div>
                <div className="flex items-center py-4 gap-2 float-end">
                  <button
                    className="bg-red-500 p-2 pt-1 rounded-[5px] text-white flex items-center gap-1"
                    onClick={handleMenuOpen}
                  >
                    Fermer
                  </button>
                  {loading ? (
                    <div className="float-right">
                      <Spinner />
                    </div>
                  ) : (
                    <button className="bg-[#1d59cc] p-2 pt-1 rounded-[5px] text-white flex items-center gap-1">
                      Enregistrer
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Modules;
