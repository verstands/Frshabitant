import React, { useEffect, useState } from "react";
import { TypeProduitInterface } from "../../Interfaces/TypeProduitInterface";
import TypeProduitService from "../../Services/TypeProduit.service";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import { useNavigate } from "react-router-dom";
import Otbar from "../../components/Agents/Otbar";
import { Spinner } from "@material-tailwind/react";
import useHasModule from "../../components/Agents/useHasModule";
import WorkFlowInterService from "../../Services/Workflow.service";
import { EtapeWorkFlowInterface } from "../../Interfaces/EtapeWorkFlowInterface";

const CreateTypeProduit = () => {
  const [data, setdata] = useState<TypeProduitInterface>({
    titre: "",
    image: "",
    description: "",
    id_work : ""
  });
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<EtapeWorkFlowInterface[] | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };


  const workflowservice = new WorkFlowInterService(config);
  const typechauffageService = new TypeProduitService(config);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getRoleUser = async () => {
      try {
        const response = await workflowservice.getWorkFlow();
        setRole(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getRoleUser();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await typechauffageService.postTypeProduit(data);
    setLoading(false);
    navigate("/viewtypeproduit");
    try {
      setLoading(false);
    } catch (error: unknown) {
      console.error("Unexpected error:", error);
      setLoading(false);
    }
  };

  const hasModule = useHasModule('affichercampagne');

  if (!hasModule) {
    return <div className="font-bold"><center> <br /> Accès refusé</center></div>;
  }
  return (
    <>
      <Otbar title="Espace parametre" />
      <div className="px-40">
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <form onSubmit={handleSubmit}>
            <h2 className="font-normal text-[20px]">Ajouter un type produit</h2>
            <br />
            <hr />
            <br />
            <div>
              {loading ? (
                <div className="float-right">
                  <Spinner />
                </div>
              ) : (
                <button
                  type="submit"
                  className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right"
                >
                  Enregistrer
                </button>
              )}
            </div>
            <br />
            <div className="grid md:grid-cols-1 xl:grid-cols-1 gap-2">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="email"
                  name="titre"
                  value={data.titre}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="description"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Icon FontAwesome 
                </label>
                <input
                  type="text"
                  name="image"
                  id="email"
                  value={data.image}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  WorkFlow 
                </label>
                <select
                    name="id_work"
                    value={data.id_work}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">selectioner un workflow</option>
                    {role?.map((ville) => (
                      <option value={ville.id}>{ville.libelle}</option>
                    ))}
                  </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


export default CreateTypeProduit;