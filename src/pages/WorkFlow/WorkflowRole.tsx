import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { FaPlus } from "react-icons/fa";
import TableauWorkflowRole from "./TableauWorkflowRole";
import useAgentData from "../../components/Agents/useAgentData";
import { Spinner } from "@material-tailwind/react";
import { FonctionInterface } from "../../Interfaces/FonctionInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import FonctionService from "../../Services/Fonction.service";
import { CategorieWorkFlowInterface } from "../../Interfaces/CategorieWorkFlow";
import CategorieWorkFlowService from "../../Services/CategorieWorkFlow.service";
import { CategorieRoleInterface } from "../../Interfaces/CategorieRoleInterface";
import CategorieRoleService from "../../Services/CategorieRole.service";

const WorkflowRole = () => {
  const { isAdmin, accessDenied } = useAgentData();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [agent, setAgent] = useState<FonctionInterface[] | null>(null);
  const [categorie, setcategorie] = useState<CategorieWorkFlowInterface[] | null>(null);
  const [data, setdata] = useState<CategorieRoleInterface>({
    id_categorie: "",
    id_role: "",
  });

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const fonctionservice = new FonctionService(config);
  const categorieService = new CategorieWorkFlowService(config);
  const catgorieRole = new CategorieRoleService(config)

  const handleClose = () => {
    setIsOpen(!isOpen);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const getCategorie = async () => {
    try {
      const response = await categorieService.getCategorieWorkFlow();
      setcategorie(response.data);
      console.log(agent);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFonction();
    getCategorie();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await catgorieRole.postCategorieROle(data);
    setLoading(false);
    window.location.reload();
    console.log(data)
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <Otbar title="Espace categorie workflow et role" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-2">
          <h1 className="text-[#b3b4b6]">categorie / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-20">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right"
           onClick={handleClose}
          >
            <FaPlus /> Nouveau
          </button>
          <div className="py-4">
            <TableauWorkflowRole />
          </div>
          <br />
          <hr />
        </div>
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit}>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-xl w-full">
              <h3 className="text-2xl font-bold mb-4">
                Ajouter un categorie workflow dans un role
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
                    name="id_role"
                    value={data.id_role}
                    onChange={handleChange}
                    id=""
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
                    name="id_categorie"
                    id=""
                    value={data.id_categorie}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="">selectionner un module</option>
                    {
                        categorie?.map((r) => {
                            return <option value={r.id}>{r.libelle}</option>;
                        })
                    }
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
    </>
  );
};

export default WorkflowRole;
