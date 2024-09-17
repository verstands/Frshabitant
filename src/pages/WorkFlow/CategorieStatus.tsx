import React, { useEffect, useState } from "react";
import Otbar from "../../components/Agents/Otbar";
import { FaPlus } from "react-icons/fa";
import CategorieStatutTable from "./CategorieStatutTable";
import { EtapeWorkFlowInterface } from "../../Interfaces/EtapeWorkFlowInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import EtapeWorkFlowInterService from "../../Services/EtapeWorkFlow.service";
import { Spinner } from "@material-tailwind/react";
import { CategorieWorkFlowInterface } from "../../Interfaces/CategorieWorkFlow";
import CategorieWorkFlowService from "../../Services/CategorieWorkFlow.service";

const CategorieStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [order, setOrder] = useState(0);
  const [role, setRole] = useState<EtapeWorkFlowInterface[] | null>(null);
  const [data, setdata] = useState<CategorieWorkFlowInterface>({
    ordre: String(order),
    statut: "1",
    libelle: "",
    idetape : ""
  });
  const [loading, setLoading] = useState(false);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const RoleUserServices = new EtapeWorkFlowInterService(config);
  const categorieWorkService = new CategorieWorkFlowService(config);



  const getRoleUser = async () => {
    try {
      const response = await RoleUserServices.getEtapeWorkFlow();
      setRole(response.data);
      setLoading(false);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  useEffect(() => {
    setdata((prevState) => ({
      ...prevState,
      ordre: String(order), 
    }));
  }, [order]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await categorieWorkService.postCategorieWorkFlow(data);
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
    getRoleUser();
  }, []);

  return (
    <>
      <Otbar title="Espece Categorie des status" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-2">
          <h1 className="text-[#b3b4b6]">categorie statuts / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
      </div>
      <div className="px-10">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <button
            className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right"
            onClick={toggleModal}
          >
            <FaPlus /> Nouvelle categorie
          </button>
          <div className="py-20">
            <CategorieStatutTable />
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
              <h3 className="text-2xl font-bold mb-4">Categorie de status</h3>
              <hr />
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <label
                    htmlFor="id_typerevenu_from"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Labelle: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="libelle"
                    value={data.libelle}
                    onChange={handleChange}
                    id="id_typerevenu_from"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="information"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Etape Workflow
                  </label>
                  <select
                    name="idetape"
                    value={data.idetape}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">selectioner une etape workflow</option>
                    {role?.map((ville) => (
                      <option value={ville.id}>{ville.libelle}</option>
                    ))}
                  </select>
                </div>
             
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label
                      htmlFor="id_typerevenu_objet"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Ordre: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="bg-gray-200 p-2 rounded-l-lg"
                        onClick={() => setOrder(order > 0 ? order - 1 : 0)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name="objet"
                        id="id_typerevenu_objet"
                        value={order}
                        readOnly
                        className="text-center w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600"
                      />
                      <button
                        type="button"
                        className="bg-gray-200 p-2 rounded-r-lg"
                        onClick={() => setOrder(order + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="inline-flex items-center me-5 cursor-pointer">
                    <span className="ms-3 p-2 text-sm font-medium">
                      Active :
                    </span>
                    <div>
                      <label className="inline-flex items-center me-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                          checked
                        />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                      </label>
                    </div>
                  </label>
                </div>
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
        </form>
      )}
    </>
  );
};

export default CategorieStatus;