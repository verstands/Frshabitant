import Otbar from "../../components/Agents/Otbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import ProspectTable from "./ProspectTable";
import hasAccess from "../../components/hasAcess";

const ViewProspect = () => {
  return (
    <>
      <Otbar title="Espace prospect" />
      <div className="flex items-center p-2 justify-between">
        <div className="flex p-4">
          <h1 className="text-[#b3b4b6]">Prospect / </h1>
          <h1 className="font-bold"> Liste</h1>
        </div>
        {hasAccess("create") && (
          <Link to="/createProspect">
            <div className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              <FaPlus className="bg-white  p-1 rounded-[50%] text-[#1e58c1]" />
              <p className=" text-white">Nouveau prospect</p>
            </div>
          </Link>
        )}
      </div>
      {hasAccess("read") && (
        <div className="border-white m-3  bg-white p-10 rounded-[10px] shadow">
          {hasAccess("print") && (
            <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#1e58c1] p-3 rounded-[15px] float-right">
              Exporter ma rechreche
            </button>
          )}
          <br />
          <br />
          <div className="grid md:grid-cols-3 gap-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Capamgne
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Toutes les camapgnes</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Utilisateur
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les utilisateurs</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Status
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les status</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Produit
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les produits</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Invalidité
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les invalidité</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                NPR superieur ou egale à:
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Tous les provenances</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Affichage archivé
              </label>
              <select
                name=""
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id=""
              >
                <option value="">Afficher uniquement les non archivés</option>
              </select>
            </div>
            <div></div>
            <div>
              <button className="border-[#1e58c1] text-white flex items-center gap-3 bg-[#4aa873] p-3 rounded-[15px] float-right">
                Recherche
              </button>
            </div>
          </div>
          <br />
          <hr />
          <ProspectTable />
        </div>
      )}
    </>
  );
};

export default ViewProspect;
