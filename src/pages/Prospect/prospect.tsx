import { Link } from "react-router-dom";
import Otbar from "../../components/Agents/Otbar";
import { useEffect, useState } from "react";
import { VilleInterface } from "../../Interfaces/VilleInterface";
import { RepositoryConfigInterface } from "../../Interfaces/RepositoryConfig.interface";
import VilleService from "../../Services/Ville.service";
import TypechauffageService from "../../Services/TypeChauffage.service";
import { TypeChauffageInterface } from "../../Interfaces/TypeChauffageInterface";
import { TypeRevenuInterface } from "../../Interfaces/TypeRevenuInterface";
import TypeRevenuService from "../../Services/TypeRevenu.service";

const Prospect = () => {
  const [ville, setVille] = useState<VilleInterface[] | null>(null);
  const [typechauffage, setTypechauffage] = useState<TypeChauffageInterface[] | null>(null);
  const [typerevenu, setTypeRevenu] = useState<TypeRevenuInterface[] | null>(null);

  const config: RepositoryConfigInterface = {
    appConfig: {},
    dialog: {},
  };

  const getVille = async () => {
    try {
      const response = await getVilleService.getVilles();
      setVille(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getchauffageService = async () => {
    try {
      const response = await getTypechauffageService.getTypeChauffages();
      setTypechauffage(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getTypeRevenu = async () => {
    try {
      const response = await getTypeRevenuService.getTypeRevenu();
      setTypeRevenu(response.data);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  const getVilleService = new VilleService(config);
  const getTypechauffageService = new TypechauffageService(config);
  const getTypeRevenuService = new TypeRevenuService(config);

  useEffect(() => {
    getVille();
    getchauffageService();
    getTypeRevenu();
  }, []);
  return (
    <>
      <Otbar title="Espace prospects" />
      <div className="px-16">
        <div className="flex">
          <h1 className="text-[#4c72c3]">
            <Link to="/prospect">Prospect /</Link>{" "}
          </h1>
          <h1 className="font-bold"> Création</h1>
        </div>
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          <h2 className="font-bold text-[20px]">Nouveau prospect</h2>
          <hr />
          <br />
          <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
            Créer
          </button>
          <br />
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Nom
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Prenom
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Telephone
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Adresse
              </label>
              <input
                type="text"
                name="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Ville
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                {ville?.map((ville) => (
                    <option value={ville.id}>{ville.nom}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Code Poastal
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Surface
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de chauffage
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                {typechauffage?.map((ville) => (
                    <option value={ville.id}>{ville.intitule}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Type de revenu
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                {typerevenu?.map((ville) => (
                    <option value={ville.id}>{ville.intitule}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prospect;
